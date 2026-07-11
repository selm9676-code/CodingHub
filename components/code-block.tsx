interface CodeBlockProps {
  code: string;
  language: string;
  notes: string[];
}

export function CodeBlock({ code, language, notes }: CodeBlockProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-sky-400/20 bg-slate-950 shadow-glow">
        <div className="flex items-center justify-between border-b border-sky-400/10 px-4 py-3">
          <span className="text-xs uppercase tracking-[0.25em] text-sky-300">
            {language}
          </span>
          <span className="text-xs text-slate-500">Commented example</span>
        </div>
        <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
          <code>{code}</code>
        </pre>
      </div>

      <div className="rounded-3xl border border-sky-300/10 bg-slate-900/70 p-5">
        <h3 className="mb-3 text-lg font-semibold text-white">What this code is doing</h3><ul className="space-y-3 text-sm leading-6 text-slate-300">
          {notes.map((note) => (
            <li key={note} className="flex gap-3">
              <span className="mt-1 text-sky-300">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
