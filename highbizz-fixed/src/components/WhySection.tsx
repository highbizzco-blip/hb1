import { motion } from "framer-motion";
import { Shield, Eye, BarChart3, Zap, Layers, Target } from "lucide-react";

const reasons = [
  { icon: Target, title: "Your Goals = Our KPIs", desc: "Our team's performance reviews are directly tied to the growth we generate for you. Your success is literally our success." },
  { icon: Shield, title: "Client-Owned Everything", desc: "You own all ad accounts, data, creatives, and assets. Full access and control — always. No lock-ins, ever." },
  { icon: Eye, title: "Radical Transparency", desc: "Daily execution updates, weekly reports, live dashboards. See exactly what's being done — no black boxes." },
  { icon: BarChart3, title: "Data-Driven Playbooks", desc: "We've scaled 200+ businesses. Every strategy is backed by real data from campaigns that have already worked." },
  { icon: Layers, title: "Dedicated Growth Squad", desc: "Strategists, designers, analysts, and campaign managers — a full marketing team without the overhead of building one." },
  { icon: Zap, title: "Speed to Results", desc: "We hit the ground running with 30-60-90 day targets. You'll see measurable impact within the first 2 weeks." },
];

export default function WhySection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "hsl(222 47% 8%)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-15" style={{ background: "hsl(var(--primary))" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] opacity-10" style={{ background: "hsl(280 67% 55%)" }} />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-4" style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.25)" }}>
              Why HighBizz
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              We're a Team of Strategists, Creatives & Analysts{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(45 90% 55%), hsl(25 95% 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Who Love Driving Growth.
              </span>
            </h2>
            <p className="leading-relaxed max-w-md mb-8" style={{ color: "hsl(0 0% 100% / 0.55)" }}>
              We don't just run campaigns — we embed ourselves into your business. 
              Think of us as your in-house marketing team, minus the hiring headaches and HR drama.
            </p>
            <a href="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border transition-all duration-300" style={{ borderColor: "hsl(0 0% 100% / 0.15)", color: "white" }}>
              Meet The Team
            </a>
          </motion.div>

          <div className="space-y-3">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl transition-colors group cursor-default"
                style={{ background: "transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(0 0% 100% / 0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ background: "hsl(var(--primary) / 0.12)" }}>
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.5)" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
