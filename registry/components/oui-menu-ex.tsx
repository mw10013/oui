import { Button } from "@/registry/components/ui/oui-button";
import { Menu } from "@/registry/components/ui/oui-menu";
import { Popover } from "@/registry/components/ui/oui-popover";
import * as Rac from "react-aria-components";

export interface MenuExProps<T> extends Rac.MenuProps<T> {
  triggerElement: string | React.ReactElement;
}

/**
 * If `triggerElement` is a string, it's rendered as a ghost `Button`.
 */
export function MenuEx<T extends object>({
  triggerElement,
  children,
  ...rest
}: MenuExProps<T>) {
  return (
    <Rac.MenuTrigger>
      {typeof triggerElement === "string" ? (
        <Button variant="ghost">{triggerElement}</Button>
      ) : (
        triggerElement
      )}
      <Popover>
        <Menu {...rest}>{children}</Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}

export default function Component() {
  return <div className="p-4">MenuEx</div>;
}
