import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpis, activities } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardHeader className="pb-2">
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
              <CardTitle>{kpi.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-indigo-400">{kpi.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            {activities.map((item) => <li key={item} className="rounded-lg bg-muted p-3">{item}</li>)}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
