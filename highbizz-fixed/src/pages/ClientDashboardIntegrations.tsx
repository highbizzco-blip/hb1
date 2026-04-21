import ClientDashboardLayout from "@/components/dashboard/ClientDashboardLayout";
import { Plug } from "lucide-react";

export default function ClientDashboardIntegrations() {
  return (
    <ClientDashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
          <Plug className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-xl font-display font-semibold text-foreground mb-2">Integrations</h2>
        <p className="text-sm text-muted-foreground max-w-xs">This section is coming soon. Contact your account manager for details.</p>
      </div>
    </ClientDashboardLayout>
  );
}
