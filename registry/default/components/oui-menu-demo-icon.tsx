"use client";

import { Button } from "@/registry/default/ui/oui-button";
import { Menu, MenuItem, MenuSeparator } from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  MoreHorizontalIcon,
  PencilIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Rac.MenuTrigger>
      <Button aria-label="Icon menu" variant="ghost" size="icon">
        <MoreHorizontalIcon />
      </Button>
      <Popover>
        <Menu>
          <MenuItem id="editIconColor" textValue="Edit">
            <PencilIcon className="mr-2 size-4 text-muted-foreground" />
            Edit
          </MenuItem>
          <MenuItem id="shareIconColor" textValue="Share">
            <ShareIcon className="mr-2 size-4 text-muted-foreground" />
            Share
          </MenuItem>
          <MenuSeparator />
          <MenuItem
            id="deleteIconColor"
            textValue="Delete"
            className="text-destructive data-focused:bg-destructive/10 data-focused:text-destructive"
          >
            <TrashIcon className="mr-2 size-4 text-destructive" />
            Delete
          </MenuItem>
        </Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
