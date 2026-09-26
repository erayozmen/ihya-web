import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type DataFallbackProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
};

// Shown in place of live Supabase data when it is empty or unreachable —
// points visitors at real channels instead of leaving a bare error line.
export function DataFallback({ icon: Icon, title, children, actions }: DataFallbackProps) {
  return (
    <div className="data-fallback" role="status">
      <span className="data-fallback__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.5} />
      </span>
      <div className="data-fallback__copy">
        <h3>{title}</h3>
        <p>{children}</p>
        {actions && <div className="data-fallback__actions">{actions}</div>}
      </div>
    </div>
  );
}
