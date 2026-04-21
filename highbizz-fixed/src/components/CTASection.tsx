import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, BarChart3 } from "lucide-react";

const trust = [
  { icon: Shield, text: "NDA Protected" },
  { icon: Clock, text: "Response within 24hrs" },
  { icon: BarChart3, text: "Free Growth Audit" },
];

export default function CTASection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
          style={{ background: "hsl(222 47% 8%)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-[120px] opacity-20" style={{ background: "hsl(var(--primary))" }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-15" style={{ background: "hsl(280 67% 55%)" }} />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Stop Guessing. Start Growing.
            </h2>
            <p className="mb-8 text-lg max-w-xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
              Join 200+ businesses that trust HighBizz for transparent, data-driven marketing execution. 
              Your first strategy audit is on us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="/contact" className="btn-primary px-8 py-4 text-base group">
                Book Free Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#ai-planner" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border transition-all" style={{ borderColor: "hsl(0 0% 100% / 0.15)", color: "white" }}>
                Build My Growth Plan
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trust.map((t) => (
                <span key={t.text} className="flex items-center gap-2 text-sm" style={{ color: "hsl(0 0% 100% / 0.45)" }}>
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
