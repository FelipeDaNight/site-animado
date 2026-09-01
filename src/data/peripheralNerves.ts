import type { NervoPeriferico } from "./types";

// Modelo 3D: mesma coleção "Nervous system & Sense organs" do atlas Z-Anatomy
// usada pelos nervos cranianos (ver NERVOUS_MODEL_URL em nervousSystem.ts) — o
// modelo já carrega o sistema nervoso periférico completo, então nenhum novo
// arquivo precisou ser processado para este conjunto.
export const nervosPeriferios: NervoPeriferico[] = [
  {
    slug: "nervo-ilio-hipogastrico",
    meshNames: ["Iliohypogastric_nerve_L", "Iliohypogastric_nerve_R"],
    plexo: "Plexo lombar",
    nomeOficial: "Nervus iliohypogastricus",
    nomeComum: "Nervo ílio-hipogástrico",
    raizes: "T12, L1",
    resumo:
      "Ramo mais superior do plexo lombar, emerge junto com o nervo ilioinguinal da raiz de L1 e percorre a parede abdominal, inervando a musculatura abdominal inferior e a pele suprapúbica.",
    trajeto:
      "Origina-se do ramo ventral de L1 (com contribuição de T12), emerge na margem lateral do músculo psoas maior, cruza obliquamente o músculo quadrado do lombo e perfura o músculo transverso do abdome próximo à crista ilíaca, correndo entre este e o oblíquo interno antes de se dividir em ramo cutâneo lateral (região glútea superior) e ramo cutâneo anterior (região suprapúbica).",
    ramosMusculares: ["Músculo transverso do abdome (porção inferior)", "Músculo oblíquo interno (porção inferior)"],
    ramosSensitivos: ["Ramo cutâneo anterior (pele suprapúbica)", "Ramo cutâneo lateral (região glútea súperolateral)"],
    correlacaoClinica:
      "É vulnerável a lesão iatrogênica em incisões cirúrgicas baixas do abdome (apendicectomia, cesariana, herniorrafia inguinal), causando dor neuropática crônica na região suprapúbica/inguinal — uma causa reconhecida de dor pós-operatória persistente nesse tipo de cirurgia.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo ílio-hipogástrico origina-se de T12-L1 e é frequentemente lesado em incisões cirúrgicas baixas do abdome (Pfannenstiel, apendicectomia), causando dor neuropática crônica suprapúbica.",
      "Emerge junto ao nervo ilioinguinal, e ambos perfuram o músculo transverso do abdome próximo à crista ilíaca antes de inervar a parede abdominal baixa.",
    ],
    fontes: [
      { tema: "Anatomia do plexo lombar", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Lesão de nervos abdominais em cirurgia pélvica", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-genitofemoral",
    meshNames: [
      "Genitofemoral_nerve_L",
      "Genitofemoral_nerve_R",
      "Femoral_branch_of_genitofemoral_nerve_L",
      "Femoral_branch_of_genitofemoral_nerve_R",
      "Genital_branch_of_genitofemoral_nerve_L",
      "Genital_branch_of_genitofemoral_nerve_R",
    ],
    plexo: "Plexo lombar",
    nomeOficial: "Nervus genitofemoralis",
    nomeComum: "Nervo genitofemoral",
    raizes: "L1, L2",
    resumo:
      "Único ramo do plexo lombar a perfurar o músculo psoas maior em vez de emergir de sua margem, dividindo-se em ramo genital (motor, para o músculo cremaster) e ramo femoral (sensitivo, para a coxa).",
    trajeto:
      "Origina-se dos ramos ventrais de L1-L2, perfura o músculo psoas maior e desce em sua face anterior até se dividir, próximo ao ligamento inguinal, em ramo genital (que acompanha o funículo espermático através do canal inguinal até o escroto/músculo cremaster nos homens, ou o ligamento redondo do útero nos lábios maiores nas mulheres) e ramo femoral (que passa sob o ligamento inguinal para inervar a pele da região femoral superior, próxima ao trígono femoral).",
    ramosMusculares: ["Músculo cremaster (ramo genital, nos homens)"],
    ramosSensitivos: ["Ramo femoral (pele da face anterior superior da coxa)", "Ramo genital (escroto/grandes lábios)"],
    correlacaoClinica:
      "O ramo genital media o reflexo cremastérico (elevação do testículo à estimulação da pele da face medial da coxa), útil no exame neurológico de raízes L1-L2 e na avaliação de torção testicular (reflexo ausente). É também um dos nervos classicamente lesados em herniorrafia inguinal, causando dor neuropática na virilha/genitália.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O ramo genital do nervo genitofemoral é a via eferente motora do reflexo cremastérico — sua ausência é sinal de alarme para torção testicular.",
      "É o único ramo do plexo lombar que perfura o músculo psoas maior, em vez de emergir de sua margem lateral ou medial como os demais.",
    ],
    fontes: [
      { tema: "Reflexo cremastérico e nervo genitofemoral", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus genitofemoralis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-cutaneo-femoral-lateral",
    meshNames: ["Lateral_femoral_cutaneous_nerve_L", "Lateral_femoral_cutaneous_nerve_R"],
    plexo: "Plexo lombar",
    nomeOficial: "Nervus cutaneus femoris lateralis",
    nomeComum: "Nervo cutâneo femoral lateral",
    raizes: "L2, L3",
    resumo:
      "Nervo puramente sensitivo que inerva a pele da face lateral da coxa, notório por seu trajeto através (ou muito próximo) do ligamento inguinal, ponto de compressão clássico.",
    trajeto:
      "Origina-se dos ramos ventrais de L2-L3, emerge na margem lateral do psoas maior, cruza obliquamente o músculo ilíaco em direção à espinha ilíaca anterossuperior, e passa profundamente (ou através de um túnel) ao ligamento inguinal, próximo a essa espinha, antes de se distribuir pela pele da face lateral da coxa.",
    ramosMusculares: [],
    ramosSensitivos: ["Pele da face lateral da coxa, da região do quadril ao joelho"],
    correlacaoClinica:
      "A compressão desse nervo junto ao ligamento inguinal (por obesidade, gravidez, roupas apertadas, cintos, ou após cirurgias como retirada de enxerto ósseo ilíaco) causa a meralgia parestésica — dormência, queimação e formigamento na face lateral da coxa, sem déficit motor associado (nervo puramente sensitivo).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A meralgia parestésica é a compressão do nervo cutâneo femoral lateral junto ao ligamento inguinal, causando parestesia na face lateral da coxa sem qualquer déficit motor.",
      "É um nervo puramente sensitivo — sua lesão nunca causa fraqueza muscular, apenas alteração de sensibilidade.",
    ],
    fontes: [
      { tema: "Meralgia parestésica", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nervus cutaneus femoris lateralis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-obturatorio",
    meshNames: [
      "Obturator_nerve_L",
      "Obturator_nerve_R",
      "Anterior_branch_of_obturator_nerve_L",
      "Anterior_branch_of_obturator_nerve_R",
      "Posterior_branch_of_obturator_nerve_L",
      "Posterior_branch_of_obturator_nerve_R",
    ],
    plexo: "Plexo lombar",
    nomeOficial: "Nervus obturatorius",
    nomeComum: "Nervo obturatório",
    raizes: "L2, L3, L4",
    resumo:
      "Principal nervo motor do compartimento medial (adutor) da coxa, atravessa o forame obturado e se divide em ramos anterior e posterior ao passar pelo músculo obturador externo.",
    trajeto:
      "Origina-se dos ramos ventrais de L2-L4, desce através do músculo psoas maior, emerge em sua margem medial, cruza a articulação sacroilíaca e desce na parede lateral da pelve até o forame obturado, pelo qual sai da pelve junto aos vasos obturatórios. Ao atravessar o músculo obturador externo, divide-se em ramo anterior (superficial, entre os adutores longo e curto) e ramo posterior (mais profundo, entre os adutores curto e magno).",
    ramosMusculares: [
      "Músculo obturador externo",
      "Ramo anterior: músculos adutor longo, adutor curto, grácil, pectíneo (variável)",
      "Ramo posterior: músculo adutor magno (porção adutora)",
    ],
    ramosSensitivos: ["Ramo cutâneo (continuação do ramo anterior) — face medial distal da coxa"],
    correlacaoClinica:
      "É bloqueado seletivamente em anestesia regional para procedimentos no quadril e para tratar o espasmo do grupo adutor em pacientes com paralisia cerebral. Sua lesão (por exemplo, em cirurgias pélvicas ginecológicas/urológicas, onde o nervo corre próximo aos vasos ilíacos e ovarianos) causa fraqueza de adução do quadril e déficit sensitivo na face medial da coxa.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo obturatório atravessa o forame obturado junto aos vasos obturatórios, sendo o principal nervo motor do compartimento medial (adutor) da coxa.",
      "O bloqueio do nervo obturatório é usado no tratamento do espasmo adutor da paralisia cerebral e como anestesia regional complementar em cirurgias de quadril e joelho.",
    ],
    fontes: [
      { tema: "Anatomia do nervo obturatório", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Bloqueio do nervo obturatório", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-femoral",
    meshNames: ["Femoral_nerve_L", "Femoral_nerve_R", "Anterior_cutaneous_branches_of_femoral_nerve_L", "Anterior_cutaneous_branches_of_femoral_nerve_R"],
    plexo: "Plexo lombar",
    nomeOficial: "Nervus femoralis",
    nomeComum: "Nervo femoral",
    raizes: "L2, L3, L4",
    resumo:
      "Maior ramo do plexo lombar e principal nervo motor do compartimento anterior (extensor) da coxa, responsável pela extensão do joelho via inervação do quadríceps femoral.",
    trajeto:
      "Origina-se dos ramos ventrais de L2-L4, desce na margem lateral do músculo psoas maior, passa profundamente ao ligamento inguinal (lateralmente à artéria e veia femorais, dentro do trígono femoral, mas fora da bainha femoral) e se ramifica rapidamente logo abaixo do ligamento inguinal em numerosos ramos musculares e cutâneos, com sua continuação sensitiva mais longa formando o nervo safeno.",
    ramosMusculares: ["Músculo iliopsoas", "Músculo pectíneo", "Músculo sartório", "Músculo quadríceps femoral (reto femoral, vastos medial, lateral e intermédio)"],
    ramosSensitivos: ["Ramos cutâneos anteriores da coxa", "Continua como nervo safeno (perna e pé, face medial)"],
    correlacaoClinica:
      "O reflexo patelar (extensão do joelho ao golpe do martelo sobre o ligamento patelar) testa a integridade do nervo femoral e dos segmentos medulares L2-L4 — sua diminuição sugere lesão nessa via. A lesão do nervo femoral (compressão por hematoma do psoas em pacientes anticoagulados, ou lesão iatrogênica em cirurgias pélvicas/de quadril) causa fraqueza marcante de extensão do joelho e instabilidade ao caminhar.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O reflexo patelar avalia o nervo femoral e os segmentos medulares L2-L4 — sua diminuição sugere lesão radicular ou do próprio nervo femoral.",
      "O nervo femoral passa lateralmente à artéria e veia femorais no trígono femoral, mas fora da bainha femoral que envolve os vasos — por isso não é comprimido em hérnias femorais.",
    ],
    fontes: [
      { tema: "Reflexo patelar e nervo femoral", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Anatomia do trígono femoral", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Reflexo patelar", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-safeno",
    meshNames: [
      "Saphenous_nerve_L",
      "Saphenous_nerve_R",
      "Infrapatellar_branch_of_saphenous_nerve_L",
      "Infrapatellar_branch_of_saphenous_nerve_R",
      "Medial_crural_cutaneous_branches_of_saphenous_nerve_L",
      "Medial_crural_cutaneous_branches_of_saphenous_nerve_R",
    ],
    plexo: "Plexo lombar",
    nomeOficial: "Nervus saphenus",
    nomeComum: "Nervo safeno",
    raizes: "L3, L4 (via nervo femoral)",
    resumo:
      "Maior ramo cutâneo do nervo femoral e o único ramo do plexo lombar a alcançar o pé, acompanhando a veia safena magna por todo o seu trajeto na perna.",
    trajeto:
      "Origina-se do nervo femoral no trígono femoral, entra no canal dos adutores (de Hunter) junto à artéria femoral, mas — diferentemente dela — não atravessa o hiato dos adutores, emergindo entre os músculos sartório e grácil próximo ao joelho (onde dá o ramo infrapatelar). Continua então subcutaneamente na face medial da perna, acompanhando a veia safena magna, até o maléolo medial e a face medial do pé.",
    ramosMusculares: [],
    ramosSensitivos: ["Ramo infrapatelar (pele anterior ao joelho)", "Ramos cutâneos crurais mediais (face medial da perna)", "Pele da face medial do pé, até o hálux"],
    correlacaoClinica:
      "Por acompanhar de perto a veia safena magna, é vulnerável a lesão iatrogênica durante a retirada dessa veia para enxerto (ponte de safena em revascularização miocárdica ou periférica) e durante o tratamento de varizes (safenectomia, ablação por radiofrequência), causando dormência ou dor neuropática crônica na face medial da perna e do pé.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo safeno é o único ramo do plexo lombar (via nervo femoral) que alcança o pé, e o único nervo cutâneo do membro inferior que não deriva do plexo sacral.",
      "É frequentemente lesado durante a retirada cirúrgica da veia safena magna (ponte de safena, tratamento de varizes), por seu trajeto próximo e paralelo à veia.",
    ],
    fontes: [
      { tema: "Trajeto do nervo safeno e canal dos adutores", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Lesão nervosa em cirurgia de safena", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-gluteo-superior",
    meshNames: ["Superior_gluteal_nerve_L", "Superior_gluteal_nerve_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus gluteus superior",
    nomeComum: "Nervo glúteo superior",
    raizes: "L4, L5, S1",
    resumo:
      "Inerva os abdutores do quadril (glúteo médio, glúteo mínimo e tensor da fáscia lata), essenciais para a estabilização pélvica durante a marcha em apoio unipodal.",
    trajeto:
      "Origina-se dos ramos ventrais de L4-S1, sai da pelve pelo forame isquiático maior acima do músculo piriforme (junto aos vasos glúteos superiores), e percorre um plano entre os músculos glúteo médio e glúteo mínimo até alcançar o músculo tensor da fáscia lata.",
    ramosMusculares: ["Músculo glúteo médio", "Músculo glúteo mínimo", "Músculo tensor da fáscia lata"],
    ramosSensitivos: [],
    correlacaoClinica:
      "Sua lesão (iatrogênica, em acessos cirúrgicos anterolaterais ao quadril, ou por injeções intraglúteas mal posicionadas) causa a marcha de Trendelenburg: ao apoiar o peso na perna lesada, a pelve cai do lado oposto (não sustentado) por fraqueza dos abdutores do quadril ipsilaterais; o paciente frequentemente inclina o tronco para o lado da lesão para compensar (marcha glútea/gingado compensatório). O teste de Trendelenburg (ficar em apoio unipodal) reproduz esse sinal.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O sinal/teste de Trendelenburg positivo (queda da pelve contralateral ao apoiar em uma perna) indica fraqueza dos abdutores do quadril (glúteo médio/mínimo), geralmente por lesão do nervo glúteo superior.",
      "É o único nervo glúteo que sai do forame isquiático maior ACIMA do piriforme — o inferior e o isquiático saem abaixo dele.",
    ],
    fontes: [
      { tema: "Marcha de Trendelenburg", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus gluteus superior)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Lesão do nervo glúteo superior", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-cutaneo-femoral-posterior",
    meshNames: [
      "Posterior_femoral_cutaneous_nerve_L",
      "Posterior_femoral_cutaneous_nerve_R",
      "Anterior_root_of_posterior_femoral_cutaneous_nerve_L",
      "Anterior_root_of_posterior_femoral_cutaneous_nerve_R",
      "Posterior_root_of_posterior_femoral_cutaneous_nerve_L",
      "Posterior_root_of_posterior_femoral_cutaneous_nerve_R",
    ],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus cutaneus femoris posterior",
    nomeComum: "Nervo cutâneo femoral posterior",
    raizes: "S1, S2, S3",
    resumo:
      "Nervo puramente sensitivo que inerva a pele da face posterior da coxa e da região glútea inferior, formado pela união de uma raiz anterior e uma posterior.",
    trajeto:
      "Formado pela junção de uma raiz anterior (S2-S3) e uma posterior (S1-S2), sai da pelve pelo forame isquiático maior abaixo do músculo piriforme (próximo ao nervo isquiático) e desce na face posterior da coxa, profundamente à fáscia lata e superficialmente aos músculos do jarrete, dando ramos cutâneos ao longo de todo o trajeto.",
    ramosMusculares: [],
    ramosSensitivos: ["Pele da região glútea inferior", "Pele da face posterior da coxa e da fossa poplítea"],
    correlacaoClinica:
      "Corre muito próximo ao nervo isquiático ao sair da pelve, sendo por vezes lesado em conjunto em traumas ou injeções glúteas malposicionadas — causa perda de sensibilidade na face posterior da coxa sem déficit motor associado (nervo puramente sensitivo).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É um nervo puramente sensitivo, formado por raízes anterior e posterior distintas — sua lesão nunca causa fraqueza muscular.",
      "Sai da pelve pelo forame isquiático maior, abaixo do piriforme, em estreita proximidade com o nervo isquiático.",
    ],
    fontes: [
      { tema: "Anatomia do nervo cutâneo femoral posterior", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus cutaneus femoris posterior)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-do-piriforme",
    meshNames: ["Nerve_to_piriformis_muscle_L", "Nerve_to_piriformis_muscle_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus musculi piriformis",
    nomeComum: "Nervo do piriforme",
    raizes: "S1, S2",
    resumo:
      "Pequeno ramo motor exclusivo para o músculo piriforme, um dos rotadores laterais curtos do quadril, com curto trajeto direto do plexo sacral ao músculo.",
    trajeto:
      "Origina-se diretamente dos ramos ventrais de S1-S2 na face anterior do plexo sacral e entra imediatamente na face anterior (pélvica) do músculo piriforme, sem trajeto extrapélvico significativo.",
    ramosMusculares: ["Músculo piriforme"],
    ramosSensitivos: [],
    correlacaoClinica:
      "O músculo piriforme que este nervo inerva tem relação anatômica direta com o nervo isquiático, que emerge logo abaixo dele (ou, em variantes anatômicas, atravessa o próprio ventre muscular) — o espasmo ou hipertrofia do piriforme pode comprimir o nervo isquiático adjacente, causando a síndrome do piriforme (dor glútea profunda irradiada para a coxa posterior, mimetizando uma radiculopatia lombar).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A síndrome do piriforme é a compressão do nervo isquiático pelo músculo piriforme adjacente (não pelo próprio nervo do piriforme, que é motor exclusivo desse músculo) — diagnóstico diferencial importante de radiculopatia lombar.",
      "Em cerca de 10-20% das pessoas, o nervo isquiático (ou uma de suas divisões) atravessa o próprio ventre do músculo piriforme, uma variante que predispõe à síndrome do piriforme.",
    ],
    fontes: [
      { tema: "Síndrome do piriforme e variantes do nervo isquiático", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus musculi piriformis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Lesão do nervo isquiático pelo piriforme", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-do-quadrado-femoral",
    meshNames: ["Nerve_to_quadratus_femoris_muscle_L", "Nerve_to_quadratus_femoris_muscle_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus musculi quadrati femoris",
    nomeComum: "Nervo do quadrado femoral",
    raizes: "L4, L5, S1",
    resumo:
      "Ramo motor que, apesar do nome, inerva tanto o músculo quadrado femoral quanto o gêmeo inferior, com trajeto profundo ao nervo isquiático e ao músculo obturador interno.",
    trajeto:
      "Origina-se dos ramos ventrais de L4-S1, sai da pelve pelo forame isquiático maior abaixo do piriforme, passa profundamente (anteriormente) ao nervo isquiático e ao músculo obturador interno/gêmeos, seguindo até a face profunda do músculo quadrado femoral, dando um ramo colateral ao gêmeo inferior no trajeto.",
    ramosMusculares: ["Músculo quadrado femoral", "Músculo gêmeo inferior"],
    ramosSensitivos: [],
    correlacaoClinica:
      "Também emite um pequeno ramo articular para a articulação do quadril, relevante na avaliação de dor referida do quadril; por seu trajeto profundo, muito próximo à cápsula articular coxofemoral, pode ser afetado em fraturas do acetábulo ou luxações posteriores do quadril.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo do quadrado femoral, apesar do nome, inerva tanto o quadrado femoral quanto o gêmeo inferior — associação didaticamente comparável à do nervo do obturador interno com o gêmeo superior.",
      "Passa profundamente ao nervo isquiático e ao obturador interno, com trajeto muito próximo à cápsula articular do quadril.",
    ],
    fontes: [
      { tema: "Anatomia dos nervos dos rotadores laterais do quadril", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus musculi quadrati femoris)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-isquiatico",
    meshNames: ["Sciatic_nerve_L", "Sciatic_nerve_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus ischiadicus",
    nomeComum: "Nervo isquiático",
    raizes: "L4, L5, S1, S2, S3",
    resumo:
      "Maior e mais largo nervo do corpo humano, na verdade dois nervos (tibial e fibular comum) envolvidos por uma bainha de tecido conjuntivo comum, que se separam definitivamente na altura da fossa poplítea.",
    trajeto:
      "Formado na face anterior do plexo sacral, sai da pelve pelo forame isquiático maior (tipicamente abaixo do músculo piriforme), passa entre o trocanter maior do fêmur e a tuberosidade isquiática, desce na face posterior da coxa profundamente aos músculos do jarrete (aos quais inerva), e se divide — geralmente na região superior da fossa poplítea, mas às vezes já na pelve — em seus dois componentes terminais: nervo tibial e nervo fibular comum.",
    ramosMusculares: [
      "Componente tibial: semitendíneo, semimembranáceo, cabeça longa do bíceps femoral, adutor magno (porção isquiática)",
      "Componente fibular comum: cabeça curta do bíceps femoral",
    ],
    ramosSensitivos: [],
    correlacaoClinica:
      "É o nervo comprimido na ciática (dor irradiada da região glútea para a face posterior da coxa e perna, mais comumente por hérnia de disco lombar comprimindo suas raízes L4-S3, mas também pela síndrome do piriforme por compressão extrapélvica direta). Injeções intraglúteas mal posicionadas fora do quadrante súperolateral do glúteo podem lesá-lo diretamente. Fraturas/luxações posteriores do quadril também são causa reconhecida de lesão.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo isquiático é, na verdade, dois nervos (tibial e fibular comum) dentro de uma bainha comum, que se separam definitivamente na fossa poplítea — por isso lesões proximais afetam ambos os territórios.",
      "As injeções intraglúteas só são seguras no quadrante súperolateral do glúteo, justamente para evitar lesão direta do nervo isquiático, que cruza os quadrantes inferiores.",
    ],
    fontes: [
      { tema: "Anatomia do nervo isquiático e ciática", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Injeções intraglúteas e segurança do nervo isquiático", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nervo isquiático e injeções intraglúteas", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-fibular-comum",
    meshNames: ["Common_fibular_nerve_L", "Common_fibular_nerve_R", "Sural_communicating_branch_of_common_fibular_nerve_L", "Sural_communicating_branch_of_common_fibular_nerve_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus fibularis communis",
    nomeComum: "Nervo fibular comum",
    raizes: "L4, L5, S1, S2",
    resumo:
      "Menor dos dois componentes terminais do nervo isquiático, contorna superficialmente o colo da fíbula — trajeto que o torna o nervo periférico mais vulnerável a compressão de todo o corpo.",
    trajeto:
      "Separa-se do nervo isquiático na fossa poplítea, segue ao longo da margem medial do tendão do bíceps femoral, contorna a cabeça e o colo da fíbula (posição muito superficial, apenas pele e fáscia o recobrem) e se divide, ao nível do músculo fibular longo, em nervo fibular superficial e nervo fibular profundo. Dá também o ramo comunicante fibular, que se une ao cutâneo sural medial (do tibial) para formar o nervo sural.",
    ramosMusculares: [],
    ramosSensitivos: ["Nervo cutâneo sural lateral (contribui para o nervo sural)", "Ramo comunicante fibular"],
    correlacaoClinica:
      "Por seu trajeto superficial ao redor do colo da fíbula, é o nervo periférico mais comumente lesado por compressão externa — gesso apertado, cirurgia prolongada em posição de litotomia, hábito de sentar com as pernas cruzadas, ou perda de peso rápida (redução do coxim adiposo protetor). Sua lesão paralisa todos os músculos dos compartimentos anterior e lateral da perna, causando pé caído (steppage gait).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo fibular comum é o nervo periférico mais vulnerável a compressão em todo o corpo, por seu trajeto superficial contornando o colo da fíbula — protegido apenas por pele e fáscia.",
      "Sua lesão causa pé caído (perda da dorsiflexão) com marcha escarvante — o paciente eleva exageradamente o quadril e joelho para evitar que os dedos arrastem no chão.",
    ],
    fontes: [
      { tema: "Vulnerabilidade do nervo fibular comum ao colo da fíbula", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Lesão do nervo fibular comum e pé caído", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
      { tema: "Nomenclatura oficial (Nervus fibularis communis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-fibular-superficial",
    meshNames: ["Superficial_fibular_nerve_L", "Superficial_fibular_nerve_R", "Dorsal_digital_branches_of_superficial_fibular_nerve_L", "Dorsal_digital_branches_of_superficial_fibular_nerve_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus fibularis superficialis",
    nomeComum: "Nervo fibular superficial",
    raizes: "L4, L5, S1",
    resumo:
      "Ramo terminal lateral do nervo fibular comum, inerva os músculos eversores do compartimento lateral da perna e a maior parte da pele do dorso do pé.",
    trajeto:
      "Origina-se na divisão do nervo fibular comum, desce no compartimento lateral da perna (entre os músculos fibulares e o septo intermuscular anterior), perfura a fáscia profunda no terço distal da perna (tornando-se subcutâneo) e se divide em ramos cutâneos dorsais mediais e intermédios que suprem a maior parte do dorso do pé e dos dedos, exceto o primeiro espaço interdigital (território do fibular profundo).",
    ramosMusculares: ["Músculo fibular longo", "Músculo fibular curto"],
    ramosSensitivos: ["Nervo cutâneo dorsal medial", "Nervo cutâneo dorsal intermédio", "Dorso do pé e dos dedos (exceto 1º espaço interdigital)"],
    correlacaoClinica:
      "É frequentemente lesado em entorses graves de tornozelo por inversão (mecanismo de estiramento) ou em fraturas do colo da fíbula, causando fraqueza de eversão do pé (predispondo a novas entorses) e alteração de sensibilidade no dorso do pé. É também estruturalmente relevante em incisões cirúrgicas na face lateral distal da perna.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo fibular superficial inerva os eversores do pé (fibulares longo e curto) e a maior parte da sensibilidade do dorso do pé, poupando o primeiro espaço interdigital (território do fibular profundo).",
      "Sua lesão causa fraqueza de eversão do tornozelo, um fator de risco para entorses recorrentes por inversão.",
    ],
    fontes: [
      { tema: "Anatomia do nervo fibular superficial", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus fibularis superficialis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-fibular-profundo",
    meshNames: [
      "Deep_fibular_nerve_L",
      "Deep_fibular_nerve_R",
      "Muscular_branches_of_deep_fibular_nerve_L",
      "Muscular_branches_of_deep_fibular_nerve_R",
      "Dorsal_digital_branches_of_deep_fibular_nerve_L",
      "Dorsal_digital_branches_of_deep_fibular_nerve_R",
    ],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus fibularis profundus",
    nomeComum: "Nervo fibular profundo",
    raizes: "L4, L5, S1",
    resumo:
      "Ramo terminal medial do nervo fibular comum, inerva todos os músculos dorsiflexores/extensores do compartimento anterior da perna e a pele do primeiro espaço interdigital do pé.",
    trajeto:
      "Origina-se na divisão do nervo fibular comum, perfura o septo intermuscular anterior para entrar no compartimento anterior da perna, desce junto à artéria tibial anterior sobre a membrana interóssea, passa profundamente ao retináculo dos músculos extensores no tornozelo e termina no dorso do pé, inervando os pequenos extensores intrínsecos e a pele entre o 1º e o 2º dedos.",
    ramosMusculares: [
      "Músculo tibial anterior",
      "Músculo extensor longo dos dedos",
      "Músculo extensor curto dos dedos",
      "Músculo extensor longo do hálux",
      "Músculo extensor curto do hálux",
      "Músculo fibular terceiro",
    ],
    ramosSensitivos: ["Ramos digitais dorsais (pele do 1º espaço interdigital)"],
    correlacaoClinica:
      "É o principal responsável pela dorsiflexão do tornozelo — sua lesão (compartilhando a vulnerabilidade do fibular comum ao colo da fíbula) é a causa direta do pé caído. É também comprimido na síndrome do compartimento anterior da perna (por edema/hemorragia pós-trauma dentro do compartimento osteofascial rígido), uma emergência cirúrgica com risco de necrose muscular e do próprio nervo se não tratada por fasciotomia.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo fibular profundo inerva todos os dorsiflexores do tornozelo e extensores dos dedos — sua lesão é a causa direta e mais específica do pé caído.",
      "É comprimido na síndrome do compartimento anterior da perna, uma emergência cirúrgica (fasciotomia) diagnosticada clinicamente por dor desproporcional, parestesia no 1º espaço interdigital e perda de pulsos distais em fase tardia.",
    ],
    fontes: [
      { tema: "Síndrome do compartimento anterior da perna", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nervus fibularis profundus)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Síndromes do compartimento e fasciotomia", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-tibial",
    meshNames: ["Tibial_nerve_L", "Tibial_nerve_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus tibialis",
    nomeComum: "Nervo tibial",
    raizes: "L4, L5, S1, S2, S3",
    resumo:
      "Maior dos dois componentes terminais do nervo isquiático, inerva todos os músculos do compartimento posterior da perna (flexores plantares) e, via seus ramos plantares, a maior parte da planta do pé.",
    trajeto:
      "Continua o trajeto retilíneo do nervo isquiático a partir da fossa poplítea, descendo verticalmente entre as duas cabeças do músculo gastrocnêmio e profundamente ao músculo sóleo, acompanhado dos vasos tibiais posteriores, até passar posteriormente ao maléolo medial (dentro do túnel do tarso), onde se divide em nervo plantar medial e nervo plantar lateral.",
    ramosMusculares: [
      "Músculo tríceps sural (gastrocnêmio + sóleo)",
      "Músculo plantar",
      "Músculo poplíteo",
      "Músculo tibial posterior",
      "Músculo flexor longo dos dedos",
      "Músculo flexor longo do hálux",
    ],
    ramosSensitivos: ["Ramos calcaneanos mediais", "Nervo cutâneo sural medial (contribui para o nervo sural)"],
    correlacaoClinica:
      "É comprimido dentro do túnel do tarso (síndrome do túnel do tarso), causando dor em queimação e parestesia na planta do pé, análoga à síndrome do túnel do carpo no punho. O reflexo do tornozelo (aquileu) testa a integridade das raízes S1-S2, que compõem grande parte deste nervo. Por acompanhar de perto os vasos tibiais posteriores, também serve de referência para o bloqueio anestésico do tornozelo.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A síndrome do túnel do tarso (compressão do nervo tibial posteriormente ao maléolo medial) é o análogo, no tornozelo, da síndrome do túnel do carpo no punho.",
      "O reflexo aquileu (calcâneo) avalia as raízes S1-S2, que formam a maior contribuição ao nervo tibial — sua ausência sugere radiculopatia S1 ou neuropatia tibial.",
    ],
    fontes: [
      { tema: "Síndrome do túnel do tarso", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Reflexo aquileu", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
      { tema: "Nomenclatura oficial (Nervus tibialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-plantar-medial",
    meshNames: [
      "Medial_plantar_nerve_L",
      "Medial_plantar_nerve_R",
      "Common_plantar_digital_branches_of_medial_plantar_nerve",
      "Common_plantar_digital_branches_of_medial_plantar_nerve_L",
      "Proper_plantar_digital_branches_of_medial_plantar_nerve_L",
      "Proper_plantar_digital_branches_of_medial_plantar_nerve_R",
    ],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus plantaris medialis",
    nomeComum: "Nervo plantar medial",
    raizes: "L4, L5, S1 (via nervo tibial)",
    resumo:
      "Maior dos dois ramos terminais do nervo tibial no pé, análogo funcional do nervo mediano na mão — inerva os músculos da margem medial da planta e a sensibilidade dos três dedos e meio mediais.",
    trajeto:
      "Origina-se da divisão do nervo tibial no túnel do tarso, passa profundamente ao músculo abdutor do hálux (que inerva) e segue entre esse músculo e o flexor curto dos dedos, dividindo-se distalmente em ramos digitais plantares próprios para os três dedos e meio mediais.",
    ramosMusculares: [
      "Músculo abdutor do hálux",
      "Músculo flexor curto dos dedos",
      "Músculo flexor curto do hálux (cabeça medial)",
      "1º e 2º músculos lumbricais",
    ],
    ramosSensitivos: ["Pele da planta do pé, dos três dedos e meio mediais (hálux ao lado medial do 4º dedo)"],
    correlacaoClinica:
      "É considerado o equivalente plantar do nervo mediano na mão, tanto pelo território motor (músculos da eminência medial/tenar-símile) quanto sensitivo. Pode ser comprimido em corredores (jogger's foot), causando dor em queimação na planta medial do pé.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo plantar medial é frequentemente descrito como o 'nervo mediano do pé', por seu território motor e sensitivo análogo ao mediano na mão.",
      "Inerva o abdutor do hálux, flexor curto dos dedos, cabeça medial do flexor curto do hálux e os dois primeiros lumbricais — todos na margem medial/central da planta.",
    ],
    fontes: [
      { tema: "Analogia funcional entre nervo plantar medial e nervo mediano", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus plantaris medialis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Divisão do nervo tibial no pé", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-plantar-lateral",
    meshNames: [
      "Lateral_plantar_nerve_L",
      "Lateral_plantar_nerve_R",
      "Common_plantar_digital_branches_of_lateral_plantar_nerve_L",
      "Common_plantar_digital_branches_of_lateral_plantar_nerve_R",
      "Proper_plantar_digital_branches_of_lateral_plantar_nerve_L",
      "Proper_plantar_digital_branches_of_lateral_plantar_nerve_R",
    ],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus plantaris lateralis",
    nomeComum: "Nervo plantar lateral",
    raizes: "S1, S2 (via nervo tibial)",
    resumo:
      "Menor dos dois ramos terminais do nervo tibial no pé, análogo funcional do nervo ulnar na mão — inerva a maioria dos pequenos músculos intrínsecos do pé e a sensibilidade do dedo mínimo e metade lateral do 4º dedo.",
    trajeto:
      "Origina-se da divisão do nervo tibial no túnel do tarso, cruza obliquamente a planta profundamente ao músculo quadrado plantar (que inerva) em direção à margem lateral do pé, dividindo-se em ramo superficial (sensitivo, para o 4º e 5º dedos) e ramo profundo (motor, que cruza a planta suprindo os interósseos, o adutor do hálux e os lumbricais laterais).",
    ramosMusculares: [
      "Músculo quadrado plantar",
      "Músculo abdutor do dedo mínimo",
      "Músculo flexor curto do dedo mínimo",
      "Músculo flexor curto do hálux (cabeça lateral)",
      "3º e 4º músculos lumbricais",
      "Músculos interósseos plantares e dorsais",
      "Músculo adutor do hálux",
    ],
    ramosSensitivos: ["Pele do 5º dedo e metade lateral do 4º dedo"],
    correlacaoClinica:
      "É considerado o equivalente plantar do nervo ulnar na mão, inervando a maioria dos pequenos músculos intrínsecos do pé (interósseos, adutor do hálux) — sua lesão contribui de forma importante para deformidades em garra dos dedos, de modo análogo à mão em garra da lesão ulnar. Seu ramo para o abdutor do dedo mínimo ('nervo de Baxter') é causa reconhecida de dor crônica no calcanhar.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo plantar lateral é o 'nervo ulnar do pé' — inerva a maioria dos músculos intrínsecos (interósseos, adutor do hálux), assim como o ulnar faz na mão.",
      "Seu ramo motor para o abdutor do dedo mínimo, o nervo de Baxter, é uma causa de dor crônica no calcanhar por aprisionamento, diagnóstico diferencial da fasciíte plantar.",
    ],
    fontes: [
      { tema: "Analogia funcional entre nervo plantar lateral e nervo ulnar", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nervo de Baxter e dor no calcanhar", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Divisão do nervo tibial no pé", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-pudendo",
    meshNames: ["Pudendal_nerve_L", "Pudendal_nerve_R"],
    plexo: "Plexo sacral",
    nomeOficial: "Nervus pudendus",
    nomeComum: "Nervo pudendo",
    raizes: "S2, S3, S4",
    resumo:
      "Principal nervo somático do períneo, inerva a musculatura do assoalho pélvico e dos esfíncteres, além de fornecer a sensibilidade da genitália externa — essencial para continência e função sexual.",
    trajeto:
      "Origina-se dos ramos ventrais de S2-S4, sai da pelve pelo forame isquiático maior (abaixo do piriforme), contorna a espinha isquiática e o ligamento sacroespinal, e reentra na pelve/períneo pelo forame isquiático menor, percorrendo o canal pudendo (canal de Alcock) na parede lateral da fossa isquioanal antes de se ramificar.",
    ramosMusculares: [
      "Músculo levantador do ânus",
      "Músculo transverso superficial do períneo",
      "Músculo transverso profundo do períneo",
      "Músculo bulboesponjoso",
      "Músculo esfíncter externo do ânus",
      "Músculo esfíncter da uretra",
    ],
    ramosSensitivos: ["Nervos retais inferiores", "Nervos perineais (labiais/escrotais posteriores)", "Nervo dorsal do clitóris/pênis"],
    correlacaoClinica:
      "O bloqueio do nervo pudendo (via acesso transvaginal, referenciando a espinha isquiática palpável) é usado como anestesia regional no parto vaginal e em cirurgias perineais. Sua compressão crônica no canal pudendo (síndrome do canal de Alcock, associada a ciclismo prolongado ou parto traumático) causa dor perineal crônica, incontinência e disfunção sexual. É também o nervo aferente do reflexo bulbocavernoso, usado para avaliar integridade da inervação sacral em trauma raquimedular.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O bloqueio do nervo pudendo usa a espinha isquiática como referência anatômica palpável, sendo empregado como anestesia no parto vaginal e em procedimentos perineais.",
      "A compressão crônica no canal pudendo (canal de Alcock) — a síndrome do nervo pudendo — é causa reconhecida de dor perineal crônica, associada a ciclismo prolongado.",
    ],
    fontes: [
      { tema: "Anatomia do nervo pudendo e canal de Alcock", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Bloqueio do nervo pudendo em obstetrícia", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Tabela de ramos do plexo lombossacral", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "raizes-do-plexo-braquial",
    meshNames: ["Roots_of_brachial_plexus_L", "Roots_of_brachial_plexus_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Radices plexus brachialis",
    nomeComum: "Raízes do plexo braquial",
    raizes: "C5, C6, C7, C8, T1",
    resumo:
      "Os ramos ventrais de C5-T1 que, ao emergirem entre os músculos escalenos anterior e médio, constituem o ponto de partida da sequência clássica do plexo braquial (raízes → troncos → divisões → cordões → ramos terminais).",
    trajeto:
      "Formadas pelos ramos ventrais dos nervos espinhais C5 a T1, emergem no espaço interescalênico (entre os músculos escalenos anterior e médio), onde se unem para formar os três troncos do plexo: C5-C6 formam o tronco superior, C7 continua isoladamente como tronco médio, e C8-T1 formam o tronco inferior, este último passando sobre a primeira costela junto à artéria subclávia.",
    ramosMusculares: [],
    ramosSensitivos: [],
    correlacaoClinica:
      "Lesões das raízes superiores (C5-C6), geralmente por tração violenta do ombro para baixo com a cabeça inclinada para o lado oposto (trauma obstétrico ou queda de motocicleta), causam a paralisia de Erb-Duchenne (\"posição de gorjeta de garçom\": braço aduzido, rodado internamente, cotovelo estendido). Lesões das raízes inferiores (C8-T1), por tração do braço abduzido acima da cabeça, causam a paralisia de Klumpke, com mão em garra e frequente síndrome de Horner associada (por lesão do ramo comunicante simpático de T1).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Paralisia de Erb-Duchenne (C5-C6): lesão das raízes superiores por tração do ombro para baixo — \"posição de gorjeta de garçom\" (waiter's tip), clássica de trauma obstétrico (distocia de ombro).",
      "Paralisia de Klumpke (C8-T1): lesão das raízes inferiores por tração do braço abduzido — mão em garra, frequentemente associada à síndrome de Horner por comprometimento do ramo comunicante simpático de T1.",
    ],
    fontes: [
      { tema: "Paralisias de Erb-Duchenne e Klumpke", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Organização das raízes do plexo braquial", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Radices plexus brachialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "tronco-superior-do-plexo-braquial",
    meshNames: ["Superior_trunk_of_brachial_plexus_L", "Superior_trunk_of_brachial_plexus_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Truncus superior plexus brachialis",
    nomeComum: "Tronco superior do plexo braquial",
    raizes: "C5, C6",
    resumo:
      "Formado pela união das raízes C5-C6, é o tronco classicamente lesado na paralisia de Erb-Duchenne, a mais comum das lesões traumáticas do plexo braquial.",
    trajeto:
      "Formado pela convergência das raízes C5 e C6 no espaço interescalênico, emite o nervo supraescapular e o ramo para o músculo subclávio antes de se dividir em divisão anterior e divisão posterior, que seguem para formar, respectivamente, o cordão lateral e (junto às divisões posteriores dos demais troncos) o cordão posterior.",
    ramosMusculares: ["Músculo subclávio (ramo direto do tronco)"],
    ramosSensitivos: [],
    correlacaoClinica:
      "É o tronco lesado na paralisia de Erb-Duchenne, a lesão mais comum do plexo braquial — resulta em paralisia dos músculos deltoide, bíceps braquial, braquial e supinador, com o membro em posição característica de adução, rotação interna e extensão do cotovelo (\"gorjeta de garçom\"), além de perda sensitiva na face lateral do braço e antebraço.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O tronco superior (C5-C6) é o local da lesão na paralisia de Erb-Duchenne, tipicamente por trauma obstétrico (distocia de ombro) ou queda com o ombro forçado para baixo.",
      "Emite dois ramos diretos antes de se dividir: o nervo supraescapular e o ramo para o músculo subclávio.",
    ],
    fontes: [
      { tema: "Paralisia de Erb-Duchenne", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Ramos diretos do tronco superior", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Truncus superior plexus brachialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "tronco-medio-do-plexo-braquial",
    meshNames: ["Middle_trunk_of_brachial_plexus_L", "Middle_trunk_of_brachial_plexus_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Truncus medius plexus brachialis",
    nomeComum: "Tronco médio do plexo braquial",
    raizes: "C7",
    resumo:
      "Continuação isolada da raiz C7, sem se unir a outras raízes antes de se dividir — a divisão anterior do tronco médio contribui de forma importante para o nervo radial (via cordão posterior) e para o nervo mediano (via cordão lateral).",
    trajeto:
      "Formado exclusivamente pela raiz C7, sem convergência com raízes vizinhas, divide-se em divisão anterior (que se une às divisões anteriores dos troncos superior e inferior para formar, junto ao superior, o cordão lateral) e divisão posterior (que se une às divisões posteriores dos outros dois troncos para formar o cordão posterior).",
    ramosMusculares: [],
    ramosSensitivos: [],
    correlacaoClinica:
      "Por ser a única fonte da raiz C7 no plexo, sua lesão isolada é rara, mas contribuições de C7 são clinicamente relevantes na radiculopatia cervical de C7, que classicamente causa fraqueza do tríceps braquial (reflexo tricipital diminuído) e dor irradiada para o dedo médio.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É o único tronco do plexo braquial formado por uma raiz isolada (C7), sem convergência com raízes vizinhas.",
      "A radiculopatia de C7 (hérnia discal C6-C7) classicamente reduz o reflexo tricipital e causa dor/parestesia no dedo médio — via a contribuição de C7 ao nervo radial e ao nervo mediano.",
    ],
    fontes: [
      { tema: "Radiculopatia cervical de C7", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Organização dos troncos do plexo braquial", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Truncus medius plexus brachialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "tronco-inferior-do-plexo-braquial",
    meshNames: ["Inferior_trunk_of_brachial_plexus_L", "Inferior_trunk_of_brachial_plexus_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Truncus inferior plexus brachialis",
    nomeComum: "Tronco inferior do plexo braquial",
    raizes: "C8, T1",
    resumo:
      "Formado pela união das raízes C8-T1, passa sobre a primeira costela junto à artéria subclávia — posição que o torna vulnerável tanto à síndrome do desfiladeiro torácico quanto à lesão na paralisia de Klumpke.",
    trajeto:
      "Formado pela convergência das raízes C8 e T1, passa posteriormente à artéria subclávia sobre a face superior da primeira costela (no desfiladeiro cervicoaxilar) antes de se dividir em divisão anterior (que continua isoladamente como cordão medial, sem se juntar às divisões anteriores dos outros troncos) e divisão posterior (que se une ao cordão posterior).",
    ramosMusculares: [],
    ramosSensitivos: [],
    correlacaoClinica:
      "É o tronco lesado na paralisia de Klumpke (tração do braço abduzido, como ao segurar um galho ao cair), causando mão em garra por perda da musculatura intrínseca da mão (nervo ulnar e ramo motor do mediano). Sua relação estreita com a artéria subclávia sobre a primeira costela explica por que a síndrome do desfiladeiro torácico (compressão neurovascular nesse espaço, por costela cervical ou hipertrofia do escaleno anterior) frequentemente causa sintomas predominantemente em território de C8-T1 (face medial do antebraço e mão).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O tronco inferior (C8-T1) é lesado na paralisia de Klumpke, com mão em garra e frequente síndrome de Horner associada.",
      "Passa sobre a primeira costela junto à artéria subclávia — a mesma relação anatômica explorada na síndrome do desfiladeiro torácico.",
    ],
    fontes: [
      { tema: "Paralisia de Klumpke e síndrome do desfiladeiro torácico", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Relação com a artéria subclávia na primeira costela", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Truncus inferior plexus brachialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-dorsal-da-escapula",
    meshNames: ["Dorsal_scapular_nerve_L", "Dorsal_scapular_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus dorsalis scapulae",
    nomeComum: "Nervo dorsal da escápula",
    raizes: "C5",
    resumo:
      "Ramo supraclavicular direto da raiz C5 que perfura o músculo escaleno médio para inervar os músculos romboides e, com frequência, o levantador da escápula.",
    trajeto:
      "Origina-se diretamente da raiz C5, perfura o músculo escaleno médio e desce profundamente ao músculo levantador da escápula, acompanhando a margem medial da escápula junto à artéria escapular dorsal para inervar os músculos romboide maior e menor (e, em parte da população, contribuir para o levantador da escápula).",
    ramosMusculares: ["Músculo romboide maior", "Músculo romboide menor", "Músculo levantador da escápula (contribuição variável)"],
    ramosSensitivos: [],
    correlacaoClinica:
      "Sua lesão (rara, isolada) causa fraqueza da retração e rotação inferior da escápula, com discreta alteração postural da escápula, geralmente sutil e de difícil percepção clínica isolada — testado pedindo ao paciente para retrair as escápulas contra resistência.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É um dos poucos ramos do plexo braquial que se origina diretamente de uma raiz (C5), antes mesmo da formação dos troncos.",
      "Perfura o músculo escaleno médio — característica anatômica que o distingue dos demais ramos supraclaviculares.",
    ],
    fontes: [
      { tema: "Ramos diretos das raízes do plexo braquial", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus dorsalis scapulae)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-toracico-longo",
    meshNames: ["Long_thoracic_nerve_L", "Long_thoracic_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus thoracicus longus",
    nomeComum: "Nervo torácico longo",
    raizes: "C5, C6, C7",
    resumo:
      "Nervo motor puro para o músculo serrátil anterior, com trajeto longo e superficial na face lateral do tórax que o torna o nervo periférico mais classicamente lesado em cirurgias (mastectomia, esvaziamento axilar), causando a escápula alada.",
    trajeto:
      "Origina-se de raízes diretas de C5, C6 e C7 (as duas primeiras perfurando o músculo escaleno médio), desce posteriormente ao plexo braquial e à artéria axilar, percorrendo a face lateral do tórax sobre o músculo serrátil anterior — trajeto superficial e longo que o expõe a lesão durante dissecção axilar cirúrgica ou trauma penetrante.",
    ramosMusculares: ["Músculo serrátil anterior"],
    ramosSensitivos: [],
    correlacaoClinica:
      "É o nervo mais frequentemente lesado em cirurgias axilares (mastectomia radical, esvaziamento linfonodal axilar) devido ao seu trajeto superficial na parede torácica lateral. Sua lesão paralisa o músculo serrátil anterior, causando escápula alada (winged scapula) — a margem medial da escápula se projeta posteriormente, mais evidente ao empurrar as mãos contra uma parede, pela perda da fixação da escápula à parede torácica.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "A lesão do nervo torácico longo causa escápula alada por paralisia do músculo serrátil anterior — teste clássico: empurrar as mãos contra a parede evidencia a protrusão da margem medial da escápula.",
      "É o nervo periférico mais comumente lesado em cirurgias de mama/axila (mastectomia, esvaziamento axilar) devido ao seu trajeto longo e superficial na parede torácica lateral.",
    ],
    fontes: [
      { tema: "Escápula alada e lesão do nervo torácico longo", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Lesão iatrogênica em cirurgia axilar", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus thoracicus longus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-supraescapular",
    meshNames: ["Suprascapular_nerve_L", "Suprascapular_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus suprascapularis",
    nomeComum: "Nervo supraescapular",
    raizes: "C5, C6",
    resumo:
      "Ramo do tronco superior que atravessa a incisura escapular sob o ligamento transverso superior da escápula, ponto de compressão clássico, para inervar os músculos supraespinal e infraespinal.",
    trajeto:
      "Origina-se do tronco superior (C5-C6), atravessa a fossa supraespinal passando sob o ligamento transverso superior da escápula (na incisura escapular, enquanto a artéria supraescapular passa sobre esse ligamento — mnemônico \"o nervo vai por baixo, a artéria por cima\"), inerva o músculo supraespinal, contorna a margem lateral da espinha da escápula pela incisura espinoglenoidal e alcança a fossa infraespinal para inervar o músculo infraespinal.",
    ramosMusculares: ["Músculo supraespinal", "Músculo infraespinal"],
    ramosSensitivos: ["Ramo articular para a articulação do ombro"],
    correlacaoClinica:
      "É comprimido na incisura escapular (por espessamento do ligamento transverso superior, gânglios sinoviais ou movimentos repetitivos de arremesso, como em atletas de vôlei/beisebol), causando dor posterior no ombro e fraqueza da abdução inicial (supraespinal) e da rotação externa (infraespinal) — quadro que mimetiza lesão do manguito rotador e exige eletroneuromiografia para diferenciação.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Mnemônico clássico: na incisura escapular, o nervo supraescapular passa por baixo do ligamento transverso superior da escápula, enquanto a artéria supraescapular passa por cima.",
      "A síndrome de compressão do nervo supraescapular mimetiza lesão do manguito rotador (dor + fraqueza de abdução e rotação externa), mas é de origem neural, não tendínea.",
    ],
    fontes: [
      { tema: "Síndrome de compressão do nervo supraescapular", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Relação com o ligamento transverso superior da escápula", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus suprascapularis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-subclavio",
    meshNames: ["Subclavian_nerve_L", "Subclavian_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus subclavius",
    nomeComum: "Nervo subclávio",
    raizes: "C5, C6",
    resumo:
      "Pequeno ramo direto do tronco superior para o músculo subclávio, com relevância anatômica maior do que clínica — frequentemente contribui com um ramo acessório para o nervo frênico.",
    trajeto:
      "Origina-se do tronco superior (C5-C6), desce anteriormente à artéria e veia subclávias para inervar o músculo subclávio, na face inferior da clavícula; um ramo comunicante ocasional (\"ansa subclávia\" ou raiz acessória frênica) pode se juntar ao nervo frênico.",
    ramosMusculares: ["Músculo subclávio"],
    ramosSensitivos: [],
    correlacaoClinica:
      "Tem baixa relevância clínica isolada, mas sua raiz acessória frênica ocasional é clinicamente importante em cirurgia torácica: uma lesão do nervo frênico principal pode não causar paralisia diafragmática completa se essa raiz acessória estiver presente e preservada.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo subclávio pode contribuir com uma raiz acessória para o nervo frênico — relevante para explicar função diafragmática parcialmente preservada após lesão do frênico principal.",
    ],
    fontes: [
      { tema: "Raiz acessória frênica", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus subclavius)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-peitoral-lateral",
    meshNames: ["Lateral_pectoral_nerve_L", "Lateral_pectoral_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus pectoralis lateralis",
    nomeComum: "Nervo peitoral lateral",
    raizes: "C5, C6, C7",
    resumo:
      "Ramo do cordão lateral que perfura a fáscia clavipeitoral para inervar predominantemente o músculo peitoral maior, com uma alça comunicante característica ao nervo peitoral medial.",
    trajeto:
      "Origina-se do cordão lateral (C5-C7), perfura a fáscia clavipeitoral anteriormente à artéria e veia axilares para alcançar a face profunda do músculo peitoral maior; comunica-se com o nervo peitoral medial através de uma alça (ansa pectoralis) anterior à artéria axilar, através da qual também envia fibras ao peitoral menor.",
    ramosMusculares: ["Músculo peitoral maior (predominante)", "Contribuição ocasional ao peitoral menor via alça com o nervo peitoral medial"],
    ramosSensitivos: [],
    correlacaoClinica:
      "Lesão isolada é rara; em conjunto com o nervo peitoral medial, sua lesão compromete a força de adução e rotação interna do braço pelo peitoral maior, relevante em avaliação pós-cirúrgica de procedimentos na região axilar/peitoral (ex: reconstrução mamária com retalho de peitoral).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Apesar do nome \"lateral\", origina-se do cordão lateral mas inerva principalmente o músculo peitoral maior — o nome refere-se à origem do cordão, não ao músculo-alvo predominante.",
      "Comunica-se com o nervo peitoral medial pela alça pectoral (ansa pectoralis), anterior à artéria axilar.",
    ],
    fontes: [
      { tema: "Alça pectoral e inervação do peitoral maior/menor", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus pectoralis lateralis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-peitoral-medial",
    meshNames: ["Medial_pectoral_nerve_L", "Medial_pectoral_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus pectoralis medialis",
    nomeComum: "Nervo peitoral medial",
    raizes: "C8, T1",
    resumo:
      "Ramo do cordão medial que passa entre a artéria e a veia axilares para inervar o músculo peitoral menor e, através dele (ou ao seu redor), contribuir para o peitoral maior.",
    trajeto:
      "Origina-se do cordão medial (C8-T1), passa entre a artéria e a veia axilares, perfura (ou contorna a margem lateral de) o músculo peitoral menor, inervando-o, e continua para contribuir com fibras ao músculo peitoral maior, principalmente sua porção inferior/esternocostal.",
    ramosMusculares: ["Músculo peitoral menor", "Músculo peitoral maior (porção esternocostal, contribuição parcial)"],
    ramosSensitivos: [],
    correlacaoClinica:
      "É um marco cirúrgico importante em dissecção axilar (mastectomia, esvaziamento linfonodal): sua preservação, junto ao nervo peitoral lateral, é necessária para manter a função e o volume do músculo peitoral maior, relevante em cirurgia oncológica de mama.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Apesar do nome \"medial\", frequentemente perfura o músculo peitoral menor antes de contribuir para o peitoral maior — nome refere-se à origem do cordão medial.",
      "É um marco de preservação nervosa relevante em cirurgia oncológica de mama e esvaziamento axilar.",
    ],
    fontes: [
      { tema: "Marcos nervosos em cirurgia axilar/mamária", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus pectoralis medialis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-musculocutaneo",
    meshNames: ["Musculocutaneous_nerve_L", "Musculocutaneous_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus musculocutaneus",
    nomeComum: "Nervo musculocutâneo",
    raizes: "C5, C6, C7",
    resumo:
      "Ramo terminal do cordão lateral que perfura o músculo coracobraquial, inerva os três músculos do compartimento anterior do braço (flexores do cotovelo) e termina como nervo cutâneo antebraquial lateral.",
    trajeto:
      "Origina-se do cordão lateral (C5-C7), perfura o músculo coracobraquial (marco cirúrgico clássico), desce entre os músculos bíceps braquial e braquial, inervando os três músculos do compartimento anterior do braço, e emerge lateralmente ao tendão distal do bíceps, próximo ao cotovelo, para continuar como o nervo cutâneo antebraquial lateral, que inerva a pele da face lateral do antebraço.",
    ramosMusculares: ["Músculo coracobraquial", "Músculo bíceps braquial", "Músculo braquial"],
    ramosSensitivos: ["Nervo cutâneo antebraquial lateral (pele da face lateral do antebraço)"],
    correlacaoClinica:
      "Sua lesão (rara, isolada; mais comum em lesões do cordão lateral ou do plexo superior) causa fraqueza da flexão do cotovelo (parcialmente compensada pelo braquiorradial, inervado pelo radial) e da supinação do antebraço pelo bíceps, além de perda sensitiva na face lateral do antebraço, e abolição do reflexo bicipital.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Perfura o músculo coracobraquial — marco anatômico clássico usado para identificá-lo em dissecção e em bloqueios anestésicos do plexo braquial (via axilar).",
      "Sua porção sensitiva terminal, o nervo cutâneo antebraquial lateral, é o responsável pela sensibilidade da face lateral do antebraço — território poupado na lesão isolada do nervo mediano ou ulnar.",
    ],
    fontes: [
      { tema: "Trajeto pelo músculo coracobraquial", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Território sensitivo do nervo cutâneo antebraquial lateral", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus musculocutaneus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-cutaneo-antebraquial-medial",
    meshNames: [
      "Medial_antebrachial_cutaneous_nerve_L",
      "Medial_antebrachial_cutaneous_nerve_R",
      "Anterior_branch_of_medial_antebrachial_cutaneous_nerve_L",
      "Anterior_branch_of_medial_antebrachial_cutaneous_nerve_R",
      "Posterior_branch_of_medial_antebrachial_cutaneous_nerve_L",
      "Posterior_branch_of_medial_antebrachial_cutaneous_nerve_R",
    ],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus cutaneus antebrachii medialis",
    nomeComum: "Nervo cutâneo antebraquial medial",
    raizes: "C8, T1",
    resumo:
      "Ramo puramente sensitivo do cordão medial que inerva a pele das faces anterior e posterior da porção medial do antebraço — território clinicamente relevante por seu trajeto próximo à veia basílica.",
    trajeto:
      "Origina-se do cordão medial (C8-T1), acompanha a artéria e veia axilares e depois a veia basílica no braço, perfurando a fáscia braquial profunda próximo ao cotovelo para se dividir em ramo anterior (pele da face anterior/medial do antebraço) e ramo posterior (pele da face posterior/medial do antebraço).",
    ramosMusculares: [],
    ramosSensitivos: ["Ramo anterior (pele da face anterior-medial do antebraço)", "Ramo posterior (pele da face posterior-medial do antebraço)"],
    correlacaoClinica:
      "É vulnerável a lesão iatrogênica durante punção venosa ou coleta de enxerto venoso (veia basílica) para cirurgia cardíaca, pela proximidade anatômica estreita entre os dois — causando parestesia/dor neuropática na face medial do antebraço no pós-operatório.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É frequentemente lesado em punção venosa da fossa cubital ou coleta de enxerto da veia basílica, pela proximidade anatômica direta entre os dois — causa clássica de parestesia iatrogênica no antebraço medial.",
    ],
    fontes: [
      { tema: "Lesão iatrogênica em punção venosa/enxerto de veia basílica", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus cutaneus antebrachii medialis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-cutaneo-antebraquial-lateral",
    meshNames: ["Lateral_antebrachial_cutaneous_nerve_L", "Lateral_antebrachial_cutaneous_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus cutaneus antebrachii lateralis",
    nomeComum: "Nervo cutâneo antebraquial lateral",
    raizes: "C5, C6, C7",
    resumo:
      "Continuação sensitiva terminal do nervo musculocutâneo, inerva a pele da face lateral do antebraço, do cotovelo ao punho.",
    trajeto:
      "Continuação direta do nervo musculocutâneo após este emergir lateralmente ao tendão distal do bíceps braquial próximo ao cotovelo, descendo subcutaneamente na face lateral do antebraço até próximo ao punho.",
    ramosMusculares: [],
    ramosSensitivos: ["Pele da face lateral do antebraço, do cotovelo ao punho"],
    correlacaoClinica:
      "Sua preservação (ou lesão) é usada clinicamente para diferenciar uma lesão isolada do nervo musculocutâneo (que compromete tanto motricidade da flexão do cotovelo quanto essa sensibilidade) de lesões mais distais do nervo radial ou mediano, que poupam esse território.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É a continuação sensitiva terminal do nervo musculocutâneo — sua perda sensitiva na face lateral do antebraço, associada à fraqueza de flexão do cotovelo, localiza a lesão no musculocutâneo (e não no radial ou mediano).",
    ],
    fontes: [
      { tema: "Território sensitivo terminal do musculocutâneo", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus cutaneus antebrachii lateralis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-cutaneo-antebraquial-posterior",
    meshNames: ["Posterior_antebrachial_cutaneous_nerve_L", "Posterior_antebrachial_cutaneous_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus cutaneus antebrachii posterior",
    nomeComum: "Nervo cutâneo antebraquial posterior",
    raizes: "C5, C6, C7, C8",
    resumo:
      "Ramo sensitivo do nervo radial que inerva a pele da face posterior do antebraço, entre os territórios dos nervos cutâneos antebraquiais lateral e medial.",
    trajeto:
      "Origina-se do nervo radial no braço (antes de sua divisão terminal), perfura a fáscia braquial próximo ao cotovelo e desce subcutaneamente na linha média da face posterior do antebraço até o punho.",
    ramosMusculares: [],
    ramosSensitivos: ["Pele da face posterior do antebraço, entre os territórios lateral e medial"],
    correlacaoClinica:
      "Compromido em conjunto com o restante do território sensitivo do nervo radial nas lesões proximais desse nervo (fratura do úmero, compressão axilar por muleta) — sua perda isolada tem pouca relevância clínica própria, sendo mais um marcador topográfico do território radial.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É um ramo do nervo radial (não um ramo direto do plexo) — sua perda sensitiva faz parte do quadro de lesão radial proximal, junto com a mão caída (wrist drop).",
    ],
    fontes: [
      { tema: "Território sensitivo do nervo radial", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus cutaneus antebrachii posterior)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-subescapular-superior",
    meshNames: ["Superior_subscapular_nerve_L", "Superior_subscapular_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus subscapularis superior",
    nomeComum: "Nervo subescapular superior",
    raizes: "C5, C6",
    resumo:
      "Ramo curto do cordão posterior que inerva a porção superior do músculo subescapular, componente do manguito rotador.",
    trajeto:
      "Origina-se do cordão posterior (C5-C6), tem trajeto curto e direto até a face profunda (anterior) da porção superior do músculo subescapular, que inerva.",
    ramosMusculares: ["Músculo subescapular (porção superior)"],
    ramosSensitivos: [],
    correlacaoClinica:
      "Lesão isolada é rara; sua função (rotação interna do braço, junto ao subescapular como um todo) é testada clinicamente pelo teste de Gerber (lift-off test), no contexto de avaliação do manguito rotador.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Junto ao nervo subescapular inferior, inerva o músculo subescapular — o único dos quatro músculos do manguito rotador com rotação interna do ombro como ação principal.",
    ],
    fontes: [
      { tema: "Inervação do músculo subescapular e teste de Gerber", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus subscapularis superior)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-subescapular-inferior",
    meshNames: ["Inferior_subscapular_nerve_L", "Inferior_subscapular_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus subscapularis inferior",
    nomeComum: "Nervo subescapular inferior",
    raizes: "C5, C6",
    resumo:
      "Ramo do cordão posterior que inerva a porção inferior do músculo subescapular e o músculo redondo maior.",
    trajeto:
      "Origina-se do cordão posterior (C5-C6), desce pela face anterior do músculo subescapular, inervando sua porção inferior, e continua para inervar o músculo redondo maior em sua face anterior.",
    ramosMusculares: ["Músculo subescapular (porção inferior)", "Músculo redondo maior"],
    ramosSensitivos: [],
    correlacaoClinica:
      "É um marco anatômico relevante em cirurgia do ombro (artroplastia, reparo de manguito rotador) pelo risco de lesão durante acesso à face anterior da articulação glenoumeral, o que comprometeria a rotação interna do braço.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É o único ramo nervoso do plexo braquial a inervar o músculo redondo maior — músculo que, apesar do nome semelhante ao redondo menor (inervado pelo axilar), tem ação de rotação interna, não externa.",
    ],
    fontes: [
      { tema: "Inervação do redondo maior vs. redondo menor", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus subscapularis inferior)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-toracodorsal",
    meshNames: ["Thoracodorsal_nerve_L", "Thoracodorsal_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus thoracodorsalis",
    nomeComum: "Nervo toracodorsal",
    raizes: "C6, C7, C8",
    resumo:
      "Ramo do cordão posterior, entre os dois nervos subescapulares, que inerva exclusivamente o músculo latíssimo do dorso — marco cirúrgico crítico em reconstrução mamária com retalho miocutâneo.",
    trajeto:
      "Origina-se do cordão posterior (C6-C8), entre o nervo subescapular superior e o inferior, desce pela parede posterior da axila junto aos vasos subescapulares e toracodorsais até a face profunda (anterior) do músculo latíssimo do dorso, que inerva.",
    ramosMusculares: ["Músculo latíssimo do dorso"],
    ramosSensitivos: [],
    correlacaoClinica:
      "É um marco cirúrgico crítico na reconstrução mamária com retalho miocutâneo do latíssimo do dorso — sua preservação é essencial para a viabilidade funcional do retalho transferido, e sua lesão inadvertida em cirurgia axilar compromete a extensão, adução e rotação interna do braço (testado pedindo ao paciente para tossir com a mão na região lombar, sentindo a contração do músculo).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É o nervo motor do músculo latíssimo do dorso, e sua preservação é essencial na cirurgia de retalho miocutâneo do latíssimo para reconstrução mamária.",
      "Localiza-se entre os nervos subescapulares superior e inferior no espaço axilar posterior — os \"três nervos da parede posterior da axila\".",
    ],
    fontes: [
      { tema: "Retalho de latíssimo do dorso em reconstrução mamária", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus thoracodorsalis)", fonte: "Terminologia Anatomica (FIPAT)" },
      { tema: "Tabela de ramos do plexo braquial", fonte: "Caderno de Anatomia Humana 1, UFTM (2019)" },
    ],
  },
  {
    slug: "nervo-axilar",
    meshNames: ["Axillary_nerve_L", "Axillary_nerve_R", "Muscular_branches_of_axillary_nerve_L", "Muscular_branches_of_axillary_nerve_R"],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus axillaris",
    nomeComum: "Nervo axilar",
    raizes: "C5, C6",
    resumo:
      "Ramo terminal do cordão posterior que atravessa o espaço quadrangular junto à artéria circunflexa posterior do úmero, inervando os músculos deltoide e redondo menor — classicamente lesado em luxação do ombro e fratura do colo cirúrgico do úmero.",
    trajeto:
      "Origina-se do cordão posterior (C5-C6), passa pelo espaço quadrangular (delimitado pelos músculos redondo menor, redondo maior, tríceps braquial e o colo cirúrgico do úmero) junto à artéria circunflexa posterior do úmero, contorna o colo cirúrgico do úmero posteriormente e se divide em ramo anterior (inerva a porção anterior/média do deltoide e emite ramos cutâneos para a pele sobre o deltoide) e ramo posterior (inerva a porção posterior do deltoide e o músculo redondo menor).",
    ramosMusculares: ["Músculo deltoide", "Músculo redondo menor"],
    ramosSensitivos: ["Nervo cutâneo lateral superior do braço (pele sobre o deltoide, \"sinal do distintivo de sargento\")"],
    correlacaoClinica:
      "É classicamente lesado em luxação glenoumeral anterior e em fratura do colo cirúrgico do úmero, devido ao seu trajeto justaposto a essas estruturas — causa perda da abdução do braço (deltoide) e anestesia da região sobre o deltoide (\"sinal do distintivo de sargento\", regimental badge sign), testada antes de reduzir qualquer luxação de ombro suspeita.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Sempre testar a sensibilidade sobre o deltoide (\"sinal do distintivo de sargento\") antes E depois de reduzir uma luxação de ombro — documenta lesão pré-existente do nervo axilar antes de qualquer manipulação.",
      "É lesado no espaço quadrangular e no colo cirúrgico do úmero — as duas localizações clássicas de trauma (luxação anterior do ombro e fratura do colo cirúrgico).",
    ],
    fontes: [
      { tema: "Lesão do nervo axilar em luxação de ombro e fratura do colo cirúrgico", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Sinal do distintivo de sargento", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus axillaris)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-radial",
    meshNames: [
      "Radial_nerve_L",
      "Radial_nerve_R",
      "Deep_branch_of_radial_nerve_L",
      "Deep_branch_of_radial_nerve_R",
      "Superficial_branch_of_radial_nerve_L",
      "Superficial_branch_of_radial_nerve_R",
      "Muscular_branches_of_radial_nerve_L",
      "Muscular_branches_of_radial_nerve_R",
      "Dorsal_digital_branches_of_radial_nerve_L",
      "Dorsal_digital_branches_of_radial_nerve_R",
    ],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus radialis",
    nomeComum: "Nervo radial",
    raizes: "C5, C6, C7, C8, T1",
    resumo:
      "Maior ramo terminal do plexo braquial, continuação direta do cordão posterior, percorre o sulco do nervo radial no úmero (vulnerável a fratura da diáfise) e inerva todo o compartimento extensor do braço e antebraço — sua lesão causa a clássica \"mão caída\" (wrist drop).",
    trajeto:
      "Continuação direta do cordão posterior (C5-T1), passa posteriormente à artéria axilar e depois ao úmero, percorrendo o sulco do nervo radial (sulco espiral) em contato direto com a diáfise umeral, inerva o músculo tríceps braquial nesse trajeto, perfura o septo intermuscular lateral do braço e desce entre os músculos braquial e braquiorradial até a fossa cubital, onde se divide em ramo profundo (motor, atravessa o músculo supinador para inervar todo o compartimento extensor do antebraço) e ramo superficial (sensitivo, acompanha a artéria radial até o dorso da mão).",
    ramosMusculares: [
      "Músculo tríceps braquial e ancôneo",
      "Músculo braquiorradial",
      "Músculo extensor radial longo do carpo",
      "Todo o compartimento extensor do antebraço, via ramo profundo (extensor radial curto do carpo, supinador, extensor dos dedos, extensor do dedo mínimo, extensor ulnar do carpo, abdutor longo do polegar, extensor curto e longo do polegar, extensor do indicador)",
    ],
    ramosSensitivos: ["Pele do dorso da mão e dos dedos, do polegar até a metade radial do 4º dedo (ramo superficial)", "Nervo cutâneo antebraquial posterior"],
    correlacaoClinica:
      "É classicamente lesado na fratura da diáfise umeral (sulco do nervo radial) e por compressão prolongada do braço contra uma superfície dura (\"paralisia do sábado à noite\", saturday night palsy, por dormir com o braço sobre uma cadeira/muleta), causando a mão caída (wrist drop) por paralisia dos extensores do punho e dedos, com anestesia na tabaqueira anatômica. O ramo profundo isolado pode ser comprimido pelo músculo supinador (síndrome do túnel radial/síndrome do interósseo posterior), causando fraqueza extensora sem déficit sensitivo (por ser puramente motor).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "\"Paralisia do sábado à noite\" (saturday night palsy): compressão do nervo radial contra o úmero durante sono profundo (geralmente associado a álcool), causando mão caída transitória.",
      "O ramo profundo do radial é puramente motor — sua compressão pelo músculo supinador (síndrome do interósseo posterior) causa fraqueza extensora SEM déficit sensitivo, diferentemente da lesão do tronco principal do nervo radial.",
      "Fratura da diáfise umeral no terço médio/distal é a causa clássica de lesão do nervo radial, pelo seu contato direto com o osso no sulco radial.",
    ],
    fontes: [
      { tema: "Mão caída e paralisia do sábado à noite", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Síndrome do interósseo posterior", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nervus radialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-mediano",
    meshNames: [
      "Median_nerve_L",
      "Median_nerve_R",
      "Muscular_branches_of_median_nerve_L",
      "Muscular_branches_of_median_nerve_R",
      "Palmar_branch_of_median_nerve_L",
      "Palmar_branch_of_median_nerve_R",
      "Common_palmar_digital_branches_of_median_nerve_L",
      "Common_palmar_digital_branches_of_median_nerve_R",
      "Proper_palmar_digital_branches_of_median_nerve_L",
      "Proper_palmar_digital_branches_of_median_nerve_R",
      "Communicating_branch_of_median_nerve_with_ulnar_nerve_L",
      "Communicating_branch_of_median_nerve_with_ulnar_nerve_R",
    ],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus medianus",
    nomeComum: "Nervo mediano",
    raizes: "C5, C6, C7, C8, T1",
    resumo:
      "Formado pela união dos cordões lateral e medial, não emite ramos no braço, mas inerva a maior parte da musculatura flexora do antebraço e os músculos tenares — sua compressão no túnel do carpo é a neuropatia compressiva mais comum do corpo humano.",
    trajeto:
      "Formado pela raiz lateral (do cordão lateral, C5-C7) e raiz medial (do cordão medial, C8-T1) que se unem anteriormente à artéria axilar, desce no braço sem emitir ramos (acompanhando a artéria braquial, cruzando-a de lateral para medial no meio do braço), entra no antebraço entre as duas cabeças do músculo pronador redondo, desce profundamente ao flexor superficial dos dedos, emite o nervo interósseo anterior (para os flexores profundos do polegar/dedos radiais e o pronador quadrado) e alcança o punho, onde passa através do túnel do carpo (profundamente ao retináculo dos flexores) para inervar os músculos tenares e os dois primeiros lumbricais, além da sensibilidade palmar dos primeiros três dedos e meio.",
    ramosMusculares: [
      "Pronador redondo, flexor radial do carpo, palmar longo, flexor superficial dos dedos",
      "Via nervo interósseo anterior: flexor longo do polegar, porção radial do flexor profundo dos dedos, pronador quadrado",
      "Músculos tenares (abdutor curto, flexor curto e oponente do polegar) e os dois lumbricais laterais, via ramo motor tenar (recorrente)",
    ],
    ramosSensitivos: ["Face palmar do polegar, indicador, médio e metade radial do anular", "Face dorsal das falanges distais desses mesmos dedos"],
    correlacaoClinica:
      "A síndrome do túnel do carpo — compressão do nervo mediano no punho pelo retináculo dos flexores, associada a movimento repetitivo, gestação, hipotireoidismo e artrite reumatoide — é a neuropatia compressiva mais comum, causando dor/parestesia noturna nos três primeiros dedos e meio, sinais de Tinel e Phalen positivos, e, em fase avançada, atrofia tenar. A \"mão de bênção\" (hand of benediction, incapacidade de flexionar o indicador e o médio ao tentar fechar o punho) ocorre na lesão proximal do nervo mediano (ao nível do cotovelo/antebraço).",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Síndrome do túnel do carpo: neuropatia compressiva mais comum do corpo, sinais de Tinel e Phalen positivos, poupa a sensibilidade da eminência tenar (inervada pelo ramo palmar cutâneo, que passa superficialmente ao retináculo, não dentro do túnel).",
      "\"Mão de bênção\": lesão proximal do nervo mediano — ao tentar fechar o punho, o polegar, indicador e médio permanecem estendidos (não conseguem flexionar), enquanto o anular e mínimo flexionam normalmente (inervados pelo ulnar).",
      "O ramo motor tenar (recorrente) tem trajeto superficial logo distal ao retináculo dos flexores — vulnerável a lesão iatrogênica em incisões cirúrgicas mal posicionadas na liberação do túnel do carpo.",
    ],
    fontes: [
      { tema: "Síndrome do túnel do carpo", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Mão de bênção e nervo interósseo anterior", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus medianus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "nervo-ulnar",
    meshNames: [
      "Ulnar_nerve_L",
      "Ulnar_nerve_R",
      "Deep_branch_of_ulnar_nerve_L",
      "Deep_branch_of_ulnar_nerve_R",
      "Superficial_branch_of_ulnar_nerve_L",
      "Superficial_branch_of_ulnar_nerve_R",
      "Dorsal_branch_of_ulnar_nerve_L",
      "Dorsal_branch_of_ulnar_nerve_R",
      "Palmar_branch_of_ulnar_nerve_L",
      "Palmar_branch_of_ulnar_nerve_R",
      "Muscular_branches_of_ulnar_nerve_L",
      "Muscular_branches_of_ulnar_nerve_R",
      "Common_palmar_digital_branches_of_ulnar_nerve_L",
      "Common_palmar_digital_branches_of_ulnar_nerve_R",
      "Proper_palmar_digital_branches_of_ulnar_nerve_L",
      "Proper_palmar_digital_branches_of_ulnar_nerve_R",
      "Dorsal_digital_branches_of_ulnar_nerve_L",
      "Dorsal_digital_branches_of_ulnar_nerve_R",
    ],
    plexo: "Plexo braquial",
    nomeOficial: "Nervus ulnaris",
    nomeComum: "Nervo ulnar",
    raizes: "C8, T1",
    resumo:
      "Ramo terminal do cordão medial, sem ramos no braço, passa pelo túnel cubital posteriormente ao epicôndilo medial do úmero (o \"nervo da risada\") antes de inervar a maior parte da musculatura intrínseca da mão — sua lesão crônica produz a clássica mão em garra ulnar.",
    trajeto:
      "Continuação direta do cordão medial (C8-T1), desce no braço sem emitir ramos, perfura o septo intermuscular medial na metade do braço, passa posteriormente ao epicôndilo medial do úmero através do túnel cubital (superficial e vulnerável nesse ponto — \"osso da risada\"), entra no antebraço entre as duas cabeças do flexor ulnar do carpo, desce profundamente a esse músculo inervando-o (junto à metade ulnar do flexor profundo dos dedos), e alcança o punho onde passa pelo canal de Guyon (superficial ao retináculo dos flexores, ao lado do osso pisiforme) para se dividir em ramo superficial (sensitivo) e ramo profundo (motor, para quase toda a musculatura intrínseca da mão).",
    ramosMusculares: [
      "Flexor ulnar do carpo, metade ulnar do flexor profundo dos dedos (no antebraço)",
      "Músculos hipotenares (abdutor, flexor curto e oponente do dedo mínimo)",
      "Adutor do polegar e cabeça profunda do flexor curto do polegar",
      "Todos os interósseos palmares e dorsais, e os dois lumbricais mediais",
    ],
    ramosSensitivos: ["Face palmar e dorsal do 5º dedo e metade ulnar do 4º dedo", "Face dorsal e ulnar da mão"],
    correlacaoClinica:
      "É comprimido classicamente no túnel cubital (posterior ao epicôndilo medial, \"nervo da risada\" ao ser percutido) e no canal de Guyon (punho). Sua lesão crônica causa a mão em garra ulnar (claw hand) — hiperextensão das articulações metacarpofalângicas com flexão das interfalângicas do 4º e 5º dedos, por paralisia dos lumbricais mediais sem comprometer os flexores extrínsecos longos — paradoxalmente, quanto mais distal a lesão ulnar, mais evidente a garra (\"paradoxo ulnar\"), pois uma lesão proximal também paralisa parte do flexor profundo dos dedos, reduzindo a flexão das interfalângicas.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "\"Paradoxo ulnar\": a garra ulnar é MAIS evidente em lesões distais (punho) do que proximais (cotovelo), porque lesões proximais também paralisam o flexor profundo dos dedos, que é quem causa a flexão das interfalângicas na garra.",
      "Sinal de Froment: ao tentar segurar um papel entre o polegar e o indicador, o paciente flexiona a articulação interfalângica do polegar (compensação pelo flexor longo do polegar, mediano) por fraqueza do adutor do polegar (ulnar) — teste clássico de lesão ulnar.",
      "O túnel cubital (posterior ao epicôndilo medial) é o segundo local mais comum de neuropatia compressiva do membro superior, depois do túnel do carpo.",
    ],
    fontes: [
      { tema: "Mão em garra ulnar e paradoxo ulnar", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Sinal de Froment e síndrome do túnel cubital", fonte: "Harrison's Principles of Internal Medicine, 21ª ed." },
      { tema: "Nomenclatura oficial (Nervus ulnaris)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
