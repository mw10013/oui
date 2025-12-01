"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/oui-button";
import { ComboBox } from "@/registry/default/ui/oui-combo-box";
import { FieldError } from "@/registry/default/ui/oui-field";
import { Group } from "@/registry/default/ui/oui-group";
import { Input } from "@/registry/default/ui/oui-input";
import { Label } from "@/registry/default/ui/oui-label";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import { ChevronsUpDown } from "lucide-react";
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
    <ComboBox defaultSelectedKey={users[0].id} className="md:max-w-[200px]">
      <Label>Combo Box with Avatar</Label>
      <Group>
        <Input variant="ghost" placeholder="Select user..." />
        <Button variant="ghost" size="icon">
          <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
        </Button>
      </Group>
      <FieldError />
      <Popover>
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
      </Popover>
    </ComboBox>
  );
}
