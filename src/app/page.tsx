"use client";

import { useState, type FormEvent } from "react";
import { RepertorioCard } from "@/components/RepertorioCard";
import { buscarRepertorio } from "@/lib/matching";
import type { BuscaRepertorioResponse } from "@/types/repertorio";

const TEMAS_EXEMPLO = [
  "Educação a distância no Brasil",
  "Impactos das redes sociais na saúde mental dos jovens",
  "Inclusão de pessoas com deficiência no mercado de trabalho",
  "Preservação da Amazônia e desenvolvimento sustentável",
  "Desafios para a democracia no Brasil contemporâneo",
];

export default function Home() {
  const [tema, setTema] = useState("");
  const [resultado, setResultado] = useState<BuscaRepertorioResponse | null>(null);

  function buscar(temaBuscado: string) {
    const temaLimpo = temaBuscado.trim();
    if (!temaLimpo) return;
    setTema(temaBuscado);
    setResultado(buscarRepertorio(temaLimpo));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    buscar(tema);
  }

  function handleExemploClick(exemplo: string) {
    buscar(exemplo);
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Repertório Certo
        </h1>
        <p className="mt-3 text-slate-600">
          Digite o tema da sua redação e receba citações, dados, leis e exemplos que
          realmente conversam com o tema — com explicação de como usar cada um. Busca
          100% local: sem IA, sem servidor, sem custo.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={tema}
          onChange={(event) => setTema(event.target.value)}
          placeholder="Ex: desafios da mobilidade urbana nas grandes cidades"
          className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700"
        >
          Buscar repertório
        </button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        {TEMAS_EXEMPLO.map((exemplo) => (
          <button
            key={exemplo}
            type="button"
            onClick={() => handleExemploClick(exemplo)}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:border-indigo-300 hover:text-indigo-700"
          >
            {exemplo}
          </button>
        ))}
      </div>

      <section className="mt-10 space-y-4">
        {resultado && resultado.sugestoes.length === 0 && (
          <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Ainda não temos, no nosso banco, um repertório que realmente combine com esse tema.
            Tente reformular ou buscar algo mais específico.
          </p>
        )}

        {resultado?.sugestoes.map((sugestao) => (
          <RepertorioCard key={sugestao.item.id} sugestao={sugestao} />
        ))}
      </section>

      <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        As sugestões vêm de um banco curado por palavras-chave, mas sempre confira datas,
        números e fontes antes de usar em uma prova.
      </footer>
    </main>
  );
}
