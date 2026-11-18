import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  title: string;
  description: string;
  eyebrow?: string;
  action?: ReactNode;
};

export function PageContainer({
  children,
  title,
  description,
  eyebrow = "Workspace",
  action,
}: PageContainerProps) {
  return (
    <div>
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[1.3px] text-indigo-600">
            {eyebrow}
          </p>
          <h1 className="text-[26px] font-bold tracking-[-0.8px] text-slate-900 sm:text-[30px]">
            {title}
          </h1>
          <p className="mt-1.5 text-[13px] text-slate-500">{description}</p>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
