import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Field } from "./auth.login";

export const Route = createFileRoute("/auth/signup")({ component: Signup });

function Signup() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Join ProjectHub</p>
      <h2 className="mt-4 font-display text-4xl">Create your account</h2>
      <p className="mt-2 text-sm text-ink-soft">Free for students. Always.</p>

      <form
        className="mt-10 space-y-5"
        onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => nav({ to: "/app/dashboard" }), 500); }}
      >
        <div className="grid grid-cols-2 gap-4">
          <Field label="First name" placeholder="Ava" />
          <Field label="Last name" placeholder="Chen" />
        </div>
        <Field label="College email" type="email" placeholder="you@college.edu" />
        <Field label="Password" type="password" placeholder="At least 8 characters" />
        <label className="flex items-start gap-2 text-sm text-ink-soft">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
          I agree to the Terms of Service and Privacy Policy.
        </label>
        <button disabled={loading} className="w-full rounded-full bg-primary py-3 text-primary-foreground hover:bg-secondary disabled:opacity-60">
          {loading ? "Creating…" : "Create account"}
        </button>
      </form>

      <p className="mt-8 text-sm text-ink-soft text-center">
        Already a member? <Link to="/auth/login" className="text-primary hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
