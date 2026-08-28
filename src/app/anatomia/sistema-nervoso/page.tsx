import type { Metadata } from "next";
import Link from "next/link";
import { CranialNervesExplorer } from "@/components/anatomy/cranial-nerves-explorer";

export const metadata: Metadata = {
  title: "Sistema Nervoso 3D",
  description:
    "Modelo 3D interativo dos 12 pares de nervos cranianos: origem, trajeto, funções e correlação clínica.",
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
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Nervoso</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo dos 12 pares de nervos cranianos, com o tronco encefálico como referência
          anatômica. Escolha um nervo para ver origem aparente, trajeto, funções, teste clínico e correlação
          clínica. Próximas regiões (encéfalo, medula espinhal, nervos periféricos) em construção.
        </p>
      </div>
      <div className="mt-8">
        <CranialNervesExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores, sobre base
        BodyParts3D (DBCLS, Japão). Adaptado (extração por estrutura, simplificação de malha e compressão) para
        este site.
      </p>
    </div>
  );
}
