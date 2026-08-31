"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NODES, LINKS, type SkillNode } from "@/data/nodes";

const byId = Object.fromEntries(NODES.map((node) => [node.id, node]));

export default function Hero() {
  const [active, setActive] = useState<SkillNode | null>(null);
  const [time, setTime] = useState("");
  const netRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Bangkok",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (event.clientX - cx) / cx;
    const dy = (event.clientY - cy) / cy;
    if (netRef.current && window.innerWidth > 720) {
      netRef.current.style.transform = `translate(${dx * 7}px, ${dy * 7}px)`;
    }
  }, []);

  const calloutLeft = active ? Math.min(active.x + 28, 480 - 232) : 0;
  const calloutTop = active ? Math.max(active.y - 34, 12) : 0;

  return (
    <section id="home" className="scene" onMouseMove={handleMouseMove}>
      <div className="space-grid" aria-hidden="true" />
      <div className="hero-copy">
        <div className="hero-meta">
          <span className="status">STATUS: ONLINE</span>
          <span className="clock">CHIANG MAI / {time || "--:--:--"} ICT</span>
        </div>
        <p className="eyebrow">COMPUTER SCIENCE · COMPUTER VISION</p>
        <h1>
          I build systems
          <br />
          that <em>see</em> &amp; respond.
        </h1>
        <p className="hero-lede">
          A Computer Science student exploring Computer Vision, OpenCV, and
          practical software systems that turn visual information into action.
        </p>
        <div className="hero-actions">
          <a className="hero-button primary" href="#about">
            EXPLORE PROFILE <span>↓</span>
          </a>
          <a className="hero-button" href="#projects">
            VIEW WORK <span>→</span>
          </a>
        </div>
      </div>

      <div className="network-wrap" onMouseLeave={() => setActive(null)}>
        <div className="network-caption">
          <span>NEURAL SYSTEM</span>
          <span>07 NODES / LIVE</span>
        </div>
        <svg ref={netRef} className="net-svg" viewBox="0 0 480 480">
          <defs>
            <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="brainHalo">
              <stop offset="0" stopColor="rgba(127,230,168,0.12)" />
              <stop offset="1" stopColor="rgba(127,230,168,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="240" cy="250" rx="205" ry="180" fill="url(#brainHalo)" />

          <g className="links-layer" aria-hidden="true">
            {LINKS.map(([from, to], index) => {
              const a = byId[from];
              const b = byId[to];
              const related = active && (active.id === from || active.id === to);
              return (
                <line
                  key={`${from}-${to}`}
                  className={`link ${related ? "link-active" : ""}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  style={{ animationDelay: `${index * 180}ms` }}
                />
              );
            })}
          </g>

          <g>
            {NODES.map((node) => {
              const selected = active?.id === node.id;
              return (
                <g
                  key={node.id}
                  className={`node-group ${selected ? "selected" : ""}`}
                  onMouseEnter={() => setActive(node)}
                  onClick={() => setActive(node)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Explore ${node.label}`}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") setActive(node);
                  }}
                >
                  <circle className="node-hit" cx={node.x} cy={node.y} r={18} />
                  <circle className="node-ring" cx={node.x} cy={node.y} r={8} />
                  <circle className="node-dot" cx={node.x} cy={node.y} r={4.5} />
                  <text className="node-label" x={node.x + 13} y={node.y + 4}>
                    {node.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {active && (
          <div className="callout" style={{ left: calloutLeft, top: calloutTop }}>
            <button className="callout-close" onClick={() => setActive(null)} aria-label="Close detail">
              ×
            </button>
            <div className="callout-index">NODE / {active.id.toUpperCase()}</div>
            <div className="label">{active.label}</div>
            <p>{active.desc}</p>
            <div className="tags">{active.tags}</div>
            <a className="explore" href={active.href}>EXPLORE →</a>
          </div>
        )}
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <div className="line" />
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
