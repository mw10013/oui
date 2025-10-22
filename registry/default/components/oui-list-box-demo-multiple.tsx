"use client";

import { Item, ItemContent, ItemTitle } from "@/registry/default/ui/item";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Item>
      <ItemContent>
        <ItemTitle>ListBox (multiple selection)</ItemTitle>
        <Rac.ListBox aria-label="Favorite animal" selectionMode="multiple">
          <ListBoxItem>Aardvark</ListBoxItem>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </Rac.ListBox>
      </ItemContent>
    </Item>
  );
}
