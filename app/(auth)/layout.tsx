import type { ReactNode } from "react";
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="hidden bg-gradient-to-br from-indigo-600 to-blue-500 p-12 text-white lg:block">
        <h1 className="text-4xl font-bold">ShiftFlow</h1>
        <p className="mt-4 max-w-md text-blue-100">Schedule smarter, control labor costs, and keep your team connected.</p>
      </div>
      <div className="flex items-center justify-center bg-background p-6">{children}</div>
    </div>
  );
}
