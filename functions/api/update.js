const RELEASE_API = "https://api.github.com/repos/XPANGWAN/Marco-RX6/releases/latest";
const DOWNLOAD_PAGE = "https://marcorx6app.dpdns.org/#download";

export async function onRequest() {
  try {
    const response = await fetch(RELEASE_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "MARCO-RX6-Website"
      },
      cf: { cacheTtl: 60, cacheEverything: true }
    });

    if (!response.ok) {
      return Response.json({ error: "Release information is temporarily unavailable" }, {
        status: 503,
        headers: { "Cache-Control": "no-store" }
      });
    }

    const release = await response.json();
    if (release.draft || release.prerelease || !release.tag_name) {
      return Response.json({ error: "No stable release is available" }, {
        status: 404,
        headers: { "Cache-Control": "no-store" }
      });
    }

    const versionName = String(release.tag_name).replace(/^[vV]/, "");
    const notes = String(release.body || "");
    const codeMatch = notes.match(/(?:version code|رمز الإصدار).*?(\d+)/i);
    const versionCode = codeMatch ? Number.parseInt(codeMatch[1], 10) : null;

    return Response.json({
      versionName,
      versionCode,
      releaseNotes: notes,
      downloadPageUrl: DOWNLOAD_PAGE,
      publishedAt: release.published_at || null,
      assets: (Array.isArray(release.assets) ? release.assets : []).map(asset => ({ name: asset.name, size: asset.size })),
      variants: [
        { id: "universal", fileName: "app-universal-release.apk" },
        { id: "arm64", fileName: "app-arm64-v8a-release.apk" },
        { id: "arm32", fileName: "app-armeabi-v7a-release.apk" }
      ]
    }, {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=60",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (_) {
    return Response.json({ error: "Unable to read release information" }, {
      status: 503,
      headers: { "Cache-Control": "no-store" }
    });
  }
}
