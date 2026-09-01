import type { OrgaoDigestivo } from "./types";

// Modelo 3D: coleção "Digestive system" do atlas Z-Anatomy (CC BY-SA 4.0,
// baseado em BodyParts3D/DBCLS), extraída e comprimida com o mesmo pipeline
// usado nos demais sistemas. 75 estruturas nomeadas individualmente.
export const DIGESTIVE_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/digestive.glb";

export const orgaosDigestivos: OrgaoDigestivo[] = [
  {
    slug: "lingua",
    meshNames: ["Tongue"],
    regiao: "Cavidade oral",
    nomeOficial: "Lingua",
    nomeComum: "Língua",
    resumo:
      "Órgão muscular altamente móvel que ocupa o assoalho da boca, essencial para a mastigação, deglutição, articulação da fala e para a gustação — sua inervação combinada (motora, sensitiva geral e gustativa) por diferentes nervos cranianos é um dos temas mais cobrados em prova.",
    descricaoAnatomica:
      "Dividida por um sulco em V (sulco terminal) em dois terços anteriores (corpo, móvel, derivado embriologicamente do primeiro arco faríngeo) e um terço posterior (raiz, derivado dos arcos 3º e 4º). A superfície dorsal do corpo é coberta por papilas linguais (filiformes, fungiformes, valadas/circunvaladas e foliadas), enquanto a raiz contém a tonsila lingual.",
    funcao: [
      "Mastigação e formação do bolo alimentar",
      "Deglutição (empurra o bolo contra o palato e a faringe)",
      "Gustação (papilas gustativas)",
      "Articulação da fala",
    ],
    relacoesAnatomicas:
      "Assenta sobre o assoalho da boca (músculos milo-hióideo e genio-hióideo), com o osso hioide como base esquelética indireta; a epiglote situa-se posteriormente à sua raiz.",
    correlacaoClinica:
      "A inervação da língua é um clássico de prova por sua complexidade: motricidade pelo nervo hipoglosso (XII, exceto o palatoglosso, inervado pelo vago); sensibilidade geral dos 2/3 anteriores pelo nervo lingual (ramo do trigêmeo, V3) e do 1/3 posterior pelo glossofaríngeo (IX); gustação dos 2/3 anteriores pela corda do tímpano (ramo do facial, VII) e do 1/3 posterior pelo glossofaríngeo (IX). Na lesão do hipoglosso, a língua desvia-se PARA o lado lesado ao ser protruída (o músculo genioglosso são lesado deixa de empurrá-la para o lado oposto).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Motricidade: hipoglosso (XII), exceto o palatoglosso (vago, X). Na lesão do XII, a língua desvia para o lado lesado ao ser protruída.",
      "Sensibilidade geral 2/3 anteriores: nervo lingual (V3). Sensibilidade geral 1/3 posterior: glossofaríngeo (IX).",
      "Gustação 2/3 anteriores: corda do tímpano (VII). Gustação 1/3 posterior: glossofaríngeo (IX).",
    ],
    fontes: [
      { tema: "Inervação motora, sensitiva e gustativa da língua", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Desenvolvimento embriológico a partir dos arcos faríngeos", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Lingua)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "uvula-do-palato",
    meshNames: ["Uvula_of_palate"],
    regiao: "Cavidade oral",
    nomeOficial: "Uvula palatina",
    nomeComum: "Úvula do palato",
    resumo:
      "Projeção cônica de tecido mole na borda posterior do palato mole, cujo movimento simétrico ao se elevar é um teste clássico e rápido de integridade do nervo vago no exame neurológico.",
    descricaoAnatomica:
      "Estrutura mediana composta pelo músculo úvula, envolto por mucosa, suspensa da borda livre do palato mole (véu palatino), na linha média entre os dois arcos palatoglossos.",
    funcao: [
      "Contribui para o fechamento velofaríngeo durante a deglutição e a fala, evitando refluxo nasal de alimentos/líquidos",
    ],
    relacoesAnatomicas: "Continua-se com o palato mole, entre os pilares amigdalianos anterior e posterior.",
    correlacaoClinica:
      "No teste do reflexo do vômito/elevação do palato (\"diga aaah\"), a úvula deve se elevar simetricamente na linha média; em lesão unilateral do nervo vago (X), a úvula desvia para o lado SÃO (o lado paralisado não se eleva, sendo puxado pelo lado saudável) — sinal clássico de \"sinal da cortina\".",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Sinal da cortina: na paralisia unilateral do vago, a úvula desvia para o lado SÃO durante a fonação, pois o lado paralisado não se eleva.",
    ],
    fontes: [
      { tema: "Sinal da cortina e exame do nervo vago", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Uvula palatina)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "gengiva",
    meshNames: ["Gingiva"],
    regiao: "Cavidade oral",
    nomeOficial: "Gingiva",
    nomeComum: "Gengiva",
    resumo:
      "Mucosa mastigatória firmemente aderida que recobre os processos alveolares da maxila e mandíbula, envolvendo o colo dos dentes — a primeira linha de defesa periodontal contra a colonização bacteriana.",
    descricaoAnatomica:
      "Tecido mucoso queratinizado, rosa-pálido, firmemente aderido ao periósteo subjacente (diferente da mucosa alveolar mais frouxa e avermelhada adjacente), circundando o colo de cada dente e formando o sulco gengival.",
    funcao: ["Proteção mecânica dos processos alveolares e do periodonto contra trauma mastigatório e invasão bacteriana"],
    relacoesAnatomicas: "Contínua com o ligamento periodontal, o osso alveolar e a mucosa alveolar adjacente.",
    correlacaoClinica:
      "A gengivite (inflamação gengival por placa bacteriana) é reversível e extremamente comum; sua progressão para periodontite (com perda de inserção e osso alveolar) é uma das principais causas de perda dentária em adultos e tem associação epidemiológica com doença cardiovascular e diabetes mal controlado.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Gengivite (reversível, só tecido mole) versus periodontite (perda de inserção e osso, irreversível) — distinção fundamental na prática odontológica e clínica.",
    ],
    fontes: [
      { tema: "Gengivite e progressão para periodontite", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Gingiva)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "glandula-parotida",
    meshNames: [
      "Parotid_gland_L",
      "Parotid_gland_R",
      "Parotid_duct_L",
      "Parotid_duct_R",
      "Accessory_parotid_gland_L",
      "Accessory_parotid_gland_R",
    ],
    regiao: "Cavidade oral",
    nomeOficial: "Glandula parotidea",
    nomeComum: "Glândula parótida",
    resumo:
      "Maior das glândulas salivares, puramente serosa, situada anteriormente à orelha — sua proximidade íntima com o nervo facial, que a atravessa, é a base de toda a cirurgia de parotidectomia.",
    descricaoAnatomica:
      "Localizada na loja parotídea, entre o ramo da mandíbula e o músculo esternocleidomastóideo, estendendo-se da região zigomática ao ângulo da mandíbula. Seu ducto (ducto parotídeo, ou de Stensen) cruza superficialmente o músculo masseter e perfura o músculo bucinador para se abrir na mucosa jugal, ao nível do 2º molar superior.",
    funcao: ["Produção de saliva serosa (rica em enzimas, como a amilase salivar/ptialina)"],
    relacoesAnatomicas:
      "O nervo facial (VII) atravessa a glândula, dividindo-a (cirurgicamente, não anatomicamente) em lobos superficial e profundo; a artéria carótida externa e a veia retromandibular também passam através da glândula.",
    correlacaoClinica:
      "O nervo facial que atravessa a glândula é a estrutura mais crítica na parotidectomia — sua lesão causa paralisia facial periférica. A caxumba (parotidite viral) causa aumento doloroso bilateral da parótida; tumores parotídeos (mais comumente o adenoma pleomórfico, benigno) tipicamente se apresentam como massa indolor na região pré-auricular.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo facial (VII) atravessa a glândula parótida, dividindo-a cirurgicamente em lobos superficial e profundo — estrutura de maior risco em parotidectomia.",
      "O ducto parotídeo (de Stensen) se abre na mucosa jugal ao nível do 2º molar superior — ponto de referência clássico no exame intraoral.",
    ],
    fontes: [
      { tema: "Relação do nervo facial com a glândula parótida", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Adenoma pleomórfico e tumores de parótida", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Glandula parotidea)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "glandula-submandibular",
    meshNames: ["Submandibular_gland_L", "Submandibular_gland_R", "Submandibular_duct_L", "Submandibular_duct_R"],
    regiao: "Cavidade oral",
    nomeOficial: "Glandula submandibularis",
    nomeComum: "Glândula submandibular",
    resumo:
      "Glândula mista (serosa e mucosa), a segunda maior das salivares, cujo longo ducto contorna o assoalho da boca — trajeto que a torna a glândula salivar mais frequentemente afetada por cálculos (sialolitíase).",
    descricaoAnatomica:
      "Situada no triângulo submandibular do pescoço, curva-se ao redor da margem posterior do músculo milo-hióideo; seu ducto (ducto submandibular, ou de Wharton) percorre um longo trajeto ao longo do assoalho da boca até se abrir na carúncula sublingual, lateral ao frênulo da língua.",
    funcao: ["Produção de saliva mista (serosa e mucosa), responsável por cerca de 70% do volume salivar em repouso"],
    relacoesAnatomicas: "O nervo lingual cruza o ducto submandibular (passando abaixo e depois acima dele) no assoalho da boca.",
    correlacaoClinica:
      "É a glândula salivar mais comumente acometida por cálculos salivares (sialolitíase), devido à combinação de seu ducto longo, trajeto ascendente contra a gravidade e saliva mais viscosa (rica em mucina) — causa dor e aumento de volume que piora ao comer (estimulação salivar contra um ducto obstruído).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É a glândula salivar mais frequentemente afetada por sialolitíase (cálculos), pelo trajeto longo e ascendente do ducto submandibular e pela saliva mais viscosa.",
      "O ducto submandibular abre-se na carúncula sublingual, lateral ao frênulo da língua.",
    ],
    fontes: [
      { tema: "Sialolitíase da glândula submandibular", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Trajeto do ducto submandibular e relação com o nervo lingual", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Glandula submandibularis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "glandula-sublingual",
    meshNames: ["Sublingual_gland_L", "Sublingual_gland_R"],
    regiao: "Cavidade oral",
    nomeOficial: "Glandula sublingualis",
    nomeComum: "Glândula sublingual",
    resumo:
      "A menor e mais superficial das três glândulas salivares principais, predominantemente mucosa, situada diretamente sob a mucosa do assoalho da boca.",
    descricaoAnatomica:
      "Localizada no assoalho da boca, entre a mandíbula e o músculo genioglosso, abaixo da mucosa sublingual — não possui um ducto único principal, mas múltiplos pequenos ductos (ductos sublinguais menores) que se abrem diretamente no assoalho da boca ao longo da prega sublingual.",
    funcao: ["Produção de saliva predominantemente mucosa (lubrificante)"],
    relacoesAnatomicas: "Situa-se logo abaixo da mucosa do assoalho da boca, próxima à porção anterior do ducto submandibular.",
    correlacaoClinica:
      "A obstrução de um ducto sublingual menor (ou de uma glândula salivar menor adjacente) é a causa mais comum de mucocele (rânula, quando afeta especificamente a região sublingual) — um acúmulo cístico de muco por extravasamento, comum na prática clínica geral e odontológica.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É a única das três glândulas salivares principais sem um ducto único e dominante — drena por múltiplos ductos sublinguais menores.",
      "A rânula (mucocele sublingual) resulta do extravasamento de muco por obstrução/trauma de um desses ductos.",
    ],
    fontes: [
      { tema: "Rânula e mucoceles salivares", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Glandula sublingualis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "dentes-incisivos",
    meshNames: [
      "Upper_medial_incisor_L",
      "Upper_medial_incisor_R",
      "Upper_lateral_incisor_L",
      "Upper_lateral_incisor_R",
      "Lower_medial_incisor_L",
      "Lower_medial_incisor_R",
      "Lower_lateral_incisor_L",
      "Lower_lateral_incisor_R",
    ],
    regiao: "Cavidade oral",
    nomeOficial: "Dentes incisivi",
    nomeComum: "Dentes incisivos",
    resumo:
      "Dentes anteriores de coroa em forma de cinzel e borda cortante única, especializados no corte inicial do alimento — os primeiros dentes permanentes a irromper, por volta dos 6-8 anos.",
    descricaoAnatomica:
      "Oito dentes (dois incisivos centrais e dois laterais em cada arcada) com raiz única, cônica, e coroa achatada vestibulolingualmente com borda incisal reta.",
    funcao: ["Corte e incisão do alimento na fase inicial da mastigação"],
    relacoesAnatomicas: "Alojados nos alvéolos da porção anterior dos processos alveolares da maxila e da mandíbula.",
    correlacaoClinica:
      "São os dentes mais frequentemente envolvidos em trauma dentoalveolar (avulsão, fratura coronária) por sua posição anterior exposta — a avulsão de um incisivo permanente é uma emergência odontológica em que o tempo até o reimplante (idealmente menos de 60 minutos, dente mantido em leite ou solução salina) determina o prognóstico.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Avulsão de incisivo permanente é emergência odontológica — reimplante precoce (idealmente <60 min, dente conservado em leite) maximiza a chance de sobrevida do dente.",
    ],
    fontes: [
      { tema: "Manejo de avulsão dentária", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Dentes incisivi)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "dentes-caninos",
    meshNames: ["Upper_canine_L", "Upper_canine_R", "Lower_canine_L", "Lower_canine_R"],
    regiao: "Cavidade oral",
    nomeOficial: "Dentes canini",
    nomeComum: "Dentes caninos",
    resumo:
      "Dentes de raiz mais longa e robusta de toda a arcada, com coroa pontiaguda especializada em perfurar e rasgar o alimento — posicionados nos \"cantos\" da arcada, guiando a oclusão lateral.",
    descricaoAnatomica: "Quatro dentes (um em cada quadrante), com raiz única, a mais longa entre todos os dentes, e coroa com uma única cúspide pontiaguda.",
    funcao: ["Perfuração e rasgo do alimento", "Guia de desoclusão lateral da mandíbula (guia canina)"],
    relacoesAnatomicas: "Situados entre os incisivos laterais e os pré-molares, na porção mais anterior/lateral do arco dentário.",
    correlacaoClinica:
      "A raiz do canino superior é a mais longa de toda a dentição e se projeta na chamada \"eminência canina\" do osso maxilar — infecções odontogênicas nessa região podem se disseminar para o espaço canino da face, causando celulite periorbital.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O canino superior tem a raiz mais longa de toda a dentição humana — relevante para risco de disseminação de infecção odontogênica ao espaço canino da face.",
    ],
    fontes: [
      { tema: "Espaços fasciais odontogênicos e disseminação de infecção", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Dentes canini)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "dentes-pre-molares",
    meshNames: [
      "Upper_first_premolar_L",
      "Upper_first_premolar_R",
      "Upper_second_premolar_L",
      "Upper_second_premolar_R",
      "Lower_first_premolar_L",
      "Lower_first_premolar_R",
      "Lower_second_premolar_L",
      "Lower_second_premolar_R",
    ],
    regiao: "Cavidade oral",
    nomeOficial: "Dentes premolares",
    nomeComum: "Dentes pré-molares",
    resumo:
      "Dentes de transição entre caninos e molares, com duas cúspides (bicúspides), que substituem os molares decíduos e participam tanto do rasgo quanto da trituração do alimento.",
    descricaoAnatomica: "Oito dentes (dois por quadrante), tipicamente com duas cúspides (vestibular e lingual/palatina) e uma ou duas raízes, conforme a posição.",
    funcao: ["Função intermediária entre corte/rasgo e trituração do alimento"],
    relacoesAnatomicas: "Situados entre os caninos e os molares em cada quadrante da arcada dentária permanente.",
    correlacaoClinica:
      "Diferente dos demais dentes permanentes, os pré-molares NÃO possuem antecessores decíduos diretos com o mesmo nome — eles substituem os molares decíduos (1º e 2º molares de leite), um ponto de confusão comum na cronologia da dentição mista.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Os pré-molares substituem os molares DECÍDUOS na dentição mista — não têm antecessor \"pré-molar de leite\", pois a dentição decídua não possui pré-molares.",
    ],
    fontes: [
      { tema: "Cronologia da dentição decídua e permanente", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Dentes premolares)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "dentes-molares",
    meshNames: [
      "Upper_first_molar_tooth_L",
      "Upper_first_molar_tooth_R",
      "Upper_second_molar_tooth_L",
      "Upper_second_molar_tooth_R",
      "Lower_first_molar_tooth_L",
      "Lower_first_molar_tooth_R",
      "Lower_second_molar_tooth_L",
      "Lower_second_molar_tooth_R",
    ],
    regiao: "Cavidade oral",
    nomeOficial: "Dentes molares",
    nomeComum: "Dentes molares",
    resumo:
      "Os maiores dentes da arcada, com múltiplas cúspides e raízes, especializados na trituração final do alimento antes da deglutição — o 1º molar permanente é tipicamente o primeiro dente permanente a irromper, por volta dos 6 anos, sem substituir nenhum dente decíduo.",
    descricaoAnatomica:
      "Dentes com coroa larga e múltiplas cúspides (geralmente 4-5), e múltiplas raízes (2 nos inferiores, 3 nos superiores), proporcionando ampla superfície oclusal para trituração.",
    funcao: ["Trituração final do alimento antes da deglutição"],
    relacoesAnatomicas: "Localizados na porção mais posterior de cada quadrante da arcada dentária.",
    correlacaoClinica:
      "O primeiro molar permanente (\"molar de 6 anos\") irrompe sem substituir nenhum dente decíduo, sendo frequentemente confundido pelos pais como um dente de leite — sua perda precoce por cárie tem impacto desproporcional na oclusão, pois serve de guia para a erupção dos demais dentes permanentes.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O 1º molar permanente (\"molar de 6 anos\") não substitui nenhum dente decíduo — irrompe posteriormente à dentição de leite já existente, sendo frequentemente confundido com um dente de leite pelos pais.",
    ],
    fontes: [
      { tema: "Cronologia de erupção do primeiro molar permanente", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Dentes molares)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "faringe",
    meshNames: ["Pharynxj"],
    regiao: "Faringe e esôfago",
    nomeOficial: "Pharynx",
    nomeComum: "Faringe",
    resumo:
      "Tubo musculomembranoso compartilhado pelos sistemas digestório e respiratório, dividido em nasofaringe, orofaringe e laringofaringe — o cruzamento anatômico dos dois tratos é o que torna a deglutição um processo neurologicamente coordenado e vulnerável a disfagia/aspiração.",
    descricaoAnatomica:
      "Estende-se da base do crânio até a margem inferior da cartilagem cricoide (onde se continua com o esôfago), dividida em três partes: nasofaringe (posterior às coanas nasais, exclusivamente respiratória), orofaringe (posterior à cavidade oral, da úvula ao osso hioide) e laringofaringe/hipofaringe (posterior à laringe, até a cricoide).",
    funcao: [
      "Via comum de passagem do ar (respiração) e do alimento/líquido (deglutição)",
      "Fase faríngea da deglutição — elevação da laringe e fechamento da via aérea",
      "Ressonância da voz",
    ],
    relacoesAnatomicas:
      "Anteriormente comunica-se com cavidade nasal, cavidade oral e laringe; a tonsila faríngea (adenoide) situa-se no teto da nasofaringe, as tonsilas palatinas na orofaringe.",
    correlacaoClinica:
      "A fase faríngea da deglutição é um reflexo neurologicamente complexo (envolvendo os nervos glossofaríngeo, vago e hipoglosso) que fecha a via aérea (elevação laríngea + fechamento da epiglote); sua disfunção (disfagia orofaríngea), comum após AVC, causa aspiração pulmonar — uma das principais causas de pneumonia aspirativa em idosos e pacientes neurológicos.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A faringe é a única região do corpo em que os tratos digestório e respiratório se cruzam completamente — daí a coordenação neuromuscular complexa exigida na deglutição.",
      "Disfagia orofaríngea pós-AVC é causa importante de pneumonia aspirativa — triagem de deglutição é rotina em pacientes com AVC agudo.",
    ],
    fontes: [
      { tema: "Fases da deglutição e disfagia orofaríngea", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Divisões anatômicas da faringe", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Pharynx)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "esofago",
    meshNames: ["Oesophagus"],
    regiao: "Faringe e esôfago",
    nomeOficial: "Oesophagus",
    nomeComum: "Esôfago",
    resumo:
      "Tubo muscular de aproximadamente 25 cm que conecta a faringe ao estômago, com três constrições anatômicas naturais que são os pontos clássicos de impactação de corpo estranho e de maior risco de perfuração instrumental.",
    descricaoAnatomica:
      "Estende-se de C6 (margem inferior da cartilagem cricoide) a T11 (cárdia gástrica), atravessando o pescoço, o mediastino posterior e o hiato esofágico do diafragma. Possui três constrições: cervical (esfíncter esofágico superior/músculo cricofaríngeo), torácica (cruzamento com o arco aórtico e brônquio principal esquerdo) e diafragmática (hiato esofágico).",
    funcao: ["Transporte do bolo alimentar da faringe ao estômago por peristaltismo"],
    relacoesAnatomicas:
      "Relaciona-se posteriormente com a coluna vertebral, anteriormente com a traqueia (porção cervical) e o átrio esquerdo (porção torácica inferior), e é cruzado pelo arco aórtico e brônquio principal esquerdo.",
    correlacaoClinica:
      "As três constrições anatômicas são os locais mais comuns de impactação de corpo estranho e de perfuração iatrogênica (endoscopia). A doença do refluxo gastroesofágico (DRGE), por incompetência do esfíncter esofágico inferior, é extremamente prevalente e sua cronicidade predispõe ao esôfago de Barrett (metaplasia intestinal) — fator de risco para adenocarcinoma esofágico.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Três constrições anatômicas do esôfago: cricofaríngea (superior), cruzamento com arco aórtico/brônquio esquerdo (média) e hiato diafragmático (inferior) — locais clássicos de impactação e perfuração.",
      "Esôfago de Barrett (metaplasia intestinal por DRGE crônica) é o principal fator de risco para adenocarcinoma de esôfago.",
    ],
    fontes: [
      { tema: "Constrições esofágicas e DRGE", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Esôfago de Barrett e risco de adenocarcinoma", fonte: "Robbins & Cotran Pathologic Basis of Disease, 10ª ed." },
      { tema: "Nomenclatura oficial (Oesophagus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "estomago",
    meshNames: ["Stomach"],
    regiao: "Estômago",
    nomeOficial: "Gaster (Ventriculus)",
    nomeComum: "Estômago",
    resumo:
      "Órgão em forma de J que armazena, mistura e inicia a digestão química do alimento em meio fortemente ácido — dividido em cárdia, fundo, corpo, antro e piloro, cada região com população celular e função secretora distintas.",
    descricaoAnatomica:
      "Situado no quadrante superior esquerdo do abdome, apresenta uma curvatura menor (côncava, medial) e maior (convexa, lateral). Suas regiões são: cárdia (junção com o esôfago), fundo (cúpula superior, sob o diafragma), corpo (maior porção, secretora de ácido), antro pilórico e piloro (esfíncter que controla o esvaziamento gástrico).",
    funcao: [
      "Armazenamento e mistura mecânica do alimento (formação do quimo)",
      "Secreção de ácido clorídrico e pepsinogênio (digestão proteica inicial)",
      "Secreção de fator intrínseco (absorção de vitamina B12)",
      "Secreção de gastrina (células G do antro) e regulação do esvaziamento gástrico",
    ],
    relacoesAnatomicas:
      "Relaciona-se posteriormente com o pâncreas e a bolsa omental, superiormente com o diafragma e o fígado, e inferiormente com o cólon transverso.",
    correlacaoClinica:
      "A gastrite e a úlcera péptica (mais comumente por infecção por H. pylori ou uso de AINEs) afetam predominantemente o corpo/antro. A deficiência de fator intrínseco (por gastrite atrófica autoimune ou gastrectomia) causa anemia perniciosa por má absorção de B12. O adenocarcinoma gástrico tem forte associação com H. pylori crônica e é mais comum na região do antro.",
    doencasRelacionadas: [
      { slug: "gastrite", nome: "Gastrite" },
      { slug: "ulcera-peptica", nome: "Úlcera péptica" },
    ],
    pontosDeProva: [
      "A perda do fator intrínseco (gastrectomia ou gastrite atrófica autoimune) causa anemia perniciosa por deficiência de vitamina B12 — reserva hepática de B12 dura anos, então a anemia surge tardiamente.",
      "As células G do antro secretam gastrina, que estimula as células parietais do corpo a secretarem ácido — por isso antrectomia reduz a secreção ácida.",
      "H. pylori é o principal fator de risco tanto para úlcera péptica quanto para adenocarcinoma gástrico (predominantemente antral) e linfoma MALT.",
    ],
    fontes: [
      { tema: "Fisiologia da secreção gástrica e regiões funcionais", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "H. pylori, úlcera péptica e câncer gástrico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Gaster)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "mucosa-do-estomago",
    meshNames: ["Mucosa_of_stomach"],
    regiao: "Estômago",
    nomeOficial: "Tunica mucosa gastris",
    nomeComum: "Mucosa do estômago",
    resumo:
      "Camada mais interna da parede gástrica, revestida por epitélio colunar secretor de muco e organizada em glândulas gástricas tubulares cuja população celular varia por região — a estrutura diretamente lesada na gastrite e na úlcera péptica.",
    descricaoAnatomica:
      "Apresenta pregas (rugas gástricas) que se distendem quando o estômago se enche. Contém as glândulas gástricas: no corpo/fundo, predominam células parietais (ácido clorídrico e fator intrínseco) e células principais (pepsinogênio); no antro, predominam células G (gastrina) e células mucosas.",
    funcao: [
      "Secreção de muco e bicarbonato (barreira protetora contra a autodigestão ácida)",
      "Secreção de ácido clorídrico, pepsinogênio, fator intrínseco e gastrina, conforme a região",
    ],
    relacoesAnatomicas: "Reveste internamente toda a superfície luminal do estômago, sustentada pela submucosa e muscular própria.",
    correlacaoClinica:
      "O equilíbrio entre fatores agressores (ácido, pepsina, H. pylori, AINEs) e protetores (muco, bicarbonato, fluxo sanguíneo mucoso, prostaglandinas) determina a integridade da mucosa — seu rompimento causa gastrite e úlcera péptica. A gastrite atrófica crônica (autoimune ou por H. pylori de longa data) predispõe a metaplasia intestinal e, eventualmente, adenocarcinoma gástrico (sequência de Correa).",
    doencasRelacionadas: [
      { slug: "gastrite", nome: "Gastrite" },
      { slug: "ulcera-peptica", nome: "Úlcera péptica" },
    ],
    pontosDeProva: [
      "Sequência de Correa: gastrite crônica → atrofia → metaplasia intestinal → displasia → adenocarcinoma gástrico — modelo clássico de carcinogênese gástrica associada a H. pylori.",
      "AINEs lesam a mucosa gástrica por inibirem a COX-1, reduzindo a síntese de prostaglandinas protetoras (muco, bicarbonato, fluxo sanguíneo).",
    ],
    fontes: [
      { tema: "Sequência de Correa e carcinogênese gástrica", fonte: "Robbins & Cotran Pathologic Basis of Disease, 10ª ed." },
      { tema: "Fatores agressores e protetores da mucosa gástrica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Tunica mucosa gastris)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "duodeno",
    meshNames: ["Duodenum"],
    regiao: "Intestino delgado",
    nomeOficial: "Duodenum",
    nomeComum: "Duodeno",
    resumo:
      "Primeira e mais curta porção do intestino delgado, em formato de C ao redor da cabeça do pâncreas, onde convergem as secreções biliar e pancreática — ponto crítico de neutralização do quimo ácido e de digestão enzimática.",
    descricaoAnatomica:
      "Dividido em quatro partes: superior (bulbo duodenal, local mais comum de úlcera duodenal), descendente (recebe a papila duodenal maior, onde desembocam o ducto biliar comum e o ducto pancreático principal), horizontal e ascendente (termina na flexura duodenojejunal, marcada pelo ligamento de Treitz). É primariamente retroperitoneal, exceto sua porção inicial (bulbo).",
    funcao: [
      "Neutralização do quimo ácido gástrico (bicarbonato das secreções biliar e pancreática)",
      "Digestão enzimática (enzimas pancreáticas) e emulsificação de gorduras (bile)",
      "Início da absorção de ferro (duodeno e jejuno proximal)",
    ],
    relacoesAnatomicas:
      "Circunda a cabeça do pâncreas; relaciona-se posteriormente com a veia cava inferior e a via biliar; o ligamento de Treitz marca a transição para o jejuno e é o marco cirúrgico entre sangramento digestivo alto e baixo.",
    correlacaoClinica:
      "O bulbo duodenal é o local mais comum de úlcera péptica (mais frequente que a gástrica), tipicamente associada a H. pylori, com dor que classicamente melhora com a alimentação. O ligamento de Treitz é o marco anatômico que define hemorragia digestiva alta (proximal a ele) versus baixa (distal a ele).",
    doencasRelacionadas: [{ slug: "ulcera-peptica", nome: "Úlcera péptica" }],
    pontosDeProva: [
      "Úlcera duodenal (bulbo) é mais comum que a gástrica, geralmente por H. pylori, e classicamente MELHORA com a alimentação (ao contrário da gástrica, que piora).",
      "O ligamento de Treitz (flexura duodenojejunal) é o marco divisor entre hemorragia digestiva alta e baixa.",
      "A papila duodenal maior, na 2ª porção do duodeno, é onde convergem o ducto biliar comum e o ducto pancreático principal (ampola hepatopancreática).",
    ],
    fontes: [
      { tema: "Úlcera duodenal versus gástrica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Ligamento de Treitz e classificação da hemorragia digestiva", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Duodenum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "jejuno",
    meshNames: ["Jejunum"],
    regiao: "Intestino delgado",
    nomeOficial: "Jejunum",
    nomeComum: "Jejuno",
    resumo:
      "Porção intraperitoneal do intestino delgado entre o duodeno e o íleo, com a parede mais espessa e as pregas circulares (válvulas coniventes) mais proeminentes de todo o intestino delgado — o principal sítio de absorção da maioria dos nutrientes.",
    descricaoAnatomica:
      "Suspenso pelo mesentério, ocupa predominantemente o quadrante superior esquerdo da cavidade abdominal. Comparado ao íleo, tem parede mais espessa, vascularização mais rica (mais vasos retos, menos arcadas), e pregas circulares mais altas e numerosas — achados que o distinguem macroscopicamente do íleo em cirurgia.",
    funcao: [
      "Local primário de absorção da maioria dos macronutrientes (carboidratos, proteínas, a maior parte dos lipídeos)",
      "Absorção da maioria das vitaminas e minerais, exceto vitamina B12 e sais biliares (absorvidos no íleo terminal)",
    ],
    relacoesAnatomicas: "Contínuo com o duodeno na flexura duodenojejunal e com o íleo, sem um limite anatômico nítido entre os dois.",
    correlacaoClinica:
      "A grande área de superfície absortiva do jejuno (pregas circulares altas, vilosidades e microvilosidades) é a razão pela qual doenças que danificam sua mucosa, como a doença celíaca (atrofia vilositária), causam má absorção grave — diferentemente de lesões isoladas do íleo terminal, que poupam a maior parte da capacidade absortiva geral.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Jejuno vs. íleo: jejuno tem parede mais espessa, pregas circulares mais altas/numerosas e vascularização com menos arcadas e vasos retos mais longos — achados usados para diferenciá-los macroscopicamente em cirurgia.",
      "A doença celíaca lesa predominantemente o jejuno proximal (maior exposição ao glúten), causando atrofia vilositária e má absorção generalizada.",
    ],
    fontes: [
      { tema: "Diferenças anatômicas entre jejuno e íleo", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Doença celíaca e atrofia vilositária jejunal", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Jejunum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "colo-ascendente",
    meshNames: ["Ascending_colon"],
    regiao: "Intestino grosso",
    nomeOficial: "Colon ascendens",
    nomeComum: "Colo ascendente",
    resumo:
      "Segmento retroperitoneal do intestino grosso que sobe pelo flanco direito do ceco até a flexura hepática (cólica direita), onde o cólon se curva para se tornar o cólon transverso.",
    descricaoAnatomica:
      "Secundariamente retroperitoneal (fixado à parede posterior, sem mesentério próprio na maioria das pessoas), estende-se do ceco à flexura hepática, sob a face inferior do fígado.",
    funcao: ["Absorção de água e eletrólitos remanescentes, formando fezes progressivamente mais sólidas"],
    relacoesAnatomicas: "Relaciona-se posteriormente com o rim direito e anteriormente/superiormente com a face inferior do fígado (flexura hepática).",
    correlacaoClinica:
      "É o segmento mais comumente afetado por neoplasias do lado direito do cólon, que tendem a se apresentar de forma mais insidiosa (anemia ferropriva por sangramento oculto crônico) em comparação com as do lado esquerdo (que mais frequentemente causam obstrução, por lúmen mais estreito e fezes mais sólidas).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Câncer colorretal à direita (ceco/ascendente) tende a se manifestar com anemia ferropriva por sangramento oculto; à esquerda, tende a causar obstrução/alteração do hábito intestinal — reflexo do calibre luminal e da consistência fecal em cada segmento.",
    ],
    fontes: [
      { tema: "Diferenças clínicas entre câncer colorretal direito e esquerdo", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Colon ascendens)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "colo-transverso",
    meshNames: ["Transverse_colon"],
    regiao: "Intestino grosso",
    nomeOficial: "Colon transversum",
    nomeComum: "Colo transverso",
    resumo:
      "Segmento intraperitoneal mais móvel e mais longo do cólon, suspenso pelo mesocólon transverso, cruzando o abdome da flexura hepática à flexura esplênica.",
    descricaoAnatomica:
      "Único segmento verdadeiramente intraperitoneal do cólon (com mesocólon próprio), o que lhe confere grande mobilidade — frequentemente pende em direção à pelve em pessoas com abdome mais flácido.",
    funcao: ["Continuação da absorção de água e eletrólitos e do transporte do conteúdo fecal"],
    relacoesAnatomicas: "Suspenso pelo mesocólon transverso, que se fixa ao omento maior; relaciona-se superiormente com o estômago e o fígado.",
    correlacaoClinica:
      "Por sua mobilidade e relação com o omento maior, é o segmento colônico mais suscetível a volvo (torção sobre seu próprio mesentério), embora menos comum que o volvo de sigmoide.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É o único segmento do cólon verdadeiramente intraperitoneal (com mesentério próprio), o que explica sua mobilidade e o risco (menor que o do sigmoide) de volvo.",
    ],
    fontes: [
      { tema: "Mobilidade do cólon transverso e volvo", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Colon transversum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "colo-descendente",
    meshNames: ["Descending_colon"],
    regiao: "Intestino grosso",
    nomeOficial: "Colon descendens",
    nomeComum: "Colo descendente",
    resumo:
      "Segmento retroperitoneal que desce pelo flanco esquerdo, da flexura esplênica ao início do cólon sigmoide, com lúmen mais estreito e fezes mais sólidas que o lado direito.",
    descricaoAnatomica: "Secundariamente retroperitoneal, estende-se da flexura esplênica (cólica esquerda) até a fossa ilíaca esquerda, onde se continua como o cólon sigmoide.",
    funcao: ["Transporte e compactação progressiva do conteúdo fecal, já com menor teor de água que no lado direito"],
    relacoesAnatomicas: "Relaciona-se posteriormente com o rim esquerdo; a flexura esplênica situa-se próxima ao baço e ao polo inferior do rim esquerdo.",
    correlacaoClinica:
      "Junto ao sigmoide, é o local mais comum de diverticulose e diverticulite no mundo ocidental, atribuída a uma dieta pobre em fibras e à maior pressão intraluminal segmentar nesse calibre mais estreito do cólon.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O cólon esquerdo (descendente e sigmoide) é o local mais comum de diverticulose/diverticulite em populações ocidentais, associado a dieta pobre em fibras.",
    ],
    fontes: [
      { tema: "Diverticulose e diverticulite do cólon esquerdo", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Colon descendens)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "colo-sigmoide",
    meshNames: ["Sigmoid_colon"],
    regiao: "Intestino grosso",
    nomeOficial: "Colon sigmoideum",
    nomeComum: "Colo sigmoide",
    resumo:
      "Segmento em forma de S, intraperitoneal e móvel (com mesocólon sigmoide próprio), entre o cólon descendente e o reto — o local mais comum de diverticulite e de volvo do intestino grosso.",
    descricaoAnatomica: "Estende-se da fossa ilíaca esquerda até a junção retossigmoide (nível de S3), com alça em formato de S de comprimento variável, suspensa pelo mesocólon sigmoide.",
    funcao: ["Reservatório final de fezes antes do reto, com continuação da compactação fecal"],
    relacoesAnatomicas: "Relaciona-se com a bexiga (homens) ou o útero e a bexiga (mulheres) na pelve, e com os vasos ilíacos externos.",
    correlacaoClinica:
      "É o segmento mais comum tanto de diverticulite (mais estreito, maior pressão intraluminal) quanto de volvo de sigmoide (pela mobilidade conferida pelo mesocólon longo) — este último uma causa importante de obstrução intestinal em idosos, especialmente institucionalizados/acamados.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O cólon sigmoide é o sítio mais frequente de diverticulite e também o local mais comum de volvo de intestino grosso, por sua mobilidade e mesentério longo.",
    ],
    fontes: [
      { tema: "Diverticulite e volvo de sigmoide", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Colon sigmoideum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "apendice-vermiforme",
    meshNames: ["Vermiform_appendix"],
    regiao: "Intestino grosso",
    nomeOficial: "Appendix vermiformis",
    nomeComum: "Apêndice vermiforme",
    resumo:
      "Divertículo tubular cego que se origina do ceco, rico em tecido linfoide (\"tonsila abdominal\"), cuja obstrução luminal (mais comumente por fecalito) causa a apendicite aguda — a emergência cirúrgica abdominal mais comum.",
    descricaoAnatomica:
      "Origina-se da face posteromedial do ceco, cerca de 2 cm abaixo da valva ileocecal, no ponto de convergência das três tênias do colo (marco cirúrgico para localizá-lo). Sua posição é altamente variável (retrocecal em até 65% dos casos, mas também pélvica, subcecal, pré-ileal ou pós-ileal).",
    funcao: [
      "Tecido linfoide associado à mucosa (função imunológica, análoga às tonsilas)",
      "Possível reservatório de flora bacteriana comensal (hipótese de \"repovoamento\" intestinal após diarreia grave)",
    ],
    relacoesAnatomicas: "Origina-se do ceco; sua base é localizada no ponto de McBurney (terço lateral de uma linha entre a espinha ilíaca anterossuperior e o umbigo).",
    correlacaoClinica:
      "A apendicite aguda (obstrução luminal, mais comumente por fecalito, seguida de distensão, isquemia e infecção bacteriana secundária) é a emergência cirúrgica abdominal mais comum. Apresenta-se classicamente com dor periumbilical migrando para a fossa ilíaca direita (ponto de McBurney), associada a anorexia, náusea e febre baixa; sinal de Blumberg (dor à descompressão) e sinal do psoas/obturador auxiliam o diagnóstico. Perfuração (mais comum após 24-48h de evolução) causa peritonite localizada ou generalizada.",
    doencasRelacionadas: [{ slug: "apendicite-aguda", nome: "Apendicite aguda" }],
    pontosDeProva: [
      "Dor periumbilical migrando para a fossa ilíaca direita (ponto de McBurney) é o padrão clássico da apendicite aguda — reflete a inervação visceral inicial (T10) versus a irritação peritoneal parietal tardia.",
      "A base do apêndice está no ponto de convergência das três tênias do colo — marco cirúrgico usado para localizá-lo mesmo em posições anatômicas variantes (retrocecal, pélvica, etc.).",
      "Posição retrocecal (mais comum) pode causar apresentação atípica, com dor no flanco em vez de fossa ilíaca direita clássica.",
    ],
    fontes: [
      { tema: "Fisiopatologia e apresentação clínica da apendicite aguda", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Variações anatômicas da posição do apêndice", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Appendix vermiformis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "tenias-do-colo",
    meshNames: ["Free_taenia", "Mesocolic_taenia", "Omental_taenia"],
    regiao: "Intestino grosso",
    nomeOficial: "Taeniae coli",
    nomeComum: "Tênias do colo",
    resumo:
      "Três faixas longitudinais de músculo liso condensado (livre, mesocólica e omental) que percorrem toda a extensão do intestino grosso, cuja contração tônica cria as haustrações características do cólon.",
    descricaoAnatomica:
      "Representam a condensação da camada muscular longitudinal externa do cólon em três faixas distintas (em vez de uma camada contínua, como no intestino delgado): tênia livre (anterior, sem fixação), tênia mesocólica (fixação do mesocólon) e tênia omental (fixação do omento maior/apêndices epiploicos).",
    funcao: [
      "Contração tônica que encurta o cólon e cria as haustrações (compartimentos saculares)",
      "Servem de marco cirúrgico para localizar estruturas (como a base do apêndice)",
    ],
    relacoesAnatomicas: "Convergem na base do apêndice vermiforme, onde se fundem numa camada longitudinal contínua ao redor do apêndice.",
    correlacaoClinica:
      "As tênias convergem exatamente na base do apêndice, servindo como referência cirúrgica confiável para localizá-lo mesmo quando sua posição é atípica (retrocecal, pélvica) — princípio usado em apendicectomias abertas antes da era laparoscópica/tomográfica.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "As três tênias do colo convergem na base do apêndice vermiforme — usadas como guia cirúrgico para localizá-lo em posições anatômicas atípicas.",
      "A condensação da musculatura longitudinal em tênias (em vez de camada contínua) é exclusiva do intestino GROSSO, distinguindo-o histologicamente do delgado.",
    ],
    fontes: [
      { tema: "Tênias do colo como marco cirúrgico para o apêndice", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Taeniae coli)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "esfincter-anal-externo",
    meshNames: ["External_anal_sphincter_L", "External_anal_sphincter_R"],
    regiao: "Intestino grosso",
    nomeOficial: "Musculus sphincter ani externus",
    nomeComum: "Esfíncter anal externo",
    resumo:
      "Músculo esquelético voluntário que circunda o canal anal, responsável pelo controle consciente da continência fecal — complementa o esfíncter anal interno (músculo liso, involuntário) numa relação essencial para a continência.",
    descricaoAnatomica:
      "Anel de músculo estriado esquelético que circunda o canal anal externamente ao esfíncter anal interno, tradicionalmente dividido em porções subcutânea, superficial e profunda, contínuo superiormente com o músculo puborretal do assoalho pélvico.",
    funcao: ["Contração voluntária que mantém a continência fecal e permite adiar a defecação"],
    relacoesAnatomicas: "Circunda o canal anal, contínuo com o músculo puborretal (parte do músculo levantador do ânus) superiormente.",
    correlacaoClinica:
      "Sua lesão (mais comumente obstétrica, por laceração perineal de 3º/4º grau durante o parto vaginal) é a principal causa de incontinência fecal em mulheres — a lesão do esfíncter anal, junto ao nervo pudendo, deve ser sistematicamente avaliada no pós-parto quando há sintomas de incontinência.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Diferente do esfíncter anal interno (músculo liso, involuntário, tônus basal), o esfíncter anal externo é músculo esquelético voluntário — a base fisiológica de \"segurar\" a defecação conscientemente.",
      "Lacerações perineais obstétricas de 3º/4º grau que lesam o esfíncter anal externo são causa importante de incontinência fecal pós-parto.",
    ],
    fontes: [
      { tema: "Lesão obstétrica do esfíncter anal e incontinência fecal", fonte: "Williams Obstetrics, 26ª ed." },
      { tema: "Esfíncter anal interno vs. externo", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Musculus sphincter ani externus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "figado",
    meshNames: [
      "Liver",
      "Posterior_segment_of_liver_I",
      "Left_posterior_lateral_segment_of_liver_II",
      "Left_anterior_lateral_segment_of_liver_III",
      "Left_medial_segment_of_liver_IV",
      "Anterior_medial_segment_of_liver_V",
      "Anterior_lateral_segment_of_liver_VI",
      "Posterior_lateral_segment_of_liver_VII",
      "Posterior_medial_segment_of_liver_VIII",
    ],
    regiao: "Fígado e vias biliares",
    nomeOficial: "Hepar",
    nomeComum: "Fígado",
    resumo:
      "A maior glândula do corpo, dividida funcionalmente em 8 segmentos independentes (classificação de Couinaud) com irrigação, drenagem venosa/biliar e ressecabilidade cirúrgica próprias — a base de toda a cirurgia hepática moderna.",
    descricaoAnatomica:
      "Anatomicamente dividido pelo ligamento falciforme em lobos direito (maior) e esquerdo; funcionalmente, a classificação de Couinaud divide o órgão em 8 segmentos numerados (I a VIII) com base nas divisões das veias hepáticas (planos verticais) e da bifurcação portal (plano horizontal): segmento I (lobo caudado, com drenagem venosa própria diretamente para a veia cava inferior), II e III (setor lateral esquerdo), IV (setor medial esquerdo, subdividido em IVa/IVb), V, VI, VII e VIII (setor direito).",
    funcao: [
      "Metabolismo de carboidratos, lipídeos e proteínas (síntese de albumina e fatores de coagulação)",
      "Detoxificação e biotransformação de fármacos e metabólitos (metabolismo de fase I e II)",
      "Produção de bile (emulsificação de gorduras)",
      "Armazenamento de glicogênio, vitaminas lipossolúveis e ferro",
      "Depuração de bilirrubina e amônia",
    ],
    relacoesAnatomicas:
      "Recebe dupla irrigação: veia porta (≈75% do fluxo, sangue rico em nutrientes do trato digestório) e artéria hepática (≈25%, sangue oxigenado); drena pelas veias hepáticas para a veia cava inferior. Relaciona-se superiormente com o diafragma, e inferiormente com estômago, duodeno, cólon transverso e rim direito.",
    correlacaoClinica:
      "A classificação de Couinaud permite hepatectomias segmentares precisas (ressecando um ou mais segmentos por sua irrigação/drenagem independente), fundamental em cirurgia oncológica hepática e em transplante hepático inter-vivos (doação de segmentos). Cirrose hepática (fibrose difusa por dano crônico — álcool, hepatites virais, esteato-hepatite) distorce essa arquitetura, causando hipertensão portal; hepatites virais agudas/crônicas (B, C) e a esteatose hepática são causas comuns de dano hepatocelular progressivo.",
    doencasRelacionadas: [
      { slug: "cirrose-hepatica", nome: "Fibrose e cirrose hepáticas" },
      { slug: "hepatite-aguda-b", nome: "Hepatite aguda B" },
      { slug: "hepatite-viral-cronica", nome: "Hepatite viral crônica" },
    ],
    pontosDeProva: [
      "Classificação de Couinaud: 8 segmentos hepáticos independentes (irrigação/drenagem própria), permitindo hepatectomias segmentares — o segmento I (lobo caudado) é único por drenar diretamente para a veia cava inferior, sendo poupado em alguns tipos de obstrução venosa hepática (síndrome de Budd-Chiari).",
      "O fígado recebe ~75% do seu fluxo sanguíneo da veia porta (rico em nutrientes, pobre em O2) e ~25% da artéria hepática (rico em O2) — dupla irrigação que o protege parcialmente de isquemia.",
      "Cirrose é o estágio final comum de qualquer dano hepático crônico persistente — fibrose difusa com nódulos de regeneração, causando hipertensão portal e risco de carcinoma hepatocelular.",
    ],
    fontes: [
      { tema: "Classificação de Couinaud e hepatectomia segmentar", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Fisiologia hepática e dupla irrigação", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Cirrose hepática e hipertensão portal", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Hepar)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "vesicula-biliar",
    meshNames: ["Gallbladder"],
    regiao: "Fígado e vias biliares",
    nomeOficial: "Vesica biliaris (Vesica fellea)",
    nomeComum: "Vesícula biliar",
    resumo:
      "Saco piriforme que armazena e concentra a bile produzida pelo fígado entre as refeições, contraindo-se em resposta à colecistocinina — o principal sítio de formação dos cálculos biliares.",
    descricaoAnatomica:
      "Situada numa fossa na face visceral do fígado, entre os lobos direito e quadrado, dividida em fundo (projeta-se além da margem hepática, palpável no ponto cístico), corpo e colo (que se continua como o ducto cístico).",
    funcao: [
      "Armazenamento e concentração da bile (até 10x) entre as refeições",
      "Contração (estimulada pela colecistocinina, liberada em resposta a gorduras no duodeno) e ejeção de bile concentrada para o duodeno",
    ],
    relacoesAnatomicas:
      "Seu ducto cístico une-se ao ducto hepático comum para formar o ducto biliar comum (colédoco); o fundo projeta-se no ponto onde a margem lateral do músculo reto do abdome cruza a margem costal direita (ponto cístico/de Murphy).",
    correlacaoClinica:
      "A colelitíase (cálculos biliares, mais comumente de colesterol) é extremamente prevalente e pode ser assintomática ou causar cólica biliar; sua complicação por obstrução do ducto cístico com inflamação secundária é a colecistite aguda, diagnosticada classicamente pelo sinal de Murphy (interrupção da inspiração à palpação do ponto cístico, por dor).",
    doencasRelacionadas: [
      { slug: "colelitiase", nome: "Colelitíase" },
      { slug: "colecistite", nome: "Colecistite" },
    ],
    pontosDeProva: [
      "Sinal de Murphy: interrupção súbita da inspiração à palpação do ponto cístico (hipocôndrio direito) por dor — sinal clássico de colecistite aguda.",
      "A colecistocinina (CCK), liberada pelo duodeno em resposta a gorduras, estimula a contração da vesícula biliar e o relaxamento do esfíncter de Oddi.",
      "Os \"4 F\" clássicos de risco para colelitíase: Female (mulher), Forty (quarentena), Fertile (multípara) e Fat (obesidade) — mnemônico tradicional, ainda usado apesar de impreciso quanto à idade real de pico.",
    ],
    fontes: [
      { tema: "Colelitíase e colecistite aguda", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Fisiologia da colecistocinina", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Nomenclatura oficial (Vesica biliaris)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "ducto-biliar",
    meshNames: ["Bile_duct"],
    regiao: "Fígado e vias biliares",
    nomeOficial: "Ductus choledochus",
    nomeComum: "Ducto biliar comum (colédoco)",
    resumo:
      "Via final comum de drenagem biliar, formada pela união dos ductos hepático comum e cístico, que se junta ao ducto pancreático principal na ampola hepatopancreática antes de desembocar no duodeno — o ponto de convergência anatômico entre patologia biliar e pancreática.",
    descricaoAnatomica:
      "Formado pela junção do ducto hepático comum (drena o fígado) com o ducto cístico (drena a vesícula biliar), desce posteriormente à primeira porção do duodeno e atravessa a cabeça do pâncreas antes de se unir ao ducto pancreático principal na ampola hepatopancreática (ampola de Vater), que se abre na papila duodenal maior, controlada pelo esfíncter de Oddi.",
    funcao: ["Transporte da bile do fígado/vesícula biliar até o duodeno"],
    relacoesAnatomicas:
      "Atravessa a cabeça do pâncreas antes de se unir ao ducto pancreático principal — proximidade anatômica que explica por que tumores da cabeça do pâncreas frequentemente causam obstrução biliar (icterícia obstrutiva) por compressão extrínseca.",
    correlacaoClinica:
      "Sua obstrução (por cálculo — coledocolitíase, ou por tumor periampular/cabeça do pâncreas) causa icterícia obstrutiva (colúria, acolia fecal, prurido) e é um importante fator de risco para colangite aguda (infecção ascendente da via biliar), caracterizada pela tríade de Charcot (febre, icterícia, dor no hipocôndrio direito).",
    doencasRelacionadas: [{ slug: "colelitiase", nome: "Colelitíase" }],
    pontosDeProva: [
      "Tríade de Charcot (febre + icterícia + dor no hipocôndrio direito) indica colangite aguda — emergência que exige drenagem biliar urgente (CPRE).",
      "A proximidade do colédoco com a cabeça do pâncreas explica a icterícia obstrutiva indolor como apresentação clássica do câncer de cabeça de pâncreas.",
      "Coledocolitíase (cálculo no colédoco) causa icterícia obstrutiva com colúria e acolia fecal — diferente da icterícia hemolítica (sem colúria significativa).",
    ],
    fontes: [
      { tema: "Colangite aguda e tríade de Charcot", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anatomia da via biliar e ampola hepatopancreática", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Ductus choledochus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "pancreas",
    meshNames: ["Pancreas"],
    regiao: "Pâncreas",
    nomeOficial: "Pancreas",
    nomeComum: "Pâncreas",
    resumo:
      "Glândula mista (exócrina e endócrina) retroperitoneal, situada transversalmente atrás do estômago — sua porção exócrina secreta enzimas digestivas essenciais, enquanto as ilhotas pancreáticas produzem insulina e glucagon.",
    descricaoAnatomica:
      "Dividido em cabeça (envolvida pelo C duodenal, com o processo uncinado posteroinferior), colo, corpo e cauda (que se estende até o hilo esplênico). É um órgão primariamente retroperitoneal, exceto uma pequena porção da cauda.",
    funcao: [
      "Função exócrina (ácinos pancreáticos): secreção de enzimas digestivas (amilase, lipase, proteases como tripsina/quimotripsina) e bicarbonato",
      "Função endócrina (ilhotas de Langerhans): secreção de insulina (células beta), glucagon (células alfa), somatostatina (células delta) e polipeptídeo pancreático",
    ],
    relacoesAnatomicas:
      "A cabeça é circundada pelo duodeno; o ducto biliar comum atravessa sua porção posterior; a cauda relaciona-se com o hilo do baço; posteriormente relaciona-se com a veia porta, a artéria mesentérica superior e a aorta.",
    correlacaoClinica:
      "A pancreatite aguda (mais comumente por cálculo biliar ou álcool) resulta da ativação prematura de enzimas digestivas dentro do próprio pâncreas, causando autodigestão glandular — dor epigástrica em faixa, irradiada para o dorso, com elevação de amilase/lipase séricas. O adenocarcinoma de pâncreas, mais comum na cabeça, apresenta-se frequentemente com icterícia obstrutiva indolor (por compressão do colédoco) e tem prognóstico reservado por diagnóstico tardio.",
    doencasRelacionadas: [{ slug: "pancreatite-aguda", nome: "Pancreatite aguda" }],
    pontosDeProva: [
      "Pancreatite aguda: dor epigástrica em faixa irradiada para o dorso, causas mais comuns são cálculo biliar e álcool, diagnóstico com lipase (mais específica que amilase).",
      "Câncer de cabeça de pâncreas causa icterícia obstrutiva INDOLOR (sinal de Courvoisier: vesícula biliar palpável e indolor, por dilatação progressiva sem cólica) — diferente da icterícia dolorosa da coledocolitíase.",
      "As ilhotas de Langerhans representam apenas ~1-2% da massa pancreática, mas sua disfunção (destruição autoimune de células beta) causa diabetes mellitus tipo 1.",
    ],
    fontes: [
      { tema: "Pancreatite aguda: etiologia e diagnóstico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Câncer de pâncreas e sinal de Courvoisier", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Fisiologia endócrina e exócrina pancreática", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Nomenclatura oficial (Pancreas)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "ducto-pancreatico",
    meshNames: ["Pancreatic_duct", "Accessory_pancreatic_duct"],
    regiao: "Pâncreas",
    nomeOficial: "Ductus pancreaticus et ductus pancreaticus accessorius",
    nomeComum: "Ducto pancreático (principal e acessório)",
    resumo:
      "Sistema ductal que drena a secreção exócrina do pâncreas — o ducto principal (de Wirsung) percorre toda a extensão da glândula e se une ao colédoco antes do duodeno, enquanto o ducto acessório (de Santorini), quando presente, drena diretamente e de forma independente.",
    descricaoAnatomica:
      "O ducto pancreático principal percorre o pâncreas da cauda à cabeça, recebendo múltiplos ductos secundários lobulares ao longo do trajeto, e geralmente se une ao ducto biliar comum na ampola hepatopancreática, desembocando na papila duodenal maior. O ducto pancreático acessório, quando patente, drena a porção anterossuperior da cabeça diretamente na papila duodenal menor, um pouco proximal à maior.",
    funcao: ["Transporte do suco pancreático (enzimas digestivas + bicarbonato) até o duodeno"],
    relacoesAnatomicas: "O ducto principal une-se ao ducto biliar comum na ampola hepatopancreática, controlada pelo esfíncter de Oddi.",
    correlacaoClinica:
      "O pâncreas divisum (variante anatômica em que os ductos dorsal e ventral embrionários não se fundem, fazendo a maior parte da drenagem passar pelo ducto acessório/papila menor, mais estreita) é uma causa reconhecida, embora controversa, de pancreatite aguda recorrente por drenagem relativamente inadequada.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Pâncreas divisum: variante congênita de fusão incompleta dos ductos pancreáticos embrionários, associada a pancreatite recorrente por drenagem predominante pela papila menor (mais estreita).",
      "O ducto pancreático principal une-se ao colédoco na ampola hepatopancreática — por isso um cálculo impactado nesse ponto pode causar pancreatite E colangite simultaneamente (cálculo \"biliopancreático\").",
    ],
    fontes: [
      { tema: "Pâncreas divisum e pancreatite recorrente", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Anatomia ductal pancreática", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Ductus pancreaticus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
