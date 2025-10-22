"use client";

import { Checkbox } from "@/registry/default/ui/oui-checkbox";

export default function Component() {
  return (
    <Checkbox name="toggle" isDisabled>
      Enable notifications
    </Checkbox>
  );
}
