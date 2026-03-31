import ClientDashboardLayout from "@/components/dashboard/ClientDashboardLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const channelData = [
  { name: "Google Ads", leads: 420, spend: 4200, roas: 5.2 },
  { name: "Meta Ads", leads: 310, spend: 3800, roas: 4.1 },
  { name: "Organic", leads: 280, spend: 0, roas: 0 },
  { name: "Social", leads: 180, spend: 1200, roas: 3.2 },
  { name: "Email", leads: 94, spend: 250, roas: 8.4 },
];

const engagementData = [
  { name: "Website Visits", value: 48200 },
  { name: "Form Fills", value: 1284 },
  { name: "Calls", value: 342 },
  { name: "Chat Leads", value: 186 },
];

const COLORS = ["hsl(221 83% 53%)", "hsl(142 71% 45%)", "hsl(262 83% 58%)", "hsl(45 93% 58%)"];

export default function ClientDashboardAnalytics() {
  return (
    <ClientDashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Detailed performance metrics across all channels.</p>
        </div>

        {/* Channel Performance Table */}
        <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
          <h3 className="font-display font-semibold text-foreground mb-5">Channel Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-medium text-muted-foreground">Channel</th>
                  <th className="text-right py-3 font-medium text-muted-foreground">Leads</th>
                  <th className="text-right py-3 font-medium text-muted-foreground">Spend</th>
                  <th className="text-right py-3 font-medium text-muted-foreground">ROAS</th>
                </tr>
              </thead>
              <tbody>
                {channelData.map((ch) => (
                  <tr key={ch.name} className="border-b border-border/50">
                    <td className="py-3 font-medium text-foreground">{ch.name}</td>
                    <td className="py-3 text-right text-foreground">{ch.leads}</td>
                    <td className="py-3 text-right text-foreground">{ch.spend > 0 ? `$${ch.spend.toLocaleString()}` : "—"}</td>
                    <td className="py-3 text-right">
                      {ch.roas > 0 ? (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>{ch.roas}x</span>
                      ) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
            <h3 className="font-display font-semibold text-foreground mb-4">Leads by Channel</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={channelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="hsl(220 9% 46%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
                <Tooltip />
                <Bar dataKey="leads" fill="hsl(221 83% 53%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
            <h3 className="font-display font-semibold text-foreground mb-4">Engagement Breakdown</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={engagementData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4} dataKey="value">
                  {engagementData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {engagementData.map((e, i) => (
                <span key={e.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS[i] }} />
                  {e.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ClientDashboardLayout>
  );
}
