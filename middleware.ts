import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;

  console.log("country,country", country);
  return NextResponse.redirect(new URL("/about-2", req.url));
}

export const config = {
  matcher: "/about/:path*",
};
