import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: "₹50Cr+", label: "Revenue Generated" },
  { value: "200+", label: "Businesses Scaled" },
  { value: "4.8x", label: "Avg. ROAS Delivered" },
  { value: "96%", label: "Client Retention" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative pt-36 pb-24 overflow-hidden" style={{ background: "hsl(222 47% 8%)" }}>
      {/* Gradient orbs */}
      <motion.div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "hsl(var(--primary))", y: heroY }} />
      <motion.div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{ background: "hsl(280 67% 55%)" }} />
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
          style={{ background: "hsl(var(--primary) / 0.12)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.25)" }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          India's Fastest-Growing Marketing Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[4rem] font-display font-bold leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto text-white"
        >
          Finally, a Marketing Agency That Owns{" "}
          <span style={{ background: "linear-gradient(135deg, hsl(45 90% 55%), hsl(25 95% 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Real Growth Numbers
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsl(0 0% 100% / 0.6)" }}
        >
          When a dedicated growth squad and proven playbooks join forces, 
          there's no reason you can't predict and achieve your desired revenue targets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="/contact" className="btn-primary px-8 py-4 text-base group">
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/case-studies" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl border transition-all duration-300" style={{ borderColor: "hsl(0 0% 100% / 0.15)", color: "white" }}>
            See Our Results
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center p-5 rounded-2xl"
              style={{ background: "hsl(0 0% 100% / 0.04)", border: "1px solid hsl(0 0% 100% / 0.08)" }}
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs" style={{ color: "hsl(0 0% 100% / 0.5)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
