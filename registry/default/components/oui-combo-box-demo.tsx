"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { ButtonGroup } from "@/registry/default/ui/oui-button-group";
import { ComboBox } from "@/registry/default/ui/oui-combo-box";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import { ChevronDown } from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <ComboBox>
      <Label>Combo Box</Label>
      <ButtonGroup>
        <Input />
        <Button variant="outline">
          <ChevronDown className="opacity-50" />
        </Button>
      </ButtonGroup>
      <Popover>
        <Rac.ListBox>
          <ListBoxItem>Aardvark</ListBoxItem>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </Rac.ListBox>
      </Popover>
    </ComboBox>
  );
}
