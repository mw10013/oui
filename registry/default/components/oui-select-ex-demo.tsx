"use client";

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
  return (
    <div className="w-full max-w-md">
      <Select placeholder="Select fruit" className="w-fit">
        <FieldLabel>Fruit</FieldLabel>
        <SelectButton>
          <SelectValue />
        </SelectButton>
        <FieldDescription>Select your favorite fruit.</FieldDescription>
        <Popover>
          <Rac.ListBox>
            <Rac.ListBoxSection id="fruits-section">
              <Header variant="select">Fruits</Header>
              <Rac.Collection>
                <ListBoxItem id="apple">Apple</ListBoxItem>
                <ListBoxItem id="banana">Banana</ListBoxItem>
                <ListBoxItem id="blueberry">Blueberry</ListBoxItem>
                <ListBoxItem id="grapes" isDisabled>
                  Grapes
                </ListBoxItem>
                <ListBoxItem id="pineapple">Pineapple</ListBoxItem>
              </Rac.Collection>
            </Rac.ListBoxSection>
          </Rac.ListBox>
        </Popover>
      </Select>
    </div>
  );
}
