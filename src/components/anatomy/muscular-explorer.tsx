"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, BookMarked, Dumbbell, Info, Link2, Zap } from "lucide-react";
import Link from "next/link";
import { REGIOES_MUSCULARES, type RegiaoMuscular } from "@/data/types";
import { musculos, MUSCULAR_MODEL_URL } from "@/data/muscularSystem";
import { DetailSection, BulletList } from "@/components/ui/detail-section";
import { Callout } from "@/components/ui/callout";

const SkeletonCanvas = dynamic(
  () => import("@/components/anatomy/skeleton-canvas").then((mod) => mod.SkeletonCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center text-sm text-foreground-subtle">
        Carregando modelo 3D…
      </div>
    ),
  }
);

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function MuscularExplorer() {
  const [regiao, setRegiao] = useState<RegiaoMuscular>("Cabeça e pescoço");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const musculosDaRegiao = useMemo(() => musculos.filter((m) => m.regiao === regiao), [regiao]);
  const regionMeshNames = useMemo(
    () => new Set(musculosDaRegiao.flatMap((m) => m.meshNames)),
    [musculosDaRegiao]
  );
  const selected = musculos.find((m) => m.slug === selectedSlug) ?? null;
  const selectedMeshNames = useMemo(
    () => (selected ? new Set(selected.meshNames) : null),
    [selected]
  );
  const visibleMeshNames = selectedMeshNames ?? regionMeshNames;

  function handleSelectRegion(next: RegiaoMuscular) {
    setRegiao(next);
    setSelectedSlug(null);
  }

  function handleCanvasSelect(meshName: string) {
    const entry = musculos.find((m) => m.meshNames.includes(meshName));
    if (entry) {
      setRegiao(entry.regiao);
      setSelectedSlug(entry.slug);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {REGIOES_MUSCULARES.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => handleSelectRegion(r)}
            className={cx(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              regiao === r
                ? "border-brand/30 bg-brand-soft text-brand-strong"
                : "border-border text-foreground-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div className="h-[60vh] overflow-hidden rounded-2xl border border-border bg-background-raised lg:h-[68vh]">
          <SkeletonCanvas
            modelUrl={MUSCULAR_MODEL_URL}
            visibleMeshNames={visibleMeshNames}
            selectedMeshNames={selectedMeshNames}
            highlightSelection={false}
            onSelect={handleCanvasSelect}
          />
        </div>

        <div className="flex h-[60vh] flex-col rounded-2xl border border-border bg-background-raised lg:h-[68vh]">
          <div className="border-b border-border px-4 py-3">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Dumbbell className="h-4 w-4 text-brand" />
              Músculos desta região
            </h2>
            <p className="mt-0.5 text-xs text-foreground-subtle">{musculosDaRegiao.length} músculos</p>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {musculosDaRegiao.map((m) => (
              <button
                key={m.slug}
                type="button"
                onClick={() => setSelectedSlug(m.slug)}
                className={cx(
                  "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  selectedSlug === m.slug
                    ? "bg-brand-soft text-brand-strong"
                    : "text-foreground-muted hover:bg-background hover:text-foreground"
                )}
              >
                {m.nomeComum}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {!selected && (
          <Callout variant="info">
            Clique em um músculo no modelo 3D ou na lista ao lado para ver sua ficha.
          </Callout>
        )}

        {selected && (
          <article className="rounded-2xl border border-border bg-background-raised p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">{selected.nomeComum}</h1>
                <p className="mt-1 text-sm italic text-foreground-subtle">{selected.nomeOficial}</p>
              </div>
              <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground-muted">
                {selected.regiao}
              </span>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted">{selected.resumo}</p>

            <DetailSection title="Origem" icon={Info}>
              <p className="text-foreground-muted">{selected.origem}</p>
            </DetailSection>

            <DetailSection title="Inserção" icon={Info}>
              <p className="text-foreground-muted">{selected.insercao}</p>
            </DetailSection>

            <DetailSection title="Inervação" icon={Zap}>
              <p className="text-foreground-muted">{selected.inervacao}</p>
            </DetailSection>

            <DetailSection title="Ações" icon={Activity}>
              <BulletList items={selected.acoes} />
            </DetailSection>

            <DetailSection title="Correlação clínica" icon={BookMarked}>
              <p className="text-foreground-muted">{selected.correlacaoClinica}</p>
              {selected.doencasRelacionadas.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {selected.doencasRelacionadas.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/doencas/${d.slug}`}
                      className="rounded-full border border-brand/30 bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-strong hover:bg-brand/20"
                    >
                      {d.nome}
                    </Link>
                  ))}
                </div>
              )}
            </DetailSection>

            <DetailSection title="Pontos de prova" icon={Link2}>
              <BulletList items={selected.pontosDeProva} />
            </DetailSection>

            <section className="border-t border-border pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">Fontes</h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {selected.fontes.map((f, i) => (
                  <li key={i} className="text-foreground-subtle">
                    <span className="text-foreground-muted">{f.tema}:</span> {f.fonte}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        )}
      </div>
    </div>
  );
}
