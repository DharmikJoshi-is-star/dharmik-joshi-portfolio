"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = [
  { id: "top", label: "Home", href: "#top" },
  { id: "work", label: "Work", href: "#work" },
  { id: "posts", label: "Posts", href: "#posts" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Code", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-surface/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="font-mono text-sm tracking-tight text-ink hover:text-accent transition-colors"
        >
          dj<span className="text-accent">/</span>backend
        </Link>

        <ul className="hidden md:flex gap-8 text-sm">
          {sections.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`text-ink-muted hover:text-ink transition-colors ${
                  active === item.id ? "nav-link-active text-ink" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden font-mono text-xs text-ink-muted"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-line px-5 py-4 space-y-3 bg-surface-elevated">
          {sections.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="block font-mono text-sm text-ink-muted"
                onClick={() => setOpen(false)}
              >
                → {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
