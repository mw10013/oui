"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/field";
import * as Oui from "@/registry/default/ui/oui-index";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";

function RadioGroupDemo() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>
          Yearly and lifetime plans offer significant savings.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <FieldLabel htmlFor="plan-monthly" className="font-normal">
              Monthly ($9.99/month)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <FieldLabel htmlFor="plan-yearly" className="font-normal">
              Yearly ($99.99/year)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="lifetime" id="plan-lifetime" />
            <FieldLabel htmlFor="plan-lifetime" className="font-normal">
              Lifetime ($299.99)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  );
}

function OuiRadioGroupDemo() {
  return (
    <div className="w-full max-w-md">
      <Oui.FieldSet>
        <Oui.FieldLabel>Subscription Plan</Oui.FieldLabel>
        <Oui.FieldDescription>
          Yearly and lifetime plans offer significant savings.
        </Oui.FieldDescription>
        <Oui.RadioGroup defaultValue="monthly">
          <Oui.Radio value="monthly">Monthly ($9.99/month)</Oui.Radio>
          <Oui.Radio value="yearly">Yearly ($99.99/year)</Oui.Radio>
          <Oui.Radio value="lifetime">Lifetime ($299.99)</Oui.Radio>
        </Oui.RadioGroup>
      </Oui.FieldSet>
    </div>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Radio Group"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.radio-group.tsx"
    >
      <SideBySideSection
        title="Field"
        shadcn={<RadioGroupDemo />}
        oui={<OuiRadioGroupDemo />}
      />
    </SideBySidePage>
  );
}
