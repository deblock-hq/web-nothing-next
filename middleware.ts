import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;

  console.log("country,country", country);
  // return NextResponse.redirect("/fr-FR");
}