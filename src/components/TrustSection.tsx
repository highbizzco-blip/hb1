import { motion } from "framer-motion";

const metrics = [
  { value: "₹50Cr+", label: "Revenue Generated", color: "221 83% 53%" },
  { value: "200+", label: "Businesses Scaled", color: "142 71% 45%" },
  { value: "96%", label: "Client Retention", color: "25 95% 53%" },
  { value: "4.8x", label: "Average ROAS", color: "280 67% 55%" },
];

const testimonials = [
  {
    quote: "The HighBizz team feels like an extension of our own business. They're aligned with our goals, and their success is our success. In a marketing agency, you can't ask for much more.",
    name: "Rahul Verma",
    role: "Co-Founder, TechScale",
    highlight: "3x pipeline growth in 90 days",
  },
  {
    quote: "Two things stood out about HighBizz: their deep commitment to understanding our product-market fit, and their ability to forecast spending and results effectively. No guesswork.",
    name: "Priya Sharma",
    role: "VP Marketing, Cloudify",
    highlight: "₹2.4Cr revenue in first quarter",
  },
  {
    quote: "HighBizz is an amazing marketing partner. Their data-driven strategies and meticulous execution have propelled us to page 1 for several high-intent keywords. They've become invaluable.",
    name: "Ankit Jain",
    role: "CEO, GrowthLab",
    highlight: "200% organic traffic increase",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 relative" style={{ background: "hsl(var(--surface-raised))" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by Startups to Enterprises
          </h2>
          <p className="text-muted-foreground">Numbers we're proud of — because they represent real business impact.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: "hsl(var(--card))" }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, hsl(${m.color} / 0.05), transparent)` }} />
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl font-display font-bold mb-2" style={{ background: `linear-gradient(135deg, hsl(${m.color}), hsl(${m.color} / 0.7))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "hsl(var(--card))" }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "hsl(var(--primary) / 0.08)", color: "hsl(var(--primary))" }}>
                {t.highlight}
              </div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4" style={{ color: "hsl(45 93% 47%)" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-5">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
