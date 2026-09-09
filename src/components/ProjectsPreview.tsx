"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/nodes";

export default function ProjectsPreview() {
  const [selectedId, setSelectedId] = useState(PROJECTS[0]?.id ?? "");
  const selected = PROJECTS.find((project) => project.id === selectedId) ?? PROJECTS[0];

  const selectRelative = (currentId: string, delta: number) => {
    const index = PROJECTS.findIndex((project) => project.id === currentId);
    if (index < 0) return;
    const nextIndex = (index + delta + PROJECTS.length) % PROJECTS.length;
    setSelectedId(PROJECTS[nextIndex].id);
  };

  return (
    <section id="projects" className="projects-section projects-selector-section">
      <div className="section-head">CH.02 — PROJECTS</div>
      <div className="project-selector-head">
        <div>
          <h2>PROJECT INDEX</h2>
          <p>เลือกงานที่ต้องการดูรายละเอียด</p>
        </div>
        <span className="project-selector-count">{PROJECTS.length.toString().padStart(2, "0")} ENTRIES</span>
      </div>
      <div className="project-selector">
        <div className="project-index-list" role="list" aria-label="Project index">
          {PROJECTS.map((project) => {
            const active = project.id === selected?.id;
            return (
              <button
                key={project.id}
                type="button"
                className={`project-index-item${active ? " active" : ""}`}
                onClick={() => setSelectedId(project.id)}
                onMouseEnter={() => setSelectedId(project.id)}
                aria-pressed={active}
                aria-label={`${project.index}: ${project.title}`}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                    event.preventDefault();
                    selectRelative(project.id, 1);
                  }
                  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    selectRelative(project.id, -1);
                  }
                  if (event.key === "Home") {
                    event.preventDefault();
                    setSelectedId(PROJECTS[0].id);
                  }
                  if (event.key === "End") {
                    event.preventDefault();
                    setSelectedId(PROJECTS[PROJECTS.length - 1].id);
                  }
                }}
              >
                <span className="project-index-number">{project.index}</span>
                <span className="project-index-title">{project.title}</span>
                <span className="project-index-arrow" aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>
        {selected && (
          <article className="project-preview-panel" aria-live="polite">
            <span className="project-preview-kicker">{selected.index} / {selected.id.toUpperCase()}</span>
            <h3>{selected.title}</h3>
            <div className="project-preview-tags">{selected.tags ?? "SYSTEM / DEVELOPMENT"}</div>
            <p>{selected.description}</p>
            <div className="project-preview-footer">
              <span>CASE STUDY / READY</span>
              <Link className="view-link" href={`/projects/${selected.id}`}>
                OPEN CASE STUDY →
              </Link>
            </div>
          </article>
        )}
      </div>
      <div className="project-archive-note">
        <span>INDEX / WORKS</span>
        <small>Hover, select, or use arrow keys to inspect the work.</small>
      </div>
    </section>
  );
}
