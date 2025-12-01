"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Header } from "@/registry/default/ui/oui-header";
import { Menu, MenuItem } from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.MenuTrigger>
      <Button variant="outline">Header</Button>
      <Popover>
        <Menu className="w-56">
          <Rac.MenuSection>
            <Header variant="menu">Header</Header>
            <MenuItem id="profile">Profile</MenuItem>
            <MenuItem id="settings">Settings</MenuItem>
          </Rac.MenuSection>
        </Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
