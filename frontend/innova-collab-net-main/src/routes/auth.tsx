import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/auth")({ component: AuthLayout });

function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background text-foreground">
      <div className="hidden lg:flex flex-col justify-between border-r border-border p-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" strokeWidth={1.5} />
          </div>
          <span className="font-display text-xl">ProjectHub</span>
        </Link>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Since 2024</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95]">
            A quieter workspace<br />for louder ideas.
          </h1>
          <p className="mt-8 max-w-md text-ink-soft">
            Twelve thousand students. Eighteen hundred shipped projects. One shared home.
          </p>
        </div>
        <p className="text-xs uppercase tracking-widest text-ink-soft">Northfield · Bengaluru · Zurich · Kigali</p>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
