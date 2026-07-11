import { Search, Bell, Mail, Settings } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { currentUser } from "@/lib/mock-data";

export function AppTopbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="flex items-center gap-4 px-6 lg:px-10 py-4">
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-2xl leading-tight text-foreground truncate">{title}</h1>
          {subtitle && <p className="text-sm text-ink-soft truncate">{subtitle}</p>}
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" strokeWidth={1.5} />
          <input
            placeholder="Search projects, people, tasks…"
            className="h-10 w-80 rounded-full border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button aria-label="Messages" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:bg-hover">
          <Mail className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button aria-label="Notifications" className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:bg-hover">
          <Bell className="h-4 w-4" strokeWidth={1.5} />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>
        <Link to="/app/settings" aria-label="Settings" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:bg-hover">
          <Settings className="h-4 w-4" strokeWidth={1.5} />
        </Link>
        <Link to="/app/profile" className="flex items-center gap-2 rounded-full border border-border bg-card p-1 pr-3 hover:bg-hover">
          <img src={currentUser.avatar} alt="" className="h-8 w-8 rounded-full" />
          <span className="hidden sm:inline text-sm">{currentUser.name.split(" ")[0]}</span>
        </Link>
      </div>
    </header>
  );
}
