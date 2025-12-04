import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { PasswordUpdateForm } from "@/components/password-update-form";

export default async function AdminPage() {
  const user = await currentUser();
  const hasAccess = await requireRole(["admin", "super_admin"]);

  if (!user) {
    redirect("/sign-in");
  }

  if (!hasAccess) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard">← Back to Dashboard</Link>
            </Button>
            <h1 className="text-xl font-semibold">Admin Portal</h1>
          </div>
          <UserButton />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Admin Portal</h2>
          <p className="text-muted-foreground mt-2">
            Manage your password and account settings
          </p>
        </div>

        <div className="max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Update Password</CardTitle>
              <CardDescription>
                Change your account password securely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PasswordUpdateForm userId={user.id} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

