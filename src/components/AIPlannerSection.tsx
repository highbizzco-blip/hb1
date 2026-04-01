import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader, CheckCircle2, Download } from "lucide-react";

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
  costEstimate?: string;
  timeline?: string;
}

const DEMO_PLAN: GrowthPlan = {
  summary: "Multi-channel growth strategy focusing on paid acquisition and organic brand building for rapid market penetration.",
  channelRecommendations: [
    { channel: "Google Ads", budgetAllocation: "35%", rationale: "High intent search traffic converts well. Essential for lead generation with quality keywords." },
    { channel: "Meta Ads", budgetAllocation: "40%", rationale: "Excellent for audience targeting and retargeting. Cost-effective for your budget range." },
    { channel: "LinkedIn Ads", budgetAllocation: "15%", rationale: "B2B focused with professional audience. Great for credibility and thought leadership." },
    { channel: "Content & SEO", budgetAllocation: "10%", rationale: "Long-term organic traffic growth and authority building." }
  ],
  roadmap: {
    phase1: {
      duration: "Days 1-30 - Foundation & Quick Wins",
      focus: "Setup, optimization, and early momentum",
      deliverables: ["Audit existing channels and fix tracking", "Create 10-15 high-converting ad creatives", "Setup conversion tracking and analytics", "Launch initial campaigns and monitor daily"]
    },
    phase2: {
      duration: "Days 31-60 - Scaling & Refinement",
      focus: "Scale what works, optimize underperformers",
      deliverables: ["Scale top performing ads by 30-50%", "A/B test 5+ ad variations per channel", "Implement retargeting campaigns", "Optimize landing pages for 15%+ improvement"]
    },
    phase3: {
      duration: "Days 61-90 - Optimization & Automation",
      focus: "Build systems, prepare for scale",
      deliverables: ["Achieve 25-30% improvement in CAC", "Setup automated reporting dashboards", "Create content calendar for next quarter", "Plan budget increase strategy"]
    }
  },
  expectedKPIs: {
    week2: { metric: "Initial impressions and CTR", target: "50K+ impressions, 2-3% CTR" },
    month1: { metric: "Cost Per Lead", target: "₹500-800 per qualified lead" },
    month3: { metric: "Revenue impact", target: "3-4x ROAS" }
  },
  tools: ["Google Ads (paid search)", "Meta Ads Manager (social)", "Hotjar (user behavior)", "Airtable (lead management)"],
  riskMitigation: ["Ad fatigue - rotate creatives every 2 weeks", "iOS tracking - use server-side tracking", "Budget waste - implement daily monitoring"],
  costEstimate: "40% ads, 30% creative, 20% tools, 10% contingency",
  timeline: "2-4 weeks for leads, 4-8 weeks for revenue impact"
};

export default function AIPlannerSection() {
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [plan, setPlan] = useState<GrowthPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const canGenerate = industry && budget && selectedGoals.length > 0;

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setPlan(DEMO_PLAN);
    setLoading(false);
  };

  const toggleGoal = (g: string) => {
    setSelectedGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));
  };

  const downloadPlan = () => {
    if (!plan) return;
    const content = JSON.stringify({ industry, budget, goals: selectedGoals, plan }, null, 2);
    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `growth-plan-${Date.now()}.json`;
    a.click();
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
          {!plan ? (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">Select Your Industry</label>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setIndustry(ind)}
                      className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                        industry === ind
                          ? "border-primary bg-primary/5 text-primary font-medium"
                          : "border-border text-muted-foreground hover:border-primary/30"
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
                      onClick={() => setBudget(b)}
                      className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                        budget === b
                          ? "border-primary bg-primary/5 text-primary font-medium"
                          : "border-border text-muted-foreground hover:border-primary/30"
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
                          : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
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
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold text-foreground">Your Growth Strategy</h3>
                </div>
                <p className="text-muted-foreground">{plan.summary}</p>
              </div>

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

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">30-60-90 Day Roadmap</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[plan.roadmap.phase1, plan.roadmap.phase2, plan.roadmap.phase3].map((phase, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-xs font-semibold text-primary mb-2">{phase.duration}</p>
                      <h4 className="font-semibold text-foreground mb-3">{phase.focus}</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Expected KPIs</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(plan.expectedKPIs).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-xs font-semibold text-primary mb-2">{key}</p>
                      <p className="text-sm text-muted-foreground mb-2">{value.metric}</p>
                      <p className="text-xl font-bold text-foreground">{value.target}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Recommended Tools</h4>
                  <ul className="space-y-2">
                    {plan.tools.map((tool, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">→</span> {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Risk Mitigation</h4>
                  <ul className="space-y-2">
                    {plan.riskMitigation.map((risk, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">✓</span> {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Timeline:</strong> {plan.timeline}
                </p>
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="btn-primary text-sm px-4 py-2 mr-2"
                >
                  ← Generate New Plan
                </button>
                <button
                  type="button"
                  onClick={downloadPlan}
                  className="btn-secondary text-sm px-4 py-2 mr-2"
                >
                  <Download className="w-3.5 h-3.5 inline mr-1" /> Download
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactModal(true)}
                  className="btn-primary text-sm px-4 py-2"
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl border border-border shadow-lg p-8 max-w-md w-full mx-4"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Book Your Strategy Call</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your growth plan with our strategist. Schedule a free 30-minute call.
              </p>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
                <input
                  type="tel"
                  placeholder="+91 9999999999"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert('Thank you! Our team will contact you soon.');
                    setShowContactModal(false);
                  }}
                  className="flex-1 btn-primary text-sm"
                >
                  Schedule Call
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
