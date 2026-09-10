export type RepertorioTipo =
  | "citacao"
  | "dado"
  | "fato_historico"
  | "lei"
  | "obra";

export interface RepertorioItem {
  id: string;
  tipo: RepertorioTipo;
  /** A citação, o dado, a lei ou a obra em si — o texto que pode ir para a redação. */
  texto: string;
  /** Autor, instituição ou veículo de origem. */
  fonte: string;
  ano?: string;
  /** Temas amplos aos quais este item costuma se aplicar. */
  categorias: string[];
  /** Termos e sinônimos que a busca usa para casar este item com o tema digitado. */
  palavrasChave: string[];
  /** Frase curta explicando do que se trata e por que é pertinente. */
  contexto: string;
}

export const TIPO_LABEL: Record<RepertorioTipo, string> = {
  citacao: "Citação",
  dado: "Dado / pesquisa",
  fato_historico: "Fato histórico",
  lei: "Lei / norma",
  obra: "Obra (livro, filme, documentário)",
};

export type ParagrafoSugerido = "introducao" | "desenvolvimento" | "conclusao";

export interface RepertorioSugestao {
  item: RepertorioItem;
  comoUsar: string;
  paragrafoSugerido: ParagrafoSugerido;
}

export interface BuscaRepertorioResponse {
  tema: string;
  sugestoes: RepertorioSugestao[];
}
