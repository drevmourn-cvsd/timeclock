import Link from "next/link";
import { BarChart3, CalendarDays, ClipboardList, Clock3, Home, Settings, Users } from "lucide-react";

const items = [
  ["Dashboard", "/dashboard", Home],
  ["Schedule", "/schedule", CalendarDays],
  ["Team", "/team", Users],
  ["Time Clock", "/time-clock", Clock3],
  ["Tasks", "/tasks", ClipboardList],
  ["Reports", "/reports", BarChart3],
  ["Settings", "/settings", Settings]
] as const;

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-border bg-card p-4 lg:block">
      <div className="mb-8 px-3 text-xl font-bold text-indigo-400">ShiftFlow</div>
      <nav className="space-y-2">
        {items.map(([label, href, Icon]) => (
          <Link key={label} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted">
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
