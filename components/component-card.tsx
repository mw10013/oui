import type { RegistryItem } from "shadcn/schema";
import { cva } from "class-variance-authority";

const container = cva(
  "group/item relative border has-[[data-comp-loading=true]]:border-none",
  {
    variants: {
      layoutMode: {
        subgrid: "col-span-12 grid grid-cols-12",
        direct: "",
      },
    },
    defaultVariants: {
      layoutMode: "direct",
    },
  },
);

const content = cva("", {
  variants: {
    width: {
      default: "col-span-12 sm:col-span-6 lg:col-span-4",
      wide: "col-span-12 sm:col-span-6 lg:col-span-6",
      full: "col-span-12 sm:col-span-12 lg:col-span-12",
    },
    alignment: {
      default: "",
      "flex-center": "flex items-center justify-center",
      "text-center": "text-center",
    },
    layoutMode: {
      subgrid: "",
      direct: "",
    },
  },
  compoundVariants: [
    {
      width: "default",
      layoutMode: "subgrid",
      class: "sm:col-start-4 lg:col-start-5",
    },
    {
      width: "wide",
      layoutMode: "subgrid",
      class: "sm:col-start-4 lg:col-start-4",
    },
    {
      width: "full",
      layoutMode: "subgrid",
      class: "",
    },
  ],
  defaultVariants: {
    width: "default",
    alignment: "default",
    layoutMode: "direct",
  },
});

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

  if (layoutMode === "subgrid") {
    return (
      <div
        className={container({ layoutMode, className })}
        data-slot={component.name}
      >
        <div className={content({ width, alignment, layoutMode })}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={container({
        layoutMode,
        className: content({ width, alignment, layoutMode, className }),
      })}
      data-slot={component.name}
    >
      {children}
    </div>
  );
}
