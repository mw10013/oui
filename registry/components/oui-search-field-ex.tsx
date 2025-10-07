import React from "react";
import { SearchField } from "@/registry/components/ui/oui-search-field";
import { Text } from "@/registry/components/ui/oui-text";
import * as Rac from "react-aria-components";
import { Label } from "@/registry/components/ui/oui-label";
import { Input } from "@/registry/components/ui/oui-input";
import { FieldError } from "@/registry/components/ui/oui-field-error";

export interface SearchFieldExProps extends Rac.SearchFieldProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
}

export function SearchFieldEx({
  label,
  description,
  errorMessage,
  placeholder,
  ...rest
}: SearchFieldExProps) {
  return (
    <SearchField {...rest}>
      {label && <Label>{label}</Label>}
      <Input
        placeholder={placeholder}
        className="[&::-webkit-search-cancel-button]:hidden"
      />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </SearchField>
  );
}

export default function Component() {
  return <div className="p-4">SearchFieldEx</div>;
}
