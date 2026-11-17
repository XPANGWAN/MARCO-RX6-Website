const FILES = {
  universal: "app-universal-release.apk",
  arm64: "app-arm64-v8a-release.apk",
  arm32: "app-armeabi-v7a-release.apk"
};

export async function onRequest(context) {
  const variant = context.params.variant;
  const fileName = FILES[variant];
  if (!fileName) {
    return new Response("Unknown download", { status: 404 });
  }

  try {
    // Resolve the latest stable release and its exact APK asset.
    const releaseResponse = await fetch(
      "https://api.github.com/repos/XPANGWAN/Marco-RX6/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28"
        },
        cf: { cacheTtl: 300, cacheEverything: true }
      }
    );

    if (!releaseResponse.ok) {
      return new Response("Release information is temporarily unavailable", {
        status: 502
      });
    }

    const release = await releaseResponse.json();
    if (release.draft || release.prerelease) {
      return new Response("No stable release is available", { status: 404 });
    }

    const asset = Array.isArray(release.assets)
      ? release.assets.find(item => item.name === fileName)
      : null;

    if (!asset || !asset.browser_download_url) {
      return new Response("This APK is not available in the latest release", {
        status: 404
      });
    }

    // Forward byte-range headers so interrupted downloads can be resumed.
    const upstreamHeaders = new Headers();
    const range = context.request.headers.get("Range");
    const ifRange = context.request.headers.get("If-Range");
    if (range) upstreamHeaders.set("Range", range);
    if (ifRange) upstreamHeaders.set("If-Range", ifRange);

    // Follow GitHub's internal asset redirect on the server, not in the visitor's browser.
    const upstream = await fetch(asset.browser_download_url, {
      method: context.request.method === "HEAD" ? "HEAD" : "GET",
      headers: upstreamHeaders,
      redirect: "follow"
    });

    if (!upstream.ok) {
      return new Response("The APK download is temporarily unavailable", {
        status: upstream.status === 404 ? 404 : 502
      });
    }

    const headers = new Headers(upstream.headers);
    headers.set("Content-Type", "application/vnd.android.package-archive");
    headers.set("Content-Disposition", `attachment; filename="${fileName}"`);
    headers.set("Cache-Control", "private, no-store");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.delete("Location");

    if (upstream.status === 200 && !headers.has("Content-Length")) {
      headers.set("Content-Length", String(asset.size));
    }

    return new Response(
      context.request.method === "HEAD" ? null : upstream.body,
      {
        status: upstream.status,
        statusText: upstream.statusText,
        headers
      }
    );
  } catch (error) {
    return new Response("The APK download could not be started", {
      status: 502
    });
  }
}
