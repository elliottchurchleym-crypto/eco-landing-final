import React from "react";
import useReveal from "../hooks/useReveal";

export default function PillarCard({ pillar }) {
  const ref = useReveal();

  return (
    <article ref={ref} className="pillar-card">
      <p className="pillar-label">{pillar.label}</p>
      <h3 className="pillar-title">{pillar.title}</h3>
      <p className="pillar-body">{pillar.body}</p>
    </article>
  );
}