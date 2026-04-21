import ClientDashboardLayout from "@/components/dashboard/ClientDashboardLayout";
import ClientOverview from "@/components/dashboard/ClientOverview";

export default function ClientDashboard() {
  return (
    <ClientDashboardLayout>
      <ClientOverview />
    </ClientDashboardLayout>
  );
}
