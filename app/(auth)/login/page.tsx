import Link from "next/link";
import { AuthForm, AuthLinks } from "@/components/features/auth-form";

export default function LoginPage() {
  return <AuthForm title="Welcome back" description="Login to manage your workforce" cta="Sign In" footer={<>{AuthLinks.login}<br /><Link href="/forgot-password" className="text-indigo-400">Forgot password?</Link></>} />;
}
