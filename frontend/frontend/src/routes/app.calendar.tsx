import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { events } from "@/lib/mock-data";

export const Route = createFileRoute("/app/calendar")({ component: CalendarPage });

function CalendarPage() {
  const days = Array.from({ length: 35 }, (_, i) => i - 3);
  const marked = new Set([14, 15, 23, 26]);
  return (
    <AppShell title="Calendar" subtitle="Deadlines, meetings, hackathons.">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        <div className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl">March 2026</h2>
            <div className="flex gap-2">
              {["Today", "Week", "Month"].map((t, i) => (
                <button key={t} className={`rounded-full px-3 py-1.5 text-xs ${i === 2 ? "bg-primary text-primary-foreground" : "border border-border bg-background hover:bg-hover"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-7 text-[11px] uppercase tracking-widest text-ink-soft mb-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => <div key={d} className="px-2 py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d, i) => {
              const inMonth = d >= 1 && d <= 31;
              const isMark = marked.has(d);
              return (
                <div key={i} className={`aspect-square rounded-xl border p-2 text-sm ${inMonth ? "border-border bg-background" : "border-transparent text-ink-soft/40"} ${isMark ? "ring-1 ring-primary" : ""}`}>
                  <div className="flex items-start justify-between">
                    <span>{inMonth ? d : ""}</span>
                    {isMark && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-ink-soft">Upcoming</p>
          {events.map((e) => (
            <div key={e.id} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-primary">{e.kind}</p>
              <p className="mt-2 font-display text-xl">{e.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{e.date} · {e.time}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
