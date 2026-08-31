export default function Nav() {
  return (
    <nav className="topnav">
      <a className="brand" href="#home" aria-label="Kong home">
        KONG<span> // CS STUDENT</span>
      </a>
      <div className="links">
        <a href="#about"><span>CH.01</span> ABOUT</a>
        <a href="#projects"><span>CH.02</span> WORK</a>
        <a href="#timeline"><span>CH.03</span> TIMELINE</a>
        <a className="cta" href="#contact"><span>CH.04</span> CONTACT →</a>
      </div>
    </nav>
  );
}
