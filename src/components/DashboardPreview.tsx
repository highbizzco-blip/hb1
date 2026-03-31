import { motion } from "framer-motion";
import dashboardImg from "@/assets/dashboard-preview.png";

export default function DashboardPreview() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-4 w-fit">Live Dashboard</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            Get the Full Story of Your Marketing{" "}
            <span className="text-gradient-blue">In One Place</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Justify every dollar and simplify every decision with real-time dashboards and attribution models that track the KPIs that matter to you.
          </p>
        </motion.div>

        {/* Dashboard image with layered depth */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-4 rounded-3xl blur-2xl opacity-10" style={{ background: "hsl(var(--primary))" }} />
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(0 84% 60%)" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(45 93% 58%)" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(142 71% 45%)" }} />
              </div>
              <div className="flex-1 mx-8">
                <div className="max-w-xs mx-auto rounded-md px-3 py-1 text-xs text-muted-foreground" style={{ background: "hsl(var(--surface-sunken))" }}>
                  app.highbizz.co/dashboard
                </div>
              </div>
            </div>
            <img
              src={dashboardImg}
              alt="HighBizz Marketing Analytics Dashboard showing campaign performance, ROAS, lead generation metrics"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
