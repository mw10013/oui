"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import {
  composeTailwindRenderProps,
  disabledStyles,
  focusVisibleStyles,
} from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
import { inputStyles } from "@/registry/default/ui/oui-input";
import { ChevronDown } from "lucide-react";
import * as Rac from "react-aria-components";

export function DatePicker({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof Rac.DatePicker> & FieldStylesProps) {
  return (
    <Rac.DatePicker
      data-slot="date-picker"
      data-slot-type="field"
      className={composeTailwindRenderProps(
        className,
        fieldStyles({ orientation }),
      )}
      {...props}
    />
  );
}

export function DatePickerButton({
  className,
  size = "default",
  children,
  ...props
}: Rac.ButtonProps & {
  size?: "sm" | "default";
}) {
  return (
    <Rac.Button
      data-slot="date-picker-button"
      data-size={size}
      className={composeTailwindRenderProps(className, [
        focusVisibleStyles,
        disabledStyles,
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-disabled:cursor-not-allowed data-[size=default]:h-9 data-[size=sm]:h-8 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-hovered:bg-input/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
      ])}
      {...props}
    >
      {Rac.composeRenderProps(children, (children) => (
        <>
          {children}
          <ChevronDown className="size-4 opacity-50" aria-hidden="true" />
        </>
      ))}
    </Rac.Button>
  );
}

export function DatePickerInput({
  className,
  ...props
}: React.ComponentProps<typeof Rac.DateInput>) {
  return (
    <Rac.DateInput
      data-slot="date-picker-input"
      className={composeTailwindRenderProps(className, [
        inputStyles,
        "flex items-center data-focus-within:border-ring data-focus-within:ring-[3px] data-focus-within:ring-ring/50",
      ])}
      {...props}
    />
  );
}
