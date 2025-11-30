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
import { twMerge } from "tailwind-merge";
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

export type FieldProps = React.ComponentProps<"div"> &
  VariantProps<typeof fieldStyles>;

export function Field({
  orientation = "vertical",
  className,
  ...props
}: FieldProps) {
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
      className={twMerge(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-disabled/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
        "has-data-selected:border-primary has-data-selected:bg-primary/5 dark:has-data-selected:bg-primary/10",
        // shadcn does not have. We use this for the case where an RAC control appears after the label.
        "group-has-data-disabled/field:opacity-50",
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
        // shadcn does not have. We use this for the case where an RAC control appears after the description.
        "group-has-data-disabled/field:opacity-50",
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

/**
 * Hook that generates an ID but only returns it if an element with that ID exists in the DOM.
 * Prevents dangling aria-describedby references when slotted elements are not rendered.
 *
 * Simplified version of RAC's useSlotId. Edge case: if a slotted child suspends after the
 * parent renders but before mounting, the ID may dangle until the next render. This doesn't
 * apply when Suspense wraps the entire Field—only when a slot child itself suspends.
 */
export function useSlotId(deps: React.DependencyList = []): string | undefined {
  const id = React.useId();
  const [resolvedId, setResolvedId] = React.useState<string | undefined>(id);
  React.useLayoutEffect(() => {
    setResolvedId(document.getElementById(id) ? id : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ...deps]);
  return resolvedId;
}

/**
 * Field to compose a checkbox with a field description.
 *
 * @example
 * ```tsx
 * #import * as Oui from "@/components/ui/oui-index";
 *
 * <Oui.FieldCheckbox>
 *   <Oui.Checkbox defaultSelected>Sync Desktop & Documents folders</Oui.Checkbox>
 *   <Oui.FieldDescription>
 *     Your Desktop & Documents folders are being synced with iCloud Drive.
 *     You can access them from other devices.
 *   </Oui.FieldDescription>
 * </Oui.FieldCheckbox>
 * ```
 *
 * Not necessary if you have no description.
 */
export function FieldCheckbox({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const descriptionId = useSlotId();
  return (
    <div
      data-slot="field"
      className={twMerge(
        "group/field grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5",
        "*:data-[slot=checkbox]:col-span-full *:data-[slot=checkbox]:grid *:data-[slot=checkbox]:grid-cols-subgrid",
        "*:data-[slot=field-description]:col-start-2",
        className,
      )}
      {...props}
    >
      <Rac.Provider
        values={[
          [Rac.CheckboxContext, { "aria-describedby": descriptionId }],
          [
            Rac.TextContext,
            {
              slots: {
                description: { id: descriptionId },
              },
            },
          ],
        ]}
      >
        {children}
      </Rac.Provider>
    </div>
  );
}

/**
 * Field to compose a switch with a label and field description.
 *
 * @example
 * ```tsx
 * #import * as Oui from "@/components/ui/oui-index";
 *
 * <Oui.FieldSwitch orientation="horizontal">
 *   <Oui.FieldContent>
 *     <Oui.FieldLabel>Multi-factor authentication</Oui.FieldLabel>
 *     <Oui.FieldDescription>
 *       Enable multi-factor authentication.
 *     </Oui.FieldDescription>
 *   </Oui.FieldContent>
 *   <Oui.Switch />
 * </Oui.FieldSwitch>
 * ```
 *
 * Not necessary if you have no description.
 */
export function FieldSwitch({
  orientation = "vertical",
  className,
  children,
  ...props
}: FieldProps) {
  const switchId = React.useId();
  const descriptionId = useSlotId();
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={twMerge(fieldStyles({ orientation }), className)}
      {...props}
    >
      <Rac.Provider
        values={[
          [
            Rac.SwitchContext,
            { id: switchId, "aria-describedby": descriptionId },
          ],
          [Rac.LabelContext, { htmlFor: switchId }],
          [
            Rac.TextContext,
            {
              slots: {
                description: { id: descriptionId },
              },
            },
          ],
        ]}
      >
        {children}
      </Rac.Provider>
    </div>
  );
}
