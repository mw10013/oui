"use client";

import * as React from "react";
import * as Oui from "@/registry/default/ui/oui-index";
import * as Rac from "react-aria-components";

function CheckboxWrapper(props: React.ComponentProps<typeof Oui.Checkbox>) {
  const context = React.useContext(Rac.CheckboxContext);
  console.log("Checkbox context:", JSON.stringify(context, null, 2));
  return <Oui.Checkbox {...props} />;
}

function FieldDescriptionWrapper(
  props: React.ComponentProps<typeof Oui.FieldDescription>,
) {
  const context = React.useContext(Rac.TextContext);
  console.log("Text context (description):", JSON.stringify(context, null, 2));
  return <Oui.FieldDescription {...props} />;
}

export default function RouteComponent() {
  return (
    <div className="mx-auto max-w-md">
      <Oui.FieldGroup>
        <Oui.FieldCheckbox>
          <CheckboxWrapper>Subscribe to newsletter</CheckboxWrapper>
          <FieldDescriptionWrapper>
            Receive weekly updates.
          </FieldDescriptionWrapper>
        </Oui.FieldCheckbox>
        <Oui.FieldCheckbox>
          <CheckboxWrapper>Subscribe to another newsletter</CheckboxWrapper>
        </Oui.FieldCheckbox>
      </Oui.FieldGroup>
    </div>
  );
}
