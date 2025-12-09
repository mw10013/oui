"use client";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

export const headerVariants = cva("px-2 py-1.5", {
  variants: {
    variant: {
      menu: "text-sm font-medium", // Derived from shadcn DropdownMenuLabel
      select: "text-xs text-muted-foreground", // Derived from shadcn SelectLabel
    },
  },
  defaultVariants: {
    variant: "menu",
  },
});

export interface HeaderProps
  extends React.ComponentProps<typeof Rac.Header>,
    VariantProps<typeof headerVariants> {}

export function Header({ variant, className, ...props }: HeaderProps) {
  return (
    <Rac.Header
      data-slot="header"
      className={twMerge(headerVariants({ variant }), className)}
      {...props}
    />
  );
}
