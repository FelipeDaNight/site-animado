import type { RepertorioItem } from "@/types/repertorio";

/**
 * Banco curado de repertório sociocultural.
 *
 * Cada item foi escrito com base em fatos, leis, obras e conceitos amplamente
 * documentados. Ainda assim, revise datas e números antes de usar em uma prova
 * real — e sempre prefira a fonte primária quando for citar diretamente.
 *
 * A busca (src/lib/matching.ts) é 100% local: ela só compara o tema digitado
 * com `categorias`/`palavrasChave`/`contexto` de cada item abaixo. Não há IA
 * nem chamada externa — para ampliar a cobertura de temas, basta adicionar
 * mais palavras-chave ou mais itens aqui.
 */
export const REPERTORIO: RepertorioItem[] = [
  // ---------------------------------------------------------------- educação
  {
    id: "edu-freire-dialogo",
    tipo: "citacao",
    texto:
      "Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo.",
    fonte: "Paulo Freire, em \"Pedagogia do Oprimido\"",
    ano: "1968",
    categorias: ["educação"],
    palavrasChave: [
      "educação", "ensino", "aprendizagem", "professor", "aluno", "pedagogia",
      "método de ensino", "relação professor aluno", "sala de aula",
    ],
    contexto:
      "Defende a educação como processo coletivo e dialógico, útil contra visões de ensino puramente vertical.",
  },
  {
    id: "edu-ldb",
    tipo: "lei",
    texto:
      "A Lei de Diretrizes e Bases da Educação Nacional (LDB) estabelece a educação básica como obrigatória e gratuita, dever do Estado e da família.",
    fonte: "Lei nº 9.394/1996",
    ano: "1996",
    categorias: ["educação"],
    palavrasChave: [
      "educação", "ensino", "escola pública", "acesso à educação",
      "educação básica", "obrigatoriedade escolar", "gratuidade do ensino", "ldb",
    ],
    contexto: "Base legal para argumentar sobre acesso e obrigatoriedade da educação no Brasil.",
  },
  {
    id: "edu-cf-art205",
    tipo: "lei",
    texto:
      "A Constituição Federal define a educação como \"direito de todos e dever do Estado e da família\", visando ao pleno desenvolvimento da pessoa, seu preparo para a cidadania e sua qualificação para o trabalho.",
    fonte: "Constituição Federal de 1988, Art. 205",
    ano: "1988",
    categorias: ["educação", "direitos humanos e cidadania"],
    palavrasChave: [
      "educação", "direito à educação", "cidadania", "qualificação profissional",
      "educação como direito", "constituição",
    ],
    contexto: "Embasamento constitucional amplo, aplicável a quase qualquer argumento sobre educação.",
  },
  {
    id: "edu-pro-dia",
    tipo: "obra",
    texto:
      "O documentário acompanha estudantes de escolas públicas e particulares em diferentes regiões do Brasil, expondo as disparidades do sistema educacional.",
    fonte: "\"Pro Dia Nascer Feliz\", filme de João Jardim",
    ano: "2006",
    categorias: ["educação"],
    palavrasChave: [
      "educação", "desigualdade educacional", "escola pública", "escola particular",
      "qualidade de ensino", "ensino médio", "desigualdade social",
    ],
    contexto: "Repertório audiovisual sobre desigualdade educacional entre classes sociais e regiões.",
  },
  {
    id: "edu-pnad-alfabetizacao",
    tipo: "dado",
    texto:
      "A PNAD Contínua do IBGE mostra que o analfabetismo no Brasil ainda é mais concentrado entre pessoas idosas e na região Nordeste, revelando uma desigualdade educacional histórica e regional.",
    fonte: "PNAD Contínua, IBGE",
    categorias: ["educação"],
    palavrasChave: [
      "educação", "analfabetismo", "alfabetização", "desigualdade regional",
      "nordeste", "idosos", "educação de adultos", "ibge",
    ],
    contexto: "Dado estrutural (sem número pontual, que muda a cada edição) sobre desigualdade educacional.",
  },

  // ----------------------------------------------------------- meio ambiente
  {
    id: "amb-krenak",
    tipo: "citacao",
    texto:
      "Krenak questiona a ideia de progresso que trata a natureza como recurso infinito, defendendo outras formas de relação entre humanidade e meio ambiente.",
    fonte: "Ailton Krenak, em \"Ideias para Adiar o Fim do Mundo\"",
    ano: "2019",
    categorias: ["meio ambiente"],
    palavrasChave: [
      "meio ambiente", "sustentabilidade", "povos indígenas", "crise climática",
      "consumo", "progresso", "natureza", "desenvolvimento sustentável",
    ],
    contexto: "Recoloca a crise ambiental como crise de modelo civilizatório, não só técnica.",
  },
  {
    id: "amb-acordo-paris",
    tipo: "fato_historico",
    texto:
      "O Acordo de Paris é um tratado internacional, firmado no âmbito da ONU, em que os países se comprometem a limitar o aquecimento global.",
    fonte: "ONU, Conferência do Clima (COP21)",
    ano: "2015",
    categorias: ["meio ambiente", "política e democracia"],
    palavrasChave: [
      "meio ambiente", "aquecimento global", "mudança climática", "clima",
      "acordo internacional", "emissão de carbono", "sustentabilidade",
    ],
    contexto: "Referência factual sobre governança climática global.",
  },
  {
    id: "amb-pnrs",
    tipo: "lei",
    texto:
      "A Política Nacional de Resíduos Sólidos estabelece a responsabilidade compartilhada entre governo, empresas e cidadãos pelo ciclo de vida dos produtos, do fabrico ao descarte.",
    fonte: "Lei nº 12.305/2010",
    ano: "2010",
    categorias: ["meio ambiente"],
    palavrasChave: [
      "meio ambiente", "lixo", "reciclagem", "resíduos sólidos", "consumo",
      "descarte", "sustentabilidade",
    ],
    contexto: "Base legal para temas sobre consumo, lixo e reciclagem.",
  },
  {
    id: "amb-inpe-desmatamento",
    tipo: "dado",
    texto:
      "O INPE monitora o desmatamento da Amazônia por satélite desde a década de 1980, e as variações nas taxas historicamente acompanham mudanças na fiscalização ambiental.",
    fonte: "INPE (Instituto Nacional de Pesquisas Espaciais)",
    categorias: ["meio ambiente"],
    palavrasChave: [
      "meio ambiente", "amazônia", "desmatamento", "floresta",
      "fiscalização ambiental", "sustentabilidade",
    ],
    contexto: "Dado estrutural sobre desmatamento, sem número pontual sujeito a mudar.",
  },
  {
    id: "amb-ilha-das-flores",
    tipo: "obra",
    texto:
      "O curta-metragem usa o trajeto de um tomate, do plantio ao lixão, para expor contradições do consumo, da desigualdade social e do descarte.",
    fonte: "\"Ilha das Flores\", filme de Jorge Furtado",
    ano: "1989",
    categorias: ["meio ambiente", "trabalho e desigualdade social"],
    palavrasChave: [
      "meio ambiente", "consumo", "desigualdade social", "lixo", "fome",
      "consumismo", "descarte",
    ],
    contexto: "Repertório audiovisual curto e muito citado sobre consumismo e desigualdade.",
  },

  // ------------------------------------------------- tecnologia e redes sociais
  {
    id: "tec-bauman-liquida",
    tipo: "citacao",
    texto:
      "Bauman descreve a \"modernidade líquida\": vínculos, relações e identidades cada vez mais fluidos, instáveis e descartáveis — um retrato aplicável às relações mediadas por redes sociais.",
    fonte: "Zygmunt Bauman, em \"Modernidade Líquida\"",
    ano: "2000",
    categorias: ["tecnologia e redes sociais"],
    palavrasChave: [
      "tecnologia", "redes sociais", "internet", "relacionamentos",
      "individualismo", "superficialidade", "vínculos sociais", "modernidade líquida",
    ],
    contexto: "Conceito forte para discutir superficialidade de vínculos e volatilidade nas redes.",
  },
  {
    id: "tec-dilema-das-redes",
    tipo: "obra",
    texto:
      "Ex-funcionários de grandes empresas de tecnologia explicam como algoritmos de redes sociais são desenhados para maximizar o tempo de tela e capturar atenção.",
    fonte: "\"O Dilema das Redes\" (\"The Social Dilemma\"), documentário Netflix",
    ano: "2020",
    categorias: ["tecnologia e redes sociais", "saúde mental"],
    palavrasChave: [
      "tecnologia", "redes sociais", "algoritmo", "vício em tela",
      "uso excessivo de celular", "saúde mental", "big techs", "atenção", "influenciador",
    ],
    contexto: "Repertório específico sobre design viciante de plataformas e seus efeitos.",
  },
  {
    id: "tec-marco-civil",
    tipo: "lei",
    texto:
      "O Marco Civil da Internet estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil, incluindo neutralidade de rede e proteção à privacidade.",
    fonte: "Lei nº 12.965/2014",
    ano: "2014",
    categorias: ["tecnologia e redes sociais"],
    palavrasChave: [
      "internet", "tecnologia", "regulação da internet", "liberdade de expressão",
      "neutralidade de rede", "redes sociais", "marco civil", "desinformação", "fake news",
    ],
    contexto: "Base legal para temas sobre regulação da internet e liberdade de expressão online.",
  },
  {
    id: "tec-lgpd",
    tipo: "lei",
    texto:
      "A Lei Geral de Proteção de Dados regula como empresas e governo podem coletar, usar e armazenar dados pessoais dos cidadãos.",
    fonte: "Lei nº 13.709/2018",
    ano: "2018",
    categorias: ["tecnologia e redes sociais"],
    palavrasChave: [
      "dados pessoais", "privacidade", "tecnologia", "internet",
      "proteção de dados", "vigilância digital", "lgpd",
    ],
    contexto: "Base legal para temas sobre privacidade digital e uso de dados por plataformas.",
  },
  {
    id: "tec-foucault-vigilancia",
    tipo: "citacao",
    texto:
      "O conceito de sociedade disciplinar e vigilância constante, discutido por Foucault a partir da figura do panóptico, é hoje reaplicado por pensadores contemporâneos para pensar a vigilância digital e o uso de dados.",
    fonte: "Michel Foucault, em \"Vigiar e Punir\"",
    ano: "1975",
    categorias: ["tecnologia e redes sociais", "direitos humanos e cidadania"],
    palavrasChave: [
      "tecnologia", "vigilância", "controle social", "dados pessoais",
      "privacidade", "internet", "algoritmo", "vigilância digital",
    ],
    contexto: "Conceito filosófico clássico, útil para temas sobre vigilância e controle via tecnologia.",
  },

  // ------------------------------------------------------------- saúde mental
  {
    id: "sm-oms-definicao",
    tipo: "dado",
    texto:
      "Desde 1946, a Organização Mundial da Saúde define saúde não como a mera ausência de doença, mas como \"um estado de completo bem-estar físico, mental e social\".",
    fonte: "Constituição da OMS",
    ano: "1946",
    categorias: ["saúde mental", "saúde pública"],
    palavrasChave: ["saúde mental", "saúde", "bem-estar", "qualidade de vida", "oms"],
    contexto: "Base conceitual para qualquer argumento sobre saúde mental como parte da saúde integral.",
  },
  {
    id: "sm-byung-chul-han",
    tipo: "citacao",
    texto:
      "Han descreve a \"sociedade do cansaço\": o sujeito contemporâneo se explora a si mesmo por excesso de autocobrança e pressão por produtividade, o que favorece esgotamento e depressão.",
    fonte: "Byung-Chul Han, em \"Sociedade do Cansaço\"",
    ano: "2010",
    categorias: ["saúde mental", "trabalho e desigualdade social"],
    palavrasChave: [
      "saúde mental", "produtividade", "esgotamento", "burnout", "ansiedade",
      "cobrança", "trabalho", "depressão", "sociedade do cansaço",
    ],
    contexto: "Conceito filosófico contemporâneo, ótimo para ligar saúde mental a cobrança por produtividade.",
  },
  {
    id: "sm-lei-paulo-delgado",
    tipo: "lei",
    texto:
      "A chamada Lei da Reforma Psiquiátrica redirecionou o modelo de assistência em saúde mental no Brasil, priorizando tratamento em liberdade e substituindo progressivamente os manicômios.",
    fonte: "Lei nº 10.216/2001",
    ano: "2001",
    categorias: ["saúde mental", "saúde pública"],
    palavrasChave: [
      "saúde mental", "psiquiatria", "manicômio", "tratamento psiquiátrico",
      "reforma psiquiátrica", "doença mental",
    ],
    contexto: "Base legal e histórica para temas sobre tratamento e direitos de pessoas com transtornos mentais.",
  },
  {
    id: "sm-nise",
    tipo: "obra",
    texto:
      "O filme retrata a médica Nise da Silveira e seu método humanizado de tratamento psiquiátrico, em oposição a práticas violentas como o eletrochoque.",
    fonte: "\"Nise: O Coração da Loucura\", filme de Roberto Berliner",
    ano: "2016",
    categorias: ["saúde mental"],
    palavrasChave: [
      "saúde mental", "psiquiatria", "humanização", "tratamento psiquiátrico", "doença mental",
    ],
    contexto: "Repertório audiovisual sobre humanização do tratamento psiquiátrico no Brasil.",
  },
  {
    id: "sm-oms-depressao-trabalho",
    tipo: "dado",
    texto:
      "Levantamentos da Organização Mundial da Saúde apontam a depressão como uma das principais causas de afastamento do trabalho e de perda de produtividade no mundo.",
    fonte: "OMS (Organização Mundial da Saúde)",
    categorias: ["saúde mental", "trabalho e desigualdade social"],
    palavrasChave: [
      "saúde mental", "depressão", "trabalho", "produtividade",
      "afastamento do trabalho", "ansiedade",
    ],
    contexto: "Dado estrutural para ligar saúde mental a produtividade e mercado de trabalho.",
  },

  // ------------------------------------------------- violência e segurança
  {
    id: "vio-eca",
    tipo: "lei",
    texto:
      "O Estatuto da Criança e do Adolescente estabelece a proteção integral de crianças e adolescentes como prioridade absoluta do Estado, da família e da sociedade.",
    fonte: "Lei nº 8.069/1990 (ECA)",
    ano: "1990",
    categorias: ["violência e segurança pública", "direitos humanos e cidadania"],
    palavrasChave: [
      "violência infantil", "criança", "adolescente", "proteção infantil",
      "trabalho infantil", "abuso infantil", "menores", "eca",
    ],
    contexto: "Base legal para temas sobre violência infantil, trabalho infantil e proteção de menores.",
  },
  {
    id: "vio-maria-da-penha",
    tipo: "lei",
    texto:
      "A Lei Maria da Penha cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher.",
    fonte: "Lei nº 11.340/2006",
    ano: "2006",
    categorias: ["violência e segurança pública", "direitos humanos e cidadania"],
    palavrasChave: [
      "violência contra a mulher", "violência doméstica", "violência de gênero",
      "feminicídio", "machismo", "maria da penha",
    ],
    contexto: "Base legal central para qualquer tema sobre violência de gênero.",
  },
  {
    id: "vio-arendt-banalidade",
    tipo: "citacao",
    texto:
      "Ao acompanhar o julgamento de Eichmann, Arendt cunha a expressão \"banalidade do mal\": atos extremos de violência podem ser cometidos não por monstros, mas por burocratas comuns movidos por obediência cega.",
    fonte: "Hannah Arendt, em \"Eichmann em Jerusalém\"",
    ano: "1963",
    categorias: ["violência e segurança pública", "direitos humanos e cidadania"],
    palavrasChave: [
      "violência", "genocídio", "holocausto", "obediência", "burocracia",
      "indiferença social", "violência institucional", "banalidade do mal",
    ],
    contexto: "Conceito filosófico útil para violência institucional, indiferença social e obediência a sistemas.",
  },
  {
    id: "vio-atlas-violencia",
    tipo: "dado",
    texto:
      "O Atlas da Violência, principal levantamento nacional sobre homicídios, mostra historicamente que jovens negros de periferia são o grupo mais vitimado pela violência letal no Brasil.",
    fonte: "IPEA e Fórum Brasileiro de Segurança Pública",
    categorias: ["violência e segurança pública"],
    palavrasChave: [
      "violência", "homicídio", "segurança pública", "juventude negra",
      "periferia", "racismo", "violência urbana",
    ],
    contexto: "Dado estrutural (padrão histórico, sem número de uma edição específica) sobre desigualdade racial na violência.",
  },
  {
    id: "vio-dudh",
    tipo: "fato_historico",
    texto:
      "A Declaração Universal dos Direitos Humanos foi redigida pela ONU logo após a Segunda Guerra Mundial e o Holocausto, como resposta às atrocidades cometidas.",
    fonte: "ONU",
    ano: "1948",
    categorias: ["direitos humanos e cidadania", "violência e segurança pública"],
    palavrasChave: [
      "direitos humanos", "dignidade humana", "guerra", "holocausto",
      "direitos fundamentais",
    ],
    contexto: "Base histórica e legal para qualquer tema envolvendo dignidade humana.",
  },

  // --------------------------------------------- trabalho e desigualdade social
  {
    id: "trab-marx-alienacao",
    tipo: "citacao",
    texto:
      "Marx descreve a alienação do trabalhador, que se torna estranho ao produto do próprio trabalho e ao processo produtivo sob a lógica capitalista.",
    fonte: "Karl Marx, em \"Manuscritos Econômico-Filosóficos\"",
    ano: "1844",
    categorias: ["trabalho e desigualdade social"],
    palavrasChave: [
      "trabalho", "capitalismo", "precarização do trabalho", "uberização",
      "exploração do trabalho", "mercado de trabalho", "alienação",
    ],
    contexto: "Conceito clássico para discutir precarização e sentido do trabalho, inclusive na uberização.",
  },
  {
    id: "trab-revolucao-industrial",
    tipo: "fato_historico",
    texto:
      "A Revolução Industrial, iniciada na Inglaterra do século XVIII, transformou radicalmente as relações de trabalho e deu origem às primeiras lutas trabalhistas organizadas.",
    fonte: "Contexto histórico geral",
    categorias: ["trabalho e desigualdade social"],
    palavrasChave: [
      "trabalho", "tecnologia", "revolução industrial", "direitos trabalhistas",
      "automação", "emprego",
    ],
    contexto: "Base histórica ampla para temas que relacionam tecnologia, trabalho e direitos trabalhistas.",
  },
  {
    id: "trab-clt",
    tipo: "lei",
    texto:
      "A Consolidação das Leis do Trabalho reúne as normas que regulam as relações de trabalho no Brasil, incluindo jornada, férias e direitos previdenciários.",
    fonte: "Decreto-Lei nº 5.452/1943 (CLT)",
    ano: "1943",
    categorias: ["trabalho e desigualdade social"],
    palavrasChave: [
      "trabalho", "direitos trabalhistas", "clt", "informalidade",
      "carteira assinada", "mercado de trabalho",
    ],
    contexto: "Base legal para temas sobre direitos trabalhistas, informalidade e reforma trabalhista.",
  },
  {
    id: "trab-pnad-informalidade",
    tipo: "dado",
    texto:
      "A PNAD Contínua do IBGE mostra que a informalidade no mercado de trabalho brasileiro atinge historicamente mais mulheres negras do que os demais grupos.",
    fonte: "PNAD Contínua, IBGE",
    categorias: ["trabalho e desigualdade social"],
    palavrasChave: [
      "trabalho", "informalidade", "mercado de trabalho", "desigualdade de gênero",
      "desigualdade racial", "mulher negra",
    ],
    contexto: "Dado estrutural sobre interseção de gênero, raça e informalidade no trabalho.",
  },
  {
    id: "trab-que-horas-ela-volta",
    tipo: "obra",
    texto:
      "O filme retrata as tensões entre uma empregada doméstica e a família empregadora quando a filha dela vai estudar na mesma cidade, expondo hierarquias sociais naturalizadas no Brasil.",
    fonte: "\"Que Horas Ela Volta?\", filme de Anna Muylaert",
    ano: "2015",
    categorias: ["trabalho e desigualdade social"],
    palavrasChave: [
      "trabalho doméstico", "desigualdade social", "empregada doméstica",
      "classe social", "hierarquia social",
    ],
    contexto: "Repertório cultural sobre desigualdade social e trabalho doméstico no Brasil.",
  },
  {
    id: "trab-cuidado-nao-remunerado",
    tipo: "dado",
    texto:
      "Pesquisas do IBGE mostram que mulheres dedicam, em média, muito mais horas semanais a afazeres domésticos e cuidado de pessoas do que homens, o que impacta sua inserção e progressão no mercado de trabalho formal.",
    fonte: "IBGE, Estatísticas de Gênero",
    categorias: ["trabalho e desigualdade social"],
    palavrasChave: [
      "trabalho de cuidado", "cuidado não remunerado", "trabalho doméstico",
      "sobrecarga feminina", "dupla jornada", "desigualdade de gênero",
    ],
    contexto: "Dado estrutural sobre a desigual divisão do trabalho de cuidado entre homens e mulheres.",
  },

  // ------------------------------------------- direitos humanos e cidadania
  {
    id: "dir-lei-aurea",
    tipo: "fato_historico",
    texto:
      "A Lei Áurea aboliu formalmente a escravidão no Brasil, mas não veio acompanhada de políticas de reparação, terra ou integração social para a população negra recém-liberta.",
    fonte: "Lei Áurea",
    ano: "1888",
    categorias: ["direitos humanos e cidadania"],
    palavrasChave: [
      "racismo", "escravidão", "abolição", "racismo estrutural",
      "desigualdade racial", "população negra",
    ],
    contexto: "Base histórica central para temas sobre racismo estrutural e desigualdade racial no Brasil.",
  },
  {
    id: "dir-cf-cidada",
    tipo: "fato_historico",
    texto:
      "A Constituição de 1988 é chamada de \"Constituição Cidadã\" por ter ampliado significativamente os direitos sociais e individuais após 21 anos de ditadura militar.",
    fonte: "Constituição Federal de 1988",
    ano: "1988",
    categorias: ["direitos humanos e cidadania", "política e democracia"],
    palavrasChave: [
      "cidadania", "direitos sociais", "constituição", "democracia",
      "ditadura militar", "direitos individuais",
    ],
    contexto: "Embasamento histórico-legal amplo, aplicável a quase qualquer tema de direitos e cidadania.",
  },
  {
    id: "dir-igualdade-racial",
    tipo: "lei",
    texto:
      "O Estatuto da Igualdade Racial estabelece medidas para a promoção da igualdade racial e o combate à discriminação no Brasil.",
    fonte: "Lei nº 12.288/2010",
    ano: "2010",
    categorias: ["direitos humanos e cidadania"],
    palavrasChave: [
      "racismo", "igualdade racial", "discriminação racial", "desigualdade racial",
      "população negra",
    ],
    contexto: "Base legal para temas sobre racismo e políticas de igualdade racial.",
  },
  {
    id: "dir-lei-cotas",
    tipo: "lei",
    texto:
      "A Lei de Cotas reserva parte das vagas em universidades federais e institutos técnicos para estudantes de escola pública, pretos, pardos e indígenas.",
    fonte: "Lei nº 12.711/2012",
    ano: "2012",
    categorias: ["direitos humanos e cidadania", "educação"],
    palavrasChave: [
      "cotas", "ações afirmativas", "acesso ao ensino superior", "universidade",
      "desigualdade racial", "desigualdade social", "vestibular",
    ],
    contexto: "Base legal para temas sobre acesso ao ensino superior e ações afirmativas.",
  },
  {
    id: "dir-ibge-cor-raca",
    tipo: "dado",
    texto:
      "O IBGE inclui quesitos de cor/raça em seus levantamentos, o que permite mapear e comprovar desigualdades entre grupos étnico-raciais no Brasil.",
    fonte: "IBGE",
    categorias: ["direitos humanos e cidadania", "cultura e identidade"],
    palavrasChave: [
      "racismo", "desigualdade racial", "estatística racial", "dados sobre raça",
      "população negra",
    ],
    contexto: "Dado metodológico útil para embasar argumentos sobre desigualdade racial com estatística oficial.",
  },

  // ----------------------------------------------------------- saúde pública
  {
    id: "sp-sus",
    tipo: "fato_historico",
    texto:
      "O Sistema Único de Saúde foi criado pela Constituição de 1988 e regulamentado em seguida, consagrando a saúde como \"direito de todos e dever do Estado\".",
    fonte: "Constituição Federal de 1988 e Lei nº 8.080/1990",
    ano: "1990",
    categorias: ["saúde pública"],
    palavrasChave: ["saúde pública", "sus", "acesso à saúde", "sistema de saúde", "saúde como direito"],
    contexto: "Base para praticamente qualquer tema de saúde pública no Brasil.",
  },
  {
    id: "sp-fiocruz",
    tipo: "dado",
    texto:
      "A Fiocruz é uma das principais instituições públicas de pesquisa e resposta a emergências sanitárias do Brasil, com papel central durante a pandemia de Covid-19.",
    fonte: "Fiocruz (Fundação Oswaldo Cruz)",
    categorias: ["saúde pública"],
    palavrasChave: ["saúde pública", "pandemia", "ciência", "pesquisa científica", "vacina", "fiocruz"],
    contexto: "Repertório institucional para temas de saúde pública, ciência e pandemias.",
  },
  {
    id: "sp-covid-desigualdade",
    tipo: "fato_historico",
    texto:
      "A pandemia de Covid-19 evidenciou desigualdades no acesso a leitos hospitalares, vacinas e informação entre diferentes regiões e classes sociais no Brasil.",
    fonte: "Contexto histórico recente (2020-2023)",
    categorias: ["saúde pública", "trabalho e desigualdade social"],
    palavrasChave: ["pandemia", "covid", "saúde pública", "desigualdade social", "acesso à saúde", "vacina"],
    contexto: "Exemplo recente e amplamente documentado sobre desigualdade em saúde.",
  },
  {
    id: "sp-oms-saude-social",
    tipo: "dado",
    texto:
      "Para a OMS, determinantes sociais como renda, moradia e educação afetam diretamente as condições de saúde de uma população — a saúde não depende só do sistema médico.",
    fonte: "OMS (Organização Mundial da Saúde)",
    categorias: ["saúde pública"],
    palavrasChave: [
      "saúde pública", "determinantes sociais", "desigualdade social",
      "saneamento básico", "moradia", "renda",
    ],
    contexto: "Conceito de determinantes sociais da saúde, útil para ligar saúde a desigualdade.",
  },
  {
    id: "sp-vigilancia-sanitaria",
    tipo: "lei",
    texto:
      "A Lei Orgânica da Saúde organiza o funcionamento do SUS e a vigilância sanitária e epidemiológica no país.",
    fonte: "Lei nº 8.080/1990",
    ano: "1990",
    categorias: ["saúde pública"],
    palavrasChave: [
      "saúde pública", "sus", "vigilância sanitária", "vigilância epidemiológica", "prevenção",
    ],
    contexto: "Base legal complementar ao SUS, útil para temas sobre prevenção e vigilância em saúde.",
  },

  // ------------------------------------------------------- cultura e identidade
  {
    id: "cul-stuart-hall",
    tipo: "citacao",
    texto:
      "Hall descreve como, na pós-modernidade, as identidades culturais deixam de ser fixas e passam a ser fragmentadas, múltiplas e construídas por diferentes influências.",
    fonte: "Stuart Hall, em \"A Identidade Cultural na Pós-Modernidade\"",
    ano: "1992",
    categorias: ["cultura e identidade"],
    palavrasChave: ["identidade cultural", "multiculturalismo", "globalização", "identidade", "diversidade cultural"],
    contexto: "Conceito forte para temas sobre identidade, multiculturalismo e globalização cultural.",
  },
  {
    id: "cul-bacurau",
    tipo: "obra",
    texto:
      "O filme retrata uma comunidade fictícia do sertão nordestino que resiste ao apagamento cultural e ao abandono do poder público.",
    fonte: "\"Bacurau\", filme de Kleber Mendonça Filho e Juliano Dornelles",
    ano: "2019",
    categorias: ["cultura e identidade", "política e democracia"],
    palavrasChave: [
      "cultura", "identidade", "sertão", "nordeste", "abandono do interior",
      "resistência cultural", "invisibilidade",
    ],
    contexto: "Repertório cultural sobre invisibilidade de comunidades e resistência cultural.",
  },
  {
    id: "cul-semana-22",
    tipo: "fato_historico",
    texto:
      "A Semana de Arte Moderna, realizada em São Paulo, marcou a busca por uma identidade cultural brasileira própria, rompendo com padrões artísticos europeus.",
    fonte: "Semana de Arte Moderna de 1922",
    ano: "1922",
    categorias: ["cultura e identidade"],
    palavrasChave: ["cultura brasileira", "identidade nacional", "arte", "modernismo", "valorização cultural"],
    contexto: "Marco histórico para temas sobre identidade nacional e valorização da cultura brasileira.",
  },
  {
    id: "cul-mia-couto",
    tipo: "citacao",
    texto:
      "Em sua obra, o escritor moçambicano explora a pluralidade de identidades, línguas e tradições orais nos países de língua portuguesa na África.",
    fonte: "Mia Couto, escritor moçambicano",
    categorias: ["cultura e identidade"],
    palavrasChave: ["cultura", "identidade", "língua portuguesa", "áfrica", "lusofonia", "diversidade cultural"],
    contexto: "Referência para temas sobre diversidade cultural e países lusófonos.",
  },
  {
    id: "cul-patrimonio-imaterial",
    tipo: "lei",
    texto:
      "O IPHAN reconhece manifestações como samba, capoeira e o ofício das baianas de acarajé como Patrimônio Cultural Imaterial do Brasil.",
    fonte: "IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional)",
    categorias: ["cultura e identidade"],
    palavrasChave: [
      "cultura popular", "patrimônio cultural", "manifestação cultural", "samba",
      "capoeira", "tradição",
    ],
    contexto: "Referência institucional para temas sobre valorização e preservação de manifestações culturais.",
  },

  // -------------------------------------------------------- política e democracia
  {
    id: "pol-diretas-ja",
    tipo: "fato_historico",
    texto:
      "O movimento Diretas Já mobilizou multidões pelo país pedindo eleições diretas para presidente, no fim do regime militar.",
    fonte: "Movimento Diretas Já",
    ano: "1984",
    categorias: ["política e democracia"],
    palavrasChave: [
      "democracia", "ditadura militar", "participação popular", "eleições diretas",
      "mobilização social",
    ],
    contexto: "Exemplo histórico forte de participação popular e mobilização por democracia.",
  },
  {
    id: "pol-bobbio",
    tipo: "citacao",
    texto:
      "Para Bobbio, a democracia é um processo inacabado, que precisa ser constantemente defendido e ampliado pela sociedade — nunca uma conquista definitiva.",
    fonte: "Norberto Bobbio, em \"O Futuro da Democracia\"",
    ano: "1984",
    categorias: ["política e democracia"],
    palavrasChave: ["democracia", "participação política", "direitos políticos", "cidadania"],
    contexto: "Conceito filosófico útil para temas sobre fragilidade ou fortalecimento da democracia.",
  },
  {
    id: "pol-cf88-redemocratizacao",
    tipo: "fato_historico",
    texto:
      "A promulgação da Constituição de 1988 encerrou o processo de redemocratização iniciado após 21 anos de ditadura militar (1964-1985).",
    fonte: "Constituição Federal de 1988",
    ano: "1988",
    categorias: ["política e democracia"],
    palavrasChave: ["democracia", "redemocratização", "ditadura militar", "direitos políticos", "constituição"],
    contexto: "Marco histórico central para qualquer tema sobre democracia e direitos políticos no Brasil.",
  },
  {
    id: "pol-tse-urna",
    tipo: "dado",
    texto:
      "O TSE é o órgão responsável por organizar e fiscalizar as eleições no Brasil, e adotou a urna eletrônica de forma nacional a partir de 1996.",
    fonte: "TSE (Tribunal Superior Eleitoral)",
    ano: "1996",
    categorias: ["política e democracia"],
    palavrasChave: [
      "eleições", "democracia", "voto", "urna eletrônica", "processo eleitoral",
      "confiança nas instituições",
    ],
    contexto: "Referência institucional para temas sobre processo eleitoral e confiança nas instituições.",
  },
  {
    id: "pol-arendt-condicao-humana",
    tipo: "citacao",
    texto:
      "Arendt destaca a importância do espaço público e da ação coletiva entre cidadãos como base da vida política e democrática.",
    fonte: "Hannah Arendt, em \"A Condição Humana\"",
    ano: "1958",
    categorias: ["política e democracia", "direitos humanos e cidadania"],
    palavrasChave: ["democracia", "participação política", "espaço público", "ação coletiva", "cidadania"],
    contexto: "Conceito filosófico para temas sobre participação cidadã e esfera pública.",
  },

  // ------------------------------------------------------- colonialismo e história
  {
    id: "col-fanon",
    tipo: "citacao",
    texto:
      "Fanon analisa o colonialismo como uma violência estrutural que desumaniza o colonizado, defendendo que a superação desse sistema exige libertação política e psicológica, não só o fim formal da dominação territorial.",
    fonte: "Frantz Fanon, em \"Os Condenados da Terra\"",
    ano: "1961",
    categorias: ["colonialismo e história"],
    palavrasChave: [
      "colonialismo", "colonização", "descolonização", "violência colonial", "imperialismo",
    ],
    contexto: "Referência clássica do pensamento decolonial, útil para discutir as heranças do colonialismo.",
  },
  {
    id: "col-quijano",
    tipo: "citacao",
    texto:
      "Quijano descreve a \"colonialidade do poder\": hierarquias raciais criadas durante a colonização europeia da América continuam estruturando desigualdades globais mesmo depois do fim político do colonialismo.",
    fonte: "Aníbal Quijano, sociólogo peruano",
    categorias: ["colonialismo e história", "direitos humanos e cidadania"],
    palavrasChave: [
      "colonialismo", "colonialidade", "eurocentrismo", "racismo estrutural", "desigualdade global",
    ],
    contexto: "Conceito que liga o colonialismo histórico a desigualdades raciais e globais atuais.",
  },
  {
    id: "col-genocidio-indigena",
    tipo: "fato_historico",
    texto:
      "A colonização portuguesa do Brasil, a partir de 1500, provocou um extermínio massivo de populações indígenas por violência direta, escravização e doenças trazidas pelos europeus.",
    fonte: "Contexto histórico da colonização do Brasil",
    ano: "1500",
    categorias: ["colonialismo e história", "direitos humanos e cidadania"],
    palavrasChave: [
      "colonialismo", "colonização", "povos indígenas", "genocídio indígena", "extermínio",
    ],
    contexto: "Base histórica para discutir violência colonial e a situação atual dos povos indígenas.",
  },
  {
    id: "col-descolonizacao-africa",
    tipo: "fato_historico",
    texto:
      "Entre as décadas de 1950 e 1970, a maioria dos países africanos conquistou independência política de suas metrópoles coloniais europeias, embora consequências econômicas e culturais do colonialismo persistam até hoje.",
    fonte: "Processo de descolonização da África",
    categorias: ["colonialismo e história"],
    palavrasChave: [
      "colonialismo", "descolonização", "áfrica", "independência", "imperialismo",
    ],
    contexto: "Mostra que o fim formal do colonialismo não elimina suas consequências estruturais.",
  },
  {
    id: "col-ciclo-exploracao",
    tipo: "fato_historico",
    texto:
      "O Brasil colonial foi organizado em ciclos de exploração de recursos (pau-brasil, açúcar, ouro) voltados a enriquecer a metrópole portuguesa, com pouco investimento em infraestrutura ou autonomia da colônia.",
    fonte: "Economia do Brasil colônia",
    categorias: ["colonialismo e história", "trabalho e desigualdade social"],
    palavrasChave: [
      "colonialismo", "colônia", "exploração colonial", "metrópole", "economia colonial",
    ],
    contexto: "Explica raízes históricas de desigualdades econômicas regionais no Brasil.",
  },

  // ------------------------------------------------------------ migração e refúgio
  {
    id: "mig-convencao-refugiados",
    tipo: "lei",
    texto:
      "A Convenção de 1951 da ONU relativa ao Estatuto dos Refugiados define quem pode ser reconhecido como refugiado e estabelece que nenhum país pode devolvê-lo a um local onde sua vida ou liberdade estejam em risco.",
    fonte: "ONU, Convenção de 1951",
    ano: "1951",
    categorias: ["migração e refúgio", "direitos humanos e cidadania"],
    palavrasChave: [
      "migração", "refugiados", "refúgio", "imigração", "deslocamento forçado",
    ],
    contexto: "Base legal internacional para qualquer tema sobre refugiados e direito de asilo.",
  },
  {
    id: "mig-lei-refugio-brasil",
    tipo: "lei",
    texto:
      "A Lei do Refúgio regula o reconhecimento do status de refugiado no Brasil e criou o CONARE (Comitê Nacional para Refugiados), responsável por analisar os pedidos.",
    fonte: "Lei nº 9.474/1997",
    ano: "1997",
    categorias: ["migração e refúgio"],
    palavrasChave: [
      "migração", "refugiados", "refúgio", "imigração no brasil", "conare",
    ],
    contexto: "Base legal brasileira específica para temas sobre acolhimento de refugiados.",
  },
  {
    id: "mig-bauman-estranhos",
    tipo: "citacao",
    texto:
      "Bauman analisa o medo do estrangeiro nas sociedades contemporâneas, mostrando como discursos políticos exploram crises migratórias para alimentar a xenofobia.",
    fonte: "Zygmunt Bauman, em \"Estranhos à Nossa Porta\"",
    ano: "2016",
    categorias: ["migração e refúgio"],
    palavrasChave: [
      "migração", "imigração", "xenofobia", "crise migratória", "refugiados",
    ],
    contexto: "Conceito forte para ligar migração a discurso político e xenofobia.",
  },
  {
    id: "mig-acnur",
    tipo: "dado",
    texto:
      "O ACNUR (Alto Comissariado das Nações Unidas para Refugiados) monitora deslocamentos forçados no mundo todo, sendo a principal referência internacional sobre refugiados e apátridas.",
    fonte: "ACNUR (Agência da ONU para Refugiados)",
    categorias: ["migração e refúgio"],
    palavrasChave: [
      "migração", "refugiados", "deslocamento forçado", "apátrida", "acnur",
    ],
    contexto: "Repertório institucional para embasar dados sobre migração forçada global.",
  },
  {
    id: "mig-venezuelanos-roraima",
    tipo: "fato_historico",
    texto:
      "A partir de 2015, uma grave crise econômica e política na Venezuela levou centenas de milhares de venezuelanos a migrarem para o Brasil pela fronteira com Roraima, um dos maiores fluxos migratórios recentes da América do Sul.",
    fonte: "Crise migratória venezuelana",
    ano: "2015",
    categorias: ["migração e refúgio"],
    palavrasChave: [
      "migração", "imigração", "venezuelanos", "roraima", "fronteira", "crise migratória",
    ],
    contexto: "Exemplo recente e concreto de migração forçada na América do Sul.",
  },

  // -------------------------------------------------- desinformação e fake news
  {
    id: "des-pos-verdade",
    tipo: "fato_historico",
    texto:
      "Em 2016, o Dicionário Oxford elegeu \"pós-verdade\" (post-truth) a palavra do ano, definindo um cenário em que fatos objetivos têm menos influência sobre a opinião pública do que apelos emocionais e crenças pessoais.",
    fonte: "Dicionário Oxford",
    ano: "2016",
    categorias: ["desinformação e fake news"],
    palavrasChave: [
      "desinformação", "fake news", "pós-verdade", "notícias falsas", "opinião pública",
    ],
    contexto: "Conceito-chave para introduzir qualquer discussão sobre desinformação contemporânea.",
  },
  {
    id: "des-mit-fake-news",
    tipo: "dado",
    texto:
      "Um estudo do MIT publicado na revista Science (2018) mostrou que notícias falsas se espalham significativamente mais rápido do que notícias verdadeiras nas redes sociais, especialmente por despertarem emoções mais fortes.",
    fonte: "MIT, publicado na revista Science",
    ano: "2018",
    categorias: ["desinformação e fake news", "tecnologia e redes sociais"],
    palavrasChave: [
      "desinformação", "fake news", "notícias falsas", "redes sociais", "viralização",
    ],
    contexto: "Dado científico forte para provar como a desinformação se espalha nas redes.",
  },
  {
    id: "des-arendt-mentira",
    tipo: "citacao",
    texto:
      "Arendt discute como regimes totalitários usam a repetição sistemática de mentiras para corroer a capacidade da população de distinguir fato de ficção — tema revisitado hoje nos debates sobre desinformação digital.",
    fonte: "Hannah Arendt, em \"Origens do Totalitarismo\"",
    ano: "1951",
    categorias: ["desinformação e fake news", "política e democracia"],
    palavrasChave: [
      "desinformação", "propaganda", "mentira", "totalitarismo", "manipulação política",
    ],
    contexto: "Conceito filosófico para ligar desinformação a manipulação política e histórica.",
  },
  {
    id: "des-negacionismo-cientifico",
    tipo: "fato_historico",
    texto:
      "Durante a pandemia de Covid-19, o negacionismo científico e a desinformação sobre vacinas contribuíram para menor adesão à vacinação em diversos países, fenômeno estudado por organizações de saúde global.",
    fonte: "Contexto da pandemia de Covid-19",
    categorias: ["desinformação e fake news", "saúde pública"],
    palavrasChave: [
      "negacionismo científico", "negacionismo", "antivacina", "desinformação em saúde", "ciência",
    ],
    contexto: "Liga desinformação a um caso concreto e recente de impacto na saúde pública.",
  },

  // ------------------------------------------------------------- mobilidade urbana
  {
    id: "mob-estatuto-cidade",
    tipo: "lei",
    texto:
      "O Estatuto da Cidade estabelece diretrizes para o planejamento urbano no Brasil, incluindo transporte e mobilidade, buscando garantir a função social da cidade e da propriedade urbana.",
    fonte: "Lei nº 10.257/2001",
    ano: "2001",
    categorias: ["mobilidade urbana"],
    palavrasChave: [
      "mobilidade urbana", "planejamento urbano", "cidades", "transporte", "função social da cidade",
    ],
    contexto: "Base legal para temas sobre planejamento urbano e mobilidade.",
  },
  {
    id: "mob-pnmu",
    tipo: "lei",
    texto:
      "A Política Nacional de Mobilidade Urbana prioriza modos de transporte coletivo e não motorizados sobre o transporte individual motorizado no planejamento das cidades brasileiras.",
    fonte: "Lei nº 12.587/2012",
    ano: "2012",
    categorias: ["mobilidade urbana"],
    palavrasChave: [
      "mobilidade urbana", "transporte público", "transporte coletivo", "trânsito", "ônibus",
    ],
    contexto: "Base legal específica sobre prioridades de transporte nas cidades.",
  },
  {
    id: "mob-tempo-deslocamento",
    tipo: "dado",
    texto:
      "Pesquisas de institutos de mobilidade e do IBGE mostram que trabalhadores das grandes regiões metropolitanas brasileiras estão entre os que mais gastam tempo em deslocamentos casa-trabalho no mundo.",
    fonte: "IBGE e institutos de pesquisa em mobilidade",
    categorias: ["mobilidade urbana"],
    palavrasChave: [
      "mobilidade urbana", "trânsito", "deslocamento", "transporte público", "metrópoles",
    ],
    contexto: "Dado estrutural sobre o impacto da mobilidade urbana precária na vida das pessoas.",
  },
  {
    id: "mob-transporte-publico-precario",
    tipo: "fato_historico",
    texto:
      "O investimento histórico em transporte individual (automóveis) em detrimento do transporte público de qualidade é apontado por urbanistas como uma das causas estruturais do caos na mobilidade das metrópoles brasileiras.",
    fonte: "Crítica urbanística sobre mobilidade no Brasil",
    categorias: ["mobilidade urbana"],
    palavrasChave: [
      "mobilidade urbana", "transporte público", "trânsito", "carros", "planejamento urbano",
    ],
    contexto: "Contextualiza historicamente por que a mobilidade urbana é um problema estrutural.",
  },

  // ------------------------------------------- diversidade de gênero e lgbtqia+
  {
    id: "lgbt-butler",
    tipo: "citacao",
    texto:
      "Butler argumenta que o gênero é uma construção social e performática, não uma decorrência automática do sexo biológico — base teórica central dos debates contemporâneos sobre identidade de gênero.",
    fonte: "Judith Butler, em \"Problemas de Gênero\"",
    ano: "1990",
    categorias: ["diversidade de gênero e lgbtqia+"],
    palavrasChave: [
      "gênero", "identidade de gênero", "lgbtqia+", "diversidade sexual", "construção social",
    ],
    contexto: "Referência teórica central para qualquer tema sobre identidade de gênero.",
  },
  {
    id: "lgbt-stf-homofobia-crime",
    tipo: "fato_historico",
    texto:
      "Em 2019, o Supremo Tribunal Federal decidiu que a homofobia e a transfobia devem ser enquadradas como crime de racismo até que o Congresso Nacional aprove legislação específica sobre o tema.",
    fonte: "Supremo Tribunal Federal (STF)",
    ano: "2019",
    categorias: ["diversidade de gênero e lgbtqia+", "direitos humanos e cidadania"],
    palavrasChave: [
      "lgbtqia+", "homofobia", "transfobia", "direitos lgbt", "discriminação",
    ],
    contexto: "Marco jurídico importante para temas sobre direitos e proteção de pessoas LGBTQIA+.",
  },
  {
    id: "lgbt-violencia-dados",
    tipo: "dado",
    texto:
      "Organizações como o Grupo Gay da Bahia produzem, há décadas, os principais levantamentos sobre violência contra pessoas LGBTQIA+ no Brasil, suprindo a ausência de estatísticas oficiais abrangentes do Estado.",
    fonte: "Grupo Gay da Bahia e observatórios de direitos humanos",
    categorias: ["diversidade de gênero e lgbtqia+", "violência e segurança pública"],
    palavrasChave: [
      "lgbtqia+", "violência lgbtfóbica", "homofobia", "transfobia", "discriminação",
    ],
    contexto: "Dado estrutural sobre violência contra a população LGBTQIA+ no Brasil.",
  },
  {
    id: "lgbt-nome-social",
    tipo: "lei",
    texto:
      "Decisões do STF e resoluções do CNJ garantiram o direito à retificação do nome e gênero no registro civil de pessoas trans, sem exigir cirurgia ou autorização judicial prévia.",
    fonte: "STF e CNJ",
    ano: "2018",
    categorias: ["diversidade de gênero e lgbtqia+"],
    palavrasChave: [
      "lgbtqia+", "pessoas trans", "nome social", "identidade de gênero", "registro civil",
    ],
    contexto: "Base legal para temas sobre direitos de pessoas trans.",
  },

  // ---------------------------------------------------------- segurança alimentar
  {
    id: "fome-josue-castro",
    tipo: "obra",
    texto:
      "Josué de Castro foi pioneiro ao demonstrar que a fome não é um fenômeno natural, mas resultado de escolhas políticas e econômicas, tornando-se referência mundial nos estudos sobre segurança alimentar.",
    fonte: "\"Geografia da Fome\", de Josué de Castro",
    ano: "1946",
    categorias: ["segurança alimentar"],
    palavrasChave: [
      "fome", "segurança alimentar", "insegurança alimentar", "desnutrição",
    ],
    contexto: "Obra clássica brasileira, fundamental para qualquer tema sobre fome.",
  },
  {
    id: "fome-mapa-da-fome-onu",
    tipo: "fato_historico",
    texto:
      "Em 2022, um relatório da ONU confirmou o retorno do Brasil ao Mapa da Fome, do qual havia saído havia quase duas décadas, evidenciando um retrocesso na segurança alimentar do país.",
    fonte: "Relatório da ONU (FAO)",
    ano: "2022",
    categorias: ["segurança alimentar"],
    palavrasChave: [
      "fome", "mapa da fome", "segurança alimentar", "insegurança alimentar",
    ],
    contexto: "Fato recente e concreto sobre a piora da fome no Brasil.",
  },
  {
    id: "fome-pnae",
    tipo: "lei",
    texto:
      "O Programa Nacional de Alimentação Escolar (PNAE) garante alimentação a estudantes da rede pública, com parte dos recursos destinada à compra de alimentos da agricultura familiar.",
    fonte: "PNAE",
    categorias: ["segurança alimentar", "educação"],
    palavrasChave: [
      "fome", "segurança alimentar", "merenda escolar", "alimentação escolar", "agricultura familiar",
    ],
    contexto: "Política pública que liga segurança alimentar e educação.",
  },
  {
    id: "fome-fao",
    tipo: "dado",
    texto:
      "A FAO (Organização das Nações Unidas para Agricultura e Alimentação) é a principal referência internacional para dados sobre fome e insegurança alimentar no mundo.",
    fonte: "FAO (ONU)",
    categorias: ["segurança alimentar"],
    palavrasChave: ["fome", "segurança alimentar", "insegurança alimentar", "fao"],
    contexto: "Repertório institucional para embasar dados globais sobre fome.",
  },

  // ------------------------------------------------------ envelhecimento populacional
  {
    id: "env-estatuto-idoso",
    tipo: "lei",
    texto:
      "O Estatuto do Idoso garante direitos e prioridades a pessoas com 60 anos ou mais, incluindo atendimento preferencial e proteção contra negligência e violência.",
    fonte: "Lei nº 10.741/2003",
    ano: "2003",
    categorias: ["envelhecimento populacional"],
    palavrasChave: [
      "envelhecimento", "população idosa", "idosos", "terceira idade", "estatuto do idoso",
    ],
    contexto: "Base legal central para qualquer tema sobre direitos da pessoa idosa.",
  },
  {
    id: "env-ibge-projecao",
    tipo: "dado",
    texto:
      "Projeções do IBGE indicam que a população idosa brasileira crescerá de forma acelerada nas próximas décadas, exigindo adaptações em saúde pública, previdência e mercado de trabalho.",
    fonte: "IBGE",
    categorias: ["envelhecimento populacional", "saúde pública"],
    palavrasChave: [
      "envelhecimento", "população idosa", "idosos", "previdência", "terceira idade",
    ],
    contexto: "Dado demográfico estrutural para embasar temas sobre envelhecimento populacional.",
  },
  {
    id: "env-beauvoir-velhice",
    tipo: "obra",
    texto:
      "Beauvoir critica como sociedades modernas tendem a marginalizar pessoas idosas, tratando a velhice como um problema a ser escondido em vez de uma etapa da vida a ser integrada socialmente.",
    fonte: "Simone de Beauvoir, em \"A Velhice\"",
    ano: "1970",
    categorias: ["envelhecimento populacional"],
    palavrasChave: [
      "envelhecimento", "idosos", "velhice", "terceira idade", "exclusão social",
    ],
    contexto: "Reflexão filosófica sobre como a sociedade trata o envelhecimento.",
  },
  {
    id: "env-etarismo-trabalho",
    tipo: "dado",
    texto:
      "Pessoas mais velhas costumam enfrentar dificuldade extra para se recolocar no mercado de trabalho formal, fenômeno conhecido como etarismo — uma forma de discriminação baseada na idade.",
    fonte: "Estudos sobre mercado de trabalho e discriminação etária",
    categorias: ["envelhecimento populacional", "trabalho e desigualdade social"],
    palavrasChave: [
      "etarismo", "discriminação por idade", "preconceito de idade", "mercado de trabalho", "idosos",
    ],
    contexto: "Enquadra o envelhecimento como questão de discriminação, não só demografia.",
  },

  // -------------------------------------------- religião e intolerância religiosa
  {
    id: "rel-cf-liberdade-religiosa",
    tipo: "lei",
    texto:
      "A Constituição Federal garante a liberdade de consciência e de crença, assegurando o livre exercício de cultos religiosos e a proteção aos locais de culto e suas liturgias.",
    fonte: "Constituição Federal de 1988, Art. 5º, VI",
    ano: "1988",
    categorias: ["religião e intolerância religiosa", "direitos humanos e cidadania"],
    palavrasChave: [
      "religião", "liberdade religiosa", "liberdade de crença", "intolerância religiosa",
    ],
    contexto: "Base constitucional para qualquer tema sobre liberdade religiosa no Brasil.",
  },
  {
    id: "rel-lei-discriminacao",
    tipo: "lei",
    texto:
      "A Lei nº 7.716/1989, com alterações posteriores, tipifica como crime a discriminação por motivo de religião, raça, cor, etnia ou procedência nacional.",
    fonte: "Lei nº 7.716/1989",
    ano: "1989",
    categorias: ["religião e intolerância religiosa", "direitos humanos e cidadania"],
    palavrasChave: [
      "religião", "intolerância religiosa", "discriminação religiosa", "racismo religioso",
    ],
    contexto: "Base legal para criminalizar atos de intolerância religiosa.",
  },
  {
    id: "rel-intolerancia-religioes-afro",
    tipo: "fato_historico",
    texto:
      "Religiões de matriz africana, como candomblé e umbanda, são historicamente as mais atingidas por casos de intolerância religiosa no Brasil, incluindo ataques a terreiros e agressões a seus praticantes.",
    fonte: "Contexto histórico e social brasileiro",
    categorias: ["religião e intolerância religiosa", "direitos humanos e cidadania"],
    palavrasChave: [
      "intolerância religiosa", "religiões de matriz africana", "candomblé", "umbanda", "racismo religioso",
    ],
    contexto: "Mostra a dimensão racial da intolerância religiosa no Brasil.",
  },
  {
    id: "rel-disque-100",
    tipo: "dado",
    texto:
      "O Disque 100, canal federal de denúncias de violações de direitos humanos, registra denúncias de intolerância religiosa, majoritariamente contra religiões de matriz africana.",
    fonte: "Disque Direitos Humanos (Disque 100)",
    categorias: ["religião e intolerância religiosa"],
    palavrasChave: ["intolerância religiosa", "denúncia", "religião", "direitos humanos"],
    contexto: "Repertório institucional para embasar dados sobre intolerância religiosa.",
  },

  // ---------------------------------------- pessoas com deficiência e acessibilidade
  {
    id: "pcd-lbi",
    tipo: "lei",
    texto:
      "A Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência) assegura direitos e busca remover barreiras para a inclusão social e no mercado de trabalho de pessoas com deficiência.",
    fonte: "Lei nº 13.146/2015",
    ano: "2015",
    categorias: ["pessoas com deficiência e acessibilidade", "direitos humanos e cidadania"],
    palavrasChave: [
      "pessoas com deficiência", "inclusão", "acessibilidade", "deficiência", "lbi",
    ],
    contexto: "Base legal central para qualquer tema sobre direitos de pessoas com deficiência.",
  },
  {
    id: "pcd-lei-cotas-trabalho",
    tipo: "lei",
    texto:
      "A chamada Lei de Cotas para PCD obriga empresas com 100 ou mais funcionários a reservar entre 2% e 5% das vagas para pessoas com deficiência, conforme o tamanho do quadro de funcionários.",
    fonte: "Lei nº 8.213/1991",
    ano: "1991",
    categorias: ["pessoas com deficiência e acessibilidade", "trabalho e desigualdade social"],
    palavrasChave: [
      "pessoas com deficiência", "cotas", "inclusão no mercado de trabalho", "deficiência",
    ],
    contexto: "Base legal para temas sobre inclusão de pessoas com deficiência no trabalho.",
  },
  {
    id: "pcd-acessibilidade-urbana",
    tipo: "dado",
    texto:
      "Levantamentos de institutos de mobilidade e acessibilidade apontam que a maior parte do transporte público e dos espaços urbanos brasileiros ainda não é plenamente acessível para pessoas com deficiência física, visual ou auditiva.",
    fonte: "Institutos de mobilidade e acessibilidade urbana",
    categorias: ["pessoas com deficiência e acessibilidade", "mobilidade urbana"],
    palavrasChave: [
      "pessoas com deficiência", "acessibilidade", "transporte público", "deficiência física",
    ],
    contexto: "Dado estrutural sobre a falta de acessibilidade nas cidades brasileiras.",
  },
  {
    id: "pcd-libras",
    tipo: "lei",
    texto:
      "A Lei de Libras reconhece a Língua Brasileira de Sinais como meio legal de comunicação, um marco importante para a inclusão educacional e social de pessoas surdas.",
    fonte: "Lei nº 10.436/2002",
    ano: "2002",
    categorias: ["pessoas com deficiência e acessibilidade", "educação"],
    palavrasChave: [
      "pessoas com deficiência", "libras", "surdez", "pessoas surdas", "inclusão educacional",
    ],
    contexto: "Base legal para temas sobre inclusão educacional de pessoas surdas.",
  },
];

export const CATEGORIAS = Array.from(
  new Set(REPERTORIO.flatMap((item) => item.categorias))
).sort();
