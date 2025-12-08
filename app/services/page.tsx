import Link from "next/link";
import Section from "@/components/ui/Section";

const tiers = [
  {
    name: "Tier 1 – Small Internal Tool",
    summary: "1–2 screens to replace a spreadsheet or simple intake workflow.",
    priceHint: "Typically starts around $400.",
    bullets: [
      "Great for a quick dashboard, intake form + table, or single-view report.",
      "Clean UI with the exact fields and filters you actually use.",
      "Built to hand off: clear structure and easy edits.",
    ],
  },
  {
    name: "Tier 2 – Small App / CRM",
    summary: "3–5 screens with CRUD, lists, and filters.",
    priceHint: "Best for small teams or solo founders.",
    bullets: [
      "Simple CRM, client portal, or project tracker with real data flows.",
      "Search, filter, and sort so you can actually find things.",
      "Opinionated architecture ready to grow if you need it.",
    ],
  },
  {
    name: "Tier 3 – MVP Web App",
    summary: "Up to ~8 screens with basic auth and multiple workflows.",
    priceHint: "Includes a short planning session to define scope.",
    bullets: [
      "Early-stage SaaS MVP to show users or investors quickly.",
      "Multi-step workflows, checklists, and simple automation hooks.",
      "Clear milestones and demo-ready builds each week.",
    ],
  },
];

const process = [
  {
    title: "Discovery",
    detail: "You tell me the problem in normal language.",
  },
  {
    title: "Scoping",
    detail: "I map it to screens, flows, and a fixed price.",
  },
  {
    title: "Build",
    detail: "Implemented with Next.js + AI dev tools for speed.",
  },
  {
    title: "Handoff",
    detail: "You get the code, docs, and a support window.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14">
      <Section title="Services" subtitle="Pick the level that fits your idea and budget.">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="lf-card h-full p-6 space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">{tier.name}</h2>
                <p className="text-sm text-slate-300">{tier.summary}</p>
              </div>
              <p className="text-sm font-semibold text-emerald-200">{tier.priceHint}</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {tier.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Process">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <div key={step.title} className="lf-card h-full space-y-2 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200">
                  {index + 1}
                </span>
                {step.title}
              </div>
              <p className="text-sm text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="lf-card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-white">Ready to scope your build?</h3>
          <p className="text-sm text-slate-300">
            Share your idea, must-haves, and timeline. I’ll reply with a clear plan.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01] hover:bg-emerald-300"
        >
          Message me about your project
        </Link>
      </div>
    </div>
  );
}

