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
import { Palette, Eye, Layers, Sparkles, BookOpen, PenTool, Image, Film, Type, Megaphone, Target, Heart } from "lucide-react";

const valueProps = [
  { icon: Eye, title: "Strategic Brand Positioning", description: "We don't just design logos — we define your market position, brand archetype, and competitive differentiation through deep strategic work." },
  { icon: Sparkles, title: "Distinctive Visual Identity", description: "A cohesive visual system that makes your brand instantly recognizable and impossible to confuse with competitors." },
  { icon: Heart, title: "Emotional Brand Connection", description: "Brands that create emotional connections outperform competitors by 3x. We build brands people genuinely love and advocate for." },
  { icon: Type, title: "Ownable Brand Voice", description: "A distinctive tone of voice and messaging framework that ensures consistency across every touchpoint and team member." },
  { icon: Film, title: "Motion & Animation", description: "Animated brand elements, micro-interactions, and motion graphics that bring your brand to life across digital touchpoints." },
  { icon: Target, title: "Conversion-Ready Assets", description: "Every brand asset is designed to work hard — across ads, social, web, and print — driving recognition and conversion." },
];

const detailedServices = [
  { icon: Eye, title: "Brand Strategy & Positioning", description: "Deep immersion into your business, audience, and competitors to define your brand's unique space in the market.", bullets: ["Brand archetype and personality framework", "Competitive positioning and differentiation map", "Target audience persona development", "Brand story and origin narrative"] },
  { icon: Palette, title: "Visual Identity Design", description: "Complete visual identity system that creates a cohesive, memorable brand across every touchpoint.", bullets: ["Logo system (primary, secondary, icon, monochrome)", "Color palette with usage guidelines", "Typography system with font pairings", "Iconography and illustration style"] },
  { icon: PenTool, title: "Brand Messaging & Voice", description: "Strategic messaging framework and tone of voice guidelines that ensure brand consistency at scale.", bullets: ["Brand messaging hierarchy and taglines", "Tone of voice guide with examples", "Key messaging for each audience segment", "Elevator pitch and boilerplate copy"] },
  { icon: Image, title: "Creative Asset Library", description: "Full creative asset library including templates and marketing collateral ready for immediate use.", bullets: ["Social media template library (50+ templates)", "Presentation deck template", "Business card and stationery design", "Email and newsletter templates"] },
  { icon: Film, title: "Motion Design & Animation", description: "Animated brand elements that bring your identity to life across digital platforms and presentations.", bullets: ["Logo animation and reveal sequences", "Social media motion templates", "Micro-interaction design for web/app", "Lottie animation files for developers"] },
  { icon: BookOpen, title: "Brand Guidelines Document", description: "Comprehensive brand book ensuring consistency across every touchpoint, team member, and agency partner.", bullets: ["40+ page brand guidelines document", "Digital and print usage specifications", "Do's and don'ts with visual examples", "Brand governance and approval workflows"] },
];

const processSteps = [
  { icon: Eye, title: "Brand Discovery & Immersion", description: "Deep stakeholder interviews, market analysis, competitor audit, and audience research to understand your brand's unique opportunity." },
  { icon: Target, title: "Strategy & Positioning", description: "Brand archetype definition, messaging framework, tone of voice, and visual direction that differentiates you in the market." },
  { icon: Sparkles, title: "Concept Exploration", description: "We present 3 distinct strategic creative directions — each with a different personality and visual approach — for your team to evaluate." },
  { icon: Palette, title: "Visual Identity Design", description: "Full identity system development including logo, colors, typography, iconography, and visual elements that create a cohesive brand." },
  { icon: Layers, title: "Asset Creation & Templates", description: "Complete creative asset library including social templates, presentations, stationery, and marketing collateral." },
  { icon: BookOpen, title: "Brand Guidelines & Handoff", description: "Comprehensive 40+ page brand book with usage guidelines, plus organized asset delivery with all source files." },
];

const faqs = [
  { question: "How long does a full branding project take?", answer: "A complete brand identity typically takes 6-8 weeks from discovery to final delivery. This includes research, strategy, design exploration, 2-3 rounds of revisions, and comprehensive guidelines documentation." },
  { question: "What's included in a brand identity package?", answer: "Logo system (primary, secondary, icon), color palette, typography, brand guidelines (40+ pages), business card design, social media templates, presentation templates, and email templates. Additional assets available as add-ons." },
  { question: "How many logo concepts will we see?", answer: "We present 3 distinct strategic directions, each with a different personality and visual approach. After you select a direction, we refine it through 2-3 rounds of revisions to reach the final design." },
  { question: "Can you rebrand an existing business?", answer: "Absolutely. We specialize in strategic rebrands that evolve your identity while retaining brand equity. We handle the full transition plan across all channels and touchpoints." },
  { question: "Do you create ongoing creative content?", answer: "Yes. Many clients retain us for ongoing creative support including social media graphics, ad creative, presentations, campaign assets, and seasonal content." },
  { question: "What file formats will we receive?", answer: "You'll receive all source files (AI, PSD, Figma), plus export-ready files in SVG, PNG, JPG, PDF, and EPS. All fonts and assets are included with proper licensing." },
  { question: "Do you offer brand training?", answer: "Yes. We conduct brand training sessions for your team to ensure everyone understands the guidelines and can apply the brand consistently. This is included in every branding project." },
];

export default function BrandingCreative() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero
        badge="Branding & Creative"
        title="Brands That Are"
        highlight="Impossible to Ignore"
        description="Strategic brand identity and creative systems that make your business memorable, trustworthy, and distinctly yours. We build brands people love — not just recognize."
        icon={Palette}
        stats={[
          { value: "340%", label: "Avg. Brand Recall Lift" },
          { value: "150+", label: "Brands Built" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
      />

      <ValuePropsGrid
        badge="Our Edge"
        title="Why Great Brands Win"
        subtitle="In a crowded market, your brand is your unfair advantage. We make sure it's an unbeatable one."
        items={valueProps}
      />

      <ProblemSolutionSection
        problems={[
          "Brand looks inconsistent across different channels and materials",
          "Competitors all look the same — so do you",
          "No clear brand guidelines for your team to follow",
          "Visual identity doesn't reflect the quality of your product",
          "DIY design that lacks professionalism and trust",
        ]}
        solutions={[
          "Cohesive brand system applied consistently everywhere",
          "Distinctive visual identity that stands out in your market",
          "Comprehensive 40+ page guidelines your whole team can follow",
          "Premium design that matches your product's true value",
          "Professional creative assets that build instant credibility",
        ]}
      />

      <DetailedServices
        badge="Branding Services"
        title="Full-Stack Branding & Creative Services"
        subtitle="From strategy to identity to ongoing creative production — your complete brand partner."
        services={detailedServices}
      />

      <StatsBar
        title="Branding Numbers That Matter"
        stats={[
          { value: "150+", label: "Brands Built" },
          { value: "340%", label: "Avg. Brand Recall Lift" },
          { value: "50+", label: "Template Libraries Created" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
      />

      <ProcessSteps
        title="Our Branding Process"
        subtitle="A strategic, collaborative process that transforms your brand from forgettable to unforgettable."
        steps={processSteps}
      />

      <ComparisonTable
        title="Why HighBizz Over a Freelancer?"
        inHouseItems={[
          { text: "Single designer with limited strategic and research capability" },
          { text: "No brand strategy — just visual execution without positioning" },
          { text: "Inconsistent availability and project prioritization" },
          { text: "Limited range of skills (usually just logo + basic assets)" },
          { text: "No ongoing support or brand governance framework" },
        ]}
        highbizzItems={[
          { text: "Full team: strategist, designer, copywriter, and motion designer" },
          { text: "Strategy-first approach with deep competitive and audience research" },
          { text: "Dedicated project manager ensuring timelines and quality" },
          { text: "Full-spectrum: strategy, identity, motion, templates, and guidelines" },
          { text: "Ongoing creative partnership with brand governance support" },
        ]}
      />

      <ToolsMarquee
        tools={["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Midjourney", "Canva Pro", "Lottie", "Framer", "Webflow", "Notion", "Miro"]}
      />

      <TestimonialsSection title="Branding Success Stories" />
      <FAQSection faqs={faqs} />
      <ServiceCTA title="Ready to Build a Brand People Love?" subtitle="Get a free brand audit and discover how to stand out in your market." />
      <Footer />
    </div>
  );
}
