import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimeClockPanel } from "@/components/features/time-clock";

export default function TimeClockPage() {
  return <Card><CardHeader><CardTitle>Time Clock</CardTitle></CardHeader><CardContent><TimeClockPanel /></CardContent></Card>;
}
