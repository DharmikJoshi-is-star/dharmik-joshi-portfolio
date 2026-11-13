"use client";

import Image from "next/image";
import { useState } from "react";
import { projectDemos, site } from "../../data/portfolio";

function thumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export default function ProjectDemosSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="demos" className="border-t border-line bg-surface-elevated/20 pb-20 pt-4">
      <div className="mx-auto max-w-5xl px-5">
        <p className="section-label">Demos</p>
        <h2 className="font-serif text-2xl text-ink md:text-3xl mb-2">
          Screen recordings
        </h2>
        <p className="text-sm text-ink-muted mb-8 max-w-xl">
          University-era projects — click a thumbnail to play. No autoplay until
          you choose one.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projectDemos.map((demo) => {
            const isPlaying = playingId === demo.videoId;
            return (
              <article key={demo.id} className="card-border rounded-lg overflow-hidden">
                <div className="relative aspect-video bg-surface">
                  {isPlaying ? (
                    <iframe
                      title={demo.title}
                      src={`https://www.youtube.com/embed/${demo.videoId}?autoplay=1`}
                      className="absolute inset-0 h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingId(demo.videoId)}
                      className="group absolute inset-0 w-full text-left"
                    >
                      <Image
                        src={thumbnailUrl(demo.videoId)}
                        alt=""
                        fill
                        className="object-cover opacity-90 transition group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" />
                      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white transition group-hover:scale-105">
                        <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3">
                  <h3 className="text-sm font-medium text-ink">{demo.title}</h3>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-accent hover:underline"
                  >
                    youtu.be ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <a
          href={site.links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block font-mono text-xs text-ink-faint hover:text-accent"
        >
          More on @dharmikjoshi1055 →
        </a>
      </div>
    </section>
  );
}
