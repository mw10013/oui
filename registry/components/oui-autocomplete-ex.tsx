import * as Rac from "react-aria-components";
import { SearchFieldEx } from "@/registry/components/oui-search-field-ex";

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
  ...rest
}: AutocompleteExProps) {
  /* eslint-disable-next-line @typescript-eslint/unbound-method --
   * React Aria uses functional patterns, so destructured functions don't use 'this'
   */
  const { contains: defaultFilter } = Rac.useFilter({ sensitivity: "base" });

  return (
    <Rac.Autocomplete {...rest} filter={filter ?? defaultFilter}>
      <SearchFieldEx
        {...searchFieldProps}
        label={label}
        description={description}
        errorMessage={errorMessage}
        placeholder={placeholder}
      />
      {children}
    </Rac.Autocomplete>
  );
}

export default function Component() {
  return <div className="p-4">AutocompleteEx</div>;
}

