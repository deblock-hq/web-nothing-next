import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;

  console.log("country,country", country);
  if (country === "FR")
    return NextResponse.redirect(new URL("/fr-FR", req.url));
}

export const config = {
  matcher: "/",
};
