import type { Metadata } from "next";
import Link from "next/link";
import { DigestiveExplorer } from "@/components/anatomy/digestive-explorer";

export const metadata: Metadata = {
  title: "Sistema Digestório 3D",
  description:
    "Modelo 3D interativo da cavidade oral, faringe, esôfago, estômago, intestinos, fígado, vias biliares e pâncreas: anatomia, função e correlação clínica.",
};

export default function SistemaDigestorioPage() {
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
          <Link href="/anatomia/sistema-muscular" className="hover:text-foreground">
            Sistema Muscular
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-circulatorio" className="hover:text-foreground">
            Sistema Circulatório
          </Link>
          <span>·</span>
          <span className="text-foreground">Sistema Digestório</span>
          <span>·</span>
          <Link href="/anatomia/sistema-linfatico" className="hover:text-foreground">
            Sistema Linfático
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-urinario" className="hover:text-foreground">
            Sistema Urinário
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-endocrino" className="hover:text-foreground">
            Sistema Endócrino
          </Link>
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Digestório</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo com 28 estruturas do trato digestório de alto rendimento em prova — cavidade oral
          e dentição, faringe e esôfago, estômago, intestino delgado e grosso, fígado (com a segmentação de
          Couinaud completa), vias biliares e pâncreas. Escolha uma estrutura para ver descrição anatômica,
          função, relações e correlação clínica.
        </p>
      </div>
      <div className="mt-8">
        <DigestiveExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores, sobre base
        BodyParts3D (DBCLS, Japão). Adaptado (extração por estrutura, simplificação de malha e compressão) para
        este site.
      </p>
    </div>
  );
}
