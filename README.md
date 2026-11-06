# sistema-posts-vb

Sistema para gerar, aprovar e publicar carrosséis e stories nos Instagrams
**@vbmanutencoes.pc** e **@vbpagestudio**, com um Estúdio de Vídeo que gera
roteiro, prompt do vídeo e prompt de narração (ElevenLabs).

## Status

- [x] Parte 1: perfis de marca (`packages/brands`)
- [x] Parte 2: base do projeto (painel, servidor e banco)
- [ ] Parte 3: gerador de conteúdo (Claude API)
- [ ] Parte 4: templates visuais → JPEG
- [ ] Parte 5: fila de aprovação
- [ ] Parte 6: conexão com o Instagram
- [ ] Parte 7: agendador e publicação
- [ ] Parte 8: Estúdio de Vídeo
- [ ] Parte 9: painel "Fábrica" e deploy

## Estrutura

```
apps/
  server/   Node + Fastify + Drizzle ORM + SQLite (porta 3333)
  web/      React + Vite + Tailwind v4 (porta 5173)
packages/
  brands/   perfis e design systems das marcas (usado pelos dois apps)
```

## Como rodar

Precisa de Node 20 ou mais novo.

```bash
npm install                                      # uma vez, e sempre que mudar dependência
copy apps\server\.env.example apps\server\.env   # uma vez (no Git Bash: cp)
npm run dev                                      # sobe servidor + painel juntos
```

Abra http://localhost:5173.

O banco é criado sozinho em `apps/server/data/dev.db` na primeira vez.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe servidor e painel com recarga automática |
| `npm run typecheck` | Confere os tipos de todo o projeto |
| `npm run build` | Gera a versão final do painel |
| `npm run db:generate` | Cria uma migration depois de mudar `schema.ts` |
