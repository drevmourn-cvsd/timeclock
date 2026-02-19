"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { timesheet } from "@/lib/mock-data";

export function TimeClockPanel() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!running) return;
    const i = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(i);
  }, [running]);

  const formatted = `${String(Math.floor(seconds / 3600)).padStart(2, "0")}:${String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-muted p-6 text-center">
        <p className="text-sm text-muted-foreground">Live Timer</p>
        <p className="mt-2 text-4xl font-bold">{formatted}</p>
        <Button className="mt-4" onClick={() => setRunning((r) => !r)}>{running ? "Clock Out" : "Clock In"}</Button>
      </div>
      <table className="w-full overflow-hidden rounded-2xl border border-border text-sm">
        <thead className="bg-muted"><tr><th className="p-3">Date</th><th className="p-3">Clock In</th><th className="p-3">Clock Out</th><th className="p-3">Total</th></tr></thead>
        <tbody>{timesheet.map((t) => <tr key={t.date} className="border-t border-border"><td className="p-3">{t.date}</td><td className="p-3">{t.in}</td><td className="p-3">{t.out}</td><td className="p-3">{t.total}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
