"use client";

import * as React from "react";
import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import * as Oui from "@/registry/default/ui/oui-index";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
    />
  );
}

export function OuiCalendarDemo() {
  return (
    <Oui.Calendar
      aria-label="Event date"
      className="rounded-md border shadow-sm"
    >
      <Oui.CalendarHeader>
        <Oui.CalendarButton slot="previous" />
        <Oui.CalendarHeading />
        <Oui.CalendarButton slot="next" />
      </Oui.CalendarHeader>
      <Oui.CalendarGrid>
        <Oui.CalendarGridHeader>
          {(day) => <Oui.CalendarHeaderCell>{day}</Oui.CalendarHeaderCell>}
        </Oui.CalendarGridHeader>
        <Oui.CalendarGridBody>
          {(date) => <Oui.CalendarCell date={date} />}
        </Oui.CalendarGridBody>
      </Oui.CalendarGrid>
    </Oui.Calendar>
  );
}

export function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border shadow-sm"
    />
  );
}

export function OuiCalendarRange() {
  return null;
}

export function CalendarMonthYear() {
  const [dropdown, setDropdown] = React.useState<"label" | "dropdown">(
    "dropdown",
  );
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12),
  );

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
        className="rounded-lg border shadow-sm"
      />
      <div className="flex flex-col gap-3">
        <Label htmlFor="dropdown" className="px-1">
          Dropdown
        </Label>
        <select
          id="dropdown"
          value={dropdown}
          onChange={(e) => {
            setDropdown(e.target.value as "label" | "dropdown");
          }}
          className="w-full rounded-md border border-input bg-background px-3 py-2"
        >
          <option value="label">Month and Year</option>
          <option value="dropdown">Dropdown</option>
        </select>
      </div>
    </div>
  );
}

export function OuiCalendarMonthYear() {
  return (
    <Oui.Calendar
      aria-label="Event date"
      className="rounded-md border shadow-sm"
    >
      <Oui.CalendarHeader>
        <Oui.CalendarButton slot="previous" />
        <Oui.CalendarHeading />
        <Oui.CalendarButton slot="next" />
      </Oui.CalendarHeader>
      <Oui.CalendarGrid>
        <Oui.CalendarGridHeader>
          {(day) => <Oui.CalendarHeaderCell>{day}</Oui.CalendarHeaderCell>}
        </Oui.CalendarGridHeader>
        <Oui.CalendarGridBody>
          {(date) => <Oui.CalendarCell date={date} />}
        </Oui.CalendarGridBody>
      </Oui.CalendarGrid>
    </Oui.Calendar>
  );
}

export function CalendarDatePicker() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Date of birth
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function OuiCalendarDatePicker() {
  return null;
}

export function CalendarDateTime() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-32 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
}

export function OuiCalendarDateTime() {
  return null;
}

export function CalendarNaturalLanguage() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("In 2 days");
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        Schedule Date
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder="Tomorrow or next week"
          className="bg-background pr-10"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <ChevronDownIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date);
                setValue(date ? date.toLocaleDateString() : "");
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="px-1 text-sm text-muted-foreground">
        Your post will be published on{" "}
        <span className="font-medium">
          {date?.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
        .
      </div>
    </div>
  );
}

export function OuiCalendarNaturalLanguage() {
  return null;
}

export function CalendarCustomCellSize() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 11, 12),
  );

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
      buttonVariant="ghost"
    />
  );
}

export function OuiCalendarCustomCellSize() {
  return (
    <Oui.Calendar
      aria-label="Event date"
      className="rounded-md border shadow-sm [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
    >
      <Oui.CalendarHeader>
        <Oui.CalendarButton slot="previous" />
        <Oui.CalendarHeading />
        <Oui.CalendarButton slot="next" />
      </Oui.CalendarHeader>
      <Oui.CalendarGrid>
        <Oui.CalendarGridHeader>
          {(day) => <Oui.CalendarHeaderCell>{day}</Oui.CalendarHeaderCell>}
        </Oui.CalendarGridHeader>
        <Oui.CalendarGridBody>
          {(date) => <Oui.CalendarCell date={date} />}
        </Oui.CalendarGridBody>
      </Oui.CalendarGrid>
    </Oui.Calendar>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Calendar"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.calendar.tsx"
    >
      <SideBySideSection
        title="Demo"
        shadcn={<CalendarDemo />}
        oui={<OuiCalendarDemo />}
      />
      <SideBySideSection
        title="Range Calendar"
        shadcn={<CalendarRange />}
        oui={<OuiCalendarRange />}
      />
      <SideBySideSection
        title="Month and Year Selector"
        shadcn={<CalendarMonthYear />}
        oui={<OuiCalendarMonthYear />}
      />
      <SideBySideSection
        title="Date Picker"
        shadcn={<CalendarDatePicker />}
        oui={<OuiCalendarDatePicker />}
      />
      <SideBySideSection
        title="Date and Time Picker"
        shadcn={<CalendarDateTime />}
        oui={<OuiCalendarDateTime />}
      />
      <SideBySideSection
        title="Natural Language Picker"
        shadcn={<CalendarNaturalLanguage />}
        oui={<OuiCalendarNaturalLanguage />}
      />
      <SideBySideSection
        title="Custom Cell Size"
        shadcn={<CalendarCustomCellSize />}
        oui={<OuiCalendarCustomCellSize />}
      />
    </SideBySidePage>
  );
}
