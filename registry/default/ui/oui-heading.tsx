"use client";

import * as React from "react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Derived from shadcn DialogTitle
 */
export function Heading({
  className,
  ...props
}: React.ComponentProps<typeof Rac.Heading>) {
  return (
    <Rac.Heading
      data-slot="heading"
      className={twMerge("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}
