import Link from "next/link";
import type { Lesson, TierKey } from "../types/curriculum";

interface TierSectionProps {
  languageSlug: string;
  tier: TierKey;
  title: string;
  description: string;
  lessons: Lesson[];
}

export function TierSection({
  languageSlug,
  tier,
  title,
  description,
  lessons
}: TierSectionProps) {
  return (
    <section className="rounded-3xl border border-sky-400/15 bg-slate-900/65 p-6 shadow-glow">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">{title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{title} lessons</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-300">{description}</p>
      </div>

      {lessons.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/languages/${languageSlug}/lessons/${lesson.slug}`}
              className="rounded-2xl border border-sky-300/10 bg-slate-950/80 p-5 transition hover:border-sky-300/35 hover:bg-slate-900"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-sky-400/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-200">
                  {tier}
                </span>
                <span className="text-xs text-slate-500">Lesson {lesson.order}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{lesson.title}</h3>
              <p className="mb-4 text-sm leading-6 text-slate-300">{lesson.summary}</p>
              <span className="text-sm font-medium text-sky-300">Open lesson →</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-sky-400/20 bg-slate-950/70 p-5">
          <p className="text-sm leading-6 text-slate-300">
            This tier is part of the roadmap, but the first release is focused on Easy-tier starter content.
          </p>
        </div>
      )}
    </section>
  );
}
