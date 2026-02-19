import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function AuthForm({ title, description, cta, footer, includeName = false }: { title: string; description: string; cta: string; footer: ReactNode; includeName?: boolean }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {includeName && <Input placeholder="Full name" />}
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">{cta}</Button>
        <div className="text-sm text-muted-foreground">{footer}</div>
      </CardContent>
    </Card>
  );
}

export const AuthLinks = {
  login: <span>Don&apos;t have an account? <Link href="/register" className="text-indigo-400">Register</Link></span>,
  register: <span>Already have an account? <Link href="/login" className="text-indigo-400">Login</Link></span>,
  forgot: <span>Remembered your password? <Link href="/login" className="text-indigo-400">Login</Link></span>
};
