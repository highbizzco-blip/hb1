import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface DeliverablesSectionProps {
  deliverables: string[];
  tools: string[];
}

export default function DeliverablesSection({ deliverables, tools }: DeliverablesSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge mb-4 w-fit">What You Get</div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Deliverables</h2>
            <ul className="space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="section-badge mb-4 w-fit">Tools & Platforms</div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 rounded-xl text-sm font-medium border border-border text-foreground" style={{ background: "hsl(var(--surface-raised))" }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
