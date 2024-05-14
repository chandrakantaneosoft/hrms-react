import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // const { url } = request

  const token =
    request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token')
  const { pathname } = request.nextUrl

  // const stagedit = /\/stages\/edit\/([a-zA-Z0-9_-]+)/
  // const enquiryTypeEdit = /\/enquiry-type\/edit\/([a-zA-Z0-9_-]+)/
  // const enquiryTypeMapStage = /\/enquiry-type\/map-stage\/([a-zA-Z0-9_-]+)/
  // const enquiryTypeMapStageEdit = /\/enquiry-type\/map-stage\/\/edit\/([a-zA-Z0-9_-]+)/
  // const enquiryDetails = /\/enquiries\/detail\/([a-zA-Z0-9_-]+)/

  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    pathname == '/login/'
  ) {
    if (token) {
      if (
        // pathname == "/" ||
        pathname == '/login/'
      ) {
        return NextResponse.redirect(new URL('/home', request.url))
      }
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
  }

  if (!token) {
    console.log('login redirect')

    return NextResponse.redirect(new URL('/login', request.url))
  } else if (
    // pathname == "/" ||
    pathname == '/login/'
  ) {
    // return NextResponse.redirect(new URL('/home', request.url))
  }
}
