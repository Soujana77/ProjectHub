import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { messages, currentUser } from "@/lib/mock-data";
import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

export const Route = createFileRoute("/app/messages")({ component: MessagesPage });

function MessagesPage() {
  const [active, setActive] = useState(messages[0].id);
  const cur = messages.find(m => m.id === active)!;
  const thread = [
    { me: false, text: "Sent over the ledger schema draft — take a look when you can.", time: "10:12" },
    { me: true, text: "Great, reviewing now.", time: "10:14" },
    { me: false, text: "Also — should we invite Ravi for the sync?", time: "10:15" },
    { me: true, text: "Yes, let's. I'll ping him.", time: "10:16" },
  ];
  return (
    <AppShell title="Messages" subtitle="Conversations across projects and people.">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0 rounded-3xl border border-border bg-card overflow-hidden min-h-[600px]">
        <div className="border-r border-border">
          <div className="p-4 border-b border-border">
            <input placeholder="Search…" className="h-10 w-full rounded-full border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <ul>
            {messages.map((m) => (
              <li key={m.id}>
                <button onClick={() => setActive(m.id)} className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-hover ${active === m.id ? "bg-hover" : ""}`}>
                  <img src={m.avatar} className="h-10 w-10 rounded-full" alt="" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium truncate">{m.name}</p>
                      <span className="text-[11px] text-ink-soft">{m.time}</span>
                    </div>
                    <p className="text-xs text-ink-soft truncate">{m.last}</p>
                  </div>
                  {m.unread > 0 && <span className="grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">{m.unread}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3 border-b border-border p-4">
            <img src={cur.avatar} className="h-10 w-10 rounded-full" alt="" />
            <div>
              <p className="font-medium">{cur.name}</p>
              <p className="text-xs text-ink-soft">Active now</p>
            </div>
          </div>
          <div className="flex-1 p-6 space-y-4 overflow-auto">
            {thread.map((m, i) => (
              <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-md rounded-2xl px-4 py-3 text-sm ${m.me ? "bg-primary text-primary-foreground" : "bg-background border border-border"}`}>
                  <p>{m.text}</p>
                  <p className={`mt-1 text-[10px] ${m.me ? "text-primary-foreground/70" : "text-ink-soft"}`}>{m.time}</p>
                </div>
              </div>
            ))}
            <p className="text-center text-xs text-ink-soft italic">{cur.name} is typing…</p>
          </div>
          <form className="flex items-center gap-3 border-t border-border p-4" onSubmit={(e) => e.preventDefault()}>
            <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-hover">
              <Paperclip className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <input placeholder={`Message ${cur.name}`} className="h-11 flex-1 rounded-full border border-border bg-background px-4 focus:outline-none focus:ring-2 focus:ring-primary/20" />
            <button className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground hover:bg-secondary">
              <Send className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink-soft">Signed in as {currentUser.name}</p>
    </AppShell>
  );
}
