"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Dialog } from "@/registry/default/ui/oui-dialog";
import { Label } from "@/registry/default/ui/oui-label";
import { Link } from "@/registry/default/ui/oui-link";
import { Popover } from "@/registry/default/ui/oui-popover";
import { Text } from "@/registry/default/ui/oui-text";
import * as Rac from "react-aria-components";

export interface PopoverExProps extends Omit<Rac.PopoverProps, "children"> {
  triggerElement: string | React.ReactElement;
  dialogClassName?: string;
  children?: Rac.DialogProps["children"];
}

/**
 * A popover dialog.
 * If `triggerElement` is a string, it's rendered as a ghost `Button`.
 * The dialog is dismissable via an outside press if `role` is not "alertdialog".
 */
export function PopoverEx({
  triggerElement,
  dialogClassName,
  children,
  ...props
}: PopoverExProps) {
  return (
    <Rac.DialogTrigger>
      {typeof triggerElement === "string" ? (
        <Button variant="ghost">{triggerElement}</Button>
      ) : (
        triggerElement
      )}
      <Popover {...props}>
        <Dialog className={dialogClassName} hideCloseButtonForNonAlert>
          {children}
        </Dialog>
      </Popover>
    </Rac.DialogTrigger>
  );
}

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>PopoverEx</Label>
      <Text slot="description">
        A reusable wrapper for{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/Popover.html"
          underline="always"
        >
          Popover
        </Link>{" "}
        — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=popover-ex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
