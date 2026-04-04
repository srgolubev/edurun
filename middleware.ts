import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_USER = "mcvp";
const AUTH_PASS = "edurun2026";

const BOT_UA_RE =
  /Telegram|WhatsApp|vkShare|VKontakte|Viber|Slack|Discord|Twitter|facebook|Iframely|Embedly|LinkedInBot|Pinterestbot|SkypeUriPreview|Google|Yahoo|Bing|Yandex|Mail\.RU|Applebot/i;

// AUTH TEMPORARILY DISABLED
export function middleware(_request: NextRequest) {
  return NextResponse.next();

  /* ORIGINAL AUTH — uncomment to re-enable
  const ua = _request.headers.get("user-agent") || "";

  if (BOT_UA_RE.test(ua)) {
    return NextResponse.next();
  }

  const auth = _request.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === AUTH_USER && pass === AUTH_PASS) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Zabeg"',
    },
  });
  */
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
