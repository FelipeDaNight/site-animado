# Repertório Certo

Ferramenta para estudantes que estão escrevendo uma redação (estilo ENEM): o aluno
digita o tema, e o sistema devolve repertório sociocultural — citações, dados, leis,
fatos históricos e obras — junto com uma explicação de como usar cada um naquele
tema específico.

## Como funciona

1. Existe um **banco curado** de repertório (`src/data/repertorio.ts`), com itens
   verificados manualmente (citações, leis, dados, fatos históricos e obras).
2. Quando o aluno busca um tema, a API (`src/app/api/repertorio/route.ts`) envia o
   tema e o banco inteiro para a Claude API, com instruções estritas:
   - só pode **selecionar** itens que já existem no banco (nunca inventar um novo);
   - só deve escolher itens **genuinamente pertinentes** ao tema exato digitado —
     preferindo devolver uma lista vazia a forçar uma relação fraca;
   - deve escrever, para cada item escolhido, uma explicação de uso **específica**
     para aquele tema (não uma descrição genérica do item).
3. Isso combina o melhor dos dois mundos: cobertura para qualquer tema digitado
   livremente, com segurança factual (a IA nunca "alucina" uma citação ou dado que
   não exista no banco).

> **Aviso:** o conteúdo do banco foi escrito com base em fatos, leis e obras
> amplamente documentados, mas vale sempre revisar datas, números e fontes antes de
> usar em uma prova real.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) para estilo
- [Claude API](https://docs.claude.com/) (`@anthropic-ai/sdk`) para selecionar e explicar o repertório

## Rodando localmente

```bash
npm install
cp .env.example .env.local
# edite .env.local e cole sua chave em ANTHROPIC_API_KEY
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Gere uma chave de API em [console.anthropic.com](https://console.anthropic.com/settings/keys).
O modelo padrão é o Haiku (rápido e barato); troque `ANTHROPIC_MODEL` no `.env.local`
se quiser usar um modelo mais robusto.

## Deploy (Vercel)

1. Importe este repositório em [vercel.com/new](https://vercel.com/new).
2. Em **Environment Variables**, adicione `ANTHROPIC_API_KEY` (e, opcionalmente,
   `ANTHROPIC_MODEL`) com o valor real da chave — nunca commite a chave no código.
3. Deploy. A cada push na branch principal, a Vercel atualiza o site automaticamente.

## Expandindo o banco de repertório

Para adicionar novos itens, edite `src/data/repertorio.ts` seguindo o mesmo formato
(`id`, `tipo`, `texto`, `fonte`, `categorias`, `contexto`). Não é preciso mexer no
código da API — qualquer item novo já fica disponível para a IA selecionar.
