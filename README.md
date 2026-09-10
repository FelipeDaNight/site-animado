# Repertório Certo

Ferramenta para estudantes que estão escrevendo uma redação (estilo ENEM): o aluno
digita o tema, e o sistema devolve repertório sociocultural — citações, dados, leis,
fatos históricos e obras — junto com uma explicação de como usar cada um naquele
tema específico.

**100% gratuito.** Não usa IA nem nenhuma API externa — a busca roda inteiramente
no código do site. Sem chave de API, sem conta em nenhum serviço, sem custo, sem
limite de uso.

## Como funciona

1. Existe um **banco curado** de repertório (`src/data/repertorio.ts`), com itens
   verificados manualmente (citações, leis, dados, fatos históricos e obras), cada
   um com uma lista de palavras-chave associadas.
2. Quando o aluno busca um tema, `src/lib/matching.ts` compara o texto digitado
   (ignorando acentos, maiúsculas e pontuação) com as palavras-chave, categorias e
   contexto de cada item, e pontua a relevância de cada um:
   - palavra-chave batendo no tema conta mais do que uma palavra solta do contexto;
   - só entram no resultado itens que passam de uma pontuação mínima — sem pontuação
     suficiente, a busca **devolve lista vazia** em vez de forçar uma relação fraca;
   - para cada item selecionado, gera uma explicação de uso com um modelo de texto
     específico por tipo (citação, dado, lei, fato histórico ou obra), indicando
     inclusive em qual parte da redação (introdução, desenvolvimento ou conclusão)
     ele costuma encaixar melhor.
3. Como não há geração de texto livre, não existe risco de "alucinar" uma citação,
   autor ou dado que não exista — tudo vem do banco curado.

**Tradeoff:** a busca entende palavras-chave, não o significado livre da frase. Um
tema com vocabulário muito diferente do que está cadastrado pode não encontrar nada
mesmo que exista um item pertinente — nesse caso, é só adicionar a palavra-chave que
faltou (veja "Expandindo o banco" abaixo).

> **Aviso:** o conteúdo do banco foi escrito com base em fatos, leis e obras
> amplamente documentados, mas vale sempre revisar datas, números e fontes antes de
> usar em uma prova real.

## Stack

- [Next.js](https://nextjs.org/) (App Router, exportado como site estático) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) para estilo
- Nenhuma dependência de backend, API paga ou banco de dados externo

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Não precisa configurar nada além disso.

## Deploy (grátis, em qualquer host estático)

O projeto é exportado como site 100% estático (`next.config.ts` usa `output: "export"`).
Isso significa que `npm run build` gera uma pasta `out/` com HTML/CSS/JS puro,
publicável de graça em qualquer um destes serviços — sem nenhuma variável de
ambiente ou configuração extra:

- **Vercel**: importe o repositório em [vercel.com/new](https://vercel.com/new) e faça o deploy.
- **Netlify**: importe o repositório, comando de build `npm run build`, diretório de publicação `out`.
- **GitHub Pages**: publique o conteúdo da pasta `out/` gerada pelo build.

## Expandindo o banco de repertório

Para adicionar novos itens ou melhorar a cobertura de um tema, edite
`src/data/repertorio.ts` seguindo o mesmo formato (`id`, `tipo`, `texto`, `fonte`,
`categorias`, `palavrasChave`, `contexto`). Quanto mais sinônimos e variações em
`palavrasChave`, melhor a busca reconhece temas escritos de formas diferentes. Não é
preciso mexer em `src/lib/matching.ts` — qualquer item novo já entra na busca.
