import { TrendingUp, Users, DollarSign, Eye, MousePointer, Target, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";

const stats = [
  { label: "Total Leads", value: "1,284", change: "+18%", up: true, icon: Users },
  { label: "Website Traffic", value: "48.2K", change: "+24%", up: true, icon: Eye },
  { label: "Ad Spend", value: "$12,450", change: "-3%", up: false, icon: DollarSign },
  { label: "ROAS", value: "4.8x", change: "+32%", up: true, icon: Target },
  { label: "Click Rate", value: "3.2%", change: "+12%", up: true, icon: MousePointer },
  { label: "Conversions", value: "342", change: "+28%", up: true, icon: TrendingUp },
];

const trafficData = [
  { name: "Mon", organic: 4200, paid: 2800, social: 1200 },
  { name: "Tue", organic: 3800, paid: 3200, social: 1400 },
  { name: "Wed", organic: 5100, paid: 2900, social: 1800 },
  { name: "Thu", organic: 4600, paid: 3500, social: 1600 },
  { name: "Fri", organic: 5400, paid: 3100, social: 2000 },
  { name: "Sat", organic: 3200, paid: 1800, social: 2400 },
  { name: "Sun", organic: 2800, paid: 1200, social: 2600 },
];

const roasData = [
  { name: "Jan", roas: 2.8 }, { name: "Feb", roas: 3.1 }, { name: "Mar", roas: 3.4 },
  { name: "Apr", roas: 3.2 }, { name: "May", roas: 3.8 }, { name: "Jun", roas: 4.1 },
  { name: "Jul", roas: 4.3 }, { name: "Aug", roas: 4.0 }, { name: "Sep", roas: 4.5 },
  { name: "Oct", roas: 4.8 },
];

const updates = [
  { time: "2 hours ago", title: "Google Ads campaign 'Q4 Lead Gen' optimized", detail: "Reduced CPC by 12% through bid adjustments and negative keyword additions.", dept: "Performance" },
  { time: "5 hours ago", title: "3 new blog posts published", detail: "SEO-optimized content targeting high-intent keywords in your niche.", dept: "SEO & Content" },
  { time: "Yesterday", title: "Instagram Reels series launched", detail: "5 short-form videos published with 2.4K views in first 12 hours.", dept: "Social Media" },
  { time: "Yesterday", title: "Landing page A/B test results", detail: "Variant B increased conversion rate by 34%. Now set as primary.", dept: "CRO" },
];

const activeServices = [
  { name: "Performance Marketing", status: "Active", progress: 78 },
  { name: "SEO & Content", status: "Active", progress: 65 },
  { name: "Social Media", status: "Active", progress: 82 },
  { name: "Website & CRO", status: "In Review", progress: 45 },
];

const integrations = [
  { name: "Google Ads", status: "Connected", color: "hsl(142 71% 45%)" },
  { name: "Meta Ads", status: "Connected", color: "hsl(142 71% 45%)" },
  { name: "Google Analytics 4", status: "Connected", color: "hsl(142 71% 45%)" },
  { name: "Search Console", status: "Connected", color: "hsl(142 71% 45%)" },
  { name: "HubSpot", status: "Pending", color: "hsl(45 93% 58%)" },
  { name: "Shopify", status: "Not Connected", color: "hsl(var(--muted-foreground))" },
];

export default function ClientOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Welcome back, John 👋</h1>
        <p className="text-muted-foreground mt-1">Here's your marketing performance overview for this week.</p>
      </div>

      {/* AI Growth Summary */}
      <div className="rounded-2xl p-6 border border-primary/20" style={{ background: "hsl(var(--primary) / 0.03)" }}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--primary) / 0.1)" }}>
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground mb-1">Weekly AI Growth Summary</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your campaigns are performing <strong className="text-foreground">32% above benchmark</strong> this week. 
              Google Ads ROAS improved to 4.8x after bid optimizations. Organic traffic is up 24% with 3 new articles ranking on page 1. 
              <strong className="text-foreground"> Recommendation:</strong> Increase Google Ads budget by 15% to capitalize on high-performing keywords. 
              Consider launching a retargeting campaign for the 2,400 visitors who viewed pricing but didn't convert.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl p-4 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${stat.up ? "text-green-600" : "text-red-500"}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
          <h3 className="font-display font-semibold text-foreground mb-4">Traffic by Channel</h3>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
              <Tooltip />
              <Area type="monotone" dataKey="organic" stackId="1" stroke="hsl(221 83% 53%)" fill="hsl(221 83% 53% / 0.3)" />
              <Area type="monotone" dataKey="paid" stackId="1" stroke="hsl(142 71% 45%)" fill="hsl(142 71% 45% / 0.3)" />
              <Area type="monotone" dataKey="social" stackId="1" stroke="hsl(262 83% 58%)" fill="hsl(262 83% 58% / 0.3)" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(221 83% 53%)" }} />Organic</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(142 71% 45%)" }} />Paid</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(262 83% 58%)" }} />Social</span>
          </div>
        </div>

        <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
          <h3 className="font-display font-semibold text-foreground mb-4">ROAS Trend</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={roasData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220 9% 46%)" />
              <Tooltip />
              <Line type="monotone" dataKey="roas" stroke="hsl(221 83% 53%)" strokeWidth={2.5} dot={{ fill: "hsl(221 83% 53%)", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Services & Integrations */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
          <h3 className="font-display font-semibold text-foreground mb-5">Active Services</h3>
          <div className="space-y-4">
            {activeServices.map((s) => (
              <div key={s.name} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-foreground">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ background: "hsl(var(--border))" }}>
                    <div className="h-2 rounded-full transition-all" style={{ width: `${s.progress}%`, background: "hsl(var(--primary))" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
          <h3 className="font-display font-semibold text-foreground mb-5">Integrations</h3>
          <div className="space-y-3">
            {integrations.map((int) => (
              <div key={int.name} className="flex items-center justify-between py-2">
                <span className="text-sm text-foreground">{int.name}</span>
                <span className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ background: int.color }} />
                  {int.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Updates */}
      <div className="rounded-2xl p-6 border border-border" style={{ background: "hsl(var(--surface-raised))" }}>
        <h3 className="font-display font-semibold text-foreground mb-5">Daily Execution Updates</h3>
        <div className="space-y-4">
          {updates.map((u, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-border hover:border-primary/15 transition-colors" style={{ background: "hsl(var(--card))" }}>
              <div className="w-1 rounded-full shrink-0" style={{ background: "hsl(var(--primary))" }} />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{u.dept}</span>
                  <span className="text-xs text-muted-foreground">{u.time}</span>
                </div>
                <p className="text-sm font-medium text-foreground mb-1">{u.title}</p>
                <p className="text-xs text-muted-foreground">{u.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
