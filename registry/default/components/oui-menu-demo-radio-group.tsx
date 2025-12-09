"use client";

import type { Selection } from "react-aria-components";
import * as React from "react";
import { Button } from "@/registry/default/ui/oui-button";
import { Menu, MenuHeader, MenuItem } from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import * as Rac from "react-aria-components";

export default function Component() {
  const [panelPositionKey, setPanelPositionKey] = React.useState<Selection>(
    new Set(["bottom"]),
  );

  return (
    <Rac.MenuTrigger>
      <Button variant="outline">Menu Radio Group</Button>
      <Popover>
        <Menu className="w-56">
          <Rac.MenuSection
            selectionMode="single"
            selectedKeys={panelPositionKey}
            onSelectionChange={setPanelPositionKey}
          >
            <MenuHeader>Panel Position</MenuHeader>
            <MenuItem id="top">Top</MenuItem>
            <MenuItem id="bottom">Bottom</MenuItem>
            <MenuItem id="right" isDisabled>
              Right
            </MenuItem>
          </Rac.MenuSection>
        </Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
