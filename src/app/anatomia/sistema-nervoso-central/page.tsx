import type { Metadata } from "next";
import Link from "next/link";
import { CnsExplorer } from "@/components/anatomy/cns-explorer";

export const metadata: Metadata = {
  title: "Sistema Nervoso Central 3D",
  description:
    "Modelo 3D interativo dos núcleos da base, sistema límbico, diencéfalo, sistema ventricular, comissuras e tronco encefálico, com correlação clínica.",
};

export default function SistemaNervosoCentralPage() {
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
          <span>·</span>
          <span className="text-foreground">Sistema Nervoso Central</span>
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">Sistema Nervoso Central</h1>
        <p className="mt-2 text-foreground-muted">
          Modelo 3D interativo com 45 estruturas do encéfalo — sistema ventricular, núcleos da base, sistema
          límbico, diencéfalo, substância branca/comissuras e tronco encefálico (mesencéfalo, ponte e bulbo).
          Escolha uma estrutura para ver função, relações anatômicas e correlação clínica. Cerebelo e córtex
          cerebral estão previstos para etapas futuras. A substância cinzenta e branca da medula espinal não
          possui malha própria nesta base de dados.
        </p>
      </div>
      <div className="mt-8">
        <CnsExplorer />
      </div>
      <p className="mt-6 text-xs text-foreground-subtle">
        Modelo 3D: Z-Anatomy (z-anatomy.com), CC BY-SA 4.0, autoria Gauthier Kervyn e colaboradores, sobre base
        BodyParts3D (DBCLS, Japão). Adaptado (extração por estrutura, simplificação de malha e compressão) para
        este site.
      </p>
    </div>
  );
}
