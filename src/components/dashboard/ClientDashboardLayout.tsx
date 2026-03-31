import { Link } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard, BarChart3, Bell, MessageSquare, Settings, Plug, FileText, TrendingUp, LogOut,
} from "lucide-react";

const navItems = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Updates", url: "/dashboard/updates", icon: Bell },
  { title: "Tickets", url: "/dashboard/tickets", icon: MessageSquare },
  { title: "Reports", url: "/dashboard/reports", icon: FileText },
  { title: "Integrations", url: "/dashboard/integrations", icon: Plug },
  { title: "Growth Summary", url: "/dashboard/growth", icon: TrendingUp },
];

export default function ClientDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-border">
          <SidebarContent>
            <div className="p-4 border-b border-border">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground text-sm">H</span>
                </div>
                <span className="font-display font-semibold text-foreground">HighBizz</span>
              </Link>
            </div>

            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink to={item.url} end className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <NavLink to="/dashboard/settings" className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/" className="hover:bg-muted/50 text-muted-foreground">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Back to Site</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <header className="h-14 border-b border-border flex items-center justify-between px-6">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <Bell className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">JD</div>
            </div>
          </header>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
