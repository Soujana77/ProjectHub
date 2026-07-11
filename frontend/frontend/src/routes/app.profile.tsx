import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { currentUser, projects } from "@/lib/mock-data";
import { Github, Linkedin, Link as LinkIcon, MapPin } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/app/profile")({ component: ProfilePage });

function ProfilePage() {
  return (
    <AppShell title="Profile" subtitle="Your public presence on ProjectHub.">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
        <aside className="rounded-3xl border border-border bg-card p-6">
          <img src={currentUser.avatar} className="h-24 w-24 rounded-full" alt="" />
          <h2 className="mt-4 font-display text-3xl">{currentUser.name}</h2>
          <p className="text-sm text-ink-soft">{currentUser.role}</p>
          <p className="mt-4 text-sm">{currentUser.bio}</p>

          <div className="mt-6 space-y-2 text-sm text-ink-soft">
            <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />{currentUser.college}</div>
            <div className="flex items-center gap-2"><Github className="h-3.5 w-3.5" strokeWidth={1.5} />{currentUser.github}</div>
            <div className="flex items-center gap-2"><Linkedin className="h-3.5 w-3.5" strokeWidth={1.5} />{currentUser.linkedin}</div>
            <div className="flex items-center gap-2"><LinkIcon className="h-3.5 w-3.5" strokeWidth={1.5} />{currentUser.portfolio}</div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border p-3 text-center">
              <p className="font-display text-2xl">{currentUser.contribution}</p>
              <p className="text-[11px] uppercase tracking-widest text-ink-soft">Contribution</p>
            </div>
            <div className="rounded-2xl border border-border p-3 text-center">
              <p className="font-display text-2xl">3</p>
              <p className="text-[11px] uppercase tracking-widest text-ink-soft">Projects</p>
            </div>
          </div>

          <Link to="/app/settings" className="mt-6 block text-center rounded-full border border-border bg-background py-2.5 text-sm hover:bg-hover">Edit profile</Link>
        </aside>

        <div className="space-y-8">
          <section className="rounded-3xl border border-border bg-card p-6">
            <h3 className="font-display text-xl mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {currentUser.skills.map(s => (
                <span key={s} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm">{s}</span>
              ))}
            </div>
            <h3 className="font-display text-xl mt-6 mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {currentUser.interests.map(s => (
                <span key={s} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm">{s}</span>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-card p-6">
            <h3 className="font-display text-xl mb-4">Achievements</h3>
            <ul className="space-y-3">
              {[
                { t: "Best UX — Northfield Hackathon 2025", d: "Vellum team, editorial CMS." },
                { t: "Featured project — Campus Innovation Prize", d: "Prism accessibility audit." },
                { t: "Contributor of the Month", d: "March 2026." },
              ].map((a) => (
                <li key={a.t} className="flex items-start justify-between border-b border-border pb-3 last:border-b-0">
                  <div>
                    <p className="text-sm font-medium">{a.t}</p>
                    <p className="text-xs text-ink-soft">{a.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-display text-xl mb-4">Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(0, 4).map(p => <ProjectCard key={p.id} p={p} />)}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
