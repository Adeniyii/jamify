import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (protectedRoutes.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.SPOTIFY_ACCESS_TOKEN;

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }
  }
}
