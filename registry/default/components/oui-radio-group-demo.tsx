"use client";

import {
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/oui-field";
import { Radio, RadioGroup } from "@/registry/default/ui/oui-radio-group";

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>
          Yearly and lifetime plans offer significant savings.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Radio value="monthly">Monthly ($9.99/month)</Radio>
          <Radio value="yearly">Yearly ($99.99/year)</Radio>
          <Radio value="lifetime">Lifetime ($299.99)</Radio>
        </RadioGroup>
      </FieldSet>
    </div>
  );
}
