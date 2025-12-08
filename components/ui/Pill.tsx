import { ReactNode } from "react";

export default function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`lf-pill ${className}`}>{children}</span>;
}

