const FILES = {
  universal: "app-universal-release.apk",
  arm64: "app-arm64-v8a-release.apk",
  arm32: "app-armeabi-v7a-release.apk"
};

const RELEASE_API =
  "https://api.github.com/repos/XPANGWAN/Marco-RX6/releases/latest";

export async function onRequest(context) {
  const variant = context.params.variant;
  const fileName = FILES[variant];

  if (!fileName) {
    return new Response("Unknown download variant", {
      status: 404,
      headers: { "Cache-Control": "no-store" }
    });
  }

  try {
    // GitHub's API requires a User-Agent. Without it, the lookup can fail
    // before the route ever sees the APK assets.
    const releaseResponse = await fetch(RELEASE_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "MARCO-RX6-Website"
      },
      cf: { cacheTtl: 30, cacheEverything: true }
    });

    if (!releaseResponse.ok) {
      return new Response("Release information is temporarily unavailable", {
        status: 503,
        headers: { "Cache-Control": "no-store" }
      });
    }

    const release = await releaseResponse.json();
    if (release.draft || release.prerelease || !release.tag_name) {
      return new Response("No stable release is available", {
        status: 503,
        headers: { "Cache-Control": "no-store" }
      });
    }

    const assets = Array.isArray(release.assets) ? release.assets : [];
    const asset = assets.find(item => item.name === fileName);

    if (!asset || !asset.browser_download_url) {
      return new Response(
        "This APK variant is not available in the latest stable release",
        {
          status: 503,
          headers: { "Cache-Control": "no-store" }
        }
      );
    }

    // Redirect the client to GitHub's official asset URL instead of proxying
    // a large APK through Cloudflare Workers. This supports normal browser and
    // Android DownloadManager downloads, including byte-range resume requests.
    return new Response(null, {
      status: 302,
      headers: {
        Location: asset.browser_download_url,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (_) {
    return new Response("The APK download could not be started", {
      status: 502,
      headers: { "Cache-Control": "no-store" }
    });
  }
}
