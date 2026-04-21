import { motion } from "framer-motion";
import { X, Check, Zap } from "lucide-react";

interface ComparisonItem {
  text: string;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  inHouseItems: ComparisonItem[];
  highbizzItems: ComparisonItem[];
}

export default function ComparisonTable({
  title = "Why HighBizz Over In-House?",
  subtitle = "See the real difference between building internally and partnering with a growth-obsessed team.",
  inHouseItems,
  highbizzItems,
}: ComparisonTableProps) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">The Difference</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* In-house column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border overflow-hidden"
          >
            <div className="px-8 py-5 border-b border-border" style={{ background: "hsl(var(--surface-sunken))" }}>
              <h3 className="font-display font-semibold text-foreground text-lg">In-House Team</h3>
            </div>
            <div className="p-8 space-y-5">
              {inHouseItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "hsl(0 84% 60% / 0.08)" }}>
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* HighBizz column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-primary/30 overflow-hidden relative"
          >
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-primary" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                <Zap className="w-3 h-3" /> Recommended
              </span>
            </div>
            <div className="px-8 py-5 border-b border-primary/20" style={{ background: "hsl(var(--primary) / 0.04)" }}>
              <h3 className="font-display font-semibold text-foreground text-lg">With HighBizz</h3>
            </div>
            <div className="p-8 space-y-5">
              {highbizzItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
