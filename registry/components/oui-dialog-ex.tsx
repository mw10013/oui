"use client";

import type { DialogProps } from "@/registry/components/ui/oui-dialog";
import type { ReactElement } from "react";
import { ModalEx } from "@/registry/components/oui-modal-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { Dialog } from "@/registry/components/ui/oui-dialog";
import { Label } from "@/registry/components/ui/oui-label";
import { Link } from "@/registry/components/ui/oui-link";
import { Text } from "@/registry/components/ui/oui-text";
import * as Rac from "react-aria-components";

export interface DialogExProps
  extends DialogProps,
    Partial<
      Pick<Rac.ModalOverlayProps, "isOpen" | "defaultOpen" | "onOpenChange">
    > {
  triggerElement?: string | ReactElement;
  modalClassName?: string;
}

/**
 * A modal dialog that can be opened via a trigger element or programmatically.
 *
 * If `triggerElement` is provided, it will be rendered and will open the dialog
 * when pressed.
 *
 * If `triggerElement` is omitted, the dialog must be controlled programmatically.
 *
 * In both cases, the open state can be uncontrolled (using `defaultOpen`) or
 * controlled (using `isOpen` and `onOpenChange`).
 */
export function DialogEx({
  triggerElement,
  modalClassName,
  isOpen,
  defaultOpen,
  onOpenChange,
  ...props
}: DialogExProps) {
  const modal = (
    <ModalEx
      className={modalClassName}
      isDismissable={props.role !== "alertdialog"}
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <Dialog {...props} />
    </ModalEx>
  );
  if (triggerElement) {
    return (
      <Rac.DialogTrigger
        isOpen={isOpen}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        {typeof triggerElement === "string" ? (
          <Button variant="ghost">{triggerElement}</Button>
        ) : (
          triggerElement
        )}
        {modal}
      </Rac.DialogTrigger>
    );
  }
  return modal;
}

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>DialogEx</Label>
      <Text slot="description">
        A reusable wrapper for a modal{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/Dialog.html"
          underline="always"
        >
          Dialog
        </Link>{" "}
        that can be opened via a trigger element or programmatically — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=dialog-ex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
