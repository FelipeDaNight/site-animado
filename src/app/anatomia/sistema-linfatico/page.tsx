import type { Metadata } from "next";
import Link from "next/link";
import { LymphaticExplorer } from "@/components/anatomy/lymphatic-explorer";

export const metadata: Metadata = {
  title: "Sistema Linfático 3D",
  description:
    "Modelo 3D interativo do baço, timo, tonsila palatina e das principais cadeias de linfonodos do corpo: drenagem, função e correlação clínica.",
};

export default function SistemaLinfaticoPage() {
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
          <Link href="/anatomia/sistema-digestorio" className="hover:text-foreground">
            Sistema Digestório
          </Link>
          <span>·</span>
          <span className="text-foreground">Sistema Linfático</span>
          <span>·</span>
          <Link href="/anatomia/sistema-urinario" className="hover:text-foreground">
            Sistema Urinário
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-endocrino" className="hover:text-foreground">
            Sistema Endócrino
          </Link>
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Linfático</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo com 31 estruturas linfáticas — baço, timo, tonsila palatina e as principais
          cadeias de linfonodos da cabeça e pescoço, do membro superior, do tronco e do membro inferior. Escolha
          uma estrutura para ver descrição anatômica, função, território de drenagem e correlação clínica.
        </p>
      </div>
      <div className="mt-8">
        <LymphaticExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores, sobre base
        BodyParts3D (DBCLS, Japão). Adaptado (extração por estrutura, simplificação de malha e compressão) para
        este site.
      </p>
    </div>
  );
}
