"use client";

import * as React from "react";
import { Button } from "@/registry/default/ui/oui-button";
import { ButtonGroup } from "@/registry/default/ui/oui-button-group";
import { Menu, MenuItem, MenuSeparator } from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import * as Rac from "react-aria-components";

export default function OuiButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal");

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <Rac.MenuTrigger>
          <Button variant="outline" size="icon" aria-label="More Options">
            <MoreHorizontalIcon />
          </Button>
          <Popover placement="bottom end">
            <Menu className="w-52">
              <MenuItem>
                <MailCheckIcon />
                Mark as Read
              </MenuItem>
              <MenuItem>
                <ArchiveIcon />
                Archive
              </MenuItem>
              <MenuSeparator />
              <MenuItem>
                <ClockIcon />
                Snooze
              </MenuItem>
              <MenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </MenuItem>
              <MenuItem>
                <ListFilterPlusIcon />
                Add to List
              </MenuItem>
              <Rac.SubmenuTrigger>
                <MenuItem>
                  <TagIcon />
                  Label As...
                </MenuItem>
                <Popover>
                  <Menu
                    selectionMode="single"
                    selectedKeys={new Set([label])}
                    onSelectionChange={(keys) => {
                      setLabel(Array.from(keys)[0] as string);
                    }}
                  >
                    <MenuItem id="personal">Personal</MenuItem>
                    <MenuItem id="work">Work</MenuItem>
                    <MenuItem id="other">Other</MenuItem>
                  </Menu>
                </Popover>
              </Rac.SubmenuTrigger>
              <MenuSeparator />
              <MenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </MenuItem>
            </Menu>
          </Popover>
        </Rac.MenuTrigger>
      </ButtonGroup>
    </ButtonGroup>
  );
}
