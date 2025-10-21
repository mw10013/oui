"use client";

import type { Selection } from "react-aria-components";
import * as React from "react";
import { MenuEx } from "@/registry/components/oui-menu-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { Header } from "@/registry/components/ui/oui-header";
import { MenuItem } from "@/registry/components/ui/oui-menu";
import * as Rac from "react-aria-components";

export default function Component() {
  const [panelPositionKey, setPanelPositionKey] = React.useState<Selection>(
    new Set(["bottom"]),
  );

  return (
    <MenuEx
      triggerElement={<Button variant="outline">MenuEx Radio Group</Button>}
      className="w-56"
    >
      <Rac.MenuSection
        selectionMode="single"
        selectedKeys={panelPositionKey}
        onSelectionChange={setPanelPositionKey}
      >
        <Header variant="menu" inset>
          Panel Position
        </Header>
        <MenuItem id="top">Top</MenuItem>
        <MenuItem id="bottom">Bottom</MenuItem>
        <MenuItem id="right" isDisabled>
          Right
        </MenuItem>
      </Rac.MenuSection>
    </MenuEx>
  );
}
