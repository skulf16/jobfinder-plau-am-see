import Hero from "@/components/Hero";
import JobsPreview from "@/components/JobsPreview";
import CtaTiles from "@/components/CtaTiles";
import CompanyGrid from "@/components/CompanyGrid";
import { companies } from "@/data/companies";
import { fetchCompanyLogos, normalizeCompanyName } from "@/lib/wordpress";
import type { Company } from "@/data";

// Revalidate page every hour (ISR) to pick up WP logo changes
export const revalidate = 3600;

export default async function Home() {
  const logos = await fetchCompanyLogos();

  const merged: Company[] = companies.map((c) => {
    const key = normalizeCompanyName(c.name);
    const logo = logos.get(key);
    return logo ? { ...c, logo } : c;
  });

  return (
    <>
      <Hero />
      <JobsPreview companies={merged} />
      <CtaTiles />
      <CompanyGrid companies={merged} />
    </>
  );
}
