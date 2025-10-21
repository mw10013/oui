---
mode: "agent"
---

Your goal is to reconcile the `registryDependencies` of an item in `registry.json` based on the imports in its corresponding component file.

You are given either a single component name in the format `oui-*`, a single filename in the format `oui-*.tsx`, or a list of component names or filenames. Ask for it if not given.

If given a list, apply the prompt instructions to each one iteratively. Do not try to "batch". Complete the first item completely and then move to the next one. If there is an interruption, we don't want to lose work.

For each component name or filename:

You are given either a component name in the format `oui-*` or a filename in the format `oui-*.tsx`. Ask for it if not given.

If given a component name, derive the filename as `${componentName}.tsx`.
If given a filename, derive the component name by removing the `.tsx` extension.

Check that the component file exists at `registry/components/${filename}`. If it does not exist, respond with an error message.

Use grep to search for the item in `registry.json` by the component name (e.g., grep for `"name": "${componentName}"`). If not found, respond with an error message. Note that items are unique by name.

To efficiently locate the item, use grep to find the line number where the item starts, then read only the relevant lines from that point to extract the `registryDependencies` array and ensure `type` is `registry:component`. If the type is not `registry:component`, respond with an error message and skip processing this component.

Analyze the imports in this file. Look for imports from `@/registry/components/*` (e.g., `import { Checkbox } from "@/registry/components/ui/oui-checkbox";` or `import { Avatar } from "@/registry/components/ui/avatar";` or `import { SearchFieldEx } from "@/registry/components/oui-search-field-ex";`).

For each import path, extract the component name after the last `/` (e.g., `oui-checkbox` or `avatar`).

For each unique component name:

- If the name starts with `oui-`, derive the dependency as `"https://oui.mw10013.workers.dev/r/${name}.json"`
- Otherwise, derive the dependency as `"https://ui.shadcn.com/r/styles/new-york/${name}.json"`

Derive the required `registryDependencies` as a set of these strings.

Exclude the component name itself from the derived dependencies to avoid self-dependencies.

Compare the derived required dependencies with the existing `registryDependencies` array in `registry.json` for the item.

Add any missing dependencies (those in the derived set but not in the existing array) to the `registryDependencies` array.

Flag any existing dependencies that are not in the derived set as potentially unused (e.g., log them for review), but do not remove them.

Update the `registry.json` file by modifying the `registryDependencies` array for the specified item to include the added dependencies.

Ensure the JSON remains valid after the update.
