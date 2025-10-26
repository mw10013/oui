"use client";

import { PopoverEx } from "@/registry/default/components/oui-popover-ex";
import { TextFieldExHorizontal } from "@/registry/default/components/oui-text-field-ex-horizontal";
import { Button } from "@/registry/default/ui/oui-button";
import {
  DialogDescription,
  DialogHeader,
} from "@/registry/default/ui/oui-dialog";
import { Heading } from "@/registry/default/ui/oui-heading";

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
      <div className="grid gap-2">
        <TextFieldExHorizontal
          name="width"
          label="Width"
          defaultValue="100%"
          autoFocus
        />
        <TextFieldExHorizontal
          name="maxWidth"
          label="Max. width"
          defaultValue="300px"
        />
        <TextFieldExHorizontal
          name="height"
          label="Height"
          defaultValue="25px"
        />
        <TextFieldExHorizontal
          name="maxHeight"
          label="Max. height"
          defaultValue="none"
        />
      </div>
    </PopoverEx>
  );
}
