---
mode: "agent"
---

# Tag Component in Registry

You are an expert at maintaining the shadcn/ui component registry. Your task is to automatically derive and add appropriate tags to components in `registry.json` based on their names and dependencies.

## Context

- `registry.json` contains component definitions following the shadcn/ui registry schema
- Each component has a `meta.tags` array containing descriptive keywords
- Tags help with component discovery and categorization
- Tags are automatically derived from component names and registry dependencies
- **Existing tags are preserved** - only missing derived tags are added
- Non-derived tags are flagged for manual review
- **Only `registry:component` items get tags** - `registry:ui` items (base primitives) do not have tags

## Input

You will receive:

- Component name or name pattern (e.g., "oui-button-demo" or "oui-button-\*")

If you don't receive the required input, ask the user for it.

## Tag Derivation Rules

### 1. Component Name Parsing

- **Base components**: `oui-{type}` → `["{type}"]` (e.g., "oui-button" → `["button"]`)
- **Extended components**: `oui-{type}-ex` → `["{type}", "{type}-ex"]` (e.g., "oui-dialog-ex" → `["dialog", "dialog-ex"]`)
- **Demo components**: `oui-{type}-demo` → `["{type}"]` (e.g., "oui-button-demo" → `["button"]`)
- **Extended demos**: `oui-{type}-ex-demo` → `["{type}", "{type}-ex"]`
- **Variant demos**: `oui-{type}-demo-{variant}` → `["{type}"]` + specific variant tags (only "disabled" and "multiple" if present)

### 2. Dependency Tag Extraction

- **OUI dependencies**: `https://oui.mw10013.workers.dev/r/oui-{component}.json` → `"{component}"`
- **Shadcn dependencies**: `https://ui.shadcn.com/r/styles/new-york/{component}.json` → `"{component}"`
- Only registry dependencies contribute tags, not npm `dependencies`

### 3. Special Cases

- Only specific variants become tags: "disabled" and "multiple"
- Compound component names keep hyphens: "text-field" → "text-field"
- Do not add tags for other variants (destructive, ghost, outline, etc.) to avoid tag explosion

### 4. Tag Formatting

- All lowercase
- Hyphens are allowed in tags

## Process

1. **Read registry.json** - Examine the current structure and locate the target component(s)
2. **Find the component(s)** - Search for item(s) with matching `name` field using exact match or pattern
3. **Filter by type** - Only process components with `type: "registry:component"` (skip `registry:ui` base primitives)
4. **Derive tags** - Apply the derivation rules above to generate tags from name and dependencies
5. **Merge tags** - Add any missing derived tags to the existing `meta.tags` array (do not remove existing tags)
6. **Flag non-derived tags** - Identify any existing tags that don't match the derivation rules
7. **Maintain format** - Preserve JSON structure and indentation
8. **Validate** - Ensure component(s) exist and tags are properly formatted

## Output

- Confirm the component(s) were found and updated
- Show the derived tags that were added
- Display the complete updated `meta.tags` array
- Show the entire updated registry item JSON
- Flag any existing tags that don't match derivation rules (these should be reviewed manually)
- Report any issues (component not found, parsing errors, etc.)
- Note: `registry:ui` components are skipped (they don't have tags)

## Example

Input: Component "oui-button-demo"
Output: Added derived tags ["button"] to oui-button-demo. Updated tags: ["button"]
Full registry item:

```json
{
  "name": "oui-button-demo",
  "type": "registry:component",
  "files": [
    {
      "path": "registry/components/oui-button-demo.tsx",
      "type": "registry:component"
    }
  ],
  "registryDependencies": ["https://oui.mw10013.workers.dev/r/oui-button.json"],
  "meta": { "tags": ["button"], "alignment": "text-center" }
}
```

Input: Pattern "oui-checkbox-_"
Output: Updated 4 components matching "oui-checkbox-_":

- oui-checkbox-demo: Added ["checkbox"] → ["checkbox"]
- oui-checkbox-demo-disabled: Added ["checkbox", "disabled"] → ["checkbox", "disabled"]
- oui-checkbox-ex: Added ["checkbox", "checkbox-ex", "text"] → ["checkbox", "checkbox-ex", "text"]
- oui-checkbox-ex-demo: Added ["checkbox", "checkbox-ex"] → ["checkbox", "checkbox-ex"]
  ⚠️ Warning: Found non-derived tags that should be reviewed: oui-checkbox-ex has "field-error" (not derived from name/dependencies)
