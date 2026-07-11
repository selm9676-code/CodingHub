import { notFound } from "next/navigation";
import { TierSection } from "../../../components/tier-section";
import { getLanguageBySlug, getLessonsForTier, tierMeta } from "../../../lib/curriculum";
import type { TierKey } from "../../../types/curriculum";

interface LanguagePageProps {
  params: {
    slug: string;
  };
}

const tierOrder: TierKey[] = ["easy", "medium", "hard", "expert"];

export default function LanguagePage({ params }: LanguagePageProps) {
  const language = getLanguageBySlug(params.slug);

  if (!language) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="rounded-[2rem] border border-sky-400/15 bg-slate-900/70 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-300">{language.name}</p>
        <h1 className="mt-3 text-4xl font-bold text-white">{language.tagline}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          {language.description}
        </p>
      </section>

      <section className="mt-10 space-y-8">
        {tierOrder.map((tier) => (
          <TierSection
            key={tier}
            languageSlug={language.slug}
            tier={tier}
            title={tierMeta[tier].label}
            description={tierMeta[tier].description}
            lessons={getLessonsForTier(language.slug, tier)}
          />
        ))}
      </section>
    </main>
  );
}
