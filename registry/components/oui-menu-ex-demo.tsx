import { MenuEx } from "@/registry/components/oui-menu-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { Header } from "@/registry/components/ui/oui-header";
import { Keyboard } from "@/registry/components/ui/oui-keyboard";
import { Menu, MenuItem } from "@/registry/components/ui/oui-menu";
import { Popover } from "@/registry/components/ui/oui-popover";
import { Separator } from "@/registry/components/ui/oui-separator";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <MenuEx
      triggerElement={<Button variant="outline">MenuEx</Button>}
      className="w-56"
    >
      <Rac.MenuSection>
        <Header variant="menu">My Account</Header>
        <MenuItem id="profile">
          Profile
          <Keyboard>⇧⌘P</Keyboard>
        </MenuItem>
        <MenuItem id="billing">
          Billing
          <Keyboard>⌘B</Keyboard>
        </MenuItem>
        <MenuItem id="settings">
          Settings
          <Keyboard>⌘S</Keyboard>
        </MenuItem>
        <MenuItem id="shortcuts">
          Keyboard shortcuts
          <Keyboard>⌘K</Keyboard>
        </MenuItem>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <Rac.MenuSection>
        <MenuItem id="team">Team</MenuItem>
        <Rac.SubmenuTrigger>
          <MenuItem id="invite">Invite users</MenuItem>
          <Popover>
            <Menu>
              <MenuItem id="email">Email</MenuItem>
              <MenuItem id="message">Message</MenuItem>
              <Separator variant="menu" />
              <MenuItem id="more">More...</MenuItem>
            </Menu>
          </Popover>
        </Rac.SubmenuTrigger>
        <MenuItem id="newTeam">
          New Team
          <Keyboard>⌘+T</Keyboard>
        </MenuItem>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <Rac.MenuSection>
        <MenuItem id="github">GitHub</MenuItem>
        <MenuItem id="support">Support</MenuItem>
        <MenuItem id="api" isDisabled>
          API
        </MenuItem>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <MenuItem id="logout">
        Log out
        <Keyboard>⇧⌘Q</Keyboard>
      </MenuItem>
    </MenuEx>
  );
}
