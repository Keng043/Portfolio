import { PROJECTS } from "@/data/nodes";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-head">CH.02 — PROJECTS</div>
      <h2>Systems I&apos;ve built and shipped.</h2>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <div key={p.id} className="project-card">
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
            <div className="idx">{p.index}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a className="view-link" href={p.href} target="_blank" rel="noopener noreferrer">
              VIEW PROJECT →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
