import {
  SidebarExTree,
  SidebarExTrigger,
} from "@/registry/default/components/oui-sidebar-ex";
import * as Oui from "@/registry/default/ui/oui-index";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
} from "@/registry/default/ui/sidebar";
import { ChevronsUpDown, LogOut } from "lucide-react";
import * as Rac from "react-aria-components";

export function AppSidebar() {
  const items = [
    {
      id: "SaaS",
      href: "/",
    },
    {
      id: "Admin",
      href: "/admin",
    },
    {
      id: "Users",
      href: "/admin/users",
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarExTree aria-label="Admin Navigation" items={items} />
      </SidebarContent>
      <SidebarFooter>
        <Rac.MenuTrigger>
          <Oui.SidebarExButton>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">user@example.com</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </Oui.SidebarExButton>
          <Oui.Popover>
            <Oui.Menu className="min-w-56 rounded-lg">
              <Rac.MenuSection>
                <Rac.Header className="truncate px-1 py-1.5 text-center text-sm font-medium">
                  user@example.com
                </Rac.Header>
              </Rac.MenuSection>
              <Oui.MenuSeparator />
              <Oui.MenuItem id="signOut" textValue="Sign Out">
                <LogOut className="mr-2 size-4" />
                Sign Out
              </Oui.MenuItem>
            </Oui.Menu>
          </Oui.Popover>
        </Rac.MenuTrigger>
      </SidebarFooter>
    </Sidebar>
  );
}

export default function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarExTrigger />
        <div className="flex flex-col gap-2 px-4">Sidebar Playground</div>
      </main>
    </SidebarProvider>
  );
}
