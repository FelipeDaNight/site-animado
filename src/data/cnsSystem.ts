import type { EstruturaEncefalica } from "./types";

// Modelo 3D: coleção "Central nervous system" do atlas Z-Anatomy (CC BY-SA 4.0,
// baseado em BodyParts3D/DBCLS). Parte 1 do sistema nervoso central: sistema
// ventricular, núcleos da base, sistema límbico, diencéfalo e substância
// branca/comissuras (44 objetos). A medula espinal (substância cinzenta/branca)
// tem geometria própria mínima nesta base e será tratada separadamente; tronco
// encefálico, cerebelo e córtex cerebral estão planejados para partes futuras.
export const CNS_PART1_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/cns-diencephalon.glb";

export const sistemaNervosoCentral: EstruturaEncefalica[] = [
  // ===== Sistema ventricular =====
  {
    slug: "ventriculos-laterais",
    meshNames: ["Lateral_ventricle_L", "Lateral_ventricle_R"],
    regiao: "Sistema ventricular",
    nomeOficial: "Ventriculi laterales",
    nomeComum: "Ventrículos laterais",
    resumo:
      "Par de cavidades em forma de C no interior de cada hemisfério cerebral, os maiores componentes do sistema ventricular, responsáveis por grande parte da produção e circulação do líquido cefalorraquidiano (LCR).",
    descricaoAnatomica:
      "Cada ventrículo lateral acompanha a curvatura do hemisfério em torno do núcleo caudado e do tálamo, dividido em corno frontal (anterior ao forame interventricular), corpo, átrio (trígono, onde convergem corpo, corno occipital e corno temporal), corno occipital e corno temporal (que acompanha o hipocampo no seu assoalho). Comunica-se com o terceiro ventrículo pelo forame interventricular (forame de Monro).",
    funcao: [
      "Sede do plexo corióideo, principal fonte de produção do líquido cefalorraquidiano",
      "Via inicial de circulação do LCR, do parênquima cerebral em direção ao terceiro e quarto ventrículos e ao espaço subaracnóideo",
    ],
    relacoesAnatomicas:
      "O corno frontal relaciona-se com o joelho do corpo caloso (teto) e a cabeça do núcleo caudado (parede lateral); o átrio relaciona-se com o esplênio do corpo caloso; o corno temporal tem o hipocampo em seu assoalho e a cauda do núcleo caudado em seu teto.",
    correlacaoClinica:
      "A dilatação dos ventrículos laterais (hidrocefalia) ocorre por obstrução do fluxo liquórico a jusante (por exemplo, estenose do aqueduto do mesencéfalo) ou por reabsorção prejudicada nas granulações aracnóideas. Em recém-nascidos prematuros, a matriz germinativa periventricular é um sítio frequente de hemorragia intraventricular, por sua vascularização frágil.",
    doencasRelacionadas: [
      { slug: "hidrocefalia", nome: "Hidrocefalia" },
      { slug: "hidrocefalia-congenita", nome: "Hidrocefalia congênita" },
    ],
    pontosDeProva: [
      "O forame interventricular (de Monro) conecta cada ventrículo lateral ao terceiro ventrículo — sua obstrução unilateral (por exemplo, por tumor coloide) causa hidrocefalia assimétrica de um único ventrículo lateral.",
      "O corno temporal do ventrículo lateral acompanha o hipocampo — sua dilatação é um sinal de imagem sutil de atrofia hipocampal (esclerose mesial temporal, epilepsia do lobo temporal).",
    ],
    fontes: [
      { tema: "Anatomia do sistema ventricular", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Circulação do LCR e hidrocefalia", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Ventriculi laterales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "terceiro-ventriculo",
    meshNames: ["Third_ventricle"],
    regiao: "Sistema ventricular",
    nomeOficial: "Ventriculus tertius",
    nomeComum: "Terceiro ventrículo",
    resumo:
      "Cavidade estreita e vertical na linha média do diencéfalo, entre os dois tálamos, que recebe o LCR dos ventrículos laterais e o conduz ao quarto ventrículo através do aqueduto do mesencéfalo.",
    descricaoAnatomica:
      "Fenda mediana limitada lateralmente pelo tálamo e hipotálamo (frequentemente unidos na linha média pela adesão intertalâmica), com o assoalho formado por estruturas hipotalâmicas (quiasma óptico, infundíbulo, corpos mamilares) e o teto formado por uma dobra da pia-máter (tela corióidea) que contém o plexo corióideo do terceiro ventrículo.",
    funcao: [
      "Via de trânsito do LCR entre os ventrículos laterais (via forames de Monro) e o aqueduto do mesencéfalo",
      "Contém plexo corióideo próprio, contribuindo para a produção de LCR",
    ],
    relacoesAnatomicas:
      "Ladeado pelo tálamo e hipotálamo; seu recesso infundibular projeta-se em direção à haste hipofisária, e seu recesso óptico situa-se logo acima do quiasma óptico.",
    correlacaoClinica:
      "Tumores da região do terceiro ventrículo (por exemplo, tumor coloide, craniofaringioma) podem causar hidrocefalia obstrutiva aguda e intermitente, com cefaleia postural característica (piora com mudanças de posição da cabeça) por obstrução valvular do forame de Monro.",
    doencasRelacionadas: [{ slug: "hidrocefalia", nome: "Hidrocefalia" }],
    pontosDeProva: [
      "Cefaleia postural intermitente e súbita sugere tumor coloide do terceiro ventrículo, que pode obstruir de forma valvular os forames de Monro conforme a posição da cabeça.",
      "O assoalho do terceiro ventrículo é formado por estruturas hipotalâmicas — quiasma óptico, infundíbulo e corpos mamilares, de anterior para posterior.",
    ],
    fontes: [
      { tema: "Anatomia do terceiro ventrículo", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Tumores intraventriculares e hidrocefalia obstrutiva", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Ventriculus tertius)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "quarto-ventriculo",
    meshNames: ["Fourth_ventricle"],
    regiao: "Sistema ventricular",
    nomeOficial: "Ventriculus quartus",
    nomeComum: "Quarto ventrículo",
    resumo:
      "Cavidade em forma de losango entre a ponte/bulbo (assoalho) e o cerebelo (teto), última câmara do sistema ventricular antes de o LCR alcançar o espaço subaracnóideo.",
    descricaoAnatomica:
      "Assoalho formado pela face posterior da ponte e do bulbo (fossa romboide), teto formado por estruturas cerebelares (véu medular superior e inferior). Comunica-se superiormente com o aqueduto do mesencéfalo, inferiormente com o canal central da medula, e com o espaço subaracnóideo através de três aberturas: uma mediana (forame de Magendie) e duas laterais (forames de Luschka).",
    funcao: [
      "Via final do LCR antes de sua saída para o espaço subaracnóideo através dos forames de Magendie e Luschka",
      "Contém plexo corióideo próprio no teto",
    ],
    relacoesAnatomicas:
      "O assoalho (fossa romboide) contém núcleos de nervos cranianos importantes para a semiologia do tronco encefálico; situa-se anteriormente ao cerebelo e posteriormente à ponte/bulbo.",
    correlacaoClinica:
      "A síndrome de Dandy-Walker (agenesia/hipoplasia do verme cerebelar com dilatação cística do quarto ventrículo) é uma causa clássica de hidrocefalia congênita. Tumores da fossa posterior em crianças (por exemplo, meduloblastoma) frequentemente obstruem o quarto ventrículo, causando hidrocefalia obstrutiva com cefaleia, vômitos e papiledema.",
    doencasRelacionadas: [
      { slug: "hidrocefalia-congenita", nome: "Hidrocefalia congênita" },
      { slug: "hidrocefalia", nome: "Hidrocefalia" },
    ],
    pontosDeProva: [
      "Os forames de Magendie (mediano) e Luschka (laterais, pareados) são as únicas saídas do LCR do sistema ventricular para o espaço subaracnóideo — sua obstrução causa hidrocefalia comunicante ou não comunicante conforme o nível.",
      "Tumores de fossa posterior na infância (meduloblastoma, ependimoma) obstruem classicamente o quarto ventrículo, causando hidrocefalia obstrutiva.",
    ],
    fontes: [
      { tema: "Anatomia do quarto ventrículo e fossa romboide", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Tumores de fossa posterior na infância", fonte: "Nelson Textbook of Pediatrics, 21ª ed." },
      { tema: "Nomenclatura oficial (Ventriculus quartus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "aqueduto-do-mesencefalo",
    meshNames: ["Aqueduct_of_midbrain"],
    regiao: "Sistema ventricular",
    nomeOficial: "Aqueductus mesencephali (Aqueductus cerebri)",
    nomeComum: "Aqueduto do mesencéfalo (aqueduto cerebral, de Sylvius)",
    resumo:
      "Canal estreito que atravessa o mesencéfalo conectando o terceiro ao quarto ventrículo — o segmento mais estreito de todo o sistema ventricular e, por isso, o local mais comum de obstrução ao fluxo de LCR.",
    descricaoAnatomica:
      "Trajeto curto e estreito (poucos milímetros de diâmetro) através do tegmento do mesencéfalo, ladeado pela substância cinzenta periaquedutal, sem plexo corióideo próprio.",
    funcao: [
      "Único canal de comunicação entre o terceiro e o quarto ventrículo",
    ],
    relacoesAnatomicas:
      "Circundado pela substância cinzenta periaquedutal (envolvida na modulação da dor e no comportamento defensivo); ântero-inferior aos colículos do teto mesencefálico.",
    correlacaoClinica:
      "A estenose do aqueduto do mesencéfalo (congênita ou adquirida, por exemplo, por compressão tumoral) é a causa mais comum de hidrocefalia obstrutiva (não comunicante) congênita, dilatando os ventrículos laterais e o terceiro ventrículo enquanto o quarto ventrículo permanece de tamanho normal — um padrão radiológico característico.",
    doencasRelacionadas: [
      { slug: "hidrocefalia-congenita", nome: "Hidrocefalia congênita" },
      { slug: "hidrocefalia", nome: "Hidrocefalia" },
    ],
    pontosDeProva: [
      "A estenose do aqueduto do mesencéfalo é a causa mais comum de hidrocefalia congênita não comunicante — dilata ventrículos laterais e terceiro ventrículo com quarto ventrículo normal.",
      "Por ser o segmento mais estreito do sistema ventricular, o aqueduto é o local de obstrução mais frequente em toda a via liquórica.",
    ],
    fontes: [
      { tema: "Estenose do aqueduto e hidrocefalia congênita", fonte: "Nelson Textbook of Pediatrics, 21ª ed." },
      { tema: "Anatomia do mesencéfalo e substância cinzenta periaquedutal", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Aqueductus mesencephali)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "canal-central",
    meshNames: ["Central_canal"],
    regiao: "Sistema ventricular",
    nomeOficial: "Canalis centralis",
    nomeComum: "Canal central (da medula espinal)",
    resumo:
      "Canal minúsculo revestido por epêndima que percorre o centro da medula espinal em toda a sua extensão, continuação caudal do sistema ventricular a partir do quarto ventrículo.",
    descricaoAnatomica:
      "Prolongamento caudal do quarto ventrículo, situado na comissura cinzenta da medula espinal, revestido por epêndima; termina inferiormente numa pequena dilatação (ventrículo terminal) no cone medular. Na vida adulta, é frequentemente parcial ou totalmente obliterado em segmentos ao longo da medula.",
    funcao: [
      "Continuidade do sistema ventricular e circulação de LCR até o cone medular",
    ],
    relacoesAnatomicas:
      "Situado no centro da comissura cinzenta da medula espinal, entre as duas metades da substância cinzenta em formato de H.",
    correlacaoClinica:
      "A siringomielia é a formação de uma cavidade cística (siringe) frequentemente associada à dilatação do canal central, que expande e destrói a comissura branca anterior — interrompendo classicamente as fibras espinotalâmicas cruzadas e causando perda dissociada de sensibilidade térmica/dolorosa com preservação do tato fino, tipicamente em distribuição \"em capa\" nos membros superiores.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A siringomielia, ao expandir o canal central, destrói primeiro as fibras espinotalâmicas que cruzam na comissura branca anterior — causando perda dissociada de dor/temperatura com tato preservado.",
      "O canal central é a continuação caudal direta do quarto ventrículo, terminando no ventrículo terminal do cone medular.",
    ],
    fontes: [
      { tema: "Siringomielia e anatomia do canal central", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Canalis centralis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },

  // ===== Núcleos da base =====
  {
    slug: "nucleo-caudado",
    meshNames: ["Caudate_nucleus_L", "Caudate_nucleus_R"],
    regiao: "Núcleos da base",
    nomeOficial: "Nucleus caudatus",
    nomeComum: "Núcleo caudado",
    resumo:
      "Núcleo em formato de C que acompanha todo o contorno do ventrículo lateral, parte do corpo estriado (junto ao putame), envolvido no controle motor e em funções cognitivas/comportamentais como parte dos circuitos dos núcleos da base.",
    descricaoAnatomica:
      "Dividido em cabeça (volumosa, na parede lateral do corno frontal do ventrículo lateral), corpo (ao longo do assoalho do corpo ventricular) e cauda (que se curva no corno temporal até a amígdala). Junto ao putame, forma o \"estriado\", conectado por pontes de substância cinzenta que atravessam a cápsula interna.",
    funcao: [
      "Recebe aferências corticais excitatórias glutamatérgicas de praticamente todo o córtex cerebral, principal via de entrada do circuito dos núcleos da base",
      "Participa do controle e planejamento do movimento voluntário, aprendizado procedural e funções executivas/cognitivas",
    ],
    relacoesAnatomicas:
      "A cabeça relaciona-se lateralmente com a cápsula interna (que a separa do putame) e medialmente com o corno frontal do ventrículo lateral; a cauda acompanha o corno temporal até a amígdala.",
    correlacaoClinica:
      "A doença de Huntington causa atrofia seletiva e progressiva do núcleo caudado (visível como dilatação dos cornos frontais dos ventrículos laterais na imagem), manifestando-se com coreia, declínio cognitivo e distúrbios psiquiátricos.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A atrofia do núcleo caudado é o achado de imagem clássico da doença de Huntington, causando dilatação secundária dos cornos frontais dos ventrículos laterais.",
      "Núcleo caudado e putame formam juntos o \"estriado\" (ou neoestriado) — a principal via de entrada de informação cortical para os núcleos da base.",
    ],
    fontes: [
      { tema: "Anatomia e circuitos dos núcleos da base", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Doença de Huntington", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nucleus caudatus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "putame",
    meshNames: ["Putamen_L", "Putamen_R"],
    regiao: "Núcleos da base",
    nomeOficial: "Putamen",
    nomeComum: "Putame",
    resumo:
      "Maior e mais lateral núcleo dos núcleos da base, forma com o globo pálido o núcleo lentiforme e, junto ao núcleo caudado, o corpo estriado — componente central do circuito motor extrapiramidal.",
    descricaoAnatomica:
      "Massa arredondada de substância cinzenta situada lateralmente ao globo pálido (do qual é separado pela lâmina medular lateral) e à cápsula interna, medial à cápsula externa e ao claustro.",
    funcao: [
      "Principal receptor estriatal das aferências da substância negra (via nigroestriatal dopaminérgica) e do córtex motor/pré-motor",
      "Componente-chave do circuito motor dos núcleos da base, modulando a iniciação e amplitude do movimento voluntário",
    ],
    relacoesAnatomicas:
      "Separado do globo pálido pela lâmina medular lateral (juntos formam o núcleo lentiforme); separado do claustro pela cápsula externa; irrigado principalmente por ramos lentículo-estriados da artéria cerebral média.",
    correlacaoClinica:
      "Na doença de Parkinson, a degeneração dopaminérgica da substância negra reduz a estimulação do putame, contribuindo para bradicinesia e rigidez. O putame é um dos sítios mais comuns de hemorragia intracerebral hipertensiva, por ruptura de ramos lentículo-estriados da artéria cerebral média (artérias perfurantes classicamente vulneráveis à hipertensão crônica).",
    doencasRelacionadas: [
      { slug: "doenca-de-parkinson", nome: "Doença de Parkinson" },
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
    ],
    pontosDeProva: [
      "O putame (via artérias lentículo-estriadas, ramos da cerebral média) é a localização mais comum de hemorragia intracerebral hipertensiva.",
      "Putame + globo pálido = núcleo lentiforme; putame + núcleo caudado = corpo estriado — nomenclatura frequentemente cobrada.",
    ],
    fontes: [
      { tema: "Circuito motor dos núcleos da base e doença de Parkinson", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Hemorragia intracerebral hipertensiva", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Putamen)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "globo-palido",
    meshNames: ["Globus_pallidus_L", "Globus_pallidus_R"],
    regiao: "Núcleos da base",
    nomeOficial: "Globus pallidus",
    nomeComum: "Globo pálido (pálido)",
    resumo:
      "Núcleo medial ao putame, dividido em segmentos externo e interno, que constitui a principal via de saída inibitória (GABAérgica) dos núcleos da base para o tálamo.",
    descricaoAnatomica:
      "Situado medialmente ao putame (do qual é separado pela lâmina medular lateral), dividido pela lâmina medular medial em segmento externo (GPe) e segmento interno (GPi); junto ao putame forma o núcleo lentiforme, em forma de cunha com o ápice voltado medialmente em direção à cápsula interna.",
    funcao: [
      "GPi: principal via de saída inibitória do circuito dos núcleos da base, projetando-se para o tálamo (núcleos ventral anterior e ventral lateral) e modulando a atividade motora cortical",
      "GPe: núcleo intermediário do circuito indireto, projetando-se ao núcleo subtalâmico",
    ],
    relacoesAnatomicas:
      "Medial ao putame, lateral à cápsula interna (que o separa do tálamo); recebe aferências GABAérgicas do estriado e projeta-se ao tálamo e ao núcleo subtalâmico.",
    correlacaoClinica:
      "É alvo cirúrgico clássico (palidotomia, estimulação cerebral profunda do GPi) no tratamento da doença de Parkinson refratária, por seu papel central na via de saída motora dos núcleos da base. Necrose bilateral do globo pálido pode ocorrer na intoxicação grave por monóxido de carbono.",
    doencasRelacionadas: [{ slug: "doenca-de-parkinson", nome: "Doença de Parkinson" }],
    pontosDeProva: [
      "O globo pálido interno (GPi) é a principal via de saída inibitória (GABAérgica) dos núcleos da base para o tálamo — alvo de estimulação cerebral profunda no Parkinson avançado.",
      "A intoxicação grave por monóxido de carbono classicamente causa necrose bilateral do globo pálido, por sua alta demanda metabólica e suscetibilidade à hipóxia.",
    ],
    fontes: [
      { tema: "Vias direta e indireta dos núcleos da base", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Estimulação cerebral profunda na doença de Parkinson", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Globus pallidus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },

  // ===== Sistema límbico =====
  {
    slug: "amigdala",
    meshNames: ["Amygdaloid_body_L", "Amygdaloid_body_R"],
    regiao: "Sistema límbico",
    nomeOficial: "Corpus amygdaloideum",
    nomeComum: "Amígdala (corpo amigdaloide)",
    resumo:
      "Complexo nuclear em forma de amêndoa no polo temporal anterior, componente central do sistema límbico, responsável pelo processamento emocional — especialmente medo e resposta de ameaça — e sua ligação com respostas autonômicas e memória emocional.",
    descricaoAnatomica:
      "Situada profundamente no lobo temporal, anterior ao hipocampo e imediatamente à frente do corno temporal do ventrículo lateral, contínua posteriormente com a cauda do núcleo caudado. Composta por múltiplos núcleos (basolateral, corticomedial, central), cada um com conectividade e função distintas.",
    funcao: [
      "Processamento e aprendizado de respostas de medo (condicionamento ao medo) e avaliação do significado emocional de estímulos sensoriais",
      "Núcleo central: integração com respostas autonômicas e neuroendócrinas ao medo/estresse via conexões com hipotálamo e tronco encefálico",
      "Modulação da consolidação de memórias emocionalmente relevantes, em conjunto com o hipocampo",
    ],
    relacoesAnatomicas:
      "Anterior ao hipocampo e ao corno temporal do ventrículo lateral, contínua com a cauda do núcleo caudado; conectada à estria terminal (via de saída principal) e ao hipotálamo.",
    correlacaoClinica:
      "Crises de epilepsia do lobo temporal frequentemente se originam na amígdala/hipocampo (esclerose mesial temporal), manifestando-se com auras autonômicas ou emocionais (medo súbito, sensações epigástricas) antes da generalização. Lesões bilaterais da amígdala (síndrome de Klüver-Bucy, por exemplo, na encefalite herpética) causam placidez comportamental, hiperoralidade e hipersexualidade.",
    doencasRelacionadas: [{ slug: "epilepsia", nome: "Epilepsia" }],
    pontosDeProva: [
      "A síndrome de Klüver-Bucy (lesão bilateral da amígdala, classicamente por encefalite herpética) causa placidez, hiperoralidade e hipersexualidade.",
      "Auras de medo súbito ou sensação epigástrica ascendente são típicas de crises originadas na amígdala/hipocampo mesial temporal.",
    ],
    fontes: [
      { tema: "Amígdala e circuitos do medo", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Epilepsia do lobo temporal e síndrome de Klüver-Bucy", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Corpus amygdaloideum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "hipocampo",
    meshNames: ["Hippocampus_L", "Hippocampus_R"],
    regiao: "Sistema límbico",
    nomeOficial: "Hippocampus",
    nomeComum: "Hipocampo",
    resumo:
      "Estrutura curva no assoalho do corno temporal do ventrículo lateral, essencial para a consolidação de memórias declarativas (fatos e eventos) de curto para longo prazo, e um dos locais mais vulneráveis à hipóxia e à epileptogênese no encéfalo.",
    descricaoAnatomica:
      "Formação alongada e enrolada dentro do lobo temporal medial, organizada em camadas citoarquitetônicas (formação hipocampal: giro denteado, corno de Amon/hipocampo propriamente dito, subículo), conectada ao restante do sistema límbico principalmente pelo fórnix, sua via de saída principal.",
    funcao: [
      "Consolidação de memórias declarativas (episódicas e semânticas) de curto para longo prazo",
      "Navegação espacial e memória espacial (\"células de lugar\")",
    ],
    relacoesAnatomicas:
      "Situado no assoalho do corno temporal do ventrículo lateral; conecta-se ao hipotálamo e aos corpos mamilares através do fórnix (formando o circuito de Papez, relevante para a memória).",
    correlacaoClinica:
      "A esclerose mesial temporal (atrofia e gliose do hipocampo) é a causa estrutural mais comum de epilepsia do lobo temporal refratária a medicamentos. Lesão bilateral do hipocampo (por exemplo, cirurgia bilateral, encefalite herpética, hipóxia global grave) causa amnésia anterógrada grave com preservação da memória de longo prazo antiga e da inteligência geral — o clássico caso do paciente H.M. A doença de Alzheimer atinge precocemente o hipocampo, explicando o comprometimento inicial da memória recente.",
    doencasRelacionadas: [
      { slug: "epilepsia", nome: "Epilepsia" },
      { slug: "doenca-de-alzheimer", nome: "Doença de Alzheimer" },
    ],
    pontosDeProva: [
      "A esclerose mesial temporal (atrofia hipocampal) é a causa estrutural mais comum de epilepsia do lobo temporal fármaco-resistente — candidata a lobectomia temporal.",
      "O caso H.M. (lobectomia temporal bilateral) demonstrou que o hipocampo é necessário para formar NOVAS memórias declarativas, mas não para reter memórias antigas nem para memória procedural.",
      "O hipocampo é uma das primeiras estruturas atingidas na doença de Alzheimer, explicando a perda precoce de memória recente como sintoma cardinal.",
    ],
    fontes: [
      { tema: "Hipocampo, memória e o caso H.M.", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Esclerose mesial temporal e epilepsia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Hippocampus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "estria-terminal",
    meshNames: ["Stria_terminalis_L", "Stria_terminalis_R"],
    regiao: "Sistema límbico",
    nomeOficial: "Stria terminalis",
    nomeComum: "Estria terminal",
    resumo:
      "Feixe curvo de fibras que constitui a principal via de saída da amígdala, acompanhando todo o trajeto do núcleo caudado até se conectar ao hipotálamo e à área septal.",
    descricaoAnatomica:
      "Trajeto em arco desde a amígdala, ao longo da face medial do corpo do núcleo caudado, no sulco entre caudado e tálamo, terminando no hipotálamo (região pré-óptica/núcleo hipotalâmico ventromedial) e na área septal.",
    funcao: [
      "Principal via eferente da amígdala para o hipotálamo e área septal, mediando a expressão neuroendócrina e autonômica das respostas emocionais processadas pela amígdala",
    ],
    relacoesAnatomicas:
      "Acompanha o núcleo caudado ao longo de todo o seu trajeto (no sulco caudado-talâmico), servindo como marco anatômico e cirúrgico para localizar a interface entre caudado e tálamo.",
    correlacaoClinica:
      "O núcleo do leito da estria terminal, no seu trajeto, é uma estrutura de crescente interesse em neurociência translacional por seu papel na ansiedade sustentada (diferente do medo agudo mediado pela amígdala central), sendo alvo de pesquisa em transtornos de ansiedade.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A estria terminal é a principal via de saída da amígdala, seguindo em arco junto ao núcleo caudado até o hipotálamo — útil como marco de neuroimagem/neurocirurgia.",
      "O núcleo do leito da estria terminal é implicado na ansiedade sustentada/antecipatória, distinta do medo agudo mediado pela amígdala central.",
    ],
    fontes: [
      { tema: "Vias eferentes da amígdala", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Stria terminalis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleos-septais",
    meshNames: ["Septal_nuclei"],
    regiao: "Sistema límbico",
    nomeOficial: "Nuclei septales",
    nomeComum: "Núcleos septais",
    resumo:
      "Pequeno grupo de núcleos na linha média, na base do septo pelúcido, que funciona como estação de retransmissão central do circuito límbico, conectando hipocampo, hipotálamo e núcleos do tronco encefálico envolvidos em recompensa.",
    descricaoAnatomica:
      "Situados na parede medial do hemisfério cerebral, na base do septo pelúcido, anteriormente à comissura anterior e ao fórnix, recebendo e enviando fibras através da estria medular do tálamo e do feixe prosencefálico medial.",
    funcao: [
      "Estação de retransmissão dentro do circuito límbico, integrando hipocampo (via fórnix), hipotálamo e núcleos monoaminérgicos do tronco encefálico",
      "Papel histórico em modelos animais de \"centros de recompensa\" (autoestimulação septal)",
    ],
    relacoesAnatomicas:
      "Situados na base do septo pelúcido, recebendo fibras do fórnix (do hipocampo) e enviando eferências pela estria medular do tálamo em direção à habênula.",
    correlacaoClinica:
      "Historicamente identificados nos experimentos clássicos de autoestimulação elétrica de Olds e Milner como parte dos circuitos de recompensa cerebral, relevantes para a compreensão neurobiológica de dependências.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Os núcleos septais foram o sítio clássico dos experimentos de autoestimulação de Olds e Milner, fundamentando o conceito de circuito de recompensa cerebral.",
      "Recebem aferência hipocampal via fórnix e projetam-se à habênula pela estria medular do tálamo — elo entre memória límbica e circuitos monoaminérgicos.",
    ],
    fontes: [
      { tema: "Circuitos de recompensa e núcleos septais", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Nuclei septales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "formice",
    meshNames: ["Fornix_L", "Fornix_R"],
    regiao: "Sistema límbico",
    nomeOficial: "Fornix",
    nomeComum: "Fórnix",
    resumo:
      "Principal feixe de fibras de saída do hipocampo, em forma de arco, conectando-o aos corpos mamilares do hipotálamo e formando o elo central do circuito de Papez, base anatômica da memória declarativa.",
    descricaoAnatomica:
      "Origina-se no subículo/hipocampo como fímbria, torna-se o pilar posterior do fórnix, curva-se sob o esplênio do corpo caloso, forma o corpo do fórnix (unido bilateralmente sob o septo pelúcido) e divide-se anteriormente nas colunas do fórnix, que descem para os corpos mamilares.",
    funcao: [
      "Via eferente principal do hipocampo, transmitindo informação para os corpos mamilares e, indiretamente, para o núcleo anterior do tálamo — elo estrutural central do circuito de Papez",
    ],
    relacoesAnatomicas:
      "Curva-se sob o esplênio do corpo caloso; seu corpo situa-se logo abaixo do septo pelúcido e acima do terceiro ventrículo; as colunas terminam nos corpos mamilares.",
    correlacaoClinica:
      "Lesão do fórnix (por exemplo, em cirurgias que envolvem a região do terceiro ventrículo ou tumores colhoides) pode causar amnésia anterógrada, por interrupção do circuito de Papez — mecanismo compartilhado com a amnésia da síndrome de Wernicke-Korsakoff, em que a lesão predomina nos corpos mamilares e núcleos talâmicos, mas compromete o mesmo circuito funcional.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O fórnix é o elo anatômico central do circuito de Papez (hipocampo → fórnix → corpos mamilares → trato mamilotalâmico → núcleo anterior do tálamo → giro do cíngulo → hipocampo), substrato da memória declarativa.",
      "Lesões do fórnix ou dos corpos mamilares (por exemplo, na síndrome de Wernicke-Korsakoff, por deficiência de tiamina) causam amnésia anterógrada por interrupção deste mesmo circuito.",
    ],
    fontes: [
      { tema: "Circuito de Papez e memória", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Síndrome de Wernicke-Korsakoff", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Fornix)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },

  // ===== Diencéfalo =====
  {
    slug: "talamo",
    meshNames: ["Thalamus_L", "Thalamus_R"],
    regiao: "Diencéfalo",
    nomeOficial: "Thalamus",
    nomeComum: "Tálamo",
    resumo:
      "Par de grandes massas ovoides de substância cinzenta que constituem a principal estação de retransmissão de quase toda a informação sensorial (exceto olfato) a caminho do córtex cerebral, além de participar de circuitos motores e do estado de alerta.",
    descricaoAnatomica:
      "Situado nas paredes laterais do terceiro ventrículo, frequentemente unido na linha média pela adesão intertalâmica, organizado em múltiplos núcleos funcionalmente distintos (ventral posterior — sensibilidade somática geral; geniculado lateral — visão; geniculado medial — audição; ventral anterior/lateral — motor; anterior — circuito límbico, entre outros).",
    funcao: [
      "Retransmissão obrigatória de praticamente todas as vias sensoriais ascendentes (exceto olfação) para as áreas corticais correspondentes",
      "Retransmissão de aferências dos núcleos da base e cerebelo para o córtex motor",
      "Participação na regulação do estado de consciência e do ciclo sono-vigília (núcleos intralaminares e de projeção difusa)",
    ],
    relacoesAnatomicas:
      "Forma a maior parte das paredes laterais do terceiro ventrículo; separado do núcleo lentiforme pela cápsula interna; recebe o trato espinotalâmico, o lemnisco medial e as radiações geniculadas.",
    correlacaoClinica:
      "Infartos talâmicos (território das artérias tálamo-perfurantes/tálamo-geniculadas, ramos da cerebral posterior) podem causar a síndrome talâmica de Dejerine-Roussy: perda sensitiva contralateral seguida de dor central intensa e desproporcional (dor talâmica). O tálamo é fundamental na fisiopatologia do estado de consciência — lesões bilaterais extensas causam coma.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "A síndrome talâmica de Dejerine-Roussy (infarto talâmico) causa perda sensitiva contralateral seguida de dor central intensa e refratária (dor talâmica) — cobrada como exemplo clássico de dor neuropática central.",
      "O tálamo é a estação obrigatória de retransmissão de TODAS as vias sensoriais que chegam ao córtex, exceto a via olfatória.",
    ],
    fontes: [
      { tema: "Núcleos talâmicos e vias sensoriais", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Síndrome talâmica de Dejerine-Roussy", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Thalamus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "hipotalamo",
    meshNames: ["Hypothalamus"],
    regiao: "Diencéfalo",
    nomeOficial: "Hypothalamus",
    nomeComum: "Hipotálamo",
    resumo:
      "Pequena porém vital região na base do diencéfalo, o principal centro integrador do sistema nervoso autônomo e do sistema endócrino, regulando homeostase (temperatura, fome, sede, ciclo sono-vigília) através do controle da hipófise.",
    descricaoAnatomica:
      "Forma o assoalho e parte da parede inferior do terceiro ventrículo, estendendo-se do quiasma óptico (anteriormente) aos corpos mamilares (posteriormente), conectado à hipófise pela haste hipofisária (infundíbulo). Organizado em múltiplos núcleos com funções específicas (supraóptico e paraventricular — síntese de ADH/ocitocina; ventromedial — saciedade; lateral — fome; supraquiasmático — ritmo circadiano; pré-óptico — termorregulação).",
    funcao: [
      "Controle neuroendócrino da adeno-hipófise via hormônios liberadores/inibidores transportados pelo sistema porta-hipofisário",
      "Síntese de ADH e ocitocina (núcleos supraóptico e paraventricular), transportados axonalmente até a neuro-hipófise",
      "Regulação da temperatura corporal, apetite/saciedade, sede, ritmo circadiano (via núcleo supraquiasmático) e integração das respostas autonômicas simpáticas/parassimpáticas",
    ],
    relacoesAnatomicas:
      "Forma o assoalho do terceiro ventrículo; conecta-se à hipófise pela haste hipofisária; recebe aferências límbicas via fórnix (corpos mamilares) e projeta-se ao tronco encefálico via feixe prosencefálico medial.",
    correlacaoClinica:
      "Lesões hipotalâmicas (tumores, craniofaringioma, trauma, neurocirurgia) podem causar diabetes insípido central (deficiência de ADH), disfunções endócrinas múltiplas (por interrupção do eixo hipotálamo-hipofisário), distúrbios de termorregulação e obesidade hipotalâmica (lesão do núcleo ventromedial).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O núcleo supraquiasmático do hipotálamo é o \"marca-passo\" central do ritmo circadiano, recebendo aferência retiniana direta para sincronização com o ciclo claro-escuro.",
      "Lesão do núcleo ventromedial do hipotálamo classicamente causa hiperfagia e obesidade (perda do sinal de saciedade); lesão do núcleo lateral causa afagia.",
      "O hipotálamo é a origem neural real do ADH e da ocitocina — a neuro-hipófise apenas armazena e libera esses hormônios.",
    ],
    fontes: [
      { tema: "Núcleos hipotalâmicos e homeostase", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Eixo hipotálamo-hipofisário e suas disfunções", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Hypothalamus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "corpo-mamilar",
    meshNames: ["Mamillary_body_L", "Mamillary_body_R"],
    regiao: "Diencéfalo",
    nomeOficial: "Corpus mamillare",
    nomeComum: "Corpo mamilar",
    resumo:
      "Par de pequenas eminências arredondadas na face posterior do hipotálamo, componente-chave do circuito de Papez, recebendo o fórnix e projetando-se ao tálamo anterior — estrutura classicamente lesada na síndrome de Wernicke-Korsakoff.",
    descricaoAnatomica:
      "Duas pequenas protuberâncias hemisféricas na superfície inferior do hipotálamo, posteriores ao infundíbulo e anteriores à substância perfurada posterior, recebendo as colunas do fórnix e dando origem ao trato mamilotalâmico (para o núcleo anterior do tálamo) e ao trato mamilotegmentar (para o tegmento mesencefálico).",
    funcao: [
      "Estação de retransmissão do circuito de Papez, recebendo aferência hipocampal via fórnix e retransmitindo ao núcleo anterior do tálamo pelo trato mamilotalâmico — circuito essencial à memória declarativa",
    ],
    relacoesAnatomicas:
      "Situado no assoalho posterior do hipotálamo, entre o infundíbulo (anterior) e a substância perfurada posterior (posterior); recebe as colunas do fórnix.",
    correlacaoClinica:
      "A deficiência de tiamina (vitamina B1) — classicamente em alcoolismo crônico, mas também em desnutrição grave e hiperêmese — causa necrose hemorrágica seletiva dos corpos mamilares e núcleos talâmicos periventriculares (encefalopatia de Wernicke: confusão, ataxia, oftalmoplegia), evoluindo, se não tratada, para a síndrome de Korsakoff (amnésia anterógrada grave e confabulação) por lesão irreversível dessas mesmas estruturas.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A tríade da encefalopatia de Wernicke é confusão + ataxia + oftalmoplegia, por lesão hemorrágica dos corpos mamilares e núcleos talâmicos — deficiência de tiamina, reposição IMEDIATA antes de glicose em pacientes de risco.",
      "A síndrome de Korsakoff (amnésia anterógrada + confabulação) é a sequela crônica e frequentemente irreversível da encefalopatia de Wernicke não tratada.",
      "Os corpos mamilares são o elo do circuito de Papez entre o fórnix (aferência hipocampal) e o trato mamilotalâmico (eferência ao tálamo anterior).",
    ],
    fontes: [
      { tema: "Síndrome de Wernicke-Korsakoff", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Circuito de Papez", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Corpus mamillare)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "corpo-geniculado-lateral",
    meshNames: ["Lateral_geniculate_body_L", "Lateral_geniculate_body_R"],
    regiao: "Diencéfalo",
    nomeOficial: "Corpus geniculatum laterale",
    nomeComum: "Corpo geniculado lateral",
    resumo:
      "Núcleo talâmico especializado que recebe o trato óptico e retransmite a informação visual, através das radiações ópticas, ao córtex visual primário — a principal estação subcortical da via visual consciente.",
    descricaoAnatomica:
      "Pequena elevação na face posterolateral do tálamo, organizada em seis camadas laminares alternando aferências do olho ipsilateral e contralateral (camadas magnocelulares e parvocelulares), recebendo diretamente o trato óptico.",
    funcao: [
      "Estação de retransmissão obrigatória da via visual consciente, entre a retina/trato óptico e o córtex visual primário (área 17, via radiações ópticas)",
    ],
    relacoesAnatomicas:
      "Recebe o trato óptico diretamente; envia as radiações ópticas (alça de Meyer no seu componente inferior, atravessando o lobo temporal) ao córtex occipital.",
    correlacaoClinica:
      "Lesões do trato óptico ou do corpo geniculado lateral causam hemianopsia homônima contralateral completa (diferente das lesões quiasmáticas, que causam hemianopsia bitemporal). Lesões da alça de Meyer (radiação óptica no lobo temporal) causam quadrantanopsia superior homônima contralateral (\"pie in the sky\").",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Lesão do corpo geniculado lateral ou do trato óptico causa hemianopsia homônima contralateral COMPLETA — diferencia-se da hemianopsia bitemporal do quiasma óptico.",
      "A alça de Meyer, parte das radiações ópticas que cruza o lobo temporal, quando lesada causa quadrantanopsia superior homônima contralateral.",
    ],
    fontes: [
      { tema: "Via visual e lesões do campo visual", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Corpus geniculatum laterale)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "corpo-geniculado-medial",
    meshNames: ["Medial_geniculate_body_L", "Medial_geniculate_body_R"],
    regiao: "Diencéfalo",
    nomeOficial: "Corpus geniculatum mediale",
    nomeComum: "Corpo geniculado medial",
    resumo:
      "Núcleo talâmico que recebe a via auditiva ascendente através do braço do colículo inferior e a retransmite, pela radiação auditiva, ao córtex auditivo primário — estação subcortical final da via auditiva consciente.",
    descricaoAnatomica:
      "Pequena elevação na face posterior do tálamo, inferomedial ao corpo geniculado lateral, recebendo aferência do colículo inferior do mesencéfalo através do braço do colículo inferior.",
    funcao: [
      "Estação de retransmissão obrigatória da via auditiva consciente, entre o colículo inferior e o córtex auditivo primário (giro temporal transverso de Heschl)",
    ],
    relacoesAnatomicas:
      "Situado inferomedial ao corpo geniculado lateral; recebe o braço do colículo inferior; projeta-se via radiação auditiva ao córtex temporal.",
    correlacaoClinica:
      "Por a via auditiva ser extensamente bilateralizada em múltiplos níveis do tronco encefálico, lesões unilaterais acima do núcleo coclear (incluindo o corpo geniculado medial) raramente causam surdez completa unilateral — diferentemente de lesões do nervo coclear ou do próprio núcleo coclear.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Diferente da via visual, a via auditiva é bilateralizada em múltiplos níveis — lesões centrais unilaterais (incluindo o corpo geniculado medial) raramente causam surdez unilateral completa.",
      "O corpo geniculado medial recebe a via auditiva do colículo inferior e a retransmite ao córtex auditivo primário (giro de Heschl) via radiação auditiva.",
    ],
    fontes: [
      { tema: "Via auditiva central", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Corpus geniculatum mediale)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "habenula",
    meshNames: ["Habenula"],
    regiao: "Diencéfalo",
    nomeOficial: "Habenula",
    nomeComum: "Habênula",
    resumo:
      "Pequeno núcleo do epitálamo, elo entre o sistema límbico e os núcleos monoaminérgicos do tronco encefálico, com papel crescentemente reconhecido na sinalização de recompensa negativa e nos estados depressivos.",
    descricaoAnatomica:
      "Situada na face posterior do tálamo, próxima ao trígono habenular, recebendo a estria medular do tálamo (que traz aferências dos núcleos septais) e conectando-se ao tronco encefálico através do fascículo retroflexo (de Meynert).",
    funcao: [
      "Retransmissão de aferências límbicas (via estria medular do tálamo) para núcleos monoaminérgicos do tronco encefálico (substância negra, núcleos da rafe), modulando dopamina e serotonina",
      "Papel na sinalização de erro de predição negativa (\"anti-recompensa\") e na fisiopatologia proposta de estados depressivos",
    ],
    relacoesAnatomicas:
      "Situada próxima à glândula pineal, formando com ela e a comissura posterior o complexo epitalâmico; conecta-se ao mesencéfalo via fascículo retroflexo.",
    correlacaoClinica:
      "A habênula lateral tem sido alvo crescente de pesquisa em neuropsiquiatria por sua hiperatividade em modelos de depressão resistente a tratamento, sendo investigada como potencial alvo de estimulação cerebral profunda nessa condição.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A habênula conecta o sistema límbico (via estria medular do tálamo) aos núcleos monoaminérgicos do tronco encefálico (substância negra, núcleos da rafe) através do fascículo retroflexo.",
      "A hiperatividade da habênula lateral é implicada na fisiopatologia da depressão resistente a tratamento, tema de pesquisa translacional atual.",
    ],
    fontes: [
      { tema: "Epitálamo e habênula", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Habenula)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "quiasma-optico",
    meshNames: ["Optic_chiasm_L", "Optic_chiasm_R"],
    regiao: "Diencéfalo",
    nomeOficial: "Chiasma opticum",
    nomeComum: "Quiasma óptico",
    resumo:
      "Ponto de cruzamento parcial das fibras do nervo óptico, situado logo abaixo do hipotálamo e imediatamente acima da hipófise — cruzamento das fibras nasais de cada retina, essencial para a visão binocular e um marco clínico central em lesões da via visual.",
    descricaoAnatomica:
      "Situado no assoalho do terceiro ventrículo (formando o recesso óptico), imediatamente superior à hipófise, ponto onde as fibras da metade nasal de cada retina cruzam para o trato óptico contralateral, enquanto as fibras temporais permanecem ipsilaterais.",
    funcao: [
      "Cruzamento seletivo das fibras retinianas nasais, permitindo que a informação de cada hemicampo visual seja processada no hemisfério cerebral contralateral",
    ],
    relacoesAnatomicas:
      "Situado imediatamente acima da hipófise (relação anatômica central na semiologia dos tumores hipofisários) e abaixo do assoalho do terceiro ventrículo (recesso óptico); continua-se anteriormente com os nervos ópticos e posteriormente com os tratos ópticos.",
    correlacaoClinica:
      "A compressão do quiasma óptico por adenoma hipofisário em expansão (de baixo para cima) causa classicamente hemianopsia bitemporal, por lesão seletiva das fibras nasais cruzadas (que carregam informação dos campos visuais temporais de cada olho). Craniofaringiomas (compressão de cima para baixo) também podem causar esse padrão.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Hemianopsia bitemporal = lesão do quiasma óptico — classicamente por adenoma hipofisário comprimindo de baixo para cima as fibras nasais cruzadas.",
      "As fibras NASAIS de cada retina cruzam no quiasma; as fibras TEMPORAIS permanecem ipsilaterais — a base anatômica de toda a semiologia de campos visuais.",
    ],
    fontes: [
      { tema: "Via visual e semiologia de campos visuais", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Adenomas hipofisários e efeito de massa no quiasma", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Chiasma opticum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "trato-optico",
    meshNames: ["Optic_tract_L", "Optic_tract_R"],
    regiao: "Diencéfalo",
    nomeOficial: "Tractus opticus",
    nomeComum: "Trato óptico",
    resumo:
      "Continuação da via visual após o quiasma óptico, transportando fibras já reorganizadas por hemicampo visual (não mais por olho) até o corpo geniculado lateral do tálamo.",
    descricaoAnatomica:
      "Trajeto curto entre o quiasma óptico e o corpo geniculado lateral, contornando os pedúnculos cerebrais lateralmente; cada trato contém fibras nasais cruzadas do olho contralateral e fibras temporais não cruzadas do olho ipsilateral, representando um hemicampo visual completo do lado oposto.",
    funcao: [
      "Transmissão da informação visual já organizada por hemicampo (pós-quiasmática) até o corpo geniculado lateral (via consciente) e o colículo superior/área pré-tectal (reflexos visuais)",
    ],
    relacoesAnatomicas:
      "Contorna lateralmente o pedúnculo cerebral do mesencéfalo, terminando principalmente no corpo geniculado lateral do tálamo, com um ramo menor ao colículo superior e área pré-tectal para reflexos.",
    correlacaoClinica:
      "Diferentemente da lesão pré-quiasmática (perda monocular) ou quiasmática (hemianopsia bitemporal), a lesão do trato óptico causa hemianopsia homônima contralateral completa, já que a partir daí toda a via representa um único hemicampo visual.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "A partir do trato óptico (pós-quiasmático), qualquer lesão ao longo da via visual (trato, geniculado lateral, radiações, córtex occipital) causa hemianopsia homônima CONTRALATERAL — distingue-se de lesões pré-quiasmáticas e quiasmáticas.",
    ],
    fontes: [
      { tema: "Organização da via visual pós-quiasmática", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Tractus opticus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "estria-medular-do-talamo",
    meshNames: ["Stria_medullaris_thalami_L", "Stria_medullaris_thalami_R"],
    regiao: "Diencéfalo",
    nomeOficial: "Stria medullaris thalami",
    nomeComum: "Estria medular do tálamo",
    resumo:
      "Feixe de fibras na face superomedial do tálamo que conecta os núcleos septais e áreas límbicas anteriores à habênula, um dos principais elos entre o prosencéfalo límbico e o sistema monoaminérgico do tronco encefálico.",
    descricaoAnatomica:
      "Trajeto ao longo da margem dorsomedial do tálamo, do polo anterior até o trígono habenular posteriormente, onde se conecta à habênula.",
    funcao: [
      "Principal via aferente da habênula, transportando informação límbica (dos núcleos septais e área pré-óptica) até essa estrutura de retransmissão epitalâmica",
    ],
    relacoesAnatomicas:
      "Marca o limite dorsomedial entre o tálamo e o teto do terceiro ventrículo; termina no trígono habenular, junto à habênula.",
    correlacaoClinica:
      "Sua relevância clínica direta é limitada, mas seu papel como via anatômica entre o prosencéfalo límbico e a habênula a torna estrutural para entender os circuitos propostos na fisiopatologia da depressão e de estados de recompensa/aversão.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A estria medular do tálamo é a principal via de entrada de informação límbica (núcleos septais) para a habênula — elo entre sistema límbico anterior e núcleos monoaminérgicos do tronco.",
    ],
    fontes: [
      { tema: "Vias epitalâmicas", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Stria medullaris thalami)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },

  // ===== Substância branca e comissuras =====
  {
    slug: "corpo-caloso",
    meshNames: ["Corpus_callosum"],
    regiao: "Substância branca e comissuras",
    nomeOficial: "Corpus callosum",
    nomeComum: "Corpo caloso",
    resumo:
      "Maior comissura interhemisférica do encéfalo, conectando áreas corticais homólogas dos dois hemisférios cerebrais e permitindo sua integração funcional.",
    descricaoAnatomica:
      "Grande feixe de fibras comissurais em forma de C invertido, dividido em joelho (genu, anterior, curva-se para o lobo frontal como fórceps menor), corpo (tronco), esplênio (posterior, curva-se para o lobo occipital como fórceps maior) e rostro (pequena extensão inferior do joelho). Forma o teto dos cornos frontais e o teto/parede medial dos átrios dos ventrículos laterais.",
    funcao: [
      "Integração interhemisférica de praticamente todas as áreas corticais homólogas, exceto a maior parte do lobo temporal medial (conectado pela comissura anterior)",
    ],
    relacoesAnatomicas:
      "Forma o teto dos ventrículos laterais; o joelho e o esplênio são marcos de imagem frequentemente usados para orientação em cortes axiais/sagitais do encéfalo.",
    correlacaoClinica:
      "A agenesia do corpo caloso é uma malformação congênita que pode ser assintomática ou associada a déficits cognitivos variáveis, frequentemente identificada incidentalmente em imagem (ventrículos laterais em \"chifre de touro\"/\"asas de morcego\"). A calosotomia (secção cirúrgica, total ou parcial) é usada no tratamento de epilepsias generalizadas refratárias e graves para impedir a propagação interhemisférica das crises, podendo causar a síndrome de desconexão (\"split-brain\").",
    doencasRelacionadas: [{ slug: "epilepsia", nome: "Epilepsia" }],
    pontosDeProva: [
      "A agenesia do corpo caloso produz o sinal radiológico clássico de ventrículos laterais em \"chifre de touro\" (colpocefalia), com afastamento e alongamento dos cornos frontais/occipitais.",
      "A calosotomia é uma opção cirúrgica paliativa (não curativa) para epilepsia generalizada refratária grave, reduzindo quedas por crises atônicas ao impedir a propagação interhemisférica.",
    ],
    fontes: [
      { tema: "Anatomia do corpo caloso e agenesia", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Calosotomia e epilepsia refratária", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Corpus callosum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "comissura-anterior",
    meshNames: ["Anterior_commissure"],
    regiao: "Substância branca e comissuras",
    nomeOficial: "Commissura anterior",
    nomeComum: "Comissura anterior",
    resumo:
      "Pequeno feixe comissural anterior ao fórnix, que conecta os dois lobos temporais (incluindo estruturas olfatórias e amígdalas) — uma via alternativa ao corpo caloso, preservada mesmo na sua ausência total.",
    descricaoAnatomica:
      "Feixe curto em forma de X situado na lâmina terminal, anterior às colunas do fórnix, conectando os bulbos olfatórios/áreas olfatórias e porções anteriores dos lobos temporais (incluindo as amígdalas) dos dois hemisférios.",
    funcao: [
      "Comissura interhemisférica de estruturas olfatórias e do lobo temporal anterior (incluindo a amígdala), independente do corpo caloso",
    ],
    relacoesAnatomicas:
      "Situada na lâmina terminal, imediatamente anterior às colunas do fórnix; frequentemente preservada e até hipertrofiada em casos de agenesia do corpo caloso, servindo de via compensatória parcial.",
    correlacaoClinica:
      "Por conectar bilateralmente as amígdalas e estruturas temporais mesiais, é considerada uma possível via de generalização secundária em certas epilepsias do lobo temporal, e um alvo de interesse (embora menos estudado que o corpo caloso) em cirurgias de desconexão.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A comissura anterior conecta estruturas olfatórias e os lobos temporais anteriores (incluindo amígdalas) — permanece funcional mesmo na agenesia completa do corpo caloso.",
    ],
    fontes: [
      { tema: "Comissuras interhemisféricas", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Commissura anterior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "comissura-posterior",
    meshNames: ["Posterior_commissure"],
    regiao: "Substância branca e comissuras",
    nomeOficial: "Commissura posterior",
    nomeComum: "Comissura posterior",
    resumo:
      "Feixe comissural na junção entre diencéfalo e mesencéfalo, envolvido no reflexo fotomotor consensual e em outras funções relacionadas ao controle da motricidade ocular vertical.",
    descricaoAnatomica:
      "Situada na transição entre o teto do terceiro ventrículo e o mesencéfalo, imediatamente abaixo da glândula pineal, na entrada do aqueduto do mesencéfalo.",
    funcao: [
      "Via de fibras que contribui para a via reflexa pupilar consensual (contralateral) e para a coordenação do olhar vertical, integrando aferências pré-tectais",
    ],
    relacoesAnatomicas:
      "Situada imediatamente abaixo da glândula pineal, na entrada do aqueduto do mesencéfalo — pode ser comprimida por tumores pineais.",
    correlacaoClinica:
      "A compressão da comissura posterior e da área pré-tectal adjacente (por exemplo, por pinealoma ou hidrocefalia com dilatação do recesso suprapineal) causa a síndrome de Parinaud: paralisia do olhar conjugado para cima, pupilas com dissociação luz-perto e nistagmo de convergência-retração.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A síndrome de Parinaud (paralisia do olhar vertical para cima) resulta de lesão da região da comissura posterior/área pré-tectal, classicamente por tumor pineal ou hidrocefalia com dilatação do recesso suprapineal.",
    ],
    fontes: [
      { tema: "Síndrome de Parinaud e área pré-tectal", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Commissura posterior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "comissura-do-hipocampo",
    meshNames: ["Hippocampal_commissure"],
    regiao: "Substância branca e comissuras",
    nomeOficial: "Commissura hippocampi (Commissura fornicis)",
    nomeComum: "Comissura do hipocampo (comissura do fórnix)",
    resumo:
      "Fina lâmina de fibras transversais entre os dois pilares posteriores do fórnix, logo abaixo do esplênio do corpo caloso, conectando os dois hipocampos.",
    descricaoAnatomica:
      "Situada na face inferior do esplênio do corpo caloso, unindo transversalmente os dois pilares (crura) do fórnix antes de estes formarem o corpo do fórnix.",
    funcao: [
      "Comunicação interhemisférica direta entre os dois hipocampos, complementar à via do fórnix",
    ],
    relacoesAnatomicas:
      "Situada entre os pilares posteriores do fórnix, imediatamente abaixo do esplênio do corpo caloso.",
    correlacaoClinica:
      "Estrutura de relevância clínica direta limitada, mas anatomicamente relevante na compreensão de cirurgias e lesões que envolvem a região do esplênio/fórnix posterior, onde pode ser inadvertidamente seccionada.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A comissura do hipocampo (comissura do fórnix) conecta diretamente os dois hipocampos, situando-se sob o esplênio do corpo caloso, entre os pilares posteriores do fórnix.",
    ],
    fontes: [
      { tema: "Anatomia do fórnix e suas comissuras", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Commissura fornicis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "substancia-branca-do-telencefalo",
    meshNames: ["White_matter_of_telencephalon_L", "White_matter_of_telencephalon_R"],
    regiao: "Substância branca e comissuras",
    nomeOficial: "Substantia alba telencephali",
    nomeComum: "Substância branca do telencéfalo",
    resumo:
      "Massa central de axônios mielinizados de cada hemisfério cerebral, contendo as fibras de associação (intra-hemisféricas), comissurais (interhemisféricas) e de projeção (para/do tronco encefálico e medula) que conectam todo o córtex cerebral entre si e com o restante do sistema nervoso.",
    descricaoAnatomica:
      "Preenche o núcleo central de cada hemisfério, profundamente ao córtex e superficialmente aos núcleos da base e tálamo, atravessada pela cápsula interna (principal via de fibras de projeção) e contendo os principais fascículos de associação (longitudinal superior/arqueado, longitudinal inferior, uncinado, fronto-occipital).",
    funcao: [
      "Fibras de associação: conectam áreas corticais dentro do mesmo hemisfério (por exemplo, fascículo arqueado, ligando áreas de linguagem frontais e temporais)",
      "Fibras comissurais: conectam os dois hemisférios (corpo caloso, comissura anterior)",
      "Fibras de projeção: conectam o córtex a estruturas subcorticais, tronco encefálico e medula espinal (por exemplo, trato corticoespinal, via cápsula interna)",
    ],
    relacoesAnatomicas:
      "Contém a cápsula interna, situada entre o núcleo lentiforme (lateralmente) e o tálamo/núcleo caudado (medialmente) — via de maior concentração de fibras motoras e sensitivas do encéfalo.",
    correlacaoClinica:
      "Pequenos infartos lacunares na cápsula interna (por doença de pequenos vasos hipertensiva) podem causar déficits motores ou sensitivos puros e extensos (por exemplo, hemiparesia completa contralateral), desproporcionais ao tamanho diminuto da lesão, pela alta densidade de fibras compactadas nessa via estreita. Lesão do fascículo arqueado causa afasia de condução (repetição prejudicada com fluência e compreensão relativamente preservadas).",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Um infarto lacunar pequeno na cápsula interna pode causar hemiparesia motora pura extensa e completa — a alta densidade de fibras compactadas nessa via estreita explica o déficit desproporcional ao tamanho da lesão.",
      "A afasia de condução (repetição prejudicada, fluência e compreensão preservadas) resulta de lesão do fascículo arqueado, fibra de associação que liga a área de Wernicke à área de Broca.",
    ],
    fontes: [
      { tema: "Fibras de associação, comissurais e de projeção", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "AVC lacunar e síndromes da cápsula interna", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura anatômica geral", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "septo-pelucido",
    meshNames: ["Septum_pellucidum"],
    regiao: "Substância branca e comissuras",
    nomeOficial: "Septum pellucidum",
    nomeComum: "Septo pelúcido",
    resumo:
      "Fina lâmina dupla de tecido nervoso na linha média, entre o corpo caloso e o fórnix, separando os cornos frontais dos dois ventrículos laterais.",
    descricaoAnatomica:
      "Formado por duas lâminas delgadas e translúcidas, com uma cavidade potencial entre elas (cavum do septo pelúcido, mais frequentemente visível em fetos e recém-nascidos, geralmente fusionando-se após o nascimento), estendendo-se do corpo caloso (superiormente) ao fórnix (inferiormente).",
    funcao: [
      "Estrutura de sustentação na linha média, separando os cornos frontais e corpos dos ventrículos laterais",
    ],
    relacoesAnatomicas:
      "Situado entre o corpo caloso (teto) e o corpo do fórnix (assoalho), formando a parede medial de cada corno frontal do ventrículo lateral.",
    correlacaoClinica:
      "A persistência do cavum do septo pelúcido além da infância é geralmente uma variante benigna e incidental, mas tem sido estudada como possível achado associado a certas condições neuropsiquiátricas do neurodesenvolvimento; sua ausência total pode ocorrer em malformações congênitas como a displasia septo-óptica.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O cavum do septo pelúcido é um achado normal e frequente em recém-nascidos/fetos, geralmente fechando-se após o nascimento — sua persistência isolada no adulto é habitualmente incidental e benigna.",
      "A ausência do septo pelúcido é um dos achados da displasia septo-óptica, associada a hipoplasia do nervo óptico e disfunção hipofisária.",
    ],
    fontes: [
      { tema: "Anatomia do septo pelúcido e cavum septi pellucidi", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Displasia septo-óptica", fonte: "Nelson Textbook of Pediatrics, 21ª ed." },
      { tema: "Nomenclatura oficial (Septum pellucidum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
