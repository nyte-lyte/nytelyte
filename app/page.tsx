"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Hand-picked pieces for the homepage rotation, with their real on-chain
// hashTail + inscriptionUnix (synced from cessation-tracker/src/data/inscriptions.ts)
// — so the preview renders each piece as it actually appears on-chain.
const FEATURED_PIECES: { idx: number; ht: number; unix: number }[] = [
  { idx: 0, ht: 51, unix: 1780851771 },
  { idx: 6, ht: 42, unix: 1780868047 },
  { idx: 10, ht: 74, unix: 1780875295 },
  { idx: 17, ht: 82, unix: 1780892165 },
  { idx: 18, ht: 58, unix: 1780893567 },
  { idx: 22, ht: 16, unix: 1780899111 },
  { idx: 24, ht: 66, unix: 1780901092 },
  { idx: 27, ht: 67, unix: 1780907945 },
];

export default function Home() {
  const [pieceSrc, setPieceSrc] = useState("");
  useEffect(() => {
    const { idx, ht, unix } = FEATURED_PIECES[Math.floor(Math.random() * FEATURED_PIECES.length)];
    // Query params, not a hash fragment: piece0.html forwards these onto the
    // engine's <script> tag, which is how inscribed pieces pass them. The hash
    // path only existed in the engine's dev block and is stripped from the bundle.
    setPieceSrc(`/piece0.html?t=${idx}&ht=${ht}&unix=${unix}`);
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
            Each piece is a living digital painting that will evolve over
            multiple lifespans. The collection will continue to grow as long as
            the artist is alive, with each new piece starting its journey as an
            archive of the body&apos;s current state.
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
