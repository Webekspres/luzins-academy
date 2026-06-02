import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
  // Vercel deployment - zero config default, but we add route rules
  routeRules: {
    // Cache control for static assets indefinitely
    "/_/**": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    // Cache homepage for 1 hour
    "/": { cache: { maxAge: 60 * 60 } },
    // ISR for dynamic routes with 1 hour revalidation
    "/**": { isr: 3600 },
  },
});
