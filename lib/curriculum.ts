import { languages } from "@/data/languages";
import pythonLessons from "@/data/lessons/python.json";
import javascriptLessons from "@/data/lessons/javascript.json";
import htmlLessons from "@/data/lessons/html.json";
import cssLessons from "@/data/lessons/css.json";
import javaLessons from "@/data/lessons/java.json";
import rustLessons from "@/data/lessons/rust.json";
import type { LanguageMeta, Lesson, TierKey } from "@/types/curriculum";

const lessonMap: Record<string, Lesson[]> = {
  python: pythonLessons as Lesson[],
  javascript: javascriptLessons as Lesson[],
  html: htmlLessons as Lesson[],
  css: cssLessons as Lesson[],
  java: javaLessons as Lesson[],
  rust: rustLessons as Lesson[]
};

export const tierMeta: Record<
  TierKey,
  { label: string; description: string }
> = {
  easy: {
    label: "Easy",
    description: "Start here if you are brand new. Focus on basics, confidence, and simple wins."
  },
  medium: {
    label: "Medium",
    description: "Combine ideas, write reusable logic, and build small practical projects."
  },
  hard: {
    label: "Hard",
    description: "Learn deeper language features, structure, debugging, and real-world patterns."
  },
  expert: {
    label: "Expert",
    description: "Focus on advanced practical mastery, architecture, and stronger coding habits."
  }
};

export function getLanguages(): LanguageMeta[] {
  return languages;
}

export function getLanguageBySlug(slug: string): LanguageMeta | undefined {
  return languages.find((language) => language.slug === slug);
}

export function getLessonsForLanguage(slug: string): Lesson[] {
  const lessons = lessonMap[slug] ?? [];
  return [...lessons].sort((a, b) => a.order - b.order);
}

export function getLessonsForTier(slug: string, tier: TierKey): Lesson[] {
  return getLessonsForLanguage(slug).filter((lesson) => lesson.tier === tier);
}

export function getLessonBySlug(
  languageSlug: string,
  lessonSlug: string
): Lesson | undefined {
  return getLessonsForLanguage(languageSlug).find(
    (lesson) => lesson.slug === lessonSlug
  );
}

export function getNextLesson(
  languageSlug: string,
  currentLessonSlug: string
): Lesson | undefined {
  const lessons = getLessonsForLanguage(languageSlug);
  const currentIndex = lessons.findIndex(
    (lesson) => lesson.slug === currentLessonSlug
  );

  if (currentIndex === -1) return undefined;

  return lessons[currentIndex + 1];
}
