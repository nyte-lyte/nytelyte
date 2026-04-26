import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
        gap: "60px",
        alignItems: "center",
        minHeight: "calc(100vh - 120px)",
      }}
    >
      {/* Left: text */}
      <div>
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: "400",
            lineHeight: "1",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            marginBottom: "24px",
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
          an archive of what the body has become.
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

      {/* Right: live piece */}
      <div
        style={{
          aspectRatio: "3 / 2",
          width: "100%",
          borderRadius: "2px",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <iframe
          src="/piece0.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
          title="Cessation — Piece 00"
        />
      </div>
    </div>
  );
}
