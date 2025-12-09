"use client";

import { composeTailwindRenderProps } from "@/registry/default/ui/oui-base";
import * as Rac from "react-aria-components";

/**
 * Derived styles from shadcn FormItem
 */
export function SearchField({ className, ...props }: Rac.SearchFieldProps) {
  return (
    <Rac.SearchField
      data-slot="search-field"
      data-slot-type="field"
      className={composeTailwindRenderProps(className, "group grid gap-2")}
      {...props}
    />
  );
}
