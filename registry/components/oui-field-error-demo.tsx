import { FieldError } from "@/registry/components/ui/oui-field-error";
import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { TextField } from "@/registry/components/ui/oui-text-field";

export default function Component() {
  return (
    <TextField isInvalid>
      <Label>Field Error</Label>
      <Input placeholder="Placeholder" />
      <FieldError>This field is FieldError.</FieldError>
    </TextField>
  );
}
