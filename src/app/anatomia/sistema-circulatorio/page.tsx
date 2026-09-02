import type { Metadata } from "next";
import Link from "next/link";
import { CirculatoryExplorer } from "@/components/anatomy/circulatory-explorer";

export const metadata: Metadata = {
  title: "Sistema Circulatório 3D",
  description:
    "Modelo 3D interativo do coração, grandes vasos, círculo arterial cerebral e vasos de membros: trajeto, ramos e correlação clínica.",
};

export default function SistemaCirculatorioPage() {
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
          <span className="text-foreground">Sistema Circulatório</span>
          <span>·</span>
          <Link href="/anatomia/sistema-digestorio" className="hover:text-foreground">
            Sistema Digestório
          </Link>
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
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Circulatório</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo com 46 estruturas cardiovasculares de alto rendimento em prova — câmaras e valvas
          do coração, grandes vasos, círculo arterial cerebral, circulação abdominal/pélvica e vasos de membros.
          Escolha uma estrutura para ver trajeto, ramos e correlação clínica. Este é um recorte selecionado — o
          modelo completo tem mais de 700 vasos nomeados individualmente, mas a cobertura de fichas segue
          crescendo.
        </p>
      </div>
      <div className="mt-8">
        <CirculatoryExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores, sobre base
        BodyParts3D (DBCLS, Japão). Adaptado (extração por estrutura, simplificação de malha e compressão) para
        este site.
      </p>
    </div>
  );
}
