"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  FieldContent,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/registry/default/ui/field";
import { Label } from "@/registry/default/ui/oui-label";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";
import { composeTailwindRenderProps } from "./oui-base";

export {
  FieldSet,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldContent,
  FieldTitle,
};

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

export function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldStyles>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={twMerge(fieldStyles({ orientation }), className)}
      {...props}
    />
  );
}

export type FieldStylesProps = VariantProps<typeof fieldStyles>;

/**
 * FieldLabel
 * Derived from shadcn FieldLabel.
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
        "text-sm leading-normal font-normal text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance",
        // shadcn uses `last:mt-0` which breaks with RAC `aria-hidden`.
        // `&:not(:has(~_:not([aria-hidden])))` selects the last visible FieldDescription (no subsequent visible siblings).
        // - ~_ : any subsequent sibling (space from _)
        // - :not([aria-hidden]) : not hidden (visible)
        // - :has(...) : has a subsequent visible sibling
        // - :not(...) : does NOT have subsequent visible siblings → last visible
        "[&:not(:has(~_:not([aria-hidden])))]:mt-0",
        // shadcn uses `nth-last-2:-mt-1` which breaks with RAC `aria-hidden`.
        // `&:has(+_:not([aria-hidden])):not(:has(+_:not([aria-hidden])~_:not([aria-hidden])))` selects the second-to-last visible FieldDescription (exactly one subsequent visible sibling).
        // - +_ : immediately following sibling (space from _)
        // - :not([aria-hidden]) : not hidden (visible)
        // - First :has(...) : has an adjacent visible sibling
        // - Second :has(...) : that adjacent visible has another visible sibling after it
        // - :not(second :has) : the adjacent visible does NOT have another after → adjacent is last visible
        // - Combined: has adjacent visible (which is last) → this is second-to-last visible
        "[&:has(+_:not([aria-hidden])):not(:has(+_:not([aria-hidden])~_:not([aria-hidden])))]:-mt-1",
        "[[data-variant=legend]+&]:-mt-1.5",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

export function FieldError({
  className,
  children,
  ...props
}: Rac.FieldErrorProps) {
  // https://github.com/adobe/react-spectrum/issues/7525
  return (
    <Rac.TextContext.Provider value={{ elementType: "div" }}>
      <Rac.FieldError
        data-slot="field-error"
        className={composeTailwindRenderProps(
          className,
          "text-sm font-normal text-destructive",
        )}
        {...props}
      >
        {(renderProps) =>
          children ? (
            typeof children === "function" ? (
              children(renderProps)
            ) : (
              children
            )
          ) : renderProps.isInvalid ? (
            renderProps.validationErrors.length === 1 ? (
              renderProps.validationErrors[0]
            ) : (
              <ul className="ml-4 flex list-disc flex-col gap-1">
                {renderProps.validationErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )
          ) : null
        }
      </Rac.FieldError>
    </Rac.TextContext.Provider>
  );
}

/* shadcn FieldError

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}
*/
