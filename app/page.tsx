import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/siteConfig";

const whoIBuildFor = [
  {
    title: "Solo founders",
    description:
      "You have an idea, a rough spec, or even just a Notion doc — you need an MVP you can show to users, investors or early customers.",
  },
  {
    title: "Small teams & agencies",
    description:
      "You’re drowning in spreadsheets, manual processes and half-working tools. You need dashboards, CRMs or internal tools that actually match your workflow.",
  },
  {
    title: "Freelancers & creators",
    description:
      "You want systems: job tracking, deadlines, income visibility and client portals. The stuff that keeps your business organized without feeling like a second job.",
  },
];

const whatIBuild = [
  {
    title: "Custom Web Apps & MVPs",
    description:
      "New product ideas, early-stage SaaS, or “I wish there was an app for this” tools. Authentication, basic role logic, and clean UIs that feel like a real product — not a prototype.",
  },
  {
    title: "Dashboards & Internal Tools",
    description:
      "Job boards, CRMs, admin tools, project trackers, analytics views. The boring-but-critical tools that quietly run your day-to-day.",
  },
  {
    title: "Launchframe Templates & Dev Kits",
    description:
      "Prebuilt starting points for freelancers and founders: ops dashboards, client portals, small CRMs and starter kits you can customize or extend.",
  },
];

const processSteps = [
  {
    title: "Listen",
    detail:
      "You tell me what hurts: what’s slow, messy or blocking you. No need for technical language — just describe the process.",
  },
  {
    title: "Shape",
    detail:
      "I translate your ideas into screens, flows and data models. We agree on scope so you know exactly what you’re getting.",
  },
  {
    title: "Build",
    detail:
      "I use Next.js + AI dev tools (Cursor, GPT, Claude) to build fast without losing structure. Every feature still goes through my eyes and hands.",
  },
  {
    title: "Deliver",
    detail:
      "You get a working app, source code, and run/deploy instructions. If you want, I can also help put it on Vercel, Render or your chosen host.",
  },
];

const expectations = [
  "Straightforward communication, no buzzword soup.",
  "Clear scope before we start.",
  "Practical features that match your workflow.",
  "Room to grow — the codebase won’t fight you later.",
];

export default function Home() {
  return (
    <div className="space-y-16 pb-6">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Custom web apps, dashboards &amp; MVPs — built fast with
              AI-powered development.
            </h1>
            <p className="text-lg text-slate-300">
              I’m Rob. I use Next.js, TypeScript, Tailwind and AI dev tools
              (Cursor, GPT, Claude) to turn vague ideas, messy spreadsheets and
              half-finished tools into real products.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={siteConfig.links.fiverr}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01] hover:bg-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              Hire me on Fiverr
            </Link>
            <Link
              href={siteConfig.links.dashboard}
              className="inline-flex items-center justify-center rounded-lg border border-emerald-400/70 px-5 py-3 font-semibold text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-100"
              target="_blank"
              rel="noreferrer"
            >
              Open Job Dashboard
            </Link>
            <Link
              href={siteConfig.links.empireOpsDemo}
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 font-semibold text-emerald-200 transition hover:border-emerald-400/60 hover:text-emerald-200/90"
              target="_blank"
              rel="noreferrer"
            >
              View Empire Ops demo
            </Link>
          </div>
          <p className="text-sm text-slate-400">
            Live example of the kind of internal tools and dashboards I build.
          </p>
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
        title="Who I build for"
        subtitle="If you know the problem but don’t want to wrestle the code, you’re in the right place."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {whoIBuildFor.map((item) => (
            <div key={item.title} className="lf-card h-full p-5 space-y-3">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="What I build"
        subtitle="Modern web products and internal tools that feel finished, not like prototypes."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {whatIBuild.map((item) => (
            <div key={item.title} className="lf-card h-full p-5 space-y-3">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How we go from idea to shipped">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="lf-card h-full space-y-3 p-5">
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

      <Section title="What you can expect">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item) => (
            <li key={item} className="lf-card h-full p-4 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
