import { projects } from "../data/content";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-accent">Selected work</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Projects</p>
          <p className="mt-3 text-muted-soft">
            Systems tooling, full-stack web, and mobile apps — each with a distinct engineering story.
          </p>
        </div>
        <ul className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <li
              key={p.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-surface-850/80 p-6 transition hover:border-accent/25 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <span className="font-mono text-xs text-accent/90">0{i + 1}</span>
                <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-soft">
                  {p.role}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-accent-glow transition-colors">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-soft">{p.description}</p>
              <p className="mt-4 border-t border-white/10 pt-4 text-xs italic text-slate-500">{p.highlight}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
