"use client";

import {
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSwitch,
} from "@/registry/default/ui/oui-field";
import { Switch } from "@/registry/default/ui/oui-switch";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldSwitch orientation="horizontal">
        <FieldContent>
          <FieldLabel>Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor
            device, you can use a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch />
      </FieldSwitch>
    </div>
  );
}
