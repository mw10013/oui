"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import { SearchField } from "@/registry/default/ui/oui-search-field";
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
  /* eslint-disable-next-line @typescript-eslint/unbound-method --
   * React Aria uses functional patterns, so destructured functions don't use 'this'
   */
  const { contains: defaultFilter } = Rac.useFilter({ sensitivity: "base" });

  return (
    <Select defaultValue={users[0].id}>
      <FieldLabel>Autocomplete Ex Users</FieldLabel>
      <SelectButton>
        <SelectValue />
      </SelectButton>
      <FieldError />
      <Popover>
        <Rac.Autocomplete filter={defaultFilter}>
          <SearchField aria-label="User" autoFocus>
            <Input placeholder="Select user..." />
          </SearchField>
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
        </Rac.Autocomplete>
      </Popover>
    </Select>
  );
}
