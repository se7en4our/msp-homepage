export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-bold tracking-tight">
          다온클라우드
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 sm:flex">
          <a href="/#services" className="hover:text-brand-600 dark:hover:text-brand-400">
            서비스
          </a>
          <a href="/#why" className="hover:text-brand-600 dark:hover:text-brand-400">
            왜 다온클라우드
          </a>
          <a href="/#cases" className="hover:text-brand-600 dark:hover:text-brand-400">
            사례
          </a>
          <a href="/#process" className="hover:text-brand-600 dark:hover:text-brand-400">
            프로세스
          </a>
          <a href="/#faq" className="hover:text-brand-600 dark:hover:text-brand-400">
            FAQ
          </a>
        </nav>
        <a
          href="/#contact"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
