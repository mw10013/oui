import { Checkbox } from "@/registry/components/ui/oui-checkbox";
import { CheckboxGroup } from "@/registry/components/ui/oui-checkbox-group";
import { Label } from "@/registry/components/ui/oui-label";

export default function Component() {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  );
}
