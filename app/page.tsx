import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Get the pathname
  const pathname = request.nextUrl.pathname;
  
  // Extract subdomain (everything before first dot)
  const subdomain = hostname.split('.')[0];
  
  // List of valid subdomains
  const subdomains = ['oriondesigns', 'cakesandlobster', 'flintsauto', 'jokersdental', 'plumberbros', 'punchoutfitness'];
  
  // If it's a valid subdomain, rewrite to that path
  if (subdomains.includes(subdomain)) {
    request.nextUrl.pathname = `/${subdomain}${pathname}`;
    return NextResponse.rewrite(request.nextUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_static|public|favicon.ico).*)'],
};