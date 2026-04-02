import { useEffect } from "react";
import { profile } from "../data/content";

export type AnchorPosition = { top: number; right: number };

type Props = {
  isOpen: boolean;
  onClose: () => void;
  /** Pixel position for dropdown (below trigger). If null, panel is centered. */
  anchorPosition: AnchorPosition | null;
};

function IconMail() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 6h16v12H4V6z" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const rows = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    sub: profile.email,
    icon: IconMail,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    sub: profile.links.linkedin.replace(/^https?:\/\//, ""),
    icon: IconLinkedIn,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    sub: profile.links.github.replace(/^https?:\/\//, ""),
    icon: IconGitHub,
  },
] as const;

export function ContactModal({ isOpen, onClose, anchorPosition }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const anchored = anchorPosition != null;
  const panelStyle = anchored
    ? {
        top: anchorPosition.top,
        right: Math.max(16, anchorPosition.right),
      }
    : {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)" as const,
      };

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close contact dialog"
        onClick={onClose}
      />
      <div
        className="absolute z-10 w-[min(28rem,calc(100vw-2rem))] max-h-[min(85vh,calc(100vh-2rem))] overflow-y-auto rounded-2xl border border-white/10 bg-surface-900 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.5)]"
        style={panelStyle}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
          <div>
            <h2 id="contact-modal-title" className="text-lg font-semibold text-white">
              Get in touch
            </h2>
            <p className="mt-1 text-sm text-muted">Choose how you’d like to connect.</p>
          </div>
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-muted-soft transition hover:bg-white/5 hover:text-white"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>
        <ul className="divide-y divide-white/10 p-2">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <li key={row.label}>
                <a
                  href={row.href}
                  target={row.label === "Email" ? undefined : "_blank"}
                  rel={row.label === "Email" ? undefined : "noreferrer"}
                  className="flex items-center gap-4 rounded-xl px-4 py-4 transition hover:bg-white/[0.04]"
                  onClick={onClose}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium text-white">{row.label}</span>
                    <span className="mt-0.5 block truncate font-mono text-xs text-muted-soft">{row.sub}</span>
                  </span>
                  <span className="text-muted" aria-hidden>
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
