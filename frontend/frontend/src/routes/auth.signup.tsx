import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Field } from "./auth.login";
import { AuthService } from "@/services/auth.service";

export const Route = createFileRoute("/auth/signup")({
  component: Signup,
});

function Signup() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await AuthService.register({
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });

      alert("Account created successfully!");

      nav({
        to: "/auth/login",
      });
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">
        Join ProjectHub
      </p>

      <h2 className="mt-4 font-display text-4xl">
        Create your account
      </h2>

      <p className="mt-2 text-sm text-ink-soft">
        Free for students. Always.
      </p>

      <form
        className="mt-10 space-y-5"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <Field
            name="firstName"
            label="First name"
            placeholder="Ava"
            required
          />

          <Field
            name="lastName"
            label="Last name"
            placeholder="Chen"
            required
          />
        </div>

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
          placeholder="At least 8 characters"
          required
        />

        <label className="flex items-start gap-2 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-border"
            required
          />
          I agree to the Terms of Service and Privacy Policy.
        </label>

        <button
          disabled={loading}
          className="w-full rounded-full bg-primary py-3 text-primary-foreground hover:bg-secondary disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create account"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-ink-soft">
        Already a member?{" "}
        <Link
          to="/auth/login"
          className="text-primary hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}