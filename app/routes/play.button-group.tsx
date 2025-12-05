"use client";

import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/default/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Input } from "@/registry/default/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import * as Oui from "@/registry/default/ui/oui-index";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/registry/default/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { IconPlus } from "@tabler/icons-react";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AudioLinesIcon,
  CalendarPlusIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import * as Rac from "react-aria-components";

export function ButtonGroupDemo() {
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterPlusIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export function OuiButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal");

  return (
    <Oui.ButtonGroup>
      <Oui.ButtonGroup className="hidden sm:flex">
        <Oui.Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Oui.Button>
      </Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Button variant="outline">Archive</Oui.Button>
        <Oui.Button variant="outline">Report</Oui.Button>
      </Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Button variant="outline">Snooze</Oui.Button>
        <Rac.MenuTrigger>
          <Oui.Button variant="outline" size="icon" aria-label="More Options">
            <MoreHorizontalIcon />
          </Oui.Button>
          <Oui.Popover placement="bottom end">
            <Oui.Menu className="w-52">
              <Oui.MenuItem>
                <MailCheckIcon />
                Mark as Read
              </Oui.MenuItem>
              <Oui.MenuItem>
                <ArchiveIcon />
                Archive
              </Oui.MenuItem>
              <Oui.MenuSeparator />
              <Oui.MenuItem>
                <ClockIcon />
                Snooze
              </Oui.MenuItem>
              <Oui.MenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </Oui.MenuItem>
              <Oui.MenuItem>
                <ListFilterPlusIcon />
                Add to List
              </Oui.MenuItem>
              <Rac.SubmenuTrigger>
                <Oui.MenuItem>
                  <TagIcon />
                  Label As...
                </Oui.MenuItem>
                <Oui.Popover>
                  <Oui.Menu
                    selectionMode="single"
                    selectedKeys={new Set([label])}
                    onSelectionChange={(keys) => {
                      setLabel(Array.from(keys)[0] as string);
                    }}
                  >
                    <Oui.MenuItem id="personal">Personal</Oui.MenuItem>
                    <Oui.MenuItem id="work">Work</Oui.MenuItem>
                    <Oui.MenuItem id="other">Other</Oui.MenuItem>
                  </Oui.Menu>
                </Oui.Popover>
              </Rac.SubmenuTrigger>
              <Oui.MenuSeparator />
              <Oui.MenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </Oui.MenuItem>
            </Oui.Menu>
          </Oui.Popover>
        </Rac.MenuTrigger>
      </Oui.ButtonGroup>
    </Oui.ButtonGroup>
  );
}

export function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  );
}

export function OuiButtonGroupOrientation() {
  return (
    <Oui.ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Oui.Button variant="outline" size="icon">
        <PlusIcon />
      </Oui.Button>
      <Oui.Button variant="outline" size="icon">
        <MinusIcon />
      </Oui.Button>
    </Oui.ButtonGroup>
  );
}

export function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export function OuiButtonGroupSize() {
  return (
    <div className="flex flex-col items-start gap-8">
      <Oui.ButtonGroup>
        <Oui.Button variant="outline" size="sm">
          Small
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          Button
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          Group
        </Oui.Button>
        <Oui.Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Oui.Button>
      </Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Button variant="outline">Default</Oui.Button>
        <Oui.Button variant="outline">Button</Oui.Button>
        <Oui.Button variant="outline">Group</Oui.Button>
        <Oui.Button variant="outline" size="icon">
          <PlusIcon />
        </Oui.Button>
      </Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Button variant="outline" size="lg">
          Large
        </Oui.Button>
        <Oui.Button variant="outline" size="lg">
          Button
        </Oui.Button>
        <Oui.Button variant="outline" size="lg">
          Group
        </Oui.Button>
        <Oui.Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Oui.Button>
      </Oui.ButtonGroup>
    </div>
  );
}

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          4
        </Button>
        <Button variant="outline" size="sm">
          5
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Previous">
          <ArrowLeftIcon />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Next">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export function OuiButtonGroupNested() {
  return (
    <Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Button variant="outline" size="sm">
          1
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          2
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          3
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          4
        </Oui.Button>
        <Oui.Button variant="outline" size="sm">
          5
        </Oui.Button>
      </Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Button variant="outline" size="icon-sm" aria-label="Previous">
          <ArrowLeftIcon />
        </Oui.Button>
        <Oui.Button variant="outline" size="icon-sm" aria-label="Next">
          <ArrowRightIcon />
        </Oui.Button>
      </Oui.ButtonGroup>
    </Oui.ButtonGroup>
  );
}

export function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  );
}

export function OuiButtonGroupSeparatorDemo() {
  return (
    <Oui.ButtonGroup>
      <Oui.Button variant="secondary" size="sm">
        Copy
      </Oui.Button>
      <Oui.ButtonGroupSeparator />
      <Oui.Button variant="secondary" size="sm">
        Paste
      </Oui.Button>
    </Oui.ButtonGroup>
  );
}

export function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  );
}

export function OuiButtonGroupSplit() {
  return (
    <Oui.ButtonGroup>
      <Oui.Button variant="secondary">Button</Oui.Button>
      <Oui.ButtonGroupSeparator />
      <Oui.Button size="icon" variant="secondary">
        <IconPlus />
      </Oui.Button>
    </Oui.ButtonGroup>
  );
}

export function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}

export function OuiButtonGroupInput() {
  return (
    <Oui.ButtonGroup>
      <Oui.Input placeholder="Search..." />
      <Oui.Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Oui.Button>
    </Oui.ButtonGroup>
  );
}

export function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  onClick={() => {
                    setVoiceEnabled(!voiceEnabled);
                  }}
                  size="icon-xs"
                  data-active={voiceEnabled}
                  className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  aria-pressed={voiceEnabled}
                >
                  <AudioLinesIcon />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export function OuiButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);

  return (
    <Oui.ButtonGroup className="[--radius:9999rem]">
      <Oui.ButtonGroup>
        <Oui.Button variant="outline" size="icon">
          <PlusIcon />
        </Oui.Button>
      </Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.InputGroup>
          <Oui.TextField isDisabled={voiceEnabled}>
            <Oui.InputGroupInput
              placeholder={
                voiceEnabled ? "Record and send audio..." : "Send a message..."
              }
            />
          </Oui.TextField>
          <Oui.InputGroupAddon align="inline-end">
            <Rac.TooltipTrigger>
              <Oui.InputGroupButton
                onPress={() => {
                  setVoiceEnabled(!voiceEnabled);
                }}
                size="icon-xs"
                data-active={voiceEnabled ? true : undefined}
                className="data-active:bg-orange-100 data-active:text-orange-700 dark:data-active:bg-orange-800 dark:data-active:text-orange-100"
                aria-pressed={voiceEnabled}
              >
                <AudioLinesIcon />
              </Oui.InputGroupButton>
              <Oui.Tooltip>Voice Mode</Oui.Tooltip>
            </Rac.TooltipTrigger>
          </Oui.InputGroupAddon>
        </Oui.InputGroup>
      </Oui.ButtonGroup>
    </Oui.ButtonGroup>
  );
}

export function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="pl-2!">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="[--radius:1rem]">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <CheckIcon />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArchiveIcon />
              Archive Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ClockIcon />
              Snooze Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MailCheckIcon />
              Mark as Unread
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TagIcon />
              Add Label
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2Icon />
              Delete Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}

export function OuiButtonGroupDropdown() {
  return (
    <Oui.ButtonGroup>
      <Oui.Button variant="outline">Follow</Oui.Button>
      <Rac.MenuTrigger>
        <Oui.Button variant="outline" className="pl-2!">
          <ChevronDownIcon />
        </Oui.Button>
        <Oui.Popover placement="bottom end">
          <Oui.Menu className="[--radius:1rem]">
            <Oui.MenuItem>
              <CheckIcon />
              Mark as Read
            </Oui.MenuItem>
            <Oui.MenuItem>
              <ArchiveIcon />
              Archive Conversation
            </Oui.MenuItem>
            <Oui.MenuItem>
              <ClockIcon />
              Snooze Conversation
            </Oui.MenuItem>
            <Oui.MenuItem>
              <MailCheckIcon />
              Mark as Unread
            </Oui.MenuItem>
            <Oui.MenuItem>
              <TagIcon />
              Add Label
            </Oui.MenuItem>
            <Oui.MenuItem>
              <Trash2Icon />
              Delete Conversation
            </Oui.MenuItem>
          </Oui.Menu>
        </Oui.Popover>
      </Rac.MenuTrigger>
    </Oui.ButtonGroup>
  );
}

const CURRENCIES = [
  { value: "$", label: "US Dollar" },
  { value: "€", label: "Euro" },
  { value: "£", label: "British Pound" },
];

export function ButtonGroupSelect() {
  const [currency, setCurrency] = React.useState("$");

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="font-mono">{currency}</SelectTrigger>
          <SelectContent className="min-w-24">
            {CURRENCIES.map((currency) => (
              <SelectItem key={currency.value} value={currency.value}>
                {currency.value}{" "}
                <span className="text-muted-foreground">{currency.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export function OuiButtonGroupSelect() {
  const [currency, setCurrency] = React.useState<Rac.Key | null>("$");

  return (
    <Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Select<(typeof CURRENCIES)[number]>
          value={currency}
          onChange={setCurrency}
          className="w-auto flex-row *:w-auto"
        >
          <Oui.SelectButton className="font-mono">
            <Oui.SelectValue<(typeof CURRENCIES)[number]>>
              {({ selectedItems }) => selectedItems[0]?.value ?? ""}
            </Oui.SelectValue>
          </Oui.SelectButton>
          <Oui.Popover placement="bottom start" className="min-w-24">
            <Rac.ListBox items={CURRENCIES}>
              {(item) => (
                <Oui.ListBoxItem id={item.value} textValue={item.value}>
                  {item.value}{" "}
                  <span className="text-muted-foreground">{item.label}</span>
                </Oui.ListBoxItem>
              )}
            </Rac.ListBox>
          </Oui.Popover>
        </Oui.Select>
        <Oui.Input placeholder="10.00" pattern="[0-9]*" />
      </Oui.ButtonGroup>
      <Oui.ButtonGroup>
        <Oui.Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Oui.Button>
      </Oui.ButtonGroup>
    </Oui.ButtonGroup>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <div>
        <h2 className="text-lg font-semibold">Button Group Demo</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupDemo />
          </div>
          <div>
            <OuiButtonGroupDemo />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Orientation</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupOrientation />
          </div>
          <div>
            <OuiButtonGroupOrientation />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Size</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupSize />
          </div>
          <div>
            <OuiButtonGroupSize />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Nested</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupNested />
          </div>
          <div>
            <OuiButtonGroupNested />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Separator</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupSeparatorDemo />
          </div>
          <div>
            <OuiButtonGroupSeparatorDemo />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Split</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupSplit />
          </div>
          <div>
            <OuiButtonGroupSplit />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Input</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupInput />
          </div>
          <div>
            <OuiButtonGroupInput />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Input Group</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupInputGroup />
          </div>
          <div>
            <OuiButtonGroupInputGroup />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Dropdown Menu</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupDropdown />
          </div>
          <div>
            <OuiButtonGroupDropdown />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Select</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ButtonGroupSelect />
          </div>
          <div>
            <OuiButtonGroupSelect />
          </div>
        </div>
      </div>
    </div>
  );
}
