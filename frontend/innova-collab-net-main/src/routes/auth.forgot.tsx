import { createFileRoute, Link } from "@tanstack/react-router";
import { Field } from "./auth.login";

export const Route = createFileRoute("/auth/forgot")({ component: Forgot });

function Forgot() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Reset access</p>
      <h2 className="mt-4 font-display text-4xl">Forgot password</h2>
      <p className="mt-2 text-sm text-ink-soft">We'll email you a reset link.</p>
      <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <Field label="College email" type="email" placeholder="you@college.edu" />
        <button className="w-full rounded-full bg-primary py-3 text-primary-foreground hover:bg-secondary">
          Send reset link
        </button>
      </form>
      <p className="mt-8 text-sm text-ink-soft text-center">
        <Link to="/auth/login" className="text-primary hover:underline">Back to sign in</Link>
      </p>
    </div>
  );
}
