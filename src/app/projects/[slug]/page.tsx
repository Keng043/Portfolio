import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageLightbox from "@/components/ImageLightbox";
import { PROJECT_DETAILS, getProjectDetail } from "@/data/projectDetails";

export function generateStaticParams() {
  return PROJECT_DETAILS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) notFound();

  return (
    <main className="project-detail-page">
      <header className="project-detail-nav">
        <Link href="/#projects" className="detail-back">← CH.02 / PROJECTS</Link>
        <span>KONG // PROJECT LOG</span>
      </header>

      <section className="project-detail-hero">
        <div className="detail-kicker">{project.index} · {project.status}</div>
        <div className="detail-title-row">
          <div>
            <p className="detail-category">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="detail-summary">{project.summary}</p>
          </div>
          <div className="detail-meta-panel">
            <span>YEAR</span><strong>{project.year}</strong>
            <span>TYPE</span><strong>{project.category}</strong>
            {project.team && <><span>TEAM</span><strong>{project.team}</strong></>}
          </div>
        </div>
      </section>

      {project.images ? (
        <section className="project-gallery project-gallery-real" aria-label="Project image gallery">
          {project.images.map((image, index) => (
            <figure className={index === 0 ? "gallery-image gallery-image-main" : "gallery-image"} key={image.src}>
              <ImageLightbox src={image.src} alt={image.caption ?? `${project.title} image ${index + 1}`} label={image.label} />
              <figcaption><span>{image.label}</span>{image.caption && <small>{image.caption}</small>}</figcaption>
            </figure>
          ))}
        </section>
      ) : (
        <section className="project-gallery" aria-label="Project image gallery">
          <div className="gallery-placeholder main-placeholder"><span>IMAGE 01</span><strong>PROJECT HERO IMAGE</strong><small>วางรูปโปรเจกต์หลักตรงนี้ภายหลัง</small></div>
          <div className="gallery-placeholder"><span>IMAGE 02</span><strong>DETAIL / PROCESS</strong></div>
          <div className="gallery-placeholder"><span>IMAGE 03</span><strong>RESULT / PROTOTYPE</strong></div>
        </section>
      )}

      {project.motivation && (
        <section className="project-context">
          <div className="section-kicker">PROJECT CONTEXT</div>
          <div className="context-grid">
            <article><span>01 / MOTIVATION</span><p>{project.motivation}</p></article>
            {project.event && <article><span>02 / AWARD CONTEXT</span><p>{project.event}</p></article>}
          </div>
        </section>
      )}

      <section className="project-story">
        <StoryBlock number="01" title="PROBLEM" text={project.problem} />
        <StoryBlock number="02" title="SOLUTION" text={project.solution} />
        <StoryBlock number="03" title="MY ROLE" text={project.role} />
        <StoryBlock number="04" title="RESULT" text={project.result} />
      </section>

      {project.howItWorks && (
        <section className="project-how-it-works">
          <div className="section-kicker">SYSTEM FLOW</div>
          <h2>How it works</h2>
          <p>{project.howItWorks}</p>
        </section>
      )}

      <section className="project-tech">
        <div className="section-kicker">TECHNICAL PROFILE</div>
        <h2>Built with</h2>
        <div className="tech-list">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </section>

      {project.achievement && (
        <section className="project-achievement">
          <div className="section-kicker">ACHIEVEMENT</div>
          <div className="achievement-panel">
            <span>AWARD / {project.year}</span>
            <strong>{project.achievement}</strong>
            {project.team && <small>{project.team}</small>}
          </div>
        </section>
      )}

      {project.members && (
        <section className="project-credits">
          <div className="section-kicker">TEAM / CREDITS</div>
          <div className="credits-panel">
            <div><span>INSTITUTION</span><strong>{project.institution}</strong></div>
            <div><span>TEAM</span><strong>{project.team}</strong></div>
            <div><span>STUDENT MEMBERS</span><ul>{project.members.map((member) => <li key={member}>{member}</li>)}</ul></div>
            {project.advisor && <div><span>ADVISOR</span><strong>{project.advisor}</strong></div>}
            {project.eventDate && <div><span>DATE</span><strong>{project.eventDate}</strong></div>}
            {project.location && <div><span>LOCATION</span><strong>{project.location}</strong></div>}
          </div>
        </section>
      )}

      <footer className="project-detail-footer">
        <Link href="/#projects" className="detail-back">← BACK TO PROJECTS</Link>
        <Link href="/#contact" className="detail-contact">ESTABLISH CONNECTION →</Link>
      </footer>
    </main>
  );
}

function StoryBlock({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <article className="story-block">
      <span>{number} / {title}</span>
      <div><h2>{title}</h2><p>{text}</p></div>
    </article>
  );
}
