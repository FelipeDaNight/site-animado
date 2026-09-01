import type { Metadata } from "next";
import Link from "next/link";
import { JointExplorer } from "@/components/anatomy/joint-explorer";

export const metadata: Metadata = {
  title: "Sistema Articular 3D",
  description:
    "Modelo 3D interativo das principais articulações do corpo humano: tipo, movimentos, estabilizadores e correlação clínica.",
};

export default function ArticulacoesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-2 text-sm text-foreground-subtle">
          <Link href="/anatomia/esqueleto" className="hover:text-foreground">
            Sistema Esquelético
          </Link>
          <span>·</span>
          <span className="text-foreground">Sistema Articular</span>
          <span>·</span>
          <Link href="/anatomia/sistema-nervoso" className="hover:text-foreground">
            Sistema Nervoso
          </Link>
          <span>·</span>
          <Link href="/anatomia/sistema-muscular" className="hover:text-foreground">
            Sistema Muscular
          </Link>
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Articular</h1>
        <p className="mt-2 text-foreground-muted">
          16 articulações do corpo humano, construídas sobre o mesmo modelo 3D do esqueleto — cada
          articulação é o conjunto de ossos que a formam. Escolha uma para ver tipo, movimentos,
          estabilizadores e correlação clínica.
        </p>
      </div>
      <div className="mt-8">
        <JointExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Ossos: Open3Dmodel — Skeleton (anatomytool.org), CC BY-SA. Autoria original: George J.R. Maat, Eungyeol Lee
        (LUMC) et al., consórcio Open3Dmodel, sobre base BodyParts3D (DBCLS, Japão). Ligamentos, cápsulas
        articulares e meniscos: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores,
        também sobre base BodyParts3D. Ambos adaptados (extração por estrutura, simplificação de materiais e
        compressão) para este site.
      </p>
    </div>
  );
}
