import { Button } from "@/registry/components/ui/oui-button";
import { ComboBox } from "@/registry/components/ui/oui-combo-box";
import { FieldError } from "@/registry/components/ui/oui-field-error";
import { Group } from "@/registry/components/ui/oui-group";
import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { Link } from "@/registry/components/ui/oui-link";
import { Popover } from "@/registry/components/ui/oui-popover";
import { Text } from "@/registry/components/ui/oui-text";
import { ChevronsUpDown } from "lucide-react";
import * as Rac from "react-aria-components";

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
  return (
    <div className="grid gap-2">
      <Label>ComboBoxEx</Label>
      <Text slot="description">
        A reusable wrapper for{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/ComboBox.html"
          underline="always"
        >
          ComboBox
        </Link>{" "}
        — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=combo%2Bbox%2Bex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
