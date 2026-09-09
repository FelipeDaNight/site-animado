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
  /** Frase curta explicando do que se trata, para ajudar a IA a avaliar pertinência. */
  contexto: string;
}

export const TIPO_LABEL: Record<RepertorioTipo, string> = {
  citacao: "Citação",
  dado: "Dado / pesquisa",
  fato_historico: "Fato histórico",
  lei: "Lei / norma",
  obra: "Obra (livro, filme, documentário)",
};

export interface RepertorioSugestao {
  id: string;
  comoUsar: string;
  paragrafoSugerido: "introducao" | "desenvolvimento" | "conclusao";
}

export interface BuscaRepertorioResponse {
  tema: string;
  sugestoes: Array<RepertorioSugestao & { item: RepertorioItem }>;
}

export interface BuscaRepertorioErro {
  erro: string;
}
