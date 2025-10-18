---
mode: "agent"
---

# Tag Refactor: Replace Spaces with Hyphens

You are an expert TypeScript functional programmer tasked with refactoring the tag system in this codebase. Currently, tags use spaces (e.g., "select ex popover") and need to be changed to use hyphens (e.g., "select-ex-popover").

## Current State Analysis

- **Tags with spaces**: Defined in `registry/registry-tags.ts` (e.g., "autocomplete ex", "checkbox group", "select ex popover")
- **Registry usage**: Tags appear in `registry.json` `meta.tags` arrays with spaces
- **URL encoding**: Spaces are replaced with "+" in filter URLs (e.g., `?tags=checkbox%2Bex`)
- **Derivation rules**: `tag-component.prompt.md` specifies converting hyphens to spaces for tags
- **Hardcoded URLs**: Component files contain hardcoded filter URLs with current encoding

## Refactoring Plan

### Phase 1: Update Tag Definitions

1. **Modify `registry/registry-tags.ts`**: Replace all spaces with hyphens in active tags
2. **Update type definitions**: Ensure `RegistryTag` type reflects new hyphenated tags

### Phase 2: Update Registry Data

1. **Update `registry.json`**: Replace spaces with hyphens in all `meta.tags` arrays
2. **Verify consistency**: Ensure all tags in registry.json match registry-tags.ts

### Phase 3: Update Derivation Logic

1. **Modify `tag-component.prompt.md`**: Change derivation rules to use hyphens instead of spaces
2. **Update tag generation**: Ensure new components get hyphenated tags

### Phase 4: Update Runtime Logic

1. **Modify `app/routes/filter.tsx`**: Remove all space encoding/decoding since tags no longer contain spaces
2. **Simplify URL handling**: Use clean comma-separation without encoding
3. **Update URL generation**: Remove `.replace(/\s+/g, "+")` - just join tags with commas
4. **Update URL parsing**: Remove `.replace(/\+/g, " ")` - just split on commas

### Current filter.tsx logic:

- **Encoding**: `value.map((key) => String(key).replace(/\s+/g, "+")).join(",")`
- **Decoding**: `tagsParam.split(",").map((tag) => tag.replace(/\+/g, " "))`

### New simplified logic:

- **Encoding**: `value.join(",")` (no encoding needed)
- **Decoding**: `tagsParam.split(",")` (no decoding needed)

### URL format:

- **Single tag**: `?tags=checkbox-group`
- **Multiple tags**: `?tags=text-field,select-ex-popover,combo-box-ex-avatar`

### Phase 5: Update Hardcoded References

1. **Component files**: Update all hardcoded filter URLs in registry components
2. **Replace tag names**: Change space-containing tags to hyphenated versions in URLs
3. **Example**: `?tags=checkbox%2Bex` → `?tags=checkbox-ex`

### Phase 6: Validation

1. **Test filtering**: Ensure filter functionality works with new hyphenated tags
2. **Verify URLs**: Confirm filter links work correctly
3. **Check consistency**: Ensure all tag references are updated

## Implementation Steps

1. **Backup current state** - Create git commit before changes
2. **Update registry-tags.ts** - Replace spaces with hyphens in active tags
3. **Update registry.json** - Replace spaces with hyphens in all meta.tags
4. **Update tag-component.prompt.md** - Modify derivation rules
5. **Update filter.tsx** - Change URL encoding/decoding logic
6. **Update component URLs** - Replace hardcoded URLs with new encoding
7. **Test and validate** - Ensure filtering and navigation work correctly

## Files to Modify

- `registry/registry-tags.ts` - Tag definitions
- `registry.json` - Component metadata
- `.github/prompts/tag-component.prompt.md` - Derivation rules
- `app/routes/filter.tsx` - URL handling
- `registry/components/oui-*.tsx` - Hardcoded URLs (multiple files)

## Validation Checklist

- [ ] All tags in registry-tags.ts use hyphens instead of spaces
- [ ] All tags in registry.json use hyphens
- [ ] Filter URLs use hyphens (e.g., `?tags=checkbox-ex`)
- [ ] Tag derivation creates hyphenated tags
- [ ] Filter functionality works with new URLs
- [ ] Hardcoded component links work correctly
- [ ] No broken references or missing tags

## Example Transformations

- "autocomplete ex" → "autocomplete-ex"
- "checkbox group" → "checkbox-group"
- "select ex popover" → "select-ex-popover"
- Single tag URL: `?tags=checkbox%2Bgroup%2Bex` → `?tags=checkbox-group`
- Multiple tags URL: `?tags=checkbox%2Bgroup%2Cautocomplete%2Bex` → `?tags=text-field,select-ex-popover,combo-box-ex-avatar`
