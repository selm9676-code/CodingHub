import Link from "next/link";
import { LanguageWheel } from "@/components/language-wheel";
import { getLanguages, tierMeta } from "@/lib/curriculum";

export default function HomePage() {
  const languages = getLanguages();

  return (
    <main>
      <section className="grid-fade border-b border-sky-400/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-sky-200">
              Free coding lessons in your browser
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Learn 6 coding languages in one sleek, beginner-friendly hub.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Coding Hub helps learners explore Python, JavaScript, HTML, CSS, Java, and Rust with a clear path through Easy, Medium, Hard, and Expert.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#languages"
                className="rounded-2xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Start Learning
              </a>
              <a
                href="#tiers"
                className="rounded-2xl border border-sky-300/20 px-6 py-3 font-semibold text-sky-200 transition hover:border-sky-300/40 hover:text-white"
              >
                Explore the tiers
              </a>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-[2rem] border border-sky-400/15 bg-slate-900/70 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
              Phase 1 launch languages
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {languages.map((language) => (
                <Link
                  key={language.slug}
                  href={`/languages/${language.slug}`}
                  className="rounded-2xl border border-sky-300/10 bg-slate-950/80 p-4 transition hover:border-sky-300/30"
                >
                  <p className="text-lg font-semibold text-white">{language.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{language.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="languages" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Language selector</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Choose a language and jump in</h2>
          <p className="mt-3 text-base leading-7 text-slate-300">
            This first version uses a scrollable wheel-style selector so learners can quickly browse all supported languages.
          </p>
        </div>

        <LanguageWheel languages={languages} />
      </section>

      <section id="tiers" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Learning structure</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Four tiers, one clear path</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(tierMeta).map(([key, value]) => (
            <div
              key={key}
              className="rounded-3xl border border-sky-300/10 bg-slate-900/65 p-6 shadow-glow"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-sky-300">{value.label}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{value.label} tier</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

