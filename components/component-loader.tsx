import { lazy, Suspense, useMemo } from "react";

export default function ComponentLoader({ name }: { name: string }) {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const Component = useMemo(
    () => lazy(() => import(`../registry/components/${name}.tsx`)),
    [name],
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}
