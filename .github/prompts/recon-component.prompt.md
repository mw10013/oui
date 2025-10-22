---
mode: "agent"
---

You are an AI assistant that reconciles a component filename with `registry.json`.

You are given a filename of a component in the format `oui-*.tsx`. Ask for it if not given.

Check that the file exists in the `registry/components` directory. If it does not exist, respond with an error message.

Derive the following typescript Spec object from the filename:

```ts
type Spec = {
  componentName: string; // Filename without `.tsx` suffix.
  categoryName: string; // Filename without `oui-` prefix and `-ex*` or `-demo*` suffixes. Capitalized and replace hyphens (`-`) with spaces.
  categorySlug: string; // categoryName in lowercase with spaces replaced by hyphens (`-`).
  path: string; // `registry/default/components/${filename}`
  tag: string; // categoryName in lowercase.
};
```

For example, filename `oui-dialog-ex-demo-form.tsx` would yield:

```ts
const spec: Spec = {
  componentName: "oui-dialog-ex-demo-form",
  categoryName: "Dialog",
  categorySlug: "dialog",
  path: "registry/default/components/oui-dialog-ex-demo-form.tsx",
  tag: "dialog",
};
```

Another example, filename `oui-select-ex-demo-icon.tsx` would yield:

```ts
const spec: Spec = {
  componentName: "oui-select-ex-demo-icon",
  categoryName: "Select",
  categorySlug: "select",
  path: "registry/default/components/oui-select-ex-demo-icon.tsx",
  tag: "select",
};
```

Display the derived Spec object.

Check the `items` array in `registry.json` for an item with `name` equal to `componentName` and `type` equal to `registry:component`.

If it exists, reconcile it with the Spec object. If it doesn't exist, create a new item at the end.

The reconciled or new item should have the following shape:

```ts
{
  "name": `${spec.componentName}`,
  "type": "registry:component",
  "files": [
    {
      "path": `${spec.path}`,
      "type": "registry:component"
    }
  ],
  "registryDependencies": [
    // List of registry dependencies derived from the imports in the component file.
    // For each import from "@/registry/default/ui/oui-<UI-COMPONENT-NAME>", add
    // "https://oui.mw10013.workers.dev/r/oui-<UI-COMPONENT-NAME>.json" to this array.
    // For each import from "@/registry/default/ui/<UI-COMPONENT-NAME-WITHOUT-OUI-PREFIX>"
    // that does not have `oui-*` prefix, add
    // "https://ui.shadcn.com/r/styles/new-york/r/<UI-COMPONENT-NAME-WITHOUT-OUI-PREFIX>.json" to this array.
    // For each import from "@/registry/default/components/oui-<COMPONENT-NAME>", add
    // "https://oui.mw10013.workers.dev/r/oui-<COMPONENT-NAME>.json" to this array.
    // Ensure no duplicates and sort alphabetically.
  ],
  "dependencies": [
    // List of npm package dependencies used in the component.
    // Never include "react", "react-dom", "react-aria-components","class-variance-authority", "tailwind-merge" as these are provided by the environment.
    // Include other packages like "lucide-react" if they are imported in the component.
    // Ensure no duplicates and sort alphabetically.
    // If there are no dependencies, omit this property.
  ],
  "meta": {
    "tags": [`${spec.tag}`] // Leave existing tags unchanged if they exist.
    // Leave `style` property unchanged if it exists.
  }
}
```

With example filename of `oui-dialog-ex-demo-form.tsx`, the reconciled or new item would look like:

```json
{
  "name": "oui-dialog-ex-demo-form",
  "type": "registry:component",
  "files": [
    {
      "path": "registry/default/components/oui-dialog-ex-demo-form.tsx",
      "type": "registry:component"
    }
  ],
  "registryDependencies": [
    "http://localhost:5173/r/oui-button.json",
    "http://localhost:5173/r/oui-dialog.json",
    "http://localhost:5173/r/oui-heading.json",
    "http://localhost:5173/r/oui-text-field-ex.json"
  ],
  "meta": {
    "tags": ["dialog"]
  }
}
```

With example filename of `oui-select-ex-demo-icon.tsx`, the reconciled or new item would look like:

```json
{
  "name": "oui-select-ex-demo-icon",
  "type": "registry:component",
  "files": [
    {
      "path": "registry/default/components/oui-select-ex-demo-icon.tsx",
      "type": "registry:component"
    }
  ],
  "registryDependencies": [
    "http://localhost:5173/r/oui-list-box.json",
    "http://localhost:5173/r/oui-select-ex.json"
  ],
  "dependencies": ["lucide-react"],
  "meta": {
    "tags": ["select"]
  }
}
```

Check `functions/x/config/categories.ts` for a category with `name` equal to `spec.categoryName`.
If it exists, reconcile it with the Spec object. If it doesn't exist, create a new category at the end.

The reconciled or new category should have the following shape:

```ts
{
  name: `${spec.categoryName}`,
  slug: `${spec.categorySlug}`,
  components: [
    // List of component names in this category.
    // If the category already exists, append `spec.componentName` to the existing `components` array if not already present.
    // If the category is new, initialize `components` with an array containing `spec.componentName`.
  ],
}
```

With example filename of `oui-dialog-ex-demo-form.tsx`, the reconciled or new category would look like:

```ts
{
  name: "Dialog",
  slug: "dialog",
  components: [
    "oui-dialog-ex",
    "oui-dialog-ex-demo-form"
  ],
}
```

**Important Guidelines:**

- When editing `functions/x/registry.json` or `functions/x/config/categories.ts`, do not modify, remove, or alter any existing items, properties, or categories beyond what is explicitly required for the new component. Preserve all existing data intact.
- If reconciling an existing item, only update the specified fields (e.g., `registryDependencies`, `meta.tags`) and leave others unchanged.
- Use precise context in string replacements to avoid unintended changes to adjacent items.
