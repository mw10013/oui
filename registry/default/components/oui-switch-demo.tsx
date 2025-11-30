"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSwitch,
  FieldTitle,
} from "@/registry/default/ui/oui-field";
import { Switch } from "@/registry/default/ui/oui-switch";
import { twJoin } from "tailwind-merge";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSwitch>
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
        <Switch defaultSelected>
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
        </Switch>
        <Switch
          defaultSelected
          className={twJoin(
            "flex-row-reverse",
            "data-selected:border-blue-600 data-selected:bg-blue-50 dark:data-selected:border-blue-900 dark:data-selected:bg-blue-950",
            "**:data-[slot=switch-indicator]:group-data-selected:bg-blue-500 **:data-[slot=switch-indicator]:dark:group-data-selected:bg-blue-600",
          )}
        >
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
        </Switch>
      </FieldGroup>
    </div>
  );
}
