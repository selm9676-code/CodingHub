import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hub-line/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-lg shadow-glow">
            💙
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Coding Hub
            </p>
            <p className="text-xs text-slate-400">
              Learn 6 languages in one place
            </p>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="/#languages" className="transition hover:text-sky-300">
            Languages
          </a>
          <a href="/#tiers" className="transition hover:text-sky-300">
            Tiers
          </a>
        </nav>
      </div>
    </header>
  );
}
