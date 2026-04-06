import { experience } from "../data/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/5 bg-surface-900/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-accent">Background</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Experience</p>
          <p className="mt-3 text-muted-soft">Recent roles and product contexts — tune dates and employers in your content file.</p>
        </div>
        <ol className="relative space-y-0 border-l border-white/10 pl-8 sm:pl-10">
          {experience.map((job) => (
            <li key={job.company + job.period} className="relative pb-12 last:pb-0">
              <span
                className="absolute top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface-950 bg-accent shadow-[0_0_12px_rgba(34,211,238,0.6)] -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)]"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                <span className="font-mono text-sm text-muted">{job.period}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-accent/90">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
