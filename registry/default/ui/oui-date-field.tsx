"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import * as React from "react";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
import { inputStyles } from "@/registry/default/ui/oui-input";
import * as Rac from "react-aria-components";

/**
 * Derived from shadcn Field
 */
export function DateField({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Rac.DateField> & FieldStylesProps) {
  return (
    <Rac.DateField
      data-slot="date-field"
      data-slot-type="field"
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        className,
        fieldStyles({ orientation }),
      )}
      {...props}
    />
  );
}

export function DateFieldInput({
  className,
  ...props
}: React.ComponentProps<typeof Rac.DateInput>) {
  return (
    <Rac.DateInput
      data-slot="date-field-input"
      className={composeTailwindRenderProps(
        className,
        [inputStyles, "flex items-center data-focus-within:border-ring data-focus-within:ring-[3px] data-focus-within:ring-ring/50"]
      )}
      {...props}
    />
  );
}

export function DateFieldSegment({
  ...props
}: React.ComponentProps<typeof Rac.DateSegment>) {
  return <Rac.DateSegment data-slot="date-field-segment" {...props} />;
}
