import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import ogImage from "../assets/og-image.png?url";
import faviconIco from "../assets/favicons/favicon.ico?url";
import faviconSvg from "../assets/favicons/favicon.svg?url";
import favicon96 from "../assets/favicons/favicon-96x96.png?url";
import appleTouchIcon from "../assets/favicons/apple-touch-icon.png?url";
import manifest from "../assets/favicons/site.webmanifest?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Terjadi kesalahan saat memuat halaman
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ada masalah sistem. Silakan coba memuat ulang halaman atau kembali ke beranda.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Coba Lagi
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luzins Academy Indonesia — Pelatihan Public Speaking Profesional" },
      {
        name: "description",
        content:
          "Latih skill komunikasi & seni berbicara bersama trainer berpengalaman Coach Ibnu Jabir. Online & offline, berlisensi resmi Kemenkumham RI.",
      },
      { name: "author", content: "Luzins Academy Indonesia" },
      { property: "og:title", content: "Luzins Academy Indonesia" },
      {
        property: "og:description",
        content:
          "Latih skill komunikasi & seni berbicara bersama trainer berpengalaman Coach Ibnu Jabir. Online & offline, berlisensi resmi Kemenkumham RI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Luzins Academy Indonesia" },
      {
        name: "twitter:description",
        content:
          "Latih skill komunikasi & seni berbicara bersama trainer berpengalaman Coach Ibnu Jabir. Online & offline, berlisensi resmi Kemenkumham RI.",
      },
      {
        property: "og:image",
        content: ogImage,
      },
      {
        name: "twitter:image",
        content: ogImage,
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: faviconSvg },
      { rel: "icon", type: "image/png", sizes: "96x96", href: favicon96 },
      { rel: "shortcut icon", href: faviconIco },
      { rel: "apple-touch-icon", sizes: "180x180", href: appleTouchIcon },
      { rel: "manifest", href: manifest },
      { name: "theme-color", content: "#1c1b1f" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
