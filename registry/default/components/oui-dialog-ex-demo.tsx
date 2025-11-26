"use client";

import { DialogEx } from "@/registry/default/components/oui-dialog-ex";
import { Button } from "@/registry/default/ui/oui-button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Heading } from "@/registry/default/ui/oui-heading";
import { Input } from "@/registry/default/ui/oui-input";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <DialogEx
      triggerElement={<Button variant="outline">Dialog Ex</Button>}
      modalClassName="sm:max-w-[425px]"
    >
      <Rac.Form>
        <DialogHeader>
          <Heading slot="title">Edit profile</Heading>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
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
          <Button variant="outline" slot="close">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            Save changes
          </Button>
        </DialogFooter>
      </Rac.Form>
    </DialogEx>
  );
}
