import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
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
  return <><Nav /><main><Hero /><About /><ProjectsPreview /><section id="timeline" className="focus-section">
        <div className="section-kicker">CH.03 — CURRENT DIRECTION</div>
        <div className="focus-head">
          <div>
            <h2>WHAT I&apos;M EXPLORING</h2>
            <p>ตอนนี้ผมกำลังทดลองหลายด้านของ Computer Science เพื่อค้นหาสิ่งที่ตัวเองอยากไปต่อจริง ๆ โดยเน้นการเรียนรู้ผ่านการสร้างและทดลองกับระบบจริง</p>
          </div>
          <span className="focus-readout">STATUS / EXPLORING</span>
        </div>
        <div className="focus-grid">
          <article className="focus-card">
            <span>01 / SECURITY</span>
            <h3>Cybersecurity</h3>
            <p>กำลังเรียนรู้พื้นฐานด้าน Network Security และ System Security รวมถึงแนวคิดการมองระบบจากทั้งมุมของการป้องกันและการโจมตี</p>
            <small>STATUS: LEARNING</small>
          </article>
          <article className="focus-card">
            <span>02 / VISION</span>
            <h3>Computer Vision · OpenCV</h3>
            <p>พัฒนาความเข้าใจด้าน Computer Vision ผ่าน Face Recognition, Hand Gesture และการนำข้อมูลจากภาพไปเชื่อมกับซอฟต์แวร์ที่ใช้งานได้จริง</p>
            <small>STATUS: BUILDING</small>
          </article>
          <article className="focus-card">
            <span>03 / SYSTEMS</span>
            <h3>IoT &amp; Innovation</h3>
            <p>สนใจการเชื่อมต่อ Software, Hardware และข้อมูลเข้าด้วยกัน เพื่อสร้างระบบที่แก้ปัญหาในโลกจริงได้</p>
            <small>STATUS: EXPLORING</small>
          </article>
        </div>
        <div className="roadmap" aria-label="Learning roadmap">
          <div className="roadmap-head"><span>ROADMAP</span><span>PATH / IN PROGRESS</span></div>
          <div className="roadmap-track">
            <article className="roadmap-step"><span>01 / FOUNDATION</span><strong>Business Computer</strong><small>จุดเริ่มต้นด้านคอมพิวเตอร์</small></article>
            <div className="roadmap-line" aria-hidden="true" />
            <article className="roadmap-step"><span>02 / INNOVATION</span><strong>IoT Competitions</strong><small>เริ่มสร้างระบบจากปัญหาจริง</small></article>
            <div className="roadmap-line" aria-hidden="true" />
            <article className="roadmap-step active"><span>03 / CURRENT</span><strong>Computer Science</strong><small>พัฒนาพื้นฐานและสร้างโปรเจกต์</small></article>
            <div className="roadmap-line" aria-hidden="true" />
            <article className="roadmap-step next"><span>04 / NEXT</span><strong>Cybersecurity</strong><small>ทิศทางที่กำลังสำรวจต่อ</small></article>
          </div>
        </div>
      </section><Footer /></main></>;
}
