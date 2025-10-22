"use client";

import React from "react";
import { FieldError } from "@/registry/default/ui/oui-field-error";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { Link } from "@/registry/default/ui/oui-link";
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
  return (
    <div className="grid gap-2">
      <Label>SearchFieldEx</Label>
      <Text slot="description">
        A reusable wrapper for{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/SearchField.html"
          underline="always"
        >
          SearchField
        </Link>{" "}
        — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=search-field-ex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
