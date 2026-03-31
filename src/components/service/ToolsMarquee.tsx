import { motion } from "framer-motion";

interface ToolsMarqueeProps {
  tools: string[];
  title?: string;
}

export default function ToolsMarquee({ tools, title = "Access to Cutting-Edge Tools & Platforms" }: ToolsMarqueeProps) {
  const doubled = [...tools, ...tools];

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-display font-semibold text-muted-foreground">{title}</h3>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />
        <div className="flex gap-4 animate-ticker">
          {doubled.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="shrink-0 px-6 py-3 rounded-xl text-sm font-medium border border-border whitespace-nowrap"
              style={{ background: "hsl(var(--surface-raised))", color: "hsl(var(--foreground))" }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
