"use client";

import {
  Field,
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
          <Field orientation="horizontal">
            <Radio value="monthly" className="font-normal">
              Monthly ($9.99/month)
            </Radio>
          </Field>
          <Field orientation="horizontal">
            <Radio value="yearly" className="font-normal">
              Yearly ($99.99/year)
            </Radio>
          </Field>
          <Field orientation="horizontal">
            <Radio value="lifetime" className="font-normal">
              Lifetime ($299.99)
            </Radio>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  );
}
