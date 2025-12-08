"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/field";
import * as Oui from "@/registry/default/ui/oui-index";
import { Switch } from "@/registry/default/ui/switch";
import { twJoin } from "tailwind-merge";

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

function OuiSwitchDemo() {
  return (
    <div className="w-full max-w-md">
      <Oui.FieldGroup>
        <Oui.FieldSwitch>
          <Oui.FieldContent>
            <Oui.FieldLabel>Multi-factor authentication</Oui.FieldLabel>
            <Oui.FieldDescription>
              Enable multi-factor authentication.
            </Oui.FieldDescription>
          </Oui.FieldContent>
          <Oui.Switch />
        </Oui.FieldSwitch>
        <Oui.FieldGroup>
          <Oui.Field>
            <Oui.Switch>Airplane Mode</Oui.Switch>
          </Oui.Field>
          <Oui.Field>
            <Oui.Switch isDisabled>Security emails</Oui.Switch>
          </Oui.Field>
          <Oui.Field>
            <Oui.Switch
              defaultSelected
              className="**:data-[slot=switch-indicator]:group-data-selected:bg-blue-500 **:data-[slot=switch-indicator]:dark:group-data-selected:bg-blue-600"
            >
              Bluetooth
            </Oui.Switch>
          </Oui.Field>
        </Oui.FieldGroup>
        <Oui.Switch defaultSelected>
          <Oui.FieldContent>
            <Oui.FieldTitle>Share across devices</Oui.FieldTitle>
            <Oui.FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </Oui.FieldDescription>
          </Oui.FieldContent>
        </Oui.Switch>
        <Oui.Switch
          defaultSelected
          className={twJoin(
            "flex-row-reverse",
            "data-selected:border-blue-600 data-selected:bg-blue-50 dark:data-selected:border-blue-900 dark:data-selected:bg-blue-950",
            "**:data-[slot=switch-indicator]:group-data-selected:bg-blue-500 **:data-[slot=switch-indicator]:dark:group-data-selected:bg-blue-600",
          )}
        >
          <Oui.FieldContent>
            <Oui.FieldTitle>Share across devices</Oui.FieldTitle>
            <Oui.FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </Oui.FieldDescription>
          </Oui.FieldContent>
        </Oui.Switch>
      </Oui.FieldGroup>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Switch"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.switch.tsx"
    >
      <SideBySideSection
        title="Field"
        shadcn={<SwitchDemo />}
        oui={<OuiSwitchDemo />}
      />
    </SideBySidePage>
  );
}
