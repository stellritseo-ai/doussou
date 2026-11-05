import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "../assets/logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "Doussou Quality Braiding | Premier Hair Braiding, Glen Burnie MD" },
      {
        name: "description",
        content:
          "Doussou Quality Braiding - Premier African hair braiding studio located at 337 S Hospital Dr, Glen Burnie, MD 21061. Authentic knotless braids, box braids, cornrows, locs, and natural styling.",
      },
      { name: "author", content: "Doussou Quality Braiding" },
      { name: "geo.region", content: "US-MD" },
      { name: "geo.placename", content: "Glen Burnie, Maryland" },
      { name: "geo.position", content: "39.1557;-76.6267" },
      { name: "ICBM", content: "39.1557, -76.6267" },
      {
        property: "og:site_name",
        content: "Doussou Quality Braiding",
      },
      { property: "og:locale", content: "en_US" },
      {
        property: "og:title",
        content: "Doussou Quality Braiding | Premier Hair Braiding, Glen Burnie MD",
      },
      {
        property: "og:description",
        content:
          "Premier African hair braiding studio in Glen Burnie, MD. Specializing in knotless braids, box braids, feed-in cornrows, twists, and loc maintenance with scalp care.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.doussouqualitybraiding.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Doussou Quality Braiding | Glen Burnie, MD",
      },
      {
        name: "twitter:description",
        content:
          "Premier African hair braiding studio in Glen Burnie, MD. Master stylists crafting knotless braids, box braids, and protective styles.",
      },
      { name: "twitter:image", content: "https://www.doussouqualitybraiding.com/og-image.jpg" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/fav.png", type: "image/png", sizes: "512x512" },
      { rel: "icon", href: "/fav-192x192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/fav-96x96.png", type: "image/png", sizes: "96x96" },
      { rel: "icon", href: "/fav-48x48.png", type: "image/png", sizes: "48x48" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
