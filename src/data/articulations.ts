import type { Articulacao } from "./types";

// Articulações do sistema esquelético. Os ossos reaproveitam o modelo do
// esqueleto (public/models/skeleton.glb). Os ligamentos/cápsulas/meniscos
// vêm de um segundo modelo (public/models/joints.glb), extraído da coleção
// "Joints" do atlas aberto Z-Anatomy (CC BY-SA 4.0, baseado em BodyParts3D),
// convertido e comprimido com o mesmo pipeline usado no esqueleto.
// Servido via jsDelivr — ver nota em skeletalSystem.ts.
export const JOINTS_MODEL_URL = "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/joints.glb";

// Mirrors the node-name sanitization baked into joints.glb at build time
// (spaces/parentheses stripped, "_L"/"_R" suffix) — see the processing
// notes for why: Three.js's GLTFLoader mangles raw names with spaces/dots.
function sides(names: string[]): string[] {
  return names.flatMap((n) => {
    const clean = n.replace(/[()]/g, "").trim().replace(/\s+/g, "_");
    return [`${clean}_L`, `${clean}_R`];
  });
}

export const articulacoes: Articulacao[] = [
  {
    slug: "ombro",
    meshNames: ["Scapula_L", "Scapula_R", "Humerus_L", "Humerus_R"],
    ligamentMeshNames: sides([
      "Articular capsule of glenohumeral joint",
      "Coracohumeral ligament",
      "Glenoid labrum",
      "Inferior glenohumeral ligament",
      "Middle glenohumeral ligament",
      "Superior glenohumeral ligament",
      "Acromioclavicular ligament",
      "Articular capsule of acromioclavicular joint",
      "Articular disc of acromioclavicular joint",
    ]),
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
    ligamentMeshNames: sides([
      "Annular ligament of radius",
      "Articular capsule of elbow joint",
      "Radial collateral ligament",
      "Ulnar collateral ligament",
    ]),
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
    ligamentMeshNames: sides([
      "Dorsal ulnocarpal ligament",
      "Articular capsule of radiocarpal joint",
      "Dorsal radiocarpal ligament",
      "Radial collateral ligament of wrist joint",
      "Ulnar collateral ligament of wrist joint",
    ]),
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
    ligamentMeshNames: sides([
      "Acetabular labrum",
      "Articular capsule of hip joint",
      "Descending part of iliofemoral ligament",
      "Transverse part of iliofemoral ligament",
      "Ischiofemoral ligament",
      "Ligament of head of femur",
      "Pubofemoral ligament",
      "Transverse acetabular ligament",
    ]),
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
      { tema: "Pranchas de ligamentos do quadril", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
  {
    slug: "joelho",
    meshNames: ["Femur_L", "Femur_R", "Tibia_L", "Tibia_R", "Patella_L", "Patella_R"],
    ligamentMeshNames: sides([
      "Anterior cruciate ligament",
      "Posterior cruciate ligament",
      "Articular capsule of knee joint",
      "Lateral meniscus",
      "Medial meniscus",
      "Anterior meniscotibial ligament (Lateral meniscus)",
      "Anterior meniscotibial ligament (Medial meniscus)",
      "Posterior meniscotibial ligament (Lateral meniscus)",
      "Posterior meniscotibial ligament (Medial meniscus)",
      "Meniscopatellar ligament",
      "Transverse ligament of knee",
      "Deep part of tibial collateral ligament",
      "Superficial part of tibial collateral ligament",
      "Fibular collateral ligament",
      "Infrapatellar fat pad",
    ]),
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
      { tema: "Pranchas de ligamentos do joelho", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
  {
    slug: "tornozelo",
    meshNames: ["Tibia_L", "Tibia_R", "Fibula_L", "Fibula_R", "Talus_L", "Talus_R"],
    ligamentMeshNames: sides([
      "Anterior talofibular ligament",
      "Posterior talofibular ligament",
      "Calcaneofibular ligament",
      "Posterior tibiotalar ligament",
      "Tibiocalcaneal ligament",
      "Tibionavicular ligament",
      "Anterior tibiofibular ligament",
      "Posterior tibiofibular ligament",
      "Transverse tibiofibular ligament",
      "Articular capsule of superior tibiofibular joint",
      "Interosseous membrane of leg",
    ]),
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
      { tema: "Pranchas de ligamentos do tornozelo", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
  {
    slug: "temporomandibular",
    meshNames: ["Mandible_bone", "Temporal_bone_L", "Temporal_bone_R"],
    ligamentMeshNames: sides([
      "Articular capsule of temporomandibular joint",
      "Articular disc of temporomandibular joint",
      "Lateral temporomandibular ligament",
      "Sphenomandibular ligament",
      "Stylomandibular ligament",
    ]),
    ossosEnvolvidos: [
      { slug: "mandibula", nome: "Mandíbula" },
      { slug: "osso-temporal", nome: "Osso temporal" },
    ],
    nomeOficial: "Articulatio temporomandibularis",
    nomeComum: "Articulação temporomandibular (ATM)",
    tipo: "Sinovial selar",
    resumo: "Articulação bilateral entre o côndilo da mandíbula e a fossa mandibular do osso temporal, com um disco articular que a divide em dois compartimentos.",
    descricaoAnatomica:
      "O côndilo mandibular articula-se com a fossa mandibular e o tubérculo articular do osso temporal. Um disco articular fibrocartilaginoso biconcavo divide a cavidade em compartimento superior (deslizamento/translação) e inferior (rotação), permitindo o movimento combinado de dobradiça e deslizamento característico da abertura da boca. As duas ATMs (direita e esquerda) funcionam obrigatoriamente em conjunto, como uma única unidade biomecânica.",
    movimentos: [
      "Depressão e elevação (abertura e fechamento da boca)",
      "Protrusão e retrusão",
      "Movimentos laterais (excursão), essenciais na mastigação",
    ],
    estabilizadores: [
      "Disco articular — absorve carga e guia o movimento combinado de rotação e translação",
      "Ligamento lateral (temporomandibular) — principal estabilizador, resiste ao deslocamento posterior",
      "Ligamentos esfenomandibular e estilomandibular — estabilizadores acessórios, à distância da cápsula",
    ],
    correlacaoClinica:
      "A disfunção temporomandibular (DTM) é uma condição extremamente comum, com dor pré-auricular, estalidos e limitação de abertura bucal, frequentemente relacionada a bruxismo, deslocamento anterior do disco articular ou parafunção mastigatória. A luxação anterior da ATM ocorre quando o côndilo ultrapassa o tubérculo articular (tipicamente num bocejo amplo) e fica preso anteriormente, exigindo redução manual (manobra de Nélaton).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O disco articular divide a ATM em dois compartimentos funcionais: o superior permite translação (deslizamento), o inferior permite rotação — a combinação dos dois produz a abertura bucal completa.",
      "Na luxação anterior da ATM, o côndilo mandibular fica preso à frente do tubérculo articular, geralmente após abertura bucal excessiva (bocejo), e a redução é feita com pressão para baixo e para trás sobre os molares inferiores.",
    ],
    fontes: [
      { tema: "Biomecânica da ATM e disfunção temporomandibular", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulatio temporomandibularis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "esternoclavicular",
    meshNames: ["Clavicle_L", "Clavicle_R", "Manubrium_of_sternum"],
    ligamentMeshNames: sides([
      "Anterior sternoclavicular ligament",
      "Posterior sternoclavicular ligament",
      "Articular capsule of sternoclavicular joint",
      "Articular disc of sternoclavicular joint",
      "Interclavicular ligament",
      "Costoclavicular ligament",
    ]),
    ossosEnvolvidos: [
      { slug: "clavicula", nome: "Clavícula" },
      { slug: "torax", nome: "Manúbrio do esterno" },
    ],
    nomeOficial: "Articulatio sternoclavicularis",
    nomeComum: "Articulação esternoclavicular",
    tipo: "Sinovial selar",
    resumo: "Única articulação sinovial que liga o membro superior ao esqueleto axial, entre a extremidade medial da clavícula e o manúbrio do esterno.",
    descricaoAnatomica:
      "Apesar da pequena área de contato ósseo direto, é uma articulação notavelmente estável e de baixa incidência de luxação, graças a um disco articular fibrocartilaginoso que melhora a congruência e a um conjunto robusto de ligamentos. É o ponto de apoio a partir do qual toda a cintura escapular se move em relação ao tronco.",
    movimentos: [
      "Elevação e depressão da clavícula (acompanhando o movimento do ombro)",
      "Protração e retração",
      "Rotação axial da clavícula (associada à elevação do braço acima da horizontal)",
    ],
    estabilizadores: [
      "Ligamento costoclavicular — o estabilizador mais importante, ligando a clavícula à primeira costela",
      "Disco articular — impede o deslocamento medial da clavícula e absorve forças transmitidas do membro superior",
      "Ligamentos esternoclavicular anterior/posterior e interclavicular",
    ],
    correlacaoClinica:
      "Por sua estabilidade ligamentar, a luxação esternoclavicular é rara e exige trauma de alta energia — a luxação posterior é incomum, porém grave, pelo risco de compressão de estruturas mediastinais (traqueia, grandes vasos) logo atrás da articulação. É mais comum a fratura da clavícula (geralmente no terço médio) do que a luxação desta articulação propriamente dita.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A articulação esternoclavicular é a única conexão sinovial entre o membro superior e o esqueleto axial — todo o resto da cintura escapular é suspenso por músculos.",
      "Luxação esternoclavicular posterior é rara, mas é uma emergência potencial pelo risco de compressão de traqueia e grandes vasos mediastinais.",
    ],
    fontes: [
      { tema: "Anatomia e estabilidade da articulação esternoclavicular", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Articulatio sternoclavicularis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "sacroiliaca",
    meshNames: ["Hip_bone_L", "Hip_bone_R", "Sacrum"],
    ligamentMeshNames: sides([
      "Anterior sacro-iliac ligament",
      "Posterior sacro-iliac ligament",
      "Interosseous sacro-iliac ligament",
      "Iliolumbar ligament",
      "Sacrospinous ligament",
      "Sacrotuberous ligament",
    ]),
    ossosEnvolvidos: [
      { slug: "osso-quadril", nome: "Osso do quadril" },
      { slug: "coluna-vertebral", nome: "Sacro" },
    ],
    nomeOficial: "Articulatio sacroiliaca",
    nomeComum: "Articulação sacroilíaca",
    tipo: "Sinovial plana",
    resumo: "Articulação entre as superfícies auriculares do sacro e do ílio, transmitindo o peso do tronco para os membros inferiores.",
    descricaoAnatomica:
      "Tecnicamente sinovial na porção anterior, com superfícies irregulares e interdigitadas que conferem grande estabilidade mecânica à custa de mobilidade quase nula no adulto — é uma das articulações menos móveis do corpo. Um robusto complexo de ligamentos posteriores e interósseos, entre os mais fortes do corpo humano, é responsável pela maior parte dessa estabilidade, muito mais do que o formato ósseo em si.",
    movimentos: [
      "Movimento mínimo de nutação e contranutação (báscula do sacro entre os ílios), sem eixo de rotação voluntário",
    ],
    estabilizadores: [
      "Ligamentos sacroilíacos interósseos — os mais fortes do corpo, preenchendo o espaço posterior à articulação",
      "Ligamentos sacroilíacos anterior e posterior",
      "Ligamentos sacrotuberal e sacroespinhal — estabilizadores acessórios, também relevantes como referência cirúrgica e para o forame isquiático",
      "Ligamento iliolombar — conecta o processo transverso de L5 à crista ilíaca",
    ],
    correlacaoClinica:
      "A sacroileíte (inflamação da articulação sacroilíaca) é um achado precoce e característico das espondiloartrites soronegativas, especialmente a espondilite anquilosante, tipicamente bilateral e visível à radiografia/ressonância antes mesmo do acometimento da coluna. Na gestação, o relaxamento hormonal (relaxina) dos ligamentos sacroilíacos e da sínfise púbica contribui para dor lombar pélvica posterior, comum no terceiro trimestre.",
    doencasRelacionadas: [{ slug: "espondilite-anquilosante", nome: "Espondilite anquilosante" }],
    pontosDeProva: [
      "Sacroileíte bilateral é um achado precoce e característico da espondilite anquilosante — frequentemente visível à imagem antes do acometimento evidente da coluna vertebral.",
      "A estabilidade da articulação sacroilíaca depende muito mais dos ligamentos (sobretudo o interósseo) do que do encaixe ósseo entre sacro e ílio.",
    ],
    fontes: [
      { tema: "Anatomia da articulação sacroilíaca e sacroileíte nas espondiloartrites", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulatio sacroiliaca)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Pranchas de ligamentos da pelve", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
  {
    slug: "sinfise-pubica",
    meshNames: ["Hip_bone_L", "Hip_bone_R"],
    ligamentMeshNames: sides(["Obturator membrane"]).concat([
      "Pubic_symphysis",
      "Interpubic_disc",
      "Superior_pubic_ligament",
      "Inferior_pubic_ligament",
    ]),
    ossosEnvolvidos: [{ slug: "osso-quadril", nome: "Osso do quadril (púbis)" }],
    nomeOficial: "Symphysis pubica",
    nomeComum: "Sínfise púbica",
    tipo: "Cartilaginosa (sínfise)",
    resumo: "Articulação cartilaginosa secundária na linha média, entre as superfícies sinfisárias dos dois ossos púbicos, com um disco interpúbico fibrocartilaginoso.",
    descricaoAnatomica:
      "As faces mediais dos dois ossos púbicos, revestidas de cartilagem hialina, são unidas por um disco interpúbico de fibrocartilagem — sem cavidade sinovial verdadeira. É reforçada superiormente pelo ligamento púbico superior e inferiormente pelo ligamento púbico inferior (arqueado), que forma o ângulo do arco púbico.",
    movimentos: [
      "Mobilidade mínima no adulto — pequeno grau de deslizamento e compressão, sem eixo de movimento voluntário",
    ],
    estabilizadores: [
      "Disco interpúbico fibrocartilaginoso",
      "Ligamento púbico superior",
      "Ligamento púbico inferior (arqueado) — define o ângulo subpúbico, mais agudo no sexo masculino",
    ],
    correlacaoClinica:
      "Durante a gestação, a hormona relaxina promove frouxidão dos ligamentos da sínfise púbica (e das sacroilíacas), aumentando fisiologicamente sua mobilidade para facilitar a passagem pelo canal do parto — quando excessiva, causa a disfunção da sínfise púbica gravídica, com dor púbica e dificuldade de marcha. A diástase (separação) traumática da sínfise púbica ocorre em fraturas de pelve de alta energia e é um marcador de instabilidade pélvica grave.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O ângulo subpúbico formado pelo ligamento púbico inferior é mais agudo (< 70°) no sexo masculino e mais obtuso (> 90°) no feminino — um dos principais critérios de dimorfismo sexual da pelve óssea.",
      "A frouxidão fisiológica da sínfise púbica na gestação, mediada pela relaxina, pode se tornar sintomática (disfunção da sínfise púbica), mas raramente causa diástase franca fora do contexto de trauma.",
    ],
    fontes: [
      { tema: "Anatomia da sínfise púbica e alterações na gestação", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Symphysis pubica)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Pranchas de ligamentos da pelve", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
  {
    slug: "radioulnar",
    meshNames: ["Radius_L", "Radius_R", "Ulna_L", "Ulna_R"],
    ligamentMeshNames: sides([
      "Annular ligament of radius",
      "Interosseous membrane of forearm",
      "Dorsal radio-ulnar ligament",
      "Palmar radio-ulnar ligament",
      "Articular disc of distal radio-ulnar joint",
      "Quadrate ligament",
      "Oblique cord",
    ]),
    ossosEnvolvidos: [
      { slug: "radio", nome: "Rádio" },
      { slug: "ulna", nome: "Ulna" },
    ],
    nomeOficial: "Articulationes radioulnares (proximalis et distalis)",
    nomeComum: "Articulações radioulnares (proximal e distal)",
    tipo: "Sinovial trocóide (pivô)",
    resumo: "Par de articulações em pivô, uma no cotovelo e outra no punho, que giram em conjunto para produzir a pronação e a supinação do antebraço.",
    descricaoAnatomica:
      "Na articulação radioulnar proximal, a cabeça do rádio gira dentro de um anel formado pela incisura radial da ulna e pelo ligamento anular. Na articulação radioulnar distal, a incisura ulnar do rádio gira ao redor da cabeça da ulna, estabilizada por um disco articular fibrocartilaginoso (o mesmo complexo fibrocartilaginoso triangular que separa a ulna do carpo). As duas articulações são obrigatoriamente conjugadas: não é possível mover uma isoladamente sem a outra, e a membrana interóssea do antebraço conecta rádio e ulna ao longo de toda sua extensão, transmitindo forças entre eles.",
    movimentos: ["Pronação", "Supinação"],
    estabilizadores: [
      "Ligamento anular do rádio — mantém a cabeça do rádio junto à ulna na articulação proximal",
      "Disco articular (complexo fibrocartilaginoso triangular) — estabiliza a articulação distal e separa a ulna do carpo",
      "Membrana interóssea do antebraço — uniao fibrosa firme entre as diáfises, também transfere carga do rádio para a ulna",
      "Corda oblíqua — feixe acessório próximo à articulação proximal",
    ],
    correlacaoClinica:
      "A fratura de Galeazzi (fratura da diáfise do rádio com luxação da articulação radioulnar distal) e a fratura-luxação de Monteggia (fratura da ulna proximal com luxação da cabeça do rádio, comprometendo a articulação proximal) ilustram como uma lesão do eixo radioulnar em um ponto frequentemente desloca a articulação no outro extremo — por isso a regra de sempre avaliar ambas as articulações radioulnares diante de fratura isolada de um dos dois ossos do antebraço. Lesões do complexo fibrocartilaginoso triangular causam dor ulnar do punho e instabilidade da articulação radioulnar distal.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "As articulações radioulnares proximal e distal são obrigatoriamente conjugadas — pronação e supinação exigem movimento simultâneo das duas, nunca isolado.",
      "Fratura isolada da diáfise de um dos ossos do antebraço deve levantar suspeita de luxação da articulação radioulnar no outro extremo (Galeazzi: rádio + luxação distal; Monteggia: ulna + luxação proximal).",
    ],
    fontes: [
      { tema: "Biomecânica das articulações radioulnares e fraturas de Galeazzi/Monteggia", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulationes radioulnares)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "subtalar",
    meshNames: ["Talus_L", "Talus_R", "Calcaneus_L", "Calcaneus_R"],
    ligamentMeshNames: sides([
      "Anterior talocalcaneal ligament",
      "Posterior talocalcaneal ligament",
      "Medial talocalcaneal ligament",
      "Lateral talocalcaneal ligament",
      "Talocalcaneal interosseous ligament",
    ]),
    ossosEnvolvidos: [
      { slug: "talus-calcaneo", nome: "Tálus e calcâneo" },
    ],
    nomeOficial: "Articulatio subtalaris",
    nomeComum: "Articulação subtalar (talocalcânea)",
    tipo: "Sinovial plana",
    resumo: "Articulação entre a face inferior do tálus e a face superior do calcâneo, principal responsável pela inversão e eversão do pé.",
    descricaoAnatomica:
      "Localizada logo abaixo da articulação talocrural (tornozelo), é aqui — e não no tornozelo — que ocorrem predominantemente a inversão e a eversão do pé. O ligamento talocalcâneo interósseo, robusto e localizado no seio do tarso, é o principal estabilizador e divide funcionalmente a articulação em compartimentos anterior e posterior.",
    movimentos: ["Inversão", "Eversão"],
    estabilizadores: [
      "Ligamento talocalcâneo interósseo — o mais importante, situado no seio do tarso",
      "Ligamentos talocalcâneos medial, lateral, anterior e posterior",
    ],
    correlacaoClinica:
      "A confusão entre movimentos do tornozelo (dorsiflexão/flexão plantar, na articulação talocrural) e do retropé (inversão/eversão, na articulação subtalar) é um erro comum — didaticamente, entorses de tornozelo por inversão na verdade combinam movimento nas duas articulações. O pé plano flexível e o pé cavo refletem, em parte, alterações no alinhamento e na mobilidade da articulação subtalar.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Inversão e eversão do pé ocorrem na articulação subtalar, não na talocrural (tornozelo) — o tornozelo faz apenas dorsiflexão e flexão plantar.",
      "O ligamento talocalcâneo interósseo, no seio do tarso, é o principal estabilizador da articulação subtalar e um ponto de referência cirúrgico importante.",
    ],
    fontes: [
      { tema: "Anatomia da articulação subtalar e cinemática do retropé", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Articulatio subtalaris)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Pranchas de ligamentos do tornozelo e pé", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
  {
    slug: "tarso-transverso",
    meshNames: ["Talus_L", "Talus_R", "Calcaneus_L", "Calcaneus_R", "Navicular_bone_L", "Navicular_bone_R", "Cuboid_bone_L", "Cuboid_bone_R"],
    ligamentMeshNames: sides([
      "Talonavicular ligament",
      "Calcaneocuboid ligament",
      "Dorsal calcaneocuboid ligament",
      "Plantar calcaneocuboid ligament",
      "Calcaneonavicular ligament",
      "Plantar calcaneonavicular ligament",
      "Long plantar ligament",
    ]),
    ossosEnvolvidos: [
      { slug: "talus-calcaneo", nome: "Tálus e calcâneo" },
      { slug: "perna-pe", nome: "Navicular e cuboide" },
    ],
    nomeOficial: "Articulatio tarsi transversa",
    nomeComum: "Articulação transversa do tarso (linha de Chopart)",
    tipo: "Sinovial plana",
    resumo: "Linha articular composta pelas articulações talonavicular e calcaneocuboide, que atravessa o mediopé de lado a lado.",
    descricaoAnatomica:
      "Não é uma articulação única, mas a combinação funcional de duas articulações adjacentes que formam uma linha transversal contínua através do pé: a talonavicular (parte da articulação talocalcaneonavicular, entre a cabeça do tálus e o navicular) e a calcaneocuboide (entre o calcâneo e o cuboide). Juntas, definem o plano cirúrgico clássico de amputação transtársica (nível de Chopart) e participam, junto à articulação subtalar, dos movimentos combinados de inversão e eversão do pé.",
    movimentos: [
      "Contribui para inversão e eversão do pé, em conjunto com a articulação subtalar",
      "Pequeno grau de flexão/extensão do mediopé",
    ],
    estabilizadores: [
      "Ligamento calcaneonavicular plantar (\"em mola\", spring ligament) — sustenta a cabeça do tálus e é essencial para o arco longitudinal medial do pé",
      "Ligamento calcaneocuboide dorsal e plantar",
      "Ligamento talonavicular dorsal",
      "Ligamento plantar longo — reforço plantar que se estende até os metatarsais",
    ],
    correlacaoClinica:
      "O colapso do ligamento calcaneonavicular plantar (ligamento em mola) é um fator estrutural central no pé plano adquirido do adulto, permitindo que a cabeça do tálus desça e rode medialmente. A linha de Chopart é also o plano de referência para amputações transtársicas quando é preciso preservar o máximo de comprimento do pé mantendo um coto funcional para apoio.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A articulação transversa do tarso (Chopart) não é uma articulação anatômica única — é a soma funcional da talonavicular com a calcaneocuboide, usada como referência cirúrgica de amputação.",
      "O ligamento calcaneonavicular plantar (\"em mola\") sustenta a cabeça do tálus e seu enfraquecimento é um mecanismo central do pé plano adquirido do adulto.",
    ],
    fontes: [
      { tema: "Anatomia da linha de Chopart e do ligamento em mola", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulatio tarsi transversa)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Pranchas de ligamentos do pé", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
  {
    slug: "tarsometatarsica",
    meshNames: [
      "Medial_cuneiform_bone_L", "Medial_cuneiform_bone_R",
      "Intermediate_cuneiform_bone_L", "Intermediate_cuneiform_bone_R",
      "Lateral_cuneiform_bone_L", "Lateral_cuneiform_bone_R",
      "Cuboid_bone_L", "Cuboid_bone_R",
      "First_metatarsal_bone_L", "First_metatarsal_bone_R",
      "Second_metatarsal_bone_L", "Second_metatarsal_bone_R",
      "Third_metatarsal_bone_L", "Third_metatarsal_bone_R",
      "Fourth_metatarsal_bone_L", "Fourth_metatarsal_bone_R",
      "Fifth_metatarsal_bone_L", "Fifth_metatarsal_bone_R",
    ],
    ligamentMeshNames: sides([
      "Dorsal tarsometatarsal ligaments",
      "Plantar tarsometatarsal ligaments",
      "Cuneometatarsal interosseous ligaments",
      "Dorsal cuneonavicular ligaments",
      "Plantar cuneonavicular ligaments",
      "Dorsal cuneocuboid ligament",
      "Plantar cuneocuboid ligament",
      "Cuneocuboid interosseous ligament",
      "Dorsal intercuneiform ligaments",
      "Plantar intercuneiform ligaments",
      "Intercuneiform interosseous ligaments",
      "Dorsal cuboideonavicular ligament",
      "Plantar cuboideonavicular ligament",
    ]),
    ossosEnvolvidos: [
      { slug: "perna-pe", nome: "Cuneiformes, cuboide e metatarsais" },
    ],
    nomeOficial: "Articulationes tarsometatarsales",
    nomeComum: "Articulações tarsometatársicas (linha de Lisfranc)",
    tipo: "Sinovial plana",
    resumo: "Linha articular entre os três cuneiformes e o cuboide, proximalmente, e as bases dos cinco metatarsais, distalmente — o limite entre mediopé e antepé.",
    descricaoAnatomica:
      "Compreende as três articulações cuneometatársicas (dos metatarsais 1º a 3º com os respectivos cuneiformes) e a articulação entre o cuboide e o 4º/5º metatarsais, reforçadas por uma rede densa de ligamentos dorsais, plantares e interósseos entre os próprios ossos do tarso distal (intercuneiformes, cuneocuboide, cuboideonavicular). O encaixe em \"chave de abóbada\" da base do 2º metatarsal, recuada entre o cuneiforme medial e o lateral, confere estabilidade estrutural intrínseca a essa articulação em particular.",
    movimentos: [
      "Deslizamento e rotação mínimos entre os ossos do tarso distal e as bases dos metatarsais — contribuem para a adaptação do antepé a superfícies irregulares",
    ],
    estabilizadores: [
      "Ligamento cuneometatársico interósseo medial-2º metatarsal (o \"ligamento de Lisfranc\" propriamente dito) — estrutura-chave, sem equivalente entre o 1º e o 2º metatarsais",
      "Ligamentos tarsometatársicos dorsais e plantares",
      "Ligamentos intercuneiformes e cuneocuboide, que solidarizam o tarso distal",
      "Encaixe ósseo em chave de abóbada da base do 2º metatarsal",
    ],
    correlacaoClinica:
      "A lesão de Lisfranc (fratura-luxação tarsometatársica) ocorre classicamente por trauma axial ou rotacional no antepé fixo (ex.: pé preso no estribo, queda de altura) e é frequentemente subdiagnosticada em radiografia simples — um pequeno alargamento entre as bases do 1º e 2º metatarsais (\"fleck sign\", um fragmento ósseo avulsionado do ligamento de Lisfranc) é um achado sutil, porém crucial, já que o não reconhecimento leva a instabilidade crônica do arco do pé e artrose precoce.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Não existe ligamento interósseo entre as bases do 1º e 2º metatarsais — a estabilidade dessa região depende do ligamento de Lisfranc (cuneiforme medial ao 2º metatarsal), o que a torna um ponto de vulnerabilidade estrutural.",
      "O \"fleck sign\" (pequeno fragmento ósseo entre a base do 1º e 2º metatarsais na radiografia) é um achado sutil, mas específico, de lesão de Lisfranc, frequentemente subdiagnosticada na urgência.",
    ],
    fontes: [
      { tema: "Anatomia da articulação tarsometatársica e lesão de Lisfranc", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Articulationes tarsometatarsales)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Pranchas de ligamentos do pé", fonte: "Sobotta, Atlas of Human Anatomy" },
    ],
  },
];
