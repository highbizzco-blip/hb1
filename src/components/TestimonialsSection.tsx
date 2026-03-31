import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CMO, TechVault",
    text: "HighBizz transformed our marketing. Within 3 months, our ROAS went from 1.8x to 5.2x. The transparency and daily updates made all the difference.",
    rating: 5,
    metric: "5.2x ROAS",
  },
  {
    name: "James Rodriguez",
    role: "Founder, ScaleUp",
    text: "Unlike any agency I've worked with. The real-time dashboard means I never have to ask for updates. Our lead cost dropped 62% in the first quarter.",
    rating: 5,
    metric: "-62% CPL",
  },
  {
    name: "Priya Sharma",
    role: "VP Marketing, GrowthOS",
    text: "The AI-powered strategy sessions gave us insights we'd never considered. Revenue from organic search tripled in 6 months.",
    rating: 5,
    metric: "3x Organic Revenue",
  },
  {
    name: "Michael Torres",
    role: "CEO, BrightEdge",
    text: "HighBizz doesn't just execute — they think like partners. Our brand awareness jumped 340% and conversion rates hit all-time highs.",
    rating: 5,
    metric: "340% Brand Lift",
  },
];

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({ title = "Trusted by Growth-Driven Teams", subtitle = "Real results from real businesses. No vanity metrics." }: TestimonialsSectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto mb-4 w-fit">Client Results</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-feature relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <div className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>
                  {t.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
