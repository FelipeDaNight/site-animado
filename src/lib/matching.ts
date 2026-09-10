import { REPERTORIO } from "@/data/repertorio";
import type {
  BuscaRepertorioResponse,
  ParagrafoSugerido,
  RepertorioItem,
  RepertorioTipo,
} from "@/types/repertorio";

const PONTOS_PALAVRA_CHAVE = 3;
const PONTOS_CATEGORIA = 2;
const PONTOS_CONTEXTO = 1;
const PONTUACAO_MINIMA = 3;
const MAX_SUGESTOES = 5;

/** Onde cada tipo de repertório costuma encaixar melhor num texto dissertativo-argumentativo. */
const PARAGRAFO_POR_TIPO: Record<RepertorioTipo, ParagrafoSugerido> = {
  fato_historico: "introducao",
  obra: "introducao",
  citacao: "desenvolvimento",
  dado: "desenvolvimento",
  lei: "conclusao",
};

const ORIENTACAO_POR_TIPO: Record<RepertorioTipo, string> = {
  citacao:
    'Use esta citação de {fonte} no desenvolvimento do seu texto, logo após apresentar seu argumento — ela funciona como base teórica para o que você já defendeu.',
  dado:
    "Insira este dado de {fonte} no desenvolvimento, como prova concreta do seu argumento — dados mostram que o problema é real e mensurável, não só uma opinião.",
  lei:
    "Cite esta lei ({fonte}) na conclusão, dentro da sua proposta de intervenção — mostrar que já existe base legal relacionada ao tema torna a proposta mais consistente.",
  fato_historico:
    "Use este fato histórico para contextualizar a introdução do seu texto, mostrando que a discussão sobre o tema não é recente.",
  obra:
    "Cite esta obra ({fonte}) na introdução ou no desenvolvimento como repertório cultural — um dos critérios avaliados na redação.",
};

// Marcas de acento (Unicode Combining Diacritical Marks, U+0300-U+036F) sobram
// depois do normalize("NFD") — construído por código de caractere para não
// depender de digitar o caractere combinável literal no arquivo-fonte.
const MARCAS_DIACRITICAS = new RegExp(
  `[${String.fromCharCode(0x0300)}-${String.fromCharCode(0x036f)}]`,
  "g"
);

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(MARCAS_DIACRITICAS, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const PALAVRAS_IGNORADAS = new Set([
  "a", "o", "as", "os", "um", "uma", "uns", "umas",
  "de", "da", "do", "das", "dos", "em", "no", "na", "nos", "nas",
  "para", "por", "com", "sem", "sobre", "entre", "e", "ou", "que", "como",
  "mais", "menos", "muito", "pouco", "ao", "aos", "ser", "estar",
  "tema", "redacao", "texto", "dissertativo", "argumentativo", "desafios", "brasil",
]);

function tokenizar(texto: string): string[] {
  return normalizar(texto)
    .split(" ")
    .filter((palavra) => palavra.length > 2 && !PALAVRAS_IGNORADAS.has(palavra));
}

/** Termos de uma palavra só casam por token inteiro; termos com espaço casam por trecho. */
function contemTermo(temaNormalizado: string, tokensTema: Set<string>, termo: string): boolean {
  const termoNormalizado = normalizar(termo);
  if (termoNormalizado.includes(" ")) {
    return temaNormalizado.includes(termoNormalizado);
  }
  return tokensTema.has(termoNormalizado);
}

function pontuarItem(item: RepertorioItem, temaNormalizado: string, tokensTema: Set<string>): number {
  let pontos = 0;

  for (const palavraChave of item.palavrasChave) {
    if (contemTermo(temaNormalizado, tokensTema, palavraChave)) {
      pontos += PONTOS_PALAVRA_CHAVE;
    }
  }

  for (const categoria of item.categorias) {
    if (contemTermo(temaNormalizado, tokensTema, categoria)) {
      pontos += PONTOS_CATEGORIA;
    }
  }

  for (const token of tokenizar(item.contexto)) {
    if (tokensTema.has(token)) {
      pontos += PONTOS_CONTEXTO;
    }
  }

  return pontos;
}

function gerarComoUsar(item: RepertorioItem, tema: string): string {
  const orientacao = ORIENTACAO_POR_TIPO[item.tipo].replace("{fonte}", item.fonte);
  return `${orientacao} Relacione diretamente com o seu tema ("${tema}"): ${item.contexto}`;
}

/**
 * Busca 100% local: compara o tema digitado com categorias/palavrasChave/contexto
 * de cada item do banco. Não chama nenhuma API — roda inteiramente no dispositivo
 * de quem está usando, de graça, sem limite de uso.
 */
export function buscarRepertorio(tema: string): BuscaRepertorioResponse {
  const temaLimpo = tema.trim();
  const temaNormalizado = normalizar(temaLimpo);
  const tokensTema = new Set(tokenizar(temaLimpo));

  const sugestoes = REPERTORIO.map((item) => ({
    item,
    pontos: pontuarItem(item, temaNormalizado, tokensTema),
  }))
    .filter(({ pontos }) => pontos >= PONTUACAO_MINIMA)
    .sort((a, b) => b.pontos - a.pontos)
    .slice(0, MAX_SUGESTOES)
    .map(({ item }) => ({
      item,
      comoUsar: gerarComoUsar(item, temaLimpo),
      paragrafoSugerido: PARAGRAFO_POR_TIPO[item.tipo],
    }));

  return { tema: temaLimpo, sugestoes };
}
