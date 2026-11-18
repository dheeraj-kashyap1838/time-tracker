import { SectionPage } from "@/app/components/SectionPage";

export default function TimesheetPage() {
  return (
    <SectionPage
      actionLabel="Add time"
      columns={["Date", "Project", "Duration"]}
      description="Review and manage tracked time across your workspace."
      icon="timesheet"
      metrics={[
        { label: "Hours this week", value: "24h 18m", change: "+12.8%" },
        { label: "Billable time", value: "18h 42m", change: "77% of total" },
        { label: "Entries", value: "36", change: "+8 this week" },
        { label: "Approval status", value: "On track", change: "All submitted" },
      ]}
      rows={[
        { name: "Jamie Davis", detail: "Wireframes and user flows", values: ["Today, 10:15 AM", "Website redesign", "2h 30m"], status: "Approved", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Morgan Lee", detail: "API integration", values: ["Today, 9:00 AM", "Mobile app", "1h 15m"], status: "Pending", tone: "bg-amber-50 text-amber-700" },
        { name: "Alex Kim", detail: "Design system components", values: ["Yesterday, 2:30 PM", "Brand refresh", "3h 10m"], status: "Approved", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Jamie Davis", detail: "Weekly design standup", values: ["Yesterday, 9:00 AM", "Internal", "50m"], status: "Approved", tone: "bg-emerald-50 text-emerald-700" },
      ]}
      title="Timesheet"
    />
  );
}
