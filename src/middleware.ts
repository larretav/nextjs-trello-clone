import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  // '/',
  '/sign-in',
  '/sign-up',
]);

export default clerkMiddleware(
  (auth, req) => {
    const userId = auth().userId;
    const orgId = auth().orgId;
    const pathName = req.nextUrl.pathname

    let pathSelectOrg = '/select-org';

    // console.log({ userId, orgId, pathName })
    if (!userId && !isPublicRoute(req))
      auth().redirectToSignIn({ returnBackUrl: req.url });

    if (userId && !orgId && pathName !== pathSelectOrg)
      return NextResponse.redirect(new URL(pathSelectOrg, req.url));

    if (userId && isPublicRoute(req)) {
      if (orgId)
        pathSelectOrg = `/organization/${orgId}`;
      return NextResponse.redirect(new URL(pathSelectOrg, req.url));
    }


  },
  {
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
    afterSignInUrl: '/',
    afterSignUpUrl: '/',
    authorizedParties: [
      // '/',
    ],
  }
)

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};