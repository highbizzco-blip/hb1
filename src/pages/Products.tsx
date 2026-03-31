import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import { motion } from "framer-motion";
import { Hotel, Users, Bell, ArrowRight, CheckCircle2, Globe, Zap, BarChart3, MessageSquare, Target, Layers } from "lucide-react";

const products = [
  {
    name: "Stayos",
    tagline: "Hotel & Property Management Simplified",
    description: "A complete hospitality management platform that streamlines bookings, guest management, revenue optimization, and operations for hotels, resorts, and rental properties.",
    icon: Hotel,
    color: "142 71% 45%",
    features: [
      "Smart booking engine with dynamic pricing",
      "Guest CRM with personalized communication",
      "Revenue management & analytics dashboard",
      "Multi-property management from one panel",
      "Channel manager for OTA integrations",
      "Automated check-in/check-out workflows",
    ],
    stats: [
      { value: "500+", label: "Hotels Onboarded" },
      { value: "2M+", label: "Bookings Processed" },
      { value: "35%", label: "Revenue Increase" },
    ],
    cta: "Explore Stayos",
    href: "#",
  },
  {
    name: "Leadz360",
    tagline: "360° Lead Generation & CRM Platform",
    description: "An all-in-one lead generation, nurturing, and conversion platform that helps businesses capture, track, and close more deals with AI-powered insights and automation.",
    icon: Target,
    color: "221 83% 53%",
    features: [
      "AI-powered lead scoring & qualification",
      "Multi-channel lead capture (ads, forms, chatbots)",
      "Automated follow-up sequences",
      "Pipeline management with visual kanban",
      "Real-time analytics & conversion tracking",
      "Integrations with 50+ marketing tools",
    ],
    stats: [
      { value: "10K+", label: "Leads Generated Monthly" },
      { value: "4.2x", label: "Conversion Improvement" },
      { value: "60%", label: "Time Saved on Follow-ups" },
    ],
    cta: "Explore Leadz360",
    href: "#",
  },
  {
    name: "Notifyzz",
    tagline: "Smart Notification & Engagement Engine",
    description: "A powerful notification platform that helps businesses engage users across push, email, SMS, and in-app channels with personalized, automated messaging at scale.",
    icon: Bell,
    color: "25 95% 53%",
    features: [
      "Multi-channel notifications (push, email, SMS, in-app)",
      "Behavioral trigger automation",
      "A/B testing for message optimization",
      "Rich media & interactive notifications",
      "Audience segmentation & targeting",
      "Real-time delivery & engagement analytics",
    ],
    stats: [
      { value: "50M+", label: "Notifications Sent" },
      { value: "3.8x", label: "Engagement Boost" },
      { value: "98%", label: "Delivery Rate" },
    ],
    cta: "Explore Notifyzz",
    href: "#",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-badge mx-auto mb-6 w-fit"><Layers className="w-3.5 h-3.5" /> Our Products</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-6">
              Products Built to <span className="text-gradient-blue">Scale Your Business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powerful SaaS products designed to solve real business problems — from hospitality management to lead generation to user engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      {products.map((product, idx) => (
        <section
          key={product.name}
          className="py-24"
          style={{ background: idx % 2 === 1 ? "hsl(var(--surface-raised))" : undefined }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: `hsl(${product.color} / 0.1)`, color: `hsl(${product.color})` }}>
                  <product.icon className="w-3.5 h-3.5" />
                  {product.name}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">{product.tagline}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                <div className="space-y-3 mb-8">
                  {product.features.map(f => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 mt-0.5 shrink-0" style={{ color: `hsl(${product.color})` }} />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <a href={product.href} className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-2" style={{ background: `hsl(${product.color})` }}>
                  {product.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="rounded-3xl p-8 border border-border bg-card">
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center" style={{ background: `hsl(${product.color} / 0.1)` }}>
                    <product.icon className="w-8 h-8" style={{ color: `hsl(${product.color})` }} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-8">{product.tagline}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {product.stats.map(s => (
                      <div key={s.label} className="text-center p-4 rounded-xl" style={{ background: `hsl(${product.color} / 0.05)` }}>
                        <div className="text-xl font-display font-bold" style={{ color: `hsl(${product.color})` }}>{s.value}</div>
                        <div className="text-[10px] text-muted-foreground mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <ServiceCTA title="Interested in Our Products?" subtitle="Get a demo or learn how our products can transform your business operations." />
      <Footer />
    </div>
  );
}
