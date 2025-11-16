// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="ecm-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-divider" />

        <h3 className="footer-title">Join the ECM Circle</h3>
        <p className="footer-sub">
          Be the first to receive updates on Cognitive Capital, AI–Human Systems
          and ECM’s flagship creative universes shaping global culture.
        </p>

        <div className="footer-signup">
          <input
            className="footer-input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="footer-btn">Sign Up</button>
        </div>

        <div className="footer-contact">
          <p>General enquiries: info@elliottchurchleymedia.com</p>
          <p>Founder contact: founder@elliottchurchleymedia.com</p>
        </div>

        <p className="footer-copy">
          © 2025 Elliott Churchley Media — AI–Human Systems · Cognitive Capital · IP Architecture.
        </p>
        <p className="footer-tagline">ECM — The Cognitive Capital Company.</p>
      </div>
    </footer>
  );
}