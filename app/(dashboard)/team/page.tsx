import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TeamView } from "@/components/features/team-view";

export default function TeamPage() {
  return <Card><CardHeader><CardTitle>Team</CardTitle></CardHeader><CardContent><TeamView /></CardContent></Card>;
}
