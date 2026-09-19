"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  return (
    <div style={{ maxWidth: "480px" }}>
      <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "32px", lineHeight: "1.7" }}>
        Get in touch
      </p>

      {status === "sent" ? (
        <p style={{ fontSize: "13px", color: "var(--fg)" }}>Message sent.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />
          <textarea
            placeholder="Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: "vertical" }}
          />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button
              type="submit"
              disabled={status === "sending"}
              style={buttonStyle}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            {status === "error" && (
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>Something went wrong.</span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid var(--border)",
  borderRadius: "2px",
  padding: "10px 12px",
  color: "var(--fg)",
  fontSize: "13px",
  outline: "none",
  width: "100%",
  fontFamily: "inherit",
};

const buttonStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid var(--border)",
  borderRadius: "2px",
  padding: "8px 20px",
  color: "var(--muted)",
  fontSize: "13px",
  cursor: "pointer",
  fontFamily: "inherit",
};
