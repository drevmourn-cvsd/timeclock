export const kpis = [
  { label: "Total Employees", value: "42", trend: "+6%" },
  { label: "Scheduled Hours (Week)", value: "1,284", trend: "+9%" },
  { label: "Labor Cost", value: "$24,560", trend: "-2%" },
  { label: "Open Shifts", value: "8", trend: "Needs attention" }
];

export const activities = [
  "Ava clocked in at Downtown Store",
  "Noah published next week schedule",
  "2 open shifts were claimed",
  "Payroll export generated for Jan 1 - Jan 7"
];

export const employees = [
  { name: "Ava Martinez", role: "Manager", email: "ava@shiftflow.com", phone: "(555) 123-8844", status: "Active", availability: "Mon-Fri", weeklyHours: 38 },
  { name: "Noah Chen", role: "Supervisor", email: "noah@shiftflow.com", phone: "(555) 200-9911", status: "Active", availability: "Tue-Sat", weeklyHours: 35 },
  { name: "Mia Johnson", role: "Cashier", email: "mia@shiftflow.com", phone: "(555) 601-2398", status: "Part-time", availability: "Weekends", weeklyHours: 18 }
];

export const shifts = [
  { id: "1", employee: "Ava", role: "Manager", start: "09:00", end: "17:00", day: "Mon", color: "bg-indigo-500" },
  { id: "2", employee: "Noah", role: "Supervisor", start: "10:00", end: "18:00", day: "Tue", color: "bg-blue-500" },
  { id: "3", employee: "Mia", role: "Cashier", start: "12:00", end: "18:00", day: "Wed", color: "bg-cyan-500" }
];

export const tasks = {
  todo: ["Create weekend coverage", "Review no-show policy"],
  progress: ["Audit overtime trends"],
  done: ["Publish holiday schedule"]
};

export const timesheet = [
  { date: "2026-01-08", in: "08:59", out: "17:03", total: "8h 04m" },
  { date: "2026-01-09", in: "09:01", out: "17:00", total: "7h 59m" }
];

export const reportData = [
  { name: "Mon", hours: 210, cost: 4200 },
  { name: "Tue", hours: 188, cost: 3800 },
  { name: "Wed", hours: 205, cost: 4100 },
  { name: "Thu", hours: 198, cost: 4000 },
  { name: "Fri", hours: 223, cost: 4600 }
];
