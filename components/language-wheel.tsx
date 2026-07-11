import Link from "next/link";
import type { LanguageMeta } from "../types/curriculum";

interface LanguageWheelProps {
  languages: LanguageMeta[];
}

export function LanguageWheel({ languages }: LanguageWheelProps) {
  return (
    <div className="overflow-x-auto pb-3">
      <div className="flex min-w-max gap-4 pr-6">
        {languages.map((language) => (
          <Link
            key={language.slug}
            href={`/languages/${language.slug}`}
            className="group w-[260px] shrink-0 rounded-3xl border border-sky-400/15 bg-slate-900/70 p-5 shadow-glow transition duration-200 hover:-translate-y-1 hover:border-sky-300/40"
          >
            <div
              className={`mb-4 h-2 rounded-full bg-gradient-to-r ${language.accentClass}`}
            />
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {language.name}
              </h3>
              <span className="rounded-full border border-sky-300/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
                Start
              </span>
            </div>
            <p className="mb-3 text-sm text-sky-200/90">{language.tagline}</p>
            <p className="text-sm leading-6 text-slate-300">
              {language.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
