"use client";

import OuiSwitchDemo from "@/registry/default/components/oui-switch-demo";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Switch } from "@/registry/default/ui/switch";

function SwitchDemo() {
  return (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor
            device, you can use a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id="2fa" />
      </Field>
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
