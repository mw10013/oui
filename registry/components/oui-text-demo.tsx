import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { Text } from "@/registry/components/ui/oui-text";
import { TextField } from "@/registry/components/ui/oui-text-field";

export default function Component() {
  return (
    <TextField>
      <Label>Text</Label>
      <Input placeholder="Placeholder" />
      <Text slot="description">Text</Text>
    </TextField>
  );
}
