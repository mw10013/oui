"use client";
import { MenuEx } from "@/registry/components/oui-menu-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { Keyboard } from "@/registry/components/ui/oui-keyboard";
import { MenuItem } from "@/registry/components/ui/oui-menu";

export default function Component() {
  return (
    <MenuEx
      triggerElement={<Button variant="outline">Keyboard</Button>}
      className="w-56"
    >
      <MenuItem id="keyboard">
        Keyboard
        <Keyboard>⌘K</Keyboard>
      </MenuItem>
    </MenuEx>
  );
}
