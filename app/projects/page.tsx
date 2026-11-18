import { SectionPage } from "@/app/components/SectionPage";

export default function ProjectsPage() {
  return (
    <SectionPage
      actionLabel="New project"
      columns={["Client", "Team", "Tracked"]}
      description="Keep projects moving and see where your team's time goes."
      icon="projects"
      metrics={[
        { label: "Active projects", value: "08", change: "+2 this month" },
        { label: "Tracked this week", value: "96h", change: "+8.4%" },
        { label: "Billable projects", value: "06", change: "75% of total" },
        { label: "Completed", value: "14", change: "+3 this month" },
      ]}
      rows={[
        { name: "Website redesign", detail: "Design · Development", values: ["Acme Studio", "4 members", "32h 15m"], status: "In progress", tone: "bg-indigo-50 text-indigo-700" },
        { name: "Mobile app", detail: "Product design", values: ["Northstar Inc.", "3 members", "24h 40m"], status: "In progress", tone: "bg-indigo-50 text-indigo-700" },
        { name: "Brand refresh", detail: "Identity · Guidelines", values: ["Bright Labs", "2 members", "18h 05m"], status: "In progress", tone: "bg-indigo-50 text-indigo-700" },
        { name: "Marketing site", detail: "Web · Content", values: ["Acme Studio", "3 members", "12h 30m"], status: "On hold", tone: "bg-amber-50 text-amber-700" },
      ]}
      title="Projects"
    />
  );
}
