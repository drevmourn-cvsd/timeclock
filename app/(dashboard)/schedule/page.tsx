import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScheduleBoard } from "@/components/features/schedule-board";

export default function SchedulePage() {
  return <Card><CardHeader><CardTitle>Weekly Schedule</CardTitle></CardHeader><CardContent><ScheduleBoard /></CardContent></Card>;
}
