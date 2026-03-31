import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Lock, ArrowRight } from "lucide-react";

const industries = ["E-commerce", "SaaS", "Healthcare", "Real Estate", "Education", "Finance", "D2C Brands", "Other"];
const budgets = ["₹50K – ₹2L/mo", "₹2L – ₹5L/mo", "₹5L – ₹15L/mo", "₹15L+/mo"];
const goals = ["Lead Generation", "Sales & Revenue", "Brand Awareness", "App Downloads", "Website Traffic"];

export default function AIPlannerSection() {
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const toggleGoal = (g: string) => {
    setShowPreview(false);
    setSelectedGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));
  };

  const canGenerate = industry && budget && selectedGoals.length > 0;

  return (
    <section id="ai-planner" className="py-24 relative" style={{ background: "hsl(var(--surface-sunken))" }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-badge mx-auto mb-4 w-fit">
            <Sparkles className="w-3.5 h-3.5" /> AI Growth Planner
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Get a Tailored Growth Strategy in 60 Seconds
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tell us about your business. Our AI — trained on data from 200+ campaigns — will generate a custom growth roadmap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card rounded-2xl border border-border shadow-sm p-8"
        >
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-3">Select Your Industry</label>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => { setIndustry(ind); setShowPreview(false); }}
                  className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                    industry === ind
                      ? "border-primary bg-primary/5 text-primary font-medium"
                      : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-3">Monthly Marketing Budget</label>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => { setBudget(b); setShowPreview(false); }}
                  className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                    budget === b
                      ? "border-primary bg-primary/5 text-primary font-medium"
                      : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-3">What do you want to achieve?</label>
            <div className="flex flex-wrap gap-2">
              {goals.map((g) => (
                <button
                  key={g}
                  onClick={() => toggleGoal(g)}
                  className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                    selectedGoals.includes(g)
                      ? "border-primary bg-primary/5 text-primary font-medium"
                      : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => canGenerate && setShowPreview(true)}
            disabled={!canGenerate}
            className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              canGenerate
                ? "btn-primary"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Generate My Growth Plan
          </button>

          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-8 relative"
            >
              <div className="blur-sm pointer-events-none select-none space-y-3">
                {["Recommended Channels & Budget Split", "30-60-90 Day Execution Roadmap", "Expected KPIs & Revenue Forecast"].map((title) => (
                  <div key={title} className="p-4 rounded-xl bg-muted">
                    <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
                    <p className="text-xs text-muted-foreground">Based on your industry and budget, we recommend a multi-channel approach focusing on...</p>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm rounded-xl">
                <Lock className="w-5 h-5 text-primary mb-3" />
                <p className="text-sm font-semibold text-foreground mb-1">Your Growth Plan is Ready</p>
                <p className="text-xs text-muted-foreground mb-4">Book a free call to unlock your complete roadmap with our strategist</p>
                <a href="/contact" className="btn-primary text-sm px-5 py-2.5">
                  Unlock Full Plan <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
