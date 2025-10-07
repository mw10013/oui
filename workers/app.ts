import { createRequestHandler } from "react-router";

export default {
  async fetch(request, env, _ctx) {
    if (env.ENVIRONMENT === "local") {
      if (new URL(request.url).pathname === "/.well-known/appspecific/com.chrome.devtools.json") {
        return new Response(null, { status: 204 });
      }
    } 
    const requestHandler = createRequestHandler(
      () => import("virtual:react-router/server-build"),
      import.meta.env.MODE,
    );
    return await requestHandler(request);
  },
} satisfies ExportedHandler<Env>;
