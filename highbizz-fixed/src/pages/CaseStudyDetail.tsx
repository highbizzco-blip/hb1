import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Building2, Quote, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const currentIndex = caseStudies.indexOf(cs);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-24 overflow-hidden">
        <div
          className="relative mx-auto max-w-6xl px-6 mt-4"
        >
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: `linear-gradient(135deg, hsl(${cs.color}) 0%, hsl(${cs.color} / 0.6) 100%)`,
            }}
          >
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                </Link>

                <div className="flex items-center gap-3 mb-4 text-white/70 text-xs uppercase tracking-wider font-medium">
                  <span>Customer Case Study</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {cs.industry}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cs.duration}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white leading-tight max-w-3xl mb-10">
                  {cs.headline}
                </h1>

                {/* Results bar */}
                <div className="flex flex-wrap gap-6 sm:gap-10">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <div className="text-3xl sm:text-4xl font-display font-bold text-white">{r.metric}</div>
                      <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">{r.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "white", filter: "blur(80px)" }} />
            <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full opacity-5" style={{ background: "white", filter: "blur(60px)" }} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 rounded-full bg-primary" />
              <h2 className="text-2xl font-display font-bold text-foreground">The Challenge</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg ml-5 pl-3 border-l border-border">
              {cs.challenge}
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-primary" />
              <h2 className="text-2xl font-display font-bold text-foreground">How We Did It</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 ml-5 pl-3">
              {cs.approach.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border"
                  style={{ background: "hsl(var(--surface-raised))" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ background: "hsl(var(--primary) / 0.04)", border: "1px solid hsl(var(--primary) / 0.1)" }}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">The Results</h2>
              <div className="grid grid-cols-3 gap-6">
                {cs.results.map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-2">{r.metric}</div>
                    <div className="text-sm text-muted-foreground">{r.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          {cs.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div
                className="relative rounded-2xl p-8 sm:p-10 border border-border"
                style={{ background: "hsl(var(--surface-raised))" }}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed italic mb-6">
                  "{cs.testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-display font-semibold text-foreground">{cs.testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{cs.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Next Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/case-studies/${nextStudy.slug}`}
              className="group flex items-center justify-between p-6 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300"
              style={{ background: "hsl(var(--surface-raised))" }}
            >
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Next Case Study</span>
                <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                  {nextStudy.client} — {nextStudy.service}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ServiceCTA title="Want Results Like These?" subtitle="Get a free growth audit and see what's possible for your business." />
      <Footer />
    </div>
  );
}
