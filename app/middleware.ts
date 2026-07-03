import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Extract subdomain
  const parts = host.split('.');
  const subdomain = parts.length > 2 ? parts[0] : null;

  // Route based on subdomain
  if (subdomain === 'oriondesigns') {
    url.pathname = '/oriondesigns';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'cakesandlobster') {
    url.pathname = '/cakesandlobster';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'flintsauto') {
    url.pathname = '/flintsauto';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'jokersdental') {
    url.pathname = '/jokersdental';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'plumberbros') {
    url.pathname = '/plumberbros';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'punchoutfitness') {
    url.pathname = '/punchoutfitness';
    return NextResponse.rewrite(url);
  }

  // Default: serve main domain normally
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_static|public|favicon.ico).*)'],
};