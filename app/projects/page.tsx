import Link from "next/link";
import Pill from "@/components/ui/Pill";
import Section from "@/components/ui/Section";

const projects = [
  {
    name: "Empire Ops – Freelancer Ops Dashboard",
    tag: "Internal Tool · Dashboard",
    description:
      "Tracks jobs, deadlines, income, and channels so freelance work stays predictable and focused.",
    primaryCta: {
      label: "View live demo",
      href: "https://job-dashboard-qph7-e8hohyxky-robert-shorts-projects.vercel.app/",
      external: true,
      todo: false,
    },
    secondaryCta: { label: "See how I can build yours", href: "/services" },
  },
  {
    name: "Launchframe – Freelancer Ops Template",
    tag: "Template · Next.js",
    description:
      "Starter kit for freelancers to manage clients, tasks, billing, and ops with a clean Next.js stack.",
    primaryCta: {
      label: "Learn more",
      href: "https://example.com",
      external: true,
      todo: true,
    },
  },
  {
    name: "Family Hub 360 (Coming Soon)",
    tag: "MVP · Family App",
    description:
      "A family command center for calendar, tasks, and quick check-ins. Designed for simple, calm coordination.",
    status: "In development",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <Section
        title="Projects"
        subtitle="A few builds that show how I approach dashboards, templates, and MVPs."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="lf-card flex h-full flex-col gap-4 p-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <Pill className="text-xs">{project.tag}</Pill>
                  {project.status && <Pill className="text-xs">{project.status}</Pill>}
                </div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.primaryCta && (
                  <Link
                    href={project.primaryCta.href}
                    target={project.primaryCta.external ? "_blank" : undefined}
                    rel={project.primaryCta.external ? "noreferrer" : undefined}
                    // TODO: replace placeholder link with live destination
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.01] hover:bg-emerald-300"
                  >
                    {project.primaryCta.label}
                  </Link>
                )}
                {project.secondaryCta && (
                  <Link
                    href={project.secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400/60 hover:text-emerald-200/90"
                  >
                    {project.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

