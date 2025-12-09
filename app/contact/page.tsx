import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/siteConfig";

const faqs = [
  {
    question: "What do you need from me to get started?",
    answer:
      "A paragraph or two about what you’re trying to do, who will use the app, and what “done” looks like. Existing screenshots, spreadsheets or tools are a bonus but not required.",
  },
  {
    question: "I’m not technical. Is that a problem?",
    answer:
      "No. Your job is to describe the problem in plain language. My job is to translate that into screens, flows and code.",
  },
  {
    question: "Do you only use AI to build?",
    answer:
      "I use AI dev tools like Cursor, GPT and Claude to move faster and avoid repetitive work, but I still design the architecture, review the code and make sure it behaves correctly. Think of it as having extra hands, not replacing a brain.",
  },
  {
    question: "Do I own the code when we’re done?",
    answer:
      "Yes. Once the project is paid for, you own the code and can use, modify or extend it however you like.",
  },
  {
    question: "Can you work from an existing broken app?",
    answer:
      "Usually, yes. In some cases it’s faster to rebuild than to patch, but I can review what you have and suggest the most sensible path.",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <Section title="Let’s build something useful.">
        <div className="lf-card space-y-4 p-6">
          <p className="text-sm text-slate-300">
            Tell me about your idea, what’s not working today, and how soon you’d like to see
            it live. I’ll come back with a clear plan and a couple of options.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={siteConfig.links.fiverr}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.01] hover:bg-emerald-300"
              target="_blank"
              rel="noreferrer"
            >
              Message me on Fiverr
            </Link>
            <p className="text-sm text-slate-300">
              Prefer email?{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-semibold text-emerald-200 hover:text-emerald-100"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section title="FAQ">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="lf-card space-y-2 p-5">
              <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
              <p className="text-sm text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

