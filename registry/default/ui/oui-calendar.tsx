"use client";

import * as React from "react";
import {
  composeTailwindRenderProps,
  focusVisibleStyles,
} from "@/registry/default/ui/oui-base";
import { Button } from "@/registry/default/ui/oui-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Derived from shadcn Calendar.
 */
export function Calendar<T extends Rac.DateValue>({
  className,
  ...props
}: Rac.CalendarProps<T>) {
  return (
    <Rac.Calendar
      data-slot="calendar"
      className={composeTailwindRenderProps(
        className,
        // w-fit from shadcn classNames root
        "group/calendar w-fit bg-background p-3 in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
      )}
      {...props}
    />
  );
}

/**
 * Derived from shadcn Calendar classNames nav.
 */
export function CalendarHeader({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <header
      className={twMerge("flex w-full items-center justify-between", className)}
      {...props}
    />
  );
}

/**
 * Derived from shadcn Calendar classNames caption_label.
 */
export function CalendarHeading({
  className,
  ...props
}: React.ComponentProps<typeof Rac.Heading>) {
  return (
    <Rac.Heading
      data-slot="calendar-heading"
      className={twMerge("text-sm font-medium", className)}
      {...props}
    />
  );
}

export function CalendarButton({
  slot,
  variant = "ghost",
  size = "icon-sm",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "slot"> & {
  slot: "previous" | "next";
}) {
  const { direction } = Rac.useLocale();
  return (
    <Button slot={slot} variant={variant} size={size} {...props}>
      {slot === "previous" ? (
        direction === "rtl" ? (
          <ChevronRight aria-hidden />
        ) : (
          <ChevronLeft aria-hidden />
        )
      ) : direction === "rtl" ? (
        <ChevronLeft aria-hidden />
      ) : (
        <ChevronRight aria-hidden />
      )}
    </Button>
  );
}

/**
 * Derived from shadcn Calendar classNames table.
 */
export function CalendarGrid({
  className,
  ...props
}: React.ComponentProps<typeof Rac.CalendarGrid>) {
  return (
    <Rac.CalendarGrid
      data-slot="calendar-grid"
      className={twMerge("w-full border-collapse", className)}
      {...props}
    />
  );
}

/**
 * Derived from shadcn Calendar classNames week_day.
 */
export function CalendarHeaderCell({
  className,
  ...props
}: React.ComponentProps<typeof Rac.CalendarHeaderCell>) {
  return (
    <Rac.CalendarHeaderCell
      data-slot="calendar-header-cell"
      className={twMerge(
        "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Derived from shadcn CalendarDayButton
 */
export function CalendarCell({
  className,
  ...props
}: React.ComponentProps<typeof Rac.CalendarCell>) {
  return (
    <Rac.CalendarCell
      data-slot="calendar-cell"
      className={composeTailwindRenderProps(className, [
        focusVisibleStyles,
        "mt-1 flex h-8 w-8 cursor-default items-center justify-center rounded-md text-sm font-normal transition-shadow forced-color-adjust-none",
        "data-hovered:bg-accent data-hovered:text-accent-foreground",
        "data-selected:bg-primary data-selected:text-primary-foreground data-selected:data-hovered:bg-primary data-selected:data-hovered:text-primary-foreground",
        "data-disabled:text-muted-foreground data-disabled:opacity-50",
        "data-outside-month:text-muted-foreground data-outside-month:opacity-50",
        "data-pressed:border-ring data-pressed:ring-[3px] data-pressed:ring-ring/50",
        "data-unavailable:text-muted-foreground data-unavailable:opacity-50",
      ])}
      {...props}
    />
  );
}
