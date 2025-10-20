---
mode: "agent"
---

Your goal is to reconcile the `registryDependencies` of an item in `registry.json` based on the imports in its corresponding component file.

You are given a component name in the format `oui-*`. Ask for it if not given.

Check that the item exists in `registry.json` with `type` equal to `registry:component`. If it does not exist, respond with an error message.

The component file is located at `registry/components/${componentName}.tsx`.

Analyze the imports in this file. Look for imports from `@/registry/components/ui/*` (e.g., `import { Checkbox } from "@/registry/components/ui/oui-checkbox";` or `import { Avatar } from "@/registry/components/ui/avatar";`).

For each import path, extract the component name after the last `/` (e.g., `oui-checkbox` or `avatar`).

For each unique component name:

- If the name starts with `oui-`, derive the dependency as `"https://oui.mw10013.workers.dev/r/${name}.json"`
- Otherwise, derive the dependency as `"https://ui.shadcn.com/r/styles/new-york/${name}.json"`

Derive the required `registryDependencies` as a set of these strings.

Compare the derived required dependencies with the existing `registryDependencies` array in `registry.json` for the item.

Add any missing dependencies (those in the derived set but not in the existing array) to the `registryDependencies` array.

Flag any existing dependencies that are not in the derived set as potentially unused (e.g., log them for review), but do not remove them.

Update the `registry.json` file by modifying the `registryDependencies` array for the specified item to include the added dependencies.

Ensure the JSON remains valid after the update.
