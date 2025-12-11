"use client";

import * as React from "react";
import {
  composeTailwindRenderProps,
  focusVisibleStyles,
} from "@/registry/default/ui/oui-base";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Rac from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

export function Calendar<T extends Rac.DateValue>({
  className,
  ...props
}: Rac.CalendarProps<T>) {
  return (
    <Rac.Calendar
      data-slot="calendar"
      className={composeTailwindRenderProps(
        className,
        "flex w-fit flex-col gap-3 bg-card p-3",
      )}
      {...props}
    />
  );
}

export function CalendarHeader() {
  const { direction } = Rac.useLocale();

  return (
    <header className="flex w-full items-center justify-between">
      <Rac.Button
        className="inline-flex h-7 w-7 items-center justify-center gap-2 rounded-md border border-input bg-background p-0 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        slot="previous"
      >
        {direction === "rtl" ? (
          <ChevronRight aria-hidden className="h-4 w-4" />
        ) : (
          <ChevronLeft aria-hidden className="h-4 w-4" />
        )}
      </Rac.Button>
      <Rac.Heading className="text-sm font-medium" />
      <Rac.Button
        className="inline-flex h-7 w-7 items-center justify-center gap-2 rounded-md border border-input bg-background p-0 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        slot="next"
      >
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden className="h-4 w-4" />
        ) : (
          <ChevronRight aria-hidden className="h-4 w-4" />
        )}
      </Rac.Button>
    </header>
  );
}

export const calendarCellStyles = twJoin(
  focusVisibleStyles,
  "mt-1 flex h-8 w-8 cursor-default items-center justify-center rounded-md text-sm font-normal transition-shadow forced-color-adjust-none",
  "data-hovered:bg-accent data-hovered:text-accent-foreground",
  "data-selected:bg-primary data-selected:text-primary-foreground data-selected:data-hovered:bg-primary data-selected:data-hovered:text-primary-foreground",
  "data-disabled:text-muted-foreground data-disabled:opacity-50",
  "data-outside-month:text-muted-foreground data-outside-month:opacity-50",
  "data-pressed:border-ring data-pressed:ring-[3px] data-pressed:ring-ring/50",
  "data-unavailable:text-muted-foreground data-unavailable:opacity-50",
);

export function CalendarCell({
  className,
  ...props
}: React.ComponentProps<typeof Rac.CalendarCell>) {
  return (
    <Rac.CalendarCell
      data-slot="calendar-cell"
      className={composeTailwindRenderProps(className, calendarCellStyles)}
      {...props}
    />
  );
}

export function CalendarGrid({
  className,
  ...props
}: React.ComponentProps<typeof Rac.CalendarGrid>) {
  return (
    <Rac.CalendarGrid
      data-slot="calendar-grid"
      className={twMerge("mt-1 w-full border-collapse space-y-1", className)}
      {...props}
    />
  );
}

export function CalendarGridBody({
  ...props
}: React.ComponentProps<typeof Rac.CalendarGridBody>) {
  return <Rac.CalendarGridBody data-slot="calendar-grid-body" {...props} />;
}

export function CalendarGridHeader() {
  return (
    <Rac.CalendarGridHeader data-slot="calendar-grid-header">
      {(day) => (
        <CalendarHeaderCell className="w-9 text-[0.8rem] font-normal text-muted-foreground">
          {day}
        </CalendarHeaderCell>
      )}
    </Rac.CalendarGridHeader>
  );
}

export function CalendarHeaderCell({
  ...props
}: React.ComponentProps<typeof Rac.CalendarHeaderCell>) {
  return <Rac.CalendarHeaderCell data-slot="calendar-header-cell" {...props} />;
}
