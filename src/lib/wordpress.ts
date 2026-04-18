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
    .replace(/&#038;/g, "&")
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/„/g, '"')
    .replace(/"/g, '"')
    .trim();
}

/**
 * Normalize company name for fuzzy matching.
 * Strips legal suffixes, special chars, and lowercases.
 */
function normalize(s: string): string {
  return decode(s)
    .toLowerCase()
    .replace(/\bgmbh\b|\bkg\b|\bag\b|\bmbh\b|\be\.?v\.?\b|\beg\b|\bgesellschaft\b/g, "")
    .replace(/[^a-zäöü0-9]+/gi, "")
    .trim();
}

/**
 * Manual aliases for names that differ between CSV and WordPress.
 * Maps CSV name (normalized) → WordPress name (normalized).
 */
const NAME_ALIASES: Record<string, string> = {
  etlschmidtparternsteuerberatungscoplauamsee: "etlschmidtpartnersteuerberatungscoplauamsee",
  wifögswm: "wirtschaftsförderungsüdwestmecklenburg",
  mediclin: "mediclinklinikenplauamsee",
};

/**
 * External logo URLs for companies not in WordPress.
 * Keyed by normalized company name.
 */
const LOGO_OVERRIDES: Record<string, string> = {
  wohnungsplauplaumbh:
    "https://wohnen-plau.de/wp-content/uploads/2026/03/wohnungsgesellschaft-plau-am-see-logo-1.png",
};

/**
 * Returns a Map from normalized company name → logo URL.
 * Combines WordPress featured media with manual overrides.
 */
export async function fetchCompanyLogos(): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  try {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/project?per_page=100`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return new Map(Object.entries(LOGO_OVERRIDES));

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
        result.set(normalize(p.title.rendered), url);
      }
    }
  } catch (e) {
    console.error("WordPress logo fetch failed:", e);
  }

  // Apply manual overrides (take precedence over WP)
  for (const [key, url] of Object.entries(LOGO_OVERRIDES)) {
    result.set(key, url);
  }

  return result;
}

/**
 * Normalize company name and apply aliases for matching.
 */
export function normalizeCompanyName(s: string): string {
  const norm = normalize(s);
  return NAME_ALIASES[norm] ?? norm;
}
