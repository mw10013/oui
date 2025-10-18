import { SearchFieldEx } from "@/registry/components/oui-search-field-ex";

export default function Component() {
  return (
    <SearchFieldEx
      label="SearchFieldEx"
      description="Enter a search term"
      errorMessage="Search term is required"
      placeholder="Search..."
    />
  );
}
