import { motion } from "framer-motion";
import { Search, Target, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery & Tailored Strategy",
    desc: "We audit your marketing programs and competitive landscape to determine the most optimal path to your next milestone. We work with your team to understand how we can best support them.",
  },
  {
    num: "02",
    icon: Target,
    title: "OKR Setting & Execution",
    desc: "With a 30-60-90 day target in sight, we hit the ground running. Tangible targets, consistent operations, and rapid iteration to learn faster than your competition.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Long-term Playbook & Roadmaps",
    desc: "We create a long-term playbook for your business. Double down on the right channels with greater predictability on returns and compounding growth.",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Reporting & Communication",
    desc: "Proactive weekly reporting cadence. Access dashboards and reports that accurately demonstrate your program's performance — no vanity metrics, only what matters.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative" style={{ background: "hsl(var(--surface-sunken))" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">The Process</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Immediate Results. And a Playbook<br />for Long-term Success.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our process is optimized for both — quick wins and sustainable, compounding growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl border border-border p-7 h-full">
                <span className="text-4xl font-display font-bold text-primary/10 block mb-4">{step.num}</span>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-display font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
