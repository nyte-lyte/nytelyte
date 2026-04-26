export default function Info() {
  return (
    <div style={{ maxWidth: "480px" }}>
      <p
        style={{
          fontSize: "14px",
          color: "var(--fg)",
          lineHeight: "1.7",
          marginBottom: "32px",
        }}
      >
        Interdisciplinary artist exploring blockchain as medium.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <a
          href="https://x.com/nytelytebtc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          style={{ display: "inline-block", color: "var(--muted)" }}
          className="social-icon"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 1200 1227"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.163 519.284Zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H891.476L569.165 687.828Z" />
          </svg>
        </a>

        <a
          href="https://discord.gg/Yysc4wAf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          style={{ display: "inline-block", color: "var(--muted)" }}
          className="social-icon"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
