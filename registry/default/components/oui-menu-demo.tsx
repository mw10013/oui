"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Keyboard } from "@/registry/default/ui/oui-keyboard";
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.MenuTrigger>
      <Button variant="outline">Menu</Button>
      <Popover>
        <Menu className="w-56">
          <Rac.MenuSection>
            <MenuHeader>My Account</MenuHeader>
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
          <MenuSeparator />
          <Rac.MenuSection>
            <MenuItem id="team">Team</MenuItem>
            <Rac.SubmenuTrigger>
              <MenuItem id="invite">Invite users</MenuItem>
              <Popover>
                <Menu>
                  <MenuItem id="email">Email</MenuItem>
                  <MenuItem id="message">Message</MenuItem>
                  <MenuSeparator />
                  <MenuItem id="more">More...</MenuItem>
                </Menu>
              </Popover>
            </Rac.SubmenuTrigger>
            <MenuItem id="newTeam">
              New Team
              <Keyboard>⌘+T</Keyboard>
            </MenuItem>
          </Rac.MenuSection>
          <MenuSeparator />
          <Rac.MenuSection>
            <MenuItem id="github">GitHub</MenuItem>
            <MenuItem id="support">Support</MenuItem>
            <MenuItem id="api" isDisabled>
              API
            </MenuItem>
          </Rac.MenuSection>
          <MenuSeparator />
          <MenuItem id="logout">
            Log out
            <Keyboard>⇧⌘Q</Keyboard>
          </MenuItem>
        </Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
