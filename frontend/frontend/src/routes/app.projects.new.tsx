import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { departments, categories, difficulties } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/app/projects/new")({ component: NewProject });

function NewProject() {
  const nav = useNavigate();
  return (
    <AppShell title="Create a project" subtitle="Describe your idea, the team you need, and a rough timeline.">
      <form
        onSubmit={(e) => { e.preventDefault(); nav({ to: "/app/projects" }); }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <Section title="The essentials">
          <Input label="Project title" placeholder="e.g. Aurora — Campus Carbon Ledger" />
          <Textarea label="One-line tagline" placeholder="A short sentence anyone can grasp." />
          <Textarea label="Description" rows={5} placeholder="What are you building, for whom, and why?" />
          <Textarea label="Problem statement" rows={3} placeholder="The real-world problem this addresses." />
        </Section>

        <Section title="Team & scope">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select label="Department" options={departments.slice(1)} />
            <Select label="Category" options={categories.slice(1)} />
            <Select label="Difficulty" options={(difficulties as unknown as string[]).slice(1)} />
            <Input label="Team size" type="number" placeholder="4" />
          </div>
          <Input label="Timeline" placeholder="e.g. 8 weeks" />
          <Input label="Required skills" placeholder="Comma-separated. e.g. React, Postgres, Figma" />
          <Input label="Tags" placeholder="e.g. hackathon, research" />
        </Section>

        <Section title="Presentation">
          <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <p className="font-display text-xl">Drop a banner image</p>
            <p className="mt-2 text-sm text-ink-soft">PNG or JPG, up to 5MB.</p>
            <button type="button" className="mt-4 rounded-full border border-border bg-background px-5 py-2 text-sm hover:bg-hover">Choose file</button>
          </div>
        </Section>

        <div className="flex justify-end gap-3 pt-4">
          <button type="button" onClick={() => nav({ to: "/app/projects" })} className="rounded-full border border-border bg-card px-6 py-2.5 text-sm hover:bg-hover">Cancel</button>
          <button className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground hover:bg-secondary">Publish project</button>
        </div>
      </form>
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border bg-card p-8">
      <h2 className="font-display text-2xl mb-6">{title}</h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}
function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block"><span className="text-xs uppercase tracking-widest text-ink-soft">{label}</span>
      <input {...rest} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </label>
  );
}
function Textarea({ label, rows = 2, ...rest }: { label: string; rows?: number } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block"><span className="text-xs uppercase tracking-widest text-ink-soft">{label}</span>
      <textarea rows={rows} {...rest} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </label>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block"><span className="text-xs uppercase tracking-widest text-ink-soft">{label}</span>
      <select className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 focus:outline-none focus:ring-2 focus:ring-primary/20">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
