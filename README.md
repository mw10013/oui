# Oui

- React Aria Components with Shadcn characteristics
- https://oui.mw10013.workers.dev

## TODO

- tooltip
- registry recon component prompt: handle shadcn new-york
- registry:build: delete r/\*
- tags
- code
- search
- index
- browser console.log errors
- sidebar-ex: SidebarTreeEx, SidebarTrigger?, probably not SidebarListBox

## Local Dev

- pnpm i
- pnpm dev

## Deploy

- pnpm deploy:PRODUCTION
- Workers & Pages Settings: <WRANGLER_NAME>
  - Git repository: connect to git repo
  - Build configuration
    - Build command: CLOUDFLARE_ENV=production pnpm build
    - Deploy command: pnpm exec wrangler deploy

## Shadcn

```
pnpm exec shadcn help
pnpm exec shadcn help build
pnpm exec shadcn add button
pnpm exec shadcn add --all --yes --overwrite
pnpm exec shadcn migrate radix
pnpm registry:build

```

### VariantProps

May need to patch to import `VariantProps` as a type, especially `sidebar.tsx`.

```
import type { VariantProps } from "class-variance-authority";
```

## React Aria Components

- Modals are Massive (block everything), Popovers are Petite (just pop up), both make Dialog Content (happy, accessible contents)
- Menus mean Motion (action), Dialogs deliver Depth (details), keep them separate and do not Nest.

## Tailwind

- **Utility Class:** A class applying a specific, predefined style rule.
- **Variant (Condition):** Controls when a utility applies (e.g., `hover:`, `md:`, `dark:`).
- **Modifier (Adjustment):** Adjusts a utility's value or behavior (e.g., `/50`, `-`, `!`).
- **Property:** The standard CSS property name targeted by utilities or used in arbitrary syntax (`[property:value]`).
- **Theme Mapping:** Maps semantic utility names (e.g., `primary`) via `@theme` (e.g., `--color-primary`) to CSS variables (e.g., `var(--primary)`) holding the actual values.

- https://nicolasgallagher.com/about-html-semantics-front-end-architecture/#component-modifiers

