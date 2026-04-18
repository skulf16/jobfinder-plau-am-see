"use client";

import { useState } from "react";
import Link from "next/link";
import {
  JF_QUESTIONS,
  JF_JOBS,
  JF_COMPANIES,
  type JFJob,
  type JFCompany,
} from "@/data/index";

/* ============================================================
   TYPES
============================================================ */

interface Answers {
  jobSearchType: string[];
  interests: string[];
  activities: string[];
  dislikes: string[];
  traits: string[];
  workingHours: string[];
  importance: Record<string, number>;
}

interface MatchResult {
  job: JFJob;
  company: JFCompany;
  score: number;
  percent: number;
}

/* ============================================================
   MATCHING ALGORITHM
============================================================ */

function computeMatches(answers: Answers): MatchResult[] {
  const results: MatchResult[] = [];

  for (const job of JF_JOBS) {
    const company = JF_COMPANIES.find((c) => c.id === job.companyId);
    if (!company) continue;

    let score = 0;
    let maxScore = 0;

    // --- Job search type match (3 pts each) ---
    if (answers.jobSearchType.length > 0) {
      maxScore += 3;
      const overlap = answers.jobSearchType.filter((t) =>
        job.type.includes(t)
      ).length;
      if (overlap > 0) score += 3;
    }

    // --- Interests match (2 pts each) ---
    if (answers.interests.length > 0) {
      const pts = answers.interests.length * 2;
      maxScore += pts;
      const overlap = answers.interests.filter((i) =>
        job.interests.includes(i)
      ).length;
      score += overlap * 2;
    }

    // --- Activities match (2 pts each) ---
    if (answers.activities.length > 0) {
      const pts = answers.activities.length * 2;
      maxScore += pts;
      const overlap = answers.activities.filter((a) =>
        job.activities.includes(a)
      ).length;
      score += overlap * 2;
    }

    // --- Traits match (1 pt each) ---
    if (answers.traits.length > 0) {
      const pts = answers.traits.length;
      maxScore += pts;
      const overlap = answers.traits.filter((t) =>
        job.traits.includes(t)
      ).length;
      score += overlap;
    }

    // --- Dislikes penalty (−2 pts each overlap) ---
    if (answers.dislikes.length > 0) {
      const maxPenalty = answers.dislikes.length * 2;
      maxScore += maxPenalty; // potential that was lost
      const overlap = answers.dislikes.filter((d) =>
        job.dislikes.includes(d)
      ).length;
      score -= overlap * 2;
    }

    // --- Working hours match (1 pt) ---
    if (answers.workingHours.length > 0) {
      maxScore += 1;
      const wantsEgal = answers.workingHours.includes("Egal");
      const overlap = answers.workingHours.filter((h) =>
        job.workingHours.includes(h)
      ).length;
      if (wantsEgal || overlap > 0) score += 1;
    }

    // --- Importance ratings (compare user vs job, 1 pt each close match) ---
    const importanceKeys: (keyof typeof job.ratings)[] = [
      "workHours",
      "pay",
      "training",
      "team",
      "environment",
      "security",
    ];
    for (const key of importanceKeys) {
      const userImportance = answers.importance[key];
      if (userImportance !== undefined) {
        maxScore += 1;
        const jobRating = job.ratings[key];
        // User wants >= 4 (important) → job should deliver >= 4
        if (userImportance >= 4 && jobRating >= 4) score += 1;
        // User indifferent (<=2) → always matches
        if (userImportance <= 2) score += 1;
        // Middle ground: close enough
        if (userImportance === 3 && Math.abs(jobRating - 3) <= 1) score += 1;
      }
    }

    // Guard against division by zero / negative scores
    if (maxScore === 0) continue;
    const clampedScore = Math.max(0, score);
    const percent = Math.round((clampedScore / maxScore) * 100);

    results.push({ job, company, score: clampedScore, percent });
  }

  return results
    .filter((r) => r.percent >= 50)
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 8);
}

/* ============================================================
   SMALL HELPER COMPONENTS
============================================================ */

function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex gap-1.5 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
            i < current
              ? "bg-gray-300"
              : i === current
              ? "bg-[#F97E1A]"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Zurück
    </button>
  );
}

/* ============================================================
   QUESTION SCREENS
============================================================ */

function MultipleChoiceQuestion({
  question,
  selected,
  onToggle,
}: {
  question: (typeof JF_QUESTIONS)[number];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {question.options?.map((opt) => {
        const isSelected = selected.includes(opt.value);
        return (
          <button
            key={opt.value}
            onClick={() => onToggle(opt.value)}
            className={`text-left px-5 py-4 rounded-2xl border-2 transition-all duration-150 text-sm font-medium ${
              isSelected
                ? "border-[#F97E1A] bg-[#F97E1A]/5 text-[#F97E1A]"
                : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function RatingQuestion({
  subQuestions,
  ratings,
  onRate,
}: {
  subQuestions: NonNullable<(typeof JF_QUESTIONS)[number]["subQuestions"]>;
  ratings: Record<string, number>;
  onRate: (category: string, value: number) => void;
}) {
  return (
    <div className="space-y-5">
      {subQuestions.map((sq) => (
        <div key={sq.category}>
          <p className="text-sm font-medium text-gray-700 mb-2">{sq.label}</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((v) => (
              <button
                key={v}
                onClick={() => onRate(sq.category, v)}
                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  ratings[sq.category] === v
                    ? "bg-[#0F71C3] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {v}
              </button>
            ))}
            <span className="self-center text-xs text-gray-400 ml-1">
              {ratings[sq.category]
                ? ratings[sq.category] <= 2
                  ? "Weniger wichtig"
                  : ratings[sq.category] === 3
                  ? "Neutral"
                  : "Wichtig"
                : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   RESULT CARD
============================================================ */

function ResultCard({ result }: { result: MatchResult }) {
  const { job, company, percent } = result;

  const tags: { label: string; color: string }[] = [];
  if (job.ratings.training >= 4)
    tags.push({ label: "Weiterbildung", color: "bg-blue-100 text-blue-700" });
  if (job.ratings.pay >= 4)
    tags.push({
      label: "Gute Bezahlung",
      color: "bg-orange-100 text-orange-700",
    });
  if (job.ratings.team >= 4)
    tags.push({ label: "Top Team", color: "bg-green-100 text-green-700" });

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
      {/* Match badge */}
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold bg-[#F97E1A]/10 text-[#F97E1A] px-3 py-1 rounded-full">
          {percent}% Match
        </span>
      </div>

      {/* Company */}
      <p className="text-xs font-bold tracking-widest text-[#F97E1A] uppercase mb-1">
        {company.name}
      </p>

      {/* Job title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 ">
        {job.title}
      </h3>

      {/* Location + types */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          📍 {company.location}
        </span>
        {job.type.slice(0, 2).map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`text-xs font-medium px-3 py-1 rounded-full ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <a
        href={`mailto:${company.email}?subject=Bewerbung: ${job.title}`}
        className="inline-block bg-[#0F71C3] text-white text-sm font-semibold rounded-xl px-5 py-2.5 hover:bg-[#0a5fa8] transition-colors"
      >
        Jetzt bewerben
      </a>
    </div>
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */

const TOTAL_QUESTIONS = JF_QUESTIONS.length;

export default function JobfinderPage() {
  const [step, setStep] = useState<"welcome" | "quiz" | "results">("welcome");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    jobSearchType: [],
    interests: [],
    activities: [],
    dislikes: [],
    traits: [],
    workingHours: [],
    importance: {},
  });
  const [results, setResults] = useState<MatchResult[]>([]);

  /* ---- answer helpers ---- */

  function toggleMultiple(category: keyof Answers, value: string) {
    setAnswers((prev) => {
      const current = prev[category] as string[];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  }

  function setRating(category: string, value: number) {
    setAnswers((prev) => ({
      ...prev,
      importance: { ...prev.importance, [category]: value },
    }));
  }

  /* ---- navigation ---- */

  function handleNext() {
    if (questionIndex < TOTAL_QUESTIONS - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      // Compute results and show results screen
      const matches = computeMatches(answers);
      setResults(matches);
      setStep("results");
    }
  }

  function handleBack() {
    if (questionIndex === 0) {
      setStep("welcome");
    } else {
      setQuestionIndex((i) => i - 1);
    }
  }

  function handleRestart() {
    setStep("welcome");
    setQuestionIndex(0);
    setAnswers({
      jobSearchType: [],
      interests: [],
      activities: [],
      dislikes: [],
      traits: [],
      workingHours: [],
      importance: {},
    });
    setResults([]);
  }

  /* ---- current question data ---- */

  const currentQuestion = JF_QUESTIONS[questionIndex];

  function getCurrentSelected(): string[] {
    const cat = currentQuestion.category as keyof Answers;
    if (cat === "importance") return [];
    return (answers[cat] as string[]) ?? [];
  }

  function isNextEnabled(): boolean {
    if (currentQuestion.type === "rating") {
      // Allow skipping rating (all optional) but require at least 1
      return Object.keys(answers.importance).length > 0;
    }
    const cat = currentQuestion.category as keyof Answers;
    if (cat === "importance") return true;
    return ((answers[cat] as string[]) ?? []).length > 0;
  }

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-1 via-hero-2 to-secondary bg-[length:200%_200%] animate-[heroGradient_12s_ease_infinite] pt-[96px] pb-12 px-4">
      {/* Back to home */}
      <div className="max-w-[800px] mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Zurück zur Startseite
        </Link>
      </div>

      {/* ---- WELCOME ---- */}
      {step === "welcome" && (
        <div className="max-w-[800px] mx-auto bg-white rounded-[32px] p-12 shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F97E1A]/10 mb-6">
            <svg
              className="w-8 h-8 text-[#F97E1A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 ">
            Plauer Jobfinder
          </h1>
          <p className="text-gray-500 text-lg mb-2 max-w-md mx-auto">
            Finde deinen perfekten Job in Plau am See – in nur 7 Fragen.
          </p>
          <p className="text-gray-400 text-sm mb-10">
            Der Quiz dauert ca. 2 Minuten und ist kostenlos.
          </p>
          <button
            onClick={() => setStep("quiz")}
            className="bg-[#0F71C3] text-white font-semibold rounded-2xl px-11 py-4 text-base hover:bg-[#0a5fa8] transition-colors shadow-sm"
          >
            Jetzt Jobfinder starten
          </button>
        </div>
      )}

      {/* ---- QUIZ ---- */}
      {step === "quiz" && (
        <div className="max-w-[800px] mx-auto bg-white rounded-[32px] p-12 shadow-sm">
          {/* Progress */}
          <ProgressBar current={questionIndex} total={TOTAL_QUESTIONS} />

          {/* Question counter */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Frage {questionIndex + 1} von {TOTAL_QUESTIONS}
          </p>

          {/* Question text */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8 ">
            {currentQuestion.text}
          </h2>

          {/* Question body */}
          {currentQuestion.type === "multiple" && (
            <MultipleChoiceQuestion
              question={currentQuestion}
              selected={getCurrentSelected()}
              onToggle={(value) =>
                toggleMultiple(
                  currentQuestion.category as keyof Answers,
                  value
                )
              }
            />
          )}

          {currentQuestion.type === "rating" &&
            currentQuestion.subQuestions && (
              <RatingQuestion
                subQuestions={currentQuestion.subQuestions}
                ratings={answers.importance}
                onRate={setRating}
              />
            )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <BackButton onClick={handleBack} />
            <button
              onClick={handleNext}
              disabled={!isNextEnabled()}
              className="bg-[#0F71C3] text-white font-semibold rounded-2xl px-11 py-4 text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#0a5fa8] transition-colors"
            >
              {questionIndex < TOTAL_QUESTIONS - 1 ? "Weiter" : "Ergebnis anzeigen"}
            </button>
          </div>
        </div>
      )}

      {/* ---- RESULTS ---- */}
      {step === "results" && (
        <div className="max-w-[800px] mx-auto">
          {/* Header card */}
          <div className="bg-white rounded-[32px] p-12 shadow-sm mb-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#52BC20]/10 mb-5">
              <svg
                className="w-7 h-7 text-[#52BC20]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 ">
              Deine Treffer
            </h2>
            {results.length > 0 ? (
              <p className="text-gray-500">
                Wir haben{" "}
                <span className="font-semibold text-gray-700">
                  {results.length} passende
                  {results.length === 1 ? " Stelle" : " Stellen"}
                </span>{" "}
                für dich gefunden.
              </p>
            ) : (
              <p className="text-gray-500">
                Leider haben wir keine passenden Stellen gefunden. Versuche es
                mit anderen Antworten.
              </p>
            )}
          </div>

          {/* Result cards */}
          {results.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {results.map((r) => (
                <ResultCard key={r.job.id} result={r} />
              ))}
            </div>
          )}

          {/* Restart */}
          <div className="text-center">
            <button
              onClick={handleRestart}
              className="bg-white text-gray-700 font-semibold rounded-2xl px-8 py-3 border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
            >
              Quiz neu starten
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
