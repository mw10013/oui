import type { RegistryItem } from "shadcn/schema";
import { twJoin, twMerge } from "tailwind-merge";

// layout: undefined | "wide" | "full"
// alignment: undfined | "center" | "text-center"

/**
 * Renders a component card with configurable layout and styling.
 * @param isSearchPage - Whether the card is displayed on a search page.
 * @param children - The content to render inside the card.
 * @param component - The registry item metadata, including colSpan and style ("flex-center" | "text-center").
 * @param className - Additional CSS classes.
 */
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

  return (
    <div
      className={twMerge(
        "group/item relative border has-[[data-comp-loading=true]]:border-none",
        isSearchPage
          ? "col-span-12 grid grid-cols-12"
          : twJoin(getColSpanClasses(), styleClasses),
        className,
      )}
      data-slot={component.name}
    >
      {isSearchPage ? (
        <div className={twMerge(getColSpanClasses(true), styleClasses)}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
