"use client";

import { FieldError } from "@/registry/default/ui/oui-field-error";
import { Group } from "@/registry/default/ui/oui-group";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { Link } from "@/registry/default/ui/oui-link";
import { NumberField } from "@/registry/default/ui/oui-number-field";
import { Text } from "@/registry/default/ui/oui-text";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as Rac from "react-aria-components";

export interface NumberFieldExProps
  extends Omit<Rac.NumberFieldProps, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
}

/**
 * Derived from https://originui.com/inputs
 */
export function NumberFieldEx({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: NumberFieldExProps) {
  return (
    <NumberField {...props}>
      {label && <Label>{label}</Label>}
      <Group>
        <Input
          variant="ghost"
          placeholder={placeholder}
          className="tabular-nums"
        />
        <div className="flex h-[calc(100%+2px)] flex-col">
          <Rac.Button
            slot="increment"
            className="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
          </Rac.Button>
          <Rac.Button
            slot="decrement"
            className="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
          </Rac.Button>
        </div>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </NumberField>
  );
}

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>NumberFieldEx</Label>
      <Text slot="description">
        A reusable wrapper for{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/NumberField.html"
          underline="always"
        >
          NumberField
        </Link>{" "}
        — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=number-field-ex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
