import { Link } from "@tanstack/react-router";
import { Bookmark, ArrowUpRight, User } from "lucide-react";

interface ProjectCardProps {
  p: {
    id: string;
    title: string;
    tagline: string;
    category: string;
    difficulty: string;
    skills: string[];
    owner: string;
    members: string;
    status: string;
  };
}

export function ProjectCard({ p }: ProjectCardProps) {
  return (
    <Link
      to="/app/projects/$id"
      params={{ id: p.id }}
      className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:bg-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-ink-soft">
            {p.category}
          </span>

          <span className="text-[11px] text-ink-soft">
            {p.difficulty}
          </span>
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className="grid h-8 w-8 place-items-center rounded-full border border-border text-ink-soft hover:bg-background"
        >
          <Bookmark className="h-3.5 w-3.5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-display text-2xl leading-tight text-foreground">
          {p.title}
        </h3>

        <p className="mt-2 text-sm text-ink-soft line-clamp-2">
          {p.tagline}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {p.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-background px-2.5 py-1 text-[11px] border border-border"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="text-sm font-medium">{p.owner}</p>

          <p className="text-xs text-ink-soft flex items-center gap-1 mt-1">
            <User size={12} />
            {p.members} members
          </p>
        </div>

        <ArrowUpRight
          className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}