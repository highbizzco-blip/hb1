import { motion } from "framer-motion";

const brands = [
  "Mercure", "Yellow Spoon", "GAA Consulting", "Diling First", "TechScale",
  "GrowthLab", "Cloudify", "Nexus", "Elevate", "Primewave",
  "Zenith", "Optima", "Vortex", "Pinnacle", "Catalyst",
];

export default function BrandsSlider() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
        >
          Brands We've Worked With
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap trust-scroll">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-5 px-8 py-3 rounded-xl border border-border bg-card shrink-0"
            >
              <span className="text-sm font-display font-semibold text-muted-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
