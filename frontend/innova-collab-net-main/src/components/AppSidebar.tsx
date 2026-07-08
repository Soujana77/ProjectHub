import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Compass, FolderKanban, Users, MessageSquare,
  CheckSquare, Calendar, Trophy, User, Settings, LogOut, Sparkles, CalendarDays
} from "lucide-react";

const nav = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/discover", label: "Discover", icon: Compass },
  { to: "/app/projects", label: "My Projects", icon: FolderKanban },
  { to: "/app/workspace", label: "Workspace", icon: Users },
  { to: "/app/messages", label: "Messages", icon: MessageSquare },
  { to: "/app/tasks", label: "Tasks", icon: CheckSquare },
  { to: "/app/calendar", label: "Calendar", icon: Calendar },
  { to: "/app/events", label: "Events", icon: CalendarDays },
  { to: "/app/leaderboard", label: "Leaderboard", icon: Trophy },
];

const bottom = [
  { to: "/app/profile", label: "Profile", icon: User },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-64 shrink-0 flex-col border-r border-border bg-background px-5 py-6">
      <Link to="/" className="flex items-center gap-2 px-2">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="h-4 w-4" strokeWidth={1.5} />
        </div>
        <span className="font-display text-xl tracking-tight">ProjectHub</span>
      </Link>

      <p className="mt-8 px-3 text-[10px] uppercase tracking-[0.25em] text-ink-soft">Workspace</p>
      <nav className="mt-3 flex flex-col gap-0.5">
        {nav.map((item) => {
          const active = pathname === item.to || pathname.startsWith(item.to + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.to} to={item.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-hover"}`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-0.5">
        {bottom.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link key={item.to} to={item.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-hover"}`}>
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              {item.label}
            </Link>
          );
        })}
        <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-hover">
          <LogOut className="h-4 w-4" strokeWidth={1.5} />
          Log out
        </Link>
      </div>
    </aside>
  );
}
