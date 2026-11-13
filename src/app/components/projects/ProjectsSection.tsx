"use client";

import { openSourceProjects, projectDemos, site } from "../../data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20">
      <p className="section-label">Open source</p>
      <h2 className="font-serif text-3xl text-ink md:text-4xl mb-3">
        Side repos & older builds
      </h2>
      <p className="text-sm text-ink-muted mb-10 max-w-2xl">
        My day job is mostly private infra — these are public GitHub projects from
        earlier years, still linked for curiosity.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {openSourceProjects.map((project, i) => {
          const demo = projectDemos.find((d) => d.projectId === project.id);
          return (
            <div
              key={project.id}
              className="card-border group rounded-lg p-5 transition hover:border-accent/30"
              style={{ transform: `rotate(${i === 1 ? -0.4 : i === 2 ? 0.6 : 0}deg)` }}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="font-medium text-ink group-hover:text-accent transition-colors">
                  {project.title}
                  <span className="ml-1 font-mono text-xs text-ink-faint">↗</span>
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {project.description}
                </p>
              </a>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {project.technologies.map((t) => (
                  <span key={t} className="font-mono text-[10px] text-ink-faint">
                    {t}
                  </span>
                ))}
                {demo && (
                  <a
                    href={`#demos`}
                    className="ml-auto font-mono text-[10px] text-accent hover:underline"
                  >
                    watch demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <a
        href={site.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block font-mono text-sm text-accent hover:underline"
      >
        github.com/DharmikJoshi-is-star →
      </a>
    </section>
  );
}
