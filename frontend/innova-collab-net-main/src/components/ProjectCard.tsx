import { Link } from "@tanstack/react-router";
import { Bookmark, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/mock-data";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      to="/app/projects/$id" params={{ id: p.id }}
      className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:bg-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-ink-soft">
            {p.category}
          </span>
          <span className="text-[11px] text-ink-soft">{p.difficulty}</span>
        </div>
        <button
          onClick={(e) => { e.preventDefault(); }}
          className="grid h-8 w-8 place-items-center rounded-full border border-border text-ink-soft hover:bg-background"
          aria-label="Bookmark"
        >
          <Bookmark className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-display text-2xl leading-tight text-foreground">{p.title}</h3>
        <p className="mt-2 text-sm text-ink-soft line-clamp-2">{p.tagline}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {p.skills.slice(0, 4).map((s) => (
          <span key={s} className="rounded-full bg-background px-2.5 py-1 text-[11px] text-foreground border border-border">{s}</span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center -space-x-2">
          {p.members.slice(0, 4).map((m) => (
            <img key={m.name} src={m.avatar} alt={m.name} className="h-7 w-7 rounded-full border-2 border-card" />
          ))}
          <span className="ml-3 text-xs text-ink-soft">{p.filled}/{p.teamSize} members</span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
      </div>
    </Link>
  );
}
