import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo?.country;

  console.log("country,country", country);
  // if (country === "FR") return NextResponse.redirect("/fr-FR");
}
