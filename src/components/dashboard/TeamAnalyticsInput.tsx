import { useState } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

const clients = ["TechVault", "GrowthOS", "ScaleUp", "BrightEdge", "CloudMetrics", "HealthPulse"];

const existingEntries = [
  { client: "TechVault", date: "Nov 10", leads: 42, traffic: 5200, spend: 1250, roas: 5.2, engagement: "3.4%", submittedBy: "Priya P." },
  { client: "GrowthOS", date: "Nov 10", leads: 28, traffic: 8400, spend: 0, roas: 0, engagement: "2.8%", submittedBy: "David K." },
  { client: "ScaleUp", date: "Nov 10", leads: 15, traffic: 3200, spend: 800, roas: 3.1, engagement: "4.2%", submittedBy: "Maria G." },
];

export default function TeamAnalyticsInput() {
  const [selectedClient, setSelectedClient] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Analytics Input</h1>
        <p className="text-muted-foreground mt-1">Enter daily performance metrics for client dashboards.</p>
      </div>

      {/* Input Form */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-5">Add Metrics</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Client *</label>
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select client</option>
              {clients.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Date *</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Leads</label>
            <input type="number" placeholder="0" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Traffic</label>
            <input type="number" placeholder="0" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Ad Spend ($)</label>
            <input type="number" placeholder="0.00" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">ROAS</label>
            <input type="number" step="0.1" placeholder="0.0" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Engagement Rate</label>
            <input type="text" placeholder="0.0%" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
        </div>
        <button className="btn-primary">
          <Save className="w-4 h-4" /> Save Metrics
        </button>
      </div>

      {/* Recent Entries */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-5">Recent Entries</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 font-medium text-muted-foreground">Client</th>
                <th className="text-left py-3 font-medium text-muted-foreground">Date</th>
                <th className="text-right py-3 font-medium text-muted-foreground">Leads</th>
                <th className="text-right py-3 font-medium text-muted-foreground">Traffic</th>
                <th className="text-right py-3 font-medium text-muted-foreground">Spend</th>
                <th className="text-right py-3 font-medium text-muted-foreground">ROAS</th>
                <th className="text-right py-3 font-medium text-muted-foreground">Engagement</th>
                <th className="text-right py-3 font-medium text-muted-foreground">By</th>
              </tr>
            </thead>
            <tbody>
              {existingEntries.map((e, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 font-medium text-foreground">{e.client}</td>
                  <td className="py-3 text-muted-foreground">{e.date}</td>
                  <td className="py-3 text-right text-foreground">{e.leads}</td>
                  <td className="py-3 text-right text-foreground">{e.traffic.toLocaleString()}</td>
                  <td className="py-3 text-right text-foreground">{e.spend > 0 ? `$${e.spend}` : "—"}</td>
                  <td className="py-3 text-right">
                    {e.roas > 0 ? (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>{e.roas}x</span>
                    ) : "—"}
                  </td>
                  <td className="py-3 text-right text-foreground">{e.engagement}</td>
                  <td className="py-3 text-right text-muted-foreground">{e.submittedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
