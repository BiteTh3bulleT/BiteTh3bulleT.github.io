import { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {subtitle && <p className="text-base text-slate-300">{subtitle}</p>}
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

