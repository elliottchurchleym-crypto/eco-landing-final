import React, { useEffect, useRef } from "react";

export default function About() {
  const cardsRef = useRef([]);

  /* === PARALLAX MOTION ON SCROLL === */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const speed = 0.15 * (index + 1);
        const translate = (scrollY * speed) / 8;
        card.style.transform = `translateY(${translate}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* TIMELINE DATA */
  const timeline = [
    {
      year: "2019–2023",
      title: "Early Cognitive Foundations",
      text:
        "The seeds of cognitive measurement, frameworks, and architectural thinking begin forming through Elliott’s natural pattern recognition and discipline."
    },
    {
      year: "2024",
      title: "Pre-Formation Insights",
      text:
        "The subconscious blueprint consolidates — CCE, CEE, and TSA begin aligning into a unified intellectual system before full awareness."
    },
    {
      year: "2025",
      title: "Cognitive Capital Engine (CCE) Formalises",
      text:
        "CCE becomes a codified valuation framework defining Cognitive Capital as a measurable asset class — the first of its kind."
    },
    {
      year: "2025",
      title: "Cognitive Equity Exchange (CEE) Designed",
      text:
        "A new class of exchange emerges, enabling founders to convert intellectual architecture into market-recognized equity."
    },
    {
      year: "2025",
      title: "TSA is Engineered",
      text:
        "Twinkle’s Star Adventures is designed as a healing, emotionally intelligent universe for children — merging narrative, psychology, and imagination."
    },
    {
      year: "2025",
      title: "ECM Founder Studio Emerges",
      text:
        "CCE, CEE, TSA, and the ECM methodology unify — forming a next-generation AI-Human hybrid founder studio entering global validation."
    },
    {
      year: "2025–2026",
      title: "Professional Validation & Global Launch",
      text:
        "ECM enters formal valuation, governance, and investment structuring — preparing for the Cognitive Era’s first ecosystem launch."
    }
  ];

  return (
    <section
      id="about"
      className="relative w-full py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* === AURORA BACKGROUND === */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12001F] via-[#22003A] to-[#0B0015] opacity-90"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[140px] rounded-full"></div>

      {/* === CINEMATIC FOUNDER INTRO === */}
      <div className="relative text-center max-w-4xl mx-auto mb-32 opacity-0 animate-fadeUp">
        <h2 className="text-6xl font-bold text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.2)]">
          The Architect Behind ECM
        </h2>

        <p className="text-lg md:text-xl mt-8 text-gray-300 leading-relaxed">
          Elliott Bernard Churchley is a next-generation founder architecting cognitive
          systems, valuation frameworks, IP universes, and AI-Human hybrid methodologies
          that define the Cognitive Era.  
        </p>

        <p className="text-lg md:text-xl mt-6 text-gray-400 leading-relaxed">
          His work bridges emotional intelligence, technical precision, creative
          universes, and institutional-grade financial architecture — crafting an
          ecosystem designed for global scale and generational impact.
        </p>
      </div>

      {/* === VERTICAL TIMELINE SPINE === */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-300/40 via-purple-500/60 to-fuchsia-500/40 shadow-[0_0_40px_rgba(166,0,255,0.4)] rounded-full pointer-events-none"></div>

      {/* === TIMELINE CARDS === */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        {timeline.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              group relative w-full md:w-[600px]
              mx-auto rounded-3xl p-[1px]
              bg-gradient-to-b from-white/10 to-white/5
              transition-all duration-500
              hover:scale-[1.03]
              hover:from-purple-300/30 hover:to-purple-600/15
            "
            style={{
              transform: "translateY(0px)",
              transition: "transform 0.25s ease-out",
            }}
          >
            <div className="rounded-3xl bg-black/20 backdrop-blur-xl p-10 border border-white/10">
              <p className="text-sm uppercase tracking-widest text-purple-300 mb-2">
                {item.year}
              </p>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </div>

            {/* Glow halo */}
            <div className="absolute inset-0 rounded-3xl bg-purple-500/20 blur-3xl opacity-0 group-hover:opacity-40 transition duration-700"></div>
          </div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </section>
  );
}

/* === ANIMATIONS (optional) === */
