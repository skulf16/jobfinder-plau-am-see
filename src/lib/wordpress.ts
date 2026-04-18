const WP_BASE = process.env.NEXT_PUBLIC_WP_URL || "https://jobplauamsee.de";
const REVALIDATE = 3600;

interface WPProject {
  id: number;
  title: { rendered: string };
  featured_media: number;
}

interface WPMedia {
  id: number;
  source_url: string;
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#038;/g, "&");
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/gmbh|kg|ag|mbh|e\.?v\.?|eg/g, "")
    .replace(/[^a-zäöü0-9]+/gi, "")
    .trim();
}

/**
 * Returns a Map from normalized company name → logo URL.
 * Used as an override layer on top of the static companies list.
 */
export async function fetchCompanyLogos(): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  try {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/project?per_page=100`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return result;

    const projects: WPProject[] = await res.json();
    const mediaIds = [...new Set(projects.map((p) => p.featured_media).filter((id) => id > 0))];

    const mediaResults = await Promise.all(
      mediaIds.map((id) =>
        fetch(`${WP_BASE}/wp-json/wp/v2/media/${id}`, {
          next: { revalidate: REVALIDATE },
        }).then((r) => (r.ok ? (r.json() as Promise<WPMedia>) : null))
      )
    );
    const mediaMap = new Map<number, string>();
    for (const m of mediaResults) {
      if (m) mediaMap.set(m.id, m.source_url);
    }

    for (const p of projects) {
      const url = mediaMap.get(p.featured_media);
      if (url) {
        result.set(normalize(decode(p.title.rendered)), url);
      }
    }
  } catch (e) {
    console.error("WordPress logo fetch failed:", e);
  }
  return result;
}

export { normalize as normalizeCompanyName };
