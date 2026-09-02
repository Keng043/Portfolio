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
  return <><Nav /><main><Hero /><About /><ProjectsPreview /><SystemMap /><section id="timeline" className="timeline-placeholder">
        <div className="section-kicker">CH.03 — CURRENT FOCUS / LEARNING LOG</div>
        <div className="focus-head">
          <div>
            <h2>ช่วงนี้ผมกำลังทำอะไรอยู่</h2>
            <p>ผมกำลังต่อยอดจาก Computer Science ไปสู่ระบบที่มองเห็น เข้าใจ และปลอดภัยมากขึ้น โดยเรียนรู้ผ่านการลงมือทำจริงกับโปรเจกต์ของตัวเอง</p>
          </div>
          <span className="focus-readout">STATUS / EXPLORING</span>
        </div>
        <div className="focus-grid">
          <article className="focus-card">
            <span>01 / LEARNING</span>
            <h3>Cybersecurity</h3>
            <p>กำลังศึกษาพื้นฐานด้านความปลอดภัยทางไซเบอร์ ทั้งแนวคิดของเครือข่าย การป้องกันระบบ และการมองหาช่องโหว่ เพื่อพัฒนาตัวเองไปสู่สายงาน Security ในอนาคต</p>
          </article>
          <article className="focus-card">
            <span>02 / BUILDING</span>
            <h3>Computer Vision · OpenCV</h3>
            <p>พัฒนาความเข้าใจด้าน Computer Vision ผ่าน Face Recognition, Hand Gesture และระบบที่นำข้อมูลจากภาพไปใช้เป็นคำสั่งหรือข้อมูลสำหรับซอฟต์แวร์</p>
          </article>
          <article className="focus-card">
            <span>03 / EXPLORING</span>
            <h3>IoT &amp; Innovation</h3>
            <p>สนใจการเชื่อมต่อซอฟต์แวร์ อุปกรณ์ และข้อมูลเข้าด้วยกัน เพื่อสร้างระบบที่นำไปใช้งานจริงและแก้ปัญหาในโลกจริงได้</p>
          </article>
        </div>
        <div className="focus-next roadmap">
          <div className="roadmap-head"><span>ROADMAP</span><span>MY PATH SO FAR</span></div>
          <div className="roadmap-track">
            <div className="roadmap-step"><span>01</span><strong>BUSINESS<br />COMPUTER</strong><small>จุดเริ่มต้น</small></div>
            <div className="roadmap-line" />
            <div className="roadmap-step achievement-step">
              <span>02</span>
              <strong>IoT<br />COMPETITIONS</strong>
              <small>สร้างของจริง · แข่งขัน · ได้รางวัล</small>
              <div className="roadmap-award">🏆 2 NATIONAL AWARDS</div>
              <div className="roadmap-achievements">
                <article>
                  <b>2022 · 1ST PRIZE</b>
                  <strong>Wireless Helmet Signal Light</strong>
                  <small>Team FtwoK · Prime Minister&apos;s Award for Health Promotion Innovation 2022</small>
                </article>
                <article>
                  <b>2023 · HONORABLE MENTION</b>
                  <strong>Helmet Safe Your Life</strong>
                  <small>Team Good 4 You · Prime Minister&apos;s Award for Health Promotion Innovation 2023</small>
                </article>
              </div>
            </div>
            <div className="roadmap-line" />
            <div className="roadmap-step active"><span>03</span><strong>COMPUTER<br />SCIENCE</strong><small>กำลังเรียนอยู่</small></div>
            <div className="roadmap-line" />
            <div className="roadmap-step"><span>04</span><strong>CYBER<br />SECURITY</strong><small>กำลังลองและเรียนรู้</small></div>
            <div className="roadmap-line" />
            <div className="roadmap-step next"><span>05</span><strong>NEXT<br />?</strong><small>ยังหาอยู่</small></div>
          </div>
        </div>
      </section><Footer /></main></>;
}
