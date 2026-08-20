import { getActiveCenters } from "@/lib/data/centers";
import { MedreseSelector } from "./medrese-selector";

export async function MedresesSection() {
  const result = await getActiveCenters();
  if (result.status !== "error" && result.data.length === 0) return null;
  return <MedreseSelector centers={result.data} hasError={result.status === "error"} />;
}
