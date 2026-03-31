import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, DollarSign, Activity, Zap } from "lucide-react";

const analyticsCards = [
  { icon: TrendingUp, label: "Traffic Growth", value: "+247%", change: "Avg. across clients", color: "text-primary" },
  { icon: Users, label: "Qualified Leads", value: "1,284", change: "Generated this month", color: "text-primary" },
  { icon: DollarSign, label: "ROAS", value: "4.8x", change: "Avg. across all campaigns", color: "text-primary" },
  { icon: BarChart3, label: "Conversion Rate", value: "6.2%", change: "vs 2.1% industry avg.", color: "text-primary" },
];

const integrations = [
  { name: "Google Ads", status: "Connected" },
  { name: "Meta Ads", status: "Connected" },
  { name: "GA4", status: "Connected" },
  { name: "Search Console", status: "Connected" },
  { name: "HubSpot", status: "Connected" },
  { name: "Shopify", status: "Connected" },
];

export default function AnalyticsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">
            <Activity className="w-3.5 h-3.5" /> Data Analytics
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Every Dollar Tracked. Every Decision Justified.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Customized dashboards and attribution models that give you the full story of your acquisition funnel — no vanity metrics.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {analyticsCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-clean group"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                  <card.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{card.label}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-1">{card.value}</div>
              <span className={`text-xs font-medium ${card.color}`}>{card.change}</span>
            </motion.div>
          ))}
        </div>

        {/* Live chart simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2 card-clean p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Revenue vs Ad Spend</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Last 12 months — real client data pattern</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">Revenue</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                  <span className="text-xs text-muted-foreground">Spend</span>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2 h-48">
              {[35, 45, 40, 55, 48, 65, 58, 72, 68, 80, 75, 90].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="w-full rounded-t-md bg-primary/70 relative"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-primary/30 rounded-t-md" />
                  </motion.div>
                  <span className="text-[10px] text-muted-foreground">
                    {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-clean p-6">
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Connected Platforms</h3>
            </div>
            <div className="space-y-3">
              {integrations.map((int) => (
                <div key={int.name} className="flex items-center justify-between py-2 border-b border-border/60 last:border-0">
                  <span className="text-sm text-foreground">{int.name}</span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "hsl(var(--green-500) / 0.1)", color: "hsl(var(--green-500))" }}>
                    {int.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
