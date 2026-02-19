import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TasksBoard } from "@/components/features/tasks-board";

export default function TasksPage() {
  return <Card><CardHeader><CardTitle>Tasks</CardTitle></CardHeader><CardContent><TasksBoard /></CardContent></Card>;
}
