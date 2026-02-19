import { AuthForm, AuthLinks } from "@/components/features/auth-form";

export default function RegisterPage() {
  return <AuthForm title="Create account" description="Start scheduling in minutes" cta="Register" includeName footer={AuthLinks.register} />;
}
