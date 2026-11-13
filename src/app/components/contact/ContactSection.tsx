"use client";

import { site } from "../../data/portfolio";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/eng-dj",
    href: site.links.linkedin,
  },
  {
    label: "GitHub",
    value: "DharmikJoshi-is-star",
    href: site.links.github,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 pb-24 pt-8">
      <p className="section-label">Contact</p>
      <h2 className="font-serif text-3xl text-ink md:text-4xl mb-4">
        Let&apos;s talk backend
      </h2>
      <p className="text-ink-muted max-w-xl mb-10">
        No form that pretends to send mail — pick a channel below. I usually reply
        within a day or two.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {channels.map((ch) => (
          <li key={ch.label}>
            <a
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-border flex flex-col rounded-lg px-4 py-4 transition hover:border-accent/40 group"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                {ch.label}
              </span>
              <span className="mt-1 text-ink group-hover:text-accent transition-colors">
                {ch.value}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/919096167416`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-ink-muted hover:text-ink"
      >
        WhatsApp →
      </a>
    </section>
  );
}
