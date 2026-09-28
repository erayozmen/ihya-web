"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LEGACY_HASH_ROUTES } from "@/lib/routes";

// Old links like "/#hakkimizda" land on the homepage (fragments never reach the
// server, so no server-side redirect can catch them). Forward them to the
// section's real route so each section has exactly one URL in use.
export function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const target = LEGACY_HASH_ROUTES[decodeURIComponent(window.location.hash.slice(1))];
    if (target) router.replace(target);
  }, [router]);

  return null;
}
