"use client";

import { FieldError } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { TextField } from "@/registry/default/ui/oui-text-field";

export default function Component() {
  return (
    <TextField isInvalid>
      <Label>Field Error</Label>
      <Input placeholder="Placeholder" />
      <FieldError>This field is FieldError.</FieldError>
    </TextField>
  );
}
