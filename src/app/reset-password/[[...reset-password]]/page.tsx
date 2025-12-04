import { ResetPassword } from "@clerk/nextjs";

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Reset your password
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your email to receive a password reset link
          </p>
        </div>
        <div className="flex justify-center">
          <ResetPassword
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-xl border border-border",
                headerTitle: "text-2xl font-semibold",
                headerSubtitle: "text-muted-foreground",
                formButtonPrimary:
                  "bg-primary hover:bg-primary/90 text-primary-foreground",
                footerActionLink: "text-primary hover:text-primary/80",
                formFieldInput:
                  "border-border focus:border-primary focus:ring-primary",
              },
            }}
            routing="path"
            path="/reset-password"
            signInUrl="/sign-in"
          />
        </div>
      </div>
    </div>
  );
}

