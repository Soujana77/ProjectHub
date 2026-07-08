import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, departments, categories, difficulties } from "@/lib/mock-data";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/app/discover")({ component: Discover });

function Discover() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState<string>("All");
  const [cat, setCat] = useState<string>("All");
  const [diff, setDiff] = useState<string>("All");

  const filtered = useMemo(() => projects.filter((p) =>
    (dept === "All" || p.department === dept) &&
    (cat === "All" || p.category === cat) &&
    (diff === "All" || p.difficulty === diff) &&
    (q === "" || (p.title + p.tagline + p.skills.join(" ")).toLowerCase().includes(q.toLowerCase()))
  ), [q, dept, cat, diff]);

  return (
    <AppShell title="Discover" subtitle="Explore what campus is building right now.">
      <div className="rounded-3xl border border-border bg-card p-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" strokeWidth={1.5} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title, skill, or keyword…" className="h-11 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} /> Sort: Recent
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Group label="Department" value={dept} setValue={setDept} options={departments} />
          <Group label="Category" value={cat} setValue={setCat} options={categories} />
          <Group label="Difficulty" value={diff} setValue={setDiff} options={difficulties as unknown as string[]} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-ink-soft">{filtered.length} projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
      {filtered.length === 0 && (
        <div className="mt-16 text-center text-ink-soft">
          <p className="font-display text-3xl text-foreground">No matches.</p>
          <p className="mt-2 text-sm">Try widening your filters.</p>
        </div>
      )}
    </AppShell>
  );
}

function Group({ label, value, setValue, options }: { label: string; value: string; setValue: (v: string) => void; options: string[] }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs uppercase tracking-widest text-ink-soft">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button key={o} onClick={() => setValue(o)}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${value === o ? "bg-primary text-primary-foreground" : "border border-border bg-background text-foreground hover:bg-hover"}`}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
