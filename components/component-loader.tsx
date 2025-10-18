import { lazy, Suspense, useMemo } from "react";
import { LoaderCircleIcon } from "lucide-react";

export default function ComponentLoader({ name }: { name: string }) {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const Component = useMemo(
    () =>
      lazy(
        () =>
          // Original code (uncomment to remove delay):
          // import(`../registry/components/${name}.tsx`).catch(() => ({
          //   default: () => <div>Failed to load {name}.</div>,
          // })),
          new Promise((resolve) =>
            setTimeout(() => {
              resolve(
                import(`../registry/components/${name}.tsx`).catch(() => ({
                  default: () => <div>Failed to load {name}.</div>,
                })),
              );
            }, 3000),
          ),
      ),
    [name],
  );
  return (
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
  );
}
