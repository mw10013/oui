"use client";

import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/oui-dialog";
import { Modal, ModalOverlay } from "@/registry/default/ui/oui-modal";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Dialog Alert</Button>
      <ModalOverlay isKeyboardDismissDisabled>
        <Modal>
          <Dialog role="alertdialog">
            <DialogHeader>
              <DialogTitle>Session Expired</DialogTitle>
              <DialogDescription>
                Your session has expired due to inactivity. Please log in again
                to continue using the application.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button slot="close" autoFocus>
                OK
              </Button>
            </DialogFooter>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </Rac.DialogTrigger>
  );
}
