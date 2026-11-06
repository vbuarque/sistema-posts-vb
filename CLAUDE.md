# CLAUDE.md: sistema-posts-vb

Contexto do projeto para o Claude Code. Leia antes de qualquer tarefa.

## O que é

Sistema próprio do Vinicius Buarque para automatizar as postagens de
**carrossel e story** nos dois Instagrams dele:

- **@vbmanutencoes.pc**: VB Manutenções, assistência de PC e notebook em São José dos Campos (SJC) e região. O cliente leva o equipamento até ele.
- **@vbpagestudio**: VB Page Studio, criação de landing pages para negócios locais de SJC.

Fluxo desejado (inspirado num vídeo de referência de "fábrica de conteúdo" com agentes):
**pauta → roteiro/texto dos slides → arte (template) → fila de aprovação → agendamento → publicação automática.**
O Vinicius só aprova ou pede revisão. Os **Reels continuam manuais**, mas o sistema
terá um **Estúdio de Vídeo** que gera roteiro, prompt do vídeo e prompt de narração do ElevenLabs.

## Como trabalhar comigo (Vinicius)

- Responda **sempre em português**, tom informal e amigável (humor leve ok).
- Estou aprendendo: **explique o conceito antes do código** e depois o que cada parte faz.
- Mudanças **incrementais**. Não destrua código que funciona sem explicar o impacto antes.
- Arquitetura organizada: **componentes pequenos e reutilizáveis**.
- Num erro, **explique a causa antes** de mandar comandos. Com mais de uma hipótese, diga como diferenciá-las por teste. Nada de chute.
- **Não invente conteúdo de arquivos que você não abriu.** Abra e leia.
- Você pode e deve rodar `npm`, `typecheck`, testes e `npm run dev` sozinho, e corrigir os erros que aparecerem.
- **Commits:** um commit atômico por etapa fechada, em Conventional Commits em português (`feat:`, `fix:`, `chore:`...), com corpo listando as mudanças. Faça o commit e o push você mesmo quando a etapa estiver testada e me passe um resumo curto do que mudou.
- **Pare e pergunte antes de:**
  - publicar qualquer coisa de verdade no Instagram;
  - apagar dados ou arquivos que não foram criados nesta tarefa;
  - mexer no histórico do Git (`reset --hard`, `push --force`, `rebase` de commits já enviados);
  - rodar `npm audit fix --force`;
  - qualquer ação que gere custo ou que não dê para desfazer.

## Stack e estrutura

Monorepo com **npm workspaces**. Node 20+ (o PC dele é Windows).

```
apps/
  server/   Node + TypeScript + Fastify 5 + Drizzle ORM + SQLite (@libsql/client) + zod 4 — porta 3333
  web/      React 19 + Vite 8 + Tailwind v4 (@tailwindcss/vite) — porta 5173 (proxy /api → 3333)
packages/
  brands/   @vb/brands: perfis de conteúdo + tokens de design de cada marca (usado pelos dois apps)
```

### Comandos (na raiz)

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe servidor (`tsx watch`) + painel (Vite) juntos |
| `npm run typecheck` | `tsc` em todos os workspaces. Rode antes de todo commit |
| `npm run build` | Build do painel |
| `npm run db:generate` | Gera migration após mudar `apps/server/src/db/schema.ts` |
| `npm run db:migrate` | Aplica migrations (o servidor também aplica sozinho ao subir) |

- `.env` fica em `apps/server/.env` (modelo em `.env.example`). **Nunca commitar `.env`** nem chaves.
- Banco local: `apps/server/data/dev.db` (ignorado no Git).
- Migrations versionadas em `apps/server/drizzle/`: nunca edite uma migration já commitada; gere uma nova.

### Avisos conhecidos (não são bugs)

- `npm audit` mostra 4 vulnerabilidades moderadas: é **uma só** (esbuild 0.18 via `drizzle-kit → @esbuild-kit/*`, GHSA-67mh-4wv8-2f99). Ela afeta só o modo `esbuild --serve`, que não usamos, e é dependência de desenvolvimento. **Não rodar `npm audit fix --force`**: ele rebaixa o drizzle-kit para 0.18 e quebra as migrations.
- O npm do PC bloqueia os `postinstall` do esbuild (allowScripts). Foi testado: funciona sem eles, não precisa aprovar.
- Ao subir o `npm run dev`, algumas linhas de `ECONNREFUSED` no início são normais (o Vite sobe antes do servidor).

## Decisões de arquitetura já tomadas

1. **Hospedagem:** nuvem sempre ligada (Parte 9), porque o agendador precisa estar no ar na hora de cada post.
2. **Artes:** **templates em código** (React/HTML → PNG/JPEG com Playwright). A IA só preenche os textos. Texto nunca é escrito por IA de imagem (por causa de acento e consistência).
3. **IA de texto:** **Claude API** (Anthropic), chave em `ANTHROPIC_API_KEY`.
4. **Um pacote por marca:** as duas marcas têm design systems com estruturas **diferentes**. Cada marca lê o **próprio** `tokens.json` e terá os **próprios** templates. Não existe "template genérico que troca a cor". O `BrandPreview` em `packages/brands/src/index.ts` é só o denominador comum para o painel.
5. **Nada de dado inventado:** cada informação de marca usa `Campo<T>` com `status`: `definido | a-confirmar | sugestao | nao-definido`. **A IA só pode usar o que está `definido`**. O que estiver `a-confirmar` ou `nao-definido` não aparece nos posts. Cada perfil tem `pendencias` dizendo o que o sistema faz até a decisão.
6. **Ofertas com validade:** `validaAte` em `Oferta`. Depois da data, a IA para de citar.
7. **Status do post** (tabela `posts`): `pauta → rascunho → aguardando_aprovacao → aprovado → agendado → publicado | erro`.

## Roadmap

- [x] **Parte 1:** perfis de marca (`packages/brands`)
- [x] **Parte 2:** base do projeto (monorepo, servidor, banco, painel)
- [ ] **Parte 3:** gerador de conteúdo (Claude API): pauta → texto de cada slide → legenda + hashtags, respeitando o perfil e as regras da marca. Definir aqui o formato JSON de `posts.conteudo` por template.
- [ ] **Parte 4:** templates visuais por marca → JPEG (carrossel 1080×1350, story 1080×1920), fiéis aos tokens
- [ ] **Parte 5:** fila de aprovação (Aprovar / Revisar com comentário → IA refaz)
- [ ] **Parte 6:** conexão com o Instagram (app Meta, tokens, 1º post de teste manual)
- [ ] **Parte 7:** agendador + publicação automática + histórico e alerta de erro + renovação do token
- [ ] **Parte 8:** Estúdio de Vídeo (roteiro, prompt do vídeo, prompt ElevenLabs)
- [ ] **Parte 9:** painel visual "Fábrica" (linha de produção) + deploy na nuvem

## Instagram: fatos da API (Meta, conferidos em 05/11/2026)

- Usar a **Instagram API com login do Instagram** (`graph.instagram.com`): não precisa de página do Facebook. As duas contas já são **profissionais**.
- Permissões: `instagram_business_basic`, `instagram_business_content_publish`.
- Carrossel: até **10 itens**, conta como 1 post. Imagens **só JPEG**. O recorte segue a 1ª imagem.
- A mídia precisa estar numa **URL pública** na hora de publicar (a Meta baixa a imagem). Vamos precisar de storage público (ex.: R2, Supabase ou Cloudinary).
- **Story pela API não tem sticker** (link, enquete, menção). Os templates de story reservam a "zona da figurinha" vazia para ele colocar à mão quando quiser.
- A API **não agenda**: quem agenda é o nosso sistema.
- Limite: no mínimo 50 posts por 24h por conta (a documentação cita 50 e 100). Checar com `content_publishing_limit`.
- O token de longa duração expira (~60 dias) e precisa ser **renovado automaticamente**.

## Marcas: onde está a verdade

- **Conteúdo** (voz, pilares, calendário, hashtags, ofertas, regras, pendências): `packages/brands/src/<marca>/profile.ts`.
- **Visual:** `packages/brands/src/<marca>/tokens.json`, uma **cópia exata** dos arquivos oficiais:
  - VB Manutenções: `C:\Users\vinic\OneDrive\Documentos\Design system vb manutencoes\revisao-design\06-entrega\vb-tokens.json` (design system 2.0). Os templates HTML de referência estão em `...\revisao-design\05-aplicacoes\templates\`, com fontes Sora e Inter.
  - VB Page Studio: `C:\Users\vinic\OneDrive\Documentos\Design system vb page studio\VB-Page-Studio-identidade-v2\tokens.json` (identidade v2, Montserrat via Google Fonts). Os SVGs dos logos estão em `02-logo\svg\`.
  - Essas pastas são **somente leitura**: nunca altere. Se o design mudar lá, copie de novo o `tokens.json`.

### Regras que valem para tudo que for gerado

- **Máximo 5 hashtags** na legenda (VB Page Studio: + 1 hashtag no cabeçalho da arte).
- Nenhum logo de terceiros nas artes (WhatsApp, Instagram, Apple...). Para contato, usar ícone de balão genérico (Lucide `message-circle`).
- **VB Manutenções:**
  - não prometer resultado antes do diagnóstico;
  - preços sempre "a partir de", e hoje **nenhum preço sai além de "diagnóstico grátis"** (tabela a confirmar);
  - nunca mostrar número de série, senha ou arquivos de cliente;
  - nunca publicar endereço;
  - conteúdo de IA é ilustrativo e é marcado como tal.
- **VB Page Studio:**
  - não inventar depoimento, cliente, número nem estatística (ainda não há clientes reais);
  - projeto conceito sempre identificado como "projeto conceito";
  - nenhum número de WhatsApp nas artes até ser confirmado (usar "link na bio").
- WhatsApp liberado para divulgação (só VB Manutenções): (12) 98222-9518.

### Estúdio de Vídeo (Parte 8): referências

- Reels animados em 3D, estilo explicativo, com o personagem fictício **Lucas** (low-poly, camiseta azul-ciano, calça grafite, tênis vermelho, cabelo castanho cacheado).
- Narração no **ElevenLabs**: voz "André – Natural excitement", modelo **v3** com tags de emoção entre colchetes, Stability em Natural. Escrever "Vê Bê Manutenções". Pausas por pontuação (a v3 não aceita `<break>`).
- Sem música no arquivo (entra pelo Instagram). Legenda palavra por palavra, menor e mais para baixo.
- A marca aparece só no card final. Gancho nos 2 primeiros segundos que funcione sem som.
- Trabalhar por etapas com aprovação: roteiro → narração → personagem → cenas → prévia → vídeo final.
