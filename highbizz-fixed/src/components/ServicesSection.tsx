import { motion } from "framer-motion";
import { Share2, Target, Search, Globe, Palette, ArrowRight, TrendingUp, Rocket, Building2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const startupServices = [
  {
    icon: Target,
    title: "Performance Marketing",
    points: ["Lean budget optimization", "Channel discovery & validation", "Rapid pipeline generation"],
    proof: "₹7Cr+ pipeline in 7 days",
    href: "/services/performance-marketing",
  },
  {
    icon: Search,
    title: "SEO & Content",
    points: ["High-intent keyword strategy", "Rapid content publishing", "First-page rankings fast"],
    proof: "200% organic growth in 90 days",
    href: "/services/seo-content",
  },
  {
    icon: Globe,
    title: "Website & CRO",
    points: ["Landing pages in days", "Validated conversion funnels", "Zero dev dependency"],
    proof: "42% avg. conversion lift",
    href: "/services/website-cro",
  },
];

const growthServices = [
  {
    icon: Target,
    title: "Performance Marketing",
    points: ["₹2Cr+ monthly spend managed", "Multi-channel scaling", "Predictable unit economics"],
    proof: "4.8x average ROAS",
    href: "/services/performance-marketing",
  },
  {
    icon: Search,
    title: "SEO & Content",
    points: ["Category-defining content moats", "Enterprise SEO ops", "Topical authority at scale"],
    proof: "12,000+ page-1 keywords",
    href: "/services/seo-content",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    points: ["Multi-platform content engines", "Influencer programs", "Community-led growth"],
    proof: "3x engagement rate avg.",
    href: "/services/social-media-marketing",
  },
  {
    icon: Globe,
    title: "Website & CRO",
    points: ["Systematic A/B testing", "Full-funnel optimization", "Revenue-driven redesigns"],
    proof: "₹4.2Cr revenue unlocked",
    href: "/services/website-cro",
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    points: ["Brand system design", "High-volume production", "Cross-channel consistency"],
    proof: "500+ creatives / month",
    href: "/services/branding-creative",
  },
];

function ServiceItem({ service, index }: { service: typeof startupServices[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link to={service.href} className="group block py-6">
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{ background: "hsl(var(--primary) / 0.08)" }}
          >
            <service.icon className="w-[18px] h-[18px] text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-[15px] font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
            <ul className="space-y-1.5 mb-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary/50 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
              <TrendingUp className="w-3 h-3" />
              {service.proof}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">Services</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Growth Playbooks Built for Your Stage
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Whether you're finding product-market fit or scaling to ₹100Cr — we have a proven playbook for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Startup Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-border overflow-hidden"
            style={{ background: "hsl(var(--card))" }}
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-border" style={{ background: "hsl(var(--surface-sunken))" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">For Startups</h3>
                  <p className="text-xs text-muted-foreground">Seed → Series A</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Launch fast, validate channels, and build a repeatable growth engine with lean budgets.
              </p>
            </div>
            {/* Services */}
            <div className="px-8 divide-y divide-border">
              {startupServices.map((service, i) => (
                <ServiceItem key={service.title} service={service} index={i} />
              ))}
            </div>
            {/* Footer */}
            <div className="px-8 py-5 border-t border-border" style={{ background: "hsl(var(--surface-sunken))" }}>
              <Link to="/contact" className="btn-primary w-full text-center justify-center text-sm">
                Get Your Startup Playbook <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Growth Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--foreground))",
            }}
          >
            {/* Popular badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-primary text-primary-foreground">
                Most Popular
              </span>
            </div>
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b" style={{ borderColor: "hsl(0 0% 100% / 0.1)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/20">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-primary-foreground">For Scale-ups</h3>
                  <p className="text-xs" style={{ color: "hsl(0 0% 100% / 0.5)" }}>Series A → IPO</p>
                </div>
              </div>
              <p className="text-sm" style={{ color: "hsl(0 0% 100% / 0.6)" }}>
                Scale what works, dominate your category, and build predictable revenue engines across channels.
              </p>
            </div>
            {/* Services */}
            <div className="px-8" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              {growthServices.map((service, i) => (
                <div key={service.title} className={i < growthServices.length - 1 ? "border-b" : ""} style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}>
                  <Link to={service.href} className="group block py-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 bg-primary/15">
                        <service.icon className="w-[18px] h-[18px] text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-[15px] font-display font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <ArrowRight className="w-4 h-4 opacity-20 group-hover:text-primary group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {service.points.map((point) => (
                            <li key={point} className="flex items-center gap-2 text-sm" style={{ color: "hsl(0 0% 100% / 0.55)" }}>
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                          <TrendingUp className="w-3 h-3" />
                          {service.proof}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className="px-8 py-5 border-t" style={{ borderColor: "hsl(0 0% 100% / 0.1)" }}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30">
                Scale Your Growth Engine <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
