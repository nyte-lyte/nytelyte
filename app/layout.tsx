import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "nytelyte",
  description: "Artist working in collage, photography, and mixed media.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: "20px 24px",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "32px",
            marginBottom: "80px",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "14px",
              letterSpacing: "0.02em",
              color: "var(--fg)",
              marginRight: "8px",
            }}
          >
            nytelyte
          </Link>
          <Link href="/projects" style={{ fontSize: "13px", color: "var(--muted)" }} className="nav-link">
            Projects
          </Link>
          <Link href="/about" style={{ fontSize: "13px", color: "var(--muted)" }} className="nav-link">
            About
          </Link>
          <Link href="/contact" style={{ fontSize: "13px", color: "var(--muted)" }} className="nav-link">
            Contact
          </Link>
        </nav>

        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
