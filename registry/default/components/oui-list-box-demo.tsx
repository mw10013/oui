"use client";

import { Item, ItemContent, ItemTitle } from "@/registry/default/ui/item";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <Item>
      <ItemContent>
        <ItemTitle>ListBox</ItemTitle>
        <Rac.ListBox aria-label="Favorite animal" selectionMode="single">
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
