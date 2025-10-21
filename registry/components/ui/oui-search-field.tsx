"use client";

import { composeTailwindRenderProps } from "@/registry/components/ui/oui-base";
import * as Rac from "react-aria-components";

/**
 * Derived styles from shadcn FormItem
 */
export function SearchField({ className, ...props }: Rac.SearchFieldProps) {
  return (
    <Rac.SearchField
      className={composeTailwindRenderProps(className, "group grid gap-2")}
      {...props}
    />
  );
}
