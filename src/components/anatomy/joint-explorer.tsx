"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, BookMarked, Info, Link2, MoveRight } from "lucide-react";
import Link from "next/link";
import { articulacoes } from "@/data/articulations";
import { DetailSection, BulletList } from "@/components/ui/detail-section";
import { Callout } from "@/components/ui/callout";

const JointCanvas = dynamic(
  () => import("@/components/anatomy/joint-canvas").then((mod) => mod.JointCanvas),
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

export function JointExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = articulacoes.find((a) => a.slug === selectedSlug) ?? null;

  const boneMeshNames = useMemo(
    () => (selected ? new Set(selected.meshNames) : null),
    [selected]
  );
  const ligamentMeshNames = useMemo(
    () => (selected ? new Set(selected.ligamentMeshNames) : null),
    [selected]
  );

  function handleCanvasSelect(meshName: string) {
    const entry = articulacoes.find(
      (a) => a.meshNames.includes(meshName) || a.ligamentMeshNames.includes(meshName)
    );
    if (entry) setSelectedSlug(entry.slug);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {articulacoes.map((a) => (
          <button
            key={a.slug}
            type="button"
            onClick={() => setSelectedSlug(a.slug)}
            className={cx(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              selectedSlug === a.slug
                ? "border-brand/30 bg-brand-soft text-brand-strong"
                : "border-border text-foreground-muted hover:border-border-strong hover:text-foreground"
            )}
          >
            {a.nomeComum}
          </button>
        ))}
      </div>

      <div className="mt-5 h-[60vh] overflow-hidden rounded-2xl border border-border bg-background-raised lg:h-[68vh]">
        <JointCanvas
          boneMeshNames={boneMeshNames}
          ligamentMeshNames={ligamentMeshNames}
          onSelect={handleCanvasSelect}
        />
      </div>

      <div className="mt-6">
        {!selected && (
          <Callout variant="info">
            Escolha uma articulação acima ou clique diretamente num osso do modelo 3D para ver sua ficha.
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

            <div className="mt-3 flex flex-wrap gap-1.5">
              {selected.ossosEnvolvidos.map((o) => (
                <Link
                  key={o.slug}
                  href={`/anatomia/esqueleto`}
                  className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground-muted hover:border-border-strong hover:text-foreground"
                >
                  {o.nome}
                </Link>
              ))}
            </div>

            <DetailSection title="Descrição anatômica" icon={Info}>
              <p className="text-foreground-muted">{selected.descricaoAnatomica}</p>
            </DetailSection>

            <DetailSection title="Movimentos" icon={MoveRight}>
              <BulletList items={selected.movimentos} />
            </DetailSection>

            <DetailSection title="Estabilizadores" icon={Activity}>
              <BulletList items={selected.estabilizadores} />
            </DetailSection>

            <DetailSection title="Relações anatômicas" icon={Link2}>
              <p className="text-foreground-muted">
                Ossos envolvidos: {selected.ossosEnvolvidos.map((o) => o.nome).join(", ")}.
              </p>
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

            <DetailSection title="Pontos de prova" icon={BookMarked}>
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
