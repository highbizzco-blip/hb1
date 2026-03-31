import { motion } from "framer-motion";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";

const insights = [
  {
    category: "Performance Marketing",
    title: "How We Cut CPL by 62% for a B2B SaaS Company",
    excerpt: "A deep dive into audience segmentation, creative testing, and bid strategy that transformed a struggling paid campaign.",
    readTime: "5 min read",
    metric: "-62% CPL",
  },
  {
    category: "SEO & Content",
    title: "The Content Flywheel: 0 to 50K Organic Visits in 6 Months",
    excerpt: "Our proven content framework that builds compounding traffic through programmatic SEO and strategic link building.",
    readTime: "7 min read",
    metric: "50K Visits",
  },
  {
    category: "Social Media",
    title: "Why Your Social Strategy Isn't Converting (And How to Fix It)",
    excerpt: "The 3 critical mistakes brands make on social media and the data-backed approach to turning followers into customers.",
    readTime: "4 min read",
    metric: "3x Engagement",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4"
        >
          <div>
            <div className="section-badge mb-4 w-fit">Insights</div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">Latest From Our Team</h2>
            <p className="text-muted-foreground">Data-driven insights and proven strategies from our growth experts.</p>
          </div>
          <a href="#" className="btn-outline shrink-0">
            View All Insights <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-feature flex flex-col cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{post.category}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}>
                  {post.metric}
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
