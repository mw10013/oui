"use client";

import { FieldError } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { Text } from "@/registry/default/ui/oui-text";
import { TextField } from "@/registry/default/ui/oui-text-field";

export default function Component() {
  return (
    <TextField>
      <Label>Text Field</Label>
      <Input placeholder="Placeholder" />
      <Text slot="description">Description</Text>
      <FieldError />
    </TextField>
  );
}
