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

export const TIPOS_FUNCIONAIS_NERVO = [
  "Motor (somático)",
  "Sensitivo (especial)",
  "Sensitivo (geral)",
  "Misto (motor e sensitivo)",
  "Misto (motor e parassimpático)",
  "Misto (motor, sensitivo e parassimpático)",
] as const;

export type TipoFuncionalNervo = (typeof TIPOS_FUNCIONAIS_NERVO)[number];

export interface NervoCraniano {
  slug: string;
  numero: number;
  meshNames: string[];
  nomeOficial: string;
  nomeComum: string;
  tipo: TipoFuncionalNervo;
  origemAparente: string;
  resumo: string;
  trajeto: string;
  funcoes: string[];
  testeClinico: string[];
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const PLEXOS_NERVOSOS = ["Plexo braquial", "Plexo lombar", "Plexo sacral"] as const;

export type PlexoNervoso = (typeof PLEXOS_NERVOSOS)[number];

export interface NervoPeriferico {
  slug: string;
  meshNames: string[];
  plexo: PlexoNervoso;
  nomeOficial: string;
  nomeComum: string;
  raizes: string;
  resumo: string;
  trajeto: string;
  ramosMusculares: string[];
  ramosSensitivos: string[];
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const REGIOES_MUSCULARES = [
  "Cabeça e pescoço",
  "Tronco",
  "Membro superior",
  "Membro inferior",
] as const;

export type RegiaoMuscular = (typeof REGIOES_MUSCULARES)[number];

export interface Musculo {
  slug: string;
  meshNames: string[];
  regiao: RegiaoMuscular;
  nomeOficial: string;
  nomeComum: string;
  resumo: string;
  origem: string;
  insercao: string;
  inervacao: string;
  acoes: string[];
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const REGIOES_CIRCULATORIAS = [
  "Coração",
  "Grandes vasos",
  "Circulação cerebral",
  "Circulação abdominal e pélvica",
  "Membros",
] as const;

export type RegiaoCirculatoria = (typeof REGIOES_CIRCULATORIAS)[number];

export const TIPOS_ESTRUTURA_CIRCULATORIA = ["Câmara cardíaca", "Valva cardíaca", "Artéria", "Veia"] as const;

export type TipoEstruturaCirculatoria = (typeof TIPOS_ESTRUTURA_CIRCULATORIA)[number];

export interface EstruturaCirculatoria {
  slug: string;
  meshNames: string[];
  regiao: RegiaoCirculatoria;
  tipo: TipoEstruturaCirculatoria;
  nomeOficial: string;
  nomeComum: string;
  resumo: string;
  trajeto: string;
  ramosOuTributarias: string[];
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const REGIOES_DIGESTORIO = [
  "Cavidade oral",
  "Faringe e esôfago",
  "Estômago",
  "Intestino delgado",
  "Intestino grosso",
  "Fígado e vias biliares",
  "Pâncreas",
] as const;

export type RegiaoDigestorio = (typeof REGIOES_DIGESTORIO)[number];

export interface OrgaoDigestivo {
  slug: string;
  meshNames: string[];
  regiao: RegiaoDigestorio;
  nomeOficial: string;
  nomeComum: string;
  resumo: string;
  descricaoAnatomica: string;
  funcao: string[];
  relacoesAnatomicas: string;
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const REGIOES_LINFATICAS = [
  "Órgãos linfoides",
  "Cabeça e pescoço",
  "Membro superior",
  "Tronco",
  "Membro inferior",
] as const;

export type RegiaoLinfatica = (typeof REGIOES_LINFATICAS)[number];

export interface EstruturaLinfatica {
  slug: string;
  meshNames: string[];
  regiao: RegiaoLinfatica;
  nomeOficial: string;
  nomeComum: string;
  resumo: string;
  descricaoAnatomica: string;
  funcao: string[];
  drenagem: string;
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const REGIOES_URINARIAS = ["Trato urinário superior", "Trato urinário inferior"] as const;

export type RegiaoUrinaria = (typeof REGIOES_URINARIAS)[number];

export interface OrgaoUrinario {
  slug: string;
  meshNames: string[];
  regiao: RegiaoUrinaria;
  nomeOficial: string;
  nomeComum: string;
  resumo: string;
  descricaoAnatomica: string;
  funcao: string[];
  relacoesAnatomicas: string;
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const REGIOES_ENDOCRINAS = ["Cabeça e pescoço", "Retroperitônio"] as const;

export type RegiaoEndocrina = (typeof REGIOES_ENDOCRINAS)[number];

export interface GlandulaEndocrina {
  slug: string;
  meshNames: string[];
  regiao: RegiaoEndocrina;
  nomeOficial: string;
  nomeComum: string;
  resumo: string;
  descricaoAnatomica: string;
  hormoniosSecretados: string[];
  relacoesAnatomicas: string;
  correlacaoClinica: string;
  doencasRelacionadas: RelatedLink[];
  pontosDeProva: string[];
  fontes: FonteTema[];
}

export const REGIOES_SNC = [
  "Sistema ventricular",
  "Núcleos da base",
  "Sistema límbico",
  "Diencéfalo",
  "Substância branca e comissuras",
] as const;

export type RegiaoSNC = (typeof REGIOES_SNC)[number];

export interface EstruturaEncefalica {
  slug: string;
  meshNames: string[];
  regiao: RegiaoSNC;
  nomeOficial: string;
  nomeComum: string;
  resumo: string;
  descricaoAnatomica: string;
  funcao: string[];
  relacoesAnatomicas: string;
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
