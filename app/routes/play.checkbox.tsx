"use client";

import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/default/ui/field";
import { Label } from "@/registry/default/ui/label";
import * as Oui from "@/registry/default/ui/oui-index";
import { twJoin } from "tailwind-merge";

function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p className="text-sm text-muted-foreground">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" disabled />
        <Label htmlFor="toggle">Enable notifications</Label>
      </div>
      <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-aria-checked:border-blue-600 has-aria-checked:bg-blue-50 dark:has-aria-checked:border-blue-900 dark:has-aria-checked:bg-blue-950">
        <Checkbox
          id="toggle-2"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-sm text-muted-foreground">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
  );
}

function OuiCheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Oui.Checkbox>Accept terms and conditions</Oui.Checkbox>
      <div className="flex items-start gap-3">
        <Oui.Checkbox id="oui-terms-2" defaultSelected />
        <div className="grid gap-2">
          <Oui.Label htmlFor="oui-terms-2" className="leading-none">
            Accept terms and conditions
          </Oui.Label>
          <p className="text-sm text-muted-foreground">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <Oui.Checkbox isDisabled>Enable notifications</Oui.Checkbox>
      <Oui.Checkbox
        id="toggle-2"
        defaultSelected
        className={twJoin(
          "rounded-lg border p-3 data-hovered:bg-accent/50 data-selected:border-blue-600 data-selected:bg-blue-50 dark:data-selected:border-blue-900 dark:data-selected:bg-blue-950",
          "**:data-[slot=checkbox-indicator]:group-data-selected:border-blue-600 **:data-[slot=checkbox-indicator]:group-data-selected:bg-blue-600 **:data-[slot=checkbox-indicator]:group-data-selected:text-white dark:**:data-[slot=checkbox-indicator]:group-data-selected:border-blue-700 dark:**:data-[slot=checkbox-indicator]:group-data-selected:bg-blue-700",
        )}
      >
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-sm text-muted-foreground">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Oui.Checkbox>
    </div>
  );
}

function FieldCheckboxDemo() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">
            Show these items on the desktop
          </FieldLegend>
          <FieldDescription>
            Select the items you want to show on the desktop.
          </FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-hard-disks-ljj" defaultChecked />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
              >
                Hard disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-external-disks-1yg" />
              <FieldLabel
                htmlFor="finder-pref-9k2-external-disks-1yg"
                className="font-normal"
              >
                External disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
              <FieldLabel
                htmlFor="finder-pref-9k2-cds-dvds-fzt"
                className="font-normal"
              >
                CDs, DVDs, and iPods
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
              <FieldLabel
                htmlFor="finder-pref-9k2-connected-servers-6l2"
                className="font-normal"
              >
                Connected servers
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
              Sync Desktop & Documents folders
            </FieldLabel>
            <FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud
              Drive. You can access them from other devices.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  );
}

function OuiFieldCheckboxDemo() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">
            Show these items on the desktop
          </FieldLegend>
          <Oui.FieldDescription>
            Select the items you want to show on the desktop.
          </Oui.FieldDescription>
          <FieldGroup className="gap-3">
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox
                id="oui-finder-pref-9k2-hard-disks-ljj"
                defaultSelected
              />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
              >
                Hard disks
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-external-disks-1yg" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-external-disks-1yg"
                className="font-normal"
              >
                External disks
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-cds-dvds-fzt" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-cds-dvds-fzt"
                className="font-normal"
              >
                CDs, DVDs, and iPods
              </Oui.FieldLabel>
            </Oui.Field>
            <Oui.Field orientation="horizontal">
              <Oui.Checkbox id="oui-finder-pref-9k2-connected-servers-6l2" />
              <Oui.FieldLabel
                htmlFor="oui-finder-pref-9k2-connected-servers-6l2"
                className="font-normal"
              >
                Connected servers
              </Oui.FieldLabel>
            </Oui.Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Oui.Field orientation="horizontal">
          <Oui.Checkbox
            id="oui-finder-pref-9k2-sync-folders-nep"
            defaultSelected
          />
          <FieldContent>
            <Oui.FieldLabel htmlFor="oui-finder-pref-9k2-sync-folders-nep">
              Sync Desktop & Documents folders
            </Oui.FieldLabel>
            <Oui.FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud
              Drive. You can access them from other devices.
            </Oui.FieldDescription>
          </FieldContent>
        </Oui.Field>
      </FieldGroup>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 p-6 *:border *:border-foreground *:p-4">
      <CheckboxDemo />
      <OuiCheckboxDemo />
      <FieldCheckboxDemo />
      <OuiFieldCheckboxDemo />
    </div>
  );
}
