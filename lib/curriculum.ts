import { languages } from "@/data/languages";
import type { LanguageMeta, Lesson, TierKey } from "@/types/curriculum";

const lessonMap: Record<string, Lesson[]> = {
  python: [
    {
      slug: "python-print-and-variables",
      title: "Python print() and variables",
      tier: "easy",
      summary: "Learn how Python shows text on the screen and stores values in variables.",
      goal: "By the end of this lesson, you will be able to store simple values in variables and display them with print().",
      explanation: [
        "A variable is a named box that stores a value.",
        "The print() function tells Python to show something in the output area.",
        "Using variables makes your programs easier to read and update."
      ],
      codeLanguage: "python",
      code: `student_name = 'Alya'
completed_lessons = 3

print('Welcome to Coding Hub!')
print(student_name)
print(completed_lessons)
print(student_name, 'has finished', completed_lessons, 'lessons.')`,
      codeNotes: [
        "student_name stores text.",
        "completed_lessons stores a number.",
        "print() shows the values on the screen."
      ],
      commonMistakes: [
        "Forgetting quotes around text.",
        "Using a variable before giving it a value.",
        "Missing parentheses in print()."
      ],
      exercise: {
        title: "Make your own welcome message",
        instructions: "Create a variable for your name and print a sentence using it."
      },
      order: 1
    }
  ],
  javascript: [
    {
      slug: "javascript-variables-and-console",
      title: "JavaScript variables and console.log()",
      tier: "easy",
      summary: "Learn how to save values in JavaScript and display them with console.log().",
      goal: "By the end of this lesson, you will be able to create simple variables and print their values in JavaScript.",
      explanation: [
        "A variable stores data so you can use it later.",
        "console.log() prints information to the browser console.",
        "This helps beginners inspect what their code is doing."
      ],
      codeLanguage: "javascript",
      code: `const learnerName = 'Rafi';
const lessonCount = 4;

console.log('Welcome to Coding Hub!');
console.log(learnerName);
console.log(lessonCount);
console.log(learnerName, 'has finished', lessonCount, 'JavaScript lessons.');`,
      codeNotes: [
        "const creates a variable.",
        "console.log() prints values.",
        "The final line combines text and variables."
      ],
      commonMistakes: [
        "Misspelling console.log().",
        "Using a variable that was never declared.",
        "Mixing up strings and variables."
      ],
      exercise: {
        title: "Introduce a learner",
        instructions: "Create a learner name variable and print a sentence with console.log()."
      },
      order: 1
    }
  ],
  html: [
    {
      slug: "html-page-structure",
      title: "HTML page structure",
      tier: "easy",
      summary: "Learn the basic structure that holds a normal HTML page together.",
      goal: "By the end of this lesson, you will be able to write a simple HTML page structure.",
      explanation: [
        "HTML uses tags to describe parts of a page.",
        "A page usually has html, head, and body sections.",
        "The body contains the visible content."
      ],
      codeLanguage: "html",
      code: `<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Coding Hub</title>
  </head>
  <body>
    <h1>Welcome to Coding Hub</h1>
    <p>This is a simple HTML page.</p>
  </body>
</html>`,
      codeNotes: [
        "DOCTYPE tells the browser to use modern HTML.",
        "head stores page info like the title.",
        "body stores the content users see."
      ],
      commonMistakes: [
        "Putting visible content inside the head.",
        "Forgetting closing tags.",
        "Misspelling common tags."
      ],
      exercise: {
        title: "Build your first page shell",
        instructions: "Create a page with a title, one heading, and one paragraph."
      },
      order: 1
    }
  ],
  css: [
    {
      slug: "css-selectors-and-colors",
      title: "CSS selectors and colors",
      tier: "easy",
      summary: "Learn how CSS targets HTML elements and changes their color.",
      goal: "By the end of this lesson, you will be able to style simple HTML elements with CSS.",
      explanation: [
        "CSS controls how HTML looks.",
        "Selectors decide what gets styled.",
        "Properties like color change appearance."
      ],
      codeLanguage: "css",
      code: `h1 {
  color: #38bdf8;
}

p {
  color: #cbd5e1;
  background-color: #0f172a;
}`,
      codeNotes: [
        "h1 and p are selectors.",
        "color changes text color.",
        "background-color changes the background."
      ],
      commonMistakes: [
        "Forgetting semicolons.",
        "Using the wrong selector.",
        "Misspelling property names."
      ],
      exercise: {
        title: "Style a heading and paragraph",
        instructions: "Add one style rule for h1 and one for p."
      },
      order: 1
    }
  ],
  java: [
    {
      slug: "java-first-program",
      title: "Java first program",
      tier: "easy",
      summary: "Learn how a basic Java program is structured and how it prints text.",
      goal: "By the end of this lesson, you will be able to read and write a simple Java program.",
      explanation: [
        "Java programs are organized inside classes.",
        "The main method is where the program starts.",
        "System.out.println() prints text to the console."
      ],
      codeLanguage: "java",
      code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Welcome to Coding Hub!");
  }
}`,
      codeNotes: [
        "Main is the class name.",
        "main is the starting method.",
        "System.out.println() prints text."
      ],
      commonMistakes: [
        "Forgetting semicolons.",
        "Using the wrong capitalization.",
        "Missing curly braces."
      ],
      exercise: {
        title: "Print your own message",
        instructions: "Write a Java program that prints your name."
      },
      order: 1
    }
  ],
  rust: [
    {
      slug: "rust-hello-and-variables",
      title: "Rust hello world and variables",
      tier: "easy",
      summary: "Learn how a simple Rust program prints text and stores values in variables.",
      goal: "By the end of this lesson, you will be able to print text in Rust and create simple variables.",
      explanation: [
        "Rust is stricter than some beginner languages, but the first steps are still manageable.",
        "println! prints text to the terminal.",
        "let creates a variable."
      ],
      codeLanguage: "rust",
      code: `fn main() {
    println!("Welcome to Coding Hub!");
    let learner_name = "Sora";
    println!("{} is learning Rust.", learner_name);
}`,
      codeNotes: [
        "fn main() is the entry point.",
        "println! prints text.",
        "let creates a variable."
      ],
      commonMistakes: [
        "Forgetting the ! in println!.",
        "Leaving out semicolons.",
        "Misspelling variable names."
      ],
      exercise: {
        title: "Introduce a learner in Rust",
        instructions: "Create a learner_name variable and print a sentence with it."
      },
      order: 1
    }
  ]
};

export const tierMeta: Record<TierKey, { label: string; description: string }> = {
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

export function getLessonBySlug(languageSlug: string, lessonSlug: string): Lesson | undefined {
  return getLessonsForLanguage(languageSlug).find((lesson) => lesson.slug === lessonSlug);
}

export function getNextLesson(languageSlug: string, currentLessonSlug: string): Lesson | undefined {
  const lessons = getLessonsForLanguage(languageSlug);
  const currentIndex = lessons.findIndex((lesson) => lesson.slug === currentLessonSlug);

  if (currentIndex === -1) return undefined;

  return lessons[currentIndex + 1];
}
