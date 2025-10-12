import { useState } from "react";
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
  const options = [
    { name: "Koala" },
    { name: "Kangaroo" },
    { name: "Platypus" },
    { name: "Bald Eagle" },
    { name: "Bison" },
    { name: "Skunk" },
  ];
  const [animals, setAnimals] = useState<Rac.Key[]>(["Bison", "Kangaroo"]);

  return (
    <Item>
      <ItemContent>
        <ItemTitle>Select</ItemTitle>
        <ItemDescription>Multiple selection.</ItemDescription>
        <Select<object, "multiple">
          selectionMode="multiple"
          value={animals}
          onChange={setAnimals}
        >
          <SelectButton>
            <SelectValue />
          </SelectButton>
          <Popover>
            <Rac.ListBox>
              {options.map((item) => (
                <ListBoxItem key={item.name} id={item.name}>
                  {item.name}
                </ListBoxItem>
              ))}
            </Rac.ListBox>
          </Popover>
        </Select>
      </ItemContent>
    </Item>
  );
}
