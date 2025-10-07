import * as Rac from "react-aria-components";
import { composeTailwindRenderProps, focusVisibleStyles } from "@/registry/components/ui/oui-base";

/**
 * Derived from shadcn Input
 */
export function Group({ className, ...props }: Rac.GroupProps) {
  return (
    <Rac.Group
      className={composeTailwindRenderProps(className, [
        focusVisibleStyles,
        "border-input inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border",
        "data-[invalid]:ring-destructive/20 dark:data-[invalid]:ring-destructive/40 data-[invalid]:border-destructive",
      ])}
      {...props}
    />
  );
}
