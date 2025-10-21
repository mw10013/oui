"use client";

import { Button } from "@/registry/components/ui/oui-button";
import { ComboBox } from "@/registry/components/ui/oui-combo-box";
import { Group } from "@/registry/components/ui/oui-group";
import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { Popover } from "@/registry/components/ui/oui-popover";
import { ChevronDown } from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <ComboBox>
      <Label>ComboBox</Label>
      <Group>
        <Input variant="ghost" />
        <Button variant="ghost" size="icon">
          <ChevronDown className="size-4 shrink-0 opacity-50" />
        </Button>
      </Group>
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
