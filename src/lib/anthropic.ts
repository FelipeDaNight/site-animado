import Anthropic from "@anthropic-ai/sdk";
import { REPERTORIO } from "@/data/repertorio";
import type { BuscaRepertorioResponse, RepertorioSugestao } from "@/types/repertorio";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-4-5";

let client: Anthropic | null = null;

function getClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ANTHROPIC_API_KEY não configurada. Copie .env.example para .env.local e preencha sua chave."
    );
  }
  if (!client) {
    client = new Anthropic({ apiKey });
  }
  return client;
}

type SugestaoBruta = {
  id: string;
  comoUsar: string;
  paragrafoSugerido: RepertorioSugestao["paragrafoSugerido"];
};

const SELECIONAR_TOOL: Anthropic.Tool = {
  name: "retornar_sugestoes",
  description:
    "Retorna a lista de repertórios selecionados do banco fornecido, cada um com uma explicação de uso específica para o tema pesquisado.",
  input_schema: {
    type: "object",
    properties: {
      sugestoes: {
        type: "array",
        description: "De 0 a 5 itens. Vazio se nada no banco for realmente pertinente ao tema.",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "O id exato do item escolhido, copiado do banco fornecido (nunca invente um id).",
            },
            comoUsar: {
              type: "string",
              description:
                "Em português, explique especificamente como conectar este item ao TEMA pesquisado (não uma descrição genérica do item). Deixe claro o elo lógico entre o repertório e o argumento do tema.",
            },
            paragrafoSugerido: {
              type: "string",
              enum: ["introducao", "desenvolvimento", "conclusao"],
              description: "Em qual parte da redação esse repertório costuma encaixar melhor.",
            },
          },
          required: ["id", "comoUsar", "paragrafoSugerido"],
        },
      },
    },
    required: ["sugestoes"],
  },
};

const SYSTEM_PROMPT = `Você ajuda estudantes brasileiros do ensino médio a encontrar repertório sociocultural (citações, dados, leis, fatos históricos e obras) para redações no estilo ENEM.

Você recebe:
1. Um TEMA de redação digitado livremente pelo estudante.
2. Um BANCO de itens de repertório já verificados (JSON), cada um com id, tipo, texto, fonte, categorias e um contexto curto.

Regras obrigatórias:
- Escolha SOMENTE itens que tenham relação genuína e específica com o TEMA exato digitado. Nunca escolha um item só porque é popular ou porque toca de leve no assunto: repertório "forçado" ou tangencial é um dos erros mais penalizados no ENEM (fuga ao tema).
- Se nenhum item do banco for realmente pertinente, retorne a lista de sugestões vazia. Não force relação onde não há.
- NUNCA invente uma citação, autor, lei, dado ou fato que não esteja no banco fornecido. Use apenas ids que existem no banco.
- Prefira no máximo 5 itens, priorizando diversidade de tipo (ex: uma citação + um dado + uma lei) quando fizer sentido, mas só quando todos forem realmente pertinentes.
- Para cada item escolhido, escreva "comoUsar" como uma explicação concreta e específica de como aquele repertório se conecta ao TEMA digitado — não repita apenas a descrição geral do item.
- Responda somente através da ferramenta fornecida.`;

export async function buscarRepertorio(tema: string): Promise<BuscaRepertorioResponse> {
  const temaLimpo = tema.trim();
  if (!temaLimpo) {
    throw new Error("Tema vazio.");
  }

  const anthropic = getClient();

  const bancoResumido = REPERTORIO.map(({ id, tipo, texto, fonte, categorias, contexto }) => ({
    id,
    tipo,
    texto,
    fonte,
    categorias,
    contexto,
  }));

  const message = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    tools: [SELECIONAR_TOOL],
    tool_choice: { type: "tool", name: "retornar_sugestoes" },
    messages: [
      {
        role: "user",
        content: `TEMA: ${temaLimpo}\n\nBANCO (JSON):\n${JSON.stringify(bancoResumido)}`,
      },
    ],
  });

  const toolUse = message.content.find(
    (block): block is Anthropic.ToolUseBlock => block.type === "tool_use"
  );

  if (!toolUse) {
    throw new Error("A IA não retornou uma resposta estruturada.");
  }

  const resultado = toolUse.input as { sugestoes: SugestaoBruta[] };
  const itemPorId = new Map(REPERTORIO.map((item) => [item.id, item]));

  const sugestoes = resultado.sugestoes
    .map((s) => {
      const item = itemPorId.get(s.id);
      if (!item) return null;
      return { id: s.id, comoUsar: s.comoUsar, paragrafoSugerido: s.paragrafoSugerido, item };
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  return { tema: temaLimpo, sugestoes };
}
