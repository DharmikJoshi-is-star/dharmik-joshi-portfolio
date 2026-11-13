"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "../../data/portfolio";

const terminalLines = [
  "$ kubectl get pods -l app=account-sse-gateway",
  "NAME                          READY   STATUS",
  "account-sse-gateway-7f8c-abc   1/1     Running",
  "account-sse-gateway-7f8c-def   1/1     Running",
  "$ curl -N -H \"Authorization: Bearer …\" /stream/accounts",
  "event: account.updated",
  'data: {"accountId":"…","fields":["dns","ssl"]}',
  "// still connected — keepalive ping every 25s",
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const full = terminalLines[lineIndex] ?? "";
    let i = 0;
    setDisplayed("");

    const typeTimer = setInterval(() => {
      i += 1;
      setDisplayed(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(typeTimer);
        const pause = setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % terminalLines.length);
        }, 1400);
        return () => clearTimeout(pause);
      }
    }, 22);

    return () => clearInterval(typeTimer);
  }, [lineIndex]);

  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl px-5 pb-20 pt-8 md:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start"
      >
        <div>
          <p className="section-label mb-4">Mumbai · Senior SDE</p>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            I build backends that{" "}
            <span className="italic text-accent">feel instant</span> in the
            browser.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{site.tagline}</p>

          <p className="mt-4 max-w-xl text-ink-faint text-sm leading-relaxed">
            Right now at Newfold Digital — SSE gateways, MCP servers, and
            RabbitMQ pipelines. Before that, lending and payments at ShopSe for
            millions of checkout sessions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="rounded-sm border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-surface transition hover:bg-transparent hover:text-accent"
            >
              See the work
            </Link>
            <Link
              href={site.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-ink-muted underline-offset-4 hover:text-accent hover:underline"
            >
              resume.pdf
            </Link>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-ink-muted hover:text-ink"
            >
              github ↗
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Focus
              </dt>
              <dd className="mt-1 text-sm">Event-driven APIs</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Stack
              </dt>
              <dd className="mt-1 text-sm">Java · Spring · K8s</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Reach
              </dt>
              <dd className="mt-1 text-sm">
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="card-border rounded-lg p-1 shadow-[0_20px_60px_-30px_var(--glow)]">
          <div className="rounded-md bg-[#0d0c0b] px-4 py-3 font-mono text-xs leading-relaxed text-[#c4b8a8] min-h-[220px]">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#5c4a3a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#7a6348]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#a8845a]" />
            </div>
            <p className="whitespace-pre-wrap break-all">
              {displayed}
              <span className="terminal-cursor text-accent">▋</span>
            </p>
          </div>
          <p className="px-3 py-2 font-mono text-[10px] text-ink-faint">
            {"// a slice of what I shipped — not a stock illustration"}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
