import type { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppTopbar } from "./AppTopbar";

export function AppShell({ title, subtitle, children, right }: { title: string; subtitle?: string; children: ReactNode; right?: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar title={title} subtitle={subtitle} />
        <main className="flex-1 px-6 lg:px-10 py-8">
          {right ? (
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8">
              <div className="min-w-0">{children}</div>
              <aside className="hidden xl:block">{right}</aside>
            </div>
          ) : children}
        </main>
      </div>
    </div>
  );
}
