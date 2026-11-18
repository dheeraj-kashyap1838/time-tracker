"use client";

import { Icon } from "./Icon";
import { navigation } from "./navigation";
import { usePathname } from "next/navigation";

type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const activePage =
    navigation.find((item) => item.href === pathname) ??
    navigation.find((item) => item.href !== "/" && pathname.startsWith(item.href));
  const pageName = activePage?.label ?? "Workspace";

  return (
    <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-md sm:px-7 lg:px-9">
      <div className="flex items-center gap-3">
        <button
          aria-label="Open navigation"
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          onClick={onMenuClick}
          type="button"
        >
          <Icon name="menu" />
        </button>
        <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
          <span>Workspace</span>
          <span>/</span>
          <span className="font-medium text-slate-700">{pageName}</span>
        </div>
        <span className="text-sm font-semibold text-slate-800 sm:hidden">{pageName}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          aria-label="Search"
          className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 px-2.5 text-slate-500 hover:bg-slate-50 sm:w-[190px] sm:justify-between sm:px-3"
          type="button"
        >
          <span className="flex items-center gap-2">
            <Icon name="search" className="h-4 w-4" />
            <span className="hidden text-xs sm:inline">Search anything...</span>
          </span>
          <kbd className="hidden rounded border border-slate-200 bg-slate-50 px-1 text-[9px] text-slate-400 sm:inline">
            ⌘ K
          </kbd>
        </button>
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
          type="button"
        >
          <Icon name="bell" className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        <span className="hidden h-7 w-px bg-slate-200 sm:block" />
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-800">
          JD
        </span>
      </div>
    </header>
  );
}
