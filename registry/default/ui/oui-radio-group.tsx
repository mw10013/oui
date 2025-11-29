"use client";

import type { FieldStylesProps } from "@/registry/default/ui/oui-field";
import {
  composeTailwindRenderProps,
  groupFocusVisibleStyles,
} from "@/registry/default/ui/oui-base";
import { fieldStyles } from "@/registry/default/ui/oui-field";
import { labelComponentStyles } from "@/registry/default/ui/oui-label";
import { CircleIcon } from "lucide-react";
import * as Rac from "react-aria-components";
import { twJoin } from "tailwind-merge";

/**
 * Derived from shadcn RadioGroup and Field
 */
export type RadioGroupProps = Rac.RadioGroupProps & FieldStylesProps;

export function RadioGroup({
  orientation = "vertical",
  className,
  children,

  ...props
}: RadioGroupProps) {
  return (
    <Rac.RadioGroup
      data-slot="radio-group"
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        className,
        fieldStyles({
          orientation,
          className:
            "*:data-[slot=field-description]:mb-2 *:data-[slot=radio]:font-normal",
        }),
      )}
      {...props}
    >
      {(renderProps) =>
        typeof children === "function" ? children(renderProps) : children
      }
    </Rac.RadioGroup>
  );
}

/**
 * Derived from shadcn Label, Field (gap-3 but not items-start), FieldLabel (leading-snug overriding Label leading-none), RadioGroupItem
 * Radix has RadioGroupPrimitive.Item which is separate from label while RAC structures with a label.
 */
export function Radio({ className, children, ...props }: Rac.RadioProps) {
  return (
    <Rac.Radio
      data-slot="radio"
      className={composeTailwindRenderProps(className, [
        labelComponentStyles,
        "group gap-3 leading-snug",
      ])}
      {...props}
    >
      {(renderProps) => (
        <>
          <div
            data-slot="radio-group-item"
            className={twJoin(
              groupFocusVisibleStyles,
              "relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] dark:bg-input/30",
              "group-data-invalid:border-destructive group-data-invalid:ring-destructive/20 group-data-invalid:dark:ring-destructive/40",
            )}
          >
            {renderProps.isSelected && (
              <CircleIcon
                data-slot="radio-group-indicator"
                className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary"
              />
            )}
          </div>
          {typeof children === "function" ? children(renderProps) : children}
        </>
      )}
    </Rac.Radio>
  );
}
