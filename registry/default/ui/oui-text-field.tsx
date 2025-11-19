"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-base";
import {
  composeTailwindRenderProps,
  fieldStyles,
} from "@/registry/default/ui/oui-base";
import * as Rac from "react-aria-components";

/**
 * Derived styles from shadcn Field
 */
export function TextField({
  className,
  orientation,
  ...props
}: Rac.TextFieldProps & FieldStylesProps) {
  return (
    <Rac.TextField
      className={composeTailwindRenderProps(
        className,
        fieldStyles({ orientation }),
      )}
      {...props}
    />
  );
}
