import { Badge } from "@/components/ui/badge";
import { UserRole } from "@/lib/auth";

interface RoleBadgeProps {
  role: UserRole;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  const variantMap = {
    user: "secondary" as const,
    admin: "default" as const,
    super_admin: "default" as const,
  };

  const labelMap = {
    user: "User",
    admin: "Admin",
    super_admin: "Super Admin",
  };

  return (
    <Badge variant={variantMap[role]}>
      {labelMap[role]}
    </Badge>
  );
}

