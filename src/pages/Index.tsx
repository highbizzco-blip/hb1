import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import AnalyticsSection from "@/components/AnalyticsSection";
import AIPlannerSection from "@/components/AIPlannerSection";
import WhySection from "@/components/WhySection";
import TrustSection from "@/components/TrustSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import BrandsSlider from "@/components/BrandsSlider";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const homeFaqs = [
  {
    question: "How quickly can I expect to see results?",
    answer: "Most clients see measurable impact within the first 2-4 weeks. Our 30-60-90 day framework delivers quick wins early while building a compounding growth engine long term.",
  },
  {
    question: "Do I own the ad accounts and creative assets?",
    answer: "Yes - always. You retain full ownership of all ad accounts, data, creatives, and assets from day one. No lock-ins, ever.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have scaled businesses across E-commerce, D2C, SaaS, Healthcare, Real Estate, Education, and Finance. Our playbooks are built from 200+ real campaigns in these verticals.",
  },
  {
    question: "What is your minimum engagement budget?",
    answer: "Our engagements typically start from Rs.50K/mo in ad spend. Book a free strategy call and we will tailor a plan that fits your budget and goals.",
  },
  {
    question: "How is HighBizz different from other agencies?",
    answer: "We tie our team KPIs directly to your results, offer radical transparency with live dashboards and daily updates, and embed ourselves as an extension of your team.",
  },
  {
    question: "What does onboarding look like?",
    answer: "After your strategy call, we audit your existing channels, set up tracking and attribution, align on OKRs, and launch within 7-10 business days.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <BrandsSlider />
      <ServicesSection />
      <HowItWorks />
      <AnalyticsSection />
      {/* <AIPlannerSection /> */}
      <VideoTestimonialsSection />
      <WhySection />
      <TrustSection />
      <FAQSection faqs={homeFaqs} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
