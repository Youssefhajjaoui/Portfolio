import { profile } from "../data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-accent"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Open to opportunities
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="block animate-fade-up opacity-0" style={{ animationDelay: "80ms", animationFillMode: "forwards" }}>
            {profile.name}
          </span>
          <span
            className="mt-2 block bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent animate-fade-up opacity-0"
            style={{ animationDelay: "160ms", animationFillMode: "forwards" }}
          >
            {profile.title}
          </span>
        </h1>
        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-soft animate-fade-up opacity-0 text-balance"
          style={{ animationDelay: "240ms", animationFillMode: "forwards" }}
        >
          {profile.tagline}
        </p>
        <p className="mt-3 font-mono text-sm text-muted">{profile.location}</p>
        <div
          className="mt-10 flex flex-wrap gap-3 animate-fade-up opacity-0"
          style={{ animationDelay: "320ms", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-glow"
          >
            View projects
          </a>
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Résumé / CV
            </a>
          ) : null}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.06]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
