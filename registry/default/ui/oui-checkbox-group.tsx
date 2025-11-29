"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
import * as Rac from "react-aria-components";

export type CheckboxGroupProps = Rac.CheckboxGroupProps & FieldStylesProps;

export function CheckboxGroup({
  orientation = "vertical",
  className,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <Rac.CheckboxGroup
      data-slot="field"
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        className,
        fieldStyles({
          orientation,
          className:
            "*:data-[slot=checkbox]:font-normal *:data-[slot=field-description]:mb-2",
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
