"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Label } from "@/registry/default/ui/oui-label";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";
import { composeTailwindRenderProps } from "./oui-base";

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
        // The original shadcn used `nth-last-2:-mt-1` to apply negative margin when FieldDescription is second-to-last,
        // assuming it's followed by FieldError for tighter spacing. However, in RAC components, hidden elements
        // (e.g., aria-hidden divs) can make FieldDescription second-to-last even without FieldError, causing unwanted margin.
        //
        // Instead, `&:has(+:not([aria-hidden])):-mt-1` applies margin only when followed by a visible sibling (like FieldError),
        // avoiding RAC hidden elements while preserving the spacing intent.
        "text-sm leading-normal font-normal text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance",
        "[&:has(+:not([aria-hidden]))]:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
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
