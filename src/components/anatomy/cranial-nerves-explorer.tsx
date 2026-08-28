"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, BookMarked, Info, Link2, MapPin, Stethoscope } from "lucide-react";
import Link from "next/link";
import { nervosCranianos, NERVOUS_MODEL_URL } from "@/data/nervousSystem";
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

export function CranialNervesExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = nervosCranianos.find((n) => n.slug === selectedSlug) ?? null;

  const selectedMeshNames = useMemo(
    () => (selected ? new Set(selected.meshNames) : null),
    [selected]
  );

  function handleCanvasSelect(meshName: string) {
    const entry = nervosCranianos.find((n) => n.meshNames.includes(meshName));
    if (entry) setSelectedSlug(entry.slug);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {nervosCranianos.map((n) => (
          <button
            key={n.slug}
            type="button"
            onClick={() => setSelectedSlug(n.slug)}
            className={cx(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              selectedSlug === n.slug
                ? "border-brand/30 bg-brand-soft text-brand-strong"
                : "border-border text-foreground-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            {n.numero}. {n.nomeComum.replace(/\s*\(\w+\)$/, "")}
          </button>
        ))}
      </div>

      <div className="mt-5 h-[60vh] overflow-hidden rounded-2xl border border-border bg-background-raised lg:h-[68vh]">
        <SkeletonCanvas
          modelUrl={NERVOUS_MODEL_URL}
          visibleMeshNames={selectedMeshNames}
          selectedMeshNames={selectedMeshNames}
          onSelect={handleCanvasSelect}
        />
      </div>

      <div className="mt-6">
        {!selected && (
          <Callout variant="info">
            Escolha um nervo craniano acima para ver origem, trajeto, funções e correlação clínica.
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
                {selected.tipo}
              </span>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted">{selected.resumo}</p>

            <DetailSection title="Origem aparente" icon={MapPin}>
              <p className="text-foreground-muted">{selected.origemAparente}</p>
            </DetailSection>

            <DetailSection title="Trajeto" icon={Info}>
              <p className="text-foreground-muted">{selected.trajeto}</p>
            </DetailSection>

            <DetailSection title="Funções" icon={Activity}>
              <BulletList items={selected.funcoes} />
            </DetailSection>

            <DetailSection title="Teste clínico" icon={Stethoscope}>
              <BulletList items={selected.testeClinico} />
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
