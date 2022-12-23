import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;

  console.log("country,country", country);

  if (req.nextUrl.pathname === "/fr-FR") {
    return NextResponse.next();
  }

  if (country === "FR" && req.nextUrl.pathname == "/") {
    return NextResponse.redirect("/fr-FR");
  }
}

export const config = {
  matcher: "/",
};
