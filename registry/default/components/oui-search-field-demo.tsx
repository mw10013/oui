"use client";

import { FieldError } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { SearchField } from "@/registry/default/ui/oui-search-field";
import { Text } from "@/registry/default/ui/oui-text";

export default function Component() {
  return (
    <SearchField>
      <Label>Search Field</Label>
      <Input placeholder="Search..." />
      <Text slot="description">Enter a search term</Text>
      <FieldError>Search term is required</FieldError>
    </SearchField>
  );
}
