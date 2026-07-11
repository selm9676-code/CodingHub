export type TierKey = "easy" | "medium" | "hard" | "expert";

export interface LanguageMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accentClass: string;
}

export interface LessonExercise {
  title: string;
  instructions: string;
}

export interface Lesson {
  slug: string;
  title: string;
  tier: TierKey;
  summary: string;
  goal: string;
  explanation: string[];
  codeLanguage: string;
  code: string;
  codeNotes: string[];
  commonMistakes: string[];
  exercise: LessonExercise;
  order: number;
}
