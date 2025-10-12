import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/components/ui/item";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
import { Popover } from "@/registry/components/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/components/ui/oui-select";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Item>
      <ItemContent>
        <ItemTitle>Select</ItemTitle>
        <ItemDescription>Single selection</ItemDescription>
        <Select>
          <SelectButton>
            <SelectValue />
          </SelectButton>
          <Popover>
            <Rac.ListBox>
              <ListBoxItem>Aardvark</ListBoxItem>
              <ListBoxItem>Cat</ListBoxItem>
              <ListBoxItem>Dog</ListBoxItem>
              <ListBoxItem>Kangaroo</ListBoxItem>
              <ListBoxItem>Panda</ListBoxItem>
              <ListBoxItem>Snake</ListBoxItem>
            </Rac.ListBox>
          </Popover>
        </Select>
      </ItemContent>
    </Item>
  );
}
