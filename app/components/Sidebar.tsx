"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { navigation } from "./navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <button
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-slate-950/35 lg:hidden"
          onClick={onClose}
          type="button"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-slate-200/80 bg-white transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between px-6">
          <Link
            aria-label="Tempo home"
            className="flex items-center gap-2.5"
            href="/"
            onClick={onClose}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
              <Icon name="clock" className="h-[21px] w-[21px]" />
            </span>
            <span className="text-[19px] font-bold tracking-[-0.7px] text-slate-900">
              tempo<span className="text-indigo-600">.</span>
            </span>
          </Link>
          <button
            aria-label="Close navigation"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
            onClick={onClose}
            type="button"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="px-4 pb-5">
          <button
            className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5 text-left hover:bg-slate-50"
            type="button"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-sm font-bold text-violet-700">
              S
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold text-slate-800">
                Studio North
              </span>
              <span className="block text-[11px] text-slate-500">Free plan</span>
            </span>
            <Icon name="chevron" className="h-4 w-4 text-slate-400" />
          </button>
        </div>

        <nav aria-label="Main navigation" className="flex-1 px-3">
          <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[1.3px] text-slate-400">
            Workspace
          </p>
          <div className="space-y-1">
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`flex h-10 items-center gap-3 rounded-lg px-3 text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={onClose}
                >
                  <Icon
                    className={active ? "h-[18px] w-[18px]" : "h-[18px] w-[18px]"}
                    name={item.icon}
                  />
                  {item.label}
                  {item.href === "/time-tracker" && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="mx-4 mb-4 rounded-xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">Your week</span>
            <span className="text-[11px] text-slate-500">24 / 40h</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-3/5 rounded-full bg-indigo-500" />
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-slate-500">
            You&apos;re right on track. Keep it up!
          </p>
        </div>
        <div className="flex items-center gap-3 border-t border-slate-100 px-5 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
            JD
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs font-semibold text-slate-800">
              Jamie Davis
            </span>
            <span className="block text-[10px] text-slate-500">Workspace admin</span>
          </span>
          <Icon name="more" className="h-[18px] w-[18px] text-slate-400" />
        </div>
      </aside>
    </>
  );
}
