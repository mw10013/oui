"use client";

import type { VariantProps } from "class-variance-authority";
import {
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/registry/default/ui/button-group";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "./oui-base";

export { ButtonGroupText, ButtonGroupSeparator };

export const buttonGroupVariants = cva(
  "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*[data-focus-visible]]:relative [&>*[data-focus-visible]]:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export function ButtonGroup({
  className,
  orientation,
  ...props
}: Rac.GroupProps & VariantProps<typeof buttonGroupVariants>) {
  return (
    <Rac.Group
      data-slot="button-group"
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        className,
        buttonGroupVariants({ orientation }),
      )}
      {...props}
    />
  );
}
