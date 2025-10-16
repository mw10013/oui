import { Input } from "@/registry/components/ui/oui-input";
import { Label } from "@/registry/components/ui/oui-label";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { SearchField } from "@/registry/components/ui/oui-search-field";
import * as Rac from "react-aria-components";

export default function Component() {
  /* eslint-disable-next-line @typescript-eslint/unbound-method --
   * React Aria uses functional patterns, so destructured functions don't use 'this'
   */
  const { contains } = Rac.useFilter({ sensitivity: "base" });
  return (
    <Rac.Autocomplete filter={contains}>
      <SearchField>
        <Label>Commands</Label>
        <Input placeholder="Search commands...." />
      </SearchField>
      <Rac.ListBox className="w-full min-w-[8rem] overflow-x-hidden overflow-y-auto p-1">
        <ListBoxItem id="1" textValue="Create new file...">
          Create new file...
        </ListBoxItem>
        <ListBoxItem id="2" textValue="Create new folder...">
          Create new folder...
        </ListBoxItem>
        <ListBoxItem id="3" textValue="Assign to...">
          Assign to...
        </ListBoxItem>
        <ListBoxItem id="4" textValue="Assign to me">
          Assign to me
        </ListBoxItem>
        <ListBoxItem id="5" textValue="Change status...">
          Change status...
        </ListBoxItem>
        <ListBoxItem id="6" textValue="Change priority...">
          Change priority...
        </ListBoxItem>
        <ListBoxItem id="7" textValue="Add label...">
          Add label...
        </ListBoxItem>
        <ListBoxItem id="8" textValue="Remove label...">
          Remove label...
        </ListBoxItem>
      </Rac.ListBox>
    </Rac.Autocomplete>
  );
}
