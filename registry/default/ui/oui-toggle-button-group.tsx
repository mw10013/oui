"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Derived from shadcn Toggle Group.
 * Rac.ToggleButtonGroup does not have built-in variants, but we add spacing.
 */
export const toggleButtonGroupVariants = cva(
  "group/toggle-button-group flex w-fit items-center gap-[--gap]",
  {
    variants: {
      orientation: {
        horizontal: "",
        vertical: "flex-col",
      },
      spacing: {
        default: "",
        0: "gap-0",
        1: "gap-1",
        2: "gap-2",
        3: "gap-3",
        4: "gap-4",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      spacing: "default",
    },
  },
);

export function ToggleButtonGroup({
  className,
  orientation,
  spacing,
  ...props
}: React.ComponentProps<typeof Rac.ToggleButtonGroup> &
  VariantProps<typeof toggleButtonGroupVariants>) {
  return (
    <Rac.ToggleButtonGroup
      data-slot="toggle-button-group"
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        twMerge(
          toggleButtonGroupVariants({
            ...renderProps,
            orientation,
            spacing,
            className,
          }),
        ),
      )}
      {...props}
    />
  );
}
