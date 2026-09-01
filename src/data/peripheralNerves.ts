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
];
