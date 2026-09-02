import type { EstruturaLinfatica } from "./types";

// Modelo 3D: coleção "Lymphoid system" do atlas Z-Anatomy (CC BY-SA 4.0,
// baseado em BodyParts3D/DBCLS), extraída e comprimida com o mesmo pipeline
// usado nos demais sistemas. 54 estruturas nomeadas individualmente.
export const LYMPHATIC_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/lymphoid.glb";

export const sistemaLinfatico: EstruturaLinfatica[] = [
  {
    slug: "baco",
    meshNames: ["Spleen"],
    regiao: "Órgãos linfoides",
    nomeOficial: "Splen (Lien)",
    nomeComum: "Baço",
    resumo:
      "Maior órgão linfoide secundário do corpo, situado no quadrante superior esquerdo do abdome, que filtra o sangue (removendo hemácias senescentes/anormais) e monta respostas imunes contra antígenos transportados pelo sangue.",
    descricaoAnatomica:
      "Órgão intraperitoneal, macio e friável, protegido pelo gradil costal esquerdo (9ª a 11ª costelas), relacionado ao rim esquerdo, estômago, cólon esquerdo e cauda do pâncreas. Composto por polpa vermelha (filtração de hemácias, remoção de células senescentes) e polpa branca (tecido linfoide, resposta imune a antígenos sanguíneos).",
    funcao: [
      "Filtração do sangue: remoção de hemácias senescentes, anormais ou parasitadas (função de \"cemitério de hemácias\")",
      "Reservatório de plaquetas (cerca de 1/3 do pool plaquetário total)",
      "Resposta imune humoral a antígenos transportados pelo sangue (polpa branca)",
      "Hematopoiese extramedular (função residual, reativada em certas doenças mieloproliferativas)",
    ],
    drenagem:
      "Não é um linfonodo, mas o maior órgão linfoide secundário — filtra sangue (não linfa) através da artéria e veia esplênicas, ramos do tronco celíaco e do sistema porta, respectivamente.",
    correlacaoClinica:
      "Por sua localização subcostal e cápsula frágil, é o órgão abdominal mais frequentemente lesado em trauma abdominal fechado, podendo causar hemorragia interna maciça (ruptura esplênica). A esplenomegalia tem causas variadas — infecciosas (mononucleose, malária), hematológicas (linfomas, leucemias, anemias hemolíticas), congestivas (hipertensão portal/cirrose) — e pode causar hiperesplenismo (sequestro excessivo de células sanguíneas, causando citopenias). Pacientes esplenectomizados (cirurgia ou asplenia funcional, como na anemia falciforme) têm risco aumentado de sepse fulminante por bactérias encapsuladas (Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis), exigindo vacinação específica.",
    doencasRelacionadas: [{ slug: "linfoma-nao-hodgkin-difuso", nome: "Linfoma não-Hodgkin difuso" }],
    pontosDeProva: [
      "O baço é o órgão abdominal mais frequentemente lesado em trauma abdominal fechado, pela proteção incompleta do gradil costal e sua cápsula frágil.",
      "Pacientes asplênicos (esplenectomia ou asplenia funcional) têm risco aumentado de sepse fulminante por bactérias encapsuladas — indicação de vacinação contra pneumococo, Haemophilus e meningococo.",
      "Corpos de Howell-Jolly (remanescentes nucleares em hemácias) no esfregaço de sangue periférico são um marcador clássico de asplenia/hipoesplenismo, pois normalmente seriam removidos pelo baço.",
    ],
    fontes: [
      { tema: "Trauma esplênico e indicações de esplenectomia", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Asplenia e risco de sepse por bactérias encapsuladas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Splen)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "timo",
    meshNames: ["Left_lobe_of_thymus", "Right_lobe_of_thymus"],
    regiao: "Órgãos linfoides",
    nomeOficial: "Thymus",
    nomeComum: "Timo",
    resumo:
      "Órgão linfoide primário bilobado do mediastino anterossuperior, essencial para a maturação de linfócitos T durante a infância — sofre involução progressiva (substituição por tecido adiposo) após a puberdade.",
    descricaoAnatomica:
      "Situado no mediastino anterossuperior, anteriormente ao pericárdio e aos grandes vasos, composto por dois lobos (direito e esquerdo) unidos por tecido conjuntivo. É relativamente grande na infância (proporcionalmente ao tamanho corporal) e sofre involução gradual (atrofia com substituição gordurosa) a partir da puberdade, embora nunca desapareça completamente.",
    funcao: [
      "Maturação e seleção de linfócitos T (seleção positiva e negativa, gerando tolerância central a autoantígenos)",
      "Órgão linfoide primário — não participa diretamente de respostas imunes, apenas da produção do repertório de células T",
    ],
    drenagem: "Como órgão linfoide primário, não realiza drenagem linfática de território corporal — é o próprio local de produção/seleção dos linfócitos T que povoam os órgãos linfoides secundários.",
    correlacaoClinica:
      "A miastenia gravis (doença autoimune contra receptores de acetilcolina na junção neuromuscular) tem forte associação com anormalidades tímicas — hiperplasia tímica em pacientes mais jovens e timoma em pacientes mais velhos; a timectomia é parte do tratamento em casos selecionados. A síndrome de DiGeorge (deleção 22q11.2) causa aplasia/hipoplasia tímica congênita, resultando em imunodeficiência de células T grave. Massas mediastinais anteriores no adulto seguem classicamente o mnemônico dos \"4 Ts\": Timoma, Teratoma (tumor de células germinativas), \"Terrible\" linfoma e Tireoide (bócio retroesternal).",
    doencasRelacionadas: [{ slug: "linfoma-nao-hodgkin-difuso", nome: "Linfoma não-Hodgkin difuso" }],
    pontosDeProva: [
      "Mnemônico dos \"4 Ts\" de massa mediastinal anterior: Timoma, Teratoma, \"Terrible\" linfoma, Tireoide (bócio retroesternal).",
      "Miastenia gravis está fortemente associada a hiperplasia tímica (jovens) ou timoma (idosos) — timectomia é tratamento em casos selecionados.",
      "Síndrome de DiGeorge (deleção 22q11.2): aplasia tímica congênita + hipoparatireoidismo + anomalias cardíacas conotruncais (\"CATCH-22\").",
    ],
    fontes: [
      { tema: "Miastenia gravis e patologia tímica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Massas de mediastino anterior (\"4 Ts\")", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Síndrome de DiGeorge", fonte: "Robbins & Cotran Pathologic Basis of Disease, 10ª ed." },
      { tema: "Nomenclatura oficial (Thymus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "tonsila-palatina",
    meshNames: ["Palatine_tonsil_L", "Palatine_tonsil_R"],
    regiao: "Órgãos linfoides",
    nomeOficial: "Tonsilla palatina",
    nomeComum: "Tonsila palatina (amígdala)",
    resumo:
      "Massa de tecido linfoide entre os pilares palatoglosso e palatofaríngeo na orofaringe, parte do anel linfático de Waldeyer — a mais frequentemente inflamada e removida cirurgicamente das tonsilas.",
    descricaoAnatomica:
      "Situada na fossa tonsilar (entre os arcos palatoglosso, anteriormente, e palatofaríngeo, posteriormente), com superfície irregular contendo criptas tonsilares que aumentam a área de contato com antígenos. Faz parte do anel linfático de Waldeyer, junto às tonsilas faríngea (adenoide), tubárias e linguais.",
    funcao: ["Vigilância imunológica de antígenos inalados/ingeridos na porta de entrada orofaríngea"],
    drenagem: "Drena principalmente para o linfonodo jugulodigástrico (linfonodo cervical profundo superior, também chamado \"linfonodo tonsilar\"), classicamente palpável/aumentado em infecções tonsilares.",
    correlacaoClinica:
      "A tonsilite aguda (viral ou bacteriana, mais notavelmente por Streptococcus pyogenes/estreptococo do grupo A) é extremamente comum na infância; infecções recorrentes ou hipertrofia obstrutiva (causando apneia obstrutiva do sono pediátrica) são as principais indicações de tonsilectomia. O abscesso peritonsilar é uma complicação supurativa que desloca a úvula para o lado contralateral e pode comprometer a via aérea.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O linfonodo jugulodigástrico (\"linfonodo tonsilar\") é o principal sítio de drenagem da tonsila palatina, classicamente palpável em infecções tonsilares agudas.",
      "Abscesso peritonsilar desloca a úvula para o lado CONTRALATERAL ao abscesso — diferencia-se clinicamente da tonsilite simples pela assimetria e trismo.",
      "Hipertrofia adenotonsilar é a principal causa de apneia obstrutiva do sono em crianças, tratada com adenotonsilectomia.",
    ],
    fontes: [
      { tema: "Tonsilite, abscesso peritonsilar e indicações de tonsilectomia", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anel linfático de Waldeyer", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Tonsilla palatina)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-occipitais",
    meshNames: ["Occipital_nodes_L", "Occipital_nodes_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei occipitales",
    nomeComum: "Linfonodos occipitais",
    resumo: "Pequeno grupo na região posterior do couro cabeludo, sobre a inserção do músculo trapézio, que drena o escalpo occipital.",
    descricaoAnatomica: "Situados na região occipital, próximos à protuberância occipital externa, sobre a fáscia que recobre a origem do músculo trapézio.",
    funcao: ["Filtração da linfa proveniente do couro cabeludo occipital"],
    drenagem: "Drenam a pele e o couro cabeludo da região occipital; sua eferência segue para os linfonodos cervicais superficiais e profundos.",
    correlacaoClinica:
      "Seu aumento palpável é um achado clássico (junto aos linfonodos retroauriculares) na rubéola (sarampo alemão) e em infecções/infestações do couro cabeludo (pediculose, dermatite seborreica infectada, tinha do couro cabeludo).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Linfadenopatia occipital e retroauricular é um achado clássico da rubéola — útil na diferenciação clínica de outras doenças exantemáticas da infância.",
    ],
    fontes: [
      { tema: "Linfadenopatia na rubéola", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei occipitales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-mastoideos",
    meshNames: ["Mastoid_nodes_L", "Mastoid_nodes_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei mastoidei",
    nomeComum: "Linfonodos mastoideos (retroauriculares)",
    resumo: "Grupo situado sobre o processo mastoide, posteriormente à orelha, que drena o couro cabeludo temporoparietal e a face posterior do pavilhão auricular.",
    descricaoAnatomica: "Localizados sobre a inserção do músculo esternocleidomastóideo no processo mastoide, posteriormente ao pavilhão auricular.",
    funcao: ["Filtração da linfa do couro cabeludo temporoparietal, do pavilhão auricular e do meato acústico externo"],
    drenagem: "Drenam para os linfonodos cervicais superficiais e profundos superiores.",
    correlacaoClinica:
      "Assim como os occipitais, seu aumento é clássico na rubéola. Também podem aumentar em otite externa/média com extensão infecciosa e, mais gravemente, na mastoidite aguda (complicação de otite média não tratada), quadro que pode evoluir para abscesso subperiosteal e exige atenção urgente.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Linfadenopatia retroauricular (mastoidea) associada a otalgia e otorreia levanta suspeita de mastoidite — complicação supurativa de otite média que pode exigir mastoidectomia.",
    ],
    fontes: [
      { tema: "Mastoidite aguda como complicação de otite média", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei mastoidei)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-infra-auriculares",
    meshNames: ["Infra-auricular_nodes_L", "Infra-auricular_nodes_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei infra-auriculares",
    nomeComum: "Linfonodos infra-auriculares",
    resumo: "Pequeno grupo situado abaixo do pavilhão auricular, próximo ao ângulo da mandíbula, que participa da drenagem da região parotídea e auricular inferior.",
    descricaoAnatomica: "Localizados inferiormente ao lóbulo da orelha, na transição para a região cervical superior lateral.",
    funcao: ["Filtração da linfa da região auricular inferior e parte da glândula parótida"],
    drenagem: "Drenam para os linfonodos cervicais superficiais e, secundariamente, para os profundos.",
    correlacaoClinica:
      "Seu aumento pode acompanhar infecções da glândula parótida (parotidite) ou do canal auditivo externo, e deve ser diferenciado de linfonodos parotídeos verdadeiros (intraglandulares) na avaliação de massas cervicais altas.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Fazem parte da cadeia de drenagem periparotídea — relevantes na avaliação de linfadenopatia associada a infecções ou tumores da região parotídea.",
    ],
    fontes: [
      { tema: "Drenagem linfática da região parotídea", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei infra-auriculares)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodo-bucinador",
    meshNames: ["Bucinator_node_L", "Bucinator_node_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodus lymphoideus buccinatorius",
    nomeComum: "Linfonodo bucinador (facial)",
    resumo: "Pequeno linfonodo facial situado sobre o músculo bucinador, na drenagem intermediária entre a face e os linfonodos submandibulares.",
    descricaoAnatomica: "Localizado na bochecha, sobre a superfície do músculo bucinador, ao longo do trajeto do ducto parotídeo.",
    funcao: ["Estação intermediária de drenagem linfática da pele e mucosa da bochecha"],
    drenagem: "Drena a pele e mucosa jugal, com eferência para os linfonodos submandibulares.",
    correlacaoClinica:
      "Clinicamente relevante sobretudo como estação intermediária na disseminação linfática de infecções ou neoplasias cutâneas/mucosas da bochecha antes de atingirem os linfonodos submandibulares.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É uma estação linfonodal intermediária relativamente pequena e pouco citada individualmente, mas faz parte da via de drenagem facial para os submandibulares.",
    ],
    fontes: [
      { tema: "Cadeia de drenagem linfática facial", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodus lymphoideus buccinatorius)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-submandibulares",
    meshNames: ["Submandibular_nodes_L", "Submandibular_nodes_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei submandibulares",
    nomeComum: "Linfonodos submandibulares",
    resumo: "Um dos grupos cervicais mais palpáveis e clinicamente relevantes, situado junto à glândula submandibular, drenando grande parte da face, cavidade oral e dentição.",
    descricaoAnatomica: "Localizados no triângulo submandibular, ao redor da glândula submandibular, entre o corpo da mandíbula e o osso hioide.",
    funcao: ["Filtração da linfa da face medial, nariz, lábios, cavidade oral, gengiva, dentes anteriores e glândula submandibular"],
    drenagem: "Drenam para os linfonodos cervicais profundos superiores (especialmente o jugulodigástrico).",
    correlacaoClinica:
      "É um dos grupos mais comumente palpados no exame de cabeça e pescoço, aumentando em infecções odontogênicas, faringoamigdalites, infecções de pele da face e, quando endurecido/fixo/indolor, deve levantar suspeita de neoplasia (metástase de carcinoma oral, de lábio ou cutâneo da face).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Linfonodo endurecido, fixo e indolor em cadeia cervical (incluindo submandibular) é sinal de alerta para malignidade — diferente do linfonodo móvel, elástico e doloroso da linfadenite reativa/infecciosa.",
      "Drena a maior parte da face medial e cavidade oral anterior — primeira estação de metástase de muitos carcinomas orais e labiais.",
    ],
    fontes: [
      { tema: "Diferenciação clínica de linfadenopatia reativa vs. neoplásica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Drenagem linfática da cavidade oral", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei submandibulares)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-submentonianos",
    meshNames: ["Submental_nodes_L", "Submental_nodes_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei submentales",
    nomeComum: "Linfonodos submentonianos",
    resumo: "Grupo mediano sob o mento, entre os ventres anteriores dos músculos digástricos, drenando o lábio inferior, o mento e a ponta da língua.",
    descricaoAnatomica: "Localizados no triângulo submentoniano, entre os ventres anteriores dos músculos digástricos direito e esquerdo, sobre o músculo milo-hióideo.",
    funcao: ["Filtração da linfa do lábio inferior central, mento, assoalho da boca anterior e ponta da língua"],
    drenagem: "Drenam para os linfonodos submandibulares e, diretamente em parte, para os cervicais profundos.",
    correlacaoClinica:
      "São a primeira estação de drenagem de carcinomas do lábio inferior e da ponta da língua — sua avaliação sistemática é essencial no estadiamento cervical de neoplasias orais anteriores.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Primeira estação de drenagem de carcinomas do lábio inferior e da ponta da língua — relevante no estadiamento (N) do câncer oral.",
    ],
    fontes: [
      { tema: "Drenagem linfática do lábio e da língua", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei submentales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-retrofaringeos",
    meshNames: ["Retropharyngeal_nodes_L", "Retropharyngeal_nodes_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei retropharyngeales",
    nomeComum: "Linfonodos retrofaríngeos",
    resumo: "Grupo profundo situado no espaço retrofaríngeo, entre a faringe e a fáscia pré-vertebral, relevante na drenagem da nasofaringe e como via de disseminação de infecções profundas do pescoço.",
    descricaoAnatomica: "Localizados no espaço retrofaríngeo (entre a fáscia bucofaríngea, posterior à faringe, e a fáscia pré-vertebral), não palpáveis ao exame físico por sua localização profunda.",
    funcao: ["Filtração da linfa da nasofaringe, seios paranasais posteriores, palato mole e tuba auditiva"],
    drenagem: "Drenam para os linfonodos cervicais profundos superiores.",
    correlacaoClinica:
      "Seu aumento supurativo (abscesso retrofaríngeo, mais comum em crianças pequenas) é uma emergência potencialmente fatal — pode comprimir a via aérea ou romper para o mediastino (mediastinite), e o espaço retrofaríngeo é uma via clássica de disseminação de infecções profundas do pescoço.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Abscesso retrofaríngeo é uma emergência pediátrica clássica — risco de obstrução de via aérea e disseminação para o mediastino via o espaço retrofaríngeo, que se comunica diretamente com o mediastino posterior.",
      "São a principal via de drenagem linfática da nasofaringe — relevantes no estadiamento do carcinoma de nasofaringe.",
    ],
    fontes: [
      { tema: "Abscesso retrofaríngeo e espaços profundos do pescoço", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Drenagem linfática da nasofaringe", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei retropharyngeales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-cervicais-anteriores-superficiais",
    meshNames: ["Superficial_anterior_cervical_nodes"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei cervicales anteriores superficiales",
    nomeComum: "Linfonodos cervicais anteriores superficiais",
    resumo: "Pequeno grupo mediano ao longo da veia jugular anterior, drenando a pele da região cervical anterior.",
    descricaoAnatomica: "Situados superficialmente ao longo do trajeto da veia jugular anterior, na linha média/paramediana do pescoço.",
    funcao: ["Filtração da linfa da pele da face anterior do pescoço"],
    drenagem: "Drenam para os linfonodos cervicais profundos inferiores/supraclaviculares.",
    correlacaoClinica:
      "Têm relevância clínica limitada isoladamente, mas seu aumento contribui para o diagnóstico diferencial de massas cervicais anteriores superficiais (cistos do ducto tireoglosso, adenopatia reativa a infecções cutâneas locais).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Parte do diagnóstico diferencial de massa cervical anterior mediana, junto ao cisto do ducto tireoglosso e ao istmo tireoidiano.",
    ],
    fontes: [
      { tema: "Massas cervicais anteriores", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei cervicales anteriores superficiales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-supraclaviculares",
    meshNames: ["Supraclavicular_nodes_L", "Supraclavicular_nodes_R"],
    regiao: "Cabeça e pescoço",
    nomeOficial: "Nodi lymphoidei supraclaviculares",
    nomeComum: "Linfonodos supraclaviculares",
    resumo:
      "Grupo na fossa supraclavicular cuja palpação positiva é um dos sinais físicos mais temidos em medicina — recebe drenagem de território torácico e abdominal, sendo um marcador clássico de malignidade visceral disseminada.",
    descricaoAnatomica: "Situados na fossa supraclavicular, posteriormente ao terço inferior do músculo esternocleidomastóideo, próximos à confluência do ducto torácico (à esquerda) com a veia subclávia.",
    funcao: ["Estação final de drenagem de múltiplos territórios torácicos e abdominais antes da entrada na circulação venosa"],
    drenagem:
      "O linfonodo supraclavicular ESQUERDO (nódulo de Virchow) recebe o ducto torácico, drenando praticamente todo o abdome, pelve e hemitórax esquerdo — por isso é sítio clássico de metástase de neoplasias gástricas, pancreáticas, ovarianas e outras abdominais. O DIREITO drena o hemitórax direito, pescoço direito e parte do abdome superior direito via o ducto linfático direito, associando-se mais a neoplasias pulmonares, esofágicas e mediastinais.",
    correlacaoClinica:
      "O sinal de Troisier (linfonodo supraclavicular esquerdo palpável, o nódulo de Virchow) é um achado clássico de neoplasia visceral abdominal avançada, mais associado a câncer gástrico, mas também pancreático, ovariano, testicular e outros. Sua presença geralmente indica doença metastática já disseminada.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Sinal de Troisier / nódulo de Virchow: linfonodo supraclavicular ESQUERDO palpável, sinal clássico (embora não exclusivo) de câncer gástrico metastático, refletindo a drenagem abdominal pelo ducto torácico.",
      "O ducto torácico drena na junção da veia jugular interna esquerda com a veia subclávia esquerda — por isso a lateralidade esquerda predomina no sinal de Virchow.",
    ],
    fontes: [
      { tema: "Sinal de Troisier e nódulo de Virchow", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anatomia do ducto torácico e drenagem supraclavicular", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei supraclaviculares)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-axilares-anteriores",
    meshNames: ["Anterior_axillary_nodes_L", "Anterior_axillary_nodes_R"],
    regiao: "Membro superior",
    nomeOficial: "Nodi lymphoidei axillares anteriores (pectorales)",
    nomeComum: "Linfonodos axilares anteriores (peitorais)",
    resumo:
      "Grupo axilar ao longo da margem inferolateral do músculo peitoral menor, a primeira estação de drenagem da mama e da parede torácica anterolateral — central no estadiamento do câncer de mama.",
    descricaoAnatomica: "Situados ao longo dos vasos torácicos laterais, na margem inferior do músculo peitoral menor, na parede anterior da axila.",
    funcao: ["Filtração da linfa da glândula mamária (a maior parte, cerca de 75%) e da parede torácica anterolateral"],
    drenagem: "Drenam para os linfonodos centrais e apicais da axila, e destes para os supraclaviculares.",
    correlacaoClinica:
      "É o principal grupo de drenagem da mama, tornando-o o alvo primário da biópsia do linfonodo sentinela no estadiamento cirúrgico do câncer de mama — a presença ou ausência de metástase nesse grupo é um dos fatores prognósticos mais importantes da doença.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Recebe cerca de 75% da drenagem linfática mamária — por isso os linfonodos axilares (especialmente os anteriores/peitorais) são o alvo primário da biópsia do linfonodo sentinela no câncer de mama.",
      "O status linfonodal axilar é um dos fatores prognósticos mais importantes no estadiamento (TNM) do câncer de mama.",
    ],
    fontes: [
      { tema: "Drenagem linfática da mama e biópsia do linfonodo sentinela", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Estadiamento do câncer de mama", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei axillares pectorales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-braquiais",
    meshNames: ["Brachial_nodes_L", "Brachial_nodes_R"],
    regiao: "Membro superior",
    nomeOficial: "Nodi lymphoidei axillares brachiales (laterales)",
    nomeComum: "Linfonodos braquiais (axilares laterais)",
    resumo: "Grupo axilar situado medial/posteriormente aos vasos axilares, recebendo a maior parte da drenagem linfática do membro superior.",
    descricaoAnatomica: "Localizados ao longo da face medial dos vasos axilares, na parede lateral da axila.",
    funcao: ["Filtração da linfa de praticamente todo o membro superior (exceto a porção que segue diretamente para os linfonodos infraclaviculares/deltopeitorais)"],
    drenagem: "Drenam para os linfonodos centrais e apicais da axila.",
    correlacaoClinica:
      "Junto aos demais grupos axilares, é removido/amostrado em dissecção axilar por câncer de mama; seu comprometimento por linfedema pós-cirúrgico (após esvaziamento axilar ou radioterapia) é uma complicação crônica comum, causando edema do membro superior de difícil manejo.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É a principal via de drenagem linfática do membro superior — sua remoção cirúrgica (esvaziamento axilar) é a causa mais comum de linfedema crônico de braço, complicação relevante no seguimento pós-câncer de mama.",
    ],
    fontes: [
      { tema: "Linfedema pós-esvaziamento axilar", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei axillares laterales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-infraclaviculares",
    meshNames: ["Infraclavicular_nodes_L", "Infraclavicular_nodes_R"],
    regiao: "Membro superior",
    nomeOficial: "Nodi lymphoidei infraclaviculares (deltopectorales)",
    nomeComum: "Linfonodos infraclaviculares (deltopeitorais)",
    resumo: "Pequeno grupo no sulco deltopeitoral, recebendo drenagem direta da face lateral do braço e antebraço, contornando a cadeia axilar principal.",
    descricaoAnatomica: "Situados no sulco deltopeitoral (entre os músculos deltoide e peitoral maior), acompanhando a veia cefálica.",
    funcao: ["Filtração da linfa da face lateral do braço, antebraço e mão, recebida via os vasos linfáticos que acompanham a veia cefálica"],
    drenagem: "Drenam diretamente para os linfonodos infraclaviculares/apicais da axila ou para os supraclaviculares, contornando parcialmente a cadeia axilar principal.",
    correlacaoClinica:
      "Representam uma via acessória de drenagem do membro superior (ao lado da veia cefálica) — clinicamente relevante como possível via de disseminação de infecções ou neoplasias cutâneas do braço lateral que \"pulam\" a cadeia axilar principal.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Constituem uma via de drenagem acessória do membro superior, acompanhando a veia cefálica — relevante para explicar disseminação atípica de infecção/neoplasia sem passar pela cadeia axilar principal.",
    ],
    fontes: [
      { tema: "Vias acessórias de drenagem linfática do membro superior", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei deltopectorales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-supratrocleares",
    meshNames: ["Supratrochlear_nodes_L", "Supratrochlear_nodes_R"],
    regiao: "Membro superior",
    nomeOficial: "Nodi lymphoidei cubitales (supratrochleares)",
    nomeComum: "Linfonodos supratrocleares (cubitais)",
    resumo: "Pequeno grupo próximo ao epicôndilo medial do úmero, drenando os dedos mínimo e anular e a face medial da mão/antebraço — um dos poucos grupos linfáticos superficiais palpáveis do braço.",
    descricaoAnatomica: "Situados poucos centímetros proximalmente ao epicôndilo medial do úmero, junto à veia basílica, na face medial do braço distal.",
    funcao: ["Filtração da linfa do 4º e 5º dedos, da face medial da mão e da porção medial do antebraço"],
    drenagem: "Drenam para os linfonodos braquiais/axilares.",
    correlacaoClinica:
      "São um dos poucos grupos linfáticos do membro superior normalmente palpáveis quando aumentados, notavelmente em infecções da mão/dedos mediais e classicamente associados (junto à linfadenopatia generalizada) a certas infecções sistêmicas, como sífilis secundária e sarcoidose.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É um dos poucos grupos linfáticos do membro superior normalmente palpáveis — sua investigação faz parte do exame de linfadenopatia generalizada (sífilis secundária, sarcoidose, linfoma).",
    ],
    fontes: [
      { tema: "Linfadenopatia epitroclear em doenças sistêmicas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei cubitales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-epigastricos-inferiores",
    meshNames: ["Inferior_epigastric_nodes_L", "Inferior_epigastric_nodes_R"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei epigastrici inferiores",
    nomeComum: "Linfonodos epigástricos inferiores",
    resumo: "Pequeno grupo acompanhando os vasos epigástricos inferiores na parede abdominal anterior, drenando a musculatura e o peritônio parietal dessa região.",
    descricaoAnatomica: "Situados junto aos vasos epigástricos inferiores, na face posterior do músculo reto do abdome, próximos ao anel inguinal profundo.",
    funcao: ["Filtração da linfa da parede abdominal anterior inferior e de estruturas peritoneais adjacentes"],
    drenagem: "Drenam para os linfonodos ilíacos externos.",
    correlacaoClinica:
      "Têm relevância cirúrgica pela proximidade com o anel inguinal profundo e os vasos epigástricos inferiores — marco anatômico usado na classificação e reparo de hérnias inguinais (diretas versus indiretas, em relação aos vasos epigástricos inferiores).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Situam-se próximos ao ponto de referência clássico usado para diferenciar hérnia inguinal direta (medial aos vasos epigástricos inferiores) de indireta (lateral a eles).",
    ],
    fontes: [
      { tema: "Anatomia da região inguinal e hérnias", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei epigastrici inferiores)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-pancreaticos-superiores",
    meshNames: ["Superior_pancreatic_nodes"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei pancreatici superiores",
    nomeComum: "Linfonodos pancreáticos superiores",
    resumo: "Grupo ao longo da margem superior do pâncreas, relevante estação de drenagem e de estadiamento no câncer de pâncreas e nas neoplasias gástricas proximais.",
    descricaoAnatomica: "Situados ao longo da margem superior do corpo e cauda do pâncreas, próximos à artéria esplênica.",
    funcao: ["Filtração da linfa do corpo/cauda do pâncreas e de parte do estômago proximal"],
    drenagem: "Drenam para os linfonodos celíacos, na origem do tronco celíaco.",
    correlacaoClinica:
      "São uma das estações linfonodais avaliadas no estadiamento cirúrgico do adenocarcinoma pancreático e de neoplasias gástricas proximais — seu comprometimento influencia diretamente a ressecabilidade e o prognóstico.",
    doencasRelacionadas: [{ slug: "pancreatite-aguda", nome: "Pancreatite aguda" }],
    pontosDeProva: [
      "Compõem uma das estações linfonodais avaliadas no estadiamento do câncer de pâncreas — seu acometimento é fator prognóstico relevante em cirurgia oncológica pancreática.",
    ],
    fontes: [
      { tema: "Estadiamento linfonodal do câncer de pâncreas", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei pancreatici superiores)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodo-cistico",
    meshNames: ["Cystic_node"],
    regiao: "Tronco",
    nomeOficial: "Nodus lymphoideus cysticus",
    nomeComum: "Linfonodo cístico (de Mascagni/Calot)",
    resumo:
      "Pequeno linfonodo constante no triângulo hepatocístico, um marco cirúrgico clássico na colecistectomia laparoscópica para identificação segura da artéria cística e do ducto cístico.",
    descricaoAnatomica:
      "Localizado no ângulo entre o ducto cístico e o ducto hepático comum, dentro do triângulo de Calot (delimitado pelo ducto cístico, ducto hepático comum e margem inferior do fígado), próximo à origem da artéria cística.",
    funcao: ["Filtração da linfa da vesícula biliar e vias biliares extra-hepáticas proximais"],
    drenagem: "Drena para os linfonodos hepáticos, ao longo da artéria hepática.",
    correlacaoClinica:
      "É um marco anatômico cirúrgico clássico na colecistectomia laparoscópica: sua identificação ajuda a localizar com segurança a artéria cística e o ducto cístico dentro do triângulo de Calot, reduzindo o risco de lesão iatrogênica da via biliar principal. Pode estar aumentado/inflamado em colecistite aguda.",
    doencasRelacionadas: [
      { slug: "colecistite", nome: "Colecistite" },
      { slug: "colelitiase", nome: "Colelitíase" },
    ],
    pontosDeProva: [
      "O linfonodo cístico é um marco cirúrgico clássico dentro do triângulo de Calot, usado para localizar com segurança a artéria cística durante a colecistectomia laparoscópica.",
    ],
    fontes: [
      { tema: "Triângulo de Calot e marcos da colecistectomia laparoscópica", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodus lymphoideus cysticus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-pre-cecais",
    meshNames: ["Precaecal_nodes"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei precaecales",
    nomeComum: "Linfonodos pré-cecais",
    resumo: "Grupo situado anteriormente ao ceco, drenando a porção terminal do íleo e a região cecal anterior — parte da cadeia ileocólica.",
    descricaoAnatomica: "Localizados na face anterior do ceco, próximos à valva ileocecal, ao longo dos vasos ileocólicos.",
    funcao: ["Filtração da linfa do íleo terminal e da face anterior do ceco"],
    drenagem: "Drenam para os linfonodos ileocólicos e, destes, para os mesentéricos superiores.",
    correlacaoClinica:
      "Fazem parte da cadeia linfonodal avaliada (junto aos retrocecais) no estadiamento cirúrgico de neoplasias do ceco e do apêndice, e podem estar reativos/aumentados em processos inflamatórios da região ileocecal, incluindo apendicite e doença de Crohn ileal.",
    doencasRelacionadas: [
      { slug: "apendicite-aguda", nome: "Apendicite aguda" },
      { slug: "doenca-de-crohn", nome: "Doença de Crohn" },
    ],
    pontosDeProva: [
      "Linfadenite mesentérica reativa nessa cadeia (frequentemente viral, em crianças) é um importante diagnóstico diferencial de apendicite aguda — mimetiza dor em fossa ilíaca direita sem justificar cirurgia.",
    ],
    fontes: [
      { tema: "Linfadenite mesentérica como diferencial de apendicite", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei precaecales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-retrocecais",
    meshNames: ["Retrocaecal_nodes"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei retrocaecales",
    nomeComum: "Linfonodos retrocecais",
    resumo: "Grupo posterior ao ceco, complementando a drenagem pré-cecal na região ileocecal — relevante em conjunto com a posição retrocecal comum do apêndice vermiforme.",
    descricaoAnatomica: "Localizados posteriormente ao ceco, na goteira parietocólica direita.",
    funcao: ["Filtração da linfa da face posterior do ceco e de estruturas retroperitoneais adjacentes"],
    drenagem: "Drenam para os linfonodos ileocólicos e mesentéricos superiores.",
    correlacaoClinica:
      "Relevantes na avaliação de processos inflamatórios/neoplásicos do ceco e do apêndice retrocecal (a posição mais comum do apêndice vermiforme), contribuindo para apresentações atípicas de apendicite com dor no flanco em vez do clássico quadrante inferior direito anterior.",
    doencasRelacionadas: [{ slug: "apendicite-aguda", nome: "Apendicite aguda" }],
    pontosDeProva: [
      "Acompanham a posição retrocecal do apêndice (a mais comum), contribuindo para o entendimento de apresentações atípicas de apendicite com dor de flanco.",
    ],
    fontes: [
      { tema: "Posição retrocecal do apêndice e apresentação atípica", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei retrocaecales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-retroaorticos",
    meshNames: ["Retro-aortic_nodes"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei retroaortici (lumbales)",
    nomeComum: "Linfonodos retroaórticos (lombares)",
    resumo: "Grupo posterior à aorta abdominal, parte da cadeia lombar/para-aórtica — estação central de drenagem retroperitoneal e via clássica de disseminação de tumores de testículo e rim.",
    descricaoAnatomica: "Situados posteriormente à aorta abdominal, ao nível lombar, entre os pilares do diafragma e a bifurcação aórtica.",
    funcao: ["Filtração da linfa retroperitoneal profunda antes de convergir para as cisternas do quilo/ducto torácico"],
    drenagem: "Drenam para a cisterna do quilo, na origem do ducto torácico.",
    correlacaoClinica:
      "A cadeia para-aórtica/lombar (incluindo os retroaórticos) é a via clássica de disseminação metastática do câncer de testículo (que segue a drenagem embriológica original das gônadas, não a drenagem inguinal da bolsa escrotal) e também do carcinoma de células renais — seu estadiamento por tomografia/ressonância é rotina nesses cânceres.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O câncer de testículo dissemina-se primariamente para os linfonodos para-aórticos/retroaórticos (via drenagem embriológica gonadal), NÃO para os inguinais — diferente do que a localização escrotal poderia sugerir.",
    ],
    fontes: [
      { tema: "Drenagem linfática do testículo e estadiamento do câncer testicular", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei lumbales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-retrocavais",
    meshNames: ["Retrocaval_nodes"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei retrocavales (lumbales)",
    nomeComum: "Linfonodos retrocavais (lombares)",
    resumo: "Grupo posterior à veia cava inferior, simétrico aos retroaórticos do lado direito, parte da mesma cadeia lombar de drenagem retroperitoneal profunda.",
    descricaoAnatomica: "Situados posteriormente à veia cava inferior, ao nível lombar.",
    funcao: ["Filtração da linfa retroperitoneal do lado direito, incluindo parte da drenagem renal e gonadal direita"],
    drenagem: "Drenam para a cisterna do quilo, junto aos demais linfonodos lombares.",
    correlacaoClinica:
      "Assim como os retroaórticos, fazem parte da via de disseminação de tumores retroperitoneais (renais, testiculares/ovarianos do lado direito) — seu estadiamento acompanha o mesmo protocolo de imagem da cadeia para-aórtica.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Compõem, junto aos retroaórticos, a cadeia lombar de drenagem retroperitoneal — relevantes no estadiamento de tumores renais e gonadais.",
    ],
    fontes: [
      { tema: "Cadeia linfonodal lombar retroperitoneal", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei lumbales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-iliacos-comuns-mediais",
    meshNames: ["Medial_common_iliac_nodes"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei iliaci communes mediales",
    nomeComum: "Linfonodos ilíacos comuns mediais",
    resumo: "Grupo medial à cadeia ilíaca comum, recebendo a convergência da drenagem ilíaca externa e interna antes de ascender para os para-aórticos.",
    descricaoAnatomica: "Situados medialmente aos vasos ilíacos comuns, próximos à bifurcação aórtica e ao promontório sacral.",
    funcao: ["Estação de convergência da drenagem pélvica (ilíaca externa e interna) antes de ascender ao retroperitônio lombar"],
    drenagem: "Drenam para os linfonodos para-aórticos/lombares.",
    correlacaoClinica:
      "São uma estação obrigatória no estadiamento cirúrgico/radiológico de neoplasias pélvicas (colo do útero, próstata, bexiga, reto), pois recebem a confluência de praticamente toda a drenagem pélvica antes desta ascender ao abdome.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Recebem a confluência de toda a drenagem linfática pélvica (ilíaca externa + interna) antes de ascender ao retroperitônio — estação obrigatória em estadiamento de câncer pélvico.",
    ],
    fontes: [
      { tema: "Estadiamento linfonodal de neoplasias pélvicas", fonte: "Williams Obstetrics, 26ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei iliaci communes)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-iliacos-externos-mediais",
    meshNames: ["Medial_external_iliac_nodes_L", "Medial_external_iliac_nodes_R"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei iliaci externi mediales",
    nomeComum: "Linfonodos ilíacos externos mediais",
    resumo: "Grupo medial aos vasos ilíacos externos, estação intermediária entre a drenagem inguinal profunda e a cadeia ilíaca comum — central no estadiamento de neoplasias ginecológicas e urológicas pélvicas.",
    descricaoAnatomica: "Situados medialmente aos vasos ilíacos externos, no trajeto entre o ligamento inguinal e a bifurcação dos vasos ilíacos comuns.",
    funcao: ["Recebem a drenagem ascendente dos linfonodos inguinais profundos, além de parte da drenagem da bexiga, próstata/útero e colo uterino"],
    drenagem: "Drenam para os linfonodos ilíacos comuns.",
    correlacaoClinica:
      "São uma das principais estações avaliadas (por imagem ou linfadenectomia) no estadiamento do câncer de colo do útero, de próstata e de bexiga — seu comprometimento altera significativamente o estadiamento e a conduta terapêutica nessas neoplasias.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Estação central no estadiamento cirúrgico do câncer de colo do útero — a linfadenectomia pélvica frequentemente inclui essa cadeia.",
    ],
    fontes: [
      { tema: "Estadiamento e linfadenectomia pélvica no câncer de colo uterino", fonte: "Williams Obstetrics, 26ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei iliaci externi)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-pos-vesicais",
    meshNames: ["Postvesical_nodes"],
    regiao: "Tronco",
    nomeOficial: "Nodi lymphoidei postvesicales",
    nomeComum: "Linfonodos pós-vesicais",
    resumo: "Pequeno grupo posterior à bexiga urinária, parte da drenagem visceral pélvica profunda, relevante no estadiamento de neoplasias vesicais, prostáticas e retais baixas.",
    descricaoAnatomica: "Localizados posteriormente à bexiga urinária, próximos às vesículas seminais (homens) ou ao colo uterino/vagina superior (mulheres).",
    funcao: ["Filtração da linfa da face posterior da bexiga e de estruturas pélvicas viscerais adjacentes"],
    drenagem: "Drenam para os linfonodos ilíacos internos e externos.",
    correlacaoClinica:
      "Compõem uma das estações avaliadas no estadiamento cirúrgico de neoplasias vesicais invasivas (cistectomia radical com linfadenectomia pélvica) e de neoplasias prostáticas/retais localmente avançadas.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Fazem parte do território de linfadenectomia pélvica padrão na cistectomia radical por câncer de bexiga invasivo.",
    ],
    fontes: [
      { tema: "Linfadenectomia pélvica na cistectomia radical", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei postvesicales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-inguinais-profundos",
    meshNames: [
      "Intermediate_deep_inguinal_node_L",
      "Intermediate_deep_inguinal_node_R",
      "Proximal_deep_inguinal_node_L",
      "Proximal_deep_inguinal_node_R",
    ],
    regiao: "Membro inferior",
    nomeOficial: "Nodi lymphoidei inguinales profundi",
    nomeComum: "Linfonodos inguinais profundos",
    resumo:
      "Grupo situado medialmente à veia femoral, dentro da bainha femoral, recebendo a drenagem profunda do membro inferior e a via final da drenagem peniana/clitoridiana — inclui o linfonodo de Cloquet, no ápice do canal femoral.",
    descricaoAnatomica:
      "Localizados medialmente à veia femoral, dentro da bainha femoral (fáscia que envolve os vasos femorais), estendendo-se do ligamento inguinal até o canal femoral — seu membro mais superior, no anel femoral, é classicamente chamado linfonodo de Cloquet (ou de Rosenmüller).",
    funcao: ["Recebem a drenagem profunda do membro inferior (acompanhando os vasos femorais) e a drenagem glandar do pênis/clitóris"],
    drenagem: "Drenam para os linfonodos ilíacos externos, atravessando o canal femoral.",
    correlacaoClinica:
      "O linfonodo de Cloquet, no ápice do canal femoral, é um marco cirúrgico clássico no reparo de hérnia femoral (a hérnia emerge inferior e lateral a ele, diferentemente da hérnia inguinal). O comprometimento dos inguinais profundos é fator prognóstico central no câncer de pênis e de vulva, e sua dissecção (linfadenectomia inguinal profunda) é acompanhada de risco significativo de linfedema de membro inferior.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O linfonodo de Cloquet, no ápice do canal femoral, é o marco cirúrgico usado para diferenciar hérnia femoral (abaixo e lateral a ele) de hérnia inguinal.",
      "Linfadenectomia inguinal profunda (indicada em câncer de pênis/vulva com comprometimento nodal) tem alto risco de linfedema crônico do membro inferior.",
    ],
    fontes: [
      { tema: "Linfonodo de Cloquet e hérnia femoral", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Linfadenectomia inguinal no câncer de pênis e vulva", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei inguinales profundi)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-popliteos-superficiais",
    meshNames: ["Superficial_popliteal_nodes_L", "Superficial_popliteal_nodes_R"],
    regiao: "Membro inferior",
    nomeOficial: "Nodi lymphoidei poplitei superficiales",
    nomeComum: "Linfonodos poplíteos superficiais",
    resumo: "Pequeno grupo na fossa poplítea, associado à terminação da veia safena parva, drenando a face lateral do pé e a perna posterolateral.",
    descricaoAnatomica: "Localizados na fossa poplítea, próximos à junção safeno-poplítea (onde a veia safena parva drena para a veia poplítea).",
    funcao: ["Filtração da linfa da face lateral do pé, do calcanhar e da face posterolateral da perna"],
    drenagem: "Drenam para os linfonodos poplíteos profundos e, destes, para os inguinais profundos.",
    correlacaoClinica:
      "Seu aumento acompanha infecções do pé lateral/calcanhar (celulite, infecções fúngicas complicadas) e deve ser diferenciado de cistos poplíteos (de Baker) e outras massas da fossa poplítea no exame do joelho.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Drenam a face lateral do pé e do calcanhar — considerar no diagnóstico diferencial de massas/aumento de volume na fossa poplítea, junto ao cisto de Baker.",
    ],
    fontes: [
      { tema: "Diagnóstico diferencial de massas poplíteas", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei poplitei superficiales)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-popliteos-profundos",
    meshNames: ["Deep_popliteal_nodes_L", "Deep_popliteal_nodes_R"],
    regiao: "Membro inferior",
    nomeOficial: "Nodi lymphoidei poplitei profundi",
    nomeComum: "Linfonodos poplíteos profundos",
    resumo: "Grupo profundo na fossa poplítea, ao redor dos vasos poplíteos, recebendo a drenagem profunda da perna e do pé antes de ascender à coxa.",
    descricaoAnatomica: "Situados profundamente na fossa poplítea, ao redor da artéria e veia poplíteas.",
    funcao: ["Filtração da linfa profunda da perna e do pé, incluindo parte da drenagem articular do joelho"],
    drenagem: "Drenam para os linfonodos inguinais profundos, ascendendo junto aos vasos femorais.",
    correlacaoClinica:
      "Podem estar envolvidos em processos infecciosos profundos da perna (celulite extensa, osteomielite tibial/fibular) e em artrite séptica ou inflamatória do joelho, cuja drenagem linfática articular parcialmente converge para esse grupo.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Recebem parte da drenagem linfática da articulação do joelho — relevantes na avaliação de artrite séptica/inflamatória com linfadenopatia poplítea reativa.",
    ],
    fontes: [
      { tema: "Drenagem linfática do joelho", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nodi lymphoidei poplitei profundi)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-tibiais-anteriores",
    meshNames: ["Anterior_tibial_node_L", "Anterior_tibial_node_R"],
    regiao: "Membro inferior",
    nomeOficial: "Nodus lymphoideus tibialis anterior",
    nomeComum: "Linfonodo tibial anterior",
    resumo: "Pequeno linfonodo isolado ao longo dos vasos tibiais anteriores, na perna, drenando o compartimento anterior da perna e o dorso do pé.",
    descricaoAnatomica: "Situado na membrana interóssea da perna, acompanhando os vasos tibiais anteriores, próximo à sua origem a partir da artéria poplítea.",
    funcao: ["Filtração da linfa do compartimento anterior da perna e do dorso do pé"],
    drenagem: "Drena para os linfonodos poplíteos profundos.",
    correlacaoClinica:
      "Tem relevância clínica isolada limitada, mas participa da drenagem de infecções/traumas do compartimento anterior da perna e do dorso do pé, incluindo casos de síndrome compartimental anterior com celulite associada.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Faz parte da drenagem profunda do compartimento anterior da perna, acompanhando os vasos tibiais anteriores desde sua origem na artéria poplítea.",
    ],
    fontes: [
      { tema: "Compartimentos da perna e drenagem vascular/linfática associada", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodus lymphoideus tibialis anterior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "linfonodos-tibiais-posteriores",
    meshNames: ["Posterior_tibial_node_L", "Posterior_tibial_node_R"],
    regiao: "Membro inferior",
    nomeOficial: "Nodus lymphoideus tibialis posterior",
    nomeComum: "Linfonodo tibial posterior",
    resumo: "Pequeno linfonodo isolado ao longo dos vasos tibiais posteriores, drenando o compartimento posterior profundo da perna e parte da planta do pé.",
    descricaoAnatomica: "Situado no compartimento posterior profundo da perna, acompanhando os vasos tibiais posteriores.",
    funcao: ["Filtração da linfa do compartimento posterior profundo da perna e de parte da drenagem plantar"],
    drenagem: "Drena para os linfonodos poplíteos profundos.",
    correlacaoClinica:
      "Assim como o tibial anterior, participa da drenagem de processos infecciosos profundos da perna (celulite, tenossinovite dos tendões flexores) e tem relevância limitada como achado isolado no exame físico de rotina.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Acompanha os vasos tibiais posteriores no compartimento posterior profundo da perna — relevante em processos infecciosos profundos dessa região, incluindo tenossinovite dos flexores.",
    ],
    fontes: [
      { tema: "Compartimentos da perna e drenagem vascular/linfática associada", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nodus lymphoideus tibialis posterior)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
