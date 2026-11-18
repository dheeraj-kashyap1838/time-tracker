import { SectionPage } from "@/app/components/SectionPage";

export default function ReportsPage() {
  return (
    <SectionPage
      actionLabel="Create report"
      columns={["Period", "Owner", "Updated"]}
      description="Turn your team's time data into insights you can act on."
      icon="reports"
      metrics={[
        { label: "Hours tracked", value: "1,284h", change: "+14.2%" },
        { label: "Billable rate", value: "78.4%", change: "+3.1%" },
        { label: "Top project", value: "Website", change: "86h this month" },
        { label: "Team utilization", value: "82%", change: "+5.6%" },
      ]}
      rows={[
        { name: "Weekly time summary", detail: "Time and activity · All projects", values: ["Oct 16 – Oct 22", "Jamie Davis", "Today"], status: "Ready", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Project profitability", detail: "Budget and billable hours", values: ["October 2024", "Jamie Davis", "Yesterday"], status: "Ready", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Team capacity", detail: "Utilization · By team member", values: ["October 2024", "Morgan Lee", "Oct 20"], status: "Ready", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Client activity", detail: "Tracked time · By client", values: ["Q3 2024", "Jamie Davis", "Oct 18"], status: "Ready", tone: "bg-emerald-50 text-emerald-700" },
      ]}
      title="Reports"
    />
  );
}
