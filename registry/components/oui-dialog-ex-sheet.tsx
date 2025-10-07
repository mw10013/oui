import type { VariantProps } from "class-variance-authority";
import {
  ModalExSheet,
  sheetModalVariants,
} from "@/registry/components/oui-modal-ex-sheet";
import { Button } from "@/registry/components/ui/oui-button";
import { Dialog, type DialogProps } from "@/registry/components/ui/oui-dialog";
import * as Rac from "react-aria-components";
import type { ReactElement } from "react";

export interface DialogExSheetProps
  extends Omit<DialogProps, "role">, // Prevent 'alertdialog' role
    Pick<VariantProps<typeof sheetModalVariants>, "side"> {
  triggerElement: string | ReactElement;
  modalClassName?: string;
  overlayClassName?: string;
}

/**
 * A sheet modal that slides in from a side of the screen.
 * The modal is always dismissable via an outside press.
 */
export function DialogExSheet({
  triggerElement,
  modalClassName,
  overlayClassName,
  side,
  ...props
}: DialogExSheetProps) {
  return (
    <Rac.DialogTrigger>
      {typeof triggerElement === "string" ? (
        <Button variant="ghost">{triggerElement}</Button>
      ) : (
        triggerElement
      )}
      <ModalExSheet
        className={modalClassName}
        overlayClassName={overlayClassName}
        side={side}
        isDismissable
      >
        <Dialog {...props} />
      </ModalExSheet>
    </Rac.DialogTrigger>
  );
}

export default function Component() {
  return <div className="p-4">DialogExSheet</div>;
}
