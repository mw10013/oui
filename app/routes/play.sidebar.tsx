import {
  SidebarExTree,
  SidebarExTrigger,
} from "@/registry/default/components/oui-sidebar-ex";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/registry/default/ui/sidebar";

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
    </Sidebar>
  );
}

export default function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarExTrigger className="m-2" />
        <div className="flex flex-col gap-2 px-4">Sidebar Playground</div>
      </main>
    </SidebarProvider>
  );
}
