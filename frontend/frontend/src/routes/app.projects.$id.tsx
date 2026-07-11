import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { projects, type Project } from "@/lib/mock-data";
import { Users, Clock, Layers, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/app/projects/$id")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return { project: p };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <AppShell title="Project not found">
      <Link to="/app/discover" className="text-primary hover:underline">← Back to discover</Link>
    </AppShell>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  return (
    <AppShell title={p.title} subtitle={p.tagline}>
      <Link to="/app/discover" className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="rounded-3xl border border-border bg-card p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-wider text-ink-soft">{p.category}</span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-ink-soft">{p.department}</span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-ink-soft">{p.difficulty}</span>
            </div>
            <h2 className="mt-6 font-display text-2xl">Overview</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">{p.description}</p>
          </section>

          <section className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Required skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.skills.map((s) => (
                <span key={s} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm">{s}</span>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Updates</h2>
            <ul className="mt-4 space-y-5">
              {[
                { t: "Weekly sync notes", d: "Alignment on API contracts and design tokens. Next: prototype in Figma.", when: "2d ago" },
                { t: "Milestone: MVP scaffold", d: "Base pipeline works end-to-end. Follow-up tasks queued.", when: "1w ago" },
              ].map((u) => (
                <li key={u.t} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{u.t}</p>
                    <span className="text-xs text-ink-soft">{u.when}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">{u.d}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6">
            <button className="w-full rounded-full bg-primary py-3 text-primary-foreground hover:bg-secondary">Request to join</button>
            <button className="w-full mt-3 rounded-full border border-border bg-background py-3 hover:bg-hover">Bookmark</button>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 space-y-4">
            <Row icon={Users} label="Team" value={`${p.filled} of ${p.teamSize} members`} />
            <Row icon={Clock} label="Timeline" value={p.timeline} />
            <Row icon={Layers} label="Progress" value={`${p.progress}%`} />
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-widest text-ink-soft mb-4">Members</p>
            <ul className="space-y-3">
              {p.members.map((m) => (
                <li key={m.name} className="flex items-center gap-3">
                  <img src={m.avatar} className="h-9 w-9 rounded-full" alt="" />
                  <div>
                    <p className="text-sm font-medium">{m.name}</p>
                    <p className="text-xs text-ink-soft">Contributor</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-4 w-4 text-ink-soft" strokeWidth={1.5} />
      <div className="flex-1 flex items-center justify-between text-sm">
        <span className="text-ink-soft">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
}
