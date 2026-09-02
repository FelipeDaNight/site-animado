import type { OrgaoUrinario } from "./types";

// Modelo 3D: coleção "Urinary system" do atlas Z-Anatomy (CC BY-SA 4.0,
// baseado em BodyParts3D/DBCLS), extraída e comprimida com o mesmo pipeline
// usado nos demais sistemas. 8 estruturas nomeadas individualmente.
export const URINARY_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/urinary.glb";

export const sistemaUrinario: OrgaoUrinario[] = [
  {
    slug: "rim",
    meshNames: ["Kidney_L", "Kidney_R"],
    regiao: "Trato urinário superior",
    nomeOficial: "Ren",
    nomeComum: "Rim",
    resumo:
      "Órgão retroperitoneal em forma de feijão que filtra o plasma sanguíneo, formando a urina e regulando o volume, a composição eletrolítica e o equilíbrio acidobásico do corpo — além de funções endócrinas essenciais (eritropoetina, renina, ativação da vitamina D).",
    descricaoAnatomica:
      "Situado no retroperitônio, entre T12 e L3 aproximadamente (o rim direito costuma ser discretamente mais baixo que o esquerdo, pela presença do fígado). Sua unidade funcional é o néfron (cerca de 1 milhão por rim), composto por glomérulo (filtração) e um sistema tubular (reabsorção/secreção) que drena para os cálices e a pelve renal.",
    funcao: [
      "Filtração glomerular do plasma e formação da urina",
      "Regulação do volume extracelular e da pressão arterial (sistema renina-angiotensina-aldosterona)",
      "Regulação do equilíbrio hidroeletrolítico e acidobásico",
      "Produção de eritropoetina (estímulo à eritropoiese medular)",
      "Ativação da vitamina D (hidroxilação final a calcitriol)",
      "Gliconeogênese renal (contribuição menor ao metabolismo energético)",
    ],
    relacoesAnatomicas:
      "Relaciona-se posteriormente com o diafragma e a parede abdominal posterior; o rim direito relaciona-se anteriormente com o fígado, o duodeno e o cólon direito; o esquerdo com o baço, o estômago, o pâncreas e o cólon esquerdo. A glândula suprarrenal situa-se sobre o polo superior de cada rim.",
    correlacaoClinica:
      "A doença renal crônica (progressiva, por diabetes, hipertensão ou glomerulopatias) e a insuficiência renal aguda (pré-renal, renal intrínseca ou pós-renal) são condições extremamente prevalentes com grande morbimortalidade. A doença renal policística é uma causa hereditária importante de perda progressiva de função renal. O rim é também um sítio comum de neoplasia (carcinoma de células renais), frequentemente assintomático até estágios avançados.",
    doencasRelacionadas: [
      { slug: "doenca-renal-cronica", nome: "Doença renal crônica" },
      { slug: "insuficiencia-renal-aguda", nome: "Insuficiência renal aguda" },
      { slug: "doenca-renal-policistica-malformacoes-renais-congenitas", nome: "Doença renal policística e outras malformações renais congênitas" },
    ],
    pontosDeProva: [
      "O néfron é a unidade funcional do rim (~1 milhão por rim) — glomérulo (filtração) + túbulos (reabsorção/secreção seletivas).",
      "O rim tem funções endócrinas essenciais além da filtração: eritropoetina (eritropoiese), renina (pressão arterial) e ativação final da vitamina D — por isso a doença renal crônica causa anemia, hipertensão e doença óssea.",
      "A classificação da lesão renal aguda em pré-renal, renal intrínseca e pós-renal orienta toda a investigação diagnóstica inicial.",
    ],
    fontes: [
      { tema: "Fisiologia renal e funções endócrinas do rim", fonte: "Guyton and Hall Textbook of Medical Physiology, 14ª ed." },
      { tema: "Classificação e abordagem da lesão renal aguda", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Ren)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "pelve-renal",
    meshNames: ["Renal_pelvis_L", "Renal_pelvis_R"],
    regiao: "Trato urinário superior",
    nomeOficial: "Pelvis renalis",
    nomeComum: "Pelve renal",
    resumo:
      "Estrutura em forma de funil que recolhe a urina dos cálices renais maiores antes de conduzi-la ao ureter — sítio anatômico de referência para a hidronefrose (dilatação por obstrução distal).",
    descricaoAnatomica:
      "Formada pela confluência dos 2-3 cálices renais maiores (que por sua vez recebem os cálices menores, cada um recobrindo uma papila renal), estreitando-se progressivamente até a junção ureteropélvica, onde se continua como o ureter.",
    funcao: ["Coleta e transporte inicial da urina formada nos néfrons, dos cálices até o ureter"],
    relacoesAnatomicas: "Situada no hilo renal, junto aos vasos renais; continua-se inferiormente com o ureter na junção ureteropélvica.",
    correlacaoClinica:
      "A junção ureteropélvica é um dos pontos de estreitamento anatômico natural do trato urinário superior, sendo um local clássico de impactação de cálculos renais e de obstrução congênita (estenose de junção ureteropélvica, principal causa de hidronefrose neonatal). A dilatação da pelve renal (hidronefrose) é o achado ultrassonográfico cardinal de obstrução do trato urinário, em qualquer nível distal a ela.",
    doencasRelacionadas: [{ slug: "nefrolitiase", nome: "Calculose do rim e do ureter (nefrolitíase)" }],
    pontosDeProva: [
      "A junção ureteropélvica é um dos três pontos de estreitamento fisiológico do trato urinário (junto à cruzamento com os vasos ilíacos e à junção ureterovesical) — locais clássicos de impactação de cálculos.",
      "Hidronefrose é a dilatação da pelve renal e dos cálices por obstrução urinária distal — achado ultrassonográfico, não um diagnóstico etiológico em si.",
    ],
    fontes: [
      { tema: "Pontos de estreitamento do ureter e impactação de cálculos", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Hidronefrose e estenose de junção ureteropélvica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Pelvis renalis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "ureter",
    meshNames: ["Ureter_L", "Ureter_R"],
    regiao: "Trato urinário superior",
    nomeOficial: "Ureter",
    nomeComum: "Ureter",
    resumo:
      "Tubo muscular retroperitoneal de aproximadamente 25 cm que transporta a urina da pelve renal à bexiga por ondas peristálticas ativas — não depende apenas da gravidade.",
    descricaoAnatomica:
      "Desce retroperitonealmente sobre o músculo psoas maior, cruza os vasos ilíacos na entrada da pelve, e entra na bexiga obliquamente através da parede posterior (trajeto intramural), criando um mecanismo valvular que previne refluxo vesicoureteral durante o enchimento vesical.",
    funcao: ["Transporte ativo (peristáltico) da urina da pelve renal até a bexiga"],
    relacoesAnatomicas:
      "Cruza os vasos ilíacos comuns/externos na entrada da pelve (um dos três estreitamentos fisiológicos); nas mulheres, é cruzado pela artéria uterina próximo ao colo do útero (\"água sob a ponte\") — relação clínica crítica em cirurgia ginecológica.",
    correlacaoClinica:
      "A cólica renal/ureteral por cálculo impactado é uma das dores mais intensas descritas em medicina, tipicamente em cólica, irradiando do flanco para a virilha, acompanhando o trajeto ureteral. O trajeto intramural oblíquo na bexiga é o mecanismo antirrefluxo natural — sua incompetência (congênita ou adquirida) causa refluxo vesicoureteral, predispondo a pielonefrite de repetição em crianças. Na cirurgia pélvica/ginecológica, o ureter está em risco de lesão iatrogênica exatamente no ponto em que é cruzado pela artéria uterina.",
    doencasRelacionadas: [{ slug: "nefrolitiase", nome: "Calculose do rim e do ureter (nefrolitíase)" }],
    pontosDeProva: [
      "\"Água sob a ponte\": o ureter passa sob a artéria uterina próximo ao colo uterino — relação clássica que explica o risco de lesão ureteral iatrogênica na histerectomia.",
      "O trajeto intramural oblíquo do ureter na parede vesical é o mecanismo antirrefluxo natural — sua falha causa refluxo vesicoureteral, fator de risco para pielonefrite recorrente em crianças.",
      "Três estreitamentos fisiológicos do ureter (junção ureteropélvica, cruzamento com vasos ilíacos, junção ureterovesical) são os locais mais comuns de impactação de cálculos.",
    ],
    fontes: [
      { tema: "Relação do ureter com a artéria uterina (\"água sob a ponte\")", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Refluxo vesicoureteral e pielonefrite recorrente", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Ureter)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "bexiga-urinaria",
    meshNames: ["Urinary_bladder"],
    regiao: "Trato urinário inferior",
    nomeOficial: "Vesica urinaria",
    nomeComum: "Bexiga urinária",
    resumo:
      "Órgão muscular oco pélvico que armazena a urina entre as micções, com parede de músculo detrusor sob controle autonômico e voluntário coordenado — sua base contém o trígono vesical, área de referência endoscópica e clínica central.",
    descricaoAnatomica:
      "Situada na pelve, posteriormente à sínfise púbica; quando vazia, tem formato piramidal, distendendo-se superiormente ao se encher. O trígono vesical, na base, é delimitado pelos dois óstios ureterais e o óstio interno da uretra, sendo a única porção da parede vesical com mucosa lisa (não pregueada) e sensibilidade dolorosa mais proeminente.",
    funcao: [
      "Armazenamento de urina a baixa pressão durante a fase de enchimento (relaxamento do detrusor, contração do esfíncter uretral interno)",
      "Micção coordenada: contração do músculo detrusor com relaxamento do esfíncter uretral interno, sob controle do sistema nervoso autônomo e do controle voluntário cortical sobre o esfíncter externo",
    ],
    relacoesAnatomicas:
      "Relaciona-se posteriormente com o reto (homens) ou o útero/vagina (mulheres); superiormente é recoberta por peritônio, e inferiormente relaciona-se com a próstata (homens) ou a uretra/diafragma urogenital (mulheres).",
    correlacaoClinica:
      "A hiperplasia prostática benigna (em homens) causa obstrução infravesical progressiva, levando a esvaziamento incompleto, retenção urinária e hipertrofia compensatória do detrusor. A bexiga é também um sítio importante de neoplasia (carcinoma urotelial), classicamente associado ao tabagismo, com hematúria indolor como apresentação clássica. Infecções do trato urinário baixo (cistite) são extremamente comuns, sobretudo em mulheres, pela uretra mais curta.",
    doencasRelacionadas: [
      { slug: "hiperplasia-prostatica-benigna", nome: "Hiperplasia da próstata (HPB)" },
      { slug: "neoplasia-maligna-bexiga", nome: "Neoplasia maligna da bexiga" },
      { slug: "cistite-itu", nome: "Cistite (infecção do trato urinário baixo)" },
    ],
    pontosDeProva: [
      "O trígono vesical (entre os dois óstios ureterais e o óstio uretral interno) é a única região da bexiga com mucosa lisa e maior sensibilidade dolorosa — área de referência endoscópica central.",
      "Hematúria indolor é sinal de alerta clássico para neoplasia urotelial (bexiga) — deve sempre ser investigada, mesmo isolada e autolimitada.",
      "A hiperplasia prostática benigna causa obstrução infravesical progressiva com hipertrofia compensatória do detrusor, podendo evoluir para retenção urinária aguda ou crônica.",
    ],
    fontes: [
      { tema: "Anatomia do trígono vesical", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Hiperplasia prostática benigna e obstrução infravesical", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Hematúria indolor e neoplasia urotelial", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Vesica urinaria)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "uretra",
    meshNames: ["Urethra"],
    regiao: "Trato urinário inferior",
    nomeOficial: "Urethra",
    nomeComum: "Uretra",
    resumo:
      "Canal terminal que conduz a urina da bexiga ao exterior — muito mais curta na mulher que no homem, uma diferença anatômica com implicações clínicas diretas na epidemiologia das infecções urinárias.",
    descricaoAnatomica:
      "Na mulher, mede cerca de 4 cm, com trajeto curto e reto até o meato uretral externo, anterior ao intróito vaginal. No homem, mede cerca de 18-20 cm, dividida em porções prostática (atravessa a próstata, recebendo os ductos ejaculadores), membranosa (atravessa o diafragma urogenital, onde se situa o esfíncter uretral externo) e esponjosa/peniana (percorre o corpo esponjoso do pênis).",
    funcao: ["Condução da urina da bexiga ao meato externo durante a micção; no homem, via comum também para o sêmen na ejaculação"],
    relacoesAnatomicas:
      "No homem, a porção prostática recebe os ductos ejaculadores e o ducto prostático; a porção membranosa é a mais estreita e fixa, vulnerável a lesão em trauma pélvico (fratura de bacia).",
    correlacaoClinica:
      "A uretra feminina, mais curta e próxima ao intróito vaginal e ao ânus, explica a maior incidência de infecção urinária em mulheres. A estenose uretral (traumática, iatrogênica ou inflamatória) e a lesão uretral em fraturas pélvicas (tipicamente na porção membranosa) são complicações relevantes no homem. A uretrite (gonocócica ou não gonocócica, por Chlamydia) é uma das infecções sexualmente transmissíveis mais comuns.",
    doencasRelacionadas: [{ slug: "cistite-itu", nome: "Cistite (infecção do trato urinário baixo)" }],
    pontosDeProva: [
      "A uretra feminina (~4 cm) é muito mais curta que a masculina (~18-20 cm) — principal razão anatômica pela qual mulheres têm muito mais infecções urinárias que homens.",
      "A porção membranosa da uretra masculina é a mais estreita e fixa, sendo o local clássico de lesão em fraturas pélvicas com diástase — sinal de sangue no meato uretral contraindica sondagem vesical até avaliação uretrográfica.",
    ],
    fontes: [
      { tema: "Diferenças anatômicas da uretra e infecção urinária", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Lesão uretral em trauma pélvico", fonte: "Sabiston Textbook of Surgery, 21ª ed." },
      { tema: "Nomenclatura oficial (Urethra)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
