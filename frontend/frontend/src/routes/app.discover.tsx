import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectService } from "@/services/project.service";
import { mapProjectToCard } from "@/utils/projectMapper";
import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/app/discover")({
  component: Discover,
});

function Discover() {
  const [q, setQ] = useState("");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await ProjectService.getAllProjects();
        setProjects(data.map(mapProjectToCard));
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filtered = projects.filter((p) =>
    q === ""
      ? true
      : (
          p.title +
          " " +
          p.tagline +
          " " +
          (p.skills?.join(" ") || "")
        )
          .toLowerCase()
          .includes(q.toLowerCase())
  );

  return (
    <AppShell
      title="Discover"
      subtitle="Explore what campus is building right now."
    >
      <div className="rounded-3xl border border-border bg-card p-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft"
              strokeWidth={1.5}
            />

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by title or skill..."
              className="h-11 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
            <SlidersHorizontal
              className="h-4 w-4"
              strokeWidth={1.5}
            />
            Sort: Recent
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-ink-soft">
          {loading ? "Loading..." : `${filtered.length} projects`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>

      {!loading && filtered.length === 0 && (
        <div className="mt-16 text-center text-ink-soft">
          <p className="font-display text-3xl text-foreground">
            No projects found.
          </p>

          <p className="mt-2 text-sm">
            Create your first project from the dashboard.
          </p>
        </div>
      )}
    </AppShell>
  );
}