import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { projects, tasks } from "@/lib/mock-data";
import { Pill } from "./app.dashboard";

export const Route = createFileRoute("/app/workspace")({ component: Workspace });

function Workspace() {
  const p = projects[0];
  const cols = [
    { key: "todo", label: "To do" },
    { key: "inprogress", label: "In progress" },
    { key: "review", label: "Review" },
    { key: "done", label: "Done" },
  ];
  return (
    <AppShell title={`Workspace · ${p.title}`} subtitle="A shared home for your team's decisions and work.">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        {[
          { l: "Progress", v: `${p.progress}%` },
          { l: "Members", v: `${p.filled}/${p.teamSize}` },
          { l: "Open tasks", v: tasks.filter(t => t.status !== "done").length },
          { l: "Timeline", v: p.timeline },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs uppercase tracking-widest text-ink-soft">{s.l}</p>
            <p className="mt-3 font-display text-3xl">{s.v}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl mb-4">Task board</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {cols.map((c) => (
          <div key={c.key} className="rounded-3xl border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <p className="text-xs uppercase tracking-widest text-ink-soft">{c.label}</p>
              <span className="text-xs text-ink-soft">{tasks.filter(t => t.status === c.key).length}</span>
            </div>
            <div className="space-y-3">
              {tasks.filter(t => t.status === c.key).map(t => (
                <div key={t.id} className="rounded-2xl border border-border bg-background p-4 hover:bg-hover">
                  <p className="text-sm font-medium">{t.title}</p>
                  <p className="mt-1 text-xs text-ink-soft">{t.project}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Pill tone={t.priority === "High" ? "primary" : "muted"}>{t.priority}</Pill>
                    <span className="text-xs text-ink-soft">{t.due}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="font-display text-xl mb-4">Files</h3>
          <ul className="divide-y divide-border">
            {["Ledger-schema-v3.pdf", "Cover-story-draft.docx", "Onboarding-flow.fig"].map((f) => (
              <li key={f} className="flex items-center justify-between py-3 text-sm">
                <span>{f}</span>
                <span className="text-ink-soft text-xs">2d ago</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="font-display text-xl mb-4">Team</h3>
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
      </section>
    </AppShell>
  );
}
