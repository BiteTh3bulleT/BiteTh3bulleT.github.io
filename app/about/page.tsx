import Section from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <Section title="About Rob">
        <div className="lf-card space-y-4 p-6">
          <p className="text-sm text-slate-300">
            I’m a support engineer and builder who loves turning chaos into systems. I
            specialize in Next.js, TypeScript, Tailwind, and AI-assisted development tooling
            to ship reliable web products quickly.
          </p>
          <p className="text-sm text-slate-300">
            I’ve built internal tools, dashboards, and security-focused systems (including
            EDR/infra work) alongside game and creative projects. I fight, I tinker with
            hardware, and I treat my work like training: consistent reps, constant
            improvement.
          </p>
        </div>
      </Section>

      <Section title="Stack & tools">
        <div className="lf-card grid gap-4 p-6 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">Core stack</h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>Next.js, TypeScript, Tailwind</li>
              <li>Node.js, Postgres</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">AI & tooling</h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>Cursor, GPT, Claude</li>
              <li>Automation and build pipelines for fast delivery</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

