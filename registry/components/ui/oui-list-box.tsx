import {
  composeTailwindRenderProps,
  disabledStyles,
  focusVisibleStyles,
} from "@/registry/components/ui/oui-base";
import { Check } from "lucide-react";
import * as Rac from "react-aria-components";

/** Styles derived from shadcn SelectItem.
 * https://github.com/adobe/react-spectrum/issues/7601
 */
export function ListBoxItem<T extends object>({
  className,
  children,
  ...props
}: Rac.ListBoxItemProps<T>) {
  return (
    <Rac.ListBoxItem
      {...props}
      textValue={
        props.textValue ?? (typeof children === "string" ? children : undefined)
      }
      className={composeTailwindRenderProps(className, [
        focusVisibleStyles,
        disabledStyles,
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        "data-[focused]:bg-accent data-[focused]:text-accent-foreground",
        "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
      ])}
    >
      {Rac.composeRenderProps(children, (children, renderProps) => (
        <>
          {renderProps.isSelected && (
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
              <Check className="size-4" />
            </span>
          )}
          {children}
        </>
      ))}
    </Rac.ListBoxItem>
  );
}
