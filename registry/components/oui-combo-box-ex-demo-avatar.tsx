import { ComboBoxEx } from "@/registry/components/oui-combo-box-ex";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";

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
    <ComboBoxEx
      aria-label="User"
      placeholder="Select user..."
      defaultSelectedKey={users[0].id}
      items={users}
      className="md:max-w-[200px]"
    >
      {(item) => (
        <ListBoxItem id={item.id} textValue={item.username}>
          <div className="flex items-center gap-2">
            <Avatar className="size-5">
              <AvatarImage
                src={`https://github.com/${item.username}.png`}
                alt={item.username}
              />
              <AvatarFallback>{item.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            {item.username}
          </div>
        </ListBoxItem>
      )}
    </ComboBoxEx>
  );
}
