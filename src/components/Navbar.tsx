import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";
import { ContactModal, type AnchorPosition } from "./ContactModal";

const links = [
  { href: "#summary", label: "Summary" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#recommendations", label: "Recommendations" },
];

function measureContactAnchor(el: HTMLElement | null): AnchorPosition | null {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const gap = 8;
  return {
    top: r.bottom + gap,
    right: window.innerWidth - r.right,
  };
}

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactAnchorPos, setContactAnchorPos] = useState<AnchorPosition | null>(null);
  const [contactSource, setContactSource] = useState<"desktop" | "mobile" | null>(null);

  const desktopContactRef = useRef<HTMLButtonElement>(null);
  const mobileContactRef = useRef<HTMLButtonElement>(null);

  function closeContact() {
    setContactOpen(false);
    setContactAnchorPos(null);
    setContactSource(null);
  }

  function openContact(fromMobile: boolean) {
    const ref = fromMobile ? mobileContactRef : desktopContactRef;
    const pos = measureContactAnchor(ref.current);
    setContactAnchorPos(pos);
    setContactSource(fromMobile ? "mobile" : "desktop");
    setNavOpen(false);
    setContactOpen(true);
  }

  useEffect(() => {
    if (!contactOpen || contactSource !== "desktop") return;
    const update = () => {
      const pos = measureContactAnchor(desktopContactRef.current);
      if (pos) setContactAnchorPos(pos);
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [contactOpen, contactSource]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-surface-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-accent transition hover:text-accent-glow"
          onClick={() => setNavOpen(false)}
        >
          {"<"}
          {profile.name.split(" ")[0] || "dev"}
          {" />"}
        </a>
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-soft transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            ref={desktopContactRef}
            type="button"
            className="hidden rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent/60 hover:bg-accent/15 sm:inline-flex"
            onClick={() => openContact(false)}
          >
            Contact
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white sm:hidden"
            aria-expanded={navOpen}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((o) => !o)}
          >
            {navOpen ? (
              <span className="text-lg leading-none">×</span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
                <span className="h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>
        </div>
      </nav>
      {navOpen ? (
        <div className="border-t border-white/5 bg-surface-950/95 px-4 py-4 sm:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-lg px-3 py-3 text-sm text-muted-soft transition hover:bg-white/5 hover:text-white"
                  onClick={() => setNavOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                ref={mobileContactRef}
                type="button"
                className="mt-2 w-full rounded-lg border border-accent/30 bg-accent/10 px-3 py-3 text-center text-sm font-medium text-accent"
                onClick={() => openContact(true)}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      ) : null}
      <ContactModal isOpen={contactOpen} onClose={closeContact} anchorPosition={contactAnchorPos} />
    </header>
  );
}
