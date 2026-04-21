import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    { label: "Performance Marketing", href: "/services/performance-marketing" },
    { label: "SEO & Content", href: "/services/seo-content" },
    { label: "Website & CRO", href: "/services/website-cro" },
    { label: "Branding & Creative", href: "/services/branding-creative" },
  ],
  Platform: [
    { label: "AI Growth Planner", href: "/#ai-planner" },
    { label: "Client Dashboard", href: "#" },
    { label: "Analytics", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "NDA Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">H</span>
              </div>
              <span className="font-display font-semibold text-lg text-foreground">HighBizz</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              AI-driven growth platform for ambitious businesses.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" || link.href.startsWith("#") ? (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                  ) : (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                  )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} HighBizz.co — All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Powered by <span className="text-primary font-medium">HighBizz Growth Engine™</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
