import ObfuscatedEmail from "./ObfuscatedEmail";

const SHA = process.env.BUILD_SHA ?? "dev";
const BUILT_AT = process.env.BUILD_TIME ?? "";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
        <p>© {new Date().getFullYear()} 다온클라우드</p>
        <p>
          <ObfuscatedEmail className="hover:text-brand-600 dark:hover:text-brand-400" />
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          build {SHA} {BUILT_AT && `· ${BUILT_AT}`}
        </p>
      </div>
      <div className="mx-auto mt-4 flex max-w-6xl gap-4 px-6 text-xs text-slate-400 dark:text-slate-500">
        <a href="/privacy" className="hover:text-brand-600 dark:hover:text-brand-400">
          개인정보처리방침
        </a>
        <a href="/terms" className="hover:text-brand-600 dark:hover:text-brand-400">
          이용약관
        </a>
      </div>
    </footer>
  );
}
