
# Coding Hub

Coding Hub is a free browser-based learning website where users can learn multiple coding languages in one place.

This Phase 1 version is focused on a clean, modern, beginner-friendly learning experience with:

- 6 launch languages
- 4 difficulty tiers
- reusable lesson pages
- JSON-based lesson content
- a sleek black-and-blue UI

## Phase 1 Languages

- Python
- JavaScript
- HTML
- CSS
- Java
- Rust

## Learning Tiers

- **Easy** — beginner foundations and first wins
- **Medium** — combining concepts and writing more useful code
- **Hard** — deeper language features and stronger structure
- **Expert** — advanced practical mastery

> In this first version, the site currently includes **Easy-tier starter lessons** and the structure for future expansion.

## Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **JSON lesson files**

## Features

- Modern homepage with black-and-blue visual style
- Language selector for all 6 Phase 1 languages
- Dedicated language pages
- Dedicated lesson pages
- Beginner-friendly explanations
- Code examples with helpful comments
- Reusable JSON lesson structure for future scaling

## Project Structure

```txt
coding-hub/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ languages/
│     └─ [slug]/
│        ├─ page.tsx
│        └─ lessons/
│           └─ [lessonSlug]/
│              └─ page.tsx
├─ components/
│  ├─ code-block.tsx
│  ├─ header.tsx
│  ├─ language-wheel.tsx
│  └─ tier-section.tsx
├─ data/
│  ├─ languages.ts
│  └─ lessons/
│     ├─ python.json
│     ├─ javascript.json
│     ├─ html.json
│     ├─ css.json
│     ├─ java.json
│     └─ rust.json
├─ lib/
│  └─ curriculum.ts
├─ types/
│  └─ curriculum.ts
├─ next.config.mjs
├─ next-env.d.ts
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
└─ tsconfig.json’’’

Getting Started
1. Install dependencies
npm install
2. Start the development server
npm run dev
3. Open the app
Visit:

http://localhost:3000
Running the Project
This project should be run in a terminal with Node.js installed.

Recommended:
Node.js 20+
npm 10+

If you are editing on mobile:
use Acode for editing files
use Termux or another proper terminal environment to run the app
Content System
Lesson content is stored in JSON files inside:

data/lessons/

Each lesson includes:
slug
title
tier
summary
goal
explanation
code example
code notes
common mistakes
exercise
order

This makes the project easier to expand later with:
more lessons
more tiers
more languages
search and filtering
progress tracking
Current Scope
This version includes:
homepage
language pages
lesson pages
Easy-tier starter lessons
reusable lesson rendering system
Planned Future Improvements
Medium / Hard / Expert lesson content
progress tracking
user accounts
search
bookmarks
improved animated language selector
deployment setup
more languages beyond the original 6
Goal of Coding Hub
The goal of Coding Hub is to create one free, organized place where beginners can learn many coding languages with clear explanations and helpful, commented examples.
## License