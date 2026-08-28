"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { BookMarked, Bone, Info, Link2 } from "lucide-react";
import Link from "next/link";
import type { RegiaoEsqueleto } from "@/data/types";
import { REGIOES_ESQUELETO_META } from "@/data/skeletalSystem";
import { boneEntriesForRegion, regionMeshNames, type BoneEntry } from "@/lib/skeleton-regions";
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

export function SkeletonExplorer() {
  const [regiao, setRegiao] = useState<RegiaoEsqueleto>("cranio");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const boneEntries = useMemo(() => boneEntriesForRegion(regiao), [regiao]);
  const visibleMeshNames = useMemo(() => regionMeshNames(regiao), [regiao]);
  const selectedEntry = boneEntries.find((e) => e.key === selectedKey) ?? null;
  const selectedMeshNames = useMemo(
    () => (selectedEntry ? new Set(selectedEntry.meshNames) : null),
    [selectedEntry]
  );

  function handleSelectRegion(next: RegiaoEsqueleto) {
    setRegiao(next);
    setSelectedKey(null);
  }

  function handleCanvasSelect(meshName: string) {
    const entry = boneEntries.find((e) => e.meshNames.includes(meshName));
    if (entry) setSelectedKey(entry.key);
  }

  function handleListSelect(entry: BoneEntry) {
    setSelectedKey(entry.key);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {REGIOES_ESQUELETO_META.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => handleSelectRegion(r.id)}
            className={cx(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              regiao === r.id
                ? "border-brand/30 bg-brand-soft text-brand-strong"
                : "border-border text-foreground-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            {r.nome}
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-foreground-subtle">
        {REGIOES_ESQUELETO_META.find((r) => r.id === regiao)?.descricao}
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div className="h-[60vh] overflow-hidden rounded-2xl border border-border bg-background-raised lg:h-[68vh]">
          <SkeletonCanvas
            visibleMeshNames={visibleMeshNames}
            selectedMeshNames={selectedMeshNames}
            onSelect={handleCanvasSelect}
          />
        </div>

        <div className="flex h-[60vh] flex-col rounded-2xl border border-border bg-background-raised lg:h-[68vh]">
          <div className="border-b border-border px-4 py-3">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Bone className="h-4 w-4 text-brand" />
              Estruturas desta região
            </h2>
            <p className="mt-0.5 text-xs text-foreground-subtle">{boneEntries.length} estruturas</p>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {boneEntries.map((entry) => (
              <button
                key={entry.key}
                type="button"
                onClick={() => handleListSelect(entry)}
                className={cx(
                  "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  selectedKey === entry.key
                    ? "bg-brand-soft text-brand-strong"
                    : "text-foreground-muted hover:bg-background hover:text-foreground"
                )}
              >
                <span>{entry.displayName}</span>
                {!entry.osso && <span className="text-[10px] uppercase tracking-wide text-foreground-subtle">em breve</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {!selectedEntry && (
          <Callout variant="info">
            Clique em um osso no modelo 3D ou na lista ao lado para ver sua ficha.
          </Callout>
        )}

        {selectedEntry && !selectedEntry.osso && (
          <Callout variant="info" title={selectedEntry.displayName}>
            Esta estrutura ainda não tem ficha de conteúdo — a região do Crânio é o piloto de conteúdo do módulo de
            anatomia 3D. As demais regiões serão documentadas em lotes seguintes, com o mesmo rigor de fontes usado em
            doenças e medicamentos.
          </Callout>
        )}

        {selectedEntry?.osso && (
          <article className="rounded-2xl border border-border bg-background-raised p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  {selectedEntry.osso.nomeComum}
                </h1>
                <p className="mt-1 text-sm italic text-foreground-subtle">{selectedEntry.osso.nomeOficial}</p>
              </div>
              <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground-muted">
                {selectedEntry.osso.tipoOsso} · {selectedEntry.osso.par ? "par" : "ímpar"}
              </span>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted">{selectedEntry.osso.resumo}</p>

            <DetailSection title="Descrição anatômica" icon={Info}>
              <p className="text-foreground-muted">{selectedEntry.osso.descricaoAnatomica}</p>
            </DetailSection>

            <DetailSection title="Relações anatômicas" icon={Link2}>
              <BulletList items={selectedEntry.osso.relacoesAnatomicas} />
            </DetailSection>

            <DetailSection title="Marcos anatômicos" icon={Bone}>
              <BulletList items={selectedEntry.osso.marcosAnatomicos} />
            </DetailSection>

            <DetailSection title="Correlação clínica" icon={BookMarked}>
              <p className="text-foreground-muted">{selectedEntry.osso.correlacaoClinica}</p>
              {selectedEntry.osso.doencasRelacionadas.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {selectedEntry.osso.doencasRelacionadas.map((d) => (
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

            <DetailSection title="Pontos de prova" icon={BookMarked}>
              <BulletList items={selectedEntry.osso.pontosDeProva} />
            </DetailSection>

            <section className="border-t border-border pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">Fontes</h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {selectedEntry.osso.fontes.map((f, i) => (
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
