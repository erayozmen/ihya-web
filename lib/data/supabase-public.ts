import "server-only";

const REVALIDATE_SECONDS = 300;

export type PublicDataResult<T> =
  | { status: "success"; data: T }
  | { status: "unconfigured"; data: T }
  | { status: "error"; data: T };

function getPublicConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  return url && key ? { url, key } : null;
}

export async function readPublicView<T>(
  view: string,
  query: URLSearchParams,
  tag: string,
): Promise<PublicDataResult<T[]>> {
  const config = getPublicConfig();
  if (!config) return { status: "unconfigured", data: [] };

  try {
    const response = await fetch(
      `${config.url}/rest/v1/${view}?${query.toString()}`,
      {
        headers: {
          apikey: config.key,
          Authorization: `Bearer ${config.key}`,
        },
        next: { revalidate: REVALIDATE_SECONDS, tags: [tag] },
      },
    );

    if (!response.ok) throw new Error(`Public data request failed: ${response.status}`);
    return { status: "success", data: (await response.json()) as T[] };
  } catch {
    return { status: "error", data: [] };
  }
}

export function getPublicStorageUrl(path?: string | null) {
  const config = getPublicConfig();
  if (!config || !path?.trim()) return undefined;
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return `${config.url}/storage/v1/object/public/public-content/${encodedPath}`;
}
