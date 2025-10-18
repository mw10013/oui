import type { SelectionMode } from "@/registry/components/ui/oui-select";
import { FieldError } from "@/registry/components/ui/oui-field-error";
import { Label } from "@/registry/components/ui/oui-label";
import { Link } from "@/registry/components/ui/oui-link";
import { Popover } from "@/registry/components/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/components/ui/oui-select";
import { Text } from "@/registry/components/ui/oui-text";
import * as Rac from "react-aria-components";

export interface SelectExProps<T extends object, M extends SelectionMode>
  extends Omit<Rac.SelectProps<T, M>, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  buttonClassName?: string;
  /**
   * A render function to customize the display of the selected value or placeholder.
   * Receives `isPlaceholder` and `defaultChildren` (the placeholder string or default rendered item).
   */
  renderSelectValue?: (
    props: Rac.SelectValueRenderProps<T> & {
      defaultChildren: React.ReactNode | undefined;
    },
  ) => React.ReactNode;
}

/**
 * @example
 *
 * ```tsx
 * <SelectEx
 *   name="role"
 *   label="Role"
 *   defaultSelectedKey={"member"}
 *   items={[
 *     { id: "member", name: "Member" },
 *     { id: "admin", name: "Admin" },
 *   ]}
 * >
 *   {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
 * </SelectEx>
 * ```
 */
export function SelectEx<T extends object, M extends SelectionMode = "single">({
  label,
  description,
  errorMessage,
  children,
  items,
  buttonClassName,
  renderSelectValue,
  ...props
}: SelectExProps<T, M>) {
  return (
    <Select {...props}>
      {label && <Label>{label}</Label>}
      <SelectButton className={buttonClassName}>
        <SelectValue>{renderSelectValue}</SelectValue>
      </SelectButton>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Rac.ListBox items={items}>{children}</Rac.ListBox>
      </Popover>
    </Select>
  );
}

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>SelectEx</Label>
      <Text slot="description">
        A reusable wrapper for{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/Select.html"
          underline="always"
        >
          Select
        </Link>{" "}
        — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=select-ex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
