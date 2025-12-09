"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import * as React from "react";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
import * as Rac from "react-aria-components";

/**
 * Derived from shadcn Field
 */
export function TextField({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Rac.TextField> & FieldStylesProps) {
  return (
    <Rac.TextField
      data-slot="text-field"
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
