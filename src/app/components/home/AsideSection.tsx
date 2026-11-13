"use client";

import { awards, certificates, education } from "../../data/portfolio";

export default function AsideSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-3">
        <AsideCard title="Education">
          <p className="font-medium">{education.degree}</p>
          <p className="text-sm text-ink-muted">{education.school}</p>
          <p className="font-mono text-xs text-ink-faint mt-2">
            {education.detail} · {education.period}
          </p>
        </AsideCard>

        <AsideCard title="Awards">
          <ul className="space-y-3 text-sm">
            {awards.map((a) => (
              <li key={a.name}>
                <span className="text-ink">{a.name}</span>
                <span className="block text-ink-muted">
                  {a.org} · {a.period}
                </span>
              </li>
            ))}
          </ul>
        </AsideCard>

        <AsideCard title="Certs">
          <ul className="text-sm text-ink-muted space-y-2">
            {certificates.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a
            href="#demos"
            className="mt-6 inline-block font-mono text-xs text-accent hover:underline"
          >
            project demos on this page ↗
          </a>
        </AsideCard>
      </div>
    </section>
  );
}

function AsideCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-border rounded-lg p-5">
      <p className="section-label mb-3">{title}</p>
      {children}
    </div>
  );
}
