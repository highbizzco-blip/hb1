import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ValuePropsGrid from "@/components/service/ValuePropsGrid";
import ComparisonTable from "@/components/service/ComparisonTable";
import StatsBar from "@/components/service/StatsBar";
import DetailedServices from "@/components/service/DetailedServices";
import ProcessSteps from "@/components/service/ProcessSteps";
import ToolsMarquee from "@/components/service/ToolsMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ServiceCTA from "@/components/ServiceCTA";
import { Target, Search, Layers, BarChart3, Zap, MousePointer, Eye, TrendingUp, Shield, Megaphone, Globe, PenTool } from "lucide-react";

const valueProps = [
  { icon: Search, title: "Smarter Keyword Targeting", description: "We track every interaction, predict trends, analyze search behavior, and adjust bids in real time to focus on what actually converts." },
  { icon: PenTool, title: "Data-Driven Ad Copy", description: "We refine ad copy based on audience behavior and performance data to drive higher engagement and lower CPC across all platforms." },
  { icon: Target, title: "Close Deals, Not Just Clicks", description: "We optimize for pipeline closure using offline conversion signals — from lead creation to closed-won stages." },
  { icon: Eye, title: "Personalized Ad Experiences", description: "We personalize creatives based on behavior and intent to keep ads relevant, compelling, and converting at every touchpoint." },
  { icon: Shield, title: "Anomaly Detection", description: "We flag unexpected spikes, dips, and trends early to prevent wasted ad spend and protect your budget from inefficiency." },
  { icon: TrendingUp, title: "Competitive Intelligence", description: "We analyze competitors' ads and bidding strategies to find gaps you can pursue — so you never play catch-up." },
];

const detailedServices = [
  { icon: Search, title: "Paid Search (Google Ads)", description: "High-converting paid search campaigns that drive qualified leads at scale with precision keyword targeting and bidding strategies.", bullets: ["Search, Display, Shopping, and YouTube campaigns", "Keyword research and negative keyword optimization", "Smart bidding strategy with daily adjustments", "Quality Score optimization for lower CPC"] },
  { icon: Megaphone, title: "Paid Social (LinkedIn & Meta)", description: "Targeted paid social campaigns to connect with your ideal customers on the platforms where they spend time.", bullets: ["LinkedIn Ads for B2B decision-maker targeting", "Meta Ads for awareness and retargeting", "Lookalike and custom audience building", "ABM-aligned campaign architecture"] },
  { icon: PenTool, title: "Ad Creative & Landing Pages", description: "Scroll-stopping ad creatives and persuasive landing pages designed to convert at every stage of the funnel.", bullets: ["A/B tested ad creative variations", "Conversion-optimized landing page design", "Dynamic creative optimization (DCO)", "Brand-consistent creative across all formats"] },
  { icon: BarChart3, title: "Conversion Tracking & Reporting", description: "Airtight conversion tracking so you know exactly which campaigns are driving real business impact.", bullets: ["Full-funnel attribution modeling", "Offline conversion import setup", "Real-time performance dashboards", "Weekly optimization reports with action items"] },
  { icon: Eye, title: "Competitor & Industry Analysis", description: "We monitor competitors' PPC strategies — ad formats, landing pages, messaging, and keywords — so you can outsmart, not outspend.", bullets: ["Competitor ad copy and creative analysis", "Auction insight monitoring", "Industry benchmark calibration", "Gap identification and opportunity mapping"] },
  { icon: Layers, title: "Campaign Strategy & Management", description: "End-to-end PPC funnel management from campaign planning to daily optimization, so you can focus on closing.", bullets: ["Full-funnel campaign architecture", "Daily bid management and budget pacing", "Fast iterative cycles with frequent reviews", "Cross-platform campaign coordination"] },
];

const processSteps = [
  { icon: Target, title: "Audience Segmentation", description: "We map out your ICP and use first-party data to build targeted audience segments that drive real conversions — not just impressions." },
  { icon: Layers, title: "Campaign Architecture", description: "Full-funnel campaign structure with audience segmentation, creative strategy, and budget allocation optimized for your specific growth goals." },
  { icon: PenTool, title: "Creative Development", description: "Data-informed ad creative and landing pages developed through systematic testing frameworks to maximize click-through and conversion rates." },
  { icon: Zap, title: "Launch & Optimize", description: "Precision campaign launch with daily bid management, creative testing, and audience refinement based on real-time performance data." },
  { icon: BarChart3, title: "Scale Winning Campaigns", description: "Identify top performers, increase budgets strategically, and expand to new audiences while maintaining ROAS targets." },
  { icon: TrendingUp, title: "AI-Powered Optimization", description: "Our AI engine continuously analyzes performance patterns and automatically suggests budget reallocation and creative updates for maximum efficiency." },
];

const faqs = [
  { question: "What ad platforms do you manage?", answer: "We specialize in Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, TikTok Ads, and programmatic display. We recommend the right platform mix based on your ICP and goals." },
  { question: "What ROAS can I expect?", answer: "Results vary by industry, but our average client sees 4.8x ROAS. We set realistic targets during our audit and optimize continuously toward them. Some clients achieve 8x+ ROAS after 6 months." },
  { question: "How much ad spend do you recommend?", answer: "We recommend a minimum of $3,000/month to generate meaningful data for optimization. Our sweet spot for scaling is $10K-$100K/month. We've managed budgets up to $500K/month." },
  { question: "Do I own my ad accounts?", answer: "Always. You own 100% of your ad accounts, data, and creative assets. Full transparency, no lock-in, no hidden fees. If we part ways, everything stays with you." },
  { question: "How quickly will I see results?", answer: "Most clients see initial results within 2-4 weeks. Significant optimization and scaling typically happens in months 2-3 as we accumulate performance data and refine targeting." },
  { question: "How is HighBizz different from other PPC agencies?", answer: "We optimize for pipeline and revenue, not just clicks and impressions. We use offline conversion signals, AI-powered bid management, and full-funnel attribution — not vanity metrics." },
  { question: "Do you provide creative services?", answer: "Yes. We have an in-house creative team that designs ad creatives, landing pages, and video ads. Every asset is A/B tested and optimized for conversion." },
];

export default function PerformanceMarketing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        badge="Performance Marketing"
        title="Turn Ad Spend Into"
        highlight="Predictable Revenue"
        description="We blend AI insights with deep expertise to run high-performance Google & LinkedIn campaigns. Get full-funnel visibility, daily optimizations, and scalable growth — without the guesswork."
        icon={Target}
        stats={[
          { value: "4.8x", label: "Avg. ROAS" },
          { value: "$12M+", label: "Ad Spend Managed" },
          { value: "-48%", label: "Avg. CPA Reduction" },
        ]}
      />

      <ValuePropsGrid
        badge="Our Edge"
        title="How Our PPC Strategies Put You on a Hyper-Growth Trajectory"
        subtitle="PPC is like football — and we're the championship team."
        items={valueProps}
      />

      <ProblemSolutionSection
        problems={[
          "Burning through ad budget with no clear ROI or attribution",
          "Agency won't share ad account access or raw performance data",
          "No idea which campaigns are actually driving revenue",
          "Generic audience targeting with poor conversion rates",
          "Monthly reports that arrive weeks late and lack actionable insights",
        ]}
        solutions={[
          "Every dollar tracked with full-funnel attribution modeling",
          "You own your ad accounts — full access, full transparency",
          "Real-time dashboard showing revenue impact per campaign",
          "AI-powered audience segmentation for precision targeting",
          "Daily performance updates and live analytics dashboard",
        ]}
      />

      <DetailedServices
        badge="PPC Services"
        title="Full-Stack PPC Services Built for Growth"
        subtitle="The only PPC agency built ground-up for high-growth businesses."
        services={detailedServices}
      />

      <StatsBar
        title="Numbers That Matter to Growth Leaders"
        stats={[
          { value: "100K+", label: "SQLs Generated" },
          { value: "50+", label: "Paid Media Clients" },
          { value: "$10M", label: "Monthly Budget Managed" },
          { value: "30+", label: "In-House Experts" },
        ]}
      />

      <ProcessSteps
        title="Our PPC Process That Fuels Your Growth"
        subtitle="A proven, iterative process that turns ad spend into predictable pipeline."
        steps={processSteps}
      />

      <ComparisonTable
        title="Why HighBizz Over In-House?"
        inHouseItems={[
          { text: "Divided attention between PPC and other marketing channels" },
          { text: "High payroll costs with slow time to scale campaigns" },
          { text: "New, untested team without deep platform relationships" },
          { text: "Limited perspective from a single company's experience" },
          { text: "Reactive optimization instead of proactive AI-driven management" },
        ]}
        highbizzItems={[
          { text: "Singular focus on generating high-quality leads for your business" },
          { text: "No payroll costs and minimal time needed to scale campaigns" },
          { text: "Up-to-date, certified team with pre-existing platform partnerships" },
          { text: "Broader perspective from 50+ client engagements across industries" },
          { text: "AI-powered optimization engine running 24/7 on your campaigns" },
        ]}
      />

      <ToolsMarquee
        tools={["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Analytics 4", "Google Tag Manager", "Looker Studio", "Hotjar", "Unbounce", "Triple Whale", "HubSpot", "Salesforce"]}
      />

      <TestimonialsSection title="Performance Marketing Results" />
      <FAQSection faqs={faqs} />
      <ServiceCTA title="Ready to Scale Your Paid Campaigns?" subtitle="Get a free ad account audit and see exactly where you're leaving money on the table." />
      <Footer />
    </div>
  );
}
