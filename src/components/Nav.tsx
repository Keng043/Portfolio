export default function Nav() {
  return (
    <nav className="topnav">
      <div className="brand">
        KONG<span>{" // CS STUDENT"}</span>
      </div>
      <div className="links">
        <a href="#home">CH.01 HOME</a>
        <a href="#timeline">CH.03 TIMELINE</a>
        <a href="#contact">CH.04 CONTACT</a>
        <a href="#projects" className="cta">
          CH.02 — VIEW WORK →
        </a>
      </div>
    </nav>
  );
}
