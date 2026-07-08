import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { leaderboard, projects } from "@/lib/mock-data";

export const Route = createFileRoute("/app/leaderboard")({ component: LeaderboardPage });

function LeaderboardPage() {
  return (
    <AppShell title="Leaderboard" subtitle="A quiet celebration of consistent contribution.">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {leaderboard.slice(0, 3).map((p) => (
          <div key={p.rank} className="rounded-3xl border border-border bg-card p-6 text-center">
            <p className="text-xs uppercase tracking-widest text-ink-soft">Rank {p.rank}</p>
            <img src={p.avatar} className="mx-auto mt-4 h-16 w-16 rounded-full" alt="" />
            <p className="mt-3 font-display text-2xl">{p.name}</p>
            <p className="mt-1 text-sm text-ink-soft">{p.projects} projects</p>
            <p className="mt-4 font-display text-4xl text-primary">{p.score.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-widest text-ink-soft">
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Projects</th>
                <th className="px-6 py-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((r) => (
                <tr key={r.rank} className="border-t border-border hover:bg-hover">
                  <td className="px-6 py-4 text-ink-soft">{String(r.rank).padStart(2, "0")}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={r.avatar} className="h-8 w-8 rounded-full" alt="" />
                      <span className="font-medium">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-ink-soft">{r.projects}</td>
                  <td className="px-6 py-4 text-right font-medium">{r.score.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-xs uppercase tracking-widest text-ink-soft">Top projects</p>
          <ul className="mt-4 space-y-4">
            {projects.slice(0, 5).map((p, i) => (
              <li key={p.id} className="flex items-center gap-3">
                <span className="w-6 text-sm text-ink-soft">{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{p.title}</p>
                  <p className="text-xs text-ink-soft">{p.department}</p>
                </div>
                <span className="text-sm">{p.progress}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
