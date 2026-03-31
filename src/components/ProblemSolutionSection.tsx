import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

interface ProblemSolutionProps {
  problems: string[];
  solutions: string[];
}

export default function ProblemSolutionSection({ problems, solutions }: ProblemSolutionProps) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">Why It Matters</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            The Problem We Solve
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 border border-destructive/20"
            style={{ background: "hsl(0 84% 60% / 0.03)" }}
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
              <X className="w-5 h-5 text-destructive" /> Without HighBizz
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 border border-primary/20"
            style={{ background: "hsl(var(--primary) / 0.03)" }}
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" /> With HighBizz
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
