"use client";

import {
  FieldContent,
  FieldDescription,
  FieldTitle,
} from "@/registry/default/ui/oui-field";
import { Radio, RadioGroup } from "@/registry/default/ui/oui-radio-group";
import { twJoin } from "tailwind-merge";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description:
      "Perfect for small businesses getting started with our platform",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features for growing businesses with higher demands",
    price: "$20",
  },
] as const;

export default function Component() {
  return (
    <RadioGroup defaultValue="starter" aria-label="Plans" className="max-w-sm">
      {plans.map((plan) => (
        <Radio
          value={plan.id}
          key={plan.id}
          className={twJoin(
            "flex items-start gap-3 rounded-lg border p-4 data-hovered:bg-accent/50 data-selected:border-green-600 data-selected:bg-green-50 dark:data-selected:border-green-900 dark:data-selected:bg-green-950",
            "*:data-[slot=radio-group-item]:shadow-none *:data-[slot=radio-group-item]:group-data-selected:border-green-600 *:data-[slot=radio-group-item]:group-data-selected:bg-green-600 *:data-[slot=radio-group-item]:[&_svg]:fill-white *:data-[slot=radio-group-item]:[&_svg]:stroke-white",
          )}
        >
          <FieldContent>
            <FieldTitle>{plan.name}</FieldTitle>
            <FieldDescription>{plan.description}</FieldDescription>
          </FieldContent>
        </Radio>
      ))}
    </RadioGroup>
  );
}
