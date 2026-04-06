import { profile } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
        <div>
          <p className="font-mono text-sm text-accent">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="text-muted-soft select-all">{profile.email.trim()}</span>
          <span className="hidden text-white/20 sm:inline">·</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-soft transition hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-mono text-xs text-slate-600">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
