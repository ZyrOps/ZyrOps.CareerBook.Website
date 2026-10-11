import { NextResponse, type NextRequest } from "next/server";
import { getPage, isSectionKey } from "@/content";

// Partial prerendering serves the generic /[section]/[slug] shell with a 200 before notFound()
// can run, so unknown content paths are rejected here to return a hard 404 to crawlers.
export function proxy(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const [section, slug] = segments;
  const known = segments.length === 1 ? isSectionKey(section) : segments.length === 2 ? Boolean(getPage(section, slug)) : true;
  if (known) return NextResponse.next();
  return NextResponse.rewrite(new URL("/_not-found", request.url), { status: 404 });
}

export const config = {
  matcher: ["/((?!api|_next|contact$|request-demo$|opengraph-image|icon|manifest|robots|sitemap|maps|brand|.*\\..*).+)"],
};
