import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextRequest) => {
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};
