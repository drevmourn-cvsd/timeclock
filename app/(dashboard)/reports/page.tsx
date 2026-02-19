import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReportsView } from "@/components/features/reports-view";

export default function ReportsPage() {
  return <Card><CardHeader><CardTitle>Reports</CardTitle></CardHeader><CardContent><ReportsView /></CardContent></Card>;
}
