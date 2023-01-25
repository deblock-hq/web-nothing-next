import { NextRequest, URLPattern } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;
  const url = req.nextUrl.clone();
  url.pathname = "/fr-FR";

  // console.log("country,country", country, req.nextUrl.pathname);

  const stringCheck = ["/fr-FR", "/en-FR", "/en-GB"];

  if (
    req.nextUrl.href.includes("/fr-FR") ||
    req.nextUrl.href.includes("/en-FR") ||
    req.nextUrl.href.includes("/en-GB") ||
    req.nextUrl.href.includes("/de-FR") ||
    req.nextUrl.href.includes("/es-FR")
    // req.nextUrl.href.split("/").some((el) => stringCheck.includes(el))
  ) {
    return NextResponse.next();
  }
  // console.log("test", req.nextUrl.href.split("/"));
  if (
    country === "FR" &&
    !req.nextUrl.href.split("/").some((el) => stringCheck.includes(el))
  ) {
    return NextResponse.redirect(url);
  }

  console.log("URL", url, req);
}

export const config = {
  matcher: "/",
};
