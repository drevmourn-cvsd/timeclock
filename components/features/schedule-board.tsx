"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { shifts } from "@/lib/mock-data";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function ScheduleBoard() {
  const [dragId, setDragId] = useState<string | null>(null);
  const [items, setItems] = useState(shifts);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Modal
          title="Create / Edit Shift"
          trigger={<Button>Create Shift</Button>}
        >
          <div className="grid gap-3">
            <Input placeholder="Employee" />
            <Input placeholder="Role" />
            <Input type="time" />
            <Input type="time" />
            <Input placeholder="Notes" />
            <Button>Save Shift</Button>
          </div>
        </Modal>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-border">
        <div className="grid min-w-[900px] grid-cols-8 bg-card text-sm">
          <div className="border-b border-r border-border p-3 font-medium">Employee</div>
          {days.map((day) => <div key={day} className="border-b border-r border-border p-3 font-medium">{day}</div>)}
          {["Ava", "Noah", "Mia"].map((employee) => (
            <div key={employee} className="contents">
              <div className="border-r border-border p-3 font-medium">{employee}</div>
              {days.map((day) => (
                <div
                  key={`${employee}-${day}`}
                  className="relative h-24 border-r border-t border-border p-2"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => {
                    if (!dragId) return;
                    setItems((prev) => prev.map((s) => (s.id === dragId ? { ...s, day, employee } : s)));
                    setDragId(null);
                  }}
                >
                  {items.filter((s) => s.employee === employee && s.day === day).map((shift) => (
                    <div
                      key={shift.id}
                      draggable
                      onDragStart={() => setDragId(shift.id)}
                      className={`absolute left-2 right-2 top-2 cursor-grab rounded-lg px-2 py-1 text-xs text-white ${shift.color}`}
                    >
                      {shift.start}-{shift.end} {shift.role}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
