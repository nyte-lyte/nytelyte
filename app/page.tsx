"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [pieceSrc, setPieceSrc] = useState("");
  useEffect(() => {
    const idx = Math.floor(Math.random() * 29);
    setPieceSrc(`/piece0.html?v=${idx}#idx=${idx}`);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr !important; }
          .home-piece { order: -1; }
        }
      `}</style>

      <div
        className="home-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gap: "60px",
          alignItems: "center",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 64px)",
              fontWeight: "400",
              lineHeight: "1",
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              marginBottom: "20px",
            }}
          >
            Cessation
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              lineHeight: "1.7",
              marginBottom: "32px",
            }}
          >
            A generative art collection inscribed on the Bitcoin blockchain.
            Each piece is derived from a custom health index that will span the
            artist's lifetime. The collection will continue to grow as long as
            the artist is living, with each new piece starting its journey as
            an archive of the body's current state.
          </p>

          <Link
            href="https://cessation-tracker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            className="view-link"
          >
            View collection
            <span style={{ fontSize: "16px", lineHeight: 1 }}>→</span>
          </Link>
        </div>

        <div className="home-piece" style={{ position: "relative" }}>
          <div style={{ paddingBottom: "66.667%" }} />
          <iframe
            src={pieceSrc || undefined}
            title="Cessation"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
          />
        </div>
      </div>
    </>
  );
}
