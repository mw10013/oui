"use client";

import React from "react";
import { FieldError } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { SearchField } from "@/registry/default/ui/oui-search-field";
import { Text } from "@/registry/default/ui/oui-text";
import * as Rac from "react-aria-components";

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
  ...props
}: SearchFieldExProps) {
  return (
    <SearchField {...props}>
      {label && typeof label === "string" ? <Label>{label}</Label> : label}
      <Input
        placeholder={placeholder}
        className="[&::-webkit-search-cancel-button]:hidden"
      />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </SearchField>
  );
}
