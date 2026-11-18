import Link from "next/link";
import { Icon } from "@/app/components/Icon";
import { PageContainer } from "@/app/components/PageContainer";

export default function TimeTrackerPage() {
  return (
    <PageContainer
      action={
        <Link className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50" href="/timesheet">
          View timesheet <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      }
      description="Keep an eye on your time and make every minute count."
      title="Time tracker"
    >
      <div className="mx-auto max-w-[760px]">
        <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-9">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-800">Ready when you are</p>
              <p className="mt-1 text-[11px] text-slate-500">Choose a project and start tracking</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Timer stopped</span>
          </div>
          <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_1fr]">
            <label className="block">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">What are you working on?</span>
              <input className="h-11 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Add a description..." />
            </label>
            <label className="block">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-slate-400">Project</span>
              <select className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" defaultValue="">
                <option disabled value="">Select a project</option>
                <option>Website redesign</option>
                <option>Mobile app</option>
                <option>Brand refresh</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 py-8">
            <span className="font-mono text-[42px] font-semibold tracking-[-2px] text-slate-800 sm:text-[52px]">00:00:00</span>
            <button className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-indigo-600 px-6 text-xs font-semibold text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700" type="button">
              <Icon name="play" className="h-4 w-4 fill-current" /> Start timer
            </button>
          </div>
        </section>
        <section className="mt-5 rounded-xl border border-slate-200/80 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">Today&apos;s entries</h2>
              <p className="mt-1 text-[11px] text-slate-500">Tuesday, October 24</p>
            </div>
            <span className="text-xs font-semibold text-slate-700">4h 35m</span>
          </div>
          {[
            ["Website redesign", "Wireframes and user flows", "10:15 AM – 12:45 PM", "2h 30m", "bg-indigo-500"],
            ["Mobile app", "API integration", "9:00 AM – 10:15 AM", "1h 15m", "bg-sky-500"],
            ["Team sync", "Weekly design standup", "8:30 AM – 9:20 AM", "50m", "bg-violet-500"],
          ].map(([project, task, range, duration, color]) => (
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 last:border-0" key={project}>
              <span className={`h-8 w-1 rounded-full ${color}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-800">{project}</p>
                <p className="mt-1 truncate text-[10px] text-slate-500">{task} · {range}</p>
              </div>
              <span className="text-xs font-semibold text-slate-700">{duration}</span>
              <Icon name="more" className="h-4 w-4 text-slate-400" />
            </div>
          ))}
        </section>
      </div>
    </PageContainer>
  );
}
