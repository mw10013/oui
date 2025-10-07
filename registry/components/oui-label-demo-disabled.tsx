import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
      <Rac.TextField className="group grid gap-3" isDisabled>
      <Label>Disabled</Label>
      <Input placeholder="Disabled" />
    </Rac.TextField>
  );
}
