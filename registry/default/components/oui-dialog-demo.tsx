"use client";

import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/oui-dialog";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Modal, ModalOverlay } from "@/registry/default/ui/oui-modal";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Dialog</Button>
      <ModalOverlay isDismissable>
        <Modal className="sm:max-w-[425px]">
          <Dialog>
            <Rac.Form>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <TextField name="name" autoFocus defaultValue="Pedro Duarte">
                  <FieldLabel>Name</FieldLabel>
                  <Input />
                  <FieldError />
                </TextField>
                <TextField name="username" defaultValue="@peduarte">
                  <FieldLabel>Username</FieldLabel>
                  <Input />
                  <FieldError />
                </TextField>
              </div>
              <DialogFooter>
                <Button variant="outline" slot="close">
                  Cancel
                </Button>
                <Button type="submit" slot="close">
                  Save changes
                </Button>
              </DialogFooter>
            </Rac.Form>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </Rac.DialogTrigger>
  );
}
