"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";
import * as Oui from "@/registry/default/ui/oui-index";
import { Separator } from "@/registry/default/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { IconCheck, IconInfoCircle, IconPlus } from "@tabler/icons-react";
import { ArrowUpIcon, Search } from "lucide-react";
import * as Rac from "react-aria-components";

export function InputGroupDemo() {
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
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <IconPlus />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="h-4!" />
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled
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

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <InputGroupDemo />
      <OuiInputGroupDemo />
    </div>
  );
}

export function OuiInputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Search..." />
        <Oui.InputGroupAddon>
          <Search />
        </Oui.InputGroupAddon>
        <Oui.InputGroupAddon align="inline-end">12 results</Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="example.com" className="pl-1!" />
        <Oui.InputGroupAddon>
          <Oui.InputGroupText>https://</Oui.InputGroupText>
        </Oui.InputGroupAddon>
        <Oui.InputGroupAddon align="inline-end">
          <Rac.TooltipTrigger>
            <Oui.InputGroupButton className="rounded-full" size="icon-xs">
              <IconInfoCircle />
            </Oui.InputGroupButton>
            <Oui.Tooltip>This is content in a tooltip.</Oui.Tooltip>
          </Rac.TooltipTrigger>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupTextArea placeholder="Ask, Search or Chat..." />
        <Oui.InputGroupAddon align="block-end">
          <Oui.InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <IconPlus />
          </Oui.InputGroupButton>
          <Rac.MenuTrigger>
            <Oui.InputGroupButton variant="ghost">Auto</Oui.InputGroupButton>
            <Oui.Popover>
              <Oui.Menu>
                <Oui.MenuItem>Auto</Oui.MenuItem>
                <Oui.MenuItem>Agent</Oui.MenuItem>
                <Oui.MenuItem>Manual</Oui.MenuItem>
              </Oui.Menu>
            </Oui.Popover>
          </Rac.MenuTrigger>
          <Oui.InputGroupText className="ml-auto">52% used</Oui.InputGroupText>
          <Oui.Separator orientation="vertical" className="h-4!" />
          <Oui.InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            isDisabled
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </Oui.InputGroupButton>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="@shadcn" />
        <Oui.InputGroupAddon align="inline-end">
          <div className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <IconCheck className="size-3" />
          </div>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}
