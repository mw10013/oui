"use client";

import { tw } from "@/registry/default/ui/oui-base";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

/**
 * Derived from shadcn Label and FormLabel
 *
 * For RAC components that structure with a 'label' prefer 'labelComponentStyles' instead.
 */
export const baseLabelStyles = tw`flex items-center gap-2 text-sm leading-none font-medium select-none`;

/**
 * Label styles for RAC components that structure with a 'label' and have render props (eg. radio, checkbox and switch).
 * It styles disabled. It does not style focus-visible.
 * Derived from shadcn Label and FormLabel
 */
export const labelComponentStyles = twJoin(
  baseLabelStyles,
  // Cannot use 'disabledStyles' from oui-base since it includes pointer-events-none preventing cursor style.
  "data-disabled:cursor-not-allowed data-disabled:opacity-50",
);

export function Label({ className, ...props }: Rac.LabelProps) {
  return (
    <Rac.Label
      data-slot="label"
      className={twMerge(
        baseLabelStyles,
        "group-data-disabled:pointer-events-none group-data-disabled:opacity-50 group-data-invalid:text-destructive peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

/* shadcn Label
  "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
*/

/* shadcn FieldLabel 
  "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
  "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
  "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
*/

/* oui Label (combine shadcn Label and FieldLabel)
  "flex items-center w-fit gap-2 text-sm leading-snug font-medium select-none",
  "group/field-label peer/field-label group-data-disabled:pointer-events-none group-data-disabled:opacity-50 group-data-disabled/field:opacity-50 peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50",
  "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
  "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10"

  Conflicts and resolutions:
  - Layout: shadcn Label uses "flex items-center", shadcn FieldLabel uses "flex w-fit". 
    Resolved by including both for maximum flexibility in RAC layouts.
  - Leading: shadcn Label uses "leading-none", shadcn FieldLabel uses "leading-snug".
    Resolved by using "leading-snug" as it's more appropriate for field labels in RAC components, prioritizing readability over compactness and is the more common use case.
  - Disabled styles: shadcn Label uses "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50". 
    shadcn FieldLabel uses "group-data-[disabled=true]/field:opacity-50". 
    Resolved by including all disabled styles, adapted to RAC data attributes (changed "data-[disabled=true]" to "data-disabled" and "peer-disabled" to "peer-data-disabled" for consistency with RAC conventions).
*/
