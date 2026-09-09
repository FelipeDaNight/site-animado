import { TIPO_LABEL } from "@/types/repertorio";
import type { RepertorioItem, RepertorioSugestao } from "@/types/repertorio";

const PARAGRAFO_LABEL: Record<RepertorioSugestao["paragrafoSugerido"], string> = {
  introducao: "Introdução",
  desenvolvimento: "Desenvolvimento",
  conclusao: "Conclusão",
};

export function RepertorioCard({
  sugestao,
}: {
  sugestao: RepertorioSugestao & { item: RepertorioItem };
}) {
  const { item, comoUsar, paragrafoSugerido } = sugestao;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
          {TIPO_LABEL[item.tipo]}
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
          Sugestão para {PARAGRAFO_LABEL[paragrafoSugerido]}
        </span>
      </div>

      <p className="text-base leading-relaxed text-slate-800">&ldquo;{item.texto}&rdquo;</p>
      <p className="mt-2 text-sm text-slate-500">
        {item.fonte}
        {item.ano ? ` · ${item.ano}` : ""}
      </p>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Como usar nesse tema
        </p>
        <p className="text-sm leading-relaxed text-slate-700">{comoUsar}</p>
      </div>
    </article>
  );
}
