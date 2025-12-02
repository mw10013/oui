"use client";

import { modalExSheetClassName } from "@/registry/default/components/oui-modal-ex-sheet";
import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Heading } from "@/registry/default/ui/oui-heading";
import { Input } from "@/registry/default/ui/oui-input";
import { Modal, ModalOverlay } from "@/registry/default/ui/oui-modal";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Modal Ex Sheet</Button>
      <ModalOverlay isDismissable>
        <Modal className={modalExSheetClassName({ side: "right" })}>
          <Dialog>
            <Rac.Form>
              <DialogHeader>
                <Heading slot="title">Edit profile</Heading>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
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
              </div>
              <DialogFooter>
                <Button type="submit" slot="close">
                  Save changes
                </Button>
                <Button variant="outline" slot="close">
                  Close
                </Button>
              </DialogFooter>
            </Rac.Form>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </Rac.DialogTrigger>
  );
}
