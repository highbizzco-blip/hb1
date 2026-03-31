import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@highbizz.co", href: "mailto:hello@highbizz.co" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Visit Us", value: "San Francisco, CA", href: "#" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
            <div className="section-badge mx-auto mb-6 w-fit"><Mail className="w-3.5 h-3.5" /> Contact Us</div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-[1.1] tracking-tight mb-6">
              Let's Build Your <span className="text-gradient-blue">Growth Plan</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your business and goals. We'll get back to you within 24 hours with a custom growth strategy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-3">
              {submitted ? (
                <div className="card-feature text-center py-16">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours with a custom growth plan.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name *</label>
                      <input required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name *</label>
                      <input required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Work Email *</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company Website</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="https://yourcompany.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Monthly Marketing Budget</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Select budget range</option>
                      <option>₹50K – ₹2L/mo</option>
                      <option>₹2L – ₹5L/mo</option>
                      <option>₹5L – ₹15L/mo</option>
                      <option>₹15L+/mo</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Services Interested In</label>
                    <div className="flex flex-wrap gap-2">
                      {["Social Media", "Performance Marketing", "SEO & Content", "Website & CRO", "Branding"].map((s) => (
                        <label key={s} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm cursor-pointer hover:border-primary/30 transition-colors has-[:checked]:bg-primary/5 has-[:checked]:border-primary/30">
                          <input type="checkbox" className="sr-only" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Tell us about your goals *</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="What are your biggest marketing challenges and growth goals?" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-base">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
                    <Shield className="w-3 h-3" /> Your information is protected under NDA. We never share your data.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
              {contactInfo.map((c) => (
                <a key={c.label} href={c.href} className="card-feature flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}

              <div className="card-feature" style={{ background: "hsl(var(--primary) / 0.03)" }}>
                <h3 className="font-display font-semibold text-foreground mb-3">What happens next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>1</span>
                    We review your submission and research your market
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>2</span>
                    A strategist contacts you within 24 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>3</span>
                    We present a custom growth plan — free of charge
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
