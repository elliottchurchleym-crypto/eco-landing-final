// src/components/Ecosystems.jsx
import React, { useEffect, useRef } from "react";

export default function Ecosystems() {

  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Soft floating effect
    el.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-10px)" },
        { transform: "translateY(0px)" }
      ],
      { duration: 6500, iterations: Infinity, easing: "ease-in-out" }
    );
  }, []);

  return (
    <section id="ecosystem" className="eco-section">

      {/* PARTICLES */}
      <div className="eco-particles" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className={`eco-particle p-${i}`} />
        ))}
      </div>

      <div className="eco-inner" ref={containerRef}>

        <p className="eco-eyebrow">THE ECM ECOSYSTEM</p>
        <h2 className="eco-title">Integrated Worlds of Value</h2>
        <p className="eco-subtitle">
          Three linked worlds of value — unified under a single founder thesis.
        </p>

        {/* ORBIT MODE WRAPPER */}
        <div className="eco-orbit">

          <div className="eco-card omega-border eco-card-1">
            <h3 className="eco-card-title">Twinkle’s Star Adventures (TSA)</h3>
            <p className="eco-card-body">
              ECM’s flagship storyworld — emotionally safe, globally scalable,
              cinematic, and commercially adaptable.  
              Merchandising and licensing pathways.
            </p>
          </div>

          <div className="eco-card omega-border eco-card-2">
            <h3 className="eco-card-title">Cognitive Capital Engine / Exchange</h3>
            <p className="eco-card-body">
              The formal architecture treating cognition, creativity and IP as measurable capital.  
              Technical standards, valuation frameworks, institutional licensing routes.
            </p>
          </div>

          <div className="eco-card omega-border eco-card-3">
            <h3 className="eco-card-title">Capital CEE & ECM Brand Spine</h3>
            <p className="eco-card-body">
              ECM’s premium identity spine unifying TSA, CCE/CEE and all investor-grade documentation.  
              Signature brand system and long-term equity asset.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}