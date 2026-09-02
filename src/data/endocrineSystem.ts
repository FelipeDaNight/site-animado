import type { GlandulaEndocrina } from "./types";

// Modelo 3D: coleção "Endocrine glands" do atlas Z-Anatomy (CC BY-SA 4.0,
// baseado em BodyParts3D/DBCLS), extraída e comprimida com o mesmo pipeline
// usado nos demais sistemas. 6 estruturas nomeadas individualmente (as
// paratireoides não têm malha própria nesta base e não estão incluídas).
export const ENDOCRINE_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/endocrine.glb";

export const sistemaEndocrino: GlandulaEndocrina[] = [
  {
    slug: "hipofise",
    meshNames: ["Adenohypophysis", "Neurohypophysis"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Hypophysis (Glandula pituitaria)",
    nomeComum: "Hipófise",
    resumo:
      "A \"glândula mestra\" do sistema endócrino, alojada na sela túrcica do osso esfenoide, dividida em adeno-hipófise (origem epitelial, produz seus próprios hormônios sob controle hipotalâmico) e neuro-hipófise (origem neural, apenas armazena/libera hormônios produzidos no hipotálamo).",
    descricaoAnatomica:
      "Situada na sela túrcica, conectada ao hipotálamo pela haste hipofisária (infundíbulo), imediatamente inferior ao quiasma óptico — relação anatômica que explica os defeitos de campo visual (hemianopsia bitemporal) em tumores hipofisários grandes. A adeno-hipófise (lobo anterior) origina-se de uma evaginação do teto da faringe embrionária (bolsa de Rathke); a neuro-hipófise (lobo posterior) origina-se como extensão direta do hipotálamo neural.",
    hormoniosSecretados: [
      "Adeno-hipófise: hormônio do crescimento (GH), prolactina, TSH, ACTH, FSH e LH — cada um sob controle de hormônios hipotalâmicos liberadores/inibidores específicos",
      "Neuro-hipófise: armazena e libera ADH (vasopressina) e ocitocina, ambos sintetizados por neurônios hipotalâmicos (núcleos supraóptico e paraventricular)",
    ],
    relacoesAnatomicas:
      "Situada logo abaixo do quiasma óptico, dentro da sela túrcica, ladeada pelos seios cavernosos (que contêm a artéria carótida interna e os nervos cranianos III, IV, V1, V2 e VI) — relevante na avaliação de invasão tumoral lateral.",
    correlacaoClinica:
      "Adenomas hipofisários (a maioria benignos) podem ser funcionantes (secretores, causando acromegalia por excesso de GH, hiperprolactinemia por prolactinoma, ou doença de Cushing por excesso de ACTH) ou não funcionantes (causando efeito de massa — hemianopsia bitemporal por compressão do quiasma óptico, hipopituitarismo por destruição do tecido normal). O diabetes insípido central resulta de deficiência de ADH (lesão hipotalâmica/hipofisária), causando poliúria com urina muito diluída.",
    doencasRelacionadas: [
      { slug: "acromegalia", nome: "Acromegalia" },
      { slug: "hipopituitarismo", nome: "Hipopituitarismo" },
    ],
    pontosDeProva: [
      "Hemianopsia bitemporal por compressão do quiasma óptico é o achado visual clássico de adenoma hipofisário volumoso — reflete a posição do quiasma imediatamente acima da glândula.",
      "A neuro-hipófise NÃO produz hormônios — apenas armazena e libera ADH e ocitocina, sintetizados por neurônios hipotalâmicos (núcleos supraóptico e paraventricular).",
      "Prolactinoma é o adenoma hipofisário funcionante mais comum — causa amenorreia/galactorreia em mulheres e disfunção erétil/diminuição da libido em homens.",
    ],
    fontes: [
      { tema: "Adenomas hipofisários e efeitos de massa/funcionais", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Embriologia e fisiologia da adeno-hipófise e neuro-hipófise", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Nomenclatura oficial (Hypophysis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "glandula-pineal",
    meshNames: ["Pineal_gland"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Glandula pinealis",
    nomeComum: "Glândula pineal",
    resumo:
      "Pequena glândula endócrina na linha média do encéfalo, entre os colículos superiores, que secreta melatonina em resposta à ausência de luz, regulando o ritmo circadiano.",
    descricaoAnatomica:
      "Situada na linha média, posteriormente ao terceiro ventrículo, entre os dois colículos superiores do teto do mesencéfalo, conectada ao epitálamo. Frequentemente calcifica com a idade, tornando-se um marco radiológico útil (referência da linha média em tomografias cranianas).",
    hormoniosSecretados: ["Melatonina, secretada em resposta à escuridão (via inervação simpática originada indiretamente do núcleo supraquiasmático do hipotálamo, o \"relógio biológico\")"],
    relacoesAnatomicas: "Situada entre os colículos superiores do mesencéfalo, próxima ao aqueduto cerebral e ao terceiro ventrículo.",
    correlacaoClinica:
      "Sua calcificação fisiológica com a idade a torna um marco radiológico útil para avaliar desvio da linha média em tomografias de crânio (por exemplo, em hematomas ou massas intracranianas). Tumores pineais (pinealomas) são raros, mas podem causar a síndrome de Parinaud (paralisia do olhar vertical para cima) por compressão do teto mesencefálico adjacente.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A calcificação fisiológica da pineal com a idade é usada como marco radiológico da linha média em tomografia de crânio — seu desvio sugere efeito de massa intracraniano.",
      "Tumores pineais podem causar síndrome de Parinaud (paralisia do olhar conjugado para cima) por compressão do teto do mesencéfalo.",
    ],
    fontes: [
      { tema: "Fisiologia da melatonina e ritmo circadiano", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Síndrome de Parinaud e tumores pineais", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Glandula pinealis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "tireoide",
    meshNames: ["Thyroid_gland"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Glandula thyroidea",
    nomeComum: "Glândula tireoide",
    resumo:
      "Glândula em forma de borboleta na face anterior do pescoço, que produz os hormônios tireoidianos (T3/T4, reguladores do metabolismo basal de todo o corpo) e calcitonina — uma das glândulas endócrinas mais frequentemente afetadas por doença.",
    descricaoAnatomica:
      "Situada na face anterior do pescoço, ao nível de C5-T1, composta por dois lobos laterais conectados por um istmo que cruza os anéis traqueais 2º-4º. Histologicamente organizada em folículos (armazenam coloide rico em tireoglobulina) com células parafoliculares (células C, produtoras de calcitonina) dispersas entre eles.",
    hormoniosSecretados: [
      "Tiroxina (T4) e tri-iodotironina (T3) — reguladores do metabolismo basal, termogênese e desenvolvimento neurológico fetal/infantil, sob controle do eixo hipotálamo-hipófise-tireoide (TRH → TSH → T3/T4)",
      "Calcitonina (células parafoliculares/células C) — reduz a calcemia, antagonizando o paratormônio, embora com papel fisiológico modesto no adulto",
    ],
    relacoesAnatomicas:
      "Recoberta pelos músculos infra-hióideos; relaciona-se posteriormente com a traqueia e o esôfago, e posterolateralmente com os nervos laríngeos recorrentes (risco cirúrgico central na tireoidectomia) e as glândulas paratireoides.",
    correlacaoClinica:
      "É uma das glândulas endócrinas mais comumente afetadas por doença: hipotireoidismo (mais comumente por tireoidite de Hashimoto, autoimune), hipertireoidismo (mais comumente doença de Graves), tireoidite (subaguda, pós-parto) e nódulos/neoplasias tireoidianas (a maioria benignos, mas exigindo investigação sistemática por punção aspirativa quando suspeitos). O nervo laríngeo recorrente, intimamente relacionado à glândula, é a estrutura de maior risco de lesão iatrogênica na tireoidectomia, causando rouquidão (lesão unilateral) ou obstrução de via aérea (lesão bilateral).",
    doencasRelacionadas: [
      { slug: "hipotireoidismo", nome: "Hipotireoidismo (Tireoidite de Hashimoto)" },
      { slug: "hipertireoidismo", nome: "Tireotoxicose (hipertireoidismo)" },
      { slug: "tireoidite", nome: "Tireoidite" },
    ],
    pontosDeProva: [
      "O nervo laríngeo recorrente é a estrutura de maior risco cirúrgico na tireoidectomia — sua lesão unilateral causa rouquidão, e a bilateral pode causar obstrução aguda de via aérea.",
      "Tireoidite de Hashimoto (autoimune, anti-TPO positivo) é a causa mais comum de hipotireoidismo em áreas com suficiência de iodo; doença de Graves é a causa mais comum de hipertireoidismo.",
      "As células parafoliculares (células C), produtoras de calcitonina, são a origem do carcinoma medular de tireoide, associado à síndrome de neoplasia endócrina múltipla tipo 2 (NEM2).",
    ],
    fontes: [
      { tema: "Doenças tireoidianas: Hashimoto, Graves e nódulos", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anatomia cirúrgica da tireoide e nervo laríngeo recorrente", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Glandula thyroidea)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "glandula-suprarrenal",
    meshNames: ["Suprarenal_gland_L", "Suprarenal_gland_R"],
    regiao: "Retroperitônio",
    nomeOficial: "Glandula suprarenalis",
    nomeComum: "Glândula suprarrenal (adrenal)",
    resumo:
      "Par de glândulas retroperitoneais sobre o polo superior de cada rim, estruturalmente e funcionalmente divididas em córtex (esteroidogênese: mineralocorticoides, glicocorticoides, andrógenos) e medula (catecolaminas) — dois órgãos endócrinos distintos numa só cápsula.",
    descricaoAnatomica:
      "Situadas sobre o polo superior de cada rim (a direita mais triangular, a esquerda mais semilunar), compostas por córtex (zona glomerulosa — aldosterona; zona fasciculada — cortisol; zona reticular — andrógenos) e medula (células cromafins, derivadas da crista neural, produtoras de catecolaminas).",
    hormoniosSecretados: [
      "Córtex — zona glomerulosa: aldosterona (regulação de sódio/potássio e volemia, eixo renina-angiotensina-aldosterona)",
      "Córtex — zona fasciculada: cortisol (resposta ao estresse, gliconeogênese, efeito anti-inflamatório, sob controle do eixo hipotálamo-hipófise-adrenal via ACTH)",
      "Córtex — zona reticular: andrógenos adrenais (DHEA, androstenediona)",
      "Medula: adrenalina e noradrenalina (resposta simpática de \"luta ou fuga\", liberadas por estímulo simpático pré-ganglionar direto)",
    ],
    relacoesAnatomicas: "Situadas sobre o polo superior de cada rim, envoltas pela fáscia renal (fáscia de Gerota), compartilhada com o rim.",
    correlacaoClinica:
      "A insuficiência adrenal (primária, doença de Addison — geralmente autoimune; ou secundária, por supressão do eixo hipotálamo-hipófise) causa fadiga, hipotensão, hiponatremia/hipercalemia (se primária) e hiperpigmentação cutânea (só na primária, por excesso de ACTH). O excesso de cortisol (síndrome de Cushing, mais comumente iatrogênico por corticoterapia crônica, ou por adenoma hipofisário produtor de ACTH) causa obesidade central, estrias violáceas, hipertensão e hiperglicemia. O feocromocitoma (tumor da medula adrenal produtor de catecolaminas) causa a tríade clássica de cefaleia, sudorese e palpitações associada a hipertensão paroxística.",
    doencasRelacionadas: [
      { slug: "insuficiencia-adrenal", nome: "Insuficiência adrenal" },
      { slug: "sindrome-de-cushing", nome: "Síndrome de Cushing" },
    ],
    pontosDeProva: [
      "A insuficiência adrenal PRIMÁRIA (doença de Addison) causa hiperpigmentação cutânea (excesso de ACTH/POMC), enquanto a SECUNDÁRIA (hipofisária) não — diferença clínica fundamental.",
      "Tríade clássica do feocromocitoma: cefaleia + sudorese + palpitações, associada a hipertensão paroxística — tumor da medula adrenal (células cromafins, origem na crista neural).",
      "A causa mais comum de síndrome de Cushing no mundo é o uso exógeno/iatrogênico de corticoides, não a produção endógena excessiva.",
    ],
    fontes: [
      { tema: "Insuficiência adrenal e síndrome de Cushing", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Feocromocitoma e tumores da medula adrenal", fonte: "Robbins & Cotran Pathologic Basis of Disease, 10ª ed." },
      { tema: "Zonas do córtex adrenal e esteroidogênese", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Nomenclatura oficial (Glandula suprarenalis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
