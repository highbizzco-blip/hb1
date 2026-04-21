import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PilorapLanding from "./pages/PilorapLanding";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import SEOContent from "./pages/SEOContent";
import WebsiteCRO from "./pages/WebsiteCRO";
import BrandingCreative from "./pages/BrandingCreative";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Products from "./pages/Products";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import ClientDashboardTickets from "./pages/ClientDashboardTickets";
import ClientDashboardAnalytics from "./pages/ClientDashboardAnalytics";
import ClientDashboardUpdates from "./pages/ClientDashboardUpdates";
import ClientDashboardReports from "./pages/ClientDashboardReports";
import ClientDashboardIntegrations from "./pages/ClientDashboardIntegrations";
import ClientDashboardGrowth from "./pages/ClientDashboardGrowth";
import ClientDashboardSettings from "./pages/ClientDashboardSettings";
import TeamDashboard from "./pages/TeamDashboard";
import TeamDashboardTasks from "./pages/TeamDashboardTasks";
import TeamDashboardUpdates from "./pages/TeamDashboardUpdates";
import TeamDashboardAnalytics from "./pages/TeamDashboardAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pilorap" element={<PilorapLanding />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/seo-content" element={<SEOContent />} />
          <Route path="/services/website-cro" element={<WebsiteCRO />} />
          <Route path="/services/branding-creative" element={<BrandingCreative />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          {/* Client Dashboard */}
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/dashboard/analytics" element={<ClientDashboardAnalytics />} />
          <Route path="/dashboard/tickets" element={<ClientDashboardTickets />} />
          <Route path="/dashboard/updates" element={<ClientDashboardUpdates />} />
          <Route path="/dashboard/reports" element={<ClientDashboardReports />} />
          <Route path="/dashboard/integrations" element={<ClientDashboardIntegrations />} />
          <Route path="/dashboard/growth" element={<ClientDashboardGrowth />} />
          <Route path="/dashboard/settings" element={<ClientDashboardSettings />} />
          {/* Team Dashboard */}
          <Route path="/team" element={<TeamDashboard />} />
          <Route path="/team/tasks" element={<TeamDashboardTasks />} />
          <Route path="/team/updates" element={<TeamDashboardUpdates />} />
          <Route path="/team/analytics-input" element={<TeamDashboardAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
