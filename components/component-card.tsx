import type { RegistryItem } from "shadcn/schema";
import { twJoin, twMerge } from "tailwind-merge";

const widthStyles = {
  default: {
    span: "col-span-12 sm:col-span-6 lg:col-span-4",
    start: "sm:col-start-4 lg:col-start-5",
  },
  wide: {
    span: "col-span-12 sm:col-span-6 lg:col-span-6",
    start: "sm:col-start-4 lg:col-start-4",
  },
  full: { span: "col-span-12 sm:col-span-12 lg:col-span-12", start: "" },
};

const alignmentStyles = {
  default: "",
  "flex-center": "flex justify-center items-center",
  "text-center": "text-center",
};

/**
 * Renders a component card with configurable layout and styling.
 * @param layoutMode - The layout mode: "subgrid" for nested grid, "direct" for flat span.
 * @param children - The content to render inside the card.
 * @param component - The registry item metadata, including width ("wide" | "full", defaults to "default") and alignment ("flex-center" | "text-center", defaults to "default").
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
  const width =
    component.meta?.width === "wide"
      ? "wide"
      : component.meta?.width === "full"
        ? "full"
        : "default";
  const alignment =
    component.meta?.alignment === "flex-center"
      ? "flex-center"
      : component.meta?.alignment === "text-center"
        ? "text-center"
        : "default";

  const styles: {
    outer: string;
    inner?: string;
  } =
    layoutMode === "subgrid"
      ? {
          outer: "col-span-12 grid grid-cols-12",
          inner: twJoin(
            widthStyles[width].span,
            widthStyles[width].start,
            alignmentStyles[alignment],
          ),
        }
      : {
          outer: twJoin(widthStyles[width].span, alignmentStyles[alignment]),
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
