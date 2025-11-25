"use client";

import { useState } from "react";
import { FieldDescription, FieldLabel } from "@/registry/default/ui/oui-field";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import * as Rac from "react-aria-components";

export default function Component() {
  const [animals, setAnimals] = useState<Rac.Key[]>(["Bison", "Kangaroo"]);
  return (
    <Select
      placeholder="Select multiple"
      selectionMode="multiple"
      value={animals}
      onChange={setAnimals}
      className="w-fit"
    >
      <FieldLabel>Animals</FieldLabel>
      <SelectButton>
        <SelectValue />
      </SelectButton>
      <FieldDescription>
        Select multiple animals from the list.
      </FieldDescription>
      <Popover>
        <Rac.ListBox>
          <ListBoxItem id="Koala">Koala</ListBoxItem>
          <ListBoxItem id="Kangaroo">Kangaroo</ListBoxItem>
          <ListBoxItem id="Platypus">Platypus</ListBoxItem>
          <ListBoxItem id="Bald Eagle">Bald Eagle</ListBoxItem>
          <ListBoxItem id="Bison">Bison</ListBoxItem>
          <ListBoxItem id="Skunk">Skunk</ListBoxItem>
        </Rac.ListBox>
      </Popover>
    </Select>
  );
}
