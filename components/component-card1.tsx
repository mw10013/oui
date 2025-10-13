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
  const colSpanMap = {
    1: {
      base: "col-span-12 sm:col-span-6 lg:col-span-4",
      start: "sm:col-start-4 lg:col-start-5",
    },
    2: {
      base: "col-span-12 sm:col-span-6 lg:col-span-6",
      start: "sm:col-start-4 lg:col-start-4",
    },
    3: { base: "col-span-12 sm:col-span-12 lg:col-span-12", start: "" },
  };

  const colSpan =
    component.meta?.colSpan === 2 ? 2 : component.meta?.colSpan === 3 ? 3 : 1;
  const baseClasses = colSpanMap[colSpan].base;
  const startClasses =
    isSearchPage && colSpan !== 3 ? colSpanMap[colSpan].start : "";
  const colClasses = twMerge(baseClasses, startClasses);

  const styleClasses =
    component.meta?.style === "flex-center"
      ? "flex justify-center items-center"
      : component.meta?.style === "text-center"
        ? "text-center"
        : "";

  return (
    <div
      className={twMerge(
        "group/item relative border has-[[data-comp-loading=true]]:border-none",
        isSearchPage
          ? "col-span-12 grid grid-cols-12"
          : twJoin(colClasses, styleClasses),
        className,
      )}
      data-slot={component.name}
    >
      {isSearchPage ? (
        <div className={twMerge(colClasses, styleClasses)}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
