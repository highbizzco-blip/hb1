import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart3, RefreshCw } from "lucide-react";

const defaultSteps = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Deep-Dive Audit",
    description: "We analyze your current marketing, competitors, and market opportunity to find quick wins and long-term growth levers.",
  },
  {
    icon: Lightbulb,
    phase: "Phase 2",
    title: "Strategy Design",
    description: "Our AI engine combines data insights with human expertise to craft a custom growth plan tailored to your business goals.",
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Precision Execution",
    description: "Daily campaign management, content creation, and optimization with full transparency through your real-time dashboard.",
  },
  {
    icon: BarChart3,
    phase: "Phase 4",
    title: "Measure & Report",
    description: "Track every dollar spent and every lead generated. Weekly reports, monthly strategy reviews, and live analytics.",
  },
  {
    icon: RefreshCw,
    phase: "Phase 5",
    title: "Scale & Optimize",
    description: "Continuously test, iterate, and scale what works. Our AI identifies new opportunities and reallocates budget automatically.",
  },
];

interface ApproachSectionProps {
  steps?: typeof defaultSteps;
  title?: string;
}

export default function ApproachSection({ steps = defaultSteps, title = "Our Proven Approach" }: ApproachSectionProps) {
  return (
    <section id="approach" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">Our Approach</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A systematic, data-driven process that delivers predictable, scalable growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: "hsl(var(--border))" }} />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 md:gap-10 items-start"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{step.phase}</span>
                  <h3 className="text-xl font-display font-semibold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
