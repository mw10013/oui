"use client";

import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import { CheckboxGroup } from "@/registry/default/ui/oui-checkbox-group";
import {
  FieldCheckbox,
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
          <FieldDescription className="mb-2">
            Select the items you want to show on the desktop.
          </FieldDescription>
          <Checkbox value="hard-disks" className="font-normal">
            Hard disks
          </Checkbox>
          <Checkbox value="external-disks" className="font-normal">
            External disks
          </Checkbox>
          <Checkbox value="cds-dvds" className="font-normal">
            CDs, DVDs, and iPods
          </Checkbox>
          <Checkbox value="connected-servers" className="font-normal">
            Connected servers
          </Checkbox>
          <FieldError />
        </CheckboxGroup>
        <FieldSeparator />
        <FieldCheckbox>
          <Checkbox defaultSelected>Sync Desktop & Documents folders</Checkbox>
          <FieldDescription>
            Your Desktop & Documents folders are being synced with iCloud Drive.
            You can access them from other devices.
          </FieldDescription>
        </FieldCheckbox>
      </FieldGroup>
    </div>
  );
}
