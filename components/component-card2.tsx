import type { RegistryItem } from "shadcn/schema";
import { twJoin, twMerge } from "tailwind-merge";

export default function ComponentCard({
  isSearchPage = false,
  children,
  component,
  className,
}: {
  isSearchPage?: boolean;
  children: React.ReactNode;
  component: RegistryItem;
  className?: string;
}) {
  const getColSpanClasses = (includeStart = false) => {
    const baseClasses =
      component.meta?.colSpan === 2
        ? "col-span-12 sm:col-span-6 lg:col-span-6"
        : component.meta?.colSpan === 3
          ? "col-span-12 sm:col-span-12 lg:col-span-12"
          : "col-span-12 sm:col-span-6 lg:col-span-4";

    const startClasses =
      includeStart && component.meta?.colSpan !== 3
        ? component.meta?.colSpan === 2
          ? "sm:col-start-4 lg:col-start-4"
          : "sm:col-start-4 lg:col-start-5"
        : "";

    return twMerge(baseClasses, startClasses);
  };

  const styleClasses =
    component.meta?.style === "flex-center"
      ? "flex justify-center items-center"
      : component.meta?.style === "text-center"
        ? "text-center"
        : "";

  type LayoutConfig =
    | { outer: string; wrapChildren: false }
    | { outer: string; inner: string; wrapChildren: true };

  const layoutConfigs: Record<string, LayoutConfig> = {
    standard: {
      outer: twJoin(getColSpanClasses(), styleClasses),
      wrapChildren: false,
    },
    centered: {
      outer: "col-span-12 grid grid-cols-12",
      inner: twMerge(getColSpanClasses(true), styleClasses),
      wrapChildren: true,
    },
  };

  const config = isSearchPage ? layoutConfigs.centered : layoutConfigs.standard;

  return (
    <div
      className={twMerge(
        "group/item relative border has-[[data-comp-loading=true]]:border-none",
        config.outer,
        className,
      )}
      data-slot={component.name}
    >
      {config.wrapChildren ? (
        <div className={config.inner}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
