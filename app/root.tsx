import type { Route } from "./+types/root";
import { themeSessionResolver } from "@/lib/theme.server";
import { ReactRouterProvider } from "@/registry/default/components/oui-react-router-provider";
import {
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  unstable_useRoute,
} from "react-router";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import "@/app/app.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactRouterErrorBoundary } from "@/registry/default/components/oui-react-router-error-boundary";
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
  return { theme: getTheme(), environment: env.ENVIRONMENT };
}

function Html({
  children,
  ssrTheme,
  environment,
}: {
  children: React.ReactNode;
  ssrTheme: boolean;
  environment: string;
}) {
  const [theme] = useTheme();
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
        <PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
        <Links />
      </head>
      <body>
        <ReactRouterProvider>
          <div className="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
            <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </div>
        </ReactRouterProvider>
        <ScrollRestoration />
        <Scripts />
        {environment === "production" && (
          <>
            {/* Cloudflare Web Analytics */}
            <script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon='{"token": "509aca9b19d943b7b89f127c71a4fa2c"}'
            ></script>
            {/* End Cloudflare Web Analytics */}
          </>
        )}
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = unstable_useRoute("root");
  return (
    <ThemeProvider
      specifiedTheme={data.loaderData?.theme ?? null}
      themeAction="/action/set-theme"
      disableTransitionOnThemeChange
    >
      <Html
        ssrTheme={Boolean(data.loaderData?.theme)}
        environment={data.loaderData?.environment ?? "local"}
      >
        {children}
      </Html>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export { ReactRouterErrorBoundary as ErrorBoundary };
