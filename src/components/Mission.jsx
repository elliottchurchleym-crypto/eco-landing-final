// src/components/Pillars.jsx
import React from "react";

export default function Pillars() {
  const pillars = [
    {
      label: "CAPITAL SYSTEM",
      title: "Cognitive Capital Engine (CCE)",
      body:
        "A codified valuation system measuring cognitive work, creativity and IP architecture with institutional-grade precision."
    },
    {
      label: "MARKET INFRASTRUCTURE",
      title: "Cognitive Equity Exchange (CEE)",
      body:
        "A future market for cognitive assets — turning creative intelligence into bankable, tradeable equity."
    },
    {
      label: "FLAGSHIP UNIVERSE",
      title: "Twinkle’s Star Adventures (TSA)",
      body:
        "A cinematic emotional-intelligence universe for children, built with Pixar-level resonance and ECM-level system design."
    },
    {
      label: "STUDIO SPINE",
      title: "ECM Founder Studio",
      body:
        "The architectural studio behind CCE, CEE and TSA — merging luxury identity, cognitive systems and strategic storytelling."
    }
  ];

  return (
    <section id="pillars" className="pillars-section">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-eyebrow">THE ECM PILLARS</p>
          <h2 className="section-title">Foundational Systems</h2>
          <p className="section-subtitle">
            The core architectures authored by Elliott Bernard Churchley to define the Cognitive Era.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <p className="pillar-label">{pillar.label}</p>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-body">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}