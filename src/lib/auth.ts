import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export type UserRole = "user" | "admin" | "super_admin";

export async function getCurrentUserRole(): Promise<UserRole | null> {
  try {
    const { userId } = await auth();
    if (!userId) return null;

    const user = await db
      .select()
      .from(users)
      .where(eq(users.clerkId, userId))
      .limit(1);

    return (user[0]?.role as UserRole) || null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
}

export async function getCurrentClerkUser() {
  return await currentUser();
}

export async function requireRole(allowedRoles: UserRole[]): Promise<boolean> {
  const role = await getCurrentUserRole();
  if (!role) return false;
  return allowedRoles.includes(role);
}

