"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skillGroups, skills as allSkills } from "../../data/portfolio";

export default function SkillsSection() {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const displayed = useMemo(() => {
    if (!filter) return [...allSkills];
    const bucket = skillGroups[filter];
    return bucket ? [...bucket] : [...allSkills];
  }, [filter]);

  return (
    <section id="skills" className="border-t border-line bg-surface-elevated/30 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="section-label">Skills</p>
        <h2 className="font-serif text-3xl text-ink md:text-4xl mb-2">
          What I reach for
        </h2>
        <p className="text-sm text-ink-muted mb-10 max-w-lg">
          Hover a tag for a little wiggle. Filter by lane if you&apos;re
          skimming for something specific.
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`font-mono text-xs px-3 py-1 rounded border transition ${
              filter === null
                ? "border-accent text-accent"
                : "border-line text-ink-faint hover:text-ink"
            }`}
          >
            all
          </button>
          {Object.keys(skillGroups).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`font-mono text-xs px-3 py-1 rounded border transition ${
                filter === key
                  ? "border-accent text-accent"
                  : "border-line text-ink-faint hover:text-ink"
              }`}
            >
              {key.toLowerCase()}
            </button>
          ))}
        </div>

        <motion.ul layout className="flex flex-wrap gap-3">
          {displayed.map((skill, index) => (
            <motion.li
              key={skill}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              <button
                type="button"
                onMouseEnter={() => setActive(skill)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(skill)}
                onBlur={() => setActive(null)}
                className={`skill-pill rounded-full border border-line px-4 py-2 text-sm ${
                  active === skill ? "border-accent text-ink" : "text-ink-muted"
                }`}
              >
                {skill}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {active && (
          <p className="mt-8 font-mono text-xs text-ink-faint">
            {`// ${active} — used in production, not résumé filler`}
          </p>
        )}
      </div>
    </section>
  );
}
