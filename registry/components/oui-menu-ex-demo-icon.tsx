"use client";
import { MenuEx } from "@/registry/components/oui-menu-ex";
import { Button } from "@/registry/components/ui/oui-button";
import { MenuItem } from "@/registry/components/ui/oui-menu";
import { Separator } from "@/registry/components/ui/oui-separator";
import {
  MoreHorizontalIcon,
  PencilIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react";

export default function Component() {
  return (
    <MenuEx
      triggerElement={
        <Button variant="ghost" size="icon">
          <MoreHorizontalIcon />
          <span className="sr-only">Toggle menu</span>
        </Button>
      }
    >
      <MenuItem id="editIconColor" textValue="Edit">
        <PencilIcon className="mr-2 size-4 text-muted-foreground" />
        Edit
      </MenuItem>
      <MenuItem id="shareIconColor" textValue="Share">
        <ShareIcon className="mr-2 size-4 text-muted-foreground" />
        Share
      </MenuItem>
      <Separator variant="menu" />
      <MenuItem
        id="deleteIconColor"
        textValue="Delete"
        className="text-destructive data-focused:bg-destructive/10 data-focused:text-destructive"
      >
        <TrashIcon className="mr-2 size-4 text-destructive" />
        Delete
      </MenuItem>
    </MenuEx>
  );
}
