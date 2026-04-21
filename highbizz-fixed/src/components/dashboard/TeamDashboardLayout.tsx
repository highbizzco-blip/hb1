import { Link } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard, Users, ClipboardList, CalendarDays, BarChart3, Settings, LogOut, Bell, FileEdit,
} from "lucide-react";

const navItems = [
  { title: "Overview", url: "/team", icon: LayoutDashboard },
  { title: "Clients", url: "/team/clients", icon: Users },
  { title: "Daily Updates", url: "/team/updates", icon: FileEdit },
  { title: "Task Manager", url: "/team/tasks", icon: ClipboardList },
  { title: "Analytics Input", url: "/team/analytics-input", icon: BarChart3 },
  { title: "Calendar", url: "/team/calendar", icon: CalendarDays },
];

export default function TeamDashboardLayout({ children }: { children: React.ReactNode }) {
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
                <div>
                  <span className="font-display font-semibold text-foreground text-sm block">HighBizz</span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Team Portal</span>
                </div>
              </Link>
            </div>

            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
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
                      <NavLink to="/team/settings" className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
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
              <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>Admin</span>
              <Bell className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">AM</div>
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
