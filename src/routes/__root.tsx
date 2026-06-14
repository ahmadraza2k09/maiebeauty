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
import { LanguageProvider } from "../lib/i18n";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

import logoBlack from "../assets/logo-black.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl gradient-text">404</h1>
        <h2 className="mt-4 text-xl">Página no encontrada</h2>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full gradient-primary text-white px-6 py-3 text-sm">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Algo salió mal</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full gradient-primary text-white px-6 py-3 text-sm">
          Reintentar
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maie Ibarra · Luxury Beauty Studio" },
      { name: "description", content: "Estudio de belleza premium en Texas. Builder Gel, Dual System, Pedicure, Lashes, Lash Lifting y Laminado de Cejas." },
      { name: "author", content: "Maie Ibarra" },
      { property: "og:title", content: "Maie Ibarra · Luxury Beauty Studio" },
      { property: "og:description", content: "Estudio de belleza premium en Texas. Builder Gel, Dual System, Pedicure, Lashes, Lash Lifting y Laminado de Cejas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Maie Ibarra · Luxury Beauty Studio" },
      { name: "twitter:description", content: "Estudio de belleza premium en Texas. Builder Gel, Dual System, Pedicure, Lashes, Lash Lifting y Laminado de Cejas." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b368c58-992f-49d6-a434-688402bc971b/id-preview-f0e2b3c5--eae7636d-c9ad-4caa-923f-1302c34eed53.lovable.app-1781459835272.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b368c58-992f-49d6-a434-688402bc971b/id-preview-f0e2b3c5--eae7636d-c9ad-4caa-923f-1302c34eed53.lovable.app-1781459835272.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoBlack.url },
      { rel: "apple-touch-icon", href: logoBlack.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head><HeadContent /></head>
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
      <LanguageProvider>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Navigation />
          <main className="flex-1 pt-24">
            <Outlet />
          </main>
          <Footer />
          
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
