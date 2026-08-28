import type { NervoCraniano } from "./types";

// Modelo 3D: coleção "Nervous system & Sense organs" do atlas aberto
// Z-Anatomy (z-anatomy.com, CC BY-SA 4.0, sobre base BodyParts3D), exportada,
// simplificada (meshoptimizer) e comprimida (Draco) para uso na web.
export const NERVOUS_MODEL_URL = "/models/nervous.glb";

export const nervosCranianos: NervoCraniano[] = [
  {
    slug: "olfatorio",
    numero: 1,
    meshNames: ["Olfactory_nerve_I_L", "Olfactory_nerve_I_R"],
    nomeOficial: "Nervus olfactorius",
    nomeComum: "Nervo olfatório (I)",
    tipo: "Sensitivo (especial)",
    origemAparente: "Bulbo olfatório, na face inferior do lobo frontal",
    resumo:
      "Nervo sensitivo especial puro, formado por filetes que atravessam a lâmina crivosa do etmoide para levar informação olfatória da mucosa nasal ao bulbo olfatório.",
    trajeto:
      "Os neurônios receptores olfatórios estão na mucosa olfatória do teto da cavidade nasal. Seus axônios (os verdadeiros filetes do nervo olfatório, em número de 15 a 20 feixes por lado) atravessam os pequenos forames da lâmina crivosa do osso etmoide e fazem sinapse no bulbo olfatório, que se continua posteriormente como o trato olfatório até o córtex olfatório primário.",
    funcoes: ["Olfação (percepção de odores)"],
    testeClinico: [
      "Testar cada narina separadamente, com os olhos fechados e a outra narina ocluída, usando substâncias não irritantes e facilmente identificáveis (café, baunilha, cravo) — evitar substâncias irritantes como amônia, que estimulam o nervo trigêmeo e não testam o olfatório propriamente.",
    ],
    correlacaoClinica:
      "É o nervo craniano mais frequentemente lesado em traumatismo cranioencefálico, pela fragilidade dos filetes ao atravessarem a lâmina crivosa — um golpe occipital pode cisalhá-los mesmo sem fratura, causando anosmia permanente. Também é classicamente afetado precocemente na doença de Parkinson e na doença de Alzheimer, antecedendo em anos os sintomas motores/cognitivos, e um meningioma do sulco olfatório é uma causa clássica (embora rara) de anosmia unilateral progressiva.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É o nervo craniano mais suscetível a lesão em TCE, mesmo sem fratura de base de crânio, pelo cisalhamento dos filetes na lâmina crivosa — trauma occipital é uma causa clássica de anosmia pós-traumática.",
      "Anosmia é um achado pré-motor precoce e bem descrito na doença de Parkinson, útil como pista diagnóstica antes do quadro motor clássico se estabelecer.",
    ],
    fontes: [
      { tema: "Anatomia do nervo olfatório e correlação com TCE", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus olfactorius)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "optico",
    numero: 2,
    meshNames: ["Optic_nerve_II_L", "Optic_nerve_II_R", "Optic_chiasm_L", "Optic_chiasm_R", "Optic_tract_L", "Optic_tract_R"],
    nomeOficial: "Nervus opticus",
    nomeComum: "Nervo óptico (II)",
    tipo: "Sensitivo (especial)",
    origemAparente: "Disco óptico, na retina posterior",
    resumo:
      "Via sensitiva especial da visão. Tecnicamente um trato do sistema nervoso central (envolto por meninges, não por bainha de Schwann), não um nervo periférico verdadeiro.",
    trajeto:
      "Os axônios das células ganglionares da retina convergem no disco óptico, formam o nervo óptico, atravessam o forame óptico e se encontram no quiasma óptico, onde as fibras nasais de cada retina cruzam para o lado oposto. Continuam como os tratos ópticos até o corpo geniculado lateral do tálamo, e daí (via radiação óptica) ao córtex visual primário occipital.",
    funcoes: ["Visão (acuidade visual e campo visual)"],
    testeClinico: [
      "Acuidade visual (tabela de Snellen), campo visual por confrontação, exame de fundo de olho (disco óptico) e reflexo fotomotor (via aferente).",
    ],
    correlacaoClinica:
      "O padrão de perda de campo visual localiza a lesão ao longo da via: lesão do nervo óptico causa cegueira monocular; lesão no quiasma (classicamente por adenoma hipofisário comprimindo as fibras nasais cruzadas) causa hemianopsia bitemporal; lesão do trato óptico ou posterior causa hemianopsia homônima contralateral. A neurite óptica (frequentemente associada a esclerose múltipla) causa perda visual monocular subaguda dolorosa à movimentação ocular, com papila normal ou edemaciada.",
    doencasRelacionadas: [{ slug: "neurite-optica", nome: "Neurite óptica" }],
    pontosDeProva: [
      "Lesão no quiasma óptico (ex.: adenoma hipofisário) classicamente causa hemianopsia bitemporal, por comprometer as fibras nasais cruzadas de ambas as retinas.",
      "O nervo óptico é embriologicamente uma extensão do sistema nervoso central (diencéfalo), não um nervo periférico — por isso é envolto por bainha de mielina central (oligodendrócitos) e meninges, não por células de Schwann.",
    ],
    fontes: [
      { tema: "Via óptica e padrões de perda de campo visual", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus opticus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "oculomotor",
    numero: 3,
    meshNames: ["Oculomotor_nerve_III_L", "Oculomotor_nerve_III_R", "Midbrain_L", "Midbrain_R"],
    nomeOficial: "Nervus oculomotorius",
    nomeComum: "Nervo oculomotor (III)",
    tipo: "Misto (motor e parassimpático)",
    origemAparente: "Fossa interpeduncular, na face anterior do mesencéfalo",
    resumo:
      "Nervo motor somático para quatro dos seis músculos extrínsecos do olho e o levantador da pálpebra superior, além de fibras parassimpáticas para o esfíncter da pupila e músculo ciliar.",
    trajeto:
      "Emerge da face anterior do mesencéfalo (fossa interpeduncular), passa entre as artérias cerebral posterior e cerebelar superior — um ponto de compressão importante — segue na parede lateral do seio cavernoso e entra na órbita pela fissura orbital superior, onde se divide em ramo superior (reto superior e levantador da pálpebra) e ramo inferior (reto medial, reto inferior, oblíquo inferior, e fibras parassimpáticas ao gânglio ciliar).",
    funcoes: [
      "Movimento ocular: reto superior, reto medial, reto inferior e oblíquo inferior",
      "Elevação da pálpebra superior (músculo levantador da pálpebra)",
      "Constrição pupilar e acomodação do cristalino (via parassimpática, gânglio ciliar)",
    ],
    testeClinico: [
      "Testar os movimentos oculares extrínsecos (exceto abdução e depressão em adução), avaliar ptose palpebral e o reflexo fotomotor direto e consensual.",
    ],
    correlacaoClinica:
      "Paralisia completa do III nervo causa a tríade clássica: ptose palpebral completa, olho desviado 'para baixo e para fora' (ação sem oposição do reto lateral e oblíquo superior) e midríase fixa (perda da via parassimpática). Um aspecto crucial: as fibras parassimpáticas correm na periferia do nervo, mais vulneráveis à compressão externa (ex.: aneurisma de comunicante posterior, herniação uncal) — por isso paralisia do III COM midríase sugere causa compressiva, enquanto paralisia SEM midríase (poupando a pupila) sugere causa isquêmica (ex.: diabetes), que afeta preferencialmente as fibras centrais do nervo.",
    doencasRelacionadas: [{ slug: "estrabismo-paralitico", nome: "Estrabismo paralítico" }],
    pontosDeProva: [
      "Paralisia do III nervo COM midríase (pupila poupada não é a expressão certa — aqui a pupila está afetada) sugere causa compressiva (ex.: aneurisma de comunicante posterior) — fibras parassimpáticas periféricas são as primeiras comprimidas.",
      "Paralisia do III nervo SEM midríase, com pupila poupada, sugere causa isquêmica microvascular (ex.: diabetes) — o fluxo sanguíneo dos vasa nervorum preserva as fibras periféricas parassimpáticas enquanto lesa o núcleo central do nervo.",
    ],
    fontes: [
      { tema: "Anatomia do III nervo e diferenciação midríase compressiva vs. isquêmica", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus oculomotorius)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "troclear",
    numero: 4,
    meshNames: ["Trochlear_nerve_IV_L", "Trochlear_nerve_IV_R", "Midbrain_L", "Midbrain_R"],
    nomeOficial: "Nervus trochlearis",
    nomeComum: "Nervo troclear (IV)",
    tipo: "Motor (somático)",
    origemAparente: "Face posterior do mesencéfalo, logo abaixo dos colículos inferiores",
    resumo:
      "O menor nervo craniano e o único a emergir da face posterior (dorsal) do tronco encefálico, inervando um único músculo: o oblíquo superior.",
    trajeto:
      "Único nervo craniano com origem dorsal, emerge logo abaixo dos colículos inferiores, contorna o mesencéfalo lateralmente, segue na parede do seio cavernoso e entra na órbita pela fissura orbital superior para inervar o músculo oblíquo superior.",
    funcoes: ["Movimento ocular: músculo oblíquo superior (intorção, depressão e abdução do olho, mais evidente em adução)"],
    testeClinico: [
      "Pedir ao paciente que olhe para baixo e para dentro (nariz); fraqueza do oblíquo superior causa diplopia vertical que piora ao olhar para baixo — por isso pacientes frequentemente inclinam a cabeça para o lado oposto para compensar.",
    ],
    correlacaoClinica:
      "Por seu longo trajeto intracraniano e seu ponto de emergência dorsal, exposto, o IV nervo é particularmente vulnerável a traumatismo cranioencefálico mesmo leve, sendo uma causa relativamente comum de diplopia vertical isolada pós-traumática. A inclinação compensatória da cabeça para o lado contrário à lesão é um sinal clínico característico.",
    doencasRelacionadas: [{ slug: "estrabismo-paralitico", nome: "Estrabismo paralítico" }],
    pontosDeProva: [
      "É o único nervo craniano que emerge da face dorsal (posterior) do tronco encefálico, e o de menor calibre entre os doze pares.",
      "Paralisia do IV nervo causa diplopia vertical que piora ao olhar para baixo (ex.: descer escadas, ler), com inclinação compensatória da cabeça para o lado são.",
    ],
    fontes: [
      { tema: "Anatomia e origem dorsal do nervo troclear", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus trochlearis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "trigemeo",
    numero: 5,
    meshNames: ["Trigeminal_nerve_V_L", "Trigeminal_nerve_V_R", "Pons_L", "Pons_R"],
    nomeOficial: "Nervus trigeminus",
    nomeComum: "Nervo trigêmeo (V)",
    tipo: "Misto (motor e sensitivo)",
    origemAparente: "Face lateral da ponte, na sua porção média",
    resumo:
      "O maior nervo craniano, principal responsável pela sensibilidade da face e pela motricidade dos músculos da mastigação, dividido em três ramos: oftálmico, maxilar e mandibular.",
    trajeto:
      "Emerge da ponte com uma grande raiz sensitiva e uma raiz motora menor, que se dirigem ao gânglio trigeminal (de Gasser), de onde partem os três ramos: oftálmico (V1, puramente sensitivo, via fissura orbital superior), maxilar (V2, puramente sensitivo, via forame redondo) e mandibular (V3, misto — único ramo com fibras motoras, via forame oval).",
    funcoes: [
      "Sensibilidade tátil, térmica e dolorosa da face, córnea, cavidade oral e dois terços anteriores da língua",
      "Motricidade dos músculos da mastigação (masseter, temporal, pterigóideos) — via V3",
      "Aferência do reflexo corneopalpebral (parte aferente)",
    ],
    testeClinico: [
      "Testar sensibilidade facial nos três territórios (V1, V2, V3) com toque leve e temperatura; testar força de mordida (masseter/temporal); testar reflexo corneopalpebral tocando a córnea com um chumaço de algodão (resposta motora é pelo VII nervo).",
    ],
    correlacaoClinica:
      "A neuralgia do trigêmeo causa dor facial paroxística, intensa, em choque elétrico, tipicamente unilateral e desencadeada por estímulos triviais (mastigar, falar, tocar a face) — mais frequentemente por compressão vascular da raiz do nervo próximo ao tronco encefálico. O reflexo corneopalpebral testa a integridade tanto do V (aferente) quanto do VII nervo (eferente, fechamento palpebral); sua ausência com sensibilidade corneana preservada aponta para lesão do VII, não do V.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "É o único nervo craniano com um ramo motor associado a fibras sensitivas na mesma divisão — apenas o ramo mandibular (V3) carrega fibras motoras, para os músculos da mastigação.",
      "No reflexo corneopalpebral, o V nervo é a via aferente (sensibilidade da córnea) e o VII nervo é a via eferente (fechamento das pálpebras, orbicular do olho) — uma lesão isolada do V abole o reflexo bilateralmente ao estimular o lado afetado.",
    ],
    fontes: [
      { tema: "Divisões do nervo trigêmeo e neuralgia do trigêmeo", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus trigeminus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "abducente",
    numero: 6,
    meshNames: ["Abducens_nerve_VI_L", "Abducens_nerve_VI_R", "Pons_L", "Pons_R"],
    nomeOficial: "Nervus abducens",
    nomeComum: "Nervo abducente (VI)",
    tipo: "Motor (somático)",
    origemAparente: "Sulco bulbopontino, na junção entre a ponte e o bulbo",
    resumo:
      "Nervo motor puro para um único músculo, o reto lateral, responsável pela abdução do olho. Tem o trajeto intracraniano mais longo entre os nervos cranianos, o que o torna especialmente vulnerável.",
    trajeto:
      "Emerge no sulco bulbopontino, percorre um longo trajeto ascendente ao longo do clivo antes de fazer um ângulo agudo sobre o ápice do osso petroso (no canal de Dorello), atravessa o seio cavernoso e entra na órbita pela fissura orbital superior para inervar o músculo reto lateral.",
    funcoes: ["Movimento ocular: músculo reto lateral (abdução do olho)"],
    testeClinico: [
      "Pedir ao paciente que olhe lateralmente (em direção à têmpora); incapacidade de abduzir totalmente o olho, com diplopia horizontal que piora ao olhar para o lado afetado, indica paralisia do VI nervo.",
    ],
    correlacaoClinica:
      "Por seu longo trajeto intracraniano contra o clivo, é o nervo craniano mais suscetível a lesão por aumento da pressão intracraniana (compressão contra o osso, um 'sinal de falsa localização neurológica', já que a lesão nem sempre reflete o local da patologia primária), sendo causa comum de diplopia horizontal em quadros de hipertensão intracraniana de qualquer origem.",
    doencasRelacionadas: [{ slug: "estrabismo-paralitico", nome: "Estrabismo paralítico" }],
    pontosDeProva: [
      "É o nervo craniano com o trajeto intracraniano mais longo, e por isso o mais vulnerável a compressão em quadros de hipertensão intracraniana — classicamente citado como 'sinal de falsa localização'.",
      "Paralisia isolada do VI nervo causa diplopia horizontal que piora ao olhar para o lado da lesão, sem ptose ou alteração pupilar (diferente do III nervo).",
    ],
    fontes: [
      { tema: "Trajeto do nervo abducente e hipertensão intracraniana", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus abducens)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "facial",
    numero: 7,
    meshNames: ["Facial_nerve_VII_L", "Facial_nerve_VII_R", "Pons_L", "Pons_R"],
    nomeOficial: "Nervus facialis",
    nomeComum: "Nervo facial (VII)",
    tipo: "Misto (motor, sensitivo e parassimpático)",
    origemAparente: "Sulco bulbopontino, lateralmente ao nervo abducente",
    resumo:
      "Nervo motor dos músculos da expressão facial, com componentes sensitivos (paladar dos dois terços anteriores da língua) e parassimpáticos (glândulas lacrimal, submandibular e sublingual).",
    trajeto:
      "Emerge no sulco bulbopontino, entra no meato acústico interno junto ao VIII nervo, percorre o canal facial no osso temporal (fazendo o joelho do facial, onde se forma o gânglio geniculado), emite ramos intratemporais (nervo petroso maior, nervo estapédio, corda do tímpano) e emerge no forame estilomastóideo, atravessando a glândula parótida (sem inervá-la) e se ramificando em cinco ramos terminais para a musculatura facial.",
    funcoes: [
      "Motricidade dos músculos da expressão facial (incluindo orbicular do olho e da boca)",
      "Paladar dos dois terços anteriores da língua (via corda do tímpano)",
      "Secreção das glândulas lacrimal, submandibular e sublingual (via parassimpática)",
      "Inervação do músculo estapédio (amortece vibrações sonoras excessivas)",
    ],
    testeClinico: [
      "Pedir ao paciente que enrugue a testa, feche os olhos com força, sorria mostrando os dentes e infle as bochechas; testar o paladar nos dois terços anteriores da língua se indicado.",
    ],
    correlacaoClinica:
      "A distinção entre paralisia facial periférica e central é um clássico da neurologia: lesão periférica (ex.: paralisia de Bell) afeta TODA a hemiface (incapacidade de enrugar a testa e fechar o olho), pois o núcleo do facial recebe inervação cortical bilateral apenas para a porção superior da face; lesão central (ex.: AVC) poupa a testa, já que essa porção do núcleo ainda recebe input do hemisfério são. A paralisia de Bell é a causa mais comum de paralisia facial periférica aguda, geralmente idiopática (possivelmente relacionada à reativação do herpes-vírus simples).",
    doencasRelacionadas: [{ slug: "paralisia-de-bell", nome: "Paralisia de Bell (paralisia facial periférica idiopática)" }],
    pontosDeProva: [
      "Paralisia facial periférica afeta toda a hemiface (incluindo a testa); paralisia facial central poupa a testa — por causa da inervação cortical bilateral da porção superior do núcleo do facial.",
      "A paralisia de Bell é a causa mais comum de paralisia facial periférica aguda isolada, tipicamente idiopática e de instalação súbita.",
    ],
    fontes: [
      { tema: "Distinção entre paralisia facial central e periférica", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus facialis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "vestibulococlear",
    numero: 8,
    meshNames: ["Vestibulocochlear_nerve_VIII_L", "Vestibulocochlear_nerve_VIII_R", "Pons_L", "Pons_R"],
    nomeOficial: "Nervus vestibulocochlearis",
    nomeComum: "Nervo vestibulococlear (VIII)",
    tipo: "Sensitivo (especial)",
    origemAparente: "Sulco bulbopontino, lateralmente ao nervo facial",
    resumo:
      "Nervo sensitivo especial da audição (ramo coclear) e do equilíbrio (ramo vestibular), formado pela junção de dois nervos distintos no meato acústico interno.",
    trajeto:
      "O ramo coclear parte do órgão espiral (de Corti) na cóclea; o ramo vestibular parte dos receptores dos canais semicirculares, utrículo e sáculo. Ambos se unem no meato acústico interno, formando o nervo vestibulococlear, que entra no tronco encefálico no sulco bulbopontino, próximo ao nervo facial.",
    funcoes: ["Audição (ramo coclear)", "Equilíbrio e percepção de movimento/posição da cabeça (ramo vestibular)"],
    testeClinico: [
      "Teste de Weber e Rinne (diapasão) para distinguir hipoacusia condutiva de neurossensorial; avaliação do equilíbrio, nistagmo e manobra de Dix-Hallpike quando há queixa vestibular.",
    ],
    correlacaoClinica:
      "O schwannoma vestibular (também chamado, de forma imprecisa, de 'neuroma do acústico') é um tumor benigno classicamente originado das células de Schwann do ramo vestibular no meato acústico interno, causando perda auditiva neurossensorial unilateral progressiva, zumbido e desequilíbrio — e pode comprimir secundariamente o nervo facial adjacente. A localização da lesão auditiva também se distingue pelo padrão: hipoacusia condutiva sugere problema no ouvido externo/médio; hipoacusia neurossensorial sugere lesão coclear ou do próprio VIII nervo.",
    doencasRelacionadas: [{ slug: "transtornos-funcao-vestibular", nome: "Transtornos da função vestibular" }],
    pontosDeProva: [
      "O schwannoma vestibular origina-se classicamente das células de Schwann do ramo vestibular do VIII nervo no meato acústico interno, não do ramo coclear, apesar do nome popular incorreto 'neuroma do acústico'.",
      "No teste de Weber, lateralização do som para o ouvido AFETADO sugere perda condutiva; lateralização para o ouvido SÃO sugere perda neurossensorial no lado afetado.",
    ],
    fontes: [
      { tema: "Anatomia do VIII nervo e schwannoma vestibular", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus vestibulocochlearis)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "glossofaringeo",
    numero: 9,
    meshNames: ["Glossopharyngeal_nerve_IX_L", "Glossopharyngeal_nerve_IX_R", "Medulla_oblongata_L", "Medulla_oblongata_R"],
    nomeOficial: "Nervus glossopharyngeus",
    nomeComum: "Nervo glossofaríngeo (IX)",
    tipo: "Misto (motor, sensitivo e parassimpático)",
    origemAparente: "Sulco lateral posterior do bulbo (sulco retro-olivar)",
    resumo:
      "Nervo misto com papel sensitivo predominante: sensibilidade geral e paladar do terço posterior da língua, sensibilidade da orofaringe, e aferência dos barorreceptores e quimiorreceptores do seio e corpo carotídeos.",
    trajeto:
      "Emerge do sulco retro-olivar do bulbo junto aos nervos vago e acessório, deixa o crânio pelo forame jugular, desce entre as artérias carótida interna e veia jugular interna, e se distribui à mucosa da faringe, tonsilas, terço posterior da língua e ao seio/corpo carotídeos, além de fibras motoras para o músculo estilofaríngeo e parassimpáticas para a glândula parótida.",
    funcoes: [
      "Sensibilidade geral e paladar do terço posterior da língua",
      "Sensibilidade da faringe, tonsilas e ouvido médio",
      "Aferência dos barorreceptores (seio carotídeo) e quimiorreceptores (corpo carotídeo)",
      "Motricidade do músculo estilofaríngeo",
      "Secreção da glândula parótida (via parassimpática, gânglio ótico)",
      "Parte aferente do reflexo do vômito (gag reflex)",
    ],
    testeClinico: [
      "Testar o reflexo do vômito tocando a parede posterior da orofaringe (parte aferente é o IX, eferente é o X); observar elevação simétrica do palato ao dizer 'ah'.",
    ],
    correlacaoClinica:
      "A neuralgia glossofaríngea, muito mais rara que a trigeminal, causa dor paroxística em choque na base da língua, tonsila, faringe ou ouvido, desencadeada por deglutição, fala ou tosse. Como o IX e o X nervo emergem juntos e frequentemente são lesados em conjunto (ex.: síndrome do forame jugular), a avaliação do reflexo do vômito e da elevação do palato costuma testar os dois nervos simultaneamente na prática clínica.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O IX nervo carrega a aferência dos barorreceptores do seio carotídeo e dos quimiorreceptores do corpo carotídeo — relevante na fisiologia do reflexo barorreceptor e da resposta à hipóxia.",
      "IX e X nervos emergem juntos do sulco retro-olivar e saem juntos pelo forame jugular, sendo frequentemente acometidos em conjunto por lesões nessa região (ex.: síndrome do forame jugular).",
    ],
    fontes: [
      { tema: "Anatomia e funções do nervo glossofaríngeo", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus glossopharyngeus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "vago",
    numero: 10,
    meshNames: ["Vagus_nerve_X_L", "Vagus_nerve_X_R", "Medulla_oblongata_L", "Medulla_oblongata_R"],
    nomeOficial: "Nervus vagus",
    nomeComum: "Nervo vago (X)",
    tipo: "Misto (motor, sensitivo e parassimpático)",
    origemAparente: "Sulco lateral posterior do bulbo (sulco retro-olivar), abaixo do IX nervo",
    resumo:
      "O nervo craniano de distribuição mais extensa, fornecendo a maior parte da inervação parassimpática para os órgãos torácicos e abdominais até a flexura esplênica do colo, além de motricidade da faringe, laringe e sensibilidade visceral.",
    trajeto:
      "Emerge do sulco retro-olivar, sai pelo forame jugular junto ao IX e XI nervos, desce no pescoço dentro da bainha carotídea (entre artéria carótida e veia jugular interna), emite os nervos laríngeos recorrentes (o esquerdo contorna o arco da aorta, o direito contorna a artéria subclávia direita) e continua ao tórax e abdome formando os troncos vagais anterior e posterior no esôfago.",
    funcoes: [
      "Parassimpático para coração, pulmões, esôfago, estômago, intestino delgado e grosso até a flexura esplênica",
      "Motricidade da maioria dos músculos da faringe e da laringe (via nervos laríngeos)",
      "Sensibilidade visceral geral de tórax e abdome",
      "Paladar e sensibilidade da epiglote e laringe",
    ],
    testeClinico: [
      "Observar elevação simétrica do palato mole e da úvula (desvio da úvula para o lado são indica lesão do vago contralateral), avaliar qualidade e simetria da voz (rouquidão sugere lesão do nervo laríngeo recorrente) e o reflexo do vômito (via eferente).",
    ],
    correlacaoClinica:
      "O trajeto assimétrico dos nervos laríngeos recorrentes — o esquerdo, mais longo, contorna o arco da aorta e é mais vulnerável a compressão por massas mediastinais (ex.: neoplasia pulmonar, aneurisma de aorta) ou lesão cirúrgica em tireoidectomias — explica por que rouquidão de início insidioso deve sempre levantar suspeita de patologia torácica ou cervical. Lesão bilateral dos nervos laríngeos recorrentes pode causar obstrução de via aérea por paralisia das cordas vocais em posição paramediana.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo laríngeo recorrente esquerdo tem trajeto mais longo, contornando o arco da aorta, sendo mais vulnerável a compressão por massas mediastinais ou aneurisma aórtico do que o direito, que contorna a artéria subclávia direita.",
      "Lesão unilateral do vago causa desvio da úvula para o lado SÃO (contralateral à lesão), pela ação sem oposição da musculatura do palato do lado normal.",
    ],
    fontes: [
      { tema: "Trajeto do nervo laríngeo recorrente e correlações clínicas", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus vagus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "acessorio",
    numero: 11,
    meshNames: ["Accessory_nerve_XI_L", "Accessory_nerve_XI_R", "Medulla_oblongata_L", "Medulla_oblongata_R"],
    nomeOficial: "Nervus accessorius",
    nomeComum: "Nervo acessório (XI)",
    tipo: "Motor (somático)",
    origemAparente: "Raízes espinais de C1-C5/C6, que ascendem através do forame magno",
    resumo:
      "Nervo motor puro, atipicamente formado quase inteiramente por raízes espinais cervicais (não por uma raiz craniana verdadeira), inervando os músculos esternocleidomastóideo e trapézio.",
    trajeto:
      "Formado por raízes que emergem da medula espinal cervical alta (C1-C5/C6), ascende através do forame magno para dentro do crânio, junta-se brevemente à raiz craniana (que na classificação moderna é considerada parte do vago) e sai novamente do crânio pelo forame jugular junto aos nervos IX e X, distribuindo-se ao esternocleidomastóideo e ao trapézio.",
    funcoes: [
      "Motricidade do músculo esternocleidomastóideo (rotação e flexão lateral da cabeça)",
      "Motricidade do músculo trapézio (elevação do ombro e rotação da escápula)",
    ],
    testeClinico: [
      "Pedir ao paciente que rotacione a cabeça contra resistência (testa o esternocleidomastóideo contralateral) e que eleve os ombros contra resistência (testa o trapézio ipsilateral).",
    ],
    correlacaoClinica:
      "Por seu trajeto superficial no triângulo posterior do pescoço, o ramo espinal do XI nervo é particularmente vulnerável a lesão iatrogênica durante biópsias de linfonodo cervical ou dissecções cervicais, causando fraqueza do trapézio com queda do ombro e escápula alada.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "O nervo acessório é, na prática, um nervo motor formado majoritariamente por raízes espinais cervicais (C1-C5/6) que ascendem pelo forame magno — não uma raiz craniana verdadeira no sentido clássico.",
      "É particularmente vulnerável a lesão iatrogênica no triângulo posterior do pescoço (ex.: biópsia de linfonodo), causando fraqueza do trapézio e queda do ombro.",
    ],
    fontes: [
      { tema: "Origem espinal do nervo acessório e vulnerabilidade cirúrgica", fonte: "Moore's Clinically Oriented Anatomy, 8ª ed." },
      { tema: "Nomenclatura oficial (Nervus accessorius)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
  {
    slug: "hipoglosso",
    numero: 12,
    meshNames: ["Hypoglossal_nerve_XII_L", "Hypoglossal_nerve_XII_R", "Medulla_oblongata_L", "Medulla_oblongata_R"],
    nomeOficial: "Nervus hypoglossus",
    nomeComum: "Nervo hipoglosso (XII)",
    tipo: "Motor (somático)",
    origemAparente: "Sulco anterolateral do bulbo, entre a pirâmide e a oliva",
    resumo:
      "Nervo motor puro para quase toda a musculatura intrínseca e extrínseca da língua (exceto o palatoglosso), essencial para os movimentos finos da fala e da deglutição.",
    trajeto:
      "Emerge do sulco entre a pirâmide e a oliva bulbares, sai do crânio pelo canal do hipoglosso (distinto do forame jugular), desce no pescoço cruzando lateralmente as artérias carótidas, e entra na língua para inervar toda a musculatura intrínseca e os músculos extrínsecos genioglosso, hioglosso e estiloglosso.",
    funcoes: ["Motricidade de quase toda a musculatura da língua (movimentos de protrusão, retração e modelagem)"],
    testeClinico: [
      "Pedir ao paciente que protruda a língua e observar desvios; em lesão do neurônio motor inferior, a língua desvia para o lado LESADO (ação sem oposição do genioglosso são, que empurra a língua para o lado contrário ao seu lado de origem).",
    ],
    correlacaoClinica:
      "Lesão unilateral do XII nervo causa desvio da língua protrusa para o lado da lesão, com atrofia e fasciculações visíveis se a lesão for do neurônio motor inferior (núcleo ou nervo periférico) — um achado clássico em esclerose lateral amiotrófica quando há acometimento bulbar. Lesão bilateral compromete gravemente a fala (disartria) e a deglutição.",
    doencasRelacionadas: [],
    pontosDeProva: [
      "Na lesão do neurônio motor inferior do XII nervo, a língua protrusa desvia para o lado LESADO, pela ação sem oposição do genioglosso contralateral (são).",
      "Atrofia e fasciculações da língua, junto a outros sinais bulbares, são um achado característico de acometimento do neurônio motor inferior na esclerose lateral amiotrófica.",
    ],
    fontes: [
      { tema: "Anatomia do nervo hipoglosso e desvio lingual na lesão do NMI", fonte: "Gray's Anatomy for Students, 4ª ed." },
      { tema: "Nomenclatura oficial (Nervus hypoglossus)", fonte: "Terminologia Anatomica (FIPAT)" },
    ],
  },
];
