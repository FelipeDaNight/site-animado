import type { RepertorioItem } from "@/types/repertorio";

/**
 * Banco curado de repertório sociocultural.
 *
 * Cada item foi escrito com base em fatos, leis, obras e conceitos amplamente
 * documentados. Ainda assim, revise datas e números antes de usar em uma prova
 * real — e sempre prefira a fonte primária quando for citar diretamente.
 *
 * A IA nunca inventa itens novos: ela só seleciona e explica itens desta lista.
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
    contexto: "Repertório audiovisual sobre desigualdade educacional entre classes sociais e regiões.",
  },
  {
    id: "edu-pnad-alfabetizacao",
    tipo: "dado",
    texto:
      "A PNAD Contínua do IBGE mostra que o analfabetismo no Brasil ainda é mais concentrado entre pessoas idosas e na região Nordeste, revelando uma desigualdade educacional histórica e regional.",
    fonte: "PNAD Contínua, IBGE",
    categorias: ["educação"],
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
    contexto: "Base legal para temas sobre consumo, lixo e reciclagem.",
  },
  {
    id: "amb-inpe-desmatamento",
    tipo: "dado",
    texto:
      "O INPE monitora o desmatamento da Amazônia por satélite desde a década de 1980, e as variações nas taxas historicamente acompanham mudanças na fiscalização ambiental.",
    fonte: "INPE (Instituto Nacional de Pesquisas Espaciais)",
    categorias: ["meio ambiente"],
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
    contexto: "Repertório audiovisual sobre humanização do tratamento psiquiátrico no Brasil.",
  },
  {
    id: "sm-oms-depressao-trabalho",
    tipo: "dado",
    texto:
      "Levantamentos da Organização Mundial da Saúde apontam a depressão como uma das principais causas de afastamento do trabalho e de perda de produtividade no mundo.",
    fonte: "OMS (Organização Mundial da Saúde)",
    categorias: ["saúde mental", "trabalho e desigualdade social"],
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
    contexto: "Conceito filosófico útil para violência institucional, indiferença social e obediência a sistemas.",
  },
  {
    id: "vio-atlas-violencia",
    tipo: "dado",
    texto:
      "O Atlas da Violência, principal levantamento nacional sobre homicídios, mostra historicamente que jovens negros de periferia são o grupo mais vitimado pela violência letal no Brasil.",
    fonte: "IPEA e Fórum Brasileiro de Segurança Pública",
    categorias: ["violência e segurança pública"],
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
    contexto: "Conceito clássico para discutir precarização e sentido do trabalho, inclusive na uberização.",
  },
  {
    id: "trab-revolucao-industrial",
    tipo: "fato_historico",
    texto:
      "A Revolução Industrial, iniciada na Inglaterra do século XVIII, transformou radicalmente as relações de trabalho e deu origem às primeiras lutas trabalhistas organizadas.",
    fonte: "Contexto histórico geral",
    categorias: ["trabalho e desigualdade social"],
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
    contexto: "Base legal para temas sobre direitos trabalhistas, informalidade e reforma trabalhista.",
  },
  {
    id: "trab-pnad-informalidade",
    tipo: "dado",
    texto:
      "A PNAD Contínua do IBGE mostra que a informalidade no mercado de trabalho brasileiro atinge historicamente mais mulheres negras do que os demais grupos.",
    fonte: "PNAD Contínua, IBGE",
    categorias: ["trabalho e desigualdade social"],
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
    contexto: "Repertório cultural sobre desigualdade social e trabalho doméstico no Brasil.",
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
    contexto: "Base legal para temas sobre acesso ao ensino superior e ações afirmativas.",
  },
  {
    id: "dir-ibge-cor-raca",
    tipo: "dado",
    texto:
      "O IBGE inclui quesitos de cor/raça em seus levantamentos, o que permite mapear e comprovar desigualdades entre grupos étnico-raciais no Brasil.",
    fonte: "IBGE",
    categorias: ["direitos humanos e cidadania", "cultura e identidade"],
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
    contexto: "Base para praticamente qualquer tema de saúde pública no Brasil.",
  },
  {
    id: "sp-fiocruz",
    tipo: "dado",
    texto:
      "A Fiocruz é uma das principais instituições públicas de pesquisa e resposta a emergências sanitárias do Brasil, com papel central durante a pandemia de Covid-19.",
    fonte: "Fiocruz (Fundação Oswaldo Cruz)",
    categorias: ["saúde pública"],
    contexto: "Repertório institucional para temas de saúde pública, ciência e pandemias.",
  },
  {
    id: "sp-covid-desigualdade",
    tipo: "fato_historico",
    texto:
      "A pandemia de Covid-19 evidenciou desigualdades no acesso a leitos hospitalares, vacinas e informação entre diferentes regiões e classes sociais no Brasil.",
    fonte: "Contexto histórico recente (2020-2023)",
    categorias: ["saúde pública", "trabalho e desigualdade social"],
    contexto: "Exemplo recente e amplamente documentado sobre desigualdade em saúde.",
  },
  {
    id: "sp-oms-saude-social",
    tipo: "dado",
    texto:
      "Para a OMS, determinantes sociais como renda, moradia e educação afetam diretamente as condições de saúde de uma população — a saúde não depende só do sistema médico.",
    fonte: "OMS (Organização Mundial da Saúde)",
    categorias: ["saúde pública"],
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
    contexto: "Marco histórico para temas sobre identidade nacional e valorização da cultura brasileira.",
  },
  {
    id: "cul-mia-couto",
    tipo: "citacao",
    texto:
      "Em sua obra, o escritor moçambicano explora a pluralidade de identidades, línguas e tradições orais nos países de língua portuguesa na África.",
    fonte: "Mia Couto, escritor moçambicano",
    categorias: ["cultura e identidade"],
    contexto: "Referência para temas sobre diversidade cultural e países lusófonos.",
  },
  {
    id: "cul-patrimonio-imaterial",
    tipo: "lei",
    texto:
      "O IPHAN reconhece manifestações como samba, capoeira e o ofício das baianas de acarajé como Patrimônio Cultural Imaterial do Brasil.",
    fonte: "IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional)",
    categorias: ["cultura e identidade"],
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
    contexto: "Conceito filosófico para temas sobre participação cidadã e esfera pública.",
  },
];

export const CATEGORIAS = Array.from(
  new Set(REPERTORIO.flatMap((item) => item.categorias))
).sort();
