import type { VariantProps } from "class-variance-authority";
import {
  disabledStyles,
  focusVisibleStyles,
} from "@/registry/components/ui/oui-base";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Derived from shadcn CardDemo.
 */
export const linkVariants = cva(
  [focusVisibleStyles, disabledStyles, "underline-offset-4"],
  {
    variants: {
      underline: {
        none: "no-underline",
        hover: "data-hovered:underline",
        always: "underline",
        current: "data-current:underline",
        focus: "data-focused:underline",
      },
    },
    defaultVariants: {
      underline: "none",
    },
  },
);

export interface LinkProps
  extends Rac.LinkProps,
    VariantProps<typeof linkVariants> {}

export function Link({ className, underline, ...props }: LinkProps) {
  return (
    <Rac.Link
      {...props}
      className={Rac.composeRenderProps(className, (className, renderProps) =>
        twMerge(linkVariants({ ...renderProps, underline, className })),
      )}
    />
  );
}
