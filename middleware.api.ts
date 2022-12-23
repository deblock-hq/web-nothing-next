import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const country = req.geo?.country;

  console.log("country,country", country);
}
