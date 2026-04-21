import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "SEO & Content", href: "/services/seo-content" },
  { name: "Website & CRO", href: "/services/website-cro" },
  { name: "Branding & Creative", href: "/services/branding-creative" },
];

const navLinks = [
  { name: "Services", href: "#services", dropdown: true },
  { name: "Products", href: "/products" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const tickerItems = [
  "₹7 Cr+ Revenue Generated in Last 7 Days",
  "4.8x Average ROAS Across All Campaigns",
  "2,400+ Businesses Scaled Successfully",
  "₹50 Cr+ Total Revenue Generated in 30 Days",
  "98% Client Satisfaction Rate",
  "320+ Leads Generated This Week",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Running ticker bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground overflow-hidden h-8 flex items-center">
        <div className="ticker-track flex whitespace-nowrap" style={{ animation: "ticker 25s linear infinite" }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(222,47%,6%)]/85 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-sm">H</span>
          </div>
          <span className="font-display font-semibold text-lg text-foreground">
            HighBizz
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-colors">
                  {link.name} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-60 bg-card rounded-xl border border-border shadow-lg p-2"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.name}
                          to={s.href}
                          className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </Link>
          <a href="#ai-planner" className="btn-primary text-sm px-5 py-2.5">
            Get Started
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <span className="px-3 py-2.5 text-sm text-muted-foreground font-medium block">
                      {link.name}
                    </span>
                    <div className="pl-4 flex flex-col gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.name}
                          to={s.href}
                          className="px-3 py-2 text-sm text-muted-foreground rounded-lg hover:bg-muted"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-3 py-2.5 text-sm text-muted-foreground rounded-lg hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="h-px bg-border my-3" />
              <Link to="/login" className="px-3 py-2.5 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Log in</Link>
              <a href="#ai-planner" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    </>
  );
}
