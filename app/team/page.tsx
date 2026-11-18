import { SectionPage } from "@/app/components/SectionPage";

export default function TeamPage() {
  return (
    <SectionPage
      actionLabel="Invite member"
      columns={["Role", "Projects", "This week"]}
      description="See who's working on what and how the team is tracking."
      icon="team"
      metrics={[
        { label: "Team members", value: "12", change: "+2 this month" },
        { label: "Hours this week", value: "184h", change: "+9.8%" },
        { label: "Active today", value: "08", change: "67% of team" },
        { label: "Pending invites", value: "02", change: "Sent this week" },
      ]}
      rows={[
        { name: "Jamie Davis", detail: "jamie@studionorth.co", values: ["Admin", "4 projects", "24h 18m"], status: "Active", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Morgan Lee", detail: "morgan@studionorth.co", values: ["Designer", "3 projects", "32h 40m"], status: "Active", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Alex Kim", detail: "alex@studionorth.co", values: ["Developer", "2 projects", "28h 05m"], status: "Active", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Taylor Reed", detail: "taylor@studionorth.co", values: ["Designer", "2 projects", "16h 30m"], status: "Away", tone: "bg-slate-100 text-slate-600" },
      ]}
      title="Team"
    />
  );
}
