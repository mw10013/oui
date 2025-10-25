"use client";

import { DialogExSheet } from "@/registry/default/components/oui-dialog-ex-sheet";
import { TextFieldEx } from "@/registry/default/components/oui-text-field-ex";
import { Button } from "@/registry/default/ui/oui-button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <DialogExSheet
      triggerElement={<Button variant="outline">Dialog Ex Sheet</Button>}
      side="right"
    >
      <Rac.Form>
        <DialogHeader>
          <Heading slot="title">Edit profile</Heading>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <TextFieldEx
            name="name"
            label="Name"
            defaultValue="Pedro Duarte"
            autoFocus
          />
          <TextFieldEx
            name="username"
            label="Username"
            defaultValue="@peduarte"
          />
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
    </DialogExSheet>
  );
}
