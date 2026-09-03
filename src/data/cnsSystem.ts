import type { EstruturaEncefalica } from "./types";

// Modelo 3D: coleção "Central nervous system" do atlas Z-Anatomy (CC BY-SA 4.0,
// baseado em BodyParts3D/DBCLS). Parte 1 do sistema nervoso central: sistema
// ventricular, núcleos da base, sistema límbico, diencéfalo e substância
// branca/comissuras (44 objetos). A medula espinal (substância cinzenta/branca)
// tem geometria própria mínima nesta base e será tratada separadamente; cerebelo
// e córtex cerebral estão planejados para partes futuras.
export const CNS_PART1_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/cns-diencephalon.glb";

// Parte 2: tronco encefálico (mesencéfalo, ponte e bulbo), 34 objetos extraídos
// da mesma coleção. "Medulla oblongata.r", "Anterior/Posterior cochlear
// nucleus.r" e "Posterior cochlear nucleus.l" não apareciam na varredura
// recursiva da árvore de coleções (vivem fora da hierarquia percorrida), mas
// foram confirmados como malhas reais por busca direta antes de serem
// incluídos — nenhum nome foi assumido sem essa verificação.
export const CNS_PART2_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/cns-brainstem.glb";

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

  // ===== Mesencéfalo =====
  {
    slug: "mesencefalo",
    meshNames: ["Midbrain_L", "Midbrain_R"],
    regiao: "Mesencéfalo",
    nomeOficial: "Mesencephalon",
    nomeComum: "Mesencéfalo",
    resumo:
      "Menor e mais rostral segmento do tronco encefálico, conectando a ponte/cerebelo ao diencéfalo, contendo os colículos (teto), o núcleo rubro e os núcleos oculomotores, e atravessado pelo aqueduto do mesencéfalo.",
    descricaoAnatomica:
      "Dividido classicamente em teto (colículos superior e inferior, dorsal ao aqueduto), tegmento (núcleo rubro, substância negra, núcleos dos nervos cranianos III e IV, formação reticular) e base/pé do pedúnculo cerebral (fibras corticoespinhais, corticopontinas e corticonucleares descendentes, na face ventral). Continua-se superiormente com o diencéfalo e inferiormente com a ponte.",
    funcao: [
      "Via de passagem das principais vias motoras descendentes (trato corticoespinal) e sensitivas ascendentes entre o prosencéfalo e o restante do tronco encefálico/medula",
      "Reflexos visuais e auditivos, mediados pelos colículos superior e inferior",
      "Controle da motricidade ocular extrínseca (núcleos dos nervos cranianos III e IV) e coordenação motora extrapiramidal (núcleo rubro, substância negra)",
    ],
    relacoesAnatomicas:
      "Continua-se rostralmente com o diencéfalo (através da fossa interpeduncular) e caudalmente com a ponte; atravessado centralmente pelo aqueduto do mesencéfalo, que conecta o terceiro ao quarto ventrículo.",
    correlacaoClinica:
      "A síndrome de Weber (infarto do território paramediano/perfurantes mesencefálicas) causa paralisia do nervo oculomotor ipsilateral (ptose, midríase, olho \"para baixo e para fora\") associada a hemiparesia contralateral (lesão do pé do pedúnculo) — síndrome alterna clássica. Na herniação uncal (transtentorial), a compressão lateral do mesencéfalo afeta primeiro o nervo oculomotor (midríase fixa ipsilateral) e pode comprimir o pedúnculo cerebral contralateral contra a borda do tentório (sinal de Kernohan, hemiparesia ipsilateral à lesão — um \"falso sinal localizatório\").",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Síndrome de Weber: paralisia do nervo oculomotor ipsilateral + hemiparesia contralateral — lesão mesencefálica clássica (pé do pedúnculo + fascículo do NC III).",
      "Na herniação uncal, a midríase fixa unilateral (compressão do NC III) é o sinal de alerta mais precoce e mais cobrado de herniação transtentorial iminente.",
    ],
    fontes: [
      { tema: "Síndromes alternas do tronco encefálico", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Herniação transtentorial e exame do paciente comatoso", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Mesencephalon)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "coliculo-superior",
    meshNames: ["Superior_colliculus_L", "Superior_colliculus_R"],
    regiao: "Mesencéfalo",
    nomeOficial: "Colliculus superior",
    nomeComum: "Colículo superior",
    resumo:
      "Par de eminências no teto do mesencéfalo, centro subcortical de integração visuomotora, responsável por reflexos e movimentos oculares rápidos (sacádicos) orientados a estímulos visuais.",
    descricaoAnatomica:
      "Situado no teto (lâmina quadrigêmea) do mesencéfalo, rostral ao colículo inferior, organizado em camadas que recebem aferência retiniana direta (via trato retinotectal) e do córtex visual, além de aferências auditivas e somatossensoriais, integrando-as para orientar a cabeça e os olhos em direção a um estímulo.",
    funcao: [
      "Geração de sacadas oculares reflexas e voluntárias em direção a estímulos visuais periféricos",
      "Integração multissensorial (visual, auditiva, somatossensorial) para orientação da atenção e do olhar",
      "Via aferente do reflexo pupilar à luz, através do braço do colículo superior até a área pré-tectal",
    ],
    relacoesAnatomicas:
      "Par ao colículo inferior (caudalmente); recebe o braço do colículo superior (fibras retinianas); projeta-se ao tálamo (pulvinar) e à formação reticular do tronco encefálico via tratos tectoespinal e tectobulbar.",
    correlacaoClinica:
      "Lesões da região tectal (por exemplo, compressão por tumor pineal) comprometem a geração de sacadas verticais, contribuindo para a síndrome de Parinaud (paralisia do olhar vertical para cima) — o colículo superior é uma das estruturas efetivamente comprometidas nesse contexto, junto à área pré-tectal adjacente.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O colículo superior gera sacadas oculares reflexas a estímulos visuais — a compressão da região tectal (por exemplo, por tumor pineal) contribui para a síndrome de Parinaud.",
    ],
    fontes: [
      { tema: "Vias visuomotoras e colículo superior", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Anatomia do teto do mesencéfalo", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Colliculus superior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "coliculo-inferior",
    meshNames: ["Inferior_colliculus_L", "Inferior_colliculus_R"],
    regiao: "Mesencéfalo",
    nomeOficial: "Colliculus inferior",
    nomeComum: "Colículo inferior",
    resumo:
      "Par de eminências caudais ao colículo superior, principal estação de retransmissão subcortical da via auditiva no mesencéfalo, integrando informação de múltiplos núcleos do tronco antes de retransmiti-la ao corpo geniculado medial.",
    descricaoAnatomica:
      "Situado no teto do mesencéfalo, caudal ao colículo superior, recebendo o lemnisco lateral (via auditiva ascendente do complexo olivar superior e núcleos cocleares) e projetando-se via braço do colículo inferior ao corpo geniculado medial do tálamo.",
    funcao: [
      "Estação de retransmissão e processamento obrigatório da via auditiva ascendente, incluindo localização espacial do som por integração binaural",
      "Componente aferente do reflexo de sobressalto acústico e de reflexos auditivos de orientação",
    ],
    relacoesAnatomicas:
      "Recebe o lemnisco lateral; envia o braço do colículo inferior ao corpo geniculado medial; par ao colículo superior, rostralmente.",
    correlacaoClinica:
      "Por ser uma via altamente bilateralizada em múltiplos níveis do tronco encefálico, lesões unilaterais do colículo inferior raramente produzem perda auditiva unilateral perceptível — relevante para diferenciar lesões centrais de lesões periféricas (nervo coclear) na avaliação de hipoacusia.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O colículo inferior é a principal estação subcortical da via auditiva no mesencéfalo — recebe o lemnisco lateral e projeta-se ao corpo geniculado medial.",
      "Como toda a via auditiva central é bilateralizada, sua lesão unilateral raramente causa surdez unilateral perceptível — ajuda a diferenciar lesões periféricas de centrais.",
    ],
    fontes: [
      { tema: "Via auditiva central", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Anatomia do teto do mesencéfalo", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Colliculus inferior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-rubro",
    meshNames: ["Red_nucleus_L", "Red_nucleus_R"],
    regiao: "Mesencéfalo",
    nomeOficial: "Nucleus ruber",
    nomeComum: "Núcleo rubro",
    resumo:
      "Núcleo arredondado no tegmento do mesencéfalo, rico em ferro (daí seu nome), componente do sistema motor extrapiramidal e origem do trato rubroespinal.",
    descricaoAnatomica:
      "Situado no tegmento do mesencéfalo, medial à substância negra, atravessado pelas fibras do fascículo do nervo oculomotor (NC III) em seu trajeto até a fossa interpeduncular — relação anatômica clinicamente relevante.",
    funcao: [
      "Origem do trato rubroespinal, via motora extrapiramidal com papel relativamente modesto no ser humano (mais proeminente em outros mamíferos), envolvida na coordenação do tônus flexor dos membros superiores",
      "Recebe aferências do cerebelo (via pedúnculo cerebelar superior) e do córtex motor",
    ],
    relacoesAnatomicas:
      "Atravessado pelo fascículo do nervo oculomotor (NC III), que emerge na fossa interpeduncular logo abaixo — por isso lesões nessa região frequentemente comprometem tanto o núcleo rubro quanto o NC III.",
    correlacaoClinica:
      "A postura de decorticação (flexão dos membros superiores, extensão dos inferiores) em pacientes com lesão encefálica grave reflete uma lesão ACIMA do núcleo rubro (preservando sua influência flexora relativa), enquanto a postura de descerebração (extensão de todos os membros) reflete lesão ABAIXO do núcleo rubro, no tronco encefálico (geralmente na ponte) — distinção clássica na avaliação neurológica do paciente comatoso.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Postura de decorticação = lesão ACIMA do núcleo rubro (flexão de MMSS); postura de descerebração = lesão ABAIXO do núcleo rubro/no tronco (extensão de todos os membros) — permite estimar o nível lesional pelo exame da postura no paciente comatoso.",
      "O fascículo do NC III atravessa o núcleo rubro antes de emergir na fossa interpeduncular.",
    ],
    fontes: [
      { tema: "Sistema motor extrapiramidal", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Exame neurológico do paciente comatoso", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nucleus ruber)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-do-nervo-oculomotor",
    meshNames: ["Nucleus_of_oculomotor_nerve_L", "Nucleus_of_oculomotor_nerve_R"],
    regiao: "Mesencéfalo",
    nomeOficial: "Nucleus nervi oculomotorii",
    nomeComum: "Núcleo do nervo oculomotor (núcleo do NC III)",
    resumo:
      "Núcleo motor somático no mesencéfalo, na altura do colículo superior, origem das fibras que inervam quatro dos seis músculos extrínsecos do olho e o levantador da pálpebra superior.",
    descricaoAnatomica:
      "Situado no tegmento do mesencéfalo, ventral ao aqueduto do mesencéfalo, na altura do colículo superior; suas fibras eferentes atravessam o núcleo rubro e emergem na face ventral do mesencéfalo, na fossa interpeduncular.",
    funcao: [
      "Inervação motora somática dos músculos reto superior, reto inferior, reto medial e oblíquo inferior, além do levantador da pálpebra superior",
      "Em conjunto com o núcleo acessório do oculomotor (Edinger-Westphal) adjacente, participa da via eferente parassimpática do reflexo pupilar à luz e da acomodação",
    ],
    relacoesAnatomicas:
      "Adjacente ao núcleo acessório do oculomotor (parassimpático); suas fibras atravessam o núcleo rubro e emergem na fossa interpeduncular, onde se relacionam estreitamente com a artéria cerebral posterior e a artéria comunicante posterior.",
    correlacaoClinica:
      "A paralisia do NC III (nuclear ou fascicular) causa ptose completa e olho \"para baixo e para fora\" (predomínio dos músculos reto lateral e oblíquo superior, não afetados) e, se o componente parassimpático for comprometido, midríase fixa. Aneurismas da artéria comunicante posterior classicamente comprimem o NC III externamente, causando paralisia COM midríase (fibras pupilares periféricas no nervo, mais vulneráveis à compressão), enquanto causas isquêmicas (por exemplo, diabetes) tipicamente poupam a pupila (fibras pupilares perfundidas centralmente, mais resistentes à isquemia) — diferenciação clássica e frequentemente cobrada.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Paralisia do NC III POUPANDO a pupila sugere causa isquêmica (por exemplo, diabetes); paralisia do NC III COM midríase sugere compressão externa (por exemplo, aneurisma de comunicante posterior) — diferenciação clássica de prova.",
      "Paralisia completa do NC III: ptose + olho \"para baixo e para fora\" (ação não contraposta do reto lateral, NC VI, e do oblíquo superior, NC IV).",
    ],
    fontes: [
      { tema: "Paralisias do nervo oculomotor", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anatomia dos núcleos oculomotores", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nucleus nervi oculomotorii)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-acessorio-do-oculomotor",
    meshNames: ["Accessory_nucleus_of_oculomotor_nerve_L", "Accessory_nucleus_of_oculomotor_nerve_R"],
    regiao: "Mesencéfalo",
    nomeOficial: "Nucleus accessorius nervi oculomotorii (nucleus Edinger-Westphal)",
    nomeComum: "Núcleo acessório do nervo oculomotor (núcleo de Edinger-Westphal)",
    resumo:
      "Núcleo parassimpático pré-ganglionar associado ao núcleo motor do NC III, origem das fibras que medeiam a constrição pupilar (miose) e a acomodação do cristalino.",
    descricaoAnatomica:
      "Situado dorsomedialmente ao núcleo motor principal do NC III, no mesencéfalo; suas fibras pré-ganglionares parassimpáticas viajam junto ao NC III até o gânglio ciliar na órbita, de onde fibras pós-ganglionares curtas inervam o músculo esfíncter da pupila e o músculo ciliar.",
    funcao: [
      "Origem parassimpática pré-ganglionar do reflexo pupilar à luz (miose) e do reflexo de acomodação (contração do músculo ciliar, relaxando a tensão zonular e arredondando o cristalino para visão de perto)",
    ],
    relacoesAnatomicas:
      "Imediatamente adjacente ao núcleo motor do NC III; suas fibras trafegam junto às fibras somáticas do NC III até a órbita, fazendo sinapse no gânglio ciliar.",
    correlacaoClinica:
      "A pupila de Argyll Robertson (classicamente associada à neurossífilis terciária) apresenta dissociação luz-perto — reflexo fotomotor ausente ou diminuído com reflexo de acomodação preservado — atribuída a uma lesão seletiva das vias pré-tectais que chegam ao núcleo de Edinger-Westphal, poupando a via da acomodação. Já a pupila tônica de Adie (lesão do gânglio ciliar) causa dissociação luz-perto por um mecanismo periférico diferente.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Pupila de Argyll Robertson (\"acomoda mas não reage\"): dissociação luz-perto por lesão pré-tectal seletiva que poupa a via de acomodação — associação clássica com neurossífilis terciária.",
      "O núcleo de Edinger-Westphal é a origem parassimpática pré-ganglionar de toda a via eferente do reflexo pupilar à luz e da acomodação.",
    ],
    fontes: [
      { tema: "Neurossífilis e pupila de Argyll Robertson", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Via parassimpática do reflexo pupilar", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Nomenclatura oficial (Nucleus accessorius nervi oculomotorii)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "fossa-interpeduncular",
    meshNames: ["Interpeduncular_fossa_L", "Interpeduncular_fossa_R"],
    regiao: "Mesencéfalo",
    nomeOficial: "Fossa interpeduncularis",
    nomeComum: "Fossa interpeduncular",
    resumo:
      "Depressão na face ventral do mesencéfalo, entre os dois pedúnculos cerebrais, por onde o nervo oculomotor (NC III) emerge do tronco encefálico — um marco anatômico central na semiologia de herniação e de aneurismas.",
    descricaoAnatomica:
      "Delimitada lateralmente pelos dois pedúnculos cerebrais (pé do pedúnculo); seu assoalho é perfurado por pequenos vasos (substância perfurada posterior) que suprem estruturas profundas do diencéfalo/mesencéfalo; o NC III emerge diretamente desta fossa.",
    funcao: [
      "Ponto de emergência do nervo oculomotor (NC III) a partir do tronco encefálico",
      "Via de entrada de pequenas artérias perfurantes (ramos da artéria cerebral posterior e da comunicante posterior) que suprem o mesencéfalo e o diencéfalo",
    ],
    relacoesAnatomicas:
      "Circundada pelo círculo arterial do cérebro (polígono de Willis) — relação anatômica direta com a artéria comunicante posterior, relevante na fisiopatologia de aneurismas que comprimem o NC III nesse ponto.",
    correlacaoClinica:
      "A proximidade entre o NC III (ao emergir na fossa interpeduncular) e a artéria comunicante posterior explica por que aneurismas dessa artéria são causa clássica de paralisia do NC III com midríase (compressão externa das fibras pupilares periféricas) — uma cefaleia súbita associada a paralisia do NC III é uma emergência neurológica que exige investigação imediata para hemorragia subaracnóidea/aneurisma.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Cefaleia súbita + paralisia do NC III com midríase deve levantar suspeita de aneurisma roto/em expansão da artéria comunicante posterior comprimindo o nervo na fossa interpeduncular — emergência neurológica.",
      "A fossa interpeduncular é atravessada por ramos perfurantes do polígono de Willis que irrigam o mesencéfalo e o diencéfalo.",
    ],
    fontes: [
      { tema: "Hemorragia subaracnóidea e aneurismas do polígono de Willis", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anatomia da base do mesencéfalo", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Fossa interpeduncularis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },

  // ===== Ponte =====
  {
    slug: "ponte",
    meshNames: ["Pons_L", "Pons_R"],
    regiao: "Ponte",
    nomeOficial: "Pons",
    nomeComum: "Ponte",
    resumo:
      "Segmento médio do tronco encefálico, ponte estrutural e funcional entre os hemisférios cerebrais/cerebelo e o bulbo, contendo núcleos de múltiplos nervos cranianos (V a VIII) e a maior parte das fibras corticopontocerebelares.",
    descricaoAnatomica:
      "Dividida em uma porção basilar (ventral, com núcleos pontinos e fibras corticopontinas, corticoespinhais e pontocerebelares que cruzam para formar o pedúnculo cerebelar médio) e um tegmento (dorsal, com núcleos de nervos cranianos, lemniscos ascendentes e formação reticular). Seu teto dorsal forma o assoalho rostral do quarto ventrículo.",
    funcao: [
      "Retransmissão da informação do córtex cerebral para o cerebelo contralateral, via núcleos pontinos e pedúnculo cerebelar médio — a maior via de entrada do cerebelo",
      "Contém os núcleos motores e sensitivos dos nervos cranianos V (trigêmeo), VI (abducente), VII (facial) e parte do VIII (vestibulococlear)",
      "Via de passagem das principais vias motoras e sensitivas longas entre o mesencéfalo e o bulbo",
    ],
    relacoesAnatomicas:
      "Contínua rostralmente com o mesencéfalo e caudalmente com o bulbo; forma o assoalho rostral do quarto ventrículo; conecta-se ao cerebelo pelos pedúnculos cerebelares médio e superior.",
    correlacaoClinica:
      "A síndrome do encarceramento (\"locked-in syndrome\"), por infarto isquêmico da base da ponte (geralmente por oclusão da artéria basilar), interrompe bilateralmente as vias corticoespinhal e corticonuclear, causando quadriplegia e paralisia da maioria dos nervos cranianos inferiores com CONSCIÊNCIA PRESERVADA (o tegmento, incluindo a formação reticular ativadora e os núcleos oculomotores verticais, é poupado) — o paciente só consegue se comunicar por movimentos verticais dos olhos e piscar.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Síndrome do encarceramento (locked-in): infarto da base da ponte (oclusão da basilar) causa quadriplegia e paralisia de nervos cranianos inferiores com CONSCIÊNCIA TOTALMENTE PRESERVADA — o paciente comunica-se apenas com movimentos oculares verticais.",
      "A ponte contém os núcleos dos nervos cranianos V, VI, VII e parte do VIII — lesões pontinas frequentemente produzem síndromes alternas envolvendo esses nervos.",
    ],
    fontes: [
      { tema: "Síndrome do encarceramento e oclusão da artéria basilar", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anatomia da ponte", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Pons)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-do-nervo-abducente",
    meshNames: ["Nucleus_of_abducens_nerve_L", "Nucleus_of_abducens_nerve_R"],
    regiao: "Ponte",
    nomeOficial: "Nucleus nervi abducentis",
    nomeComum: "Núcleo do nervo abducente (núcleo do NC VI)",
    resumo:
      "Núcleo motor somático no tegmento da ponte dorsal, origem do nervo abducente (inerva o músculo reto lateral) e sede de interneurônios essenciais para o olhar horizontal conjugado.",
    descricaoAnatomica:
      "Situado no tegmento pontino dorsal, imediatamente sob o colículo facial — elevação no assoalho do quarto ventrículo formada pelo joelho interno do nervo facial (NC VII), que contorna o núcleo do NC VI — relação anatômica classicamente cobrada.",
    funcao: [
      "Inervação motora somática do músculo reto lateral (abdução do olho)",
      "Contém interneurônios que se projetam pelo fascículo longitudinal medial contralateral até o núcleo do NC III (subnúcleo do reto medial), coordenando o olhar horizontal conjugado binocular",
    ],
    relacoesAnatomicas:
      "Circundado pelas fibras do joelho interno do nervo facial (NC VII), formando o colículo facial no assoalho do quarto ventrículo — uma lesão nesta região tipicamente afeta ambos os nervos.",
    correlacaoClinica:
      "A síndrome de Millard-Gubler (infarto da base/tegmento pontino ventral, geralmente por oclusão de ramos paramedianos da artéria basilar) causa paralisia do NC VI e/ou VII ipsilateral associada a hemiparesia contralateral (síndrome alterna pontina). A oftalmoplegia internuclear (lesão do fascículo longitudinal medial, comum na esclerose múltipla) causa falha de adução do olho ipsilateral à lesão durante o olhar horizontal conjugado, com nistagmo do olho abduzido contralateral.",
    doencasRelacionadas: [
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
      { slug: "esclerose-multipla", nome: "Esclerose múltipla" },
    ],
    pontosDeProva: [
      "Síndrome de Millard-Gubler: paralisia do NC VI e/ou VII ipsilateral + hemiparesia contralateral — infarto pontino ventral.",
      "Oftalmoplegia internuclear (lesão do fascículo longitudinal medial, clássica na esclerose múltipla em jovens): falha de adução ipsilateral + nistagmo do olho abduzido contralateral no olhar horizontal.",
      "O colículo facial (assoalho do quarto ventrículo) é formado pelas fibras do NC VII contornando o núcleo do NC VI — os dois nervos são vizinhos anatômicos.",
    ],
    fontes: [
      { tema: "Síndromes alternas pontinas", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Oftalmoplegia internuclear na esclerose múltipla", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nucleus nervi abducentis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-motor-do-nervo-facial",
    meshNames: ["Motor_nucleus_of_facial_nerve_L", "Motor_nucleus_of_facial_nerve_R"],
    regiao: "Ponte",
    nomeOficial: "Nucleus motorius nervi facialis",
    nomeComum: "Núcleo motor do nervo facial (núcleo do NC VII)",
    resumo:
      "Núcleo motor somático no tegmento pontino ventrolateral, origem das fibras que inervam os músculos da mímica facial — sua dupla topografia de controle cortical é a base da distinção clínica entre paralisia facial central e periférica.",
    descricaoAnatomica:
      "Situado no tegmento pontino ventrolateral; suas fibras eferentes fazem um trajeto incomum, contornando dorsalmente o núcleo do NC VI (formando o joelho interno, ou colículo facial) antes de emergir ventralmente no sulco bulbopontino.",
    funcao: [
      "Inervação motora somática de todos os músculos da mímica facial (incluindo o orbicular do olho e da boca), o músculo estapédio, o ventre posterior do digástrico e o estilo-hióideo",
    ],
    relacoesAnatomicas:
      "Suas fibras contornam o núcleo do NC VI, formando o colículo facial no assoalho do quarto ventrículo; a porção do núcleo que controla a musculatura da face SUPERIOR recebe inervação corticonuclear BILATERAL, enquanto a porção que controla a face INFERIOR recebe apenas inervação CONTRALATERAL.",
    correlacaoClinica:
      "Essa dupla representação cortical é a base da distinção clínica fundamental entre paralisia facial central (lesão da via corticonuclear acima do núcleo, por exemplo AVC — poupa a testa, pois esta ainda recebe inervação bilateral do lado saudável) e paralisia facial periférica (lesão do próprio núcleo ou do nervo, por exemplo paralisia de Bell — compromete toda a hemiface, incluindo a testa, pois a única via de saída para aquele lado foi destruída).",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Paralisia facial CENTRAL poupa a testa (inervação cortical bilateral da porção superior do núcleo); paralisia facial PERIFÉRICA (por exemplo, Bell) compromete toda a hemiface, incluindo a testa — a diferenciação clínica mais cobrada de toda a neuroanatomia do NC VII.",
      "As fibras do NC VII contornam o núcleo do NC VI antes de emergir — por isso lesões pontinas frequentemente afetam os dois nervos juntos.",
    ],
    fontes: [
      { tema: "Paralisia facial central vs. periférica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Trajeto intrapontino do nervo facial", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nucleus motorius nervi facialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-salivatorio-superior",
    meshNames: ["Superior_salivatory_nucleus_L", "Superior_salivatory_nucleus_R"],
    regiao: "Ponte",
    nomeOficial: "Nucleus salivatorius superior",
    nomeComum: "Núcleo salivatório superior",
    resumo:
      "Núcleo parassimpático pré-ganglionar no tegmento pontino, associado ao nervo facial (NC VII), origem das fibras secretomotoras para as glândulas lacrimal, submandibular e sublingual, além das glândulas nasais e palatinas.",
    descricaoAnatomica:
      "Situado no tegmento pontino, próximo ao núcleo motor do NC VII; suas fibras pré-ganglionares seguem pelo nervo intermédio (componente sensitivo/parassimpático do NC VII) e se distribuem por dois trajetos — via nervo petroso maior até o gânglio pterigopalatino (lacrimal, nasal, palatina) e via corda do tímpano até o gânglio submandibular (submandibular, sublingual).",
    funcao: [
      "Origem parassimpática pré-ganglionar da secreção das glândulas lacrimal, submandibular, sublingual, nasais e palatinas",
    ],
    relacoesAnatomicas:
      "Intimamente associado ao núcleo motor do NC VII, viajando com suas fibras através do nervo intermédio.",
    correlacaoClinica:
      "Na paralisia de Bell (paralisia facial periférica idiopática), o comprometimento das fibras parassimpáticas que acompanham o NC VII pode causar diminuição da lacrimação (olho seco, com risco de ceratite de exposição) e alteração do paladar (via corda do tímpano, que também trafega com o NC VII) — achados que ajudam a localizar a lesão ao longo do trajeto do nervo.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O núcleo salivatório superior origina a secreção lacrimal, submandibular e sublingual via NC VII — sua disfunção na paralisia de Bell contribui para olho seco e xerostomia parcial.",
      "A localização da lesão do NC VII pelo padrão de sintomas associados (lacrimação, paladar, secreção salivar) é um raciocínio clássico de prova.",
    ],
    fontes: [
      { tema: "Trajeto e ramos do nervo facial", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Paralisia de Bell", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nucleus salivatorius superior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleos-vestibulares",
    meshNames: ["Vestibular_nuclei_L", "Vestibular_nuclei_R"],
    regiao: "Ponte",
    nomeOficial: "Nuclei vestibulares",
    nomeComum: "Núcleos vestibulares",
    resumo:
      "Complexo de núcleos na transição pontobulbar, que recebe aferência do labirinto vestibular (via NC VIII) e integra informação de equilíbrio, postura e coordenação do olhar durante o movimento da cabeça.",
    descricaoAnatomica:
      "Situado na região dorsolateral da transição pontobulbar, no assoalho do quarto ventrículo, recebendo fibras vestibulares primárias do gânglio vestibular (via NC VIII) e projetando-se extensamente ao cerebelo, à medula espinal (trato vestibuloespinal) e aos núcleos oculomotores via fascículo longitudinal medial.",
    funcao: [
      "Integração da informação vestibular (labirinto) com informação visual e proprioceptiva para manutenção do equilíbrio e da postura",
      "Geração do reflexo vestíbulo-ocular (estabilização do olhar durante movimentos da cabeça), via conexões com os núcleos dos NC III, IV e VI através do fascículo longitudinal medial",
      "Controle do tônus muscular antigravitacional via trato vestibuloespinal",
    ],
    relacoesAnatomicas:
      "Recebe fibras vestibulares primárias do NC VIII; conecta-se aos núcleos oculomotores via fascículo longitudinal medial e à medula via trato vestibuloespinal; projeta-se ao cerebelo (lobo flóculo-nodular).",
    correlacaoClinica:
      "Lesões dos núcleos vestibulares (ou de suas conexões) causam vertigem, nistagmo e desequilíbrio — achados centrais na síndrome de Wallenberg (infarto bulbar lateral, território da artéria cerebelar posteroinferior), que também compromete estruturas adjacentes, causando síndrome de Horner ipsilateral, perda dissociada de dor/temperatura (ipsilateral na face, contralateral no corpo) e disfagia/rouquidão.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Os núcleos vestibulares situam-se na transição pontobulbar e são componentes centrais da síndrome de Wallenberg (infarto da artéria cerebelar posteroinferior) — vertigem, nistagmo e ataxia entre seus achados.",
      "O reflexo vestíbulo-ocular depende da conexão núcleos vestibulares → fascículo longitudinal medial → núcleos oculomotores.",
    ],
    fontes: [
      { tema: "Sistema vestibular e reflexo vestíbulo-ocular", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Síndrome de Wallenberg", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nuclei vestibulares)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },

  // ===== Bulbo (medula oblonga) =====
  {
    slug: "bulbo",
    meshNames: ["Medulla_oblongata_L", "Medulla_oblongata_R"],
    regiao: "Bulbo (medula oblonga)",
    nomeOficial: "Medulla oblongata",
    nomeComum: "Bulbo (medula oblonga)",
    resumo:
      "Segmento mais caudal do tronco encefálico, transição entre a ponte e a medula espinal, contendo centros vitais para o controle cardiovascular e respiratório, núcleos de nervos cranianos inferiores (IX a XII) e a decussação das pirâmides.",
    descricaoAnatomica:
      "Dividido em uma porção aberta (rostral, onde o canal central se abre para formar o assoalho do quarto ventrículo) e uma porção fechada (caudal, onde o canal central retoma seu formato tubular, próxima à decussação das pirâmides); contém as pirâmides (ventrais, feixes corticoespinhais) e as olivas (elevações laterais contendo o complexo olivar inferior).",
    funcao: [
      "Sede dos centros vitais da formação reticular bulbar: centro respiratório (grupos respiratórios dorsal e ventral) e centros cardiovasculares (vasomotor e cardioinibitório)",
      "Decussação das pirâmides — cruzamento da maior parte das fibras corticoespinhais laterais, base anatômica da lateralização motora do corpo",
      "Contém núcleos dos nervos cranianos IX, X, XI e XII, e núcleos de retransmissão sensitiva (grácil e cuneiforme, para a via do lemnisco medial)",
    ],
    relacoesAnatomicas:
      "Contínuo rostralmente com a ponte e caudalmente (no forame magno) com a medula espinal; forma a porção caudal do assoalho do quarto ventrículo.",
    correlacaoClinica:
      "A síndrome bulbar medial (infarto do território paramediano, ramos da artéria espinal anterior/vertebral) compromete a pirâmide (hemiparesia contralateral), o lemnisco medial (perda de propriocepção/tato discriminativo contralateral) e o núcleo/fibras do NC XII (paralisia da língua ipsilateral) — síndrome alterna clássica. Já a síndrome bulbar lateral (de Wallenberg, território da artéria cerebelar posteroinferior) poupa a pirâmide e o NC XII, mas compromete os núcleos vestibulares, o trato espinotalâmico, o núcleo espinal do trigêmeo, o núcleo ambíguo (IX/X) e fibras simpáticas descendentes.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "Síndrome bulbar medial: hemiparesia contralateral + perda proprioceptiva contralateral + paralisia da língua IPSILATERAL (NC XII) — poupa dor/temperatura.",
      "Síndrome de Wallenberg (bulbar lateral): disfagia/rouquidão (núcleo ambíguo), vertigem/nistagmo (vestibular), Horner ipsilateral, perda dissociada de dor/temperatura (face ipsilateral, corpo contralateral) — poupa a força motora.",
      "O bulbo abriga os centros vitais respiratório e cardiovascular — sua lesão extensa é incompatível com a vida.",
    ],
    fontes: [
      { tema: "Síndromes bulbares medial e lateral", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Síndrome de Wallenberg e centros vitais bulbares", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Medulla oblongata)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "piramide-do-bulbo",
    meshNames: ["Pyramid_of_medulla_oblongata_L", "Pyramid_of_medulla_oblongata_R"],
    regiao: "Bulbo (medula oblonga)",
    nomeOficial: "Pyramis medullae oblongatae",
    nomeComum: "Pirâmide do bulbo",
    resumo:
      "Par de eminências longitudinais na face ventral do bulbo, formadas pelas fibras do trato corticoespinal em seu trajeto descendente, marcando o local onde a maioria dessas fibras cruza a linha média.",
    descricaoAnatomica:
      "Situada na face ventral do bulbo, de cada lado da fissura mediana anterior; na transição bulbomedular, cerca de 85-90% das fibras corticoespinhais cruzam para o lado oposto (decussação das pirâmides), formando o trato corticoespinal lateral, enquanto o restante continua ipsilateral como trato corticoespinal anterior (que cruzará mais caudalmente, segmento a segmento).",
    funcao: [
      "Condução das fibras motoras corticoespinhais (via piramidal) do córtex motor até os neurônios motores da medula espinal",
    ],
    relacoesAnatomicas:
      "A decussação das pirâmides, na transição bulbomedular, é o marco anatômico que define o limite entre o bulbo e a medula espinal.",
    correlacaoClinica:
      "Lesões acima da decussação das pirâmides causam déficit motor CONTRALATERAL; lesões abaixo dela (já na medula espinal) causam déficit IPSILATERAL — princípio fundamental para localizar lesões do sistema nervoso central ao longo do neuroeixo.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "A decussação das pirâmides é o ponto de referência anatômico que separa \"lesão contralateral\" (acima) de \"lesão ipsilateral\" (abaixo, na medula) na localização de déficits motores.",
      "Cerca de 85-90% das fibras corticoespinhais decussam nas pirâmides, formando o trato lateral — a via motora voluntária dominante.",
    ],
    fontes: [
      { tema: "Trato corticoespinal e sua decussação", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Localização de lesões pelo padrão de lateralidade", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Pyramis medullae oblongatae)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "oliva-bulbar",
    meshNames: ["Olive_L", "Olive_R"],
    regiao: "Bulbo (medula oblonga)",
    nomeOficial: "Oliva",
    nomeComum: "Oliva (bulbar)",
    resumo:
      "Eminência oval na face ventrolateral do bulbo, contendo o complexo olivar inferior, principal fonte de fibras trepadeiras que se projetam ao córtex cerebelar contralateral, essencial ao aprendizado motor e à coordenação fina do movimento.",
    descricaoAnatomica:
      "Situada lateralmente à pirâmide bulbar, formada internamente pelo núcleo olivar inferior (com formato de saco pregueado característico), cujas fibras eferentes cruzam a linha média e entram no cerebelo pelo pedúnculo cerebelar inferior.",
    funcao: [
      "Origem das fibras trepadeiras olivocerebelares, que se projetam ao córtex cerebelar contralateral e desempenham papel central no aprendizado motor e na correção de erros de movimento (plasticidade cerebelar)",
    ],
    relacoesAnatomicas:
      "Lateral à pirâmide bulbar; suas eferências cruzam a linha média e entram no cerebelo pelo pedúnculo cerebelar inferior.",
    correlacaoClinica:
      "O tremor palatino essencial e algumas formas de nistagmo têm sido associados à degeneração olivar hipertrófica, uma condição rara secundária a lesões do chamado triângulo de Guillain-Mollaret (conexões entre núcleo rubro, oliva bulbar e núcleo denteado do cerebelo).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "As fibras trepadeiras olivocerebelares, originadas na oliva bulbar, são centrais no aprendizado motor cerebelar — cada fibra trepadeira inerva uma única célula de Purkinje, ao contrário das fibras musgosas.",
    ],
    fontes: [
      { tema: "Fibras trepadeiras e aprendizado motor cerebelar", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Anatomia do bulbo", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Oliva)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-coclear-anterior",
    meshNames: ["Anterior_cochlear_nucleus_L", "Anterior_cochlear_nucleus_R"],
    regiao: "Bulbo (medula oblonga)",
    nomeOficial: "Nucleus cochlearis anterior (ventralis)",
    nomeComum: "Núcleo coclear anterior (ventral)",
    resumo:
      "Primeiro núcleo de retransmissão central da via auditiva, situado na transição pontobulbar, recebendo diretamente as fibras do componente coclear do nervo vestibulococlear (NC VIII).",
    descricaoAnatomica:
      "Situado na superfície dorsolateral do bulbo/ponte, na entrada do NC VIII no tronco encefálico; recebe fibras cocleares primárias diretamente do gânglio espiral, e suas eferências cruzam predominantemente a linha média (formando o corpo trapezoide) rumo ao complexo olivar superior contralateral, com uma via ipsilateral menor.",
    funcao: [
      "Primeira estação de retransmissão central da via auditiva, iniciando o processamento de frequência e intensidade sonora antes da bilateralização da via",
    ],
    relacoesAnatomicas:
      "Recebe fibras diretamente do NC VIII; suas eferências formam parte do corpo trapezoide, cruzando para o complexo olivar superior contralateral.",
    correlacaoClinica:
      "Por ser o primeiro núcleo da via auditiva a receber informação exclusivamente IPSILATERAL antes da bilateralização, uma lesão isolada e completa do núcleo coclear (ou do próprio NC VIII) é uma das poucas lesões centrais capazes de causar surdez unilateral verdadeira — diferentemente de qualquer lesão mais central na via.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O núcleo coclear é um dos únicos pontos da via auditiva central (além do próprio nervo) cuja lesão isolada pode causar surdez unilateral verdadeira, por ser o último ponto puramente ipsilateral antes da bilateralização.",
    ],
    fontes: [
      { tema: "Vias auditivas centrais", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Anatomia dos núcleos cocleares", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nucleus cochlearis anterior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nucleo-coclear-posterior",
    meshNames: ["Posterior_cochlear_nucleus_L", "Posterior_cochlear_nucleus_R"],
    regiao: "Bulbo (medula oblonga)",
    nomeOficial: "Nucleus cochlearis posterior (dorsalis)",
    nomeComum: "Núcleo coclear posterior (dorsal)",
    resumo:
      "Segundo componente do complexo dos núcleos cocleares, situado dorsalmente ao núcleo coclear anterior, com papel especializado no processamento de pistas espectrais complexas do som, incluindo a localização vertical da fonte sonora.",
    descricaoAnatomica:
      "Situado na superfície dorsal do pedúnculo cerebelar inferior, na transição pontobulbar, dorsal ao núcleo coclear anterior; recebe fibras cocleares primárias e projeta seus axônios predominantemente de forma cruzada, formando a estria acústica dorsal, que contorna o pedúnculo cerebelar inferior antes de se juntar ao lemnisco lateral contralateral.",
    funcao: [
      "Processamento de pistas espectrais complexas do som, incluindo localização vertical da fonte sonora, com envio dessa informação processada, via estria acústica dorsal, ao colículo inferior contralateral",
    ],
    relacoesAnatomicas:
      "Dorsal ao núcleo coclear anterior; sua via eferente (estria acústica dorsal) contorna o pedúnculo cerebelar inferior.",
    correlacaoClinica:
      "Assim como o núcleo coclear anterior, integra o primeiro nível de processamento central da via auditiva antes de sua ampla bilateralização — relevante para compreender por que a maioria das lesões auditivas centrais (acima deste nível) não causa surdez unilateral completa.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O núcleo coclear posterior processa pistas espectrais para localização vertical do som e envia sua saída, via estria acústica dorsal, ao colículo inferior contralateral.",
    ],
    fontes: [
      { tema: "Processamento espectral na via auditiva", fonte: "Kandel Principles of Neural Science, 6ª ed." },
      { tema: "Anatomia dos núcleos cocleares", fonte: "Snell's Clinical Neuroanatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nucleus cochlearis posterior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
