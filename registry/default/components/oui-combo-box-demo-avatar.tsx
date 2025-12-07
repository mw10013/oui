"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { ButtonGroup } from "@/registry/default/ui/oui-button-group";
import { Button } from "@/registry/default/ui/oui-button";
import { ComboBox } from "@/registry/default/ui/oui-combo-box";
import { FieldError, FieldLabel } from "@/registry/default/ui/oui-field";
import { Input } from "@/registry/default/ui/oui-input";
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
      <FieldLabel>Combo Box with Avatar</FieldLabel>
      <ButtonGroup>
        <Input placeholder="Select user..." />
        <Button variant="outline">
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </ButtonGroup>
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
