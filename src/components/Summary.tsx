import { summary } from "../data/content";

export function Summary() {
  return (
    <section id="summary" className="scroll-mt-24 border-t border-white/5 bg-surface-900/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:w-1/3">
            <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
              {summary.headline}
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">Quick summary</p>
          </div>
          <div className="lg:flex-1">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-slate-300 text-balance">{summary.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
