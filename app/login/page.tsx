"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) throw error;
      window.location.assign("/dashboard");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to sign in. Please try again.");
    } finally { setBusy(false); }
  }

  return <main className="auth-shell"><Link className="auth-back" href="/">← Back to Wise Academy</Link><section className="auth-panel"><div className="auth-brand"><span className="brand-mark">W</span><div><b>WISE ACADEMY</b><small>STUDENT FEES PORTAL · 2027</small></div></div><p className="eyebrow">SECURE PORTAL ACCESS</p><h1>Welcome back.</h1><p className="auth-intro">Sign in using the email address and password provided by the school.</p><form onSubmit={signIn} className="auth-form"><label>Email address<input type="email" autoComplete="username" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="parent@example.com"/></label><label>Password<input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password"/></label><button className="primary auth-submit" disabled={busy}>{busy ? "Signing in…" : "Sign in securely"} <span>→</span></button></form>{message && <p className="auth-message" role="alert">{message}</p>}<p className="auth-foot">Need access? Contact the Wise Academy administration office.</p></section><footer className="auth-footer">WISE ACADEMY · ACADEMIC YEAR 2027</footer></main>;
}
