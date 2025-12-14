"use client";

import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/oui-dialog";
import {
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Modal, ModalOverlay } from "@/registry/default/ui/oui-modal";
import { sheetModalClassName } from "@/registry/default/ui/oui-sheet";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Sheet</Button>
      <ModalOverlay isDismissable>
        <Modal className={sheetModalClassName({ side: "right" })}>
          <Rac.Form>
            <Dialog>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup className="gap-4 py-4">
                <TextField name="name" autoFocus>
                  <FieldLabel>Name</FieldLabel>
                  <Input defaultValue="Pedro Duarte" />
                  <FieldError />
                </TextField>
                <TextField name="username">
                  <FieldLabel>Username</FieldLabel>
                  <Input defaultValue="@peduarte" />
                  <FieldError />
                </TextField>
              </FieldGroup>
              <DialogFooter>
                <Button type="submit" slot="close">
                  Save changes
                </Button>
                <Button variant="outline" slot="close">
                  Close
                </Button>
              </DialogFooter>
            </Dialog>
          </Rac.Form>
        </Modal>
      </ModalOverlay>
    </Rac.DialogTrigger>
  );
}
