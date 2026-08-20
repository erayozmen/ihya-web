import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return <Link className={`button button--${variant} ${className}`} {...props} />;
}
