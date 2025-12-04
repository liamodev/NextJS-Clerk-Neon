import { UserRole } from "./auth";

export function canAccess(
  userRole: UserRole | null,
  requiredRoles: UserRole[]
): boolean {
  if (!userRole) return false;
  return requiredRoles.includes(userRole);
}

export function isAdmin(role: UserRole | null): boolean {
  return role === "admin" || role === "super_admin";
}

export function isSuperAdmin(role: UserRole | null): boolean {
  return role === "super_admin";
}

