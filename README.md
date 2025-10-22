# Oui

**React Aria Components with Shadcn characteristics**

Copy-and-paste react aria components that run side-by-side with shadcn components.

**Demo** → [https://oui.mw10013.workers.dev](https://oui.mw10013.workers.dev)

## Getting Started

Oui is designed to integrate seamlessly with the shadcn ecosystem. The components follow shadcn conventions and use the shadcn design system, so they'll feel familiar to anyone who has used shadcn before.

**1. Install Shadcn**

Install [shadcn](https://ui.shadcn.com/) using the official [instructions](https://ui.shadcn.com/docs/installation).

**2. Add oui components using the shadcn cli**

Use the shadcn [cli](https://ui.shadcn.com/docs/cli) to add oui components.

```
pnpm dlx shadcn@latest add https://oui.mw10013.workers.dev/r/[COMPONENT].json
npx shadcn@latest add https://oui.mw10013.workers.dev/r/[COMPONENT].json
bunx --bun shadcn@latest add https://oui.mw10013.workers.dev/r/[COMPONENT].json
```

You can use the [demo](https://oui.mw10013.workers.dev) to find components. View code for a component contains the cli to add.

Note: Oui does not overwrite any shadcn files so you can run oui and shadcn components side-by-side.

**3. Add all oui components (optional)**

You can add all oui components with a single command by adding `oui-index`. Only the core ui and ex (extension or reusable wrapper) components are added, not the demos.

```
pnpm dlx shadcn@latest add https://oui.mw10013.workers.dev/r/oui-index.json
npx shadcn@latest add https://oui.mw10013.workers.dev/r/oui-index.json
bunx --bun shadcn@latest add https://oui.mw10013.workers.dev/r/oui-index.json
```

```ts
import * as Oui from "@/components/ui/oui-index"

export default Component() {
  return (<Oui.Button>Hello, Oui</Oui.Button>)
}
```

## Local Dev

```
pnpm i
pnpm dev
```

## Deploy

- pnpm deploy:PRODUCTION
- Workers & Pages Settings: <WRANGLER_NAME>
  - Git repository: connect to git repo
  - Build configuration
    - Build command: CLOUDFLARE_ENV=production pnpm build
    - Deploy command: pnpm exec wrangler deploy

## Credit

Concept by [https://coss.com/origin](https://coss.com/origin)

## License

Licensed under the [MIT License](https://github.com/mw10013/oui/blob/main/LICENSE).

## TODO

- meta: dupes?
- v0: use client?

```
https://v0.dev/chat/api/open?url=https%3A%2F%2Foui.mw10013.workers.dev%2Fr%2Foui-button-demo.json
https://v0.dev/chat/api/open?url=https://oui.mw10013.workers.dev/r/oui-button-demo.json
```

- PR to add to shadcn: registries.json: "@oui": "https://oui.mw10013.workers.dev/r/{name}.json",
  - https://github.com/shadcn-ui/ui/pull/8490/files
- group: with ghost button icon
- autocomplete: button x
- checkbox: layout
- disclosure: animation
- seo
- readme
- theme toggle: use oui checkbox/focus ring? oui-toggle?
- jsdocs

- oui-use-react-router-routing.ts?
- eslint-disable-next-line react-hooks/exhaustive-deps
- font-heading
- favicon?
- contributing?
