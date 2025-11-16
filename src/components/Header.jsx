import React from "react";

export default function Header() {
  return (
    <header className="ecm-header">
      <div className="ecm-header__inner">
        <a href="#top" className="ecm-logo">
          <span className="ecm-logo__dot" />
          <span className="ecm-logo__text">ECM</span>
        </a>

        <nav className="ecm-nav">
          <a href="#top">Home</a>
          <a href="#pillars">Pillars</a>
          <a href="#timeline">Story</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}