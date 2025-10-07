import { MenuEx } from "@/registry/components/oui-menu-ex";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/components/ui/avatar";
import { Button } from "@/registry/components/ui/oui-button";
import { MenuItem } from "@/registry/components/ui/oui-menu";
import { Separator } from "@/registry/components/ui/oui-separator";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOut,
  SparklesIcon,
} from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <MenuEx
      className="w-56"
      triggerElement={
        <Button
          variant="outline"
          className="h-12 justify-start px-2 md:max-w-[200px]"
        >
          <Avatar className="mr-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">shadcn</span>
            <span className="truncate text-xs text-muted-foreground">
              shadcn@example.com
            </span>
          </div>
          <ChevronsUpDownIcon className="ml-auto size-4 text-muted-foreground" />
        </Button>
      }
    >
      <Rac.MenuSection>
        <Rac.Header>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Shadcn" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">shadcn</span>
              <span className="truncate text-xs text-muted-foreground">
                shadcn@example.com
              </span>
            </div>
          </div>
        </Rac.Header>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <Rac.MenuSection>
        <MenuItem id="upgradeAvatar" textValue="Upgrade to Pro">
          <SparklesIcon className="mr-2 size-4" />
          Upgrade to Pro
        </MenuItem>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <Rac.MenuSection>
        <MenuItem id="accountAvatar" textValue="Account">
          <BadgeCheckIcon className="mr-2 size-4" />
          Account
        </MenuItem>
        <MenuItem id="billingAvatar" textValue="Billing">
          <CreditCardIcon className="mr-2 size-4" />
          Billing
        </MenuItem>
        <MenuItem id="notificationsAvatar" textValue="Notifications">
          <BellIcon className="mr-2 size-4" />
          Notifications
        </MenuItem>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <MenuItem id="signOutAvatar" textValue="Sign Out">
        <LogOut className="mr-2 size-4" />
        Sign Out
      </MenuItem>
    </MenuEx>
  );
}
