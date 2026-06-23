import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Extract subdomain
  const parts = host.split('.');
  const subdomain = parts.length > 2 ? parts[0] : null;

  // Route based on subdomain
  if (subdomain === 'gym') {
    url.pathname = '/projects/gym';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'restaurant') {
    url.pathname = '/projects/restaurant';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'shop') {
    url.pathname = '/projects/shop';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'roofing') {
    url.pathname = '/projects/roofing';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'tattoo') {
    url.pathname = '/projects/tattoo';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'landing') {
    url.pathname = '/projects/landing';
    return NextResponse.rewrite(url);
  }

  // Default: serve main domain normally
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_static|public|favicon.ico).*)'],
};