import React from "react";

export default function Footer() {
  return (
    <footer className="ecm-footer" id="contact">
      <div className="footer-inner">
        
        {/* Title + Description */}
        <h3 className="footer-title">Join the ECM Circle</h3>
        <p className="footer-sub">
          Be the first to receive updates on Cognitive Capital, AI–Human Systems
          and ECM’s flagship creative universes shaping global culture.
        </p>

        {/* SIGNUP FORM */}
        <form
          id="ecm-subscribe-form"
          className="footer-signup"
          onSubmit={async (e) => {
            e.preventDefault();

            const email = e.target.email.value.trim();
            const button = e.target.querySelector("button");
            const message = document.getElementById("ecm-message");

            if (!email) return;

            button.disabled = true;
            button.innerText = "Signing Up...";

            try {
              await fetch(
                "https://script.google.com/macros/s/AKfycbyxjTO6GtrslpggnLsPPEVGb8cbdlGeu58upYR9qL_qV7jF6c6SljmuJwu3PBom7kkV4g/exec",
                {
                  method: "POST",
                  mode: "no-cors",
                  body: JSON.stringify({
                    email,
                    source: "ECM Website",
                    userAgent: navigator.userAgent,
                  }),
                }
              );

              message.innerText =
                "✨ You're now in the ECM Circle — thank you for subscribing.";
              message.style.color = "#B084F5";

              e.target.reset();
            } catch (err) {
              message.innerText =
                "Something went wrong — please try again.";
              message.style.color = "#ff6b6b";
            }

            button.disabled = false;
            button.innerText = "Sign Up";
          }}
        >
          <input
            className="footer-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <button className="footer-btn" type="submit">
            Sign Up
          </button>

          <p id="ecm-message" className="footer-message"></p>
        </form>

        {/* CONTACT DETAILS */}
        <div className="footer-contact">
          <p>General enquiries: info@elliottchurchleymedia.com</p>
          <p>Founder contact: founder@elliottchurchleymedia.com</p>
        </div>

        {/* COPYRIGHT */}
        <p className="footer-copy">
          © 2025 Elliott Churchley Media — AI–Human Systems · Cognitive Capital ·
          IP Architecture.
        </p>

        <p className="footer-tagline">
          ECM — The Cognitive Capital Company.
        </p>

      </div>
    </footer>
  );
}