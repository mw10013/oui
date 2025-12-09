"use client";

import {
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { SearchField } from "@/registry/default/ui/oui-search-field";

export default function Component() {
  return (
    <SearchField>
      <FieldLabel>Search Field</FieldLabel>
      <Input placeholder="Search..." />
      <FieldDescription>Enter a search term</FieldDescription>
      <FieldError />
    </SearchField>
  );
}
