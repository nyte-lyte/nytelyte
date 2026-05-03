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
          .home-piece { display: none; }
          .home-text { max-width: 100% !important; }
        }
      `}</style>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "48px" }}>

        {/* Text */}
        <div className="home-text" style={{ width: "220px", flexShrink: 0, paddingTop: "4px" }}>
          <h1 style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: "400",
            lineHeight: "1",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "20px",
          }}>
            Cessation
          </h1>

          <p style={{
            fontSize: "14px",
            color: "var(--muted)",
            lineHeight: "1.7",
            marginBottom: "32px",
          }}>
            A generative art collection inscribed on the Bitcoin blockchain.
            Each piece is derived from a custom health index that will span the
            artist's lifetime. The collection will continue to grow as long as
            the artist is living, with each new piece starting its journey as
            an archive of the body's current state.
          </p>

          <Link
            href="https://cessation-tracker.vercel.app/piece/0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: "6px" }}
            className="view-link"
          >
            View collection
            <span style={{ fontSize: "16px", lineHeight: 1 }}>→</span>
          </Link>
        </div>

        {/* Piece */}
        <div
          className="home-piece"
          style={{
            height: "calc(100vh - 200px)",
            width: "calc((100vh - 200px) * 1.5)",
            flexShrink: 0,
            borderRadius: "2px",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src={pieceSrc || undefined}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            title="Cessation"
          />
        </div>

      </div>
    </>
  );
}
