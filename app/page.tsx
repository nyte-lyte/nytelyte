"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Real on-chain hashTail + inscriptionUnix per piece (synced from
// cessation-tracker/src/data/inscriptions.ts) — so the random preview
// renders each piece as it actually appears on-chain.
const PIECE_CHAIN: { ht: number; unix: number }[] = [
  { ht: 51, unix: 1780851771 }, // piece 00
  { ht: 29, unix: 1780853110 }, // piece 01
  { ht: 60, unix: 1780854786 }, // piece 02
  { ht: 21, unix: 1780864812 }, // piece 03
  { ht: 81, unix: 1780865859 }, // piece 04
  { ht: 76, unix: 1780866591 }, // piece 05
  { ht: 42, unix: 1780868047 }, // piece 06
  { ht: 57, unix: 1780870406 }, // piece 07
  { ht: 58, unix: 1780873095 }, // piece 08
  { ht: 22, unix: 1780873497 }, // piece 09
  { ht: 74, unix: 1780875295 }, // piece 10
  { ht: 59, unix: 1780878813 }, // piece 11
  { ht: 73, unix: 1780880962 }, // piece 12
  { ht: 58, unix: 1780883403 }, // piece 13
  { ht: 15, unix: 1780885373 }, // piece 14
  { ht: 42, unix: 1780886934 }, // piece 15
  { ht: 49, unix: 1780888133 }, // piece 16
  { ht: 82, unix: 1780892165 }, // piece 17
  { ht: 58, unix: 1780893567 }, // piece 18
  { ht: 34, unix: 1780894802 }, // piece 19
  { ht: 4, unix: 1780895440 }, // piece 20
  { ht: 66, unix: 1780898132 }, // piece 21
  { ht: 16, unix: 1780899111 }, // piece 22
  { ht: 9, unix: 1780899973 }, // piece 23
  { ht: 66, unix: 1780901092 }, // piece 24
  { ht: 79, unix: 1780902895 }, // piece 25
  { ht: 5, unix: 1780903858 }, // piece 26
  { ht: 67, unix: 1780907945 }, // piece 27
  { ht: 60, unix: 1780910280 }, // piece 28
];

export default function Home() {
  const [pieceSrc, setPieceSrc] = useState("");
  useEffect(() => {
    const idx = Math.floor(Math.random() * 29);
    const { ht, unix } = PIECE_CHAIN[idx];
    setPieceSrc(`/piece0.html?v=${idx}#idx=${idx}&ht=${ht}&unix=${unix}`);
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
