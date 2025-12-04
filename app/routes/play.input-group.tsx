"use client";

import * as React from "react";
import { useCopy } from "@/hooks/use-copy";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/registry/default/ui/button-group";
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
import { Label } from "@/registry/default/ui/label";
import * as Oui from "@/registry/default/ui/oui-index";
import { Separator } from "@/registry/default/ui/separator";
import { Spinner } from "@/registry/default/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import {
  IconBrandJavascript,
  IconCheck,
  IconCopy,
  IconCornerDownLeft,
  IconInfoCircle,
  IconPlus,
  IconRefresh,
  IconStar,
} from "@tabler/icons-react";
import {
  ArrowUpIcon,
  CheckIcon,
  ChevronDownIcon,
  CreditCardIcon,
  HelpCircle,
  Link2Icon,
  LoaderIcon,
  MailIcon,
  MoreHorizontal,
  Search,
  StarIcon,
} from "lucide-react";
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

export function InputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <IconInfoCircle />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Search..." />
        <Oui.InputGroupAddon>
          <Search />
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput type="email" placeholder="Enter your email" />
        <Oui.InputGroupAddon>
          <MailIcon />
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Card number" />
        <Oui.InputGroupAddon>
          <CreditCardIcon />
        </Oui.InputGroupAddon>
        <Oui.InputGroupAddon align="inline-end">
          <CheckIcon />
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Card number" />
        <Oui.InputGroupAddon align="inline-end">
          <StarIcon />
          <IconInfoCircle />
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}

export function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="pl-0.5!" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs text-muted-foreground">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Oui.InputGroup>
        <Oui.InputGroupAddon>
          <Oui.InputGroupText>$</Oui.InputGroupText>
        </Oui.InputGroupAddon>
        <Oui.InputGroupInput placeholder="0.00" />
        <Oui.InputGroupAddon align="inline-end">
          <Oui.InputGroupText>USD</Oui.InputGroupText>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupAddon>
          <Oui.InputGroupText>https://</Oui.InputGroupText>
        </Oui.InputGroupAddon>
        <Oui.InputGroupInput placeholder="example.com" className="pl-0.5!" />
        <Oui.InputGroupAddon align="inline-end">
          <Oui.InputGroupText>.com</Oui.InputGroupText>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Enter your username" />
        <Oui.InputGroupAddon align="inline-end">
          <Oui.InputGroupText>@company.com</Oui.InputGroupText>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupTextArea placeholder="Enter your message" />
        <Oui.InputGroupAddon align="block-end">
          <Oui.InputGroupText className="text-xs text-muted-foreground">
            120 characters left
          </Oui.InputGroupText>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}

export function InputGroupButtonExample() {
  const { copied, copy } = useCopy();
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              void copy("https://x.com/shadcn");
            }}
          >
            {copied ? <IconCheck /> : <IconCopy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant="secondary" size="icon-xs">
                <IconInfoCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </TooltipTrigger>
          <TooltipContent className="flex flex-col gap-1 rounded-xl text-sm">
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </TooltipContent>
        </Tooltip>
        <InputGroupAddon className="pl-1.5 text-muted-foreground">
          https://
        </InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => {
              setIsFavorite(!isFavorite);
            }}
            size="icon-xs"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupButtonExample() {
  const { copied, copy } = useCopy();
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="grid w-full max-w-sm gap-6">
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <Oui.InputGroupAddon align="inline-end">
          <Oui.InputGroupButton
            aria-label="Copy"
            size="icon-xs"
            onPress={() => {
              void copy("https://x.com/shadcn");
            }}
          >
            {copied ? <IconCheck /> : <IconCopy />}
          </Oui.InputGroupButton>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup className="[--radius:9999px]">
        <Rac.TooltipTrigger>
          <Oui.InputGroupAddon>
            <Oui.InputGroupButton variant="secondary" size="icon-xs">
              <IconInfoCircle />
            </Oui.InputGroupButton>
          </Oui.InputGroupAddon>
          <Oui.Tooltip className="flex flex-col gap-1 rounded-xl text-sm">
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </Oui.Tooltip>
        </Rac.TooltipTrigger>
        <Oui.InputGroupAddon className="pl-1.5 text-muted-foreground">
          https://
        </Oui.InputGroupAddon>
        <Oui.InputGroupInput />
        <Oui.InputGroupAddon align="inline-end">
          <Oui.InputGroupButton
            onPress={() => {
              setIsFavorite(!isFavorite);
            }}
            size="icon-xs"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </Oui.InputGroupButton>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Type to search..." />
        <Oui.InputGroupAddon align="inline-end">
          <Oui.InputGroupButton variant="secondary">
            Search
          </Oui.InputGroupButton>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}

export function InputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="Info"
                size="icon-xs"
              >
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Password must be at least 8 characters</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Your email address" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                size="icon-xs"
              >
                <HelpCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We'll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter API key" />
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                size="icon-xs"
              >
                <HelpCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Click for help with API keys</p>
          </TooltipContent>
        </Tooltip>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupTooltip() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Enter password" type="password" />
        <Oui.InputGroupAddon align="inline-end">
          <Rac.TooltipTrigger>
            <Oui.InputGroupButton
              variant="ghost"
              aria-label="Info"
              size="icon-xs"
            >
              <IconInfoCircle />
            </Oui.InputGroupButton>
            <Oui.Tooltip>
              <p>Password must be at least 8 characters</p>
            </Oui.Tooltip>
          </Rac.TooltipTrigger>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Your email address" />
        <Oui.InputGroupAddon align="inline-end">
          <Rac.TooltipTrigger>
            <Oui.InputGroupButton
              variant="ghost"
              aria-label="Help"
              size="icon-xs"
            >
              <HelpCircle />
            </Oui.InputGroupButton>
            <Oui.Tooltip>
              <p>We'll use this to send you notifications</p>
            </Oui.Tooltip>
          </Rac.TooltipTrigger>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Enter API key" />
        <Rac.TooltipTrigger>
          <Oui.InputGroupAddon>
            <Oui.InputGroupButton
              variant="ghost"
              aria-label="Help"
              size="icon-xs"
            >
              <HelpCircle />
            </Oui.InputGroupButton>
          </Oui.InputGroupAddon>
          <Oui.Tooltip>
            <p>Click for help with API keys</p>
          </Oui.Tooltip>
        </Rac.TooltipTrigger>
      </Oui.InputGroup>
    </div>
  );
}

export function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <Oui.InputGroup>
        <Oui.InputGroupTextArea
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <Oui.InputGroupAddon align="block-end" className="border-t">
          <Oui.InputGroupText>Line 1, Column 1</Oui.InputGroupText>
          <Oui.InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <IconCornerDownLeft />
          </Oui.InputGroupButton>
        </Oui.InputGroupAddon>
        <Oui.InputGroupAddon align="block-start" className="border-b">
          <Oui.InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </Oui.InputGroupText>
          <Oui.InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </Oui.InputGroupButton>
          <Oui.InputGroupButton size="icon-xs">
            <IconCopy />
          </Oui.InputGroupButton>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}

export function InputGroupSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Searching..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Processing..." disabled />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Saving changes..." disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Refreshing data..." disabled />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">
            Please wait...
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Oui.TextField isDisabled>
        <Oui.InputGroup>
          <Oui.InputGroupInput placeholder="Searching..." />
          <Oui.InputGroupAddon align="inline-end">
            <Spinner />
          </Oui.InputGroupAddon>
        </Oui.InputGroup>
      </Oui.TextField>
      <Oui.TextField isDisabled>
        <Oui.InputGroup>
          <Oui.InputGroupInput placeholder="Processing..." />
          <Oui.InputGroupAddon>
            <Spinner />
          </Oui.InputGroupAddon>
        </Oui.InputGroup>
      </Oui.TextField>
      <Oui.TextField isDisabled>
        <Oui.InputGroup>
          <Oui.InputGroupInput placeholder="Saving changes..." />
          <Oui.InputGroupAddon align="inline-end">
            <Oui.InputGroupText>Saving...</Oui.InputGroupText>
            <Spinner />
          </Oui.InputGroupAddon>
        </Oui.InputGroup>
      </Oui.TextField>
      <Oui.TextField isDisabled>
        <Oui.InputGroup>
          <Oui.InputGroupInput placeholder="Refreshing data..." />
          <Oui.InputGroupAddon>
            <LoaderIcon className="animate-spin" />
          </Oui.InputGroupAddon>
          <Oui.InputGroupAddon align="inline-end">
            <Oui.InputGroupText className="text-muted-foreground">
              Please wait...
            </Oui.InputGroupText>
          </Oui.InputGroupAddon>
        </Oui.InputGroup>
      </Oui.TextField>
    </div>
  );
}

export function InputGroupLabel() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput id="email" placeholder="shadcn" />
        <InputGroupAddon>
          <Label htmlFor="email">@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroupAddon align="block-start">
          <Label htmlFor="email-2" className="text-foreground">
            Email
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                className="ml-auto rounded-full"
                size="icon-xs"
              >
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We'll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupLabel() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Oui.InputGroup>
        <Oui.InputGroupInput id="email" placeholder="shadcn" />
        <Oui.InputGroupAddon>
          <Oui.Label htmlFor="email">@</Oui.Label>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup>
        <Oui.InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
        <Oui.InputGroupAddon align="block-start">
          <Oui.Label htmlFor="email-2" className="text-foreground">
            Email
          </Oui.Label>
          <Rac.TooltipTrigger>
            <Oui.InputGroupButton
              variant="ghost"
              aria-label="Help"
              className="ml-auto rounded-full"
              size="icon-xs"
            >
              <IconInfoCircle />
            </Oui.InputGroupButton>
            <Oui.Tooltip>
              <p>We'll use this to send you notifications</p>
            </Oui.Tooltip>
          </Rac.TooltipTrigger>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}

export function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="More"
                size="icon-xs"
              >
                <MoreHorizontal />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Copy path</DropdownMenuItem>
              <DropdownMenuItem>Open location</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost" className="pr-1.5! text-xs">
                Search In... <ChevronDownIcon className="size-3" />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="[--radius:0.95rem]">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Blog Posts</DropdownMenuItem>
              <DropdownMenuItem>Changelog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <Oui.InputGroup>
        <Oui.InputGroupInput placeholder="Enter file name" />
        <Oui.InputGroupAddon align="inline-end">
          <Rac.MenuTrigger>
            <Oui.InputGroupButton
              variant="ghost"
              aria-label="More"
              size="icon-xs"
            >
              <MoreHorizontal />
            </Oui.InputGroupButton>
            <Oui.Popover>
              <Oui.Menu>
                <Oui.MenuItem>Settings</Oui.MenuItem>
                <Oui.MenuItem>Copy path</Oui.MenuItem>
                <Oui.MenuItem>Open location</Oui.MenuItem>
              </Oui.Menu>
            </Oui.Popover>
          </Rac.MenuTrigger>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
      <Oui.InputGroup className="[--radius:1rem]">
        <Oui.InputGroupInput placeholder="Enter search query" />
        <Oui.InputGroupAddon align="inline-end">
          <Rac.MenuTrigger>
            <Oui.InputGroupButton variant="ghost" className="pr-1.5! text-xs">
              Search In... <ChevronDownIcon className="size-3" />
            </Oui.InputGroupButton>
            <Oui.Popover>
              <Oui.Menu>
                <Oui.MenuItem>Documentation</Oui.MenuItem>
                <Oui.MenuItem>Blog Posts</Oui.MenuItem>
                <Oui.MenuItem>Changelog</Oui.MenuItem>
              </Oui.Menu>
            </Oui.Popover>
          </Rac.MenuTrigger>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}

export function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="url">https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <Link2Icon />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  );
}

export function OuiInputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Oui.Label htmlFor="url">https://</Oui.Label>
        </ButtonGroupText>
        <Oui.InputGroup>
          <Oui.InputGroupInput id="url" />
          <Oui.InputGroupAddon align="inline-end">
            <Link2Icon />
          </Oui.InputGroupAddon>
        </Oui.InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  );
}

export function InputGroupCustom() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupTextarea
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
          placeholder="Autoresize textarea..."
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="ml-auto" size="sm" variant="default">
            Submit
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export function OuiInputGroupCustom() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Oui.InputGroup>
        <Oui.InputGroupTextArea
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
          placeholder="Autoresize textarea..."
        />
        <Oui.InputGroupAddon align="block-end">
          <Oui.InputGroupButton className="ml-auto" size="sm" variant="default">
            Submit
          </Oui.InputGroupButton>
        </Oui.InputGroupAddon>
      </Oui.InputGroup>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <div>
        <h2 className="mb-4 text-lg font-semibold">Icon</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupIcon />
          <OuiInputGroupIcon />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Text</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupTextExample />
          <OuiInputGroupTextExample />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Button</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupButtonExample />
          <OuiInputGroupButtonExample />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Tooltip</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupTooltip />
          <OuiInputGroupTooltip />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Textarea</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupTextareaExample />
          <OuiInputGroupTextareaExample />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Spinner</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupSpinner />
          <OuiInputGroupSpinner />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Label</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupLabel />
          <OuiInputGroupLabel />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Dropdown</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupDropdown />
          <OuiInputGroupDropdown />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Button Group</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupButtonGroup />
          <OuiInputGroupButtonGroup />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Custom</h2>
        <div className="grid grid-cols-2 gap-8 *:border *:border-foreground *:p-4">
          <InputGroupCustom />
          <OuiInputGroupCustom />
        </div>
      </div>
    </div>
  );
}
