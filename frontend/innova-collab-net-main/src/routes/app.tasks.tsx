import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { tasks } from "@/lib/mock-data";
import { Pill } from "./app.dashboard";

export const Route = createFileRoute("/app/tasks")({ component: TasksPage });

function TasksPage() {
  const cols = [
    { key: "todo", label: "To do" },
    { key: "inprogress", label: "In progress" },
    { key: "review", label: "Review" },
    { key: "done", label: "Done" },
  ];
  return (
    <AppShell title="Tasks" subtitle="Every task, across every project you touch.">
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
                  <p className="mt-1 text-xs text-ink-soft">{t.project} · {t.assignee}</p>
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
    </AppShell>
  );
}
