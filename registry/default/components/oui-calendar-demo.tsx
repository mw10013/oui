"use client";

import {
  Calendar,
  CalendarButton,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeaderCell,
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
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
    </Calendar>
  );
}
