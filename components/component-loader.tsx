import { lazy, Suspense, useMemo } from "react";
import { LoaderCircleIcon } from "lucide-react";

export default function ComponentLoader({ name }: { name: string }) {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const Component = useMemo(
    () =>
      lazy(() =>
        import(`../registry/default/components/${name}.tsx`).catch(() => ({
          default: () => null,
        })),
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
