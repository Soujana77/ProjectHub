import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { events } from "@/lib/mock-data";

export const Route = createFileRoute("/app/events")({ component: EventsPage });

function EventsPage() {
  return (
    <AppShell title="Events" subtitle="Hackathons, demos, and campus gatherings.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {events.map((e) => (
          <div key={e.id} className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-widest text-primary">{e.kind}</p>
            <h3 className="mt-3 font-display text-2xl">{e.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{e.date} · {e.time}</p>
            <p className="mt-4 text-sm text-ink-soft">Associated project: {e.project}</p>
            <button className="mt-6 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-secondary">RSVP</button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
