"use client";

import { PopoverEx } from "@/registry/default/components/oui-popover-ex";
import { TextFieldExHorizontal } from "@/registry/default/components/oui-text-field-ex-horizontal";
import { Button } from "@/registry/default/ui/oui-button";
import {
  DialogDescription,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";
import * as Oui from "@/registry/default/ui/oui-index";

export default function Component() {
  return (
    <PopoverEx
      triggerElement={<Button variant="outline">Popover Ex</Button>}
      className="w-80"
    >
      <DialogHeader>
        <Heading variant="popover" slot="title">
          Dimensions
        </Heading>
        <DialogDescription>Set the dimensions for the layer.</DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 *:col-span-full *:grid *:grid-cols-subgrid">
        <Oui.TextField name="width" defaultValue="100%" autoFocus>
          <Oui.FieldLabel>Width</Oui.FieldLabel>
          <Oui.Input />
        </Oui.TextField>
        <Oui.TextField name="maxWidth" defaultValue="300px">
          <Oui.FieldLabel>Max. width</Oui.FieldLabel>
          <Oui.Input />
        </Oui.TextField>
        <Oui.TextField name="height" defaultValue="25px">
          <Oui.FieldLabel>Height</Oui.FieldLabel>
          <Oui.Input />
        </Oui.TextField>
        <Oui.TextField name="maxHeight" defaultValue="none">
          <Oui.FieldLabel>Max. height</Oui.FieldLabel>
          <Oui.Input />
        </Oui.TextField>
      </div>
    </PopoverEx>
  );
}
