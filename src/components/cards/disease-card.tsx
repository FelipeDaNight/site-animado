import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Disease } from "@/data/types";
import { EspecialidadeBadge, EtiologiaBadge, Badge } from "@/components/badges";
import { FavoriteButton } from "@/components/favorite-button";

export function DiseaseCard({ disease }: { disease: Disease }) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-brand/50 hover:bg-brand-soft/30">
      <div className="absolute right-4 top-4">
        <FavoriteButton type="doenca" slug={disease.slug} label={disease.nome} size="sm" />
      </div>
      <Link href={`/doencas/${disease.slug}`} className="block pr-10">
        <h3 className="text-base font-semibold text-foreground group-hover:text-brand-strong">
          {disease.nome}
        </h3>
        <p className="mt-0.5 text-xs text-foreground-subtle">
          {disease.sinonimos.length > 0 ? disease.sinonimos.join(" · ") : `CID-10 ${disease.cid10}`}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted line-clamp-2">
          {disease.resumo}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <EspecialidadeBadge especialidade={disease.especialidade} />
          <EtiologiaBadge etiologia={disease.etiologia} />
          <Badge>CID-10 {disease.cid10}</Badge>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
          Ver detalhes <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </div>
  );
}
