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
import { DateFieldSegment } from "@/registry/default/ui/oui-date-field";
import {
  DatePicker,
  DatePickerButton,
  DatePickerInput,
} from "@/registry/default/ui/oui-date-picker";
import { Dialog } from "@/registry/default/ui/oui-dialog";
import { FieldDescription, FieldLabel } from "@/registry/default/ui/oui-field";
import { Popover } from "@/registry/default/ui/oui-popover";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <DatePicker>
        <FieldLabel>Event date</FieldLabel>
        <Rac.Group>
          <DatePickerInput>
            {(segment) => <DateFieldSegment segment={segment} />}
          </DatePickerInput>
          <DatePickerButton />
        </Rac.Group>
        <FieldDescription>Select the date of the event.</FieldDescription>
        <Popover>
          <Dialog>
            <Calendar>
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
          </Dialog>
        </Popover>
      </DatePicker>
    </div>
  );
}
