import type { RegistryItem } from "shadcn/schema";
import * as React from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/default/ui/item";
import { LoaderCircleIcon } from "lucide-react";

export function ComponentLoader({ component }: { component: RegistryItem }) {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const Component = React.useMemo(
    () =>
      React.lazy(() =>
        import(`../registry/default/components/${component.name}.tsx`).catch(
          () => ({
            default: () => null,
          }),
        ),
      ),
    [component.name],
  );
  return component.meta?.canPreview ? (
    <React.Suspense
      fallback={
        <div
          data-comp-loading="true"
          className="peer flex min-h-20 items-center justify-center"
        >
          <span className="sr-only">Loading component...</span>
          <LoaderCircleIcon
            className="-ms-1 animate-spin text-input"
            size={24}
            aria-hidden="true"
          />
        </div>
      }
    >
      <Component />
    </React.Suspense>
  ) : (
    <Item className="p-0">
      <ItemContent>
        <ItemTitle>{component.title}</ItemTitle>
        <ItemDescription className="line-clamp-4">
          {component.description}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
