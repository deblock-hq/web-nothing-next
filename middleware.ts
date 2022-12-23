import { NextRequest, URLPattern } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;
  const url = req.nextUrl.clone();
  url.pathname = "/fr-FR";

  console.log("country,country", country, req.nextUrl.pathname);

  if (
    req.nextUrl.href.includes("/fr-FR") ||
    req.nextUrl.href.includes("/en-FR")
  ) {
    return NextResponse.next();
  }

  if (
    country === "FR" &&
    (!req.nextUrl.href.includes("/fr-FR") ||
      !req.nextUrl.href.includes("/en-FR"))
  ) {
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/",
};
