// src/components/Hero.jsx
import React, { useRef } from "react";
import LogoCard from "./Logocard";

export default function Hero() {
  const frameRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!frameRef.current || !glowRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxTilt = 6; 
    const rotateX = (y / rect.height) * -maxTilt;
    const rotateY = (x / rect.width) * maxTilt;

    // Apply tilt
    frameRef.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;

    // Glow tracking
    glowRef.current.style.transform = `
      translate(${x * 0.05}px, ${y * 0.05}px)
      scale(1.15)
    `;
    glowRef.current.style.opacity = 0.55;
  };

  const handleMouseLeave = () => {
    if (!frameRef.current || !glowRef.current) return;

    frameRef.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

    glowRef.current.style.transform = "translate(0px, 0px) scale(1)";
    glowRef.current.style.opacity = 0.25;
  };

  return (
    <section className="hero-section">
      {/* Soft background aura */}
      <div className="hero-bg" />

      {/* Glow layer behind logo */}
      <div className="hero-glow" ref={glowRef} />

      <div className="hero-inner">
        
        {/* LOGO */}
        <div
          className="hero-logo-frame"
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <LogoCard />
        </div>

        {/* TEXT */}
        <div className="hero-text">
          <h1 className="hero-title">ELLIOTT CHURCHLEY MEDIA</h1>

          <p className="hero-sub">
            Architecting the Cognitive Era — AI–Human Systems,
            Cognitive Capital, and universes shaping global culture.
          </p>

          <div className="hero-pills">
            <button className="pill">Cognitive Capital Engine</button>
            <button className="pill">Twinkle’s Star Adventures</button>
            <button className="pill">Capital Equity Exchange</button>
            <button className="pill">2026 Seed Preparation</button>
          </div>
        </div>
      </div>
    </section>
  );
}