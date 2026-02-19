import { tasks } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const columns: Array<{ key: keyof typeof tasks; title: string }> = [
  { key: "todo", title: "To Do" },
  { key: "progress", title: "In Progress" },
  { key: "done", title: "Done" }
];

export function TasksBoard() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Modal title="Create Task" trigger={<Button size="sm">New Task</Button>}>
          <div className="grid gap-3">
            <Input placeholder="Task title" />
            <Input placeholder="Assignee" />
            <Input placeholder="Due date" type="date" />
            <Button>Create</Button>
          </div>
        </Modal>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.key} className="rounded-2xl border border-border bg-muted p-3">
            <h3 className="mb-3 text-sm font-semibold">{col.title}</h3>
            <div className="space-y-2">
              {tasks[col.key].map((task) => <div key={task} className="rounded-xl bg-card p-3 text-sm shadow-soft">{task}</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
