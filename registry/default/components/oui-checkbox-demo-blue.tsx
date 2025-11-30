"use client";

import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import {
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
  FieldTitle,
} from "@/registry/default/ui/oui-field";
import { twJoin } from "tailwind-merge";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <Checkbox defaultSelected>
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Checkbox>
        <Checkbox
          defaultSelected
          className={twJoin(
            "data-selected:border-blue-600 data-selected:bg-blue-50 dark:data-selected:border-blue-900 dark:data-selected:bg-blue-950",
            "*:data-[slot=checkbox-indicator]:group-data-selected:border-blue-600 *:data-[slot=checkbox-indicator]:group-data-selected:bg-blue-600 *:data-[slot=checkbox-indicator]:group-data-selected:text-white dark:*:data-[slot=checkbox-indicator]:group-data-selected:border-blue-700 dark:*:data-[slot=checkbox-indicator]:group-data-selected:bg-blue-700",
          )}
        >
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Checkbox>
        <FieldSeparator />
        <Checkbox isDisabled>Enable alerts</Checkbox>
        <FieldSeparator />
        <Checkbox isInvalid>Enable pagers</Checkbox>
      </FieldGroup>
    </div>
  );
}
