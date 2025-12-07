"use client";

import { Button } from "@/registry/default/ui/oui-button";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { FieldGroup, FieldLabel } from "@/registry/default/ui/oui-field";
import { Heading } from "@/registry/default/ui/oui-heading";
import { Input } from "@/registry/default/ui/oui-input";
import { Popover } from "@/registry/default/ui/oui-popover";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.DialogTrigger>
      <Button variant="outline">Popover</Button>
      <Popover className="w-80">
        <Dialog showCloseButton={false}>
          <DialogHeader>
            <Heading variant="popover" slot="title">
              Dimensions
            </Heading>
            <DialogDescription>
              Set the dimensions for the layer.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 *:col-span-full *:grid *:grid-cols-subgrid">
            <TextField name="width" defaultValue="100%" autoFocus>
              <FieldLabel>Width</FieldLabel>
              <Input />
            </TextField>
            <TextField name="maxWidth" defaultValue="300px">
              <FieldLabel>Max. width</FieldLabel>
              <Input />
            </TextField>
            <TextField name="height" defaultValue="25px">
              <FieldLabel>Height</FieldLabel>
              <Input />
            </TextField>
            <TextField name="maxHeight" defaultValue="none">
              <FieldLabel>Max. height</FieldLabel>
              <Input />
            </TextField>
          </FieldGroup>
        </Dialog>
      </Popover>
    </Rac.DialogTrigger>
  );
}
