"use client";

import { AutocompleteEx } from "@/registry/default/components/oui-autocomplete-ex";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import * as Rac from "react-aria-components";

const users = [
  {
    id: "1",
    username: "shadcn",
  },
  {
    id: "2",
    username: "leerob",
  },
  {
    id: "3",
    username: "evilrabbit",
  },
];

export default function Component() {
  return (
    <Select defaultValue={users[0].id}>
      <FieldLabel>Autocomplete Ex Users</FieldLabel>
      <SelectButton>
        <SelectValue />
      </SelectButton>
      <FieldError />
      <Popover>
        <AutocompleteEx
          placeholder="Select user..."
          searchFieldProps={{ "aria-label": "User", autoFocus: true }}
        >
          <Rac.ListBox items={users}>
            {(item) => (
              <ListBoxItem id={item.id} textValue={item.username}>
                <div className="flex items-center gap-2">
                  <Avatar className="size-5">
                    <AvatarImage
                      src={`https://github.com/${item.username}.png`}
                      alt={item.username}
                    />
                    <AvatarFallback>
                      {item.username[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {item.username}
                </div>
              </ListBoxItem>
            )}
          </Rac.ListBox>
        </AutocompleteEx>
      </Popover>
    </Select>
  );
}
