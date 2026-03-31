import { motion } from "framer-motion";
import { type LucideIcon, ArrowRight } from "lucide-react";

export interface DetailedService {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}

interface DetailedServicesProps {
  badge?: string;
  title: string;
  subtitle?: string;
  services: DetailedService[];
}

export default function DetailedServices({ badge = "Our Services", title, subtitle, services }: DetailedServicesProps) {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">{badge}</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border p-8 sm:p-10 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.08)]"
              style={{ background: "hsl(var(--surface-raised))" }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="flex items-start gap-5 md:w-1/2">
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-3xl font-display font-bold text-primary/20">{String(i + 1).padStart(2, '0')}</span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ background: "hsl(var(--primary) / 0.08)" }}
                    >
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 md:border-l md:border-border md:pl-10">
                  <ul className="space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <ArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
