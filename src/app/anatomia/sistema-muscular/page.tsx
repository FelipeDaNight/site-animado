import type { Metadata } from "next";
import Link from "next/link";
import { MuscularExplorer } from "@/components/anatomy/muscular-explorer";

export const metadata: Metadata = {
  title: "Sistema Muscular 3D",
  description:
    "Modelo 3D interativo dos principais músculos do corpo humano: origem, inserção, inervação, ações e correlação clínica.",
};

export default function SistemaMuscularPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground-subtle">
          <Link href="/anatomia/esqueleto" className="hover:text-foreground">
            Sistema Esquelético
          </Link>
          <span>·</span>
          <Link href="/anatomia/articulacoes" className="hover:text-foreground">
            Sistema Articular
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-nervoso" className="hover:text-foreground">
            Sistema Nervoso
          </Link>
          <span>·</span>
          <span className="text-foreground">Sistema Muscular</span>
          <span>·</span>
          <Link href="/anatomia/sistema-circulatorio" className="hover:text-foreground">
            Sistema Circulatório
          </Link>
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Muscular</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo com 113 músculos de alto rendimento em prova, organizados por região. Escolha um
          músculo para ver origem, inserção, inervação, ações e correlação clínica. Este é um recorte
          selecionado — o modelo completo tem mais de 300 músculos, mas a cobertura de fichas segue crescendo.
        </p>
      </div>
      <div className="mt-8">
        <MuscularExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores, sobre base
        BodyParts3D (DBCLS, Japão). Adaptado (simplificação de materiais e compressão) para este site.
      </p>
    </div>
  );
}
