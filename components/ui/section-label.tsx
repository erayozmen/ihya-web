import type { ComponentPropsWithoutRef } from "react";

export function SectionLabel({ className = "", ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={`section-label ${className}`} {...props} />;
}
