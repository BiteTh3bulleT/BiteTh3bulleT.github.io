import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-tight text-emerald-300"
            aria-label="Launchframe home"
          >
            <Image
              src="/launchframe-logo.svg?v=2"
              alt="Launchframe logo"
              width={150}
              height={48}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-xs sm:gap-2 sm:text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-slate-200 transition hover:bg-white/5 hover:text-emerald-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</div>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} Launchframe</p>
          <p className="text-slate-500">
            Built with Next.js, TypeScript &amp; AI dev tools.
          </p>
        </div>
      </footer>
    </div>
  );
}

