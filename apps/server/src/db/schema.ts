// Estrutura do banco de dados (Drizzle ORM + SQLite).
// Por enquanto só existe a tabela de posts. Novas tabelas entram nas próximas partes.
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

/** Caminho de um post, da ideia até o Instagram. */
export const POST_STATUS = [
  'pauta', // ideia aprovada, ainda sem conteúdo
  'rascunho', // conteúdo sendo gerado ou editado
  'aguardando_aprovacao', // pronto para você revisar
  'aprovado', // você aprovou, falta agendar
  'agendado', // tem data e hora para sair
  'publicado', // já está no Instagram
  'erro', // a publicação falhou (ver campo "erro")
] as const;
export type PostStatus = (typeof POST_STATUS)[number];

export const POST_FORMATOS = ['carrossel', 'story'] as const;
export type PostFormato = (typeof POST_FORMATOS)[number];

export const posts = sqliteTable('posts', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  brandId: text('brand_id').notNull(),
  formato: text('formato', { enum: POST_FORMATOS }).notNull(),
  status: text('status', { enum: POST_STATUS }).notNull().default('rascunho'),
  titulo: text('titulo').notNull(),

  // Conteúdo dos slides em JSON. O formato exato nasce na Parte 3.
  conteudo: text('conteudo', { mode: 'json' }).$type<unknown>(),
  legenda: text('legenda'),
  hashtags: text('hashtags', { mode: 'json' }).$type<string[]>().notNull().default(sql`'[]'`),

  agendadoPara: integer('agendado_para', { mode: 'timestamp' }),
  publicadoEm: integer('publicado_em', { mode: 'timestamp' }),
  igMediaId: text('ig_media_id'), // id do post no Instagram, depois de publicado
  erro: text('erro'),

  criadoEm: integer('criado_em', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
  atualizadoEm: integer('atualizado_em', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date()),
});

export type Post = typeof posts.$inferSelect;
export type NovoPost = typeof posts.$inferInsert;
