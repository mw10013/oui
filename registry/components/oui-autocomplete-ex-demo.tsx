import { AutocompleteEx } from "@/registry/components/oui-autocomplete-ex";
import { SelectExPopover } from "@/registry/components/oui-select-ex-popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
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
    <SelectExPopover label="Autocomplete Users" defaultValue={users[0].id}>
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
    </SelectExPopover>
  );
}
