import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// SEO: el dominio canónico es vantadb.vercel.app (conserva el historial SEO).
// El dominio automático vantadb-web.vercel.app sirve el mismo contenido —
// redirigir 308 permanente para no dividir ranking en contenido duplicado.
// Los previews efímeros (*.vercel.app con hash) se dejan intactos: Vercel ya
// les añade X-Robots-Tag: noindex.
const CANONICAL_HOST = "vantadb.vercel.app";
const AUTO_HOST = "vantadb-web.vercel.app";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host === AUTO_HOST) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
