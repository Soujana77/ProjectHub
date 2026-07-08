import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/auth/login")({ component: Login });

function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Welcome back</p>
      <h2 className="mt-4 font-display text-4xl">Sign in</h2>
      <p className="mt-2 text-sm text-ink-soft">Continue where your team left off.</p>

      <form
        className="mt-10 space-y-5"
        onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => nav({ to: "/app/dashboard" }), 500); }}
      >
        <Field label="College email" type="email" placeholder="you@college.edu" />
        <Field label="Password" type="password" placeholder="••••••••" />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-ink-soft">
            <input type="checkbox" className="h-4 w-4 rounded border-border" /> Remember me
          </label>
          <Link to="/auth/forgot" className="text-primary hover:underline">Forgot?</Link>
        </div>
        <button disabled={loading} className="w-full rounded-full bg-primary py-3 text-primary-foreground hover:bg-secondary disabled:opacity-60">
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-8 text-sm text-ink-soft text-center">
        New here? <Link to="/auth/signup" className="text-primary hover:underline">Create an account</Link>
      </p>
    </div>
  );
}

export function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-ink-soft">{label}</span>
      <input {...rest} className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-foreground placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </label>
  );
}
