import Link from "next/link";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <Section title="Let’s build something.">
        <div className="lf-card space-y-4 p-6">
          <p className="text-sm text-slate-300">
            Tell me about your idea, your timeline, and your must-haves. I’ll come back
            with a clear plan and options.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="https://www.fiverr.com/s/xXxd84Q"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01] hover:bg-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              Contact me on Fiverr
            </Link>
            <p className="text-sm text-slate-300">
              Email:{" "}
              <a
                href="mailto:rob@imrobman.com"
                className="font-semibold text-emerald-200 hover:text-emerald-100"
              >
                rob@imrobman.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

