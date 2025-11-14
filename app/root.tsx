import type { Route } from "./+types/root";
import { themeSessionResolver } from "@/lib/theme.server";
import * as OuiReactRouter from "@/registry/default/components/oui-react-router-index";
import * as ReactRouter from "react-router";
import * as RemixThemes from "remix-themes";
import "@/app/app.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { env } from "cloudflare:workers";

/** Sets a minimal transparent favicon to avoid 404 errors. */
export function links() {
  return [
    {
      rel: "icon",
      href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      type: "image/png",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
    isAnalyticsEnabled: env.ENVIRONMENT === "production",
  };
}

function Html({
  children,
  ssrTheme,
  isAnalyticsEnabled,
}: {
  children: React.ReactNode;
  ssrTheme: boolean;
  isAnalyticsEnabled: boolean;
}) {
  const [theme] = RemixThemes.useTheme();
  return (
    <html lang="en" className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Oui - React Aria Components with Shadcn characteristics</title>
        <meta
          name="description"
          content="Copy-and-paste react aria components that run side-by-side with shadcn components."
        />
        <meta
          property="og:title"
          content="Oui - React Aria Components with Shadcn characteristics"
        />
        <meta
          property="og:description"
          content="Copy-and-paste react aria components that run side-by-side with shadcn components."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oui.mw10013.workers.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Oui - React Aria Components with Shadcn characteristics"
        />
        <meta
          name="twitter:description"
          content="Copy-and-paste react aria components that run side-by-side with shadcn components."
        />
        <meta
          name="keywords"
          content="react, aria, components, shadcn, ui, library, copy-paste"
        />
        <meta name="author" content="mw10013" />
        <RemixThemes.PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
        <ReactRouter.Links />
      </head>
      <body>
        <OuiReactRouter.ReactRouterProvider>
          <div className="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
            <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </div>
          <ReactRouter.ScrollRestoration />
          <ReactRouter.Scripts />
          {isAnalyticsEnabled && (
            <script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon='{"token": "509aca9b19d943b7b89f127c71a4fa2c"}'
            ></script>
          )}
        </OuiReactRouter.ReactRouterProvider>
      </body>
    </html>
  );
}

/**
 * Uses root loader data, if available, for theme and analytics settings.
 * A catch-all route (e.g., $.tsx) may be needed to ensure root loader runs on 404 pages.
 */
export function Layout({ children }: { children: React.ReactNode }) {
  const data = ReactRouter.unstable_useRoute("root");
  return (
    <RemixThemes.ThemeProvider
      specifiedTheme={data.loaderData?.theme ?? null}
      themeAction="/action/set-theme"
      disableTransitionOnThemeChange
    >
      <Html
        ssrTheme={Boolean(data.loaderData?.theme)}
        isAnalyticsEnabled={Boolean(data.loaderData?.isAnalyticsEnabled)}
      >
        {children}
      </Html>
    </RemixThemes.ThemeProvider>
  );
}

export default function App() {
  return <ReactRouter.Outlet />;
}

export const ErrorBoundary = OuiReactRouter.ReactRouterErrorBoundary;
