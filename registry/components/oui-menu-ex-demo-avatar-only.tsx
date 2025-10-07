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
  CreditCardIcon,
  LogOut,
  SparklesIcon,
} from "lucide-react";
import * as Rac from "react-aria-components";

export default function Component() {
  return (
    <MenuEx
      triggerElement={
        <Button
          variant="outline"
          className="size-8 rounded-full border-none p-0"
        >
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
            <AvatarFallback className="rounded-lg">LR</AvatarFallback>
          </Avatar>
        </Button>
      }
    >
      <Rac.MenuSection>
        <Rac.Header>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="leerob" />
              <AvatarFallback className="rounded-lg">LR</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">leerob</span>
              <span className="truncate text-xs text-muted-foreground">
                leerob@example.com
              </span>
            </div>
          </div>
        </Rac.Header>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <Rac.MenuSection>
        <MenuItem id="upgradeAvatarOnly" textValue="Upgrade to Pro">
          <SparklesIcon className="mr-2 size-4" />
          Upgrade to Pro
        </MenuItem>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <Rac.MenuSection>
        <MenuItem id="accountAvatarOnly" textValue="Account">
          <BadgeCheckIcon className="mr-2 size-4" />
          Account
        </MenuItem>
        <MenuItem id="billingAvatarOnly" textValue="Billing">
          <CreditCardIcon className="mr-2 size-4" />
          Billing
        </MenuItem>
        <MenuItem id="notificationsAvatarOnly" textValue="Notifications">
          <BellIcon className="mr-2 size-4" />
          Notifications
        </MenuItem>
      </Rac.MenuSection>
      <Separator variant="menu" />
      <MenuItem id="signOutAvatarOnly" textValue="Sign Out">
        <LogOut className="mr-2 size-4" />
        Sign Out
      </MenuItem>
    </MenuEx>
  );
}
