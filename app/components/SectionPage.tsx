import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { PageContainer } from "./PageContainer";

type SectionPageProps = {
  title: string;
  description: string;
  icon: IconName;
  actionLabel: string;
  metrics: { label: string; value: string; change: string }[];
  columns: string[];
  rows: { name: string; detail: string; values: string[]; status: string; tone: string }[];
};

export function SectionPage({
  title,
  description,
  icon,
  actionLabel,
  metrics,
  columns,
  rows,
}: SectionPageProps) {
  return (
    <PageContainer
      action={
        <button className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg bg-indigo-600 px-4 text-xs font-semibold text-white shadow-sm shadow-indigo-200 transition-colors hover:bg-indigo-700 sm:self-auto" type="button">
          <Icon name="plus" className="h-4 w-4" />
          {actionLabel}
        </button>
      }
      description={description}
      title={title}
    >
      <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5" key={metric.label}>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">{metric.label}</span>
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${index % 2 === 0 ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600"}`}>
                <Icon name={icon} className="h-4 w-4" />
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[25px] font-bold tracking-[-0.8px] text-slate-900">{metric.value}</span>
              <span className="text-[10px] font-medium text-emerald-600">{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200/80 bg-white">
        <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-800">All {title.toLowerCase()}</h2>
            <p className="mt-1 text-[11px] text-slate-500">A snapshot of what&apos;s happening in your workspace.</p>
          </div>
          <button className="flex h-8 items-center gap-2 self-start rounded-lg border border-slate-200 px-2.5 text-[11px] font-medium text-slate-600 hover:bg-slate-50" type="button">
            <Icon name="filter" className="h-3.5 w-3.5" />
            Filters
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="bg-slate-50/70">
                <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">Name</th>
                {columns.map((column) => (
                  <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400" key={column}>{column}</th>
                ))}
                <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr className="border-t border-slate-100" key={row.name}>
                  <td className="px-5 py-4">
                    <span className="block text-xs font-semibold text-slate-800">{row.name}</span>
                    <span className="mt-1 block text-[10px] text-slate-500">{row.detail}</span>
                  </td>
                  {row.values.map((value, index) => (
                    <td className="px-4 py-4 text-xs text-slate-600" key={`${row.name}-${index}`}>{value}</td>
                  ))}
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${row.tone}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageContainer>
  );
}
