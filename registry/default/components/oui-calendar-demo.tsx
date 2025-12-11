"use client";

import {
  Calendar,
  CalendarButton,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/registry/default/ui/oui-calendar";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Calendar aria-label="Event date" className="rounded-md border shadow-sm">
      <CalendarHeader>
        <CalendarButton slot="previous" />
        <CalendarHeading />
        <CalendarButton slot="next" />
      </CalendarHeader>
      <CalendarGrid>
        <Rac.CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </Rac.CalendarGridHeader>
        <Rac.CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </Rac.CalendarGridBody>
      </CalendarGrid>
    </Calendar>
  );
}
