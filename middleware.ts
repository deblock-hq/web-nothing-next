import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const country = req.geo?.country;

  console.log("country,country", country, req);
  return NextResponse.redirect("/fr-FR");
}
