"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextArea,
} from "@/registry/default/ui/oui-input-group";
import { Menu, MenuItem } from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
import { Separator } from "@/registry/default/ui/oui-separator";
import { Tooltip } from "@/registry/default/ui/oui-tooltip";
import { IconCheck, IconInfoCircle, IconPlus } from "@tabler/icons-react";
import { ArrowUpIcon, Search } from "lucide-react";
import * as Rac from "react-aria-components";

export default function OuiInputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" className="pl-1!" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Rac.TooltipTrigger>
            <InputGroupButton className="rounded-full" size="icon-xs">
              <IconInfoCircle />
            </InputGroupButton>
            <Tooltip>This is content in a tooltip.</Tooltip>
          </Rac.TooltipTrigger>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextArea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <IconPlus />
          </InputGroupButton>
          <Rac.MenuTrigger>
            <InputGroupButton variant="ghost">Auto</InputGroupButton>
            <Popover>
              <Menu>
                <MenuItem>Auto</MenuItem>
                <MenuItem>Agent</MenuItem>
                <MenuItem>Manual</MenuItem>
              </Menu>
            </Popover>
          </Rac.MenuTrigger>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="h-4!" />
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            isDisabled
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <IconCheck className="size-3" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
