import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/app/projects")({ component: MyProjects });

function MyProjects() {
  const mine = projects.slice(0, 4);
  return (
    <AppShell title="My Projects" subtitle="Projects you own or contribute to.">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {["All", "Owner", "Member", "Archived"].map((t, i) => (
            <button key={t} className={`rounded-full px-4 py-2 text-sm ${i === 0 ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-hover"}`}>{t}</button>
          ))}
        </div>
        <Link to="/app/projects/new" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-secondary">
          <Plus className="h-4 w-4" strokeWidth={1.5} /> New project
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {mine.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
    </AppShell>
  );
}
