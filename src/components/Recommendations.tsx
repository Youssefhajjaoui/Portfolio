import { recommendations } from "../data/content";

export function Recommendations() {
  return (
    <section id="recommendations" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-accent">Social proof</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">Recommendations</p>
          <p className="mt-3 text-muted-soft">
            Swap placeholders below for real quotes when you have permission to publish them.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((r) => (
            <blockquote
              key={r.name + r.quote.slice(0, 20)}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8"
            >
              <p className="text-lg leading-relaxed text-slate-300">&ldquo;{r.quote}&rdquo;</p>
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
