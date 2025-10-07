import { AutocompleteEx } from "@/registry/components/oui-autocomplete-ex";
import { SelectExPopover } from "@/registry/components/oui-select-ex-popover";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
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

  return (
    <SelectExPopover
      label="Language"
      description="Select your preferred language"
    >
      <AutocompleteEx
        placeholder="Search languages"
        searchFieldProps={{ "aria-label": "Languages", autoFocus: true }}
      >
        <Rac.ListBox items={languages}>
          {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
        </Rac.ListBox>
      </AutocompleteEx>
    </SelectExPopover>
  );
}
