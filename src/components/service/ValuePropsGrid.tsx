import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuePropsGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: ValueProp[];
}

export default function ValuePropsGrid({ badge = "Why It Matters", title, subtitle, items }: ValuePropsGridProps) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">{badge}</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl p-7 border border-border transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.1)]"
              style={{ background: "hsl(var(--surface-raised))" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "hsl(var(--primary) / 0.08)" }}
              >
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
