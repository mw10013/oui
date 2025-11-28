"use client";

import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import { CheckboxGroup } from "@/registry/default/ui/oui-checkbox-group";
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/default/ui/oui-field";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <CheckboxGroup defaultValue={["hard-disks"]}>
          <FieldLabel>Show these items on the desktop</FieldLabel>
          <FieldDescription>
            Select the items you want to show on the desktop.
          </FieldDescription>
          <Checkbox value="hard-disks">
            Hard disks
          </Checkbox>
          <Checkbox value="external-disks">
            External disks
          </Checkbox>
          <Checkbox value="cds-dvds" isDisabled>
            CDs, DVDs, and iPods
          </Checkbox>
          <Checkbox value="connected-servers">
            Connected servers
          </Checkbox>
          <FieldError />
        </CheckboxGroup>
      </FieldGroup>
    </div>
  );
}
