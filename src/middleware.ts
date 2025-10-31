import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const guestId = req.cookies.get("guest")?.value;
  const res = NextResponse.next();

  if (!guestId) {
    res.cookies.set("guest", Math.random().toString(36).slice(2), {
      path: "/",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 60, // 60 days
    });
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|api/webhooks).*)"],
};
