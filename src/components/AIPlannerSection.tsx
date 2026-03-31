import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Lock, ArrowRight, Loader, AlertCircle, CheckCircle2 } from "lucide-react";

const industries = ["E-commerce", "SaaS", "Healthcare", "Real Estate", "Education", "Finance", "D2C Brands", "Other"];
const budgets = ["₹50K – ₹2L/mo", "₹2L – ₹5L/mo", "₹5L – ₹15L/mo", "₹15L+/mo"];
const goals = ["Lead Generation", "Sales & Revenue", "Brand Awareness", "App Downloads", "Website Traffic"];

interface GrowthPlan {
  summary: string;
  channelRecommendations: { channel: string; budgetAllocation: string; rationale: string }[];
  roadmap: {
    phase1: { duration: string; focus: string; deliverables: string[] };
    phase2: { duration: string; focus: string; deliverables: string[] };
    phase3: { duration: string; focus: string; deliverables: string[] };
  };
  expectedKPIs: { [key: string]: { metric: string; target: string } };
  tools: string[];
  riskMitigation: string[];
}

export default function AIPlannerSection() {
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [plan, setPlan] = useState<GrowthPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleGoal = (g: string) => {
    setPlan(null);
    setError(null);
    setSelectedGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));
  };

  const canGenerate = industry && budget && selectedGoals.length > 0;

  const generatePlan = async () => {
    setLoading(true);
    setError(null);
    setPlan(null);

    try {
      const response = await fetch("http://localhost:3001/api/generate-growth-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry, budget, goals: selectedGoals }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate plan");
      }

      const data = await response.json();
      setPlan(data.plan);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate plan. Make sure the API server is running.");
    } finally {
      setLoading(false);
    }
  };

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
            onClick={generatePlan}
            disabled={!canGenerate || loading}
            className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              canGenerate && !loading
                ? "btn-primary"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Generating Your Plan...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate My Growth Plan
              </>
            )}
          </button>

          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex gap-3"
            >
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">Error</p>
                <p className="text-xs text-muted-foreground mt-1">{error}</p>
              </div>
            </motion.div>
          )}

          {plan && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6"
            >
              {/* Summary */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold text-foreground">Your Growth Strategy</h3>
                </div>
                <p className="text-muted-foreground">{plan.summary}</p>
              </div>

              {/* Channel Recommendations */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Recommended Channels & Budget Split</h3>
                <div className="space-y-3">
                  {plan.channelRecommendations.map((rec) => (
                    <div key={rec.channel} className="p-4 rounded-xl bg-card border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{rec.channel}</h4>
                        <span className="text-sm font-bold text-primary">{rec.budgetAllocation}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 30-60-90 Roadmap */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">30-60-90 Day Execution Roadmap</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "Phase 1", data: plan.roadmap.phase1 },
                    { name: "Phase 2", data: plan.roadmap.phase2 },
                    { name: "Phase 3", data: plan.roadmap.phase3 },
                  ].map((phase) => (
                    <div key={phase.name} className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-xs font-semibold text-primary mb-2">{phase.data.duration}</p>
                      <h4 className="font-semibold text-foreground mb-3">{phase.data.focus}</h4>
                      <ul className="space-y-2">
                        {phase.data.deliverables.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected KPIs */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Expected KPIs & Revenue Forecast</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(plan.expectedKPIs).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-xs font-semibold text-primary mb-2">{key.replace("month", "Month ")}</p>
                      <p className="text-sm text-muted-foreground mb-2">{value.metric}</p>
                      <p className="text-2xl font-bold text-foreground">{value.target}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Risk Mitigation */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Recommended Tools</h4>
                  <ul className="space-y-2">
                    {plan.tools.map((tool) => (
                      <li key={tool} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">→</span> {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Risk Mitigation</h4>
                  <ul className="space-y-2">
                    {plan.riskMitigation.map((risk) => (
                      <li key={risk} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">✓</span> {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Next Step:</strong> Book a free strategy call with our team to refine this plan and discuss implementation details.
                </p>
                <a href="/contact" className="btn-primary text-sm px-5 py-2.5 mt-3 inline-flex items-center gap-2">
                  Schedule Free Call <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
