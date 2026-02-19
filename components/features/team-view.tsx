"use client";

import { useState } from "react";
import { employees } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function TeamView() {
  const [selected, setSelected] = useState(employees[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left">
            <tr>{["Name", "Role", "Email", "Phone", "Status"].map((h) => <th key={h} className="p-3">{h}</th>)}</tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.email} className="border-t border-border hover:bg-muted/50" onClick={() => setSelected(emp)}>
                <td className="p-3">{emp.name}</td><td className="p-3">{emp.role}</td><td className="p-3">{emp.email}</td><td className="p-3">{emp.phone}</td><td className="p-3"><Badge>{emp.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-4 rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Employee Profile</h3>
          <Modal title="Add Employee" trigger={<Button size="sm">Add</Button>}>
            <div className="grid gap-3">
              <Input placeholder="Name" /><Input placeholder="Role" /><Input placeholder="Email" /><Input placeholder="Phone" /><Button>Add Employee</Button>
            </div>
          </Modal>
        </div>
        <p className="text-lg font-medium">{selected.name}</p>
        <p className="text-sm text-muted-foreground">{selected.role}</p>
        <div className="rounded-xl bg-muted p-3 text-sm">Availability: {selected.availability}</div>
        <div className="rounded-xl bg-muted p-3 text-sm">Weekly Hours: {selected.weeklyHours}</div>
      </div>
    </div>
  );
}
