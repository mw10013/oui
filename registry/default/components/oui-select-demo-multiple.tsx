"use client";

import { useState } from "react";
import { FieldDescription, FieldLabel } from "@/registry/default/ui/oui-field";
import { Header } from "@/registry/default/ui/oui-header";
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
      <FieldDescription>Select multiple animals.</FieldDescription>
      <Popover>
        <Rac.ListBox>
          <Rac.ListBoxSection id="mammals">
            <Header variant="select">Mammals</Header>
            <Rac.Collection>
              <ListBoxItem id="Koala">Koala</ListBoxItem>
              <ListBoxItem id="Kangaroo">Kangaroo</ListBoxItem>
              <ListBoxItem id="Platypus">Platypus</ListBoxItem>
              <ListBoxItem id="Bison">Bison</ListBoxItem>
              <ListBoxItem id="Skunk" isDisabled>
                Skunk
              </ListBoxItem>
            </Rac.Collection>
          </Rac.ListBoxSection>
          <Rac.ListBoxSection id="birds">
            <Header variant="select">Birds</Header>
            <Rac.Collection>
              <ListBoxItem id="Bald Eagle">Bald Eagle</ListBoxItem>
            </Rac.Collection>
          </Rac.ListBoxSection>
        </Rac.ListBox>
      </Popover>
    </Select>
  );
}
