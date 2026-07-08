import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, activities, tasks, events, currentUser } from "@/lib/mock-data";
import { ArrowUpRight, Sparkles, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/app/dashboard")({ component: Dashboard });

function Dashboard() {
  const stats = [
    { label: "Active projects", value: "3", icon: Sparkles },
    { label: "Open tasks", value: "12", icon: CheckCircle2 },
    { label: "Contribution", value: currentUser.contribution.toLocaleString(), icon: TrendingUp },
    { label: "Collaborators", value: "27", icon: Users },
  ];
  const rec = projects.slice(0, 3);
  return (
    <AppShell
      title={`Good morning, ${currentUser.name.split(" ")[0]}.`}
      subtitle="Here's what your teams are up to today."
      right={<RightPanel />}
    >
      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between text-ink-soft">
                <span className="text-xs uppercase tracking-widest">{s.label}</span>
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div className="mt-4 font-display text-4xl text-foreground">{s.value}</div>
            </div>
          );
        })}
      </section>

      {/* Recommended */}
      <section className="mt-12">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">For you</p>
            <h2 className="mt-2 font-display text-3xl">Recommended projects</h2>
          </div>
          <Link to="/app/discover" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            Browse all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rec.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* My tasks */}
      <section className="mt-12">
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-display text-3xl">Your tasks this week</h2>
          <Link to="/app/tasks" className="text-sm text-primary hover:underline">Task board →</Link>
        </div>
        <div className="rounded-3xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-widest text-ink-soft">
                <th className="px-6 py-4">Task</th>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Due</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.filter((t) => t.assignee === "Ava").map((t) => (
                <tr key={t.id} className="border-t border-border hover:bg-hover">
                  <td className="px-6 py-4 font-medium">{t.title}</td>
                  <td className="px-6 py-4 text-ink-soft">{t.project}</td>
                  <td className="px-6 py-4"><Pill tone={t.priority === "High" ? "primary" : "muted"}>{t.priority}</Pill></td>
                  <td className="px-6 py-4 text-ink-soft">{t.due}</td>
                  <td className="px-6 py-4"><Pill>{t.status}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Upcoming */}
      <section className="mt-12">
        <h2 className="font-display text-3xl mb-5">Upcoming</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.slice(0, 4).map((e) => (
            <div key={e.id} className="rounded-2xl border border-border bg-card p-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">{e.kind}</p>
                <p className="mt-2 font-display text-xl">{e.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{e.date} · {e.time}</p>
              </div>
              <div className="text-right text-xs text-ink-soft">{e.project}</div>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function RightPanel() {
  return (
    <div className="space-y-6 sticky top-24">
      <div className="rounded-3xl border border-border bg-card p-6">
        <p className="text-xs uppercase tracking-widest text-ink-soft">Activity</p>
        <ul className="mt-4 space-y-4">
          {activities.map((a) => (
            <li key={a.id} className="flex gap-3 text-sm">
              <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <div className="min-w-0">
                <p><span className="font-medium">{a.actor}</span> <span className="text-ink-soft">{a.verb}</span> <span className="font-medium">{a.target}</span></p>
                <p className="text-xs text-ink-soft mt-0.5">{a.time} ago</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-border bg-card p-6">
        <p className="text-xs uppercase tracking-widest text-ink-soft">Suggested match</p>
        <p className="mt-3 font-display text-xl leading-snug">Nimbus is looking for a designer with systems-thinking chops.</p>
        <Link to="/app/projects/$id" params={{ id: "nimbus" }} className="mt-4 inline-flex text-sm text-primary hover:underline">View project →</Link>
      </div>
    </div>
  );
}

export function Pill({ children, tone = "muted" }: { children: React.ReactNode; tone?: "primary" | "muted" }) {
  const cls = tone === "primary" ? "bg-primary text-primary-foreground" : "bg-background text-foreground border border-border";
  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-wider ${cls}`}>{children}</span>;
}
