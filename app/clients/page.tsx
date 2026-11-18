import { SectionPage } from "@/app/components/SectionPage";

export default function ClientsPage() {
  return (
    <SectionPage
      actionLabel="New client"
      columns={["Projects", "Team", "Hours"]}
      description="Manage your client relationships and keep work organized."
      icon="clients"
      metrics={[
        { label: "Total clients", value: "18", change: "+2 this month" },
        { label: "Active clients", value: "12", change: "67% of total" },
        { label: "Hours this month", value: "284h", change: "+16.2%" },
        { label: "Avg. project value", value: "$4,250", change: "+6.4%" },
      ]}
      rows={[
        { name: "Acme Studio", detail: "hello@acmestudio.co", values: ["3 active", "4 members", "86h 20m"], status: "Active", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Northstar Inc.", detail: "team@northstar.io", values: ["2 active", "3 members", "62h 45m"], status: "Active", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Bright Labs", detail: "work@brightlabs.com", values: ["2 active", "2 members", "48h 10m"], status: "Active", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Orbit Digital", detail: "studio@orbit.digital", values: ["1 active", "3 members", "32h 00m"], status: "Onboarding", tone: "bg-amber-50 text-amber-700" },
      ]}
      title="Clients"
    />
  );
}
