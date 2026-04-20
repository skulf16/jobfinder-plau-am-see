import Hero from "@/components/Hero";
import JobsPreview from "@/components/JobsPreview";
import CtaTiles from "@/components/CtaTiles";
import CompanyGrid from "@/components/CompanyGrid";
import { companies } from "@/data/companies";
import type { Company } from "@/data";

export default function Home() {
  const data = companies as Company[];
  return (
    <>
      <Hero />
      <JobsPreview companies={data} />
      <CtaTiles />
      <CompanyGrid companies={data} />
    </>
  );
}
