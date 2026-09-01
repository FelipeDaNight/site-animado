import type { EstruturaCirculatoria } from "./types";

// Modelo 3D: coleção "Cardiovascular system" do atlas aberto Z-Anatomy
// (z-anatomy.com, CC BY-SA 4.0, sobre base BodyParts3D), exportada,
// simplificada e comprimida (Draco) para uso na web. Servido via jsDelivr —
// ver nota em skeletalSystem.ts. O modelo completo tem mais de 700 estruturas
// vasculares nomeadas individualmente (toda a árvore arterial e venosa,
// ramo a ramo); este recorte cobre coração, grandes vasos, círculo arterial
// cerebral, circulação abdominal/pélvica e vasos de membros de alto
// rendimento em prova.
export const CIRCULATORY_MODEL_URL =
  "https://cdn.jsdelivr.net/gh/FelipeDaNight/medic-app@main/models-cdn/circulatory.glb";

export const sistemaCirculatorio: EstruturaCirculatoria[] = [
  {
    slug: "atrio-direito",
    meshNames: ["Right_atrium"],
    regiao: "Coração",
    tipo: "Câmara cardíaca",
    nomeOficial: "Atrium dextrum",
    nomeComum: "Átrio direito",
    resumo:
      "Câmara de entrada do sangue venoso sistêmico, que recebe o retorno das veias cavas superior e inferior e do seio coronário antes de bombeá-lo ao ventrículo direito.",
    trajeto:
      "Recebe a veia cava superior (drenagem da cabeça, pescoço e membros superiores) em sua parede póstero-superior, a veia cava inferior (drenagem do tronco e membros inferiores) na parede póstero-inferior, e o seio coronário (drenagem venosa do próprio coração) próximo ao óstio da veia cava inferior. Comunica-se com o ventrículo direito através da valva tricúspide. Sua parede posterior lisa (seio das veias cavas) deriva embriologicamente do seio venoso; a parede anterior trabeculada (músculos pectíneos) deriva do átrio primitivo — a crista terminalis marca essa transição e é o local do nó sinoatrial.",
    ramosOuTributarias: [
      "Recebe: veia cava superior, veia cava inferior, seio coronário",
      "Drena para: ventrículo direito, via valva tricúspide",
    ],
    correlacaoClinica:
      "O nó sinoatrial, marca-passo natural do coração, está localizado na junção entre a veia cava superior e o átrio direito — disfunção desse nó (doença do nó sinusal) causa bradicardia sinusal sintomática ou pausas sinusais. A dilatação do átrio direito é um sinal ecocardiográfico de sobrecarga de volume ou pressão do coração direito (hipertensão pulmonar, insuficiência tricúspide, CIA). Também é o local de acesso de cateteres venosos centrais e onde se forma o trombo em pacientes com fibrilação atrial que acomete o coração direito.",
    doencasRelacionadas: [{ slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" }],
    pontosDeProva: [
      "O nó sinoatrial está na junção cavoatrial (entrada da veia cava superior no átrio direito) — é o marca-passo fisiológico do coração.",
      "A crista terminalis, visível internamente, separa a porção lisa (sinusal) da porção trabeculada (pectínea) do átrio direito e marca a via preferencial de condução entre os nós sinoatrial e atrioventricular.",
    ],
    fontes: [
      { tema: "Anatomia das câmaras cardíacas", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Atrium dextrum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "atrio-esquerdo",
    meshNames: ["Left_atrium"],
    regiao: "Coração",
    tipo: "Câmara cardíaca",
    nomeOficial: "Atrium sinistrum",
    nomeComum: "Átrio esquerdo",
    resumo:
      "Câmara de entrada do sangue oxigenado vindo dos pulmões, que recebe as quatro veias pulmonares e bombeia o sangue ao ventrículo esquerdo através da valva mitral.",
    trajeto:
      "Forma a maior parte da base (face posterior) do coração. Recebe duas veias pulmonares superiores e duas inferiores (uma de cada pulmão) em sua parede posterior lisa. O apêndice atrial esquerdo, uma pequena bolsa trabeculada, projeta-se anteriormente e é o principal sítio de formação de trombo na fibrilação atrial. Comunica-se com o ventrículo esquerdo pela valva mitral (bicúspide).",
    ramosOuTributarias: [
      "Recebe: veias pulmonares superior e inferior direitas, veias pulmonares superior e inferior esquerdas",
      "Drena para: ventrículo esquerdo, via valva mitral",
    ],
    correlacaoClinica:
      "O apêndice atrial esquerdo é responsável por mais de 90% dos trombos cardioembólicos em pacientes com fibrilação atrial não valvar — por isso a oclusão percutânea do apêndice é uma alternativa à anticoagulação crônica em pacientes selecionados. A dilatação do átrio esquerdo é um marcador ecocardiográfico central de estenose/insuficiência mitral crônica e de disfunção diastólica do ventrículo esquerdo, e aumenta o risco de fibrilação atrial.",
    doencasRelacionadas: [
      { slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" },
      { slug: "valvopatia-mitral-nao-reumatica", nome: "Transtornos não-reumáticos da valva mitral" },
    ],
    pontosDeProva: [
      "O apêndice atrial esquerdo é a origem de mais de 90% dos êmbolos cardiogênicos na fibrilação atrial — base para a oclusão percutânea do apêndice como alternativa à anticoagulação.",
      "Átrio esquerdo dilatado ao ecocardiograma é sinal indireto de sobrecarga crônica do ventrículo esquerdo ou valvopatia mitral.",
    ],
    fontes: [
      { tema: "Anatomia das câmaras cardíacas e apêndice atrial", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Atrium sinistrum)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "ventriculo-direito",
    meshNames: [
      "Right_ventricle",
      "Anterior_papillary_muscle_of_right_ventricle",
      "Septal_papillary_muscle_of_right_ventricle",
      "Inferior_papillary_muscle_of_right_ventricle",
    ],
    regiao: "Coração",
    tipo: "Câmara cardíaca",
    nomeOficial: "Ventriculus dexter",
    nomeComum: "Ventrículo direito",
    resumo:
      "Câmara de baixa pressão que bombeia sangue venoso para a circulação pulmonar através do tronco pulmonar. Tem parede muscular fina (3-5 mm) em comparação ao ventrículo esquerdo, adaptada ao baixo regime pressórico do circuito pulmonar.",
    trajeto:
      "Recebe sangue do átrio direito pela valva tricúspide e o ejeta pela valva pulmonar em direção ao tronco pulmonar. A cavidade é dividida funcionalmente numa porção de entrada trabeculada e num infundíbulo (cone arterial) liso que conduz à valva pulmonar. Os músculos papilares anterior, septal e inferior ancoram as cordas tendíneas das cúspides da valva tricúspide.",
    ramosOuTributarias: [
      "Recebe: átrio direito, via valva tricúspide",
      "Ejeta para: tronco pulmonar, via valva pulmonar",
    ],
    correlacaoClinica:
      "Por ter parede fina, o ventrículo direito é particularmente sensível a aumentos agudos de pós-carga — uma embolia pulmonar maciça pode causar dilatação e falência aguda do VD (cor pulmonale agudo) e choque obstrutivo. Já a sobrecarga crônica (hipertensão pulmonar, DPOC) causa hipertrofia e dilatação progressivas (cor pulmonale crônico). O infarto de ventrículo direito, geralmente associado a infarto inferior por oclusão proximal da coronária direita, causa hipotensão que piora com nitratos (por depender de pré-carga) — nunca administrar nitrato nesse contexto.",
    doencasRelacionadas: [
      { slug: "embolia-pulmonar", nome: "Embolia pulmonar" },
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
    ],
    pontosDeProva: [
      "No infarto de ventrículo direito (geralmente com infarto inferior), nitratos estão contraindicados pois pioram a hipotensão ao reduzir a pré-carga de uma câmara pré-carga-dependente.",
      "Embolia pulmonar maciça pode causar falência aguda do VD e choque obstrutivo, pela incapacidade da parede fina em vencer o aumento súbito da resistência vascular pulmonar.",
    ],
    fontes: [
      { tema: "Anatomia e fisiologia do ventrículo direito", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Infarto de VD e manejo hemodinâmico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "ventriculo-esquerdo",
    meshNames: ["Left_ventricle", "Inferior_papillary_muscle_of_left_ventricle"],
    regiao: "Coração",
    tipo: "Câmara cardíaca",
    nomeOficial: "Ventriculus sinister",
    nomeComum: "Ventrículo esquerdo",
    resumo:
      "Câmara de alta pressão responsável por ejetar sangue oxigenado para toda a circulação sistêmica através da valva aórtica. Tem a parede muscular mais espessa do coração (8-12 mm), com formato cônico e secção transversal circular.",
    trajeto:
      "Recebe sangue do átrio esquerdo pela valva mitral e o ejeta pela valva aórtica. Os dois músculos papilares (anterolateral e posteromedial — este modelado aqui como músculo papilar inferior) ancoram as cordas tendíneas das cúspides mitrais, impedindo seu prolapso durante a sístole. A espessura da parede reflete a alta pressão sistólica que precisa gerar (~120 mmHg) contra a resistência vascular sistêmica.",
    ramosOuTributarias: [
      "Recebe: átrio esquerdo, via valva mitral",
      "Ejeta para: aorta ascendente, via valva aórtica",
    ],
    correlacaoClinica:
      "É a câmara mais comumente acometida por hipertrofia (hipertensão arterial crônica, estenose aórtica) e por infarto do miocárdio, sendo a fração de ejeção do VE o principal parâmetro prognóstico na insuficiência cardíaca. A ruptura de músculo papilar pós-infarto é uma complicação mecânica grave que causa insuficiência mitral aguda e edema pulmonar fulminante. A disfunção sistólica do VE (fração de ejeção reduzida) define a insuficiência cardíaca com fração de ejeção reduzida (ICFEr).",
    doencasRelacionadas: [
      { slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" },
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" },
    ],
    pontosDeProva: [
      "Ruptura de músculo papilar (geralmente o posteromedial, por receber suprimento de uma única artéria) é uma complicação mecânica do IAM que causa insuficiência mitral aguda grave e edema pulmonar súbito.",
      "A fração de ejeção do ventrículo esquerdo é o parâmetro central que classifica e orienta o tratamento da insuficiência cardíaca (reduzida, levemente reduzida ou preservada).",
    ],
    fontes: [
      { tema: "Anatomia do ventrículo esquerdo e músculos papilares", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Complicações mecânicas do IAM", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "valva-tricuspide",
    meshNames: [
      "Inferior_leaflet_of_right_atrioventricular_valve",
      "Septal_leaflet_of_right_atrioventricular_valve",
    ],
    regiao: "Coração",
    tipo: "Valva cardíaca",
    nomeOficial: "Valva atrioventricularis dextra (valva tricuspidalis)",
    nomeComum: "Valva tricúspide",
    resumo:
      "Valva atrioventricular direita, com três cúspides (anterior, posterior/inferior e septal), que impede o refluxo de sangue do ventrículo direito para o átrio direito durante a sístole.",
    trajeto:
      "Localizada no óstio atrioventricular direito. Suas cúspides (o modelo representa as cúspides septal e inferior) são ancoradas por cordas tendíneas aos músculos papilares anterior, septal e inferior do ventrículo direito, o que impede sua eversão para o átrio quando a pressão intraventricular se eleva na sístole.",
    ramosOuTributarias: [
      "Separa: átrio direito e ventrículo direito",
      "Ancorada por cordas tendíneas aos músculos papilares anterior, septal e inferior do VD",
    ],
    correlacaoClinica:
      "A insuficiência tricúspide é mais comumente funcional (secundária à dilatação do anel por sobrecarga do VD/hipertensão pulmonar) do que orgânica, mas endocardite infecciosa da tricúspide é classicamente associada a usuários de drogas injetáveis, pela via de entrada venosa dos patógenos. A estenose tricúspide isolada é rara e quase sempre de etiologia reumática.",
    doencasRelacionadas: [{ slug: "endocardite-infecciosa", nome: "Endocardite infecciosa" }],
    pontosDeProva: [
      "Endocardite da valva tricúspide é a apresentação clássica em usuários de drogas injetáveis, refletindo a via de entrada venosa periférica dos microrganismos.",
      "Insuficiência tricúspide é mais frequentemente funcional (dilatação do anel por sobrecarga do VD) do que por doença orgânica da valva.",
    ],
    fontes: [
      { tema: "Anatomia da valva tricúspide", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Valva atrioventricularis dextra)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "valva-mitral",
    meshNames: ["Posterior_leaflet_of_left_atrioventricular_valve"],
    regiao: "Coração",
    tipo: "Valva cardíaca",
    nomeOficial: "Valva atrioventricularis sinistra (valva mitralis)",
    nomeComum: "Valva mitral (bicúspide)",
    resumo:
      "Valva atrioventricular esquerda, com duas cúspides (anterior e posterior — o modelo representa a cúspide posterior), que impede o refluxo de sangue do ventrículo esquerdo para o átrio esquerdo durante a sístole.",
    trajeto:
      "Localizada no óstio atrioventricular esquerdo. A cúspide anterior (aórtica), maior e mais móvel, compartilha continuidade fibrosa com a valva aórtica; a posterior (mural) é menor e mais alongada. Ambas são ancoradas por cordas tendíneas aos músculos papilares anterolateral e posteromedial do ventrículo esquerdo.",
    ramosOuTributarias: [
      "Separa: átrio esquerdo e ventrículo esquerdo",
      "Ancorada por cordas tendíneas aos músculos papilares anterolateral e posteromedial do VE",
    ],
    correlacaoClinica:
      "O prolapso da valva mitral é a valvopatia mais comum na população geral e geralmente benigno, mas pode evoluir com insuficiência mitral significativa. A estenose mitral é quase sempre sequela de febre reumática, causando hipertensão e congestão pulmonar por dificuldade de esvaziamento atrial esquerdo. A ruptura de corda tendínea ou de músculo papilar (pós-infarto) causa insuficiência mitral aguda grave, com edema agudo de pulmão.",
    doencasRelacionadas: [{ slug: "valvopatia-mitral-nao-reumatica", nome: "Transtornos não-reumáticos da valva mitral" }],
    pontosDeProva: [
      "A cúspide anterior da valva mitral tem continuidade fibrosa direta com a valva aórtica — relevante na endocardite, que pode se estender de uma valva à outra.",
      "Estenose mitral quase sempre indica etiologia reumática prévia, enquanto insuficiência mitral tem espectro etiológico mais amplo (degenerativa, isquêmica, prolapso).",
    ],
    fontes: [
      { tema: "Anatomia da valva mitral", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Valva atrioventricularis sinistra)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "valva-aortica",
    meshNames: ["Left_coronary_leaflet", "Right_coronary_leaflet", "Non-coronary_leaflet"],
    regiao: "Coração",
    tipo: "Valva cardíaca",
    nomeOficial: "Valva aortae",
    nomeComum: "Valva aórtica",
    resumo:
      "Valva semilunar com três cúspides (coronária esquerda, coronária direita e não-coronária) que separa o ventrículo esquerdo da aorta ascendente, impedindo o refluxo diastólico de sangue para o ventrículo.",
    trajeto:
      "Situada no óstio da aorta, na junção ventrículo-arterial. As cúspides coronária esquerda e coronária direita recebem essa denominação porque os óstios das artérias coronárias esquerda e direita se originam logo acima delas, nos seios de Valsalva correspondentes; a cúspide não-coronária não tem óstio coronariano associado.",
    ramosOuTributarias: [
      "Separa: ventrículo esquerdo e aorta ascendente",
      "Seios de Valsalva acima das cúspides coronária esquerda e direita dão origem às artérias coronárias esquerda e direita",
    ],
    correlacaoClinica:
      "A valva aórtica bicúspide (anomalia congênita mais comum do coração) predispõe a estenose aórtica calcífica precoce e a dissecção de aorta. A estenose aórtica calcífica degenerativa é a valvopatia mais comum em idosos nos países desenvolvidos, causando a tríade clássica de angina, síncope e dispneia aos esforços, com sopro sistólico ejetivo em foco aórtico irradiado para carótidas.",
    doencasRelacionadas: [
      { slug: "valvopatia-aortica-nao-reumatica", nome: "Transtornos não-reumáticos da valva aórtica" },
      { slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" },
    ],
    pontosDeProva: [
      "As cúspides coronária esquerda e direita da valva aórtica dão origem, em seus seios de Valsalva, às respectivas artérias coronárias — a cúspide não-coronária não tem óstio.",
      "Valva aórtica bicúspide é a malformação cardíaca congênita mais comum e predispõe a estenose aórtica precoce e dissecção de aorta.",
    ],
    fontes: [
      { tema: "Anatomia da valva aórtica e seios de Valsalva", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Valva aortae)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "valva-pulmonar",
    meshNames: [
      "Anterior_semilunar_leaflet_of_pulmonary_valve",
      "Left_semilunar_leaflet_of_pulmonary_valve",
      "Right_semilunar_leaflet_of_pulmonary_valve",
    ],
    regiao: "Coração",
    tipo: "Valva cardíaca",
    nomeOficial: "Valva trunci pulmonalis",
    nomeComum: "Valva pulmonar",
    resumo:
      "Valva semilunar com três cúspides (anterior, esquerda e direita) que separa o ventrículo direito do tronco pulmonar, impedindo o refluxo diastólico de sangue para o ventrículo direito.",
    trajeto:
      "Situada no óstio do tronco pulmonar, na saída do infundíbulo do ventrículo direito. Ao contrário da valva aórtica, não tem relação com óstios coronarianos — nenhuma artéria coronária se origina acima das cúspides pulmonares.",
    ramosOuTributarias: ["Separa: ventrículo direito e tronco pulmonar"],
    correlacaoClinica:
      "A estenose pulmonar congênita isolada é uma cardiopatia congênita relativamente comum, geralmente bem tolerada quando leve; formas graves causam cianose e insuficiência cardíaca direita no período neonatal. É também um dos quatro componentes da tetralogia de Fallot (junto com CIV, cavalgamento da aorta e hipertrofia do VD).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A estenose da valva pulmonar é um dos quatro componentes anatômicos da tetralogia de Fallot, contribuindo para o shunt direita-esquerda e a cianose.",
      "Diferente da valva aórtica, nenhuma artéria coronária se origina dos seios da valva pulmonar.",
    ],
    fontes: [
      { tema: "Anatomia da valva pulmonar", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Valva trunci pulmonalis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "arteria-coronaria-esquerda",
    meshNames: ["Left_coronary_artery"],
    regiao: "Coração",
    tipo: "Artéria",
    nomeOficial: "Arteria coronaria sinistra",
    nomeComum: "Artéria coronária esquerda",
    resumo:
      "Origina-se do seio coronário esquerdo da aorta ascendente e, após um curto trajeto (tronco da coronária esquerda), bifurca-se em artéria interventricular anterior (descendente anterior) e artéria circunflexa, irrigando a maior parte do ventrículo esquerdo.",
    trajeto:
      "Emerge do seio de Valsalva esquerdo, passa entre o tronco pulmonar e o apêndice atrial esquerdo, e se bifurca (tronco da coronária esquerda, geralmente curto, de 1-2,5 cm) em ramo interventricular anterior (que desce pelo sulco interventricular anterior, irrigando a parede anterior do VE e os 2/3 anteriores do septo interventricular) e ramo circunflexo (que percorre o sulco atrioventricular esquerdo, irrigando a parede lateral e posterior do VE).",
    ramosOuTributarias: [
      "Ramo interventricular anterior (descendente anterior) — parede anterior do VE, septo interventricular anterior",
      "Ramo circunflexo — parede lateral e posterior do VE",
    ],
    correlacaoClinica:
      "A obstrução do tronco da coronária esquerda ('lesão de tronco') é uma emergência cardiovascular máxima, por comprometer de uma vez toda a circulação da parede anterior, lateral e septal do VE — classicamente indicação de revascularização cirúrgica de urgência. A oclusão da descendente anterior causa infarto anterior extenso (alterações de ST em V1-V4) com alto risco de disfunção ventricular e bloqueios de condução por acometer o septo.",
    doencasRelacionadas: [
      { slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" },
      { slug: "angina-pectoris", nome: "Angina pectoris" },
    ],
    pontosDeProva: [
      "Lesão de tronco de coronária esquerda (>50% de estenose) é indicação clássica de revascularização cirúrgica (CRVM) em vez de apenas tratamento clínico, pelo território miocárdico maciço em risco.",
      "Infarto de parede anterior (V1-V4 no ECG) indica oclusão da artéria descendente anterior, com maior risco de disfunção sistólica e bloqueios de ramo por envolvimento septal.",
    ],
    fontes: [
      { tema: "Anatomia da circulação coronariana", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Correlação ECG-território coronariano no IAM", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-coronaria-direita",
    meshNames: ["Right_coronary_artery", "Right_inferolateral_branch_of_right_coronary_artery"],
    regiao: "Coração",
    tipo: "Artéria",
    nomeOficial: "Arteria coronaria dextra",
    nomeComum: "Artéria coronária direita",
    resumo:
      "Origina-se do seio coronário direito da aorta ascendente e percorre o sulco atrioventricular direito, irrigando o átrio e ventrículo direitos e, na maioria das pessoas, a face inferior/posterior do ventrículo esquerdo e o nó atrioventricular.",
    trajeto:
      "Emerge do seio de Valsalva direito, passa entre o tronco pulmonar e o apêndice atrial direito, percorre o sulco atrioventricular direito e, na maioria dos indivíduos (dominância direita, ~70%), origina a artéria interventricular posterior (descendente posterior) no sulco interventricular posterior. Dá também ramos ao nó sinoatrial (em ~60% das pessoas) e ao nó atrioventricular (na grande maioria).",
    ramosOuTributarias: [
      "Ramo do nó sinoatrial (na maioria dos casos)",
      "Ramo do nó atrioventricular",
      "Ramo interventricular posterior (descendente posterior), na dominância direita",
      "Ramo inferolateral do ventrículo direito",
    ],
    correlacaoClinica:
      "A oclusão da coronária direita proximal causa infarto de parede inferior (alterações de ST em DII, DIII e aVF) e é a causa mais comum de bradiarritmias e bloqueio atrioventricular no IAM, por comprometer o suprimento dos nós sinoatrial e atrioventricular. Também é a causa mais frequente de infarto de ventrículo direito associado, situação em que nitratos são contraindicados.",
    doencasRelacionadas: [{ slug: "infarto-agudo-miocardio", nome: "Infarto agudo do miocárdio" }],
    pontosDeProva: [
      "Infarto de parede inferior (DII, DIII, aVF) sugere oclusão da coronária direita e deve levantar suspeita de infarto de VD associado e de bloqueio atrioventricular.",
      "A artéria do nó atrioventricular origina-se da coronária direita na grande maioria das pessoas, explicando o bloqueio AV como complicação típica do infarto inferior.",
    ],
    fontes: [
      { tema: "Anatomia da circulação coronariana", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Correlação ECG-território coronariano no IAM", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "seio-coronario",
    meshNames: ["Coronary_sinus"],
    regiao: "Coração",
    tipo: "Veia",
    nomeOficial: "Sinus coronarius",
    nomeComum: "Seio coronário",
    resumo:
      "Principal via de drenagem venosa do coração, um curto trajeto dilatado no sulco atrioventricular posterior que recebe a maior parte das veias cardíacas antes de desembocar no átrio direito.",
    trajeto:
      "Percorre o sulco atrioventricular posterior (coronário) na face diafragmática do coração e desemboca no átrio direito, entre o óstio da veia cava inferior e a valva tricúspide, protegido por uma pequena válvula (válvula de Tebésio). Recebe as veias cardíacas magna, média, parva e as veias oblíquas do átrio esquerdo.",
    ramosOuTributarias: ["Recebe: veia cardíaca magna, veia cardíaca média, veia cardíaca parva", "Drena para: átrio direito"],
    correlacaoClinica:
      "O seio coronário é a via de acesso venoso utilizada para implante do eletrodo de ressincronização ventricular esquerda em terapia de ressincronização cardíaca (TRC), pois permite alcançar a parede lateral do ventrículo esquerdo sem necessidade de acesso arterial. A dilatação do seio coronário no ecocardiograma pode indicar drenagem anômala de veia cava superior esquerda persistente.",
    doencasRelacionadas: [{ slug: "insuficiencia-cardiaca", nome: "Insuficiência cardíaca" }],
    pontosDeProva: [
      "O seio coronário é a rota de acesso para o eletrodo de ressincronização ventricular esquerda na terapia de ressincronização cardíaca.",
      "Desemboca no átrio direito entre o óstio da veia cava inferior e a valva tricúspide, protegido pela válvula de Tebésio.",
    ],
    fontes: [
      { tema: "Anatomia da drenagem venosa cardíaca", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Acesso venoso na terapia de ressincronização cardíaca", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "aorta-ascendente",
    meshNames: ["Ascending_aorta"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Aorta ascendens",
    nomeComum: "Aorta ascendente",
    resumo:
      "Primeiro segmento da aorta, que se origina no óstio aórtico do ventrículo esquerdo e termina no arco da aorta, dando origem às artérias coronárias em sua porção inicial (bulbo aórtico/seios de Valsalva).",
    trajeto:
      "Inicia-se na valva aórtica, dentro do pericárdio, e ascende cerca de 5 cm até o nível do ângulo esternal, onde se continua como o arco da aorta. É totalmente intrapericárdica, envolta por um único folheto de pericárdio seroso junto com o tronco pulmonar.",
    ramosOuTributarias: ["Artéria coronária esquerda (seio de Valsalva esquerdo)", "Artéria coronária direita (seio de Valsalva direito)"],
    correlacaoClinica:
      "A dilatação da raiz da aorta ascendente (aneurisma) é característica de doenças do tecido conjuntivo como a síndrome de Marfan, e pode levar à insuficiência aórtica por distorção do anel valvar. A dissecção de aorta tipo A (Stanford), que envolve a aorta ascendente, é uma emergência cirúrgica pelo risco de tamponamento cardíaco, insuficiência aórtica aguda e extensão às coronárias.",
    doencasRelacionadas: [{ slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" }],
    pontosDeProva: [
      "Dissecção de aorta envolvendo a aorta ascendente (Stanford tipo A) é sempre uma emergência cirúrgica, pelo risco de tamponamento, insuficiência aórtica aguda e infarto por extensão às coronárias.",
      "A aorta ascendente é totalmente intrapericárdica — sua ruptura causa tamponamento cardíaco antes de qualquer outra manifestação.",
    ],
    fontes: [
      { tema: "Anatomia da aorta ascendente", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Classificação de Stanford para dissecção de aorta", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arco-aorta",
    meshNames: ["Aortic_arch"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Arcus aortae",
    nomeComum: "Arco da aorta",
    resumo:
      "Segmento curvo da aorta que conecta a aorta ascendente à aorta torácica descendente, dando origem aos três grandes ramos que irrigam a cabeça, pescoço e membros superiores.",
    trajeto:
      "Curva-se posteriormente sobre o brônquio principal esquerdo e a bifurcação traqueal, ao nível de T4, dando origem (da direita para a esquerda) ao tronco braquiocefálico, à artéria carótida comum esquerda e à artéria subclávia esquerda. Contém os barorreceptores do arco aórtico (importantes na regulação da pressão arterial) e é cruzado pelo nervo laríngeo recorrente esquerdo, que contorna o ligamento arterioso.",
    ramosOuTributarias: ["Tronco braquiocefálico", "Artéria carótida comum esquerda", "Artéria subclávia esquerda"],
    correlacaoClinica:
      "O nervo laríngeo recorrente esquerdo, ao contornar o arco da aorta junto ao ligamento arterioso, pode ser comprimido por um aneurisma do arco aórtico ou por uma massa mediastinal, causando rouquidão (sinal de Ortner) — um exemplo clássico de correlação anatomoclínica à distância. Coarctação da aorta, um estreitamento congênito geralmente logo após a origem da subclávia esquerda, causa hipertensão nos membros superiores com pulsos femorais diminuídos e retardados.",
    doencasRelacionadas: [{ slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" }],
    pontosDeProva: [
      "O nervo laríngeo recorrente esquerdo contorna o arco da aorta junto ao ligamento arterioso — sua compressão por aneurisma aórtico ou massa mediastinal causa rouquidão (sinal de Ortner).",
      "Coarctação da aorta clássica ocorre próximo à origem da subclávia esquerda, causando o padrão de hipertensão em membros superiores com pulsos femorais fracos e retardados ('diferencial de pulso').",
    ],
    fontes: [
      { tema: "Anatomia do arco da aorta e relações", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Arcus aortae)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "aorta-toracica",
    meshNames: ["Thoracic_aorta"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Pars thoracica aortae",
    nomeComum: "Aorta torácica (descendente)",
    resumo:
      "Continuação do arco da aorta, que desce pelo mediastino posterior à esquerda da coluna vertebral até atravessar o diafragma (hiato aórtico, nível de T12) e se tornar a aorta abdominal.",
    trajeto:
      "Desce anteriormente à coluna vertebral torácica, deslocando-se progressivamente para a linha média à medida que desce. Dá origem às artérias intercostais posteriores (irrigação da parede torácica e da medula espinhal via ramos espinhais), artérias brônquicas, esofágicas e frênicas superiores.",
    ramosOuTributarias: ["Artérias intercostais posteriores", "Artérias brônquicas", "Artérias esofágicas", "Artérias frênicas superiores"],
    correlacaoClinica:
      "A artéria de Adamkiewicz (artéria radicular magna), um ramo de uma das artérias intercostais posteriores inferiores (mais comumente entre T9-T12), é a principal fonte de suprimento da medula espinhal toracolombar — sua lesão durante cirurgia de aneurisma de aorta torácica é a causa clássica de isquemia medular e paraplegia pós-operatória. Aneurismas de aorta torácica descendente são frequentemente ateroscleróticos e podem se estender para a aorta abdominal (aneurisma toracoabdominal).",
    doencasRelacionadas: [{ slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" }],
    pontosDeProva: [
      "A artéria de Adamkiewicz, ramo de uma artéria intercostal posterior (geralmente T9-T12), é a principal irrigação da medula espinhal toracolombar — sua lesão em cirurgia aórtica causa paraplegia isquêmica.",
      "Dissecção de aorta torácica descendente isolada (Stanford tipo B) é geralmente tratada clinicamente, ao contrário da dissecção tipo A.",
    ],
    fontes: [
      { tema: "Anatomia da aorta torácica e artéria de Adamkiewicz", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Isquemia medular em cirurgia de aorta", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "aorta-abdominal",
    meshNames: ["Abdominal_aorta"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Pars abdominalis aortae",
    nomeComum: "Aorta abdominal",
    resumo:
      "Continuação da aorta torácica após o diafragma, que desce anteriormente à coluna lombar e termina bifurcando-se nas artérias ilíacas comuns ao nível de L4, irrigando as vísceras abdominais e os membros inferiores.",
    trajeto:
      "Entra no abdome pelo hiato aórtico do diafragma (T12) e desce até L4, onde se bifurca. Dá origem a ramos viscerais ímpares na linha média (tronco celíaco, artéria mesentérica superior, artéria mesentérica inferior), ramos viscerais pares laterais (renais, suprarrenais, gonadais) e ramos parietais (frênicas inferiores, lombares).",
    ramosOuTributarias: [
      "Tronco celíaco, artéria mesentérica superior, artéria mesentérica inferior (ímpares)",
      "Artérias renais, suprarrenais médias, gonadais (pares)",
      "Bifurca-se em artérias ilíacas comuns direita e esquerda (L4)",
    ],
    correlacaoClinica:
      "O aneurisma de aorta abdominal (AAA), tipicamente infrarrenal, é a apresentação mais comum de aneurisma aórtico e é rastreado por ultrassonografia em homens fumantes de 65-75 anos; sua ruptura tem mortalidade extremamente alta. A localização em L4 (nível da cicatriz umbilical) é um marco de superfície útil no exame físico para palpação da aorta abdominal.",
    doencasRelacionadas: [{ slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" }],
    pontosDeProva: [
      "A bifurcação da aorta abdominal em L4 corresponde, na superfície, ao nível da cicatriz umbilical — marco útil para localizar e palpar a aorta no exame físico.",
      "Rastreamento de aneurisma de aorta abdominal por ultrassom é recomendado para homens de 65-75 anos com história de tabagismo, pelo risco de ruptura com mortalidade altíssima.",
    ],
    fontes: [
      { tema: "Anatomia da aorta abdominal e ramos", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Rastreamento de aneurisma de aorta abdominal", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "tronco-braquiocefalico",
    meshNames: ["Brachiocephalic_trunk"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Truncus brachiocephalicus",
    nomeComum: "Tronco braquiocefálico",
    resumo:
      "Primeiro e maior ramo do arco da aorta, que se bifurca atrás da articulação esternoclavicular direita nas artérias carótida comum direita e subclávia direita — o único dos três grandes ramos do arco a se dividir dessa forma, já que os vasos esquerdos correspondentes se originam diretamente do arco.",
    trajeto:
      "Origina-se do arco da aorta, ascende obliquamente para a direita e posteriormente à articulação esternoclavicular direita, onde se bifurca em artéria carótida comum direita (que ascende ao pescoço) e artéria subclávia direita (que segue ao membro superior).",
    ramosOuTributarias: ["Artéria carótida comum direita", "Artéria subclávia direita"],
    correlacaoClinica:
      "A assimetria da origem dos vasos do arco aórtico (tronco braquiocefálico à direita vs. carótida e subclávia diretamente do arco à esquerda) explica por que a paralisia do nervo laríngeo recorrente direito ocorre por lesões mais altas no pescoço, enquanto a paralisia do esquerdo ocorre por lesões mediastinais/torácicas — o recorrente direito contorna a artéria subclávia direita, não o arco aórtico.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O tronco braquiocefálico é exclusivo do lado direito — a carótida comum e a subclávia esquerdas originam-se diretamente do arco da aorta, sem tronco comum.",
      "Essa assimetria explica por que o nervo laríngeo recorrente direito contorna a artéria subclávia direita (não o arco aórtico), tendo trajeto cervical mais alto que o esquerdo.",
    ],
    fontes: [
      { tema: "Anatomia dos ramos do arco da aorta", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Truncus brachiocephalicus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "veia-cava-superior",
    meshNames: ["Superior_vena_cava"],
    regiao: "Grandes vasos",
    tipo: "Veia",
    nomeOficial: "Vena cava superior",
    nomeComum: "Veia cava superior",
    resumo:
      "Principal via de retorno venoso da cabeça, pescoço, membros superiores e parte superior do tronco para o átrio direito, formada pela união das veias braquiocefálicas direita e esquerda.",
    trajeto:
      "Formada posteriormente à primeira cartilagem costal direita pela junção das veias braquiocefálicas direita e esquerda, desce ao longo da borda direita do esterno e desemboca no átrio direito. Recebe a veia ázigo pouco antes de entrar no pericárdio.",
    ramosOuTributarias: ["Veia braquiocefálica direita", "Veia braquiocefálica esquerda", "Veia ázigo"],
    correlacaoClinica:
      "A síndrome da veia cava superior, causada por compressão ou invasão neoplásica (mais comumente câncer de pulmão ou linfoma mediastinal), causa edema e turgência venosa de face, pescoço e membros superiores, cefaleia e circulação colateral visível no tórax — uma emergência oncológica relativa. É também o local de posicionamento da ponta de cateteres venosos centrais.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Síndrome da veia cava superior é classicamente causada por neoplasia mediastinal (câncer de pulmão, linfoma) comprimindo ou invadindo o vaso, causando edema de face e pescoço com circulação colateral torácica visível.",
      "A ponta correta de um cateter venoso central deve estar na junção cavoatrial (veia cava superior/átrio direito), confirmada por radiografia de tórax.",
    ],
    fontes: [
      { tema: "Anatomia da veia cava superior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndrome da veia cava superior", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "veia-cava-inferior",
    meshNames: ["Inferior_vena_cava_abdominal_part", "Inferior_vena_cava_thoracic_part"],
    regiao: "Grandes vasos",
    tipo: "Veia",
    nomeOficial: "Vena cava inferior",
    nomeComum: "Veia cava inferior",
    resumo:
      "Maior veia do corpo, responsável pelo retorno venoso do tronco inferior, vísceras abdominais e membros inferiores para o átrio direito, formada pela junção das veias ilíacas comuns.",
    trajeto:
      "Formada por trás pela junção das veias ilíacas comuns ao nível de L5, ascende à direita da aorta abdominal, recebendo as veias renais, gonadal direita (a esquerda drena na veia renal esquerda), hepáticas e lombares, até atravessar o diafragma (forame da veia cava, T8) e desembocar no átrio direito.",
    ramosOuTributarias: ["Veias ilíacas comuns", "Veias renais", "Veia gonadal direita", "Veias hepáticas", "Veias lombares"],
    correlacaoClinica:
      "A trombose de veia cava inferior é uma causa importante de embolia pulmonar maciça e de edema bilateral de membros inferiores, frequentemente propagada de trombose venosa profunda ilíaco-femoral. É também via de disseminação de neoplasias renais (carcinoma de células renais tem propensão notável a formar trombo tumoral que se estende para dentro da veia renal e da cava inferior, podendo alcançar o átrio direito).",
    doencasRelacionadas: [{ slug: "trombose-venosa-profunda", nome: "Trombose venosa profunda" }],
    pontosDeProva: [
      "O carcinoma de células renais tem propensão característica a formar trombo tumoral que se estende pela veia renal até a veia cava inferior, podendo alcançar o átrio direito — achado que muda o estadiamento e a estratégia cirúrgica.",
      "A veia gonadal direita drena diretamente na veia cava inferior, enquanto a esquerda drena na veia renal esquerda — assimetria que explica a maior frequência de varicocele à esquerda.",
    ],
    fontes: [
      { tema: "Anatomia da veia cava inferior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Trombo tumoral em carcinoma de células renais", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "tronco-pulmonar",
    meshNames: ["Pulmonary_trunk"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Truncus pulmonalis",
    nomeComum: "Tronco pulmonar",
    resumo:
      "Grande artéria que se origina no ventrículo direito e se bifurca nas artérias pulmonares direita e esquerda, conduzindo sangue venoso (pobre em oxigênio) aos pulmões para oxigenação.",
    trajeto:
      "Origina-se no infundíbulo do ventrículo direito, através da valva pulmonar, ascende brevemente à esquerda da aorta ascendente e se bifurca (ao nível de T4-T5) em artéria pulmonar direita e esquerda. É conectado ao arco da aorta pelo ligamento arterioso, remanescente fibroso do ducto arterioso fetal.",
    ramosOuTributarias: ["Artéria pulmonar direita", "Artéria pulmonar esquerda"],
    correlacaoClinica:
      "O tromboembolismo pulmonar maciço pode se alojar na bifurcação do tronco pulmonar ('êmbolo em sela'), causando obstrução quase completa do fluxo e colapso circulatório agudo — uma das apresentações mais letais de embolia pulmonar. A persistência do canal arterial (falha de obliteração do ducto arterioso após o nascimento) mantém uma comunicação anormal entre o tronco pulmonar e a aorta.",
    doencasRelacionadas: [{ slug: "embolia-pulmonar", nome: "Embolia pulmonar" }],
    pontosDeProva: [
      "Um êmbolo alojado na bifurcação do tronco pulmonar ('êmbolo em sela') causa obstrução quase total do fluxo pulmonar e é uma das formas mais letais de tromboembolismo pulmonar.",
      "O ligamento arterioso, remanescente do ducto arterioso fetal, conecta o tronco pulmonar ao arco da aorta e é ponto de referência para o nervo laríngeo recorrente esquerdo.",
    ],
    fontes: [
      { tema: "Anatomia do tronco pulmonar", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Embolia pulmonar maciça e êmbolo em sela", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-carotida-comum",
    meshNames: ["Left_common_carotid_artery", "Right_common_carotid_artery"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Arteria carotis communis",
    nomeComum: "Artéria carótida comum",
    resumo:
      "Principal via de suprimento arterial da cabeça e pescoço, que ascende sem ramos colaterais até se bifurcar nas artérias carótidas interna e externa ao nível da borda superior da cartilagem tireóidea (C4).",
    trajeto:
      "A carótida comum direita origina-se do tronco braquiocefálico; a esquerda origina-se diretamente do arco da aorta. Ambas ascendem no pescoço dentro da bainha carotídea (junto à veia jugular interna e ao nervo vago) sem dar ramos, até se bifurcarem ao nível de C4 em artéria carótida interna (sem ramos cervicais, destinada ao encéfalo) e artéria carótida externa (múltiplos ramos, destinada à face e ao pescoço).",
    ramosOuTributarias: ["Bifurca-se em: artéria carótida interna, artéria carótida externa (ao nível de C4)"],
    correlacaoClinica:
      "A bifurcação carotídea é o local mais comum de formação de placa aterosclerótica na circulação cervical, e sua estenose significativa é causa importante de acidente vascular cerebral isquêmico e ataque isquêmico transitório — pesquisada rotineiramente por doppler de carótidas e tratável por endarterectomia ou stent em casos selecionados. O seio carotídeo, na bifurcação, contém barorreceptores; sua massagem (manobra vagal) pode ser usada no manejo de taquiarritmias supraventriculares.",
    doencasRelacionadas: [
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
      { slug: "ait-ataque-isquemico-transitorio", nome: "Ataque isquêmico transitório (AIT)" },
    ],
    pontosDeProva: [
      "A bifurcação da carótida comum (C4) é o sítio mais comum de placa aterosclerótica extracraniana e principal alvo de rastreamento por doppler em pacientes com AIT/AVC isquêmico.",
      "A massagem do seio carotídeo, na bifurcação, estimula os barorreceptores e é usada como manobra vagal no manejo agudo de taquicardias supraventriculares.",
    ],
    fontes: [
      { tema: "Anatomia da carótida comum e bifurcação", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Doença aterosclerótica carotídea e AVC", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-subclavia",
    meshNames: ["Left_subclavian_artery", "Right_subclavian_artery"],
    regiao: "Grandes vasos",
    tipo: "Artéria",
    nomeOficial: "Arteria subclavia",
    nomeComum: "Artéria subclávia",
    resumo:
      "Principal artéria do membro superior em sua raiz, que também supre parte do encéfalo (via vertebral), do pescoço e da parede torácica, antes de se continuar como artéria axilar na borda lateral da primeira costela.",
    trajeto:
      "A subclávia direita origina-se do tronco braquiocefálico; a esquerda origina-se diretamente do arco da aorta. Ambas arqueiam-se lateralmente sobre a cúpula pleural, passam entre os músculos escalenos anterior e médio (dividida topograficamente em três partes por essa relação) e se continuam como artéria axilar na borda lateral da primeira costela. Dá origem à artéria vertebral, ao tronco tireocervical, à artéria torácica interna e ao tronco costocervical.",
    ramosOuTributarias: [
      "Artéria vertebral",
      "Tronco tireocervical",
      "Artéria torácica interna",
      "Tronco costocervical",
      "Continua-se como artéria axilar na borda lateral da 1ª costela",
    ],
    correlacaoClinica:
      "A síndrome do desfiladeiro torácico pode comprimir a artéria subclávia (junto ao plexo braquial) entre os músculos escalenos ou contra uma costela cervical, causando claudicação do membro superior e fenômenos isquêmicos digitais. A artéria torácica interna, ramo da subclávia, é o enxerto de escolha para revascularização da artéria descendente anterior em cirurgia de revascularização miocárdica, por sua excelente patência a longo prazo.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A artéria torácica interna (mamária interna), ramo da subclávia, é o enxerto preferencial para a artéria descendente anterior em cirurgia de revascularização do miocárdio, pela alta taxa de patência em 10 anos.",
      "A síndrome do desfiladeiro torácico pode comprimir a artéria subclávia entre os escalenos anterior e médio, causando isquemia do membro superior.",
    ],
    fontes: [
      { tema: "Anatomia da artéria subclávia e ramos", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Enxertos em revascularização miocárdica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-carotida-interna",
    meshNames: ["Internal_carotid_artery_L", "Internal_carotid_artery_R"],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria carotis interna",
    nomeComum: "Artéria carótida interna",
    resumo:
      "Principal fonte de suprimento arterial anterior do encéfalo, sem ramos cervicais, que entra no crânio pelo canal carótico e contribui com a circulação anterior do círculo arterial cerebral (de Willis).",
    trajeto:
      "Origina-se na bifurcação da carótida comum (C4), ascende sem dar ramos no pescoço, entra no crânio pelo canal carótico do osso temporal, atravessa o seio cavernoso (porção cavernosa) e emerge medialmente ao processo clinoide anterior, onde dá origem à artéria oftálmica, à artéria comunicante posterior e à artéria coroideia anterior, antes de se bifurcar em artérias cerebral anterior e cerebral média.",
    ramosOuTributarias: [
      "Artéria oftálmica",
      "Artéria comunicante posterior",
      "Artéria coroideia anterior",
      "Termina bifurcando-se em: artéria cerebral anterior, artéria cerebral média",
    ],
    correlacaoClinica:
      "A oclusão da carótida interna pode ser assintomática (se a circulação colateral pelo círculo de Willis for adequada) ou causar infarto extenso do território de cerebral média, dependendo dessa compensação. A dissecção espontânea de carótida interna é causa importante de AVC isquêmico em pacientes jovens, classicamente após trauma cervical (mesmo mínimo) ou manipulação quiroprática, apresentando-se com cefaleia/cervicalgia seguida de síndrome de Horner e déficit focal.",
    doencasRelacionadas: [
      { slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" },
      { slug: "ait-ataque-isquemico-transitorio", nome: "Ataque isquêmico transitório (AIT)" },
    ],
    pontosDeProva: [
      "Dissecção de carótida interna é causa clássica de AVC isquêmico em jovens, tipicamente após trauma cervical mínimo, apresentando cefaleia/cervicalgia seguida de síndrome de Horner e déficit focal contralateral.",
      "A artéria carótida interna não dá nenhum ramo cervical — todos os seus ramos surgem após a entrada no crânio, o que a diferencia da carótida externa na angiografia.",
    ],
    fontes: [
      { tema: "Anatomia da carótida interna e círculo de Willis", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Dissecção arterial cervical e AVC em jovens", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-vertebral",
    meshNames: ["Vertebral_artery_L", "Vertebral_artery_R"],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria vertebralis",
    nomeComum: "Artéria vertebral",
    resumo:
      "Ramo da artéria subclávia que ascende através dos forames transversos das vértebras cervicais e se une à artéria contralateral para formar a artéria basilar, suprindo o tronco encefálico, cerebelo e a circulação posterior do encéfalo.",
    trajeto:
      "Origina-se da artéria subclávia, ascende pelos forames transversários de C6 a C1, curva-se posteriormente ao redor da massa lateral do atlas, atravessa a membrana atlanto-occipital e o forame magno, e se une à artéria vertebral contralateral na junção pontobulbar para formar a artéria basilar. Dá ramos às artérias espinhais anterior e posteriores e à artéria cerebelar posteroinferior (PICA).",
    ramosOuTributarias: [
      "Artéria espinhal anterior",
      "Artérias espinhais posteriores",
      "Artéria cerebelar posteroinferior (PICA)",
      "Une-se à contralateral para formar: artéria basilar",
    ],
    correlacaoClinica:
      "A oclusão da artéria vertebral (ou de seu ramo PICA) causa a síndrome bulbar lateral (síndrome de Wallenberg), com perda sensitiva cruzada característica (face ipsilateral, corpo contralateral), disfagia, rouquidão, síndrome de Horner e ataxia. O trajeto pelos forames transversários torna a artéria vertebral vulnerável a dissecção por manipulação cervical (quiropraxia) ou trauma rotacional/de extensão do pescoço.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "A síndrome de Wallenberg (bulbar lateral), por oclusão da artéria vertebral ou da PICA, causa o padrão clássico de perda sensitiva termoálgica cruzada: face ipsilateral, tronco/membros contralaterais.",
      "O trajeto da artéria vertebral pelos forames transversários cervicais a torna vulnerável a dissecção por manipulação cervical, trauma rotacional ou hiperextensão do pescoço.",
    ],
    fontes: [
      { tema: "Anatomia da artéria vertebral e síndromes do tronco encefálico", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndrome de Wallenberg", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-basilar",
    meshNames: ["Basilar_artery"],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria basilaris",
    nomeComum: "Artéria basilar",
    resumo:
      "Formada pela união das duas artérias vertebrais, percorre o sulco basilar da ponte e é a principal fonte de suprimento do tronco encefálico e do cerebelo, terminando ao se bifurcar nas duas artérias cerebrais posteriores.",
    trajeto:
      "Formada na junção pontobulbar pela fusão das artérias vertebrais, ascende no sulco basilar da face anterior da ponte, dando ramos paramedianos e circunferenciais curtos/longos à ponte, e as artérias cerebelares anteroinferior (AICA) e superior, antes de se bifurcar no topo (ápice basilar) nas duas artérias cerebrais posteriores.",
    ramosOuTributarias: [
      "Ramos pontinos (paramedianos, circunferenciais curtos e longos)",
      "Artéria cerebelar anteroinferior (AICA)",
      "Artéria cerebelar superior",
      "Termina bifurcando-se em: artérias cerebrais posteriores direita e esquerda",
    ],
    correlacaoClinica:
      "A trombose do topo da artéria basilar ('síndrome do topo da basilar') causa um quadro dramático e frequentemente catastrófico, com comprometimento bilateral do mesencéfalo/tálamo, alterações da consciência, anormalidades pupilares e oculomotoras. A oclusão completa da basilar pode causar a síndrome do encarceramento ('locked-in syndrome'), com quadriplegia e paralisia dos nervos cranianos baixos preservando apenas a consciência e os movimentos oculares verticais.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "A oclusão completa da artéria basilar pode causar a síndrome do encarceramento (locked-in), com o paciente consciente mas incapaz de se mover ou falar, preservando apenas movimentos oculares verticais.",
      "A síndrome do topo da basilar afeta bilateralmente mesencéfalo e tálamo, causando alteração da consciência associada a anormalidades pupilares e oculomotoras — um AVC de território posterior particularmente grave.",
    ],
    fontes: [
      { tema: "Anatomia da artéria basilar e síndromes vasculares do tronco encefálico", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndromes de oclusão da artéria basilar", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-cerebral-anterior",
    meshNames: ["Anterior_cerebral_artery_L", "Anterior_cerebral_artery_R"],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria cerebri anterior",
    nomeComum: "Artéria cerebral anterior",
    resumo:
      "Ramo terminal medial da artéria carótida interna, que se une à contralateral pela artéria comunicante anterior e irriga a face medial dos lobos frontal e parietal, incluindo o córtex motor e sensitivo da perna.",
    trajeto:
      "Origina-se da bifurcação da carótida interna, segue medialmente acima do nervo óptico, une-se à artéria cerebral anterior contralateral pela artéria comunicante anterior (fechando a porção anterior do círculo de Willis) e percorre a fissura longitudinal do cérebro sobre o corpo caloso, irrigando a face medial dos hemisférios cerebrais.",
    ramosOuTributarias: ["Ramos orbitofrontais", "Ramos frontopolares", "Ramos pericalosos", "Comunica-se com a contralateral via: artéria comunicante anterior"],
    correlacaoClinica:
      "A oclusão da artéria cerebral anterior causa fraqueza e perda sensitiva contralaterais com predomínio em membro inferior (poupando relativamente a face e o membro superior), pelo mapeamento somatotópico do homúnculo motor/sensitivo na face medial do hemisfério. Pode também causar abulia e incontinência urinária por lesão do córtex frontal medial e da área motora suplementar.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "AVC de artéria cerebral anterior classicamente causa déficit motor/sensitivo contralateral com predomínio em membro inferior, poupando relativamente face e membro superior — padrão somatotópico oposto ao da cerebral média.",
      "A artéria comunicante anterior conecta as duas cerebrais anteriores e fecha a porção anterior do círculo de Willis — é também o sítio mais comum de aneurisma sacular intracraniano.",
    ],
    fontes: [
      { tema: "Anatomia e território da artéria cerebral anterior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndromes vasculares cerebrais", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-cerebral-media",
    meshNames: [
      "Middle_cerebral_artery_M1-segment_L",
      "Middle_cerebral_artery_M1-segment_R",
      "Middle_cerebral_artery_M3-segment_R",
      "Middle_cerebral_artery_M3_segment_L",
    ],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria cerebri media",
    nomeComum: "Artéria cerebral média",
    resumo:
      "Maior e mais importante ramo terminal da artéria carótida interna, que irriga a maior parte da face lateral (convexidade) dos hemisférios cerebrais, incluindo as áreas motora, sensitiva e da linguagem — o vaso mais frequentemente envolvido no AVC isquêmico.",
    trajeto:
      "Origina-se da bifurcação da carótida interna como o segmento M1 (horizontal), que segue lateralmente até a fissura lateral (de Sylvius), onde se bifurca em troncos superior e inferior (segmento M2, insular), continuando pela superfície da ínsula e emergindo sobre a convexidade como os segmentos M3 (opercular) e M4 (corticais terminais). Dá ramos lentículo-estriados profundos (M1) que irrigam os núcleos da base e a cápsula interna.",
    ramosOuTributarias: [
      "Ramos lentículo-estriados (irrigam núcleos da base e cápsula interna)",
      "Ramos frontais, parietais e temporais corticais (segmentos M2-M4)",
    ],
    correlacaoClinica:
      "É o território mais comumente acometido no AVC isquêmico, causando hemiparesia e hemi-hipoestesia contralaterais com predomínio em face e membro superior, além de afasia (se hemisfério dominante) ou heminegligência (se hemisfério não dominante). A oclusão proximal (M1), especialmente quando compromete os ramos lentículo-estriados, causa infartos extensos com risco de edema maligno e herniação.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "AVC de artéria cerebral média é o mais comum e causa hemiparesia/hemi-hipoestesia contralateral com predomínio em face e membro superior — padrão somatotópico oposto ao da cerebral anterior.",
      "Afasia (hemisfério dominante) ou heminegligência espacial (hemisfério não dominante) são achados característicos de AVC extenso de cerebral média, pelo território cortical envolvido.",
    ],
    fontes: [
      { tema: "Anatomia e território da artéria cerebral média", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndromes vasculares cerebrais e apresentação clínica do AVC", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-cerebral-posterior",
    meshNames: ["Posterior_cerebral_artery_L", "Posterior_cerebral_artery_R"],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria cerebri posterior",
    nomeComum: "Artéria cerebral posterior",
    resumo:
      "Ramo terminal da artéria basilar (circulação posterior) que irriga os lobos occipital e a face inferomedial do lobo temporal, incluindo o córtex visual primário, além de porções do tálamo e mesencéfalo.",
    trajeto:
      "Origina-se na bifurcação terminal da artéria basilar, contorna o mesencéfalo e recebe a artéria comunicante posterior (que a conecta à carótida interna, fechando a porção posterior do círculo de Willis), irrigando o lobo occipital, a face inferomedial do lobo temporal (incluindo o hipocampo) e ramos perfurantes talâmicos e mesencefálicos.",
    ramosOuTributarias: [
      "Ramos talâmico-perfurantes",
      "Ramos temporais inferiores",
      "Ramos occipitais (calcarino, parieto-occipital)",
      "Comunica-se com a carótida interna via: artéria comunicante posterior",
    ],
    correlacaoClinica:
      "A oclusão da artéria cerebral posterior causa hemianopsia homônima contralateral (frequentemente com preservação macular, pela dupla irrigação da região macular pela cerebral média) por lesão do córtex visual primário occipital. Quando bilateral (oclusão do topo da basilar), pode causar cegueira cortical. O acometimento talâmico pode causar a síndrome talâmica de Dejerine-Roussy, com dor crônica contralateral intensa.",
    doencasRelacionadas: [{ slug: "avc-isquemico-infarto-cerebral", nome: "Infarto cerebral (AVC isquêmico)" }],
    pontosDeProva: [
      "AVC de cerebral posterior causa hemianopsia homônima contralateral com frequente preservação da visão macular, pela dupla irrigação (cerebral média/posterior) do polo occipital.",
      "Oclusão bilateral (topo da basilar) pode causar cegueira cortical, com reflexos pupilares preservados (via intacta até o núcleo pré-tectal).",
    ],
    fontes: [
      { tema: "Anatomia e território da artéria cerebral posterior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndromes vasculares occipitais e talâmicas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-comunicante-posterior",
    meshNames: ["Posterior_communicating_artery_L", "Posterior_communicating_artery_R"],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria communicans posterior",
    nomeComum: "Artéria comunicante posterior",
    resumo:
      "Vaso par que conecta a artéria carótida interna à artéria cerebral posterior de cada lado, fechando a porção posterior do círculo arterial cerebral (de Willis) e permitindo circulação colateral entre os territórios anterior e posterior.",
    trajeto:
      "Origina-se da face posterior da artéria carótida interna, logo após a origem da artéria oftálmica, e segue posteriormente para se unir à artéria cerebral posterior correspondente, formando a conexão anteroposterior do círculo de Willis.",
    ramosOuTributarias: ["Conecta: artéria carótida interna à artéria cerebral posterior (mesmo lado)"],
    correlacaoClinica:
      "A compressão da artéria comunicante posterior por um aneurisma sacular (segundo local mais comum de aneurisma no círculo de Willis) causa classicamente paralisia isolada do nervo oculomotor (III), com midríase e ptose, por compressão direta do nervo que corre próximo a esse vaso — um sinal de alarme (midríase associada a cefaleia intensa) que distingue aneurisma de causas microvasculares de paralisia do III par (que tipicamente poupam a pupila).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Aneurisma de artéria comunicante posterior é causa clássica de paralisia isolada do III nervo craniano com midríase (pupila envolvida) — ao contrário da paralisia microvascular (diabética), que tipicamente poupa a pupila.",
      "A comunicante posterior é o segundo sítio mais comum de aneurisma sacular do círculo de Willis, atrás apenas da comunicante anterior.",
    ],
    fontes: [
      { tema: "Anatomia do círculo arterial cerebral (de Willis)", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Aneurisma de comunicante posterior e paralisia do III nervo", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-comunicante-anterior",
    meshNames: ["Anterior_communicating_artery"],
    regiao: "Circulação cerebral",
    tipo: "Artéria",
    nomeOficial: "Arteria communicans anterior",
    nomeComum: "Artéria comunicante anterior",
    resumo:
      "Curto vaso ímpar e mediano que conecta as duas artérias cerebrais anteriores, fechando a porção anterior do círculo arterial cerebral (de Willis) — o local mais comum de formação de aneurisma sacular intracraniano.",
    trajeto:
      "Curta ponte na linha média entre os segmentos A1 das artérias cerebrais anteriores direita e esquerda, logo acima do quiasma óptico, completando anteriormente o círculo de Willis e permitindo compensação de fluxo entre os dois hemisférios.",
    ramosOuTributarias: ["Conecta: artéria cerebral anterior direita à artéria cerebral anterior esquerda"],
    correlacaoClinica:
      "É o sítio mais frequente de aneurisma sacular ('em baga') intracraniano, cuja ruptura causa hemorragia subaracnóidea — apresentando-se como a 'pior cefaleia da vida' de início súbito ('thunderclap headache'), frequentemente com rigidez de nuca e alteração do nível de consciência. Aneurismas grandes não rompidos podem comprimir o quiasma óptico, causando hemianopsia bitemporal (diagnóstico diferencial de adenoma hipofisário).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A artéria comunicante anterior é o sítio mais comum de aneurisma sacular intracraniano — sua ruptura é causa clássica de hemorragia subaracnóidea com cefaleia súbita em trovoada.",
      "Aneurisma grande de comunicante anterior pode comprimir o quiasma óptico e causar hemianopsia bitemporal, mimetizando um adenoma hipofisário.",
    ],
    fontes: [
      { tema: "Anatomia do círculo arterial cerebral (de Willis)", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Hemorragia subaracnóidea aneurismática", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "seios-venosos-durais",
    meshNames: [
      "Superior_sagittal_sinus",
      "Inferior_sagittal_sinus",
      "Straight_sinus",
      "Transverse_sinus_L",
      "Transverse_sinus_R",
      "Sigmoid_sinus_L",
      "Sigmoid_sinus_R",
      "Occipital_sinus",
      "Cavernous_sinus_L",
      "Cavernous_sinus_R",
      "Superior_petrosal_sinus_L",
      "Superior_petrosal_sinus_R",
      "Inferior_petrosal_sinus_L",
      "Inferior_petrosal_sinus_R",
      "Anterior_intercavernous_sinus",
      "Posterior_intercavernous_sinus",
    ],
    regiao: "Circulação cerebral",
    tipo: "Veia",
    nomeOficial: "Sinus durae matris",
    nomeComum: "Seios venosos durais",
    resumo:
      "Rede de canais venosos valvulados formados entre os dois folhetos da dura-máter, que drenam o sangue venoso do encéfalo (via veias cerebrais) e o líquido cefalorraquidiano (via granulações aracnóideas) para as veias jugulares internas.",
    trajeto:
      "O seio sagital superior corre na linha média ao longo da inserção da foice do cérebro e drena posteriormente para a confluência dos seios; o seio reto drena o sistema venoso profundo (via grande veia cerebral) para o mesmo ponto. Da confluência, o fluxo segue pelos seios transversos, depois sigmoides, até as veias jugulares internas. O seio cavernoso, lateral à sela túrcica, é atravessado pela artéria carótida interna e pelos nervos cranianos III, IV, V1, V2 e VI, e se comunica com o contralateral pelos seios intercavernosos.",
    ramosOuTributarias: [
      "Recebem: veias cerebrais superiores e profundas, granulações aracnóideas (drenagem do líquor)",
      "Drenam para: veias jugulares internas (via seios sigmoides)",
    ],
    correlacaoClinica:
      "A trombose de seio venoso dural (mais comumente o sagital superior ou transverso) é causa importante de cefaleia com hipertensão intracraniana, convulsões e déficits focais, com fatores de risco incluindo trombofilias, gestação/puerpério e uso de anticoncepcionais orais. A trombose do seio cavernoso, classicamente secundária à disseminação de infecção facial (região do 'triângulo perigoso' da face) pelas veias oftálmicas (avalvuladas), causa oftalmoplegia dolorosa, proptose e quemose, com risco de acometimento bilateral pela comunicação intercavernosa.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Trombose de seio cavernoso classicamente resulta de disseminação de infecção do 'triângulo perigoso' da face (nariz e lábio superior) pelas veias oftálmicas avalvuladas — apresenta-se com oftalmoplegia dolorosa e proptose, podendo se tornar bilateral pelos seios intercavernosos.",
      "Trombose de seio venoso dural é diagnóstico a considerar em cefaleia associada a fatores pró-trombóticos (gestação, anticoncepcional oral, trombofilia), especialmente com convulsões ou déficit focal associado.",
    ],
    fontes: [
      { tema: "Anatomia dos seios venosos durais", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Trombose de seios venosos cerebrais", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "tronco-celiaco",
    meshNames: ["Coeliac_trunk"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Artéria",
    nomeOficial: "Truncus coeliacus",
    nomeComum: "Tronco celíaco",
    resumo:
      "Primeiro ramo visceral ímpar da aorta abdominal, que se origina logo abaixo do hiato aórtico e se divide em três ramos que irrigam o estômago, fígado, baço, duodeno proximal e pâncreas — os derivados do intestino anterior embrionário.",
    trajeto:
      "Origina-se da aorta abdominal ao nível de T12/L1, logo abaixo do diafragma, com um trajeto muito curto (1-2 cm) antes de se trifurcar em artéria gástrica esquerda, artéria esplênica e artéria hepática comum.",
    ramosOuTributarias: ["Artéria gástrica esquerda", "Artéria esplênica", "Artéria hepática comum"],
    correlacaoClinica:
      "A síndrome do ligamento arqueado mediano (compressão extrínseca do tronco celíaco pelo ligamento arqueado do diafragma) causa dor abdominal pós-prandial crônica e emagrecimento, sendo um diagnóstico de exclusão. A isquemia mesentérica aguda por trombose/embolia do tronco celíaco é rara isoladamente (dada a rica circulação colateral com a mesentérica superior via arcadas pancreatoduodenais), mas compromete gravemente a irrigação gástrica e hepática quando ocorre.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O tronco celíaco irriga os derivados do intestino anterior embrionário (esôfago abdominal ao duodeno proximal, fígado, baço, pâncreas) — correlação embriológica clássica de prova.",
      "A síndrome do ligamento arqueado mediano comprime extrinsecamente o tronco celíaco, causando dor abdominal pós-prandial crônica — diagnóstico de exclusão em investigação de dor abdominal.",
    ],
    fontes: [
      { tema: "Anatomia do tronco celíaco e ramos", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Truncus coeliacus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "arteria-mesenterica-superior",
    meshNames: ["Superior_mesenteric_artery"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Artéria",
    nomeOficial: "Arteria mesenterica superior",
    nomeComum: "Artéria mesentérica superior",
    resumo:
      "Segundo ramo visceral ímpar da aorta abdominal, que irriga o intestino delgado (do duodeno distal ao íleo terminal) e o cólon direito até os dois terços proximais do cólon transverso — os derivados do intestino médio embrionário.",
    trajeto:
      "Origina-se da aorta abdominal logo abaixo do tronco celíaco (L1), passa anteriormente ao processo uncinado do pâncreas e à terceira porção do duodeno (uma relação anatômica importante), e entra no mesentério do intestino delgado, dando ramos pancreatoduodenais inferiores, jejunais, ileais, cólica direita, cólica média e ileocólica.",
    ramosOuTributarias: [
      "Artéria pancreatoduodenal inferior",
      "Artérias jejunais e ileais",
      "Artéria ileocólica",
      "Artéria cólica direita",
      "Artéria cólica média",
    ],
    correlacaoClinica:
      "A síndrome da artéria mesentérica superior (compressão da terceira porção do duodeno entre a AMS e a aorta) ocorre classicamente em pacientes com perda de peso acentuada e redução do coxim gorduroso retroperitoneal. A isquemia mesentérica aguda por embolia (geralmente cardioembólica, na fibrilação atrial) tipicamente aloja-se logo após a origem da artéria cólica média, poupando o jejuno proximal, e é uma emergência cirúrgica com dor abdominal desproporcional ao exame físico.",
    doencasRelacionadas: [{ slug: "fibrilacao-flutter-atrial", nome: "Fibrilação e flutter atrial" }],
    pontosDeProva: [
      "Isquemia mesentérica aguda embólica classicamente se apresenta com dor abdominal desproporcional ao exame físico, em paciente com fibrilação atrial — um clássico 'red flag' de emergência cirúrgica.",
      "A síndrome da artéria mesentérica superior comprime a terceira porção do duodeno entre a AMS e a aorta, associada a perda de peso importante e redução do coxim gorduroso mesentérico.",
    ],
    fontes: [
      { tema: "Anatomia da artéria mesentérica superior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Isquemia mesentérica aguda", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-mesenterica-inferior",
    meshNames: ["Inferior_mesenteric_artery"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Artéria",
    nomeOficial: "Arteria mesenterica inferior",
    nomeComum: "Artéria mesentérica inferior",
    resumo:
      "Terceiro e último ramo visceral ímpar da aorta abdominal, que irriga o terço distal do cólon transverso, cólon descendente, sigmoide e reto proximal — os derivados do intestino posterior embrionário.",
    trajeto:
      "Origina-se da aorta abdominal ao nível de L3, cerca de 3-4 cm acima da bifurcação aórtica, e dá origem à artéria cólica esquerda, às artérias sigmóideas e à artéria retal superior, que se anastomosam com ramos da artéria ilíaca interna (retais média e inferior) no reto.",
    ramosOuTributarias: ["Artéria cólica esquerda", "Artérias sigmóideas", "Artéria retal superior"],
    correlacaoClinica:
      "A junção esplênica (ponto de Griffiths, entre os territórios da cólica média e cólica esquerda) é uma zona de circulação colateral relativamente pobre e o local mais suscetível a colite isquêmica em situações de baixo fluxo (hipotensão, cirurgia de aneurisma de aorta). A artéria mesentérica inferior é frequentemente ligada durante a ressecção cirúrgica de aneurisma de aorta abdominal ou de câncer retossigmoide, sendo geralmente bem tolerada pela rica colateralização retal.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A flexura esplênica (ponto de Griffiths), na fronteira entre os territórios da mesentérica superior e inferior, é a área mais vulnerável à colite isquêmica por ser uma zona de colateralização relativamente pobre.",
      "A artéria mesentérica inferior pode ser ligada com segurança na maioria das cirurgias de aorta abdominal, graças à rica anastomose retal com a circulação da ilíaca interna.",
    ],
    fontes: [
      { tema: "Anatomia da artéria mesentérica inferior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Colite isquêmica e zonas de watershed colônico", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-renal",
    meshNames: ["Left_renal_artery", "Right_renal_artery"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Artéria",
    nomeOficial: "Arteria renalis",
    nomeComum: "Artéria renal",
    resumo:
      "Ramo lateral par da aorta abdominal que supre cada rim, originando-se logo abaixo da artéria mesentérica superior — a artéria renal direita é tipicamente mais longa, por precisar cruzar posteriormente à veia cava inferior até o rim direito.",
    trajeto:
      "Origina-se da aorta abdominal ao nível de L1-L2, logo abaixo da artéria mesentérica superior. A artéria renal direita passa posteriormente à veia cava inferior em seu trajeto até o hilo renal direito, sendo por isso mais longa que a esquerda. Cada artéria se ramifica antes do hilo em ramos segmentares (geralmente 5), que são vasos terminais (sem colaterais significativas entre segmentos).",
    ramosOuTributarias: ["Ramos segmentares renais (geralmente 5 por rim, vasos terminais)"],
    correlacaoClinica:
      "A estenose de artéria renal (aterosclerótica em idosos, displasia fibromuscular em mulheres jovens) é causa importante de hipertensão secundária renovascular, ativando o eixo renina-angiotensina-aldosterona por hipoperfusão renal. Por serem artérias terminais, a oclusão de um ramo segmentar renal causa infarto em cunha daquele segmento, sem colateralização compensatória relevante.",
    doencasRelacionadas: [{ slug: "hipertensao-arterial-sistemica", nome: "Hipertensão arterial sistêmica" }],
    pontosDeProva: [
      "Estenose de artéria renal é causa clássica de hipertensão secundária: aterosclerótica em homens idosos (geralmente ostial), displasia fibromuscular em mulheres jovens (padrão 'colar de contas' na angiografia).",
      "As artérias segmentares renais são vasos terminais — sua oclusão causa infarto renal em cunha sem colateralização compensatória, ao contrário de outros territórios com boa circulação colateral.",
    ],
    fontes: [
      { tema: "Anatomia da artéria renal e segmentação", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Hipertensão renovascular", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "veia-renal",
    meshNames: ["Left_renal_vein", "Right_renal_vein"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Veia",
    nomeOficial: "Vena renalis",
    nomeComum: "Veia renal",
    resumo:
      "Via de drenagem venosa de cada rim para a veia cava inferior — a veia renal esquerda é tipicamente mais longa, cruzando anteriormente à aorta, e recebe adicionalmente a veia gonadal e a veia suprarrenal esquerdas.",
    trajeto:
      "A veia renal direita é curta e drena diretamente na veia cava inferior. A veia renal esquerda, mais longa, cruza anteriormente à aorta abdominal (entre a aorta e a artéria mesentérica superior — o 'efeito nutcracker' anatômico) antes de desembocar na cava inferior, recebendo no trajeto a veia gonadal esquerda e a veia suprarrenal esquerda.",
    ramosOuTributarias: ["Veia gonadal esquerda (apenas na veia renal esquerda)", "Veia suprarrenal esquerda (apenas na veia renal esquerda)"],
    correlacaoClinica:
      "A síndrome do quebra-nozes (nutcracker), compressão da veia renal esquerda entre a aorta e a artéria mesentérica superior, causa hematúria e dor no flanco esquerdo por congestão venosa renal. A assimetria de drenagem gonadal (esquerda na veia renal, direita diretamente na cava) explica por que a varicocele é classicamente mais comum e mais proeminente à esquerda. O carcinoma de células renais tem propensão a formar trombo tumoral que se propaga pela veia renal até a cava inferior.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A drenagem assimétrica das veias gonadais (esquerda na veia renal, direita direto na cava inferior) explica a maior incidência e proeminência de varicocele à esquerda.",
      "A síndrome do quebra-nozes comprime a veia renal esquerda entre a aorta e a mesentérica superior, causando hematúria e dor no flanco esquerdo por hipertensão venosa renal.",
    ],
    fontes: [
      { tema: "Anatomia da veia renal e relações", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndrome do quebra-nozes e varicocele", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "veia-porta-hepatica",
    meshNames: ["Hepatic_portal_vein"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Veia",
    nomeOficial: "Vena portae hepatis",
    nomeComum: "Veia porta (do fígado)",
    resumo:
      "Veia que coleta todo o sangue venoso do trato gastrointestinal, baço e pâncreas e o conduz ao fígado para processamento metabólico antes de retornar à circulação sistêmica pelas veias hepáticas — o componente venoso central do sistema porta hepático.",
    trajeto:
      "Formada posteriormente ao colo do pâncreas pela união das veias mesentérica superior e esplênica (esta geralmente já recebendo a veia mesentérica inferior). Ascende no ligamento hepatoduodenal (posteriormente ao ducto colédoco e à artéria hepática própria) até o hilo hepático, onde se ramifica em ramos direito e esquerdo, distribuindo-se pelos sinusoides hepáticos.",
    ramosOuTributarias: ["Veia mesentérica superior", "Veia esplênica (geralmente já recebendo a veia mesentérica inferior)"],
    correlacaoClinica:
      "A hipertensão portal (mais comumente por cirrose hepática) eleva a pressão no sistema porta e abre anastomoses portossistêmicas normalmente virtuais — varizes esofágicas (com risco de hemorragia digestiva maciça), varizes retais (hemorroidas), circulação colateral periumbilical ('cabeça de medusa') e esplenomegalia congestiva. A trombose de veia porta pode ser complicação de cirrose, estados de hipercoagulabilidade ou de processos inflamatórios abdominais (pileflebite).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "As três principais anastomoses portossistêmicas clinicamente relevantes na hipertensão portal são: esôfago distal (varizes esofágicas), reto (hemorroidas), e veias paraumbilicais (cabeça de medusa) — decorar essa tríade é altamente cobrado.",
      "A veia porta é formada pela junção das veias mesentérica superior e esplênica posteriormente ao colo do pâncreas — um marco cirúrgico importante em cirurgias pancreáticas.",
    ],
    fontes: [
      { tema: "Anatomia da veia porta e sistema porta hepático", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Hipertensão portal e anastomoses portossistêmicas", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-iliaca-comum",
    meshNames: ["Common_iliac_artery_L", "Common_iliac_artery_R"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Artéria",
    nomeOficial: "Arteria iliaca communis",
    nomeComum: "Artéria ilíaca comum",
    resumo:
      "Ramo terminal da bifurcação da aorta abdominal (L4), que se divide em artérias ilíacas interna e externa, distribuindo o fluxo sanguíneo entre as vísceras pélvicas/glúteos e o membro inferior, respectivamente.",
    trajeto:
      "Origina-se da bifurcação aórtica em L4, segue um curto trajeto (cerca de 5 cm) anterolateralmente sobre o músculo psoas maior, e se bifurca ao nível da articulação sacroilíaca em artéria ilíaca interna (medial, para a pelve) e artéria ilíaca externa (lateral, continuando ao membro inferior).",
    ramosOuTributarias: ["Bifurca-se em: artéria ilíaca interna, artéria ilíaca externa"],
    correlacaoClinica:
      "Aneurismas de artéria ilíaca comum frequentemente coexistem com aneurisma de aorta abdominal e devem ser ativamente pesquisados na mesma investigação de imagem. A doença arterial obstrutiva aortoilíaca (síndrome de Leriche), quando bilateral e proximal, causa a tríade clássica de claudicação glútea/de coxas bilateral, impotência e ausência de pulsos femorais.",
    doencasRelacionadas: [{ slug: "aneurisma-dissecao-aorta", nome: "Aneurisma e dissecção da aorta" }],
    pontosDeProva: [
      "A síndrome de Leriche (oclusão aortoilíaca bilateral) causa a tríade de claudicação glútea/de coxa, impotência erétil e ausência de pulsos femorais.",
      "Aneurismas de ilíaca comum coexistem frequentemente com aneurisma de aorta abdominal — a investigação de um deve sempre rastrear o outro.",
    ],
    fontes: [
      { tema: "Anatomia da artéria ilíaca comum", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Doença arterial obstrutiva aortoilíaca (síndrome de Leriche)", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "veia-iliaca-comum",
    meshNames: ["Common_iliac_vein_L", "Common_iliac_vein_R"],
    regiao: "Circulação abdominal e pélvica",
    tipo: "Veia",
    nomeOficial: "Vena iliaca communis",
    nomeComum: "Veia ilíaca comum",
    resumo:
      "Formada pela união das veias ilíacas interna e externa, drena o membro inferior e a pelve, unindo-se à contralateral para formar a veia cava inferior — a veia ilíaca comum esquerda é classicamente comprimida pela artéria ilíaca comum direita que a cruza anteriormente.",
    trajeto:
      "Formada pela junção das veias ilíacas interna e externa próximo à articulação sacroilíaca, ascende medialmente à artéria correspondente e se une à veia ilíaca comum contralateral, aproximadamente ao nível de L5, para formar a veia cava inferior. A veia ilíaca comum esquerda é cruzada anteriormente pela artéria ilíaca comum direita.",
    ramosOuTributarias: ["Veia ilíaca interna", "Veia ilíaca externa"],
    correlacaoClinica:
      "A síndrome de May-Thurner (compressão da veia ilíaca comum esquerda entre a artéria ilíaca comum direita, anteriormente, e a coluna vertebral, posteriormente) é causa importante e subdiagnosticada de trombose venosa profunda ilíaco-femoral esquerda, especialmente em mulheres jovens — deve ser considerada em TVP proximal recorrente ou sem fator de risco claro do lado esquerdo.",
    doencasRelacionadas: [{ slug: "trombose-venosa-profunda", nome: "Trombose venosa profunda" }],
    pontosDeProva: [
      "A síndrome de May-Thurner comprime a veia ilíaca comum esquerda entre a artéria ilíaca comum direita e a coluna vertebral — causa anatômica clássica de TVP ilíaco-femoral esquerda recorrente, especialmente em mulheres jovens.",
      "A predileção anatômica pelo lado esquerdo na síndrome de May-Thurner decorre do cruzamento assimétrico da artéria ilíaca comum direita sobre a veia ilíaca comum esquerda.",
    ],
    fontes: [
      { tema: "Anatomia da veia ilíaca comum", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Síndrome de May-Thurner", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-braquial",
    meshNames: ["Brachial_artery_L", "Brachial_artery_R"],
    regiao: "Membros",
    tipo: "Artéria",
    nomeOficial: "Arteria brachialis",
    nomeComum: "Artéria braquial",
    resumo:
      "Continuação da artéria axilar no braço, principal artéria do membro superior, que termina na fossa cubital se bifurcando nas artérias radial e ulnar.",
    trajeto:
      "Inicia-se na borda inferior do músculo redondo maior (continuação da axilar), desce medialmente ao úmero (acompanhada do nervo mediano, que a cruza anteriormente na metade do braço) e termina na fossa cubital, imediatamente abaixo da aponeurose bicipital, bifurcando-se em artérias radial e ulnar.",
    ramosOuTributarias: ["Artéria braquial profunda", "Colaterais ulnares superior e inferior", "Termina bifurcando-se em: artéria radial, artéria ulnar"],
    correlacaoClinica:
      "É o local padrão de aferição da pressão arterial com esfigmomanômetro e do pulso braquial em lactentes. Fraturas supracondilianas do úmero em crianças podem lesar a artéria braquial (junto ao nervo mediano), causando a contratura isquêmica de Volkmann se não reconhecida e tratada precocemente — uma emergência ortopédica clássica.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Fratura supracondiliana do úmero em criança é a causa clássica de lesão da artéria braquial e do nervo mediano, com risco de contratura isquêmica de Volkmann se a isquemia não for reconhecida rapidamente.",
      "A artéria braquial é o sítio padrão de aferição da pressão arterial por esfigmomanometria.",
    ],
    fontes: [
      { tema: "Anatomia da artéria braquial e relações", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Fratura supracondiliana e contratura de Volkmann", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
    ],
  },
  {
    slug: "arteria-radial",
    meshNames: ["Radial_artery_L", "Radial_artery_R"],
    regiao: "Membros",
    tipo: "Artéria",
    nomeOficial: "Arteria radialis",
    nomeComum: "Artéria radial",
    resumo:
      "Ramo lateral da bifurcação da artéria braquial no antebraço, superficial e facilmente palpável no punho, sendo o local mais comum de aferição do pulso periférico e de acesso arterial para coleta de gasometria e cateterismo.",
    trajeto:
      "Origina-se na fossa cubital, desce lateralmente no antebraço (profundamente ao músculo braquiorradial), torna-se superficial e palpável no punho entre os tendões do braquiorradial e do flexor radial do carpo, contorna a tabaqueira anatômica e termina formando o arco palmar profundo na mão.",
    ramosOuTributarias: ["Ramo carpal palmar", "Ramo carpal dorsal", "Termina como: arco palmar profundo"],
    correlacaoClinica:
      "É o sítio de acesso arterial mais utilizado para cateterismo cardíaco (via radial), preferido à via femoral por menor taxa de complicações hemorrágicas — a permeabilidade da artéria ulnar deve ser confirmada previamente (teste de Allen) pela dependência do fluxo colateral da mão. É também o local padrão de palpação do pulso radial e de coleta de gasometria arterial.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O teste de Allen avalia a permeabilidade do arco palmar e da artéria ulnar antes de procedimentos que utilizam a artéria radial (cateterismo, gasometria, canulação), prevenindo isquemia da mão.",
      "O acesso radial tornou-se a via preferencial em cateterismo cardíaco por menor taxa de sangramento comparado ao acesso femoral.",
    ],
    fontes: [
      { tema: "Anatomia da artéria radial", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Acesso radial em cateterismo cardíaco e teste de Allen", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-ulnar",
    meshNames: ["Ulnar_artery_L", "Ulnar_artery_R"],
    regiao: "Membros",
    tipo: "Artéria",
    nomeOficial: "Arteria ulnaris",
    nomeComum: "Artéria ulnar",
    resumo:
      "Ramo medial (geralmente maior) da bifurcação da artéria braquial no antebraço, que acompanha o nervo ulnar em seu terço distal e forma o principal arco arterial da palma da mão.",
    trajeto:
      "Origina-se na fossa cubital, desce medialmente no antebraço, passa superficialmente ao retináculo dos flexores (no canal de Guyon, junto ao nervo ulnar) e termina formando o arco palmar superficial, a principal fonte de suprimento arterial da mão.",
    ramosOuTributarias: ["Artéria interóssea comum", "Termina como: arco palmar superficial"],
    correlacaoClinica:
      "A compressão da artéria e do nervo ulnar no canal de Guyon (síndrome do canal de Guyon), por uso repetitivo de ferramentas vibratórias ou ciclismo prolongado, pode causar isquemia digital e parestesias no território ulnar da mão. A artéria ulnar é a via colateral avaliada no teste de Allen antes de procedimentos na artéria radial.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A artéria ulnar forma o arco palmar superficial, principal fonte de suprimento arterial da mão — por isso sua permeabilidade é testada (teste de Allen) antes de procedimentos que sacrificam a artéria radial.",
      "A síndrome do canal de Guyon comprime conjuntamente a artéria e o nervo ulnar, causando isquemia digital associada a parestesias ulnares.",
    ],
    fontes: [
      { tema: "Anatomia da artéria ulnar e canal de Guyon", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Arteria ulnaris)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "arteria-femoral",
    meshNames: ["Femoral_artery_L", "Femoral_artery_R"],
    regiao: "Membros",
    tipo: "Artéria",
    nomeOficial: "Arteria femoralis",
    nomeComum: "Artéria femoral",
    resumo:
      "Continuação da artéria ilíaca externa na coxa, principal artéria do membro inferior, que atravessa o hiato dos adutores para se tornar a artéria poplítea — vaso de referência para acesso vascular percutâneo (cateterismo).",
    trajeto:
      "Inicia-se sob o ligamento inguinal (ponto médio inguinal, entre a espinha ilíaca anterossuperior e a sínfise púbica), desce anteromedialmente na coxa dentro do triângulo femoral (junto ao nervo e à veia femorais, nessa ordem lateral-medial), continua pelo canal dos adutores (de Hunter) e atravessa o hiato dos adutores para se tornar a artéria poplítea na fossa poplítea.",
    ramosOuTributarias: ["Artéria femoral profunda (principal ramo, supre a maior parte da massa muscular da coxa)", "Artéria circunflexa femoral lateral", "Artéria circunflexa femoral medial"],
    correlacaoClinica:
      "É o sítio clássico de acesso vascular percutâneo (cateterismo cardíaco, angiografia), palpado no ponto médio inguinal — a lesão iatrogênica pode causar pseudoaneurisma ou fístula arteriovenosa femoral. A artéria femoral é também a via de acesso para o balão intra-aórtico em choque cardiogênico. Doença arterial periférica sintomática frequentemente envolve o segmento femoropoplíteo, causando claudicação intermitente de panturrilha.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A artéria femoral é palpada no ponto médio inguinal (entre a espinha ilíaca anterossuperior e a sínfise púbica) — referência de superfície clássica para acesso vascular e reanimação.",
      "A regra mnemônica 'NAVEL' (de lateral para medial no triângulo femoral: Nervo, Artéria, Veia, Espaço vazio, Linfáticos) organiza as estruturas femorais, relevante para acesso vascular seguro.",
    ],
    fontes: [
      { tema: "Anatomia da artéria femoral e triângulo femoral", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Acesso vascular femoral em cateterismo", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-poplitea",
    meshNames: ["Popliteal_artery_L", "Popliteal_artery_R"],
    regiao: "Membros",
    tipo: "Artéria",
    nomeOficial: "Arteria poplitea",
    nomeComum: "Artéria poplítea",
    resumo:
      "Continuação da artéria femoral na fossa poplítea, situada na posição mais profunda dessa fossa (mais profunda que a veia e o nervo tibial), que termina se bifurcando nas artérias tibiais anterior e posterior.",
    trajeto:
      "Inicia-se no hiato dos adutores, atravessa a fossa poplítea em posição profunda (junto ao plano ósseo, atrás do fêmur e depois do joelho), dando ramos geniculares que formam a rede anastomótica ao redor do joelho, e termina na borda inferior do músculo poplíteo, bifurcando-se em artérias tibiais anterior e posterior.",
    ramosOuTributarias: [
      "Ramos geniculares superiores, médio e inferiores (rede anastomótica do joelho)",
      "Termina bifurcando-se em: artéria tibial anterior, artéria tibial posterior",
    ],
    correlacaoClinica:
      "Por sua posição fixa e profunda na fossa poplítea, a artéria poplítea é particularmente vulnerável a lesão em fraturas/luxações de joelho (especialmente luxação do joelho, mesmo reduzida espontaneamente), exigindo avaliação vascular sistemática após esse trauma. É também sítio comum de aneurisma poplíteo (o aneurisma periférico mais comum), com risco de trombose/embolização distal e isquemia aguda do membro.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Luxação de joelho (mesmo já reduzida no momento da avaliação) exige investigação vascular sistemática pela alta incidência de lesão da artéria poplítea, dada sua posição fixa na fossa poplítea.",
      "O aneurisma de artéria poplítea é o aneurisma arterial periférico mais comum, com risco significativo de trombose ou embolização distal.",
    ],
    fontes: [
      { tema: "Anatomia da artéria poplítea e vulnerabilidade em trauma de joelho", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Aneurisma de artéria poplítea", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-tibial-posterior",
    meshNames: ["Posterior_tibial_artery_L", "Posterior_tibial_artery_R"],
    regiao: "Membros",
    tipo: "Artéria",
    nomeOficial: "Arteria tibialis posterior",
    nomeComum: "Artéria tibial posterior",
    resumo:
      "Maior ramo terminal da artéria poplítea, que desce pelo compartimento posterior da perna e passa atrás do maléolo medial para irrigar a planta do pé, formando os arcos plantares.",
    trajeto:
      "Origina-se na bifurcação da artéria poplítea, desce profundamente no compartimento posterior da perna (entre os músculos flexor longo dos dedos e flexor longo do hálux), dando origem à artéria fibular, e passa posteriormente ao maléolo medial (no túnel do tarso, junto ao nervo tibial) antes de se dividir nas artérias plantares medial e lateral.",
    ramosOuTributarias: ["Artéria fibular (fibular)", "Termina bifurcando-se em: artéria plantar medial, artéria plantar lateral"],
    correlacaoClinica:
      "O pulso tibial posterior, palpado posteriormente ao maléolo medial, é um dos pulsos avaliados no exame vascular periférico e no cálculo do índice tornozelo-braquial para diagnóstico de doença arterial periférica. Sua ausência, especialmente associada à ausência do pulso pedioso, sugere doença arterial obstrutiva infrapatelar significativa, comum em diabéticos.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O pulso tibial posterior (atrás do maléolo medial) e o pedioso (dorso do pé) são os dois pulsos distais avaliados na doença arterial periférica e no índice tornozelo-braquial.",
      "A artéria tibial posterior passa pelo túnel do tarso junto ao nervo tibial — relevante na síndrome do túnel do tarso.",
    ],
    fontes: [
      { tema: "Anatomia da artéria tibial posterior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Índice tornozelo-braquial e doença arterial periférica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "arteria-dorsal-pe",
    meshNames: ["Dorsalis_pedis_artery_L", "Dorsalis_pedis_artery_R"],
    regiao: "Membros",
    tipo: "Artéria",
    nomeOficial: "Arteria dorsalis pedis",
    nomeComum: "Artéria dorsal do pé (pediosa)",
    resumo:
      "Continuação da artéria tibial anterior no dorso do pé, superficial e facilmente palpável, que contribui para o arco plantar profundo através do ramo plantar profundo.",
    trajeto:
      "Inicia-se no nível da articulação do tornozelo (entre os maléolos), como continuação da tibial anterior, segue superficialmente entre os tendões do extensor longo do hálux e extensor longo dos dedos, e termina dando o ramo plantar profundo (que completa o arco plantar profundo, unindo-se à artéria plantar lateral) e a artéria arqueada.",
    ramosOuTributarias: ["Artéria arqueada", "Ramo plantar profundo (completa o arco plantar profundo)"],
    correlacaoClinica:
      "O pulso pedioso, palpado no dorso do pé lateralmente ao tendão do extensor longo do hálux, é um dos principais pulsos avaliados na doença arterial periférica; sua ausência bilateral em paciente com claudicação sugere doença aortoilíaca ou femoropoplítea proximal. Em até 10-15% da população, a artéria dorsal do pé pode estar ausente ou hipoplásica como variante anatômica normal, sem significado patológico isolado.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O pulso pedioso ausente, isoladamente, pode ser variante anatômica normal (ausência em até 10-15% da população) — deve ser interpretado em conjunto com o pulso tibial posterior e o contexto clínico.",
      "O ramo plantar profundo da artéria dorsal do pé completa o arco plantar profundo, unindo a circulação dorsal e plantar do pé.",
    ],
    fontes: [
      { tema: "Anatomia da artéria dorsal do pé e variantes", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Exame vascular do pé na doença arterial periférica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
  {
    slug: "veia-safena-magna",
    meshNames: ["Great_saphenous_vein_L", "Great_saphenous_vein_R"],
    regiao: "Membros",
    tipo: "Veia",
    nomeOficial: "Vena saphena magna",
    nomeComum: "Veia safena magna",
    resumo:
      "Maior veia superficial do corpo, que drena a face medial do membro inferior desde o dorso do pé até a virilha, onde desemboca na veia femoral — vaso de escolha clássico para enxerto em cirurgia de revascularização.",
    trajeto:
      "Origina-se do arco venoso dorsal do pé, ascende anteriormente ao maléolo medial (local de acesso venoso periférico clássico, inclusive em emergências pediátricas/de trauma), sobe pela face medial da perna e da coxa no tecido subcutâneo, e termina desembocando na veia femoral na região do hiato safeno, cerca de 3-4 cm abaixo e lateralmente ao tubérculo púbico.",
    ramosOuTributarias: ["Recebe múltiplos tributários superficiais da perna e coxa", "Drena para: veia femoral (junção safenofemoral)"],
    correlacaoClinica:
      "É o enxerto autólogo mais utilizado em cirurgia de revascularização do miocárdio (pontes de safena) e periférica, por seu comprimento, calibre adequado e fácil acessibilidade. É também a veia mais comumente acometida por varizes e insuficiência venosa crônica, por sua posição superficial e pela ação da gravidade sobre um sistema valvulado que pode se tornar incompetente. Sua posição constante anterior ao maléolo medial a torna via de acesso venoso de emergência quando o acesso periférico usual falha (dissecção venosa).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A veia safena magna é o enxerto autólogo clássico em cirurgia de revascularização do miocárdio (pontes de safena), com menor durabilidade a longo prazo comparada ao enxerto de artéria torácica interna.",
      "A veia safena magna é constante e superficial anteriormente ao maléolo medial, tornando-a via de acesso para dissecção venosa quando o acesso periférico convencional falha.",
    ],
    fontes: [
      { tema: "Anatomia da veia safena magna", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Enxerto de safena em revascularização e insuficiência venosa crônica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
    ],
  },
];
