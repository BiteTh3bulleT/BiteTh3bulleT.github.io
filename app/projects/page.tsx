import Link from "next/link";
import Pill from "@/components/ui/Pill";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/siteConfig";

type ProjectCta = {
  label: string;
  href: string;
  external?: boolean;
  muted?: boolean;
};

type Project = {
  name: string;
  tags: string[];
  description: string;
  bullets?: string[];
  ctas?: ProjectCta[];
  status?: string;
  note?: string;
};

const projects: Project[] = [
  {
    name: "Empire Ops – Freelancer Ops Dashboard",
    tags: ["Internal Tool", "Dashboard"],
    description:
      "My own ops dashboard. Tracks jobs, deadlines, income, channels and tax buckets in one place.",
    bullets: [
      "Kanban-style job board by stage (quoted, in progress, delivered, paid).",
      "Deadline view + calendar for upcoming work.",
      "Ledger that splits each payment into tax, savings and spend.",
      "Channel view for Fiverr, Upwork, direct clients and more.",
    ],
    ctas: [
      {
        label: "View live demo",
        href: siteConfig.links.empireOpsDemo,
        external: true,
      },
      {
        label: "Get something like this built",
        href: "/services",
      },
    ],
  },
  {
    name: "Launchframe – Freelancer Ops Template",
    tags: ["Template", "Next.js"],
    description:
      "A productized version of the Empire Ops concept: a Next.js starter kit freelancers can use to run their business.",
    bullets: [
      "Prebuilt job board, deadlines and ledger.",
      "Configurable tax and allocation settings.",
      "Designed as a base to extend or customize.",
    ],
    ctas: [
      {
        label: "Coming soon",
        href: "#",
        external: false,
        muted: true,
      },
      {
        label: "Get notified",
        href: "/contact",
      },
    ],
    note: "Want early access? Tell me via the Contact page and I’ll ping you when it’s ready.",
  },
  {
    name: "Family Hub 360 – Family Command Center (In progress)",
    tags: ["MVP", "Family App"],
    description:
      "An experiment in applying the same dashboard thinking to home life: shared calendar, check-ins, tasks and status for the family.",
    bullets: [
      "Shared event and task views.",
      "Lightweight check-in and status features.",
      "Designed for clarity at a glance, not micro-management.",
    ],
    status: "In development",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <Section
        title="Projects"
        subtitle="Mini case studies that show how I approach dashboards, templates, and MVPs."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="lf-card flex h-full flex-col gap-4 p-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  {project.tags.map((tag) => (
                    <Pill key={tag} className="text-xs">
                      {tag}
                    </Pill>
                  ))}
                  {project.status && <Pill className="text-xs">{project.status}</Pill>}
                </div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>

              {project.bullets && (
                <ul className="space-y-2 rounded-lg border border-white/5 bg-white/5 p-4 text-sm text-slate-300">
                  {project.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {project.note && (
                <p className="text-xs text-slate-400">{project.note}</p>
              )}

              <div className="mt-auto flex flex-wrap gap-3">
                {project.ctas?.map((cta) =>
                  cta.muted ? (
                    <span
                      key={cta.label}
                      className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-400"
                      aria-disabled="true"
                    >
                      {cta.label}
                    </span>
                  ) : (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      target={cta.external ? "_blank" : undefined}
                      rel={cta.external ? "noreferrer" : undefined}
                      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
                        cta.external
                          ? "bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-500/20 hover:scale-[1.01] hover:bg-emerald-300"
                          : "border border-white/10 text-emerald-200 hover:border-emerald-400/60 hover:text-emerald-200/90"
                      }`}
                    >
                      {cta.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

