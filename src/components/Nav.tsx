"use client";

import { useEffect, useState } from "react";

const VISITOR_SESSION_KEY = "portfolio_visitor_session";

const CHANNELS = ["about", "projects", "timeline", "contact"] as const;

export default function Nav() {
  const [active, setActive] = useState<(typeof CHANNELS)[number]>("about");
  const [online, setOnline] = useState(0);
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    let sessionId = localStorage.getItem(VISITOR_SESSION_KEY);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem(VISITOR_SESSION_KEY, sessionId);
    }

    const register = async () => {
      try {
        const response = await fetch("/api/visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        if (response.ok) {
          const data = await response.json();
          setVisits(data.totalVisits);
        }
      } catch {}
    };

    const refresh = async () => {
      try {
        const response = await fetch("/api/visitor", { cache: "no-store" });
        if (response.ok) {
          const data = await response.json();
          setOnline(Number(data.online_visitors ?? 0));
          setVisits(Number(data.total_visits ?? 0));
        }
      } catch {}
    };

    register().then(refresh);
    const timer = window.setInterval(refresh, 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = CHANNELS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id as (typeof CHANNELS)[number]);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="topnav">
      <a className="brand" href="#home" aria-label="Kong home">
        KONG<span> // CS STUDENT</span>
      </a>
      <div className="visitor-status" aria-label={`${online} visitors online, ${visits ?? 0} total visits`}>
        <span className="visitor-live">● {online} ONLINE</span>
        <span className="visitor-divider">·</span>
        <span>{visits === null ? "—" : visits} VISITS</span>
      </div>
      <div className="links">
        <a className={active === "about" ? "active" : ""} href="#about"><span>CH.01</span> ABOUT</a>
        <a className={active === "projects" ? "active" : ""} href="#projects"><span>CH.02</span> PROJECTS</a>
        <a className={active === "timeline" ? "active" : ""} href="#timeline"><span>CH.03</span> FOCUS</a>
        <a className={active === "contact" ? "active" : ""} href="#contact"><span>CH.04</span> CONTACT</a>
      </div>
    </nav>
  );
}
