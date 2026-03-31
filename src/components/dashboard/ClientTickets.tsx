import { useState } from "react";
import { MessageSquare, Clock, CheckCircle, AlertCircle, Send } from "lucide-react";

const tickets = [
  { id: "TKT-001", subject: "Update Google Ads targeting for Q4", status: "In Progress", priority: "High", date: "2 days ago", replies: 3 },
  { id: "TKT-002", subject: "Request new landing page for Black Friday", status: "Open", priority: "High", date: "1 day ago", replies: 0 },
  { id: "TKT-003", subject: "Social media content calendar review", status: "In Review", priority: "Medium", date: "3 days ago", replies: 5 },
  { id: "TKT-004", subject: "Monthly analytics report clarification", status: "Completed", priority: "Low", date: "1 week ago", replies: 2 },
  { id: "TKT-005", subject: "Brand guidelines update request", status: "Open", priority: "Medium", date: "12 hours ago", replies: 1 },
  { id: "TKT-006", subject: "SEO keyword strategy discussion", status: "In Progress", priority: "Medium", date: "4 days ago", replies: 7 },
];

const statusColors: Record<string, string> = {
  "Open": "hsl(221 83% 53%)",
  "In Review": "hsl(45 93% 58%)",
  "In Progress": "hsl(262 83% 58%)",
  "Completed": "hsl(142 71% 45%)",
};

const priorityColors: Record<string, string> = {
  "High": "hsl(0 84% 60%)",
  "Medium": "hsl(45 93% 58%)",
  "Low": "hsl(142 71% 45%)",
};

export default function ClientTickets() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? tickets : tickets.filter(t => t.status === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Tickets & Communication</h1>
        <p className="text-muted-foreground mt-1">Track requests, feedback, and communication with your team.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["All", "Open", "In Review", "In Progress", "Completed"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === s
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
            style={filter !== s ? { background: "hsl(var(--surface-raised))" } : {}}
          >
            {s}
          </button>
        ))}
      </div>

      {/* New Ticket */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-4">New Ticket</h3>
        <div className="flex gap-3">
          <input
            placeholder="Describe your request or question..."
            className="flex-1 px-4 py-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="btn-primary px-5">
            <Send className="w-4 h-4" /> Submit
          </button>
        </div>
      </div>

      {/* Ticket List */}
      <div className="space-y-3">
        {filtered.map((ticket) => (
          <div
            key={ticket.id}
            className="rounded-2xl p-5 border border-border hover:border-primary/15 transition-all cursor-pointer"
            style={{ background: "hsl(var(--surface-raised))" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-muted-foreground">{ticket.id}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                    style={{ background: statusColors[ticket.status] }}
                  >
                    {ticket.status}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                    style={{ background: `${priorityColors[ticket.priority]}20`, color: priorityColors[ticket.priority] }}
                  >
                    {ticket.priority}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{ticket.subject}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground">{ticket.date}</p>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 justify-end">
                  <MessageSquare className="w-3 h-3" /> {ticket.replies} replies
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
