"use client";

import { FieldError } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { SearchField } from "@/registry/default/ui/oui-search-field";
import { Text } from "@/registry/default/ui/oui-text";
import * as Rac from "react-aria-components";

export interface AutocompleteExProps
  extends Omit<Rac.AutocompleteProps, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string | ((validation: Rac.ValidationResult) => string);
  placeholder?: string;
  searchFieldProps?: Rac.SearchFieldProps;
  children: React.ReactNode;
}

export function AutocompleteEx({
  label,
  description,
  errorMessage,
  placeholder,
  searchFieldProps,
  children,
  filter,
  ...props
}: AutocompleteExProps) {
  /* eslint-disable-next-line @typescript-eslint/unbound-method --
   * React Aria uses functional patterns, so destructured functions don't use 'this'
   */
  const { contains: defaultFilter } = Rac.useFilter({ sensitivity: "base" });

  return (
    <Rac.Autocomplete {...props} filter={filter ?? defaultFilter}>
      <SearchField {...searchFieldProps}>
        {label && typeof label === "string" ? <Label>{label}</Label> : label}
        <Input
          placeholder={placeholder}
          className="[&::-webkit-search-cancel-button]:hidden"
        />
        {description && <Text slot="description">{description}</Text>}
        <FieldError>{errorMessage}</FieldError>
      </SearchField>
      {children}
    </Rac.Autocomplete>
  );
}
