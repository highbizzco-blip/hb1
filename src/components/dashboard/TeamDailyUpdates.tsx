import { useState } from "react";
import { Send, Plus } from "lucide-react";

const departments = ["Performance", "SEO", "Social Media", "CRO", "Branding", "Content"];
const clients = ["TechVault", "GrowthOS", "ScaleUp", "BrightEdge", "CloudMetrics", "HealthPulse"];
const taskStatuses = ["Completed", "In Progress", "Blocked", "Scheduled"];

const existingUpdates = [
  { member: "Priya P.", dept: "Performance", client: "TechVault", work: "Optimized Google Ads bids, reduced CPC by 12%", status: "Completed", proof: "screenshot_gads.png", time: "10:30 AM" },
  { member: "David K.", dept: "SEO", client: "GrowthOS", work: "Published 3 blog posts targeting long-tail keywords", status: "Completed", proof: "blog_urls.txt", time: "11:15 AM" },
  { member: "Maria G.", dept: "Social Media", client: "ScaleUp", work: "Scheduled 5 Instagram Reels for next week", status: "Completed", proof: "content_calendar.pdf", time: "12:00 PM" },
];

export default function TeamDailyUpdates() {
  const [dept, setDept] = useState("");
  const [client, setClient] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Daily Work Updates</h1>
        <p className="text-muted-foreground mt-1">Submit and review daily execution updates with proof of work.</p>
      </div>

      {/* Submit Update Form */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-5">Submit Today's Update</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Department *</label>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select department</option>
              {departments.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Client *</label>
            <select
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select client</option>
              {clients.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-foreground mb-2 block">Work Done *</label>
          <textarea
            rows={3}
            placeholder="Describe what you worked on today..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Task Status *</label>
            <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">Select status</option>
              {taskStatuses.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Proof / Attachment</label>
            <div className="w-full px-4 py-3 rounded-xl border border-dashed border-border bg-card text-sm text-muted-foreground text-center cursor-pointer hover:border-primary/30 transition-colors">
              <Plus className="w-4 h-4 inline mr-1" /> Upload file or paste link
            </div>
          </div>
        </div>
        <button className="btn-primary">
          <Send className="w-4 h-4" /> Submit Update
        </button>
      </div>

      {/* Today's Updates */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-5">Today's Updates</h3>
        <div className="space-y-3">
          {existingUpdates.map((u, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border" style={{ background: "hsl(var(--card))" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>
                {u.member.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-medium text-sm text-foreground">{u.member}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">{u.dept}</span>
                  <span className="text-xs text-primary font-medium">{u.client}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{u.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{u.work}</p>
                <p className="text-xs text-muted-foreground mt-1.5">📎 {u.proof}</p>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 shrink-0">{u.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
