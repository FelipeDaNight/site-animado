export const TARJAS = [
  "Venda livre (MIP)",
  "Tarja vermelha",
  "Tarja preta",
  "Tarja não informada",
] as const;

export type Tarja = (typeof TARJAS)[number];

export const ETIOLOGIAS = [
  "Viral",
  "Bacteriana",
  "Fúngica",
  "Parasitária",
  "Genética",
  "Autoimune",
  "Degenerativa",
  "Metabólica",
  "Neoplásica",
  "Traumática",
  "Nutricional",
  "Idiopática",
  "Multifatorial",
] as const;

export type Etiologia = (typeof ETIOLOGIAS)[number];

export const IMPORTANCIAS = ["Alta", "Média", "Baixa"] as const;

export type Importancia = (typeof IMPORTANCIAS)[number];

export interface RelatedLink {
  slug: string;
  nome: string;
}

export interface FonteTema {
  tema: string;
  fonte: string;
}

export interface Medication {
  slug: string;
  nome: string;
  nomeComercial: string[];
  principioAtivo: string;
  categoria: string;
  codigoAtc: string;
  tarja: Tarja;
  formaFarmaceutica: string;
  viaAdministracao: string;
  resumo: string;
  indicacoes: string[];
  mecanismoAcao: string;
  farmacocinetica: string;
  posologia: string;
  ajusteRenalHepatico: string;
  gestacaoLactacao: string;
  contraindicacoes: string[];
  efeitosColaterais: string[];
  interacoes: string[];
  monitorizacao: string[];
  alertas: string[];
  similares: string[];
  pontosDeProva: string[];
  doencasIndicadas: RelatedLink[];
  fontes: FonteTema[];
}

export interface DiseaseCase {
  vinheta: string;
  pergunta: string;
  raciocinio: string;
  conduta: string;
}

export interface Disease {
  slug: string;
  nome: string;
  sinonimos: string[];
  cid10: string;
  especialidade: string;
  etiologia: Etiologia;
  resumo: string;
  definicao: string;
  epidemiologia: string;
  fisiopatologia: string;
  classificacao: string;
  quadroClinico: string[];
  diagnostico: string[];
  examesComplementares: string[];
  diagnosticoDiferencial: string[];
  tratamento: string[];
  complicacoes: string[];
  redFlags: string[];
  prognostico: string;
  pontosDeProva: string[];
  casoClinico: DiseaseCase;
  medicamentosPrimeiraLinha: RelatedLink[];
  medicamentosSecaoTitulo?: string;
  medicamentosNota?: string;
  fontes: FonteTema[];
}

export const REGIOES_ESQUELETO = [
  "cranio",
  "denticao",
  "coluna-vertebral",
  "torax",
  "cintura-escapular-braco",
  "antebraco-mao",
  "cintura-pelvica-coxa",
  "perna-pe",
] as const;

export type RegiaoEsqueleto = (typeof REGIOES_ESQUELETO)[number];

export const TIPOS_OSSO = [
  "Osso longo",
  "Osso curto",
  "Osso chato",
  "Osso irregular",
  "Osso sesamoide",
  "Osso pneumático",
] as const;

export type TipoOsso = (typeof TIPOS_OSSO)[number];

export interface Osso {
  slug: string;
  meshNames: string[];
  nomeOficial: string;
  nomeComum: string;
  regiao: RegiaoEsqueleto;
  par: boolean;
  tipoOsso: TipoOsso;
  resumo: string;
  descricaoAnatomica: string;
  relacoesAnatomicas: string[];
  marcosAnatomicos: string[];
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const TIPOS_ARTICULACAO = [
  "Sinovial esferóidea",
  "Sinovial elipsóidea (condilar)",
  "Sinovial selar",
  "Sinovial trocóide (pivô)",
  "Sinovial gínglimo (dobradiça)",
  "Sinovial plana",
  "Cartilaginosa (sínfise)",
  "Cartilaginosa (sincondrose)",
  "Fibrosa (sutura)",
  "Fibrosa (sindesmose)",
] as const;

export type TipoArticulacao = (typeof TIPOS_ARTICULACAO)[number];

export interface Articulacao {
  slug: string;
  meshNames: string[];
  ligamentMeshNames: string[];
  ossosEnvolvidos: RelatedLink[];
  nomeOficial: string;
  nomeComum: string;
  tipo: TipoArticulacao;
  resumo: string;
  descricaoAnatomica: string;
  movimentos: string[];
  estabilizadores: string[];
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export interface ClinicalUpdate {
  slug: string;
  titulo: string;
  resumo: string;
  especialidade: string;
  importancia: Importancia;
  fonte: string;
  data: string;
  destaque: string;
  corpo: string[];
}
