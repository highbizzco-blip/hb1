import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  badge?: string;
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  ctaText?: string;
  ctaHref?: string;
}

export default function ProcessSteps({ badge = "Our Process", title, subtitle, steps, ctaText = "Book Intro Call", ctaHref = "/contact" }: ProcessStepsProps) {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">{badge}</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.3), hsl(var(--border)), hsl(var(--primary) / 0.3))" }} />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 md:gap-10 items-start py-8 group"
              >
                {/* Step number + icon */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-[80px] h-[80px] rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_4px_20px_hsl(var(--primary)/0.15)]"
                    style={{ background: "hsl(var(--primary) / 0.06)", border: "1px solid hsl(var(--primary) / 0.12)" }}
                  >
                    <span className="text-[10px] font-bold text-primary/50 uppercase tracking-widest">Step</span>
                    <span className="text-xl font-display font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <div className="pt-3 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-display font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href={ctaHref} className="btn-primary">
            {ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
