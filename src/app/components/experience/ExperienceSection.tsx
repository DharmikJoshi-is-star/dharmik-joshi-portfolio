"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { experience } from "../../data/portfolio";

export default function ExperienceSection() {
  const [openJob, setOpenJob] = useState(experience[0].id);
  const [openHighlight, setOpenHighlight] = useState<string | null>(
    experience[0].highlights[0]?.id ?? null
  );

  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-20">
      <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">Experience</p>
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Where I&apos;ve shipped
          </h2>
        </div>
        <p className="font-mono text-xs text-ink-faint max-w-xs">
          Click a role, then a project — details stay out of the way until you
          want them.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-3 lg:w-2/5">
          {experience.map((job) => {
            const isOpen = openJob === job.id;
            return (
              <button
                key={job.id}
                type="button"
                onClick={() => {
                  setOpenJob(job.id);
                  setOpenHighlight(job.highlights[0]?.id ?? null);
                }}
                className={`card-border rounded-lg p-4 text-left transition ${
                  isOpen ? "border-accent/40 ring-1 ring-accent/20" : "hover:border-line"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface p-1.5">
                    <Image
                      src={job.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-ink">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {job.company} ↗
                      </a>
                    </p>
                    <p className="text-sm text-ink-muted">{job.role}</p>
                    <p className="font-mono text-[10px] text-ink-faint mt-0.5">
                      {job.period}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:w-3/5">
          {experience
            .filter((j) => j.id === openJob)
            .map((job) => (
              <div key={job.id}>
                <div className="mb-6 flex flex-wrap items-baseline gap-2">
                  <h3 className="font-serif text-2xl">{job.role}</h3>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-accent hover:underline"
                  >
                    {job.location} ↗
                  </a>
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((h) => {
                    const expanded = openHighlight === h.id;
                    return (
                      <li key={h.id} className="card-border rounded-lg overflow-hidden">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left hover:bg-white/[0.02]"
                          onClick={() =>
                            setOpenHighlight(expanded ? null : h.id)
                          }
                          aria-expanded={expanded}
                        >
                          <span className="text-sm font-medium">{h.title}</span>
                          <span className="font-mono text-accent text-lg leading-none">
                            {expanded ? "−" : "+"}
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <ul className="space-y-3 border-t border-line px-4 py-4 text-sm text-ink-muted">
                                {h.bullets.map((b) => (
                                  <li key={b} className="flex gap-2">
                                    <span className="text-accent shrink-0">·</span>
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
                                {h.stack.map((t) => (
                                  <span
                                    key={t}
                                    className="font-mono text-[10px] uppercase tracking-wide text-ink-faint border border-line rounded px-2 py-0.5"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
