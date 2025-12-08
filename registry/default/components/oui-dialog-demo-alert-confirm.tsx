"use client";

import { useState } from "react";
import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/oui-dialog";
import { Modal, ModalOverlay } from "@/registry/default/ui/oui-modal";

export default function Component() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        onPress={() => {
          setOpen(true);
        }}
      >
        Dialog Alert Confirm
      </Button>
      <ModalOverlay
        isOpen={isOpen}
        onOpenChange={setOpen}
        isKeyboardDismissDisabled
      >
        <Modal>
          <Dialog role="alertdialog">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                slot="close"
                autoFocus
                onPress={() => {
                  console.log("Cancelled");
                }}
              >
                Cancel
              </Button>
              <Button slot="close">Continue</Button>
            </DialogFooter>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  );
}
