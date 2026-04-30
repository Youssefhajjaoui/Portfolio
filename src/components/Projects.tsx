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
          <p className="mt-2 font-mono text-xs text-muted sm:hidden">Swipe sideways for more →</p>
        </div>
        <div
          className="-mx-4 overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth px-4 pb-3 [scrollbar-width:thin] [scrollbar-color:rgba(148,163,184,0.35)_transparent] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25"
          role="region"
          aria-label="Project cards"
        >
          <ul className="flex w-max snap-x snap-mandatory gap-5 sm:gap-6 md:gap-8">
            {projects.map((p, i) => {
              const cardClass =
                "group flex h-full min-h-[280px] w-[min(85vw,22rem)] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-surface-850/80 p-6 transition hover:border-accent/25 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)] sm:w-96";

              return (
                <li key={p.name} className="flex">
                  <div className={cardClass}>
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
                    {p.why ? (
                      <p className="mt-3 text-xs leading-relaxed text-muted-soft">
                        <span className="font-medium text-slate-400">Why / tradeoffs: </span>
                        {p.why}
                      </p>
                    ) : null}
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
                    {(p.link || p.liveDemo) && (
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 font-mono text-xs">
                        {p.link ? (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent transition hover:text-accent-glow hover:underline"
                          >
                            Source (GitHub)
                          </a>
                        ) : null}
                        {p.liveDemo ? (
                          <a
                            href={p.liveDemo}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent transition hover:text-accent-glow hover:underline"
                          >
                            Live demo
                          </a>
                        ) : null}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
