import * as Rac from "react-aria-components";
import { Label} from "@/registry/components/ui/oui-label";
import { Input } from "@/registry/components/ui/oui-input";

export default function Component() {
  return (
    <Rac.TextField className="grid gap-3">
      <Label>Username</Label>
      <Input placeholder="Username" />
    </Rac.TextField>
  );
}
