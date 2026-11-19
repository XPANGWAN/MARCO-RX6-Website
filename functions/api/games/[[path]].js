const BLOGGER_ORIGIN = "https://marcorx6.blogspot.com";
const CACHE_SECONDS = 60;

function jsonError(message, status) {
  return Response.json({ error: message }, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

export async function onRequest(context) {
  const request = context.request;

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Accept, Content-Type",
        "Access-Control-Max-Age": "86400"
      }
    });
  }

  if (request.method !== "GET") {
    return jsonError("Method not allowed", 405);
  }

  try {
    const incoming = new URL(request.url);
    const prefix = "/api/games";
    const suffix = decodeURIComponent(incoming.pathname.slice(prefix.length));
    let bloggerPath = "/feeds/posts/default";

    // Keep compatibility with Blogger's label-feed URL structure:
    // /api/games/-/{label}
    if (suffix && suffix !== "/") {
      const match = suffix.match(/^\/-\/([^/]+)\/?$/);
      if (!match) return jsonError("Unknown games feed route", 404);
      bloggerPath += "/-/" + encodeURIComponent(match[1]);
    }

    const upstream = new URL(BLOGGER_ORIGIN + bloggerPath);
    upstream.searchParams.set("alt", "json");

    const requestedMax = Number.parseInt(incoming.searchParams.get("max-results") || "100", 10);
    const requestedStart = Number.parseInt(incoming.searchParams.get("start-index") || "1", 10);

    if (!Number.isInteger(requestedMax) || requestedMax < 1 ||
        !Number.isInteger(requestedStart) || requestedStart < 1) {
      return jsonError("Invalid pagination parameters", 400);
    }

    upstream.searchParams.set("max-results", String(Math.min(requestedMax, 100)));
    upstream.searchParams.set("start-index", String(Math.min(requestedStart, 5000)));

    const response = await fetch(upstream.toString(), {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "User-Agent": "MARCO-RX6-Website/1.0"
      },
      cf: {
        cacheTtl: CACHE_SECONDS,
        cacheEverything: true
      }
    });

    if (!response.ok) {
      return jsonError("The game feed is temporarily unavailable", 502);
    }

    const contentType = response.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().includes("json")) {
      return jsonError("The game feed returned an unexpected response", 502);
    }

    const body = await response.text();
    // Validate JSON before returning it to clients.
    JSON.parse(body);

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=30, s-maxage=60",
        "Access-Control-Allow-Origin": "*",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (_) {
    return jsonError("Unable to retrieve the game feed", 502);
  }
}
