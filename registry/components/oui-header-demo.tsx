import { MenuEx } from "@/registry/components/oui-menu-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { Header } from "@/registry/components/ui/oui-header";
import { MenuItem } from "@/registry/components/ui/oui-menu";
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
