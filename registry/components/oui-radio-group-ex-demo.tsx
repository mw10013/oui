import { RadioGroupEx } from "@/registry/components/oui-radio-group-ex";
import { Radio } from "@/registry/components/ui/oui-radio-group";

export default function Component() {
  return (
    <RadioGroupEx defaultValue="comfortable">
      <Radio value="default" className="gap-3">
        Default
      </Radio>
      <Radio value="comfortable" className="gap-3">
        Comfortable
      </Radio>
      <Radio value="compact" className="gap-3">
        Compact
      </Radio>
    </RadioGroupEx>
  );
}
