import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Leaf, Shield, Clock, Users, Star, ArrowRight, Droplets, Wind, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Verified Customer",
    content: "Finally found relief from chronic discomfort. Pilorap has made a real difference in my daily life.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Verified Customer",
    content: "Natural ingredients and visible results. I appreciate that it's herbal and doesn't have harsh side effects.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Verified Customer",
    content: "Consistent quality and actual benefits. Recommended it to my family and they love it too.",
    rating: 5,
  },
];

const benefits = [
  {
    icon: Droplets,
    title: "Reduces Pain & Discomfort",
    description: "Specially formulated blend helps reduce pain and provides soothing relief.",
  },
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description: "Made with pure herbal extracts and traditional Ayurvedic formulations.",
  },
  {
    icon: Wind,
    title: "Supports Recovery Process",
    description: "Helps accelerate your body's natural healing and recovery mechanisms.",
  },
  {
    icon: Shield,
    title: "Gentle & Safe",
    description: "No harsh chemicals or artificial additives. Suitable for regular use.",
  },
  {
    icon: Zap,
    title: "Quick Acting Formula",
    description: "Effective herbal blend starts working to support your recovery journey.",
    badge: "Starts Recovery in 3 Days*",
  },
  {
    icon: Clock,
    title: "Lasting Relief",
    description: "Sustained comfort and support throughout the day.",
  },
];

const faqs = [
  {
    question: "What is Pilorap and how does it work?",
    answer: "Pilorap is a natural herbal formulation designed to reduce pain and support recovery. It contains traditional Ayurvedic ingredients that work synergistically to provide comfort and promote your body's natural healing process.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Individual results may vary, but many customers report noticing improvements in their comfort levels within the first few days of use. Consistent use over 2-3 weeks provides optimal results.",
  },
  {
    question: "Are there any side effects?",
    answer: "Pilorap is made from natural herbal ingredients and is generally well-tolerated. However, if you have specific allergies or are on medications, please consult with your healthcare provider.",
  },
  {
    question: "How should I use Pilorap?",
    answer: "Follow the usage instructions on the product packaging or as recommended by your healthcare provider. Consistent daily use provides the best results.",
  },
  {
    question: "Is it suitable for long-term use?",
    answer: "Yes, Pilorap's natural formulation makes it suitable for long-term use. Many customers use it as part of their daily wellness routine.",
  },
  {
    question: "Where can I buy Pilorap?",
    answer: "Pilorap is available at leading e-commerce platforms and select retailers. You can also order directly from our official website.",
  },
];

export default function PilorapLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ background: "#10b981" }} />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ background: "#059669" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="section-badge mb-6 w-fit bg-emerald-50 border border-emerald-200">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Natural Pain Relief</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Reduce Pain &{" "}
              <span className="text-emerald-600">Support Recovery</span>
              <br className="hidden sm:block" />
              Naturally
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Pilorap's natural herbal formula helps reduce discomfort and supports your body's recovery process. Experience relief with pure Ayurvedic ingredients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <button className="btn-primary group bg-emerald-600 hover:bg-emerald-700 text-white">
                Order Now & Get Relief
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline border-emerald-200 hover:bg-emerald-50">
                Learn More About Pilorap
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">100% Natural</div>
                  <div className="text-muted-foreground">No artificial additives</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Trusted by Thousands</div>
                  <div className="text-muted-foreground">5000+ satisfied customers</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Money-Back Guarantee</div>
                  <div className="text-muted-foreground">60-day satisfaction guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/50 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose <span className="text-emerald-600">Pilorap?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formulated with traditional Ayurvedic ingredients to provide natural relief and support recovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-emerald-100 rounded-lg p-6 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  {benefit.badge && <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{benefit.badge}</span>}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Your <span className="text-emerald-600">Recovery Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Simple steps to relief and recovery with Pilorap</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Start Using", description: "Begin with recommended daily dosage" },
              { step: "2", title: "Feel Relief", description: "Experience reduced discomfort within days" },
              { step: "3", title: "Support Recovery", description: "Natural healing process accelerates" },
              { step: "4", title: "Sustain Wellness", description: "Maintain comfort with continued use" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-white border border-emerald-100 rounded-lg p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full font-bold mb-4 mx-auto">{item.step}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-emerald-200" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-transparent to-emerald-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Loved by <span className="text-emerald-600">Thousands</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real stories from customers who found relief with Pilorap</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-emerald-100 rounded-lg p-6 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-emerald-100 pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Common <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about Pilorap</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-emerald-100 rounded-lg p-6 hover:border-emerald-300 transition-all group"
              >
                <details className="cursor-pointer">
                  <summary className="font-semibold flex items-center justify-between text-lg">
                    {faq.question}
                    <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">›</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>*Results may vary. Regular use recommended for optimal benefits.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Reduce Pain & Support Recovery?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers experiencing the benefits of Pilorap's natural herbal formula.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors group inline-flex items-center gap-2 justify-center">
                Order Pilorap Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get 20% Off First Order
              </button>
            </div>

            <p className="text-sm opacity-75 mt-6">✓ 60-day money-back guarantee • ✓ Free shipping on orders above ₹500 • ✓ Discreet packaging</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
