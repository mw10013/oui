"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Keyboard } from "@/registry/default/ui/oui-keyboard";
import { Menu, MenuItem } from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.MenuTrigger>
      <Button variant="outline">Keyboard</Button>
      <Popover>
        <Menu className="w-56">
          <MenuItem id="keyboard">
            Keyboard
            <Keyboard>⌘K</Keyboard>
          </MenuItem>
        </Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
