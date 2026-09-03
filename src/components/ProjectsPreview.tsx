import Link from "next/link";
import { NODES, PROJECTS } from "@/data/nodes";

export default function ProjectsPreview() {
  const nodeById = Object.fromEntries(NODES.map((node) => [node.id, node]));

  return (
    <section id="projects" className="projects-section">
      <div className="section-head">CH.02 — PROJECTS</div>
      <h2>Systems I&apos;ve built and shipped.</h2>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <article key={p.id} className="project-card">
            <span className="corner tl" /><span className="corner tr" />
            <span className="corner bl" /><span className="corner br" />
            <div className="idx">{p.index}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-meta">
              <span>NODE / {p.id.toUpperCase()}</span>
              <span>{nodeById[p.id]?.tags}</span>
            </div>
            <div className="project-footer">
              <span className="project-status">PROJECT DETAIL</span>
              <Link className="view-link" href={`/projects/${p.id}`}>
                VIEW CASE STUDY →
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="project-archive-note">
        <span>ARCHIVE / WORKS</span>
        <small>Project details are being documented as the portfolio grows.</small>
      </div>
    </section>
  );
}
