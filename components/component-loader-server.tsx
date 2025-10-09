"use client";

import type { RegistryItem } from "shadcn/schema";
import { lazy, Suspense } from "react";

export default function ComponentLoader({
  component,
}: {
  component: RegistryItem;
}) {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const Component = lazy(
    () => import(`../registry/components/${component.name}.tsx`),
  );

  return (
    <Suspense>
      <Component />
    </Suspense>
  );
}
