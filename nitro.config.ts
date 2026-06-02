import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
  // Vercel deployment
  prerender: {
    routes: ["/"],
    crawlLinks: true,
  },
  routeRules: {
    // Cache control for static assets
    "/_/*": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    // SSR for all routes
    "/**": { cache: false },
  },
});
