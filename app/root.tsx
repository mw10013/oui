import type { NavigateOptions } from "react-router";
import type { Route } from "./+types/root";
import { themeSessionResolver } from "@/lib/theme.server";
import * as Rac from "react-aria-components";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useHref,
  useNavigate,
  useRouteLoaderData,
} from "react-router";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import "@/app/app.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return { theme: getTheme() };
}

// https://github.com/adobe/react-spectrum/issues/6397
// https://github.com/argos-ci/argos/blob/4822931b05c78e1b4a79e15cf4437fb0297369a6/apps/frontend/src/router.tsx#L21-L31
function useHrefEx(href: string) {
  const resolvedHref = useHref(href);
  if (
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("mailto:")
  ) {
    return href;
  }
  return resolvedHref;
}

function Html({
  children,
  data,
}: {
  children: React.ReactNode;
  data: { theme: string | null } | undefined;
}) {
  const [theme] = useTheme();
  const navigate = useNavigate();
  return (
    <html
      lang="en"
      className={theme === Theme.DARK ? "dark" : ""}
      data-theme={theme ?? ""}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data?.theme)} />
        <Links />
      </head>
      <body>
        {/* useNavigate returns a Promise, but RouterProvider expects void; void ignores the Promise */}
        <Rac.RouterProvider
          navigate={(path, options) => void navigate(path, options)}
          useHref={useHrefEx}
        >
          <div className="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </div>
        </Rac.RouterProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData("root")!;
  return (
    <ThemeProvider
      specifiedTheme={data.theme ?? null}
      themeAction="/action/set-theme"
    >
      <Html data={data}>{children}</Html>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
