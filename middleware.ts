import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  const parts = host.split('.');
  const subdomain = parts.length > 2 ? parts[0] : null;

  if (subdomain === 'oriondesigns') {
    url.pathname = '/projects/oriondesigns';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'standingcafe') {
    url.pathname = '/projects/standingcafe';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'highdesert') {
    url.pathname = '/projects/highdesert';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'winslowfitness') {
    url.pathname = '/projects/winslowfitness';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'cornerstonedental') {
    url.pathname = '/projects/cornerstonedental';
    return NextResponse.rewrite(url);
  }
  if (subdomain === 'route66auto') {
    url.pathname = '/projects/route66auto';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_static|public|favicon.ico).*)'],
};