import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { loginUser } from "@/services/auth.service";

export const Route = createFileRoute("/auth/login")({
  component: Login,
});

function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await loginUser({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });

      localStorage.setItem("token", response.token);

      alert("Login Successful!");

      nav({ to: "/app/dashboard" });
    } catch (error: any) {
      alert(
        error?.response?.data?.message || "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">
        Welcome back
      </p>

      <h2 className="mt-4 font-display text-4xl">
        Sign in
      </h2>

      <p className="mt-2 text-sm text-ink-soft">
        Continue where your team left off.
      </p>

      <form
        className="mt-10 space-y-5"
        onSubmit={handleSubmit}
      >
        <Field
          name="email"
          label="College email"
          type="email"
          placeholder="you@college.edu"
          required
        />

        <Field
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-ink-soft">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border"
            />
            Remember me
          </label>

          <Link
            to="/auth/forgot"
            className="text-primary hover:underline"
          >
            Forgot?
          </Link>
        </div>

        <button
          disabled={loading}
          className="w-full rounded-full bg-primary py-3 text-primary-foreground hover:bg-secondary disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-ink-soft">
        New here?{" "}
        <Link
          to="/auth/signup"
          className="text-primary hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}

type FieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Field({
  label,
  ...rest
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-ink-soft">
        {label}
      </span>

      <input
        {...rest}
        className="mt-2 h-12 w-full rounded-xl border border-border bg-card px-4 text-foreground placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}