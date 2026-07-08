import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Compass, Users, MessageSquare, CheckSquare, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border">
        <div className="container-editorial flex items-center justify-between py-5">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <span className="font-display text-xl tracking-tight">ProjectHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#stats" className="hover:text-foreground">By the numbers</a>
            <a href="#voices" className="hover:text-foreground">Voices</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/auth/login" className="hidden sm:inline text-sm text-foreground hover:text-primary">Sign in</Link>
            <Link to="/auth/signup" className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-secondary">Get started</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 py-24 lg:py-36">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">A campus, in motion.</p>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-foreground">
              Where student <em className="italic text-primary">ideas</em><br /> find their team.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed">
              ProjectHub is the quiet workspace behind campus ambition. Discover projects, recruit teammates,
              collaborate in shared workspaces, and build a portfolio that outlives the semester.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/auth/signup" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-secondary">
                Start building <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link to="/app/discover" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm hover:bg-hover">
                Browse projects
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-border flex flex-col justify-end">
            <p className="text-sm text-ink-soft leading-relaxed">
              &ldquo;It replaced our five group chats, three spreadsheets, and one very tired Notion page.&rdquo;
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-foreground">
              Ines Okafor · Environmental Eng, Yr 4
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="border-b border-border">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["12,400", "Students"],
            ["1,860", "Projects shipped"],
            ["48", "Campuses"],
            ["94%", "Team fill rate"],
          ].map(([n, l]) => (
            <div key={l} className="py-14 px-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-primary">{n}</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-ink-soft">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-border">
        <div className="container-editorial py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">What's inside</p>
            <h2 className="mt-4 font-display text-5xl leading-tight">Every tool a student team needs. Nothing they don't.</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { i: Compass, t: "Discovery", d: "Filter by department, stack, and difficulty. Bookmark, request to join, and hear back fast." },
              { i: Users, t: "Workspaces", d: "Every project gets a shared home — members, files, meetings, notes, decisions." },
              { i: CheckSquare, t: "Tasks", d: "A calm Kanban with priorities, due dates, and assignees. No feature bloat." },
              { i: MessageSquare, t: "Messages", d: "Threaded conversations per project and per person. File sharing built in." },
              { i: Trophy, t: "Contribution", d: "A transparent score that follows you — earned across every project, not just the loudest." },
              { i: Sparkles, t: "AI matching", d: "Suggested projects based on your skills, interests, and past contributions." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-border bg-card p-8 hover:bg-hover transition-colors">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="border-b border-border">
        <div className="container-editorial py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">How it works</p>
            <h2 className="mt-4 font-display text-5xl leading-tight">Four steps, no ceremony.</h2>
          </div>
          <ol className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ["01", "Create your profile", "Skills, interests, department. Enough to be found."],
              ["02", "Discover or post", "Browse open projects. Or post one, describe the team you need."],
              ["03", "Collaborate", "Kanban, files, messages — all in your shared workspace."],
              ["04", "Ship & showcase", "Wrap the project, keep the artifact. It joins your portfolio."],
            ].map(([n, t, d]) => (
              <li key={n} className="border-t border-border pt-6">
                <div className="text-xs tracking-widest text-primary">{n}</div>
                <h3 className="mt-3 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section id="voices" className="border-b border-border">
        <div className="container-editorial py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Voices from campus</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["It felt like Linear, but for our hackathon team.", "Theo M., CS Yr 3"],
              ["I found three collaborators in a week. Shipped a paper in a semester.", "Sana K., MechE Yr 4"],
              ["Finally, a place where student work isn't lost in a group chat.", "Mira H., Editor, Vellum"],
            ].map(([q, a]) => (
              <figure key={a} className="rounded-3xl border border-border bg-card p-8">
                <blockquote className="font-display text-2xl leading-snug">&ldquo;{q}&rdquo;</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-ink-soft">{a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="border-b border-border">
        <div className="container-editorial py-24 text-center">
          <h2 className="font-display text-6xl leading-tight">Your next collaborator is one search away.</h2>
          <div className="mt-10">
            <Link to="/auth/signup" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground hover:bg-secondary">
              Create your account <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="container-editorial py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-soft">
        <div>© {new Date().getFullYear()} ProjectHub</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </footer>
    </div>
  );
}
