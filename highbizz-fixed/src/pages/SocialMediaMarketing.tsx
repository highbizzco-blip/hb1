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
import { Share2, Users, TrendingUp, Megaphone, BarChart3, Calendar, MessageCircle, Video, Camera, Heart, Sparkles, Eye } from "lucide-react";

const valueProps = [
  { icon: TrendingUp, title: "Data-Driven Strategy", description: "Every post, story, and campaign is backed by audience data, platform analytics, and competitive intelligence — not guesswork." },
  { icon: Users, title: "Community Building", description: "We don't just post content — we build engaged communities that advocate for your brand and drive organic word-of-mouth growth." },
  { icon: Video, title: "Platform-Native Content", description: "Content crafted specifically for each platform's algorithm, format, and audience behavior — from Reels to LinkedIn carousels." },
  { icon: BarChart3, title: "Full-Funnel Attribution", description: "We track from first impression to final conversion, connecting social engagement directly to pipeline and revenue." },
  { icon: Heart, title: "Brand Personality", description: "We develop a distinctive brand voice that resonates with your audience and makes your social presence genuinely memorable." },
  { icon: Sparkles, title: "Trend Acceleration", description: "We identify and capitalize on trending topics, formats, and cultural moments before your competitors even notice them." },
];

const detailedServices = [
  { icon: Calendar, title: "Content Strategy & Calendar", description: "Data-driven content pillars, posting schedules, and creative briefs tailored to each platform's algorithm and your audience.", bullets: ["Monthly content calendar with full creative assets", "Content pillar framework aligned to business goals", "Platform-specific format optimization", "Seasonal and trend-based content planning"] },
  { icon: Camera, title: "Content Creation & Production", description: "Professional content creation spanning static graphics, short-form video, carousels, stories, and long-form thought leadership.", bullets: ["Custom graphic design and brand templates", "Short-form video (Reels, TikTok, Shorts)", "Carousel and infographic creation", "Photography direction and editing"] },
  { icon: MessageCircle, title: "Community Management", description: "Active daily community management that turns followers into fans through authentic engagement and rapid response.", bullets: ["Daily comment and DM management", "Community sentiment monitoring", "UGC curation and reposting strategy", "Brand advocacy program development"] },
  { icon: Users, title: "Influencer & Creator Partnerships", description: "Strategic influencer outreach and partnership management that amplifies your brand through trusted voices.", bullets: ["Influencer identification and vetting", "Campaign brief development and negotiation", "Performance tracking per partnership", "Long-term ambassador program building"] },
  { icon: BarChart3, title: "Analytics & Performance Reporting", description: "Weekly analytics dashboards with actionable insights that connect social metrics to business outcomes.", bullets: ["Weekly performance reports with KPI tracking", "Competitor benchmarking and analysis", "Content performance scoring", "ROI attribution from social to pipeline"] },
  { icon: Megaphone, title: "Paid Social Amplification", description: "Strategic paid promotion of top-performing organic content to maximize reach and conversions.", bullets: ["Boosted post strategy for maximum ROI", "Dark post testing and optimization", "Retargeting and lookalike audiences", "Budget allocation across platforms"] },
];

const processSteps = [
  { icon: Eye, title: "Brand & Audience Audit", description: "We analyze your target audience demographics, competitor social presence, and brand voice to build a custom social blueprint." },
  { icon: Calendar, title: "Strategy & Content Planning", description: "Data-driven content pillars, posting schedules, and creative briefs tailored to each platform's algorithm and your audience." },
  { icon: Camera, title: "Content Production", description: "Professional content creation with platform-native formats — designed to stop the scroll and drive engagement." },
  { icon: Share2, title: "Publishing & Community Management", description: "Strategic scheduling, active community engagement, and real-time brand monitoring across all platforms." },
  { icon: BarChart3, title: "Analytics & Optimization", description: "Weekly performance analysis, A/B testing insights, and strategy pivots based on what the data tells us." },
  { icon: TrendingUp, title: "Scale & Influence", description: "Influencer partnerships, paid amplification, and cross-platform campaigns to accelerate growth beyond organic reach." },
];

const faqs = [
  { question: "Which social media platforms do you manage?", answer: "We manage Instagram, LinkedIn, Twitter/X, Facebook, TikTok, YouTube, and Pinterest. We recommend the best platform mix based on your audience, industry, and goals." },
  { question: "How often will you post on our accounts?", answer: "Posting frequency is customized — typically 4-7 posts per week across primary platforms, with daily stories and engagement. We optimize frequency based on performance data." },
  { question: "Do we get to approve content before it goes live?", answer: "Absolutely. You'll have access to our content calendar with full approval workflows. Nothing goes live without your sign-off. We typically work 2 weeks ahead." },
  { question: "How do you measure social media ROI?", answer: "We track engagement rates, follower growth, website traffic, lead generation, and conversions attributed to social. We connect social metrics to actual pipeline impact." },
  { question: "Can you handle crisis communication?", answer: "Yes. We have crisis communication protocols and can respond rapidly to protect your brand reputation. We also proactively monitor brand sentiment." },
  { question: "Do you create video content?", answer: "Yes. We produce short-form video (Reels, TikToks, Shorts), motion graphics, and can coordinate long-form video production. Video is core to every social strategy." },
  { question: "What makes HighBizz different from other social agencies?", answer: "We're revenue-focused, not vanity metric-focused. We tie every social effort to business outcomes, use data to drive every decision, and act as your full social team — not just a posting service." },
];

export default function SocialMediaMarketing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        badge="Social Media Marketing"
        title="Build a Brand People"
        highlight="Actually Follow"
        description="Strategic social media management that turns followers into customers. Platform-native content, community engagement, and data-driven growth — not just posting for the sake of it."
        icon={Share2}
        stats={[
          { value: "3.2x", label: "Avg. Engagement Rate" },
          { value: "500+", label: "Campaigns Run" },
          { value: "12M+", label: "Reach Generated" },
        ]}
      />

      <ValuePropsGrid
        badge="Our Edge"
        title="How We Build Social Brands That Actually Convert"
        subtitle="Social media done right is your most powerful brand-building and lead generation channel."
        items={valueProps}
      />

      <ProblemSolutionSection
        problems={[
          "Posting randomly with no strategy or content calendar",
          "Low engagement rates and stagnant follower growth",
          "No connection between social media efforts and revenue",
          "Inconsistent brand voice across platforms",
          "No idea what content your audience actually wants",
        ]}
        solutions={[
          "Data-driven content strategy aligned with business goals",
          "Platform-native content optimized for each algorithm",
          "Full-funnel tracking from impression to conversion",
          "Cohesive brand voice guidelines applied consistently",
          "Audience insights and trend analysis driving every post",
        ]}
      />

      <DetailedServices
        badge="Social Services"
        title="Full-Stack Social Media Services"
        subtitle="Everything you need to build, grow, and monetize your social presence."
        services={detailedServices}
      />

      <StatsBar
        title="Social Media Numbers That Matter"
        stats={[
          { value: "12M+", label: "Total Reach Generated" },
          { value: "500+", label: "Campaigns Executed" },
          { value: "3.2x", label: "Avg. Engagement Rate" },
          { value: "50+", label: "Brands Managed" },
        ]}
      />

      <ProcessSteps
        title="How We Grow Your Social Presence"
        subtitle="A systematic approach that turns social media from a cost center into a revenue driver."
        steps={processSteps}
      />

      <ComparisonTable
        title="Why HighBizz Over In-House?"
        inHouseItems={[
          { text: "One person juggling content creation, community management, and analytics" },
          { text: "Limited creative bandwidth and repetitive content formats" },
          { text: "No access to professional design tools and content production capabilities" },
          { text: "Hard to stay current with rapidly changing platform algorithms" },
          { text: "Difficulty measuring ROI beyond vanity metrics" },
        ]}
        highbizzItems={[
          { text: "Dedicated strategist, content creator, and community manager for your brand" },
          { text: "Full creative team producing diverse, platform-native content daily" },
          { text: "Professional production tools, templates, and design systems included" },
          { text: "Always ahead of algorithm changes with cross-client performance data" },
          { text: "Full-funnel attribution connecting social engagement to pipeline" },
        ]}
      />

      <ToolsMarquee
        tools={["Meta Business Suite", "Sprout Social", "Canva Pro", "CapCut", "Later", "Brandwatch", "Hootsuite", "Adobe Creative Suite", "ChatGPT", "Figma", "Notion"]}
      />

      <TestimonialsSection title="Social Media Success Stories" />
      <FAQSection faqs={faqs} />
      <ServiceCTA title="Ready to Own Your Social Presence?" subtitle="Get a free social media audit and discover untapped growth opportunities." />
      <Footer />
    </div>
  );
}
