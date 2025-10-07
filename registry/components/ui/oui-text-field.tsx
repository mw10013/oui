import { composeTailwindRenderProps } from "@/registry/components/ui/oui-base";
import * as Rac from "react-aria-components";

/**
 * Derived styles from shadcn FormItem
 */
export function TextField({ className, ...props }: Rac.TextFieldProps) {
  return (
    <Rac.TextField
      data-slot="form-item"
      className={composeTailwindRenderProps(className, "group grid gap-2")}
      {...props}
    />
  );
}
