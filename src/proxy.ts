import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. Define the supported locales
const locales = ["de", "en"];
const defaultLocale = "de";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 2. EXCLUSION RULE: Let static files, Sanity, and API pass through
  // This is the most important part to stop the "Infinite Refresh"
  if (
    pathname.includes(".") || // Ignores globals.css, favicon.ico, etc.
    pathname.startsWith("/_next") || // Ignores internal Next.js files
    pathname.startsWith("/api") || // Ignores API routes
    pathname.startsWith("/admin") // Ignores Sanity Studio
  ) {
    return NextResponse.next();
  }

  // 3. CHECK FOR LOCALE: Does the URL already start with /de or /en?
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 4. REDIRECT: If no locale, send them to the default (/de)
  // We use the URL constructor as seen in the official docs
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|admin).*)"],
};
