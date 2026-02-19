"use client";

import { Download } from "lucide-react";
import { reportData } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function ReportsView() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Input type="date" className="w-44" />
        <Input type="date" className="w-44" />
        <Button variant="outline"><Download className="mr-2 h-4 w-4" />Export CSV</Button>
      </div>
      <div className="h-80 rounded-2xl border border-border bg-card p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={reportData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hours" fill="#6366f1" radius={[8, 8, 0, 0]} />
            <Bar dataKey="cost" fill="#06b6d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
