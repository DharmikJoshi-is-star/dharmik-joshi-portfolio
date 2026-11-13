import Link from "next/link";
import { site } from "../../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-elevated">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-12 sm:flex-row sm:justify-between sm:items-center">
        <p className="font-mono text-sm text-ink-muted">
          © {year} {site.name} · built with Next.js — hand-edited, not a template.
        </p>
        <div className="flex gap-6 font-mono text-xs">
          <Link href="#work" className="text-ink-faint hover:text-accent">
            work
          </Link>
          <a
            href={site.resumePdf}
            className="text-ink-faint hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          <a
            href={site.links.linkedin}
            className="text-ink-faint hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
