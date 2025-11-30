"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSwitch,
} from "@/registry/default/ui/oui-field";
import { Switch } from "@/registry/default/ui/oui-switch";
import { twJoin } from "tailwind-merge";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSwitch orientation="horizontal">
          <FieldContent>
            <FieldLabel>Multi-factor authentication</FieldLabel>
            <FieldDescription>
              Enable multi-factor authentication.
            </FieldDescription>
          </FieldContent>
          <Switch />
        </FieldSwitch>
        <FieldGroup>
          <Field>
            <Switch>Airplane Mode</Switch>
          </Field>
          <Field>
            <Switch isDisabled>Security emails</Switch>
          </Field>
          <Field>
            <Switch
              defaultSelected
              className="**:data-[slot=switch-indicator]:group-data-selected:bg-blue-500 **:data-[slot=switch-indicator]:dark:group-data-selected:bg-blue-600"
            >
              Bluetooth
            </Switch>
          </Field>
        </FieldGroup>
        <FieldSwitch
          orientation="horizontal"
          className={twJoin(
            "rounded-lg border p-4 shadow-xs has-data-selected:border-blue-600",
            "**:data-[slot=switch-indicator]:group-data-selected:bg-blue-500 **:data-[slot=switch-indicator]:dark:group-data-selected:bg-blue-600",
          )}
        >
          <FieldContent>
            <FieldLabel>Share across devices</FieldLabel>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch defaultSelected />
        </FieldSwitch>
      </FieldGroup>
    </div>
  );
}
