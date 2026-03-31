import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Clock, Building2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { caseStudies, categories, highlightStats } from "@/data/caseStudies";

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="section-badge mx-auto mb-6 w-fit"><BarChart3 className="w-3.5 h-3.5" /> Case Studies</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-6">
              Our Most Important KPI Is{" "}
              <span className="text-gradient-blue">Your Success Story</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Discover how we've helped ambitious brands scale revenue, slash costs, and dominate their markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Highlight Bar */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            style={{ background: "hsl(var(--primary) / 0.04)", border: "1px solid hsl(var(--primary) / 0.1)" }}
          >
            {highlightStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((cs, i) => (
                <motion.div
                  key={cs.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:border-primary/20 hover:shadow-[0_12px_40px_-12px_hsl(var(--primary)/0.12)]"
                    style={{ background: "hsl(var(--surface-raised))" }}
                  >
                    {/* Card Header with gradient */}
                    <div
                      className="relative h-48 sm:h-56 flex flex-col justify-end p-6 sm:p-8"
                      style={{
                        background: `linear-gradient(135deg, hsl(${cs.color}) 0%, hsl(${cs.color} / 0.7) 100%)`,
                      }}
                    >
                      <div className="absolute top-5 left-6 sm:left-8">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm">
                          {cs.category}
                        </span>
                      </div>
                      <div className="absolute top-5 right-6 sm:right-8">
                        <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-colors">
                          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight max-w-md">
                        {cs.client}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-white/70 text-xs">
                        <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {cs.industry}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cs.duration}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-8">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                        {cs.headline}
                      </p>

                      {/* Results Row */}
                      <div className="grid grid-cols-3 gap-3">
                        {cs.results.map((r) => (
                          <div
                            key={r.label}
                            className="text-center rounded-xl py-3 px-2"
                            style={{ background: "hsl(var(--primary) / 0.04)" }}
                          >
                            <div className="text-lg font-display font-bold text-primary">{r.metric}</div>
                            <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider leading-tight">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ServiceCTA title="Want Results Like These?" subtitle="Get a free growth audit and see what's possible for your business." />
      <Footer />
    </div>
  );
}
