"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/oui-button";
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuSeparator,
} from "@/registry/default/ui/oui-menu";
import { Popover } from "@/registry/default/ui/oui-popover";
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
    <Rac.MenuTrigger>
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
      <Popover>
        <Menu className="w-56">
          <Rac.MenuSection>
            <MenuHeader>
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Shadcn"
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">shadcn</span>
                  <span className="truncate text-xs text-muted-foreground">
                    shadcn@example.com
                  </span>
                </div>
              </div>
            </MenuHeader>
          </Rac.MenuSection>
          <MenuSeparator />
          <Rac.MenuSection>
            <MenuItem id="upgradeAvatar" textValue="Upgrade to Pro">
              <SparklesIcon className="mr-2 size-4" />
              Upgrade to Pro
            </MenuItem>
          </Rac.MenuSection>
          <MenuSeparator />
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
          <MenuSeparator />
          <MenuItem id="signOutAvatar" textValue="Sign Out">
            <LogOut className="mr-2 size-4" />
            Sign Out
          </MenuItem>
        </Menu>
      </Popover>
    </Rac.MenuTrigger>
  );
}
