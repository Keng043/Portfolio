"use client";

import { useCallback, useRef, useState } from "react";
import { NODES, LINKS, type SkillNode } from "@/data/nodes";

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function Hero() {
  const [active, setActive] = useState<SkillNode | null>(null);
  const netRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    if (netRef.current) {
      netRef.current.style.transform = `translate(${dx * 6}px, ${dy * 6}px)`;
    }
  }, []);

  let calloutLeft = 0;
  let calloutTop = 0;
  let leaderX2 = 0;
  let leaderY2 = 0;

  if (active) {
    calloutLeft = Math.min(active.x + 24, 480 - 220);
    calloutTop = Math.max(active.y - 30, 0);
    leaderX2 = calloutLeft + 6;
    leaderY2 = calloutTop + 6;
  }

  return (
    <div id="home" className="scene" onMouseMove={handleMouseMove}>
      <div className="hero-copy">
        <div className="status">STATUS: ONLINE</div>
        <h1>
          Computer science student.
          <br />
          I build systems that
          <br />
          see &amp; respond.
        </h1>
        <p>
          Computer vision · full-stack · systems engineering · algorithmic
          trading
        </p>
      </div>

      <div className="network-wrap" onMouseLeave={() => setActive(null)}>
        <svg
          ref={netRef}
          className="net-svg"
          viewBox="0 0 480 480"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="3.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            {LINKS.map(([a, b], i) => {
              const na = byId[a];
              const nb = byId[b];
              return (
                <line
                  key={i}
                  className="link"
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                />
              );
            })}
          </g>

          {active && (
            <line
              className="link"
              strokeDasharray="3 3"
              x1={active.x}
              y1={active.y}
              x2={leaderX2}
              y2={leaderY2}
              style={{ opacity: 0.6 }}
              filter="url(#glow)"
            />
          )}

          <g>
            {NODES.map((n) => (
              <g
                key={n.id}
                className="node-group"
                onMouseEnter={() => setActive(n)}
                onClick={() => setActive(n)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  className={`node-dot${active?.id === n.id ? " active" : ""}`}
                  cx={n.x}
                  cy={n.y}
                  r={5}
                />
                <text className="node-label" x={n.x + 10} y={n.y + 4}>
                  {n.label}
                </text>
              </g>
            ))}
          </g>
        </svg>

        {active && (
          <div
            className="callout"
            style={{ left: calloutLeft, top: calloutTop }}
          >
            <div className="label">{active.label}</div>
            <p>{active.desc}</p>
            <div className="tags">{active.tags}</div>
            <a className="explore" href={active.href}>
              EXPLORE →
            </a>
          </div>
        )}
      </div>

      <div className="scroll-cue">
        <div className="line" />
        <span>SCROLL</span>
      </div>
    </div>
  );
}
