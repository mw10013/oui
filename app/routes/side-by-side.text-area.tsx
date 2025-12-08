"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/field";
import * as Oui from "@/registry/default/ui/oui-index";
import { Textarea } from "@/registry/default/ui/textarea";
import * as Rac from "react-aria-components";

function FieldTextareaDemo() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Your feedback helps us improve..."
              rows={4}
            />
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

function OuiFieldTextAreaDemo() {
  return (
    <div className="w-full max-w-md">
      <Rac.Form>
        <Oui.FieldSet>
          <Oui.FieldGroup>
            <Oui.TextField>
              <Oui.FieldLabel>Feedback</Oui.FieldLabel>
              <Oui.TextArea placeholder="Your feedback helps us improve..." />
              <Oui.FieldDescription>
                Share your thoughts about our service.
              </Oui.FieldDescription>
            </Oui.TextField>
          </Oui.FieldGroup>
        </Oui.FieldSet>
      </Rac.Form>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Text Area"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.text-area.tsx"
    >
      <SideBySideSection
        title="Field"
        shadcn={<FieldTextareaDemo />}
        oui={<OuiFieldTextAreaDemo />}
      />
    </SideBySidePage>
  );
}
