import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/siteConfig";

const tiers = [
  {
    name: "Small Internal Tool",
    summary: "1–2 screens. Replace a spreadsheet or manual process with a focused internal tool.",
    includes: [
      "1–2 core screens (e.g. table + detail view)",
      "Basic filtering/search",
      "Simple forms to create/update records",
      "Responsive layout",
    ],
    bestFor:
      "Freelancers, solo operators, small teams who want to kill one specific pain point.",
    priceHint: "Typically starts around $400–$500.",
  },
  {
    name: "Small App / CRM",
    summary: "3–5 screens. A small but complete app with lists, details, and basic workflows.",
    includes: [
      "3–5 screens (dashboard, list views, detail views)",
      "Simple role or user types if needed",
      "Basic authentication (login / signup)",
      "Optional admin views for managing data",
    ],
    bestFor: "Small teams, agencies, or founders who need a “real app” for their day-to-day.",
    priceHint: "Often lands in the mid-range, depending on complexity.",
  },
  {
    name: "MVP Web App",
    summary: "A lean but real MVP you can ship to early users or demo to investors.",
    includes: [
      "Up to ~8 screens",
      "Auth + basic role logic",
      "Multiple flows (e.g. onboarding, main workflow, reporting)",
      "Clean UI styled like a modern SaaS",
    ],
    bestFor: "Founders validating a product idea or teams replacing a legacy tool.",
    priceHint:
      "Priced based on scope. We’ll define the feature set together before we start.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14">
      <Section
        title="Services"
        subtitle="Pick the level that matches your idea, timeline and budget. We can always customize from here."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="lf-card h-full space-y-4 p-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">{tier.name}</h2>
                <p className="text-sm text-slate-300">{tier.summary}</p>
              </div>
              <div className="space-y-2 rounded-lg border border-white/5 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-200">
                  What’s included
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-white">Best for</p>
                <p className="text-slate-300">{tier.bestFor}</p>
              </div>
              <p className="text-sm font-semibold text-emerald-200">{tier.priceHint}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="lf-card space-y-4 p-6 sm:flex sm:items-center sm:justify-between sm:space-y-0">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Not sure which fits?</h3>
          <p className="text-sm text-slate-300">
            Tell me what you’re trying to accomplish and I’ll recommend a path that makes
            sense.
          </p>
        </div>
        <Link
          href={siteConfig.links.fiverr}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01] hover:bg-emerald-300"
          target="_blank"
          rel="noreferrer"
        >
          Talk to me on Fiverr
        </Link>
      </div>
    </div>
  );
}

