"use client";

import type { Selection } from "react-aria-components";
import * as React from "react";
import { MenuEx } from "@/registry/components/oui-menu-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { Header } from "@/registry/components/ui/oui-header";
import { MenuItem } from "@/registry/components/ui/oui-menu";
import { Separator } from "@/registry/components/ui/oui-separator";
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
    <MenuEx
      triggerElement={<Button variant="outline">MenuEx Checkboxes</Button>}
      className="w-56"
    >
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
      <Separator variant="menu" />
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
      <Separator variant="menu" />
      <Rac.MenuSection>
        <MenuItem id="signOut" textValue="Sign Out">
          <LogOutIcon className="mr-2 size-4" /> Sign Out
        </MenuItem>
      </Rac.MenuSection>
    </MenuEx>
  );
}
