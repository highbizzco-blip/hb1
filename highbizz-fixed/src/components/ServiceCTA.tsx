import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, BarChart3 } from "lucide-react";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
}

const trust = [
  { icon: Shield, text: "NDA Protected" },
  { icon: Clock, text: "Response in 24hrs" },
  { icon: BarChart3, text: "Free Growth Audit" },
];

export default function ServiceCTA({ title = "Ready to Scale Your Growth?", subtitle = "Get a free strategy audit and see exactly how we'd grow your business." }: ServiceCTAProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">{title}</h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all shadow-lg">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trust.map((t) => (
                <span key={t.text} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <t.icon className="w-4 h-4" /> {t.text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
