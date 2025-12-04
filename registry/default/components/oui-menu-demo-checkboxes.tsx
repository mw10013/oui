"use client";

import type { Selection } from "react-aria-components";
import * as React from "react";
import { Button } from "@/registry/default/ui/oui-button";
import { Header } from "@/registry/default/ui/oui-header";
import { Menu, MenuItem, MenuSeparator } from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  CreditCardIcon,
  LogOutIcon,
  Settings2Icon,
  UserIcon,
} from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  const [appearanceSelectedKeys, setAppearanceSelectedKeys] =
    React.useState<Selection>(new Set(["statusBar"]));

  return (
    <Rac.MenuTrigger>
      <Button variant="outline">Menu Checkboxes</Button>
      <Popover>
        <Menu className="w-56">
          <Rac.MenuSection>
            <Header variant="menu">Account</Header>
            <MenuItem id="profile" textValue="Profile">
              <UserIcon className="mr-2 size-4" /> Profile
            </MenuItem>
            <MenuItem id="billing" textValue="Billing">
              <CreditCardIcon className="mr-2 size-4" /> Billing
            </MenuItem>
            <MenuItem id="settings" textValue="Settings">
              <Settings2Icon className="mr-2 size-4" /> Settings
            </MenuItem>
          </Rac.MenuSection>
          <MenuSeparator />
          <Rac.MenuSection
            selectionMode="multiple"
            selectedKeys={appearanceSelectedKeys}
            onSelectionChange={setAppearanceSelectedKeys}
          >
            <Header variant="menu">Appearance</Header>
            <MenuItem id="statusBar">Status Bar</MenuItem>
            <MenuItem id="activityBar" isDisabled>
              Activity Bar
            </MenuItem>
            <MenuItem id="panel">Panel</MenuItem>
          </Rac.MenuSection>
          <MenuSeparator />
          <Rac.MenuSection>
            <MenuItem id="signOut" textValue="Sign Out">
              <LogOutIcon className="mr-2 size-4" /> Sign Out
            </MenuItem>
          </Rac.MenuSection>
        </Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
