import type { Metadata } from "next";
import Link from "next/link";
import { NervousSystemExplorer } from "@/components/anatomy/nervous-system-explorer";

export const metadata: Metadata = {
  title: "Sistema Nervoso 3D",
  description:
    "Modelo 3D interativo dos 12 pares de nervos cranianos e dos plexos braquial e lombossacral: origem, trajeto, funções e correlação clínica.",
};

export default function SistemaNervosoPage() {
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
          <span className="text-foreground">Sistema Nervoso</span>
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
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Nervoso</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo dos 12 pares de nervos cranianos e de 39 nervos periféricos dos plexos braquial,
          lombar e sacral, com o esqueleto como referência anatômica esmaecida. Escolha um nervo para ver
          origem, trajeto, ramos musculares/sensitivos e correlação clínica. Próximas regiões (encéfalo, medula
          espinhal) em construção.
        </p>
      </div>
      <div className="mt-8">
        <NervousSystemExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores, sobre base
        BodyParts3D (DBCLS, Japão). Adaptado (extração por estrutura, simplificação de malha e compressão) para
        este site.
      </p>
    </div>
  );
}
