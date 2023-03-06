import { NextRequest, URLPattern } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

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
    req.nextUrl.href.split("/").some((el) => stringCheck.includes(el))
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

  if (req.nextUrl.locale === "default") {
    const locale = req.cookies.get("NEXT_LOCALE")?.value || "/";

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }
  // console.log("URL", url, req);
}

export const config = {
  matcher: "/",
};
