"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
import * as Rac from "react-aria-components";

export type TextFieldProps = Rac.TextFieldProps & FieldStylesProps;

/**
 * Derived from shadcn Field
 */
export function TextField({
  className,
  orientation = "vertical",
  ...props
}: TextFieldProps) {
  return (
    <Rac.TextField
      data-slot="field"
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        className,
        fieldStyles({ orientation }),
      )}
      {...props}
    />
  );
}
