"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import { Label } from "@/registry/default/ui/oui-label";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

/**
 * Derived from shadcn Field.
 */
export const fieldStyles = cva(
  "group/field flex w-full gap-3 data-invalid:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col *:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "*:data-[slot=field-label]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:*:data-[slot=field-label]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

export type FieldStylesProps = VariantProps<typeof fieldStyles>;

/**
 * FieldLabel
 * Derived from shadcn FieldLabel in field.tsx
 */
export function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={twJoin(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-disabled/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
        "has-data-selected:border-primary has-data-selected:bg-primary/5 dark:has-data-selected:bg-primary/10",
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
      data-slot="field-description"
      elementType="p"
      className={twMerge(
        "text-muted-foreground text-sm leading-normal font-normal group-has-data-[orientation=horizontal]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
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
