import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { currentUser } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/app/settings")({ component: SettingsPage });

const tabs = ["Profile", "Account", "Privacy", "Notifications", "Appearance"];

function SettingsPage() {
  const [tab, setTab] = useState("Profile");
  return (
    <AppShell title="Settings" subtitle="Tune your account.">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
        <nav className="flex lg:flex-col gap-1">
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`text-left rounded-xl px-3 py-2 text-sm ${tab === t ? "bg-primary text-primary-foreground" : "hover:bg-hover text-foreground"}`}>
              {t}
            </button>
          ))}
        </nav>
        <div className="rounded-3xl border border-border bg-card p-8">
          {tab === "Profile" && <ProfileForm />}
          {tab === "Account" && <Placeholder title="Account" desc="Email, password, and connected identity providers." />}
          {tab === "Privacy" && <Placeholder title="Privacy" desc="Control who can see your profile and projects." />}
          {tab === "Notifications" && <NotificationsForm />}
          {tab === "Appearance" && <Placeholder title="Appearance" desc="Density and reduced motion." />}
        </div>
      </div>
    </AppShell>
  );
}

function ProfileForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <h2 className="font-display text-2xl">Edit profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Full name" defaultValue={currentUser.name} />
        <Input label="Handle" defaultValue={currentUser.handle} />
        <Input label="College" defaultValue={currentUser.college} />
        <Input label="Department" defaultValue={currentUser.department} />
      </div>
      <label className="block">
        <span className="text-xs uppercase tracking-widest text-ink-soft">Bio</span>
        <textarea rows={3} defaultValue={currentUser.bio} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
      </label>
      <div className="pt-2">
        <button className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground hover:bg-secondary">Save changes</button>
      </div>
    </form>
  );
}
function NotificationsForm() {
  const opts = [
    ["Weekly digest", "A calm summary every Sunday."],
    ["Join requests", "When someone asks to join a project you own."],
    ["Mentions", "Whenever a teammate mentions you."],
    ["Deadlines", "24 hours before a task or event is due."],
  ];
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl">Notifications</h2>
      {opts.map(([t, d]) => (
        <label key={t} className="flex items-start justify-between gap-6 border-b border-border pb-4 last:border-b-0">
          <div>
            <p className="font-medium">{t}</p>
            <p className="text-sm text-ink-soft">{d}</p>
          </div>
          <input type="checkbox" defaultChecked className="mt-1 h-5 w-5 rounded border-border" />
        </label>
      ))}
    </div>
  );
}
function Placeholder({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl">{title}</h2>
      <p className="mt-2 text-ink-soft">{desc}</p>
      <div className="mt-6 rounded-2xl border border-dashed border-border p-10 text-center text-ink-soft">
        Coming soon.
      </div>
    </div>
  );
}
function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-ink-soft">{label}</span>
      <input {...rest} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </label>
  );
}
