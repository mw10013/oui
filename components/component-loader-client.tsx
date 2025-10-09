import type { RegistryItem } from "shadcn/schema";
import { lazy, Suspense } from "react";
import { LoaderCircleIcon } from "lucide-react";

interface ComponentLoaderProps {
  component: RegistryItem;
}

export default function ComponentLoader({ component }: ComponentLoaderProps) {
  const Component = lazy(() =>
    import(`../registry/components/${component.name}.tsx`).catch(() =>
      Promise.resolve({ default: () => null }),
    ),
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
