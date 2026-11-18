import { SectionPage } from "@/app/components/SectionPage";

export default function SettingsPage() {
  return (
    <SectionPage
      actionLabel="Edit workspace"
      columns={["Category", "Updated by", "Last updated"]}
      description="Manage your workspace preferences and account details."
      icon="settings"
      metrics={[
        { label: "Workspace", value: "Studio North", change: "Free plan" },
        { label: "Timezone", value: "PDT (UTC−7)", change: "Los Angeles" },
        { label: "Week starts", value: "Monday", change: "Updated recently" },
        { label: "Time format", value: "12-hour", change: "Personal setting" },
      ]}
      rows={[
        { name: "Workspace details", detail: "Name, logo, and organization info", values: ["Workspace", "Jamie Davis", "Oct 20, 2024"], status: "Configured", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Time & schedule", detail: "Timezone, week start, and work hours", values: ["Preferences", "Jamie Davis", "Oct 18, 2024"], status: "Configured", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Notifications", detail: "Email and in-app notification settings", values: ["Preferences", "Morgan Lee", "Oct 12, 2024"], status: "Configured", tone: "bg-emerald-50 text-emerald-700" },
        { name: "Integrations", detail: "Connect your tools and services", values: ["Workspace", "Jamie Davis", "Not connected"], status: "Explore", tone: "bg-indigo-50 text-indigo-700" },
      ]}
      title="Settings"
    />
  );
}
