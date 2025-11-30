"use client";

import OuiSwitchDemo from "@/registry/default/components/oui-switch-demo";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Switch } from "@/registry/default/ui/switch";

function SwitchDemo() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
            <FieldDescription>
              Enable multi-factor authentication.
            </FieldDescription>
          </FieldContent>
          <Switch id="2fa" />
        </Field>
        <FieldGroup>
          <Field orientation="horizontal">
            <Switch id="airplane-mode" />
            <FieldLabel htmlFor="airplane-mode">Airplane Mode</FieldLabel>{" "}
          </Field>
          <Field orientation="horizontal">
            <Switch id="security" disabled />
            <FieldLabel htmlFor="security">Security emails</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <SwitchDemo />
      <OuiSwitchDemo />
    </div>
  );
}
