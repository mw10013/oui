"use client";

import {
  Calendar,
  CalendarButton,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
  CalendarHeading,
} from "@/registry/default/ui/oui-calendar";

export default function Component() {
  return (
    <Calendar aria-label="Event date" className="rounded-md border shadow-sm">
      <CalendarHeader>
        <CalendarButton slot="previous" />
        <CalendarHeading />
        <CalendarButton slot="next" />
      </CalendarHeader>
      <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
    </Calendar>
  );
}
