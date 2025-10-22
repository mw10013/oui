"use client";
import { Checkbox } from "@/registry/components/ui/oui-checkbox";

export default function Component() {
  return (
    <Checkbox name="toggle" isDisabled>
      Enable notifications
    </Checkbox>
  );
}
