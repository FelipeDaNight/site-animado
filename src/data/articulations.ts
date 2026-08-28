import type { Articulacao } from "./types";

// Articulações do sistema esquelético. Reaproveitam o mesmo modelo 3D do
// esqueleto (public/models/skeleton.glb) — uma articulação é simplesmente o
// conjunto de ossos que a formam, já modelados individualmente; nenhum
// asset novo foi necessário para este módulo.
export const articulacoes: Articulacao[] = [
  {
    slug: "ombro",
    meshNames: ["Scapula_L", "Scapula_R", "Humerus_L", "Humerus_R"],
    ossosEnvolvidos: [
      { slug: "escapula", nome: "Escápula" },
      { slug: "umero", nome: "Úmero" },
    ],
    nomeOficial: "Articulatio glenohumeralis",
    nomeComum: "Articulação do ombro",
    tipo: "Sinovial esferóidea",
    resumo: "A articulação mais móvel do corpo, entre a cabeça do úmero e a rasa cavidade glenoide da escápula.",
    descricaoAnatomica:
      "A cabeça do úmero, grande e arredondada, articula-se com a cavidade glenoide da escápula, uma superfície rasa que cobre apenas um terço da cabeça umeral. Essa incongruência é o que permite a enorme amplitude de movimento do ombro, mas às custas de estabilidade óssea intrínseca — a estabilidade depende quase inteiramente de tecidos moles.",
    movimentos: [
      "Flexão e extensão",
      "Abdução e adução",
      "Rotação interna e externa",
      "Circundução (combinação dos movimentos anteriores)",
    ],
    estabilizadores: [
      "Manguito rotador (supraespinhal, infraespinhal, redondo menor, subescapular) — principal estabilizador dinâmico",
      "Lábio glenoidal — anel fibrocartilaginoso que aprofunda a cavidade glenoide",
      "Ligamentos glenoumerais (superior, médio, inferior) e cápsula articular",
    ],
    correlacaoClinica:
      "A rasa cavidade glenoide, que permite tanta mobilidade, também torna o ombro a articulação mais frequentemente luxada do corpo — mais comumente na direção anteroinferior. A lesão do manguito rotador, especialmente do tendão do supraespinhal, é uma causa comum de dor e fraqueza no ombro em adultos de meia-idade e idosos, muitas vezes por degeneração progressiva associada a uso repetitivo. A capsulite adesiva (\"ombro congelado\") causa rigidez progressiva por espessamento e retração da cápsula articular.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Luxação glenoumeral anteroinferior é, disparadamente, o tipo mais comum de luxação de ombro, pela fraqueza relativa da cápsula e dos ligamentos nessa região.",
      "O supraespinhal é o tendão do manguito rotador mais frequentemente lesado, em parte por sua vascularização relativamente pobre próxima à inserção (\"zona crítica\").",
    ],
    fontes: [
      { tema: "Biomecânica e estabilizadores da articulação do ombro", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulatio glenohumeralis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "cotovelo",
    meshNames: ["Humerus_L", "Humerus_R", "Ulna_L", "Ulna_R", "Radius_L", "Radius_R"],
    ossosEnvolvidos: [
      { slug: "umero", nome: "Úmero" },
      { slug: "ulna", nome: "Ulna" },
      { slug: "radio", nome: "Rádio" },
    ],
    nomeOficial: "Articulatio cubiti",
    nomeComum: "Articulação do cotovelo",
    tipo: "Sinovial gínglimo (dobradiça)",
    resumo: "Complexo articular entre úmero, ulna e rádio, combinando uma dobradiça com um pivô.",
    descricaoAnatomica:
      "Compreende três articulações dentro de uma única cápsula: a umeroulnar (tróclea do úmero com a incisura troclear da ulna, o principal componente em dobradiça), a umerorradial (capítulo do úmero com a cabeça do rádio) e a radioulnar proximal (cabeça do rádio girando dentro da incisura radial da ulna, um pivô que participa da pronação/supinação junto com a articulação radioulnar distal).",
    movimentos: [
      "Flexão e extensão (articulação umeroulnar)",
      "Pronação e supinação (articulação radioulnar proximal, em conjunto com a distal)",
    ],
    estabilizadores: [
      "Ligamento colateral ulnar (medial)",
      "Ligamento colateral radial (lateral)",
      "Cápsula articular envolvendo as três articulações do complexo",
    ],
    correlacaoClinica:
      "A fratura-luxação de Monteggia (fratura da diáfise ulnar proximal com luxação da cabeça do rádio) rompe a relação normal entre esses ossos no cotovelo. A epicondilite lateral (\"cotovelo de tenista\") e a epicondilite medial (\"cotovelo de golfista\") são tendinopatias de inserção nos epicôndilos do úmero, não doenças da cápsula articular propriamente dita, mas são causas muito comuns de dor no cotovelo.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O cotovelo tem três articulações dentro de uma cápsula comum: umeroulnar (dobradiça), umerorradial e radioulnar proximal (pivô) — por isso permite tanto flexão/extensão quanto pronação/supinação.",
      "Epicondilite lateral e medial são tendinopatias de inserção muscular, não artropatias — importante diferencial de dor no cotovelo.",
    ],
    fontes: [
      { tema: "Anatomia do complexo articular do cotovelo", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Articulatio cubiti)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "punho",
    meshNames: ["Radius_L", "Radius_R", "Scaphoid_L", "Scaphoid_R", "Lunate_bone_L", "Lunate_bone_R"],
    ossosEnvolvidos: [
      { slug: "radio", nome: "Rádio" },
      { slug: "carpo-fileira-proximal", nome: "Ossos do carpo — fileira proximal" },
    ],
    nomeOficial: "Articulatio radiocarpalis",
    nomeComum: "Articulação do punho",
    tipo: "Sinovial elipsóidea (condilar)",
    resumo: "Articulação entre o rádio distal e a fileira proximal do carpo (escafoide e semilunar).",
    descricaoAnatomica:
      "A extremidade distal do rádio, junto ao complexo fibrocartilaginoso triangular, forma a superfície articular proximal; o escafoide e o semilunar formam a superfície distal. A ulna não participa diretamente desta articulação — está separada do carpo pelo complexo fibrocartilaginoso triangular.",
    movimentos: ["Flexão e extensão", "Desvio radial e ulnar"],
    estabilizadores: [
      "Complexo fibrocartilaginoso triangular (separa a ulna do carpo e absorve carga)",
      "Ligamentos radiocárpicos palmares e dorsais",
    ],
    correlacaoClinica:
      "A articulação do punho não permite pronação/supinação isoladamente — esses movimentos ocorrem nas articulações radioulnares proximal e distal, não aqui. A fratura de Colles (rádio distal) frequentemente compromete a congruência dessa superfície articular. O punho é também um dos locais classicamente afetados na artrite reumatoide, que causa poliartrite simétrica de pequenas e médias articulações.",
    doencasRelacionadas: [{ slug: "artrite-reumatoide", nome: "Artrite reumatoide" }],
    pontosDeProva: [
      "Pronação e supinação NÃO ocorrem na articulação radiocárpica — são movimentos das articulações radioulnares proximal e distal.",
      "Acometimento do punho, junto às mãos, é característico de artrite reumatoide, ajudando a distingui-la de quadros que poupam essas articulações.",
    ],
    fontes: [
      { tema: "Anatomia da articulação radiocárpica e acometimento na artrite reumatoide", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulatio radiocarpalis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "quadril",
    meshNames: ["Hip_bone_L", "Hip_bone_R", "Femur_L", "Femur_R"],
    ossosEnvolvidos: [
      { slug: "osso-quadril", nome: "Osso do quadril" },
      { slug: "femur", nome: "Fêmur" },
    ],
    nomeOficial: "Articulatio coxae",
    nomeComum: "Articulação do quadril",
    tipo: "Sinovial esferóidea",
    resumo: "Articulação esferóidea profunda e estável entre a cabeça do fêmur e o acetábulo.",
    descricaoAnatomica:
      "A cabeça do fêmur encaixa-se profundamente no acetábulo do osso do quadril — uma cavidade muito mais profunda que a cavidade glenoide do ombro, o que confere ao quadril grande estabilidade óssea intrínseca, à custa de menor amplitude de movimento comparado ao ombro.",
    movimentos: [
      "Flexão e extensão",
      "Abdução e adução",
      "Rotação interna e externa",
      "Circundução",
    ],
    estabilizadores: [
      "Lábio acetabular — aprofunda ainda mais a cavidade",
      "Ligamento iliofemoral — um dos ligamentos mais fortes do corpo, limita a hiperextensão",
      "Ligamentos pubofemoral e isquiofemoral",
      "Ligamento da cabeça do fêmur (\"ligamento redondo\") — transmite um pequeno ramo vascular à cabeça femoral",
    ],
    correlacaoClinica:
      "A profundidade do acetábulo torna a luxação traumática do quadril rara (exige trauma de alta energia), ao contrário do ombro. Em compensação, a articulação do quadril é um dos sítios mais comuns de osteoartrose (coxartrose), e sua formação inadequada na infância (displasia do desenvolvimento do quadril) compromete essa estabilidade desde o nascimento.",
    doencasRelacionadas: [
      { slug: "osteoartrose", nome: "Osteoartrose" },
      { slug: "displasia-desenvolvimento-quadril", nome: "Displasia do desenvolvimento do quadril" },
    ],
    pontosDeProva: [
      "Ao contrário do ombro, a luxação traumática do quadril é rara e exige trauma de alta energia — a profundidade do acetábulo confere estabilidade óssea intrínseca muito maior.",
      "O ligamento iliofemoral é considerado um dos ligamentos mais fortes do corpo humano, essencial para manter a postura ereta sem fadiga muscular constante.",
    ],
    fontes: [
      { tema: "Anatomia e estabilizadores da articulação do quadril", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Articulatio coxae)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "joelho",
    meshNames: ["Femur_L", "Femur_R", "Tibia_L", "Tibia_R", "Patella_L", "Patella_R"],
    ossosEnvolvidos: [
      { slug: "femur", nome: "Fêmur" },
      { slug: "tibia", nome: "Tíbia" },
      { slug: "patela", nome: "Patela" },
    ],
    nomeOficial: "Articulatio genus",
    nomeComum: "Articulação do joelho",
    tipo: "Sinovial gínglimo (dobradiça)",
    resumo: "A maior e uma das mais complexas articulações do corpo, entre fêmur, tíbia e patela.",
    descricaoAnatomica:
      "Funcionalmente compreende duas articulações: a femorotibial (entre os côndilos do fêmur e os platôs da tíbia, o principal componente de sustentação de peso) e a femoropatelar (entre o sulco troclear do fêmur e a face posterior da patela). É um gínglimo modificado — permite um grau limitado de rotação quando o joelho está fletido.",
    movimentos: [
      "Flexão e extensão (movimento principal)",
      "Rotação interna e externa limitada, apenas com o joelho fletido",
    ],
    estabilizadores: [
      "Ligamento cruzado anterior — impede o deslizamento anterior da tíbia sob o fêmur",
      "Ligamento cruzado posterior — impede o deslizamento posterior",
      "Ligamento colateral tibial (medial) e fibular (lateral) — estabilidade em varo/valgo",
      "Meniscos medial e lateral — absorção de carga e melhora da congruência articular",
    ],
    correlacaoClinica:
      "A lesão do ligamento cruzado anterior é uma das lesões ligamentares mais comuns em esportes com mudança brusca de direção ou pivô, tipicamente com um estalido audível seguido de derrame articular rápido. Lesões de menisco frequentemente coexistem com lesões ligamentares. A osteoartrose de joelho (gonartrose) é uma das formas mais comuns e incapacitantes de osteoartrose.",
    doencasRelacionadas: [{ slug: "osteoartrose", nome: "Osteoartrose" }],
    pontosDeProva: [
      "Estalido audível seguido de derrame articular rápido (dentro de horas) após trauma de pivô no esporte é um padrão clássico de lesão do ligamento cruzado anterior.",
      "O joelho é um gínglimo modificado: permite rotação, mas apenas quando fletido — em extensão completa, a rotação é bloqueada pelo mecanismo de \"parafusamento\" (screw-home) do fêmur sobre a tíbia.",
    ],
    fontes: [
      { tema: "Anatomia e estabilizadores ligamentares do joelho", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulatio genus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "tornozelo",
    meshNames: ["Tibia_L", "Tibia_R", "Fibula_L", "Fibula_R", "Talus_L", "Talus_R"],
    ossosEnvolvidos: [
      { slug: "tibia", nome: "Tíbia" },
      { slug: "fibula", nome: "Fíbula" },
      { slug: "talus-calcaneo", nome: "Tálus e calcâneo" },
    ],
    nomeOficial: "Articulatio talocruralis",
    nomeComum: "Articulação do tornozelo",
    tipo: "Sinovial gínglimo (dobradiça)",
    resumo: "Articulação em dobradiça entre a tíbia, a fíbula e o tálus, encaixado como numa pinça óssea.",
    descricaoAnatomica:
      "Os maléolos medial (da tíbia) e lateral (da fíbula), junto à superfície articular inferior da tíbia, formam uma \"mortalha\" óssea que encaixa firmemente a tróclea do tálus. A inversão e a eversão do pé ocorrem principalmente na articulação subtalar (entre o tálus e o calcâneo), logo abaixo desta.",
    movimentos: ["Dorsiflexão", "Flexão plantar"],
    estabilizadores: [
      "Ligamento deltoide (medial) — forte, resiste à eversão excessiva",
      "Ligamentos talofibular anterior, talofibular posterior e calcaneofibular (complexo lateral) — mais fracos que o deltoide, mais frequentemente lesados",
    ],
    correlacaoClinica:
      "A entorse de tornozelo por inversão é a lesão musculoesquelética mais comum do corpo humano, tipicamente lesando primeiro o ligamento talofibular anterior — o mais fraco do complexo lateral. Fraturas do maléolo lateral (fíbula distal) frequentemente acompanham entorses mais graves, e a classificação de Weber ajuda a avaliar a estabilidade da mortalha do tornozelo.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O ligamento talofibular anterior é o mais fraco do complexo lateral do tornozelo e o primeiro a ser lesado em entorses por inversão.",
      "A inversão/eversão do pé ocorre predominantemente na articulação subtalar, não na articulação talocrural — que é essencialmente um gínglimo de dorsiflexão/flexão plantar.",
    ],
    fontes: [
      { tema: "Anatomia do tornozelo e mecanismo da entorse por inversão", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Articulatio talocruralis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
