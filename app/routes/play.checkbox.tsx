"use client";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import * as Oui from "@/registry/default/ui/oui-index";
import * as Rac from "react-aria-components";
import { twMerge } from "tailwind-merge";

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
        <Oui.Checkbox id="oui-terms-3" defaultSelected />
        <div className="grid gap-2">
          <Oui.Label htmlFor="oui-terms-3" className="leading-none">
            Accept terms and conditions
          </Oui.Label>
          <p className="text-sm text-muted-foreground">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <Oui.Checkbox isDisabled>Enable notifications</Oui.Checkbox>
      <Rac.Label
        className={twMerge(
          Oui.labelComponentStyles,
          "items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-data-selected:border-blue-600 has-data-selected:bg-blue-50 dark:has-data-selected:border-blue-900 dark:has-data-selected:bg-blue-950",
        )}
        // className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-data-selected:border-blue-600 has-data-selected:bg-blue-50 dark:has-data-selected:border-blue-900 dark:has-data-selected:bg-blue-950"
      >
        <Oui.Checkbox
          id="toggle-2"
          defaultSelected
          className="**:data-[slot=checkbox-indicator]:group-data-selected:border-blue-600 **:data-[slot=checkbox-indicator]:group-data-selected:bg-blue-600 **:data-[slot=checkbox-indicator]:group-data-selected:text-white dark:**:data-[slot=checkbox-indicator]:group-data-selected:border-blue-700 dark:**:data-[slot=checkbox-indicator]:group-data-selected:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-sm text-muted-foreground">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Rac.Label>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-6">
      <div className="flex flex-row gap-8">
        <div className="flex flex-1 flex-col gap-4 border border-foreground p-4">
          <CheckboxDemo />
        </div>
        <div className="flex flex-1 flex-col gap-4 border border-foreground p-4">
          <OuiCheckboxDemo />
        </div>
      </div>
    </div>
  );
}
