import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card><CardHeader><CardTitle>Company Profile</CardTitle></CardHeader><CardContent className="space-y-3"><Input defaultValue="Acme Retail Group" /><Input defaultValue="support@acme.com" /><Button>Save</Button></CardContent></Card>
      <Card><CardHeader><CardTitle>Business Hours</CardTitle></CardHeader><CardContent className="space-y-3"><Input defaultValue="Mon-Fri 8:00 - 20:00" /><Input defaultValue="Sat-Sun 10:00 - 18:00" /><Button>Update</Button></CardContent></Card>
      <Card><CardHeader><CardTitle>Roles & Permissions</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>Admin: full access</p><p>Manager: schedule, team, reports</p><p>Employee: shifts, clock, tasks</p></CardContent></Card>
      <Card><CardHeader><CardTitle>Notification Preferences</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Shift reminders</label><label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Overtime alerts</label><label className="flex items-center gap-2"><input type="checkbox" /> Open shifts digest</label></CardContent></Card>
    </div>
  );
}
