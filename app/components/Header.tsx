"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "/#services", label: "서비스" },
  { href: "/#why", label: "왜 다온클라우드" },
  { href: "/#cases", label: "사례" },
  { href: "/#process", label: "프로세스" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-bold tracking-tight">
          다온클라우드
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-600 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            문의하기
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 sm:hidden dark:border-slate-800 dark:text-slate-300"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 px-6 py-4 text-sm font-medium text-slate-600 sm:hidden dark:border-slate-800 dark:text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 hover:bg-slate-50 hover:text-brand-600 dark:hover:bg-slate-900 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
