import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  stats: { value: string; label: string }[];
}

export default function ServiceHero({ badge, title, highlight, description, icon: Icon, stats }: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 animate-float" style={{ background: "hsl(var(--primary))" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="section-badge mb-6 w-fit">
            <Icon className="w-3.5 h-3.5" />
            {badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-6">
            {title}{" "}
            <span className="text-gradient-blue">{highlight}</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a href="#contact" className="btn-primary group">
              Get Free Strategy Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#approach" className="btn-outline">
              See Our Approach
            </a>
          </div>

          <div className="flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
