import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { ClinicalUpdate } from "@/data/types";
import { EspecialidadeBadge, ImportanciaBadge } from "@/components/badges";
import { FavoriteButton } from "@/components/favorite-button";
import { formatDateShort, readingTime } from "@/lib/text";

export function UpdateCard({ update }: { update: ClinicalUpdate }) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-brand/50 hover:bg-brand-soft/30">
      <div className="absolute right-4 top-4">
        <FavoriteButton type="atualizacao" slug={update.slug} label={update.titulo} size="sm" />
      </div>
      <Link href={`/atualizacoes/${update.slug}`} className="block pr-10">
        <div className="flex flex-wrap items-center gap-1.5">
          <EspecialidadeBadge especialidade={update.especialidade} />
          <ImportanciaBadge importancia={update.importancia} />
        </div>
        <h3 className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-brand-strong">
          {update.titulo}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted line-clamp-2">
          {update.resumo}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-foreground-subtle">
          <span>{update.fonte}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={update.data}>{formatDateShort(update.data)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readingTime(update.corpo)} min
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
          Ler atualização <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </div>
  );
}
