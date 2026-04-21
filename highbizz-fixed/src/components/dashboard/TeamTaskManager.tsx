import { useState } from "react";
import { Plus, Search, Filter, CheckCircle, Clock, AlertCircle, User } from "lucide-react";

type TaskStatus = "To Do" | "In Progress" | "In Review" | "Done";
type TaskPriority = "High" | "Medium" | "Low";

interface Task {
  id: string;
  title: string;
  client: string;
  assignee: string;
  department: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

const initialTasks: Task[] = [
  { id: "TSK-001", title: "Google Ads Q4 campaign setup", client: "TechVault", assignee: "Priya P.", department: "Performance", status: "In Progress", priority: "High", dueDate: "Nov 15" },
  { id: "TSK-002", title: "Write 5 SEO blog posts", client: "GrowthOS", assignee: "David K.", department: "SEO", status: "In Progress", priority: "Medium", dueDate: "Nov 18" },
  { id: "TSK-003", title: "Design social media templates", client: "ScaleUp", assignee: "Sarah C.", department: "Social", status: "To Do", priority: "High", dueDate: "Nov 12" },
  { id: "TSK-004", title: "A/B test landing page headline", client: "BrightEdge", assignee: "James W.", department: "CRO", status: "In Review", priority: "Medium", dueDate: "Nov 14" },
  { id: "TSK-005", title: "Monthly analytics report", client: "CloudMetrics", assignee: "Maria G.", department: "Analytics", status: "To Do", priority: "Low", dueDate: "Nov 20" },
  { id: "TSK-006", title: "Brand guidelines V2", client: "HealthPulse", assignee: "Sarah C.", department: "Branding", status: "Done", priority: "Medium", dueDate: "Nov 10" },
  { id: "TSK-007", title: "Meta Ads creative refresh", client: "TechVault", assignee: "Priya P.", department: "Performance", status: "To Do", priority: "High", dueDate: "Nov 16" },
  { id: "TSK-008", title: "Technical SEO audit", client: "ScaleUp", assignee: "David K.", department: "SEO", status: "In Progress", priority: "High", dueDate: "Nov 13" },
];

const statusColumns: TaskStatus[] = ["To Do", "In Progress", "In Review", "Done"];

const statusColors: Record<TaskStatus, string> = {
  "To Do": "hsl(220 9% 46%)",
  "In Progress": "hsl(221 83% 53%)",
  "In Review": "hsl(45 93% 58%)",
  "Done": "hsl(142 71% 45%)",
};

const priorityColors: Record<TaskPriority, string> = {
  "High": "hsl(0 84% 60%)",
  "Medium": "hsl(45 93% 58%)",
  "Low": "hsl(142 71% 45%)",
};

export default function TeamTaskManager() {
  const [tasks] = useState(initialTasks);
  const [view, setView] = useState<"board" | "list">("board");

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Task Manager</h1>
          <p className="text-muted-foreground mt-1">Manage and track all team tasks across clients.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView("board")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${view === "board" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}
            style={view !== "board" ? { background: "hsl(var(--surface-raised))" } : {}}
          >
            Board
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${view === "list" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"}`}
            style={view !== "list" ? { background: "hsl(var(--surface-raised))" } : {}}
          >
            List
          </button>
        </div>
      </div>

      {view === "board" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {statusColumns.map((col) => (
            <div key={col} className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: statusColors[col] }} />
                <span className="text-sm font-semibold text-foreground">{col}</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {tasks.filter(t => t.status === col).length}
                </span>
              </div>
              {tasks.filter(t => t.status === col).map((task) => (
                <div key={task.id} className="rounded-xl p-4 border border-border cursor-pointer hover:border-primary/20 transition-all" style={{ background: "hsl(var(--surface-raised))" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-muted-foreground">{task.id}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold" style={{ background: `${priorityColors[task.priority]}15`, color: priorityColors[task.priority] }}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-2">{task.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-primary font-medium uppercase">{task.client}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>
                        {task.assignee.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="text-[10px] text-muted-foreground">{task.dueDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border overflow-hidden" style={{ background: "hsl(var(--surface-raised))" }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Task</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Client</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Assignee</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Priority</th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground">Due</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-border/50 hover:bg-muted/30 cursor-pointer transition-colors">
                  <td className="py-3 px-4">
                    <span className="text-[10px] font-mono text-muted-foreground mr-2">{task.id}</span>
                    <span className="font-medium text-foreground">{task.title}</span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{task.client}</td>
                  <td className="py-3 px-4 text-muted-foreground">{task.assignee}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: statusColors[task.status] }}>{task.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: `${priorityColors[task.priority]}15`, color: priorityColors[task.priority] }}>{task.priority}</span>
                  </td>
                  <td className="py-3 px-4 text-right text-muted-foreground">{task.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
