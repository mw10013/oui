import type { RegistryItem } from "shadcn/schema";
import { twJoin, twMerge } from "tailwind-merge";

// layout: undefined | "wide" | "full"
// alignment: undfined | "center" | "text-center"

/**
 * Renders a component card with configurable layout and styling.
 * @param layoutMode - The layout mode: "subgrid" for nested grid, "direct" for flat span.
 * @param children - The content to render inside the card.
 * @param component - The registry item metadata, including colSpan and style ("flex-center" | "text-center").
 * @param className - Additional CSS classes.
 */
export default function ComponentCard({
  layoutMode = "direct",
  children,
  component,
  className,
}: {
  layoutMode?: "subgrid" | "direct";
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
  const baseStyles = colSpanMap[colSpan].base;
  const startStyles =
    layoutMode === "subgrid" && colSpan !== 3 ? colSpanMap[colSpan].start : "";
  const colStyles = twJoin(baseStyles, startStyles);

  const alignmentStyles =
    component.meta?.style === "flex-center"
      ? "flex justify-center items-center"
      : component.meta?.style === "text-center"
        ? "text-center"
        : "";

  const styles: {
    outer: string;
    inner?: string;
  } =
    layoutMode === "subgrid"
      ? {
          outer: "col-span-12 grid grid-cols-12",
          inner: twJoin(colStyles, alignmentStyles),
        }
      : {
          outer: twJoin(colStyles, alignmentStyles),
        };

  return (
    <div
      className={twMerge(
        "group/item relative border has-[[data-comp-loading=true]]:border-none",
        styles.outer,
        className,
      )}
      data-slot={component.name}
    >
      {styles.inner ? <div className={styles.inner}>{children}</div> : children}
    </div>
  );
}
