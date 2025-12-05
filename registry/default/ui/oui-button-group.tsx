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

/**
 * Button group variant styles.
 *
 * ## Select in ButtonGroup - Corner Rounding Fix
 *
 * When a Select is the last item in a horizontal ButtonGroup, we need special handling
 * for the right border radius because of hidden native <select> elements used for
 * form submission/autofill.
 *
 * ### Shadcn Structure (SelectTrigger):
 * ```
 * ButtonGroup
 * ├── Button
 * ├── SelectTrigger [data-slot=select-trigger]  ← visible trigger
 * └── <select aria-hidden="true">               ← hidden native, IS last-child
 * ```
 * The hidden <select> has aria-hidden="true" directly on it and becomes the actual
 * last-child, so SelectTrigger won't match :last-child. We detect this with:
 *   `has-[select[aria-hidden=true]:last-child]`
 * and apply rounded-r-md to `select-trigger:last-of-type`.
 *
 * ### RAC/Oui Structure (SelectButton):
 * ```
 * ButtonGroup
 * ├── Button
 * └── Rac.Select [data-slot=select]             ← wrapper div, IS last-child
 *     ├── SelectButton [data-slot=select-button]  ← visible trigger (nested)
 *     └── <div aria-hidden="true">              ← container has aria-hidden
 *         └── <label>
 *             └── <select>                      ← select does NOT have aria-hidden
 * ```
 * In RAC, the hidden select is nested inside the Rac.Select wrapper div, NOT a direct
 * child of ButtonGroup. The Rac.Select wrapper IS the last-child and will correctly
 * get rounded-r-none from the orientation variant. However, SelectButton is nested
 * inside, so it won't be affected by ButtonGroup's direct child selectors.
 *
 * We detect RAC's structure with:
 *   `has-[[aria-hidden=true]_select]:last-child`
 * This matches when the last-child contains a descendant with aria-hidden that itself
 * contains a <select> (i.e., the wrapper div containing the hidden select container).
 *
 * ### If this works:
 * - SelectButton should have rounded-r-md when Select is last in horizontal group
 * - The rounded-r-none from orientation variant should NOT override it
 *
 * ### If this doesn't work:
 * - Check if SelectButton is getting rounded-r-none (orientation variant winning)
 * - Inspect DOM: is [data-slot=select] the last-child of ButtonGroup?
 * - Check if `has-[[aria-hidden=true]_select]` matches the ButtonGroup
 * - May need to target [data-slot=select]:last-child instead of using has-[]
 */
export const buttonGroupVariants = cva(
  [
    "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*[data-focus-visible]]:relative [&>*[data-focus-visible]]:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
    // RAC: hidden select is inside wrapper div with aria-hidden, detect with `has-[[aria-hidden=true]_select]`
    "has-[[aria-hidden=true]_select:last-child]:[&>[data-slot=select-button]:last-of-type]:rounded-r-md [&>[data-slot=select-button]:not([class*='w-'])]:w-fit",
  ],
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
