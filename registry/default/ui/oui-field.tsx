"use client";

import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { Label } from "@/registry/default/ui/oui-label";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * FieldLabel
 * Derived from shadcn FieldLabel in field.tsx
 */
export function FieldLabel({ className, ...props }: Rac.LabelProps) {
  return (
    <Label
      className={twMerge(
        "w-fit leading-snug",
        "group-data-disabled/field:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

/**
 * FieldDescription
 * Derived from shadcn FieldDescription in field.tsx
 */
export function FieldDescription({ className, ...props }: Rac.TextProps) {
  return (
    <Rac.Text
      slot="description"
      className={twMerge(
        "text-sm leading-normal font-normal text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

/**
 * FieldError
 * Derived from shadcn FieldError in field.tsx
 */
export function FieldError({ className, ...props }: Rac.FieldErrorProps) {
  return (
    <Rac.FieldError
      className={composeTailwindRenderProps(className, [
        "text-sm font-normal text-destructive",
      ])}
      {...props}
    />
  );
}
