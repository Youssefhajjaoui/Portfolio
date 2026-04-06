import { recommendations } from "../data/content";

export function Recommendations() {
  return (
    <section id="recommendations" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-accent">Social proof</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Recommendations</p>
          <p className="mt-3 text-muted-soft">Peers, clients, and partners I’ve worked with.</p>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6">
          {recommendations.map((r) => (
            <blockquote
              key={`${r.name}-${r.role}`}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8"
            >
              <div className="space-y-4 border-l-2 border-accent/35 pl-5">
                {r.paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-slate-300 sm:text-lg">
                    {p}
                  </p>
                ))}
              </div>
              <footer className="mt-6 flex flex-col gap-0.5 border-t border-white/10 pt-6">
                <cite className="not-italic font-semibold text-white">{r.name}</cite>
                <span className="text-sm text-muted">{r.role}</span>
                {r.context ? <span className="mt-2 text-xs text-slate-500">{r.context}</span> : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
