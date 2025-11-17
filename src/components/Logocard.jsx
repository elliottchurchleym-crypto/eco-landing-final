import React, { useEffect, useRef } from "react";
import logo from "../assets/logo-animation.mp4";

export default function LogoCard() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (y / rect.height) * -6;   // subtle luxury movement
      const rotateY = (x / rect.width) * 6;

      card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.015)
      `;
    };

    const reset = () => {
      card.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div className="logo-motion-wrapper">
      <div className="logo-motion-card" ref={cardRef}>
        <video
          src={logo}
          autoPlay
          loop
          muted
          playsInline
          className="logo-video"
        />
      </div>
    </div>
  );
}