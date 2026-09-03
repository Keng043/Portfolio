"use client";

import { useState } from "react";
import { NODES, LINKS, type SkillNode } from "@/data/nodes";

const mapNodes = NODES.filter((node) => node.id !== "proj");

export default function SystemMap() {
  const [active, setActive] = useState<SkillNode | null>(null);
  const [preview, setPreview] = useState<SkillNode | null>(null);
  const nodeById = Object.fromEntries(NODES.map((node) => [node.id, node]));

  return (
    <section id="system-map" className="system-map-section">
      <div className="section-kicker">SYSTEM MAP — NODE CONNECTIONS</div>
      <div className="map-head">
        <div>
          <h2>Explore how my projects connect.</h2>
          <p>Follow the connections to see how tools, ideas, and systems come together.</p>
        </div>
        <span className="map-readout">LINKED GRAPH / {mapNodes.length} NODES</span>
      </div>
      <div className="system-map" aria-label="Interactive map of skills and interests">
        <svg viewBox="0 0 900 430" aria-hidden="true" onMouseLeave={() => setPreview(null)}>
          {LINKS.map(([from, to]) => {
            const a = nodeById[from];
            const b = nodeById[to];
            if (!a || !b || from === "proj" || to === "proj") return null;
            const x1 = 70 + (a.x / 480) * 760;
            const y1 = 35 + (a.y / 480) * 350;
            const x2 = 70 + (b.x / 480) * 760;
            const y2 = 35 + (b.y / 480) * 350;
            const focus = preview ?? active;
            const related = focus && (focus.id === from || focus.id === to);
            return <line key={`${from}-${to}`} className={related ? "map-link active" : "map-link"} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
          {mapNodes.map((node) => {
            const x = 70 + (node.x / 480) * 760;
            const y = 35 + (node.y / 480) * 350;
            return (
              <g key={node.id} className={active?.id === node.id ? "map-node selected" : "map-node"} onMouseEnter={() => setPreview(node)} onClick={() => setActive(node)} tabIndex={0} role="button" aria-label={node.label} onFocus={() => setPreview(node)} onBlur={() => setPreview(null)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setActive(node); }}>
                <circle cx={x} cy={y} r="20" className="map-hit" />
                <circle cx={x} cy={y} r="6" className="map-dot" />
                <text x={x + 13} y={y + 4}>{node.label}</text>
              </g>
            );
          })}
        </svg>
        <div className="map-footer"><span>EXPLORE A NODE</span><span>{active ? `SELECTED / ${active.label}` : preview ? `PREVIEW / ${preview.label}` : "AWAITING INPUT"}</span></div>
        {(preview || active) && (
          <div className={`map-detail ${preview ? "map-detail-preview" : ""}`} role="status" aria-live="polite">
            <span className="map-detail-id">NODE / {(preview || active)!.id.toUpperCase()}</span>
            <strong>{(preview || active)!.label}</strong>
            <p>{(preview || active)!.desc}</p>
            <a href={(preview || active)!.href} target="_blank" rel="noopener noreferrer">EXPLORE NODE →</a>
          </div>
        )}
      </div>
    </section>
  );
}
