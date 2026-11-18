import type { IconName } from "./Icon";

export const navigation: { label: string; href: string; icon: IconName }[] = [
  { label: "Dashboard", href: "/", icon: "dashboard" },
  { label: "Time tracker", href: "/time-tracker", icon: "timer" },
  { label: "Timesheet", href: "/timesheet", icon: "timesheet" },
  { label: "Projects", href: "/projects", icon: "projects" },
  { label: "Clients", href: "/clients", icon: "clients" },
  { label: "Reports", href: "/reports", icon: "reports" },
  { label: "Team", href: "/team", icon: "team" },
  { label: "Settings", href: "/settings", icon: "settings" },
];
