"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import * as React from "react";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
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
  ...props
}: React.ComponentProps<typeof Rac.DateInput>) {
  return <Rac.DateInput {...props} />;
}

export function DateFieldSegment({
  ...props
}: React.ComponentProps<typeof Rac.DateSegment>) {
  return <Rac.DateSegment {...props} />;
}
