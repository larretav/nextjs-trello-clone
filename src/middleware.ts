import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// export default clerkMiddleware({
//   signInUrl: '/sign-in',
//   signUpUrl: '/sign-up',
//   afterSignInUrl: '/',
//   afterSignUpUrl: '/',
//   authorizedParties: ['/'],
// });

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in',
  '/sign-up',
]);

export default clerkMiddleware((auth, req) => {
  const userId = auth().userId

  if (!userId && !isPublicRoute(req)) auth().redirectToSignIn()

  // if (userId && isPublicRoute(req)) {
  let path = '/select-org';

  if (auth().orgId)
    path = `/organization/${auth().orgId}`

  const orgSelection = new URL(path, req.url);
  NextResponse.redirect(orgSelection);
  // }


},
  {
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
    afterSignInUrl: '/',
    afterSignUpUrl: '/',
    authorizedParties: ['/'],
  }
)

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};