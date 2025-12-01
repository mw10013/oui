"use client";

import {
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import { SearchField } from "@/registry/default/ui/oui-search-field";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import * as Rac from "react-aria-components";

/**
 * https://react-spectrum.adobe.com/react-aria/examples/status-select.html
 */
export default function Component() {
  const languages = [
    { id: "1", name: "English" },
    { id: "2", name: "Spanish" },
    { id: "3", name: "French" },
    { id: "4", name: "German" },
    { id: "5", name: "Japanese" },
    { id: "6", name: "Chinese" },
    { id: "7", name: "Korean" },
    { id: "8", name: "Italian" },
    { id: "9", name: "Portuguese" },
    { id: "10", name: "Russian" },
    { id: "11", name: "Arabic" },
    { id: "12", name: "Hindi" },
  ];

  /* eslint-disable-next-line @typescript-eslint/unbound-method --
   * React Aria uses functional patterns, so destructured functions don't use 'this'
   */
  const { contains: defaultFilter } = Rac.useFilter({ sensitivity: "base" });

  return (
    <Select>
      <FieldLabel>Autocomplete Ex Language</FieldLabel>
      <SelectButton>
        <SelectValue />
      </SelectButton>
      <FieldDescription>Select your preferred language</FieldDescription>
      <FieldError />
      <Popover>
        <Rac.Autocomplete filter={defaultFilter}>
          <SearchField aria-label="Languages" autoFocus>
            <Input placeholder="Search languages" />
          </SearchField>
          <Rac.ListBox items={languages}>
            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
          </Rac.ListBox>
        </Rac.Autocomplete>
      </Popover>
    </Select>
  );
}
