"use client";

import {
  composeTailwindRenderProps,
  groupFocusVisibleStyles,
} from "@/registry/default/ui/oui-base";
import { labelComponentStyles } from "@/registry/default/ui/oui-label";
import { CheckIcon, MinusIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Derived from shadcn FormDemo FormItem and CheckboxPrimitive.Root
 * Radix has CheckboxPrimitive.Root which is separate from label while RAC structures with a label.
 *
 * @note Uses `leading-none` to override the `leading-snug` from `labelComponentStyles` for better alignment with the checkbox.
 */
export function Checkbox({ className, children, ...props }: Rac.CheckboxProps) {
  return (
    <Rac.Checkbox
      {...props}
      className={composeTailwindRenderProps(className, [
        labelComponentStyles,
        "group items-start gap-3 leading-none",
      ])}
    >
      {(renderProps) => (
        <>
          <span
            data-slot="checkbox-indicator"
            className={twMerge([
              groupFocusVisibleStyles,
              "size-4 shrink-0 rounded border border-input shadow-xs transition-shadow dark:bg-input/30",
              "group-data-selected:border-primary group-data-selected:bg-primary group-data-selected:text-primary-foreground dark:group-data-selected:bg-primary",
              "group-data-interminate:border-primary group-data-interminate:bg-primary group-data-interminate:text-primary-foreground dark:group-data-interminate:bg-primary",
              "group-data-invalid:border-destructive group-data-invalid:ring-destructive/20 group-data-invalid:dark:ring-destructive/40",
            ])}
          >
            <MinusIcon
              className="hidden size-3.5 group-data-indeterminate:block"
              aria-hidden
            />
            <CheckIcon
              className="hidden size-3.5 group-data-selected:block"
              aria-hidden
            />
          </span>
          {typeof children === "function" ? children(renderProps) : children}
        </>
      )}
    </Rac.Checkbox>
  );
}
