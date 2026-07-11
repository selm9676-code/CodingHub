import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "../../../../../components/code-block";
import { getLanguageBySlug, getLessonBySlug, getNextLesson } from "../../../../../lib/curriculum";

interface LessonPageProps {
  params: {
    slug: string;
    lessonSlug: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const language = getLanguageBySlug(params.slug);
  const lesson = getLessonBySlug(params.slug, params.lessonSlug);

  if (!language || !lesson) {
    notFound();
  }

  const nextLesson = getNextLesson(params.slug, params.lessonSlug);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href={`/languages/${language.slug}`}
        className="mb-6 inline-flex text-sm text-sky-300 transition hover:text-sky-200"
      >
        ← Back to {language.name}
      </Link>

      <section className="rounded-[2rem] border border-sky-400/15 bg-slate-900/70 p-8 shadow-glow">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-sky-300/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
            {language.name}
          </span>
          <span className="rounded-full border border-sky-300/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
            {lesson.tier}
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-bold text-white">{lesson.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">{lesson.summary}</p>

        <div className="mt-8 rounded-3xl border border-sky-300/10 bg-slate-950/80 p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Lesson goal</p>
          <p className="mt-3 text-base leading-7 text-slate-200">{lesson.goal}</p>
        </div>
      </section>

      <section className="mt-10 grid gap-8">
        <div className="rounded-3xl border border-sky-300/10 bg-slate-900/70 p-6 shadow-glow">
          <h2 className="text-2xl font-semibold text-white">Step-by-step explanation</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
            {lesson.explanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <CodeBlock
          code={lesson.code}
          language={lesson.codeLanguage}
          notes={lesson.codeNotes}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-300/10 bg-slate-900/70 p-6 shadow-glow">
            <h2 className="text-xl font-semibold text-white">Common beginner mistakes</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              {lesson.commonMistakes.map((mistake) => (
                <li key={mistake} className="flex gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-sky-300/10 bg-slate-900/70 p-6 shadow-glow">
            <h2 className="text-xl font-semibold text-white">Try it yourself</h2>
            <p className="mt-4 text-base font-medium text-sky-200">{lesson.exercise.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {lesson.exercise.instructions}
            </p>
          </div>
        </div>

        {nextLesson ? (
          <div className="rounded-3xl border border-sky-300/10 bg-slate-900/70 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Next lesson</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{nextLesson.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{nextLesson.summary}</p>
            <Link
              href={`/languages/${language.slug}/lessons/${nextLesson.slug}`}
              className="mt-5 inline-flex rounded-2xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Continue learning
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  );
}
