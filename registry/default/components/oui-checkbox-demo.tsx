"use client";

import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import { CheckboxGroup } from "@/registry/default/ui/oui-checkbox-group";
import {
  FieldCheckbox,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/default/ui/oui-field";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <CheckboxGroup defaultValue={["hard-disks"]}>
          <FieldLabel className="text-sm">
            Show these items on the desktop
          </FieldLabel>
          <FieldDescription>
            Select the items you want to show on the desktop.
          </FieldDescription>
          <Checkbox value="hard-disks">Hard disks</Checkbox>
          <Checkbox value="external-disks">External disks</Checkbox>
          <Checkbox value="cds-dvds">CDs, DVDs, and iPods</Checkbox>
          <Checkbox value="connected-servers">Connected servers</Checkbox>
          <FieldError />
        </CheckboxGroup>
        <FieldSeparator />
        <FieldCheckbox>
          <Checkbox defaultSelected></Checkbox>
          <FieldContent>
            <FieldLabel>Sync Desktop & Documents folders</FieldLabel>
            <FieldDescription>
              Your Desktop & Documents folders are being synced with iCloud
              Drive. You can access them from other devices.
            </FieldDescription>
          </FieldContent>
        </FieldCheckbox>
      </FieldGroup>
    </div>
  );
}
