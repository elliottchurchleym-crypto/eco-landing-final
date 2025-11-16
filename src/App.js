import React from "react";
import "./index.css";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Ecosystems from "./components/Ecosystems";
import KPIPanel from "./components/KPIPanel";
import Pillars from "./components/Pillars";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="main-shell">
        <Hero />

        <section id="pillars" className="section">
          <Pillars />
        </section>

        <section id="timeline" className="section">
          <KPIPanel />
        </section>

        <section id="ecosystem" className="section">
          <Ecosystems />
        </section>
      </main>

      <section id="contact" className="section section--footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;