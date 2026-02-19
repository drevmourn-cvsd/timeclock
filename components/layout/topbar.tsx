import { Bell } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
      <h1 className="text-lg font-semibold">Acme Retail Group</h1>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-muted"><Bell className="h-5 w-5" /></button>
        <div className="h-9 w-9 rounded-full bg-indigo-500" />
      </div>
    </header>
  );
}
