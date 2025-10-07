import * as Rac from "react-aria-components";
import { composeTailwindRenderProps } from "@/registry/components/ui/oui-base";

/**
 * Derived from shadcn FormMessage
 * https://github.com/adobe/react-spectrum/issues/7525
 */
export function FieldError({ className, ...props }: Rac.FieldErrorProps) {
  // https://github.com/adobe/react-spectrum/issues/7525
  return (
    <Rac.TextContext.Provider value={{ elementType: "p" }}>
      <Rac.FieldError
        data-slot="form-message"
        className={composeTailwindRenderProps(
          className,
          "text-destructive text-sm",
        )}
        {...props}
      />
    </Rac.TextContext.Provider>
  );
}
