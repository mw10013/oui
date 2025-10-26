"use client";

import { SearchFieldEx } from "@/registry/default/components/oui-search-field-ex";

export default function Component() {
  return (
    <SearchFieldEx
      label="Search Field Ex"
      description="Enter a search term"
      errorMessage="Search term is required"
      placeholder="Search..."
    />
  );
}
