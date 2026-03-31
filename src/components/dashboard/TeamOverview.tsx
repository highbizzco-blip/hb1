import { Users, ClipboardList, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";

const stats = [
  { label: "Active Clients", value: "24", icon: Users, color: "hsl(221 83% 53%)" },
  { label: "Open Tasks", value: "47", icon: ClipboardList, color: "hsl(262 83% 58%)" },
  { label: "Completed Today", value: "18", icon: CheckCircle, color: "hsl(142 71% 45%)" },
  { label: "Overdue", value: "3", icon: AlertCircle, color: "hsl(0 84% 60%)" },
];

const recentUpdates = [
  { team: "Performance", member: "Priya P.", task: "Optimized Google Ads bids for TechVault", status: "Done", time: "1h ago", proof: "Screenshot attached" },
  { team: "SEO", member: "David K.", task: "Published 3 blog posts for GrowthOS", status: "Done", time: "2h ago", proof: "URLs shared" },
  { team: "Social", member: "Maria G.", task: "Scheduled Instagram Reels for ScaleUp", status: "Done", time: "3h ago", proof: "Content calendar updated" },
  { team: "CRO", member: "James W.", task: "A/B test setup for BrightEdge landing page", status: "In Progress", time: "4h ago", proof: "—" },
  { team: "Branding", member: "Sarah C.", task: "Logo revisions V3 for CloudMetrics", status: "In Review", time: "5h ago", proof: "Figma link shared" },
];

const clientsOverview = [
  { name: "TechVault", services: ["Performance", "SEO"], health: "Good", tasks: 8, completed: 6 },
  { name: "GrowthOS", services: ["SEO", "Content"], health: "Good", tasks: 12, completed: 9 },
  { name: "ScaleUp", services: ["Social", "Branding"], health: "At Risk", tasks: 6, completed: 2 },
  { name: "BrightEdge", services: ["CRO", "Performance"], health: "Good", tasks: 10, completed: 7 },
  { name: "CloudMetrics", services: ["Full Stack"], health: "Good", tasks: 15, completed: 11 },
];

const healthColors: Record<string, string> = {
  "Good": "hsl(142 71% 45%)",
  "At Risk": "hsl(45 93% 58%)",
  "Critical": "hsl(0 84% 60%)",
};

export default function TeamOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Team Dashboard</h1>
        <p className="text-muted-foreground mt-1">Manage clients, track execution, and monitor team performance.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl p-5 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
            <s.icon className="w-5 h-5 mb-3" style={{ color: s.color }} />
            <p className="text-2xl font-display font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Clients Overview */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-5">Clients Overview</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 font-medium text-muted-foreground">Client</th>
                <th className="text-left py-3 font-medium text-muted-foreground">Services</th>
                <th className="text-left py-3 font-medium text-muted-foreground">Health</th>
                <th className="text-right py-3 font-medium text-muted-foreground">Progress</th>
              </tr>
            </thead>
            <tbody>
              {clientsOverview.map((c) => (
                <tr key={c.name} className="border-b border-border/50 hover:bg-muted/30 cursor-pointer transition-colors">
                  <td className="py-3 font-medium text-foreground">{c.name}</td>
                  <td className="py-3">
                    <div className="flex gap-1.5">
                      {c.services.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-border text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="flex items-center gap-1.5 text-xs font-medium">
                      <span className="w-2 h-2 rounded-full" style={{ background: healthColors[c.health] }} />
                      {c.health}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <span className="text-xs text-muted-foreground">{c.completed}/{c.tasks} tasks</span>
                    <div className="w-20 h-1.5 rounded-full ml-auto mt-1" style={{ background: "hsl(var(--border))" }}>
                      <div className="h-1.5 rounded-full" style={{ width: `${(c.completed / c.tasks) * 100}%`, background: "hsl(var(--primary))" }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Work Updates */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-5">Today's Work Updates</h3>
        <div className="space-y-3">
          {recentUpdates.map((u, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border" style={{ background: "hsl(var(--card))" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>
                {u.member.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{u.team}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{u.member}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{u.time}</span>
                </div>
                <p className="text-sm text-foreground">{u.task}</p>
                <p className="text-xs text-muted-foreground mt-1">Proof: {u.proof}</p>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                u.status === "Done" ? "bg-green-100 text-green-700" :
                u.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                "bg-yellow-100 text-yellow-700"
              }`}>
                {u.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
