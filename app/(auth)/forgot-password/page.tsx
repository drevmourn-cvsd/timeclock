import { AuthForm, AuthLinks } from "@/components/features/auth-form";

export default function ForgotPage() {
  return <AuthForm title="Reset password" description="We will email password reset instructions" cta="Send reset link" footer={AuthLinks.forgot} />;
}
