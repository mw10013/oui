import { RadioGroupEx } from "@/registry/components/oui-radio-group-ex";
import { Radio } from "@/registry/components/ui/oui-radio-group";

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
    <RadioGroupEx
      defaultValue="starter"
      className="max-w-sm"
      aria-label="RadioGroupEx"
    >
      {plans.map((plan) => (
        <Radio
          value={plan.id}
          key={plan.id}
          className="flex items-start gap-3 rounded-lg border p-4 data-hovered:bg-accent/50 data-selected:border-green-600 data-selected:bg-green-50 dark:data-selected:border-green-900 dark:data-selected:bg-green-950"
          radioGroupItemClassName="shadow-none group-data-selected:border-green-600  group-data-selected:bg-green-600 [&_svg]:fill-white [&_svg]:stroke-white"
        >
          <div className="grid gap-1 font-normal">
            <div className="font-medium">{plan.name}</div>
            <div className="leading-snug text-muted-foreground">
              {plan.description}
            </div>
          </div>
        </Radio>
      ))}
    </RadioGroupEx>
  );
}
