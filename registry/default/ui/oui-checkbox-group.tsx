"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
import * as Rac from "react-aria-components";

export type CheckboxGroupProps = Rac.CheckboxGroupProps & FieldStylesProps;

export function CheckboxGroup({
  className,
  orientation = "vertical",
  children,
  ...props
}: CheckboxGroupProps) {
  // Oui.Checkbox uses labelComponentStyles which applies `leading-none`.
  // CheckboxGroup is functionally a shadcn Field and applies `leading-snug` to checkboxes to align with FieldLabel.
  return (
    <Rac.CheckboxGroup
      data-slot="field"
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        className,
        fieldStyles({
          orientation,
          className: "**:data-[slot=checkbox]:leading-snug",
        }),
      )}
      {...props}
    >
      {(renderProps) =>
        typeof children === "function" ? children(renderProps) : children
      }
    </Rac.CheckboxGroup>
  );
}
