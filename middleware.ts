import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define routes that should be accessible publicly without authentication
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    // Protect the route if it's not a public route
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Apply middleware to everything except Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run middleware for API routes
    '/(api|trpc)(.*)',
  ],
};
