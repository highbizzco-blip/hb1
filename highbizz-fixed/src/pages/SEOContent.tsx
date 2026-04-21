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
import { Search, FileText, TrendingUp, Globe, BarChart3, Layers, Target, Zap, BookOpen, Link2, Code, Eye } from "lucide-react";

const valueProps = [
  { icon: TrendingUp, title: "Revenue-Focused SEO", description: "We don't chase vanity rankings. Every SEO effort is tied to MQLs, demos, and pipeline — metrics your CFO actually cares about." },
  { icon: FileText, title: "Product-Led Content", description: "We craft content around your product's real value. Your solution becomes the star of every search result, not generic filler." },
  { icon: Globe, title: "Omni-Search Visibility", description: "From AI summaries to featured snippets to review sites, your brand dominates every corner of the search ecosystem." },
  { icon: Layers, title: "Topical Authority Building", description: "We map your niche, identify key conversations, and build TOFU, MOFU, BOFU content that positions you as the category expert." },
  { icon: Target, title: "High-Intent Keywords", description: "We target keywords that attract decision-makers actively searching for solutions — no fluff, just future customers." },
  { icon: Zap, title: "CRO-Driven SEO", description: "We don't chase traffic for traffic's sake. Our strategy is built to drive demos, signups, and SQLs using data-backed CRO tactics." },
];

const detailedServices = [
  { icon: Search, title: "End-to-End SEO Management", description: "Full-service SEO — strategy, execution, optimization, and reporting — like your extended marketing team.", bullets: ["Complete keyword strategy and roadmap", "On-page and technical optimization", "Monthly performance reporting tied to revenue", "Dedicated SEO strategist for your account"] },
  { icon: FileText, title: "Strategic Content Creation", description: "High-quality, product-led content that ranks, educates, and converts at every stage of the buyer journey.", bullets: ["TOFU/MOFU/BOFU content mapping", "Long-form guides, comparison pages, and listicles", "Product-integrated content that drives demos", "Content refresh and optimization cadence"] },
  { icon: Code, title: "Technical & On-Page SEO", description: "Comprehensive site audits that fix UX, speed, mobile responsiveness, and indexing issues to maintain rankings through algorithm changes.", bullets: ["Core Web Vitals optimization", "Schema markup and structured data", "Internal linking architecture", "Crawl budget optimization and indexing fixes"] },
  { icon: Link2, title: "Authority & Link Building", description: "White-hat, high-quality backlinks from authoritative niche sites that compound SEO impact over time.", bullets: ["Digital PR and journalist outreach", "Guest posting on high-DA publications", "Broken link building and resource page outreach", "Brand mention reclamation"] },
  { icon: Eye, title: "AI Search Optimization", description: "Future-proof your SEO by optimizing for AI-generated answers, ChatGPT citations, and AI overview snippets.", bullets: ["Entity optimization for knowledge graphs", "Structured data for AI comprehension", "Citation-worthy content formatting", "AI search monitoring and tracking"] },
  { icon: BarChart3, title: "Competitor Gap Analysis", description: "We use proven playbooks and SEO tools to find opportunities and blind spots in your competitors' strategies — then help you own them.", bullets: ["Content gap identification", "Backlink gap analysis", "SERP feature opportunity mapping", "Keyword cannibalization audit"] },
];

const processSteps = [
  { icon: Search, title: "Discovery & Kickoff", description: "We start by getting to know your business — goals, success metrics, timelines, and constraints. We align on expectations from day one." },
  { icon: BookOpen, title: "Product Deep Dive", description: "We learn everything about your product: features, unique selling points, and key use cases. This helps us craft content that highlights your real value." },
  { icon: Target, title: "Audience & ICP Research", description: "We map your ideal customer's journey and identify their Jobs To Be Done (JTBD). This shapes our strategy to address pain points at each buying stage." },
  { icon: Code, title: "Technical SEO Audit", description: "Our team performs a thorough technical and content audit to identify quick wins and roadblocks. We create a prioritized fix list for immediate impact." },
  { icon: Eye, title: "Competitor Analysis", description: "We analyze competitors' SEO strategies and unique value propositions to spot gaps and opportunities that set you apart." },
  { icon: Layers, title: "Keyword Research & Mapping", description: "Using competitor insights and journey mapping, we identify keywords for every funnel stage — balancing search volume with conversion potential." },
  { icon: FileText, title: "90-Day Strategy", description: "We create a three-month SEO roadmap aligned with your goals covering content creation, on-page & off-page optimization, and link-building tactics." },
  { icon: Zap, title: "Execution & Implementation", description: "Our team executes with clear content briefs and optimization guidelines. We maintain quality control and brand consistency every step of the way." },
  { icon: BarChart3, title: "Performance Tracking & Iteration", description: "We track MQLs, organic leads, traffic, and keyword rankings. Regular tracking helps us fine-tune our approach for maximum ROI." },
];

const faqs = [
  { question: "How is HighBizz different from other SEO agencies?", answer: "We're outcome-obsessed. While most agencies report on rankings and traffic, we tie every SEO effort directly to pipeline, demos, and revenue. We also optimize for AI search, not just traditional SERPs." },
  { question: "How long does it take to see SEO results?", answer: "Quick wins (technical fixes, content optimization) show impact in 4-8 weeks. Meaningful organic growth typically starts in months 3-4 and compounds significantly from month 6 onward." },
  { question: "Do you write content or just provide strategy?", answer: "Both. We have a full in-house content team that handles everything from strategy and keyword research to writing, editing, and publishing. Every piece is product-led and conversion-optimized." },
  { question: "What industries do you specialize in?", answer: "We work primarily with B2B SaaS, technology, and high-growth companies. Our playbooks are battle-tested across 100+ businesses in these verticals." },
  { question: "How do you measure SEO ROI?", answer: "We track organic traffic, keyword rankings, and content performance — but more importantly, we measure MQLs, demo requests, and pipeline revenue attributed to organic channels." },
  { question: "What about AI search and zero-click results?", answer: "We're ahead of this shift. Our AI Search Optimization service ensures your brand appears in ChatGPT citations, AI overviews, and featured snippets — not just traditional blue links." },
  { question: "Can you work with our existing content team?", answer: "Absolutely. We can operate as your full SEO team or augment your existing team with strategy, technical SEO, and link building. We adapt to what you need." },
];

export default function SEOContent() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        badge="SEO & Content"
        title="SEO That Drives"
        highlight="Revenue, Not Just Rankings"
        description="Tired of SEO reports that look good but don't move the needle? We turn organic traffic into consistent pipeline — helping you win across AI summaries, snippets, and classic SERPs."
        icon={Search}
        stats={[
          { value: "3x", label: "Avg. Organic Revenue Growth" },
          { value: "150+", label: "Keywords on Page 1" },
          { value: "2M+", label: "Organic Traffic Generated" },
        ]}
      />

      <ValuePropsGrid
        badge="Why It Matters"
        title="Get an SEO Partner That's Focused on Results"
        subtitle="We don't just rank keywords. We build organic growth engines that drive real business outcomes."
        items={valueProps}
      />

      <ProblemSolutionSection
        problems={[
          "Rankings look great but zero impact on pipeline or revenue",
          "Over-reliance on paid ads driving up CAC and eating into MRR",
          "Zero-click results and AI answers stealing your traffic",
          "Cookie-cutter content that doesn't resonate with real buyers",
          "No connection between SEO metrics and actual business growth",
        ]}
        solutions={[
          "Every SEO initiative tied directly to demos, MQLs, and revenue",
          "Organic channels becoming your most cost-effective growth lever",
          "Optimized for AI summaries, featured snippets, and modern search",
          "Product-led content that speaks to buyer pain points and converts",
          "Real-time dashboard connecting rankings to pipeline impact",
        ]}
      />

      <DetailedServices
        badge="Full-Stack SEO"
        title="Comprehensive SEO Services That Drive Revenue"
        subtitle="The only SEO team built ground-up for high-growth companies."
        services={detailedServices}
      />

      <StatsBar
        title="Numbers That Matter"
        stats={[
          { value: "2M+", label: "Organic Traffic Generated" },
          { value: "100+", label: "Clients Served" },
          { value: "1,500+", label: "Keywords Ranked Page 1" },
          { value: "3x", label: "Avg. Organic Revenue Lift" },
        ]}
      />

      <ProcessSteps
        title="Our SEO Process That Grows Pipeline, Not Just Pageviews"
        subtitle="A systematic, battle-tested process refined across 100+ engagements."
        steps={processSteps}
      />

      <ComparisonTable
        title="Why HighBizz Over In-House?"
        inHouseItems={[
          { text: "Divided attention between SEO and other marketing channels" },
          { text: "High payroll costs coupled with slow time-to-results" },
          { text: "Limited perspective from a single company's experience" },
          { text: "Difficulty keeping up with algorithm changes and AI search trends" },
          { text: "No access to enterprise-grade SEO tools and data" },
        ]}
        highbizzItems={[
          { text: "Singular focus on driving organic revenue for your business" },
          { text: "No payroll costs and rapid campaign scaling" },
          { text: "Broader perspective from 100+ client engagements across industries" },
          { text: "Always ahead of algorithm updates and AI search evolution" },
          { text: "Full access to premium SEO tools worth $5K+/month included" },
        ]}
      />

      <ToolsMarquee
        tools={["Ahrefs", "Semrush", "Surfer SEO", "Clearscope", "Google Search Console", "Screaming Frog", "Google Analytics 4", "ChatGPT", "Jasper", "Webflow", "WordPress", "HubSpot"]}
      />

      <TestimonialsSection title="SEO Success Stories" />
      <FAQSection faqs={faqs} />
      <ServiceCTA title="Ready to Turn SEO Into Your #1 Revenue Channel?" subtitle="Get a free SEO audit and discover untapped organic growth opportunities." />
      <Footer />
    </div>
  );
}
