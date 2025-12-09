import Link from "next/link";
import Pill from "@/components/ui/Pill";
import Section from "@/components/ui/Section";

const serviceHighlights = [
  {
    title: "Custom Web Apps & MVPs",
    description:
      "Designing and building full-stack web apps and MVPs you can demo to users or investors.",
  },
  {
    title: "Dashboards & Internal Tools",
    description:
      "Job boards, CRMs, analytics dashboards, and ops tools — the same kind I use to run my own work.",
  },
  {
    title: "Launchframe Templates & Dev Kits",
    description:
      "Pre-built starters for freelancers and founders: dashboards, client portals, and more.",
  },
];

const whyItems = [
  "AI-powered development (Cursor, GPT, Claude) for faster delivery.",
  "Real architecture under the hood – not copy/paste scripts.",
  "Clear scope, clean communication, and practical features.",
];

export default function Home() {
  return (
    <div className="space-y-16 pb-6">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <Pill>Launchframe</Pill>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              I build custom web apps, dashboards & MVPs with AI-speed
              execution.
            </h1>
            <p className="text-lg text-slate-300">
              I use Next.js, TypeScript, Tailwind and AI dev tools (Cursor, GPT,
              Claude) to turn ideas and messy spreadsheets into real products.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.fiverr.com/s/xXxd84Q"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01] hover:bg-emerald-300"
            >
              Hire me to build your app
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 font-semibold text-emerald-200 transition hover:border-emerald-400/60 hover:text-emerald-200/90"
            >
              See what I’ve built
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-400">
            <Pill className="text-sm">MVPs</Pill>
            <Pill className="text-sm">Dashboards</Pill>
            <Pill className="text-sm">Internal tools</Pill>
            <Pill className="text-sm">AI-assisted delivery</Pill>
          </div>
        </div>

        <div className="lf-card space-y-4 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-400/20 ring-1 ring-emerald-400/40" />
            <div>
              <p className="text-sm text-emerald-200">Launchframe approach</p>
              <p className="text-lg font-semibold text-white">
                Speed with real architecture
              </p>
            </div>
          </div>
          <p className="text-slate-300">
            I pair product thinking with AI-accelerated build cycles, so you get
            clean, shippable code fast — not a pile of scripts.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3">
              <p className="text-sm text-slate-400">Stack</p>
              <p className="font-semibold text-white">
                Next.js · TypeScript · Tailwind
              </p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3">
              <p className="text-sm text-slate-400">Tools</p>
              <p className="font-semibold text-white">Cursor · GPT · Claude</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="What I do"
        subtitle="Modern web products, delivered quickly with AI-assisted workflows."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item.title} className="lf-card h-full p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Live Demo Highlight">
        <div className="lf-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              Empire Ops – My Personal Ops Dashboard
            </h3>
            <p className="text-sm text-slate-300">
              The internal system I use to manage jobs, income, deadlines, and
              channels. It keeps my freelance work organized and predictable.
            </p>
          </div>
          <Link
            href="https://job-dashboard-qph7-e8hohyxky-robert-shorts-projects.vercel.app/"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-emerald-400/70 px-4 font-semibold text-emerald-200 transition hover:bg-emerald-400/10"
            target="_blank"
            rel="noreferrer"
          >
            View the live demo
          </Link>
        </div>
      </Section>

      <Section title="Why work with me">
        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {whyItems.map((item) => (
            <li key={item} className="lf-card h-full p-4 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
