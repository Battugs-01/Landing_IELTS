import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "mn"],

  // Used when no locale matches
  defaultLocale: "mn",
  localeDetection: false,
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(mn|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
