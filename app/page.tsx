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
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: "48px",
      overflow: "hidden",
    }}>

      {/* Text */}
      <div style={{ width: "200px", flexShrink: 0, paddingTop: "4px" }}>
        <h1 style={{
          fontSize: "clamp(24px, 2.5vw, 40px)",
          fontWeight: "400",
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
          color: "var(--fg)",
          marginBottom: "16px",
        }}>
          Cessation
        </h1>

        <p style={{
          fontSize: "13px",
          color: "var(--muted)",
          lineHeight: "1.7",
          marginBottom: "24px",
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
      <div style={{
        flex: 1,
        minWidth: 0,
        aspectRatio: "3 / 2",
        maxHeight: "calc(100vh - 200px)",
        alignSelf: "flex-start",
        borderRadius: "2px",
        overflow: "hidden",
        background: "#000",
      }}>
        <iframe
          src={pieceSrc || undefined}
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          title="Cessation"
        />
      </div>

    </div>
  );
}
