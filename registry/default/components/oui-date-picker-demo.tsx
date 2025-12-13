"use client";

import { ButtonGroup } from "@/registry/default/ui/oui-button-group";
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
import {
  DateFieldInput,
  DateFieldSegment,
} from "@/registry/default/ui/oui-date-field";
import {
  DatePicker,
  DatePickerButton,
} from "@/registry/default/ui/oui-date-picker";
import { Dialog } from "@/registry/default/ui/oui-dialog";
import { FieldDescription, FieldLabel } from "@/registry/default/ui/oui-field";
import { Popover } from "@/registry/default/ui/oui-popover";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <DatePicker>
        <FieldLabel>Event date</FieldLabel>
        <ButtonGroup>
          <DateFieldInput>
            {(segment) => <DateFieldSegment segment={segment} />}
          </DateFieldInput>
          <DatePickerButton />
        </ButtonGroup>
        <FieldDescription>Select the date of the event.</FieldDescription>
        <Popover>
          <Dialog showCloseButton={false}>
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
