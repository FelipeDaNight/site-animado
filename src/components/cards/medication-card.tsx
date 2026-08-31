import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Medication } from "@/data/types";
import { TarjaBadge, Badge } from "@/components/badges";
import { FavoriteButton } from "@/components/favorite-button";

export function MedicationCard({ medication }: { medication: Medication }) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-brand/50 hover:bg-brand-soft/30">
      <div className="absolute right-4 top-4">
        <FavoriteButton type="medicamento" slug={medication.slug} label={medication.nome} size="sm" />
      </div>
      <Link href={`/medicamentos/${medication.slug}`} className="block pr-10">
        <h3 className="text-base font-semibold text-foreground group-hover:text-brand-strong">
          {medication.nome}
        </h3>
        <p className="mt-0.5 text-xs text-foreground-subtle">
          {medication.nomeComercial.slice(0, 2).join(" · ")}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted line-clamp-2">
          {medication.resumo}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <TarjaBadge tarja={medication.tarja} />
          <Badge>{medication.categoria}</Badge>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
          Ver detalhes <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </div>
  );
}
