import type { RegistryItem } from "shadcn/schema";
import { lazy, Suspense, useMemo } from "react";
import { LoaderCircleIcon } from "lucide-react";

export default function ComponentLoader({
  component,
}: {
  component: RegistryItem;
}) {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const Component = useMemo(
    () =>
      lazy(() =>
        import(`../registry/default/components/oui-${component.name}.tsx`).catch(
          () => ({
            default: () => null,
          }),
        ),
      ),
    [component],
  );
  console.log(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `ComponentLoader: ${component.name}: ${component.type}: canPreview: ${component.meta?.canPreview}`,
  );
  return component.meta?.canPreview ? (
    <Suspense
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
    </Suspense>
  ) : (
    <div>
      {component.name}: {component.description}
    </div>
  );
}
