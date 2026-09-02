import type { Metadata } from "next";
import Link from "next/link";
import { SkeletonExplorer } from "@/components/anatomy/skeleton-explorer";

export const metadata: Metadata = {
  title: "Sistema Esquelético 3D",
  description:
    "Modelo 3D interativo do esqueleto humano, organizado por região, com fichas de estudo por osso.",
};

export default function EsqueletoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground-subtle">
          <span className="text-foreground">Sistema Esquelético</span>
          <span>·</span>
          <Link href="/anatomia/articulacoes" className="hover:text-foreground">
            Sistema Articular
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-nervoso" className="hover:text-foreground">
            Sistema Nervoso
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-muscular" className="hover:text-foreground">
            Sistema Muscular
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-circulatorio" className="hover:text-foreground">
            Sistema Circulatório
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-digestorio" className="hover:text-foreground">
            Sistema Digestório
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-linfatico" className="hover:text-foreground">
            Sistema Linfático
          </Link>
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Esquelético</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo do esqueleto humano completo. Escolha uma região, clique em um osso no modelo ou na
          lista para abrir sua ficha de estudo.
        </p>
      </div>
      <div className="mt-8">
        <SkeletonExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Open3Dmodel — Skeleton (anatomytool.org), CC BY-SA. Autoria original: George J.R. Maat, Eungyeol
        Lee (LUMC) et al., consórcio Open3Dmodel, sobre base BodyParts3D (DBCLS, Japão). Adaptado (espelhamento
        bilateral e simplificação de materiais) para este site.
      </p>
    </div>
  );
}
