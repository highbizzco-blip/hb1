export interface CaseStudyData {
  slug: string;
  client: string;
  industry: string;
  service: string;
  category: string;
  headline: string;
  challenge: string;
  approach: string[];
  results: { metric: string; label: string }[];
  testimonial?: {
    text: string;
    name: string;
    role: string;
  };
  duration: string;
  color: string;
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "techvault",
    client: "TechVault",
    industry: "B2B SaaS",
    service: "Performance Marketing",
    category: "PPC",
    headline: "TechVault scaled ROAS from 1.8x to 5.2x with HighBizz's AI-powered performance marketing strategy",
    challenge: "TechVault was struggling with a 1.8x ROAS and rising customer acquisition costs across Google and Meta Ads. Their campaigns lacked structure, audience segmentation was broad, and there was no attribution model in place — making it impossible to identify what was actually driving revenue.",
    approach: [
      "Complete account restructure across Google & Meta",
      "AI-powered audience segmentation & lookalike modeling",
      "Creative testing framework with 40+ ad variations",
      "Full-funnel attribution modeling with UTM architecture",
      "Automated bid strategies with ROAS targets",
      "Weekly performance sprints with real-time optimization",
    ],
    results: [
      { metric: "5.2x", label: "ROAS Achieved" },
      { metric: "-62%", label: "Cost Per Lead" },
      { metric: "+340%", label: "Revenue Growth" },
    ],
    testimonial: {
      text: "HighBizz transformed our marketing. Within 3 months, our ROAS went from 1.8x to 5.2x. The transparency and daily updates made all the difference.",
      name: "Sarah Chen",
      role: "CMO, TechVault",
    },
    duration: "6 months",
    color: "217 91% 60%",
  },
  {
    slug: "growthos",
    client: "GrowthOS",
    industry: "MarTech",
    service: "SEO & Content",
    category: "SEO",
    headline: "GrowthOS went from near-zero organic traffic to 50K monthly visits with HighBizz's content flywheel",
    challenge: "Despite publishing content for 18 months, GrowthOS had near-zero organic traffic. There was no keyword strategy, no technical SEO foundation, and their content lacked topical authority — resulting in zero rankings for any meaningful terms.",
    approach: [
      "Comprehensive technical SEO audit & overhaul",
      "Topic clustering strategy with 15 content pillars",
      "Content flywheel with programmatic SEO pages",
      "Strategic link building targeting DR50+ domains",
      "On-page optimization for 200+ existing pages",
      "Monthly content velocity of 25+ optimized articles",
    ],
    results: [
      { metric: "50K", label: "Monthly Organic Visits" },
      { metric: "1,200+", label: "Keywords Ranked" },
      { metric: "3x", label: "Organic Revenue" },
    ],
    testimonial: {
      text: "The AI-powered strategy sessions gave us insights we'd never considered. Revenue from organic search tripled in 6 months.",
      name: "Priya Sharma",
      role: "VP Marketing, GrowthOS",
    },
    duration: "9 months",
    color: "142 71% 45%",
  },
  {
    slug: "brightedge",
    client: "BrightEdge",
    industry: "FinTech",
    service: "Branding & Website",
    category: "Branding",
    headline: "BrightEdge's complete rebrand drove 340% brand awareness lift and 3.2% conversion rate",
    challenge: "BrightEdge had an outdated brand identity and website with a 0.8% conversion rate. Brand perception didn't match their premium product quality, leading to lost deals and poor first impressions with enterprise prospects.",
    approach: [
      "Brand audit & competitive positioning analysis",
      "New visual identity system with brand guidelines",
      "Conversion-optimized website redesign (50+ pages)",
      "Strategic launch campaign across all channels",
      "A/B testing framework for continuous CRO",
      "Brand consistency toolkit for internal teams",
    ],
    results: [
      { metric: "+340%", label: "Brand Awareness" },
      { metric: "3.2%", label: "Conversion Rate" },
      { metric: "+180%", label: "Qualified Leads" },
    ],
    testimonial: {
      text: "HighBizz doesn't just execute — they think like partners. Our brand awareness jumped 340% and conversion rates hit all-time highs.",
      name: "Michael Torres",
      role: "CEO, BrightEdge",
    },
    duration: "4 months",
    color: "262 83% 58%",
  },
  {
    slug: "scaleup",
    client: "ScaleUp",
    industry: "E-Commerce",
    service: "Social Media Marketing",
    category: "Social",
    headline: "ScaleUp achieved 3.2x engagement rate and 250K new followers with HighBizz's social commerce strategy",
    challenge: "ScaleUp had inconsistent social presence with low engagement. There was no connection between social efforts and actual sales — content was generic, posting was sporadic, and there was zero attribution to revenue.",
    approach: [
      "Platform-native content strategy for IG, TikTok, LinkedIn",
      "Influencer partnership program with 30+ creators",
      "Social commerce integration with Shopify",
      "Full attribution tracking from impression to purchase",
      "Community building & UGC content program",
      "Paid social amplification of top organic content",
    ],
    results: [
      { metric: "3.2x", label: "Engagement Rate" },
      { metric: "250K", label: "New Followers" },
      { metric: "+120%", label: "Social Revenue" },
    ],
    testimonial: {
      text: "Unlike any agency I've worked with. The real-time dashboard means I never have to ask for updates. Our lead cost dropped 62% in the first quarter.",
      name: "James Rodriguez",
      role: "Founder, ScaleUp",
    },
    duration: "8 months",
    color: "330 81% 60%",
  },
  {
    slug: "cloudmetrics",
    client: "CloudMetrics",
    industry: "Analytics",
    service: "Full-Stack Marketing",
    category: "Full-Stack",
    headline: "CloudMetrics generated $2.4M pipeline from zero with HighBizz's integrated go-to-market strategy",
    challenge: "As a pre-revenue startup, CloudMetrics needed to establish market presence, generate leads, and build a recognizable brand from scratch — all while competing against well-funded incumbents in the analytics space.",
    approach: [
      "Integrated go-to-market strategy & positioning",
      "Brand launch with PR and thought leadership",
      "Content marketing engine with gated assets",
      "Multi-channel paid acquisition (Google, LinkedIn, Meta)",
      "Marketing automation with lead scoring",
      "Account-based marketing for enterprise targets",
    ],
    results: [
      { metric: "$2.4M", label: "Pipeline Generated" },
      { metric: "15K", label: "Email Subscribers" },
      { metric: "4.8x", label: "ROAS" },
    ],
    duration: "12 months",
    color: "25 95% 53%",
  },
  {
    slug: "healthpulse",
    client: "HealthPulse",
    industry: "HealthTech",
    service: "Website & CRO",
    category: "CRO",
    headline: "HealthPulse achieved 600% conversion rate lift through systematic CRO and UX redesign",
    challenge: "HealthPulse had a high-traffic website with terrible conversion rates (0.4%). Users were dropping off at every stage of the funnel — from landing page to signup to activation. The UX was confusing and the value proposition was unclear.",
    approach: [
      "Comprehensive UX audit with heatmaps & session recordings",
      "User testing with 50+ real users across segments",
      "Systematic A/B testing program (100+ experiments)",
      "Full website redesign focused on conversion psychology",
      "Micro-conversion optimization at every funnel stage",
      "Performance optimization (Core Web Vitals)",
    ],
    results: [
      { metric: "2.8%", label: "Conversion Rate" },
      { metric: "+600%", label: "Conv. Rate Lift" },
      { metric: "-45%", label: "Bounce Rate" },
    ],
    duration: "5 months",
    color: "174 72% 46%",
  },
];

export const categories = ["All", "PPC", "SEO", "Branding", "Social", "CRO", "Full-Stack"];

export const highlightStats = [
  { value: "5.2x", label: "Highest ROAS achieved for a client" },
  { value: "50K+", label: "Monthly organic visits generated" },
  { value: "$2.4M", label: "Pipeline generated from zero" },
  { value: "600%", label: "Conversion rate lift delivered" },
];
