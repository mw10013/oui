"use client";

import {
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/oui-field";
import { TextArea } from "@/registry/default/ui/oui-text-area";
import { TextField } from "@/registry/default/ui/oui-text-field";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <Rac.Form>
        <FieldSet>
          <FieldGroup>
            <TextField>
              <FieldLabel>Feedback</FieldLabel>
              <TextArea placeholder="Your feedback helps us improve..." />
              <FieldDescription>
                Share your thoughts about our service.
              </FieldDescription>
            </TextField>
          </FieldGroup>
        </FieldSet>
      </Rac.Form>
    </div>
  );
}
