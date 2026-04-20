const badgeColors: Record<string, string> = {
  // Arbeitszeit-Modelle
  vollzeit: "text-secondary bg-secondary/10",
  teilzeit: "text-[#8B5CF6] bg-[#8B5CF6]/10",
  minijob: "text-[#EC4899] bg-[#EC4899]/10",
  // Technische Begriffe (für einzelne Stellen)
  festanstellung: "text-success bg-success/10",
  ausbildung: "text-primary bg-primary/10",
  praktikum: "text-[#14B8A6] bg-[#14B8A6]/10",
  ferienjob: "text-[#B89806] bg-[#EAB308]/10",
  "duales studium": "text-[#6366F1] bg-[#6366F1]/10",
  // Company-Card Labels
  mitarbeiter: "text-success bg-success/10",
  azubis: "text-primary bg-primary/10",
  "duale studenten": "text-[#6366F1] bg-[#6366F1]/10",
  praktikanten: "text-[#14B8A6] bg-[#14B8A6]/10",
  ferienjobber: "text-[#B89806] bg-[#EAB308]/10",
};

export default function JobBadge({ type }: { type: string }) {
  const key = type.toLowerCase();
  const colors = badgeColors[key] || "text-gray-500 bg-gray-500/10";

  return (
    <span className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg uppercase tracking-wider ${colors}`}>
      {type}
    </span>
  );
}
