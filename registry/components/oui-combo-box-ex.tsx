import { ChevronsUpDown } from "lucide-react";
import * as Rac from "react-aria-components";
import { Button } from "@/registry/components/ui/oui-button";
import { FieldError } from "@/registry/components/ui/oui-field-error";
import { Group } from "@/registry/components/ui/oui-group";
import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { Popover } from "@/registry/components/ui/oui-popover";
import { Text } from "@/registry/components/ui/oui-text";
import { ComboBox } from "@/registry/components/ui/oui-combo-box";

export interface ComboBoxExProps<T extends object>
  extends Omit<Rac.ComboBoxProps<T>, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ComboBoxEx<T extends object>({
  label,
  description,
  errorMessage,
  placeholder,
  items,
  children,
  ...props
}: ComboBoxExProps<T>) {
  return (
    <ComboBox {...props}>
      {label && <Label>{label}</Label>}
      <Group>
        <Input variant="ghost" placeholder={placeholder} />
        <Button variant="ghost" size="icon">
          <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
        </Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Rac.ListBox items={items}>{children}</Rac.ListBox>
      </Popover>
    </ComboBox>
  );
}

export default function Component() {
  return <div className="p-4">ComboBoxEx</div>;
}