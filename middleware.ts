import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;
  const url = req.nextUrl.clone();
  url.pathname = "/fr-FR";

  console.log("country,country", country, req.nextUrl.pathname);

  if (req.nextUrl.pathname == "/fr-FR") {
    console.log("path2", req.nextUrl.pathname);

    return NextResponse.next();
  }

  if (country === "FR") {
    console.log("path", req.nextUrl.pathname, req.nextUrl);

    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/",
};
