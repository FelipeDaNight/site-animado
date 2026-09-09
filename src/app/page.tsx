"use client";

import { useState, type FormEvent } from "react";
import { RepertorioCard } from "@/components/RepertorioCard";
import type { BuscaRepertorioResponse } from "@/types/repertorio";

const TEMAS_EXEMPLO = [
  "Educação a distância no Brasil",
  "Impactos das redes sociais na saúde mental dos jovens",
  "Inclusão de pessoas com deficiência no mercado de trabalho",
  "Preservação da Amazônia e desenvolvimento sustentável",
  "Desafios para a democracia no Brasil contemporâneo",
];

type Estado =
  | { status: "ocioso" }
  | { status: "carregando" }
  | { status: "erro"; mensagem: string }
  | { status: "sucesso"; resultado: BuscaRepertorioResponse };

export default function Home() {
  const [tema, setTema] = useState("");
  const [estado, setEstado] = useState<Estado>({ status: "ocioso" });

  async function buscar(temaBuscado: string) {
    const temaLimpo = temaBuscado.trim();
    if (!temaLimpo) return;

    setEstado({ status: "carregando" });
    try {
      const resposta = await fetch("/api/repertorio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tema: temaLimpo }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setEstado({
          status: "erro",
          mensagem: dados.erro ?? "Não foi possível buscar repertório agora.",
        });
        return;
      }

      setEstado({ status: "sucesso", resultado: dados });
    } catch {
      setEstado({
        status: "erro",
        mensagem: "Falha de conexão. Verifique sua internet e tente de novo.",
      });
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    buscar(tema);
  }

  function handleExemploClick(exemplo: string) {
    setTema(exemplo);
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
          realmente conversam com o tema — com explicação de como usar cada um.
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
          disabled={estado.status === "carregando"}
          className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {estado.status === "carregando" ? "Buscando…" : "Buscar repertório"}
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
        {estado.status === "carregando" && (
          <p className="text-center text-sm text-slate-500">Procurando repertório pertinente…</p>
        )}

        {estado.status === "erro" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{estado.mensagem}</p>
        )}

        {estado.status === "sucesso" && estado.resultado.sugestoes.length === 0 && (
          <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Ainda não temos, no nosso banco, um repertório que realmente combine com esse tema.
            Tente reformular ou buscar algo mais específico.
          </p>
        )}

        {estado.status === "sucesso" &&
          estado.resultado.sugestoes.map((sugestao) => (
            <RepertorioCard key={sugestao.id} sugestao={sugestao} />
          ))}
      </section>

      <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        As sugestões são geradas a partir de um banco curado, mas sempre confira datas, números e
        fontes antes de usar em uma prova.
      </footer>
    </main>
  );
}
