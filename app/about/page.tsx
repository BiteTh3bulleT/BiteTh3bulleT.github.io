import Section from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <Section title="About Rob">
        <div className="lf-card space-y-4 p-6">
          <p className="text-sm text-slate-300">
            I’m a support engineer, builder and fighter who likes turning chaos into systems.
            I’ve spent years troubleshooting other people’s problems and now I build the tools
            that prevent half those problems from existing in the first place.
          </p>
        </div>
      </Section>

      <Section title="What I’m good at">
        <div className="lf-card space-y-3 p-6">
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Taking vague, messy requirements and turning them into concrete screens and flows.</li>
            <li>
              Using AI dev tools without letting them run wild — they speed me up, they don’t replace
              my brain.
            </li>
            <li>
              Thinking like an operator: what actually needs to be visible, searchable and trackable
              for this to work in the real world.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Tech & tools I use">
        <div className="lf-card grid gap-4 p-6 sm:grid-cols-2">
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Next.js, TypeScript, Tailwind</li>
            <li>Node.js, Postgres (when a real backend is needed)</li>
            <li>Cursor, GPT, Claude and other AI dev tools</li>
            <li>Docker, Vercel, Render and GitHub Actions for CI/CD</li>
          </ul>
        </div>
      </Section>

      <Section title="Principles I work by">
        <div className="lf-card space-y-2 p-6">
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Scope before code – we agree on what matters before I start typing.</li>
            <li>Simple first – solve the core problem, then layer in bells and whistles.</li>
            <li>You own your tools – you get the code, not a locked black box.</li>
            <li>Communicate like a human – no buzzword salad.</li>
            <li>Iterate – v1 should be solid, but it doesn’t have to be v10.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

