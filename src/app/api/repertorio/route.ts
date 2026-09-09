import { NextResponse } from "next/server";
import { buscarRepertorio } from "@/lib/anthropic";

const TEMA_MAX_LENGTH = 300;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const tema =
    typeof (body as { tema?: unknown })?.tema === "string" ? (body as { tema: string }).tema : "";

  if (!tema.trim()) {
    return NextResponse.json({ erro: "Digite um tema de redação." }, { status: 400 });
  }

  if (tema.length > TEMA_MAX_LENGTH) {
    return NextResponse.json(
      { erro: `Tema muito longo (máximo de ${TEMA_MAX_LENGTH} caracteres).` },
      { status: 400 }
    );
  }

  try {
    const resultado = await buscarRepertorio(tema);
    return NextResponse.json(resultado);
  } catch (error) {
    const mensagem = error instanceof Error ? error.message : "Erro desconhecido.";
    const chaveAusente = mensagem.includes("ANTHROPIC_API_KEY");
    console.error("Erro ao buscar repertório:", error);
    return NextResponse.json(
      {
        erro: chaveAusente
          ? mensagem
          : "Não foi possível buscar repertório agora. Tente novamente em instantes.",
      },
      { status: chaveAusente ? 500 : 502 }
    );
  }
}
