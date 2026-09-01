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

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="contact-header">
        <span className="section-kicker">CH.04 — CONTACT / ESTABLISH CONNECTION</span>
        <h2>LET&apos;S ESTABLISH A CONNECTION.</h2>
        <p>Computer Science Student · Maejo University</p>
      </div>
      <div className="contact-grid">
        <div className="contact-block">
          <span>EMAIL</span>
          <a href="mailto:kengkiat4331@gmail.com">kengkiat4331@gmail.com</a>
          <a href="mailto:mju6704101306@mju.ac.th">mju6704101306@mju.ac.th</a>
        </div>
        <div className="contact-block">
          <span>SOCIAL</span>
          <a href="https://github.com/Keng043" target="_blank" rel="noopener noreferrer">GitHub <b>→</b></a>
          <a href="https://www.facebook.com/kong.kiat.32913/" target="_blank" rel="noopener noreferrer">Facebook <b>→</b></a>
        </div>
      </div>
      <a className="hero-button primary" href="mailto:kengkiat4331@gmail.com">SEND EMAIL →</a>
    </footer>
  );
}

export default function Home() {
  return <><Nav /><main><Hero /><About /><SystemMap /><ProjectsPreview /><section id="timeline" className="timeline-placeholder"><div className="section-kicker">CH.03 — ACTIVITY LOG</div><h2>Timeline is coming next.</h2></section><Footer /></main></>;
}
