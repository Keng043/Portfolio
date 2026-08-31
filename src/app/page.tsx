import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import SystemMap from "@/components/SystemMap";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-kicker">CH.01 — ABOUT / SYSTEM PROFILE</div>
      <div className="about-grid">
        <div>
          <h2>Curious about how software can understand the world.</h2>
          <p className="about-copy">
            I&apos;m a Computer Science student focused on Computer Vision and
            OpenCV. I enjoy turning ideas into practical systems — from
            real-time vision pipelines to full-stack applications and tools
            that solve concrete problems.
          </p>
        </div>
        <div className="profile-panel">
          <div className="panel-top"><span>SYSTEM PROFILE</span><span>01 / 04</span></div>
          <div className="profile-row"><span>PRIMARY FOCUS</span><strong>COMPUTER VISION</strong></div>
          <div className="profile-row"><span>CORE TOOL</span><strong>OPENCV</strong></div>
          <div className="profile-row"><span>LANGUAGE</span><strong>PYTHON</strong></div>
          <div className="profile-row"><span>APPROACH</span><strong>BUILD · TEST · ITERATE</strong></div>
          <div className="profile-status"><i /> CURRENTLY LEARNING &amp; BUILDING</div>
        </div>
      </div>
      <div className="focus-strip">
        <span>01 / COMPUTER VISION</span><span>02 / OPENCV</span><span>03 / SOFTWARE SYSTEMS</span><span>04 / REAL-WORLD PROBLEMS</span>
      </div>
      <div className="about-signal"><span>FOCUS SIGNAL</span><strong>VISION → SYSTEMS → IMPACT</strong><span>ACTIVE</span></div>
    </section>
  );
}

function Explore() {
  return (
    <section className="explore-section" aria-label="Explore portfolio">
      <div className="section-kicker">SYSTEM DIRECTORY</div>
      <div className="explore-grid">
        <a href="#projects"><span>CH.02</span><strong>WORK</strong><small>Projects &amp; case studies →</small></a>
        <a href="#timeline"><span>CH.03</span><strong>TIMELINE</strong><small>Activity &amp; milestones →</small></a>
        <a href="#contact"><span>CH.04</span><strong>CONTACT</strong><small>Establish connection →</small></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div><span className="section-kicker">CH.04 — ESTABLISH CONNECTION</span><h2>Have something worth building?</h2></div>
      <a className="hero-button primary" href="mailto:hello@example.com">GET IN TOUCH →</a>
    </footer>
  );
}

export default function Home() {
  return <><Nav /><main><Hero /><About /><SystemMap /><ProjectsPreview /><section id="timeline" className="timeline-placeholder"><div className="section-kicker">CH.03 — ACTIVITY LOG</div><h2>Timeline is coming next.</h2></section><Explore /><Footer /></main></>;
}
