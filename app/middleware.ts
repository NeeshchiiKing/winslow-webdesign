import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Extract subdomain
  const parts = host.split('.');
  const subdomain = parts.length > 2 ? parts[0] : null;
  
  // List of valid subdomains
  const subdomains = ['oriondesigns', 'cakesandlobster', 'flintsauto', 'jokersdental', 'plumberbros', 'punchoutfitness'];
  
  // If it's a valid subdomain, rewrite to that path
  if (subdomain && subdomains.includes(subdomain)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_static|public|favicon.ico).*)'],
};