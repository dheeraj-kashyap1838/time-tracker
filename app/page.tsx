import Link from "next/link";
import { Icon } from "@/app/components/Icon";
import { PageContainer } from "@/app/components/PageContainer";

const activities = [
  { initials: "JD", color: "bg-amber-100 text-amber-800", name: "Jamie Davis", task: "Website redesign · Wireframes", time: "2h 40m", ago: "10 min ago" },
  { initials: "ML", color: "bg-sky-100 text-sky-800", name: "Morgan Lee", task: "Mobile app · API integration", time: "1h 25m", ago: "32 min ago" },
  { initials: "AK", color: "bg-violet-100 text-violet-800", name: "Alex Kim", task: "Brand refresh · Design system", time: "3h 10m", ago: "1 hour ago" },
];

const week = [
  { day: "Mon", hours: 6.8, previous: 5.8 },
  { day: "Tue", hours: 8.2, previous: 7.1 },
  { day: "Wed", hours: 5.5, previous: 6.2 },
  { day: "Thu", hours: 7.6, previous: 5.7 },
  { day: "Fri", hours: 4.4, previous: 3.8 },
  { day: "Sat", hours: 1.4, previous: 0.6 },
  { day: "Sun", hours: 0.5, previous: 0.2 },
];

export default function DashboardPage() {
  return (
    <PageContainer
      action={
        <Link
          className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white shadow-sm shadow-indigo-200 transition-colors hover:bg-indigo-700 sm:self-auto"
          href="/time-tracker"
        >
          <Icon name="plus" className="h-4 w-4" />
          Track time
        </Link>
      }
      description="Here's what's happening with your team this week."
      eyebrow="Tuesday, October 24, 2024"
      title="Good morning, Jamie 👋"
    >
      <section className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Hours tracked", value: "24h 18m", change: "+12.8%", icon: "clock" as const, tone: "indigo" },
          { label: "Projects active", value: "08", change: "+2 this week", icon: "projects" as const, tone: "emerald" },
          { label: "Team members", value: "12", change: "All on track", icon: "team" as const, tone: "violet" },
          { label: "Billable hours", value: "18h 42m", change: "77% of total", icon: "trend" as const, tone: "amber" },
        ].map((stat) => (
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5" key={stat.label}>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">{stat.label}</span>
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.tone === "indigo" ? "bg-indigo-50 text-indigo-600" : stat.tone === "emerald" ? "bg-emerald-50 text-emerald-600" : stat.tone === "violet" ? "bg-violet-50 text-violet-600" : "bg-amber-50 text-amber-600"}`}>
                <Icon name={stat.icon} className="h-[17px] w-[17px]" />
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[24px] font-bold tracking-[-0.8px] text-slate-900">{stat.value}</span>
              <span className="text-[10px] font-medium text-emerald-600">{stat.change}</span>
            </div>
            <p className="mt-1 text-[10px] text-slate-400">vs. last week</p>
          </div>
        ))}
      </section>

      <section className="mb-6 grid gap-4 xl:grid-cols-[1.55fr_1fr]">
        <div className="rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">Time tracked</h2>
              <p className="mt-1 text-[11px] text-slate-500">Your activity over the last 7 days</p>
            </div>
            <button className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1.5 text-[10px] font-medium text-slate-600" type="button">
              This week <Icon name="chevron" className="h-3 w-3" />
            </button>
          </div>
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-[-0.8px] text-slate-900">24h 18m</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">↑ 12.8%</span>
          </div>
          <div className="flex h-[168px] items-end justify-between gap-3 border-b border-slate-100 px-1 sm:gap-5">
            {week.map((day) => (
              <div className="flex h-full flex-1 flex-col items-center justify-end gap-2" key={day.day}>
                <div className="flex h-[130px] w-full items-end justify-center gap-1.5">
                  <div className="w-[30%] rounded-t-[4px] bg-indigo-100" style={{ height: `${(day.previous / 9) * 100}%` }} />
                  <div className={`w-[30%] rounded-t-[4px] ${day.day === "Thu" ? "bg-indigo-700" : "bg-indigo-500"}`} style={{ height: `${(day.hours / 9) * 100}%` }} />
                </div>
                <span className="pb-2 text-[10px] text-slate-400">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-5">
            <span className="flex items-center gap-1.5 text-[10px] text-slate-500"><span className="h-2 w-2 rounded-sm bg-indigo-500" />This week</span>
            <span className="flex items-center gap-1.5 text-[10px] text-slate-500"><span className="h-2 w-2 rounded-sm bg-indigo-100" />Last week</span>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-slate-800">Top projects</h2>
            <p className="mt-1 text-[11px] text-slate-500">By time tracked this week</p>
          </div>
          <div className="flex-1 space-y-5">
            {[
              { name: "Website redesign", client: "Acme Studio", hours: "9h 20m", percent: "78%", color: "bg-indigo-500" },
              { name: "Mobile app", client: "Northstar Inc.", hours: "6h 45m", percent: "56%", color: "bg-sky-500" },
              { name: "Brand refresh", client: "Self-initiated", hours: "4h 10m", percent: "35%", color: "bg-violet-500" },
              { name: "Marketing site", client: "Bright Labs", hours: "2h 30m", percent: "21%", color: "bg-amber-500" },
            ].map((project) => (
              <div key={project.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-slate-700">{project.name}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400">{project.client}</p>
                  </div>
                  <span className="ml-3 text-[11px] font-semibold text-slate-600">{project.hours}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${project.color}`} style={{ width: project.percent }} />
                </div>
              </div>
            ))}
          </div>
          <Link className="mt-5 flex items-center justify-center gap-1 border-t border-slate-100 pt-4 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700" href="/projects">
            View all projects <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200/80 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-sm font-semibold text-slate-800">Recent activity</h2>
            <p className="mt-1 text-[11px] text-slate-500">Your team&apos;s latest time entries</p>
          </div>
          <Link className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-700" href="/timesheet">View timesheet</Link>
        </div>
        <div className="divide-y divide-slate-100">
          {activities.map((activity) => (
            <div className="flex items-center gap-3 px-5 py-3.5 sm:px-6" key={activity.name}>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${activity.color}`}>{activity.initials}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-800">{activity.name}</p>
                <p className="mt-1 truncate text-[10px] text-slate-500">{activity.task}</p>
              </div>
              <span className="hidden text-[10px] text-slate-400 sm:block">{activity.ago}</span>
              <span className="w-[58px] text-right text-xs font-semibold text-slate-700">{activity.time}</span>
              <button aria-label={`More options for ${activity.name}`} className="text-slate-400 hover:text-slate-600" type="button">
                <Icon name="more" className="h-[18px] w-[18px]" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
