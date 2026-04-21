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
import { Globe, Search, Paintbrush, TestTube, Gauge, Code, Smartphone, Zap, Eye, BarChart3, Layers, MousePointer } from "lucide-react";

const valueProps = [
  { icon: Gauge, title: "Blazing Fast Performance", description: "Sub-2-second load times with Core Web Vitals optimization. Speed directly impacts conversions — every 100ms delay costs you customers." },
  { icon: Eye, title: "Conversion-Engineered UX", description: "Every layout, CTA placement, and user flow is designed based on behavioral data and conversion psychology, not aesthetic preference." },
  { icon: Smartphone, title: "Mobile-First Architecture", description: "Over 60% of your traffic is mobile. We build mobile-first, ensuring a flawless experience on every device and screen size." },
  { icon: TestTube, title: "Systematic A/B Testing", description: "We don't guess — we test. Systematic experiments on headlines, CTAs, layouts, and flows to continuously improve conversion rates." },
  { icon: Code, title: "Clean, Scalable Code", description: "Modern React/Next.js architecture with SEO-friendly rendering, accessibility compliance, and a codebase your dev team will love." },
  { icon: BarChart3, title: "Data-Driven Decisions", description: "Heatmaps, session recordings, and funnel analytics baked into every site — so you always know how visitors behave." },
];

const detailedServices = [
  { icon: Paintbrush, title: "Custom Website Design & Development", description: "High-performance, conversion-optimized websites built on modern frameworks with stunning design and flawless UX.", bullets: ["Custom responsive design from Figma to code", "React, Next.js, or Webflow development", "SEO-friendly architecture and semantic HTML", "Accessibility (WCAG 2.1) compliance"] },
  { icon: MousePointer, title: "Landing Page Design & Optimization", description: "Conversion-focused landing pages engineered to maximize leads, demos, and signups from your paid and organic traffic.", bullets: ["High-converting landing page templates", "Dynamic content personalization", "Multi-variant page testing framework", "Lead capture and CRM integration"] },
  { icon: TestTube, title: "A/B Testing & Experimentation", description: "Systematic testing program that continuously improves conversion rates across your entire website.", bullets: ["Hypothesis-driven test roadmap", "Headline, CTA, and layout experiments", "Statistical significance validation", "Test documentation and learning repository"] },
  { icon: Eye, title: "UX Audit & Conversion Research", description: "Deep analysis of user behavior through heatmaps, session recordings, and funnel analysis to identify conversion killers.", bullets: ["Heuristic evaluation against 100+ criteria", "Heatmap and scroll depth analysis", "User session recording review", "Conversion funnel drop-off analysis"] },
  { icon: Gauge, title: "Performance & Speed Optimization", description: "Core Web Vitals optimization ensuring your site loads fast, feels responsive, and ranks well.", bullets: ["Core Web Vitals (LCP, FID, CLS) optimization", "Image and asset optimization", "CDN and caching strategy", "Server-side rendering optimization"] },
  { icon: Layers, title: "Ongoing CRO Program", description: "Continuous conversion rate optimization with monthly experiments, reporting, and strategic recommendations.", bullets: ["Monthly CRO experiment pipeline", "Conversion tracking and goal setup", "Quarterly CRO strategy reviews", "Revenue impact reporting per experiment"] },
];

const processSteps = [
  { icon: Search, title: "UX & Conversion Audit", description: "Heatmap analysis, user session recordings, funnel analysis, and heuristic evaluation to identify every conversion killer on your current site." },
  { icon: Eye, title: "User Research & Discovery", description: "We study your users, map their journey, and define the content strategy, sitemap, and information architecture based on real behavior data." },
  { icon: Paintbrush, title: "Design & Prototyping", description: "High-converting wireframes and designs based on conversion psychology, user behavior data, and industry best practices — reviewed with your team." },
  { icon: Code, title: "Development & QA", description: "Clean, fast, responsive development with SEO-friendly architecture, accessibility compliance, and rigorous cross-browser/device testing." },
  { icon: Zap, title: "Launch & Performance Tuning", description: "Strategic launch with Core Web Vitals optimization, analytics setup, conversion tracking, and performance monitoring from day one." },
  { icon: TestTube, title: "A/B Testing & Iteration", description: "Post-launch systematic testing of headlines, CTAs, layouts, and flows to continuously improve conversion rates and revenue impact." },
];

const faqs = [
  { question: "What platforms do you build on?", answer: "We build on React, Next.js, WordPress, Webflow, and Shopify depending on your needs. We recommend the best platform based on your business requirements, scalability goals, and team capabilities." },
  { question: "How long does a website project take?", answer: "A typical landing page takes 2-3 weeks. A full website redesign takes 6-10 weeks depending on complexity. We provide detailed timelines with milestones during our discovery phase." },
  { question: "What's CRO and why do I need it?", answer: "Conversion Rate Optimization systematically improves the percentage of visitors who take desired actions. Even a 1% improvement can mean thousands in additional revenue — often more impactful than increasing traffic." },
  { question: "Do you handle hosting and maintenance?", answer: "Yes. We offer managed hosting, security updates, performance monitoring, and ongoing optimization as part of our maintenance plans. We also handle DNS, SSL, and CDN configuration." },
  { question: "Will my website be mobile-responsive?", answer: "Every website we build is mobile-first. With 60%+ of traffic on mobile, we ensure a flawless experience on every device — tested across 20+ screen sizes and browsers." },
  { question: "How do you measure website success?", answer: "We track conversion rates, bounce rates, page speed, user engagement, and most importantly — leads and revenue generated. Every metric ties back to business outcomes." },
  { question: "Can you redesign our existing website?", answer: "Absolutely. We specialize in strategic redesigns that improve conversion while retaining SEO equity and brand recognition. We handle the full migration and redirect strategy." },
];

export default function WebsiteCRO() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        badge="Website & CRO"
        title="Websites That"
        highlight="Convert Visitors Into Revenue"
        description="High-performance websites and landing pages engineered for speed, UX, and conversion. Every pixel earns its place — backed by data, not opinions."
        icon={Globe}
        stats={[
          { value: "+89%", label: "Avg. Conv. Rate Lift" },
          { value: "< 1.5s", label: "Avg. Load Time" },
          { value: "200+", label: "Sites Launched" },
        ]}
      />

      <ValuePropsGrid
        badge="Our Edge"
        title="Websites Built for Results, Not Just Looks"
        subtitle="Beautiful design is table stakes. We build websites that are engineered to convert."
        items={valueProps}
      />

      <ProblemSolutionSection
        problems={[
          "Beautiful website but terrible conversion rates",
          "Slow loading speeds driving away potential customers",
          "Not mobile-optimized — losing 60%+ of traffic",
          "No data on how visitors actually use your site",
          "Outdated design that hurts credibility and trust",
        ]}
        solutions={[
          "Conversion-engineered design based on user behavior data",
          "Sub-2-second load times with Core Web Vitals optimization",
          "Mobile-first responsive design for every device",
          "Heatmaps, session recordings, and A/B testing built in",
          "Modern, premium design that builds instant trust",
        ]}
      />

      <DetailedServices
        badge="Web Services"
        title="Full-Stack Website & CRO Services"
        subtitle="From design to development to ongoing optimization — everything under one roof."
        services={detailedServices}
      />

      <StatsBar
        title="Website & CRO Numbers"
        stats={[
          { value: "200+", label: "Sites Launched" },
          { value: "+89%", label: "Avg. Conversion Lift" },
          { value: "< 1.5s", label: "Avg. Load Time" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
      />

      <ProcessSteps
        title="Our Web Development Process"
        subtitle="A proven framework that delivers high-converting websites — on time and on budget."
        steps={processSteps}
      />

      <ComparisonTable
        title="Why HighBizz Over a Dev Shop?"
        inHouseItems={[
          { text: "Developers focused on code, not conversion optimization" },
          { text: "No built-in CRO expertise or A/B testing capabilities" },
          { text: "Website launched and forgotten — no ongoing optimization" },
          { text: "Design driven by aesthetics, not data and user behavior" },
          { text: "Limited experience with marketing sites and lead generation" },
        ]}
        highbizzItems={[
          { text: "Design + development + CRO expertise in one integrated team" },
          { text: "A/B testing and conversion optimization baked into every project" },
          { text: "Ongoing CRO program with monthly experiments and reporting" },
          { text: "Every design decision backed by heatmaps and user data" },
          { text: "200+ marketing websites built with measurable conversion results" },
        ]}
      />

      <ToolsMarquee
        tools={["React", "Next.js", "Webflow", "Figma", "Google Optimize", "Hotjar", "Google PageSpeed", "GTmetrix", "Vercel", "Netlify", "Contentful", "Sanity"]}
      />

      <TestimonialsSection title="Website & CRO Results" />
      <FAQSection faqs={faqs} />
      <ServiceCTA title="Ready for a Website That Actually Converts?" subtitle="Get a free UX audit and discover what's killing your conversion rates." />
      <Footer />
    </div>
  );
}
