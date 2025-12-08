"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Derived from shadcn DialogTitle, AlertDialogTitle, PopoverDemo, AccordionHeader
 */
export const headingVariants = cva(undefined, {
  variants: {
    variant: {
      default: "text-lg leading-none font-semibold",
      alert: "text-lg font-semibold",
      popover: "text-base leading-none font-medium",
      disclosure: "flex",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Heading({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Rac.Heading> &
  VariantProps<typeof headingVariants>) {
  return (
    <Rac.Heading
      className={twMerge(headingVariants({ className, variant }))}
      {...props}
    />
  );
}
