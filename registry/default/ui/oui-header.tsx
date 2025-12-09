"use client";

import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Derived from shadcn DropdownMenuLabel
 */
export function Header({
  className,
  ...props
}: React.ComponentProps<typeof Rac.Header>) {
  return (
    <Rac.Header
      data-slot="header"
      className={twMerge("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  );
}
