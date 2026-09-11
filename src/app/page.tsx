"use client";

import { useState, type FormEvent } from "react";
import { RepertorioCard } from "@/components/RepertorioCard";
import { buscarRepertorio } from "@/lib/matching";
import { linkSugerirTema } from "@/lib/whatsapp";
import { CATEGORIAS } from "@/data/repertorio";
import type { BuscaRepertorioResponse } from "@/types/repertorio";

const TEMAS_EXEMPLO = [
  "Educação a distância no Brasil",
  "Impactos das redes sociais na saúde mental dos jovens",
  "Inclusão de pessoas com deficiência no mercado de trabalho",
  "Preservação da Amazônia e desenvolvimento sustentável",
  "Desafios para a democracia no Brasil contemporâneo",
  "Desafios da mobilidade urbana nas grandes cidades",
  "Desinformação e fake news nas eleições",
  "Crise migratória e acolhimento de refugiados no Brasil",
  "Intolerância religiosa no Brasil",
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
          <div className="rounded-xl bg-amber-50 px-4 py-4 text-sm text-amber-800">
            <p>
              Ainda não temos, no nosso banco, um repertório que realmente combine com esse tema.
              Tente reformular ou usar palavras mais próximas de algum destes assuntos:
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {CATEGORIAS.map((categoria) => (
                <span
                  key={categoria}
                  className="rounded-full border border-amber-200 bg-white px-2.5 py-1 text-xs text-amber-800"
                >
                  {categoria}
                </span>
              ))}
            </div>

            <a
              href={linkSugerirTema(resultado.tema)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-green-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.94.552 3.75 1.507 5.29L2 22l4.845-1.478A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.03a8.01 8.01 0 0 1-4.278-1.24l-.307-.19-3.06.933.95-2.98-.2-.31A8.003 8.003 0 1 1 20 12a8.01 8.01 0 0 1-7.999 8.03z" />
              </svg>
              Sugerir esse tema pelo WhatsApp
            </a>
          </div>
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
