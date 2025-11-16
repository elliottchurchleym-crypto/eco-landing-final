// src/components/Pillars.jsx
import React, { useEffect, useRef } from "react";

export default function Pillars() {
  const sectionRef = useRef(null);

  // Smooth fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".pillar-card, .section-heading");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pillarsTop = [
    {
      label: "CAPITAL SYSTEM",
      title: "Cognitive Capital Engine (CCE)",
      body:
        "A codified valuation system measuring cognitive work, creativity and IP architecture with institutional-grade precision.",
    },
    {
      label: "MARKET INFRASTRUCTURE",
      title: "Cognitive Equity Exchange (CEE)",
      body:
        "A future market for cognitive assets — turning creative intelligence into bankable, tradeable equity.",
    },
    {
      label: "FLAGSHIP UNIVERSE",
      title: "Twinkle’s Star Adventures (TSA)",
      body:
        "A cinematic emotional-intelligence universe for children, built with Pixar-level resonance and ECM-level system design.",
    },
  ];

  const studio = {
    label: "STUDIO SPINE",
    title: "ECM Founder Studio",
    body:
      "The architectural studio behind CCE, CEE and TSA — merging luxury identity, cognitive systems and strategic storytelling.",
  };

  return (
    <section id="pillars" className="pillars-section" ref={sectionRef}>
      <div className="section-shell">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-beyond">THE ECM PILLARS</p>
          <h2 className="section-title">Foundational Systems</h2>
          <p className="section-subtitle">
            The core architectures authored by Elliott Bernard Churchley to define the Cognitive Era.
          </p>
        </div>

        {/* TOP 3 CARDS */}
        <div className="pillars-grid pillars-grid-top">
          {pillarsTop.map((pillar, i) => (
            <article key={i} className="pillar-card">
              <p className="pillar-label">{pillar.label}</p>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-body">{pillar.body}</p>
            </article>
          ))}
        </div>

        {/* BOTTOM STUDIO CARD */}
        <div className="pillars-grid pillars-grid-bottom">
          <article className="pillar-card pillar-wide">
            <p className="pillar-label">{studio.label}</p>
            <h3 className="pillar-title">{studio.title}</h3>
            <p className="pillar-body">{studio.body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}