import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  
  // Extract subdomain (first part before the dot)
  const subdomain = hostname.split('.')[0];
  
  // List of project subdomains
  const projectSubdomains = {
    'oriondesigns': 'oriondesigns',
    'cakesandlobster': 'cakesandlobster',
    'flintsauto': 'flintsauto',
    'jokersdental': 'jokersdental',
    'plumberbros': 'plumberbros',
    'punchoutfitness': 'punchoutfitness',
  };
  
  // If subdomain matches a project, rewrite to that project page
  if (projectSubdomains[subdomain as keyof typeof projectSubdomains]) {
    const projectPath = projectSubdomains[subdomain as keyof typeof projectSubdomains];
    request.nextUrl.pathname = `/${projectPath}${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(request.nextUrl);
  }
  
  // Default: continue to main site
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|_static|_vercel|favicon.ico).*)'],
};