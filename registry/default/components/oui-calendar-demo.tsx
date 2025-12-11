"use client";

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
} from "@/registry/default/ui/oui-calendar";

export default function Component() {
  return (
    <Calendar aria-label="Event date">
      <CalendarHeader />
      <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
    </Calendar>
  );
}
