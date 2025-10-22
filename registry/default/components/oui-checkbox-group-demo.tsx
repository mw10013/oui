"use client";

import { Checkbox } from "@/registry/default/ui/oui-checkbox";
import { CheckboxGroup } from "@/registry/default/ui/oui-checkbox-group";
import { Label } from "@/registry/default/ui/oui-label";

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
