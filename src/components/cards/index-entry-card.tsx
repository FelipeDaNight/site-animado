import type { ReactNode } from "react";

export function IndexEntryCard({
  nome,
  badges,
  nota,
}: {
  nome: string;
  badges: ReactNode[];
  nota: string;
}) {
  return (
    <div className="rounded-lg border border-dashed border-border-strong bg-background-raised/60 p-5">
      <h3 className="text-sm font-medium text-foreground-muted">{nome}</h3>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">{badges}</div>
      <p className="mt-3 text-xs text-foreground-subtle">{nota}</p>
    </div>
  );
}
