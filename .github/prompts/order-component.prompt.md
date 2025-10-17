---
mode: "agent"
---

# Order `registry:ui` Component and its Related Components in Registry

You are an expert at maintaining the shadcn/ui component registry. Your task is to order a given `registry:ui` component and its related `registry:component` items in `registry.json` based on the category defined in `config/categories.ts`.

## Steps

1. **Identify the Category**:

   - Given a `registry:ui` component name (e.g., `"oui-button"`), compute the `slug` by removing the `"oui-"` prefix from the name (e.g., `"button"`).
   - Search `config/categories.ts` for the category where `category.slug` exactly matches the computed `slug`.
   - If no matching category is found, stop and report that no category exists for the component.

2. **Extract Related Components from Category**:

   - From the matching category, get the `components` array.
   - Extract the list of component names from `category.components` (e.g., `["oui-button-demo", "oui-button-demo-outline", ...]`). This list defines the desired order for the related components.

3. **Identify All Related Components in `registry.json`**:

   - Find the `registry:ui` item where `item.name` matches the given component name.
   - Find all `registry:component` items where `item.registryDependencies` includes the URL for the given `registry:ui` component (e.g., `"https://oui.mw10013.workers.dev/r/oui-button.json"`) **and** whose `item.name` contains the computed `slug` (e.g., for `button`, names like `oui-button-demo*`).
   - These are the actual related components in `registry.json`.

4. **Determine Ordering and Discrepancies**:

   - Compare the category components (from step 2) with the actual related components (from step 3).
   - Ordered list: Start with components present in both (in the order from `category.components`), then add any additional actual related components not in the category (sorted alphabetically by name).
   - Discrepancies:
     - Extra in registry: Actual related components not in `category.components`.
     - Missing in registry: Components in `category.components` not found in actual related components.

5. **Reorder the Items**:

   - Group the located items: Start with the `registry:ui` item, followed by the related `registry:component` items in the determined order (category order first, then extras alphabetically).
   - Update `registry.json` to place this reordered group in the position where the original `registry:ui` item was located. Shift other unrelated items as needed to maintain the file's structure.
   - Ensure the JSON remains valid and indented consistently.

6. **Validation and Output**:
   - After reordering, verify that the `registry:ui` item appears first in the group, followed by the related components in the specified order.
   - Output the discrepancies: List any extra components in registry not in category, and any missing components in category not in registry.
   - Do not modify any other parts of `registry.json` or `categories.ts`.

## Example

- Input: `registry:ui` component name `"oui-button"`
- Computed slug: `"button"`
- Matching category: `"Button"` with components `["oui-button-demo", "oui-button-demo-outline", "oui-button-demo-ghost", ...]`
- Actual related in registry: All `oui-button-demo*` components that depend on `oui-button`.
- If there are extras (e.g., a new demo not in category), include them at the end alphabetically.
- Output discrepancies if any (e.g., "Extra in registry: oui-button-demo-new", "Missing in registry: none").

Run this process for the specified component and confirm the changes.
