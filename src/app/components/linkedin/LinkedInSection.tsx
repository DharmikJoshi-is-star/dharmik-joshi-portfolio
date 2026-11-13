"use client";

import { useState } from "react";
import { linkedInPosts, site } from "../../data/portfolio";

function EmbedCard({ post }: { post: (typeof linkedInPosts)[number] }) {
  const canExpand =
    post.fullSrc &&
    post.fullHeight &&
    (post.fullHeight > post.collapsedHeight || post.fullSrc !== post.collapsedSrc);
  const [expanded, setExpanded] = useState(false);

  const src = expanded && post.fullSrc ? post.fullSrc : post.collapsedSrc;
  const height =
    expanded && post.fullHeight ? post.fullHeight : post.collapsedHeight;

  return (
    <article className="card-border rounded-lg overflow-hidden">
      <EmbedHeader
        label={post.label}
        expanded={expanded}
        canExpand={!!canExpand}
        onToggle={() => setExpanded((v) => !v)}
      />
      <div className="bg-[#f3f2ef] p-2 sm:p-3">
        <iframe
          key={`${post.id}-${expanded ? "full" : "collapsed"}`}
          src={src}
          title={`LinkedIn post ${post.id}`}
          height={height}
          className="w-full max-w-[504px] mx-auto block border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </article>
  );
}

function EmbedHeader({
  label,
  expanded,
  canExpand,
  onToggle,
}: {
  label: string;
  expanded: boolean;
  canExpand: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        {label}
      </span>
      {canExpand && (
        <button
          type="button"
          onClick={onToggle}
          className="font-mono text-xs text-accent hover:underline"
        >
          {expanded ? "Show less" : "Read full post"}
        </button>
      )}
    </div>
  );
}

export default function LinkedInSection() {
  return (
    <section id="posts" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="section-label">LinkedIn</p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl mb-2">
          Things I&apos;ve written there
        </h2>
        <p className="text-sm text-ink-muted mb-8 max-w-xl">
          Embedded straight from LinkedIn — expand if you want the long version.
          More on{" "}
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            my profile
          </a>
          .
        </p>

        <PostsGrid>
          {linkedInPosts.map((post) => (
            <EmbedCard key={post.id} post={post} />
          ))}
        </PostsGrid>

        <p className="mt-8 font-mono text-xs text-ink-faint">
          Companies:{" "}
          <a
            href={site.links.shopse}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            ShopSe
          </a>
          {" · "}
          <a
            href={site.links.newfold}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Newfold
          </a>
        </p>
      </div>
    </section>
  );
}

function PostsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">{children}</div>
  );
}
