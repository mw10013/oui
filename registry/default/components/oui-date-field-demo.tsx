"use client";

import {
  DateField,
  DateFieldInput,
  DateFieldSegment,
} from "@/registry/default/ui/oui-date-field";
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/oui-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <Rac.Form>
        <FieldSet>
          <FieldGroup>
            <DateField name="birthday">
              <FieldLabel>Birth date</FieldLabel>
              <DateFieldInput>
                {(segment) => <DateFieldSegment segment={segment} />}
              </DateFieldInput>
              <FieldDescription>Enter your date of birth.</FieldDescription>
              <FieldError />
            </DateField>
          </FieldGroup>
        </FieldSet>
      </Rac.Form>
    </div>
  );
}
