import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  title?: string;
}

export default function StatsBar({ stats, title = "Numbers That Speak for Themselves" }: StatsBarProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 sm:p-14 text-center"
          style={{ background: "hsl(var(--primary) / 0.03)", border: "1px solid hsl(var(--primary) / 0.1)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-10">{title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
