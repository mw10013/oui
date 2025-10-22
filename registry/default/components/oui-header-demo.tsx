"use client";

import { MenuEx } from "@/registry/default/components/oui-menu-ex";
import { Button } from "@/registry/default/ui/oui-button";
import { Header } from "@/registry/default/ui/oui-header";
import { MenuItem } from "@/registry/default/ui/oui-menu";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <MenuEx
      triggerElement={<Button variant="outline">Header</Button>}
      className="w-56"
    >
      <Rac.MenuSection>
        <Header variant="menu">Header</Header>
        <MenuItem id="profile">Profile</MenuItem>
        <MenuItem id="settings">Settings</MenuItem>
      </Rac.MenuSection>
    </MenuEx>
  );
}
