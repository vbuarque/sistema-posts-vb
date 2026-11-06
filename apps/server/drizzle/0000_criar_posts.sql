CREATE TABLE `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`brand_id` text NOT NULL,
	`formato` text NOT NULL,
	`status` text DEFAULT 'rascunho' NOT NULL,
	`titulo` text NOT NULL,
	`conteudo` text,
	`legenda` text,
	`hashtags` text DEFAULT '[]' NOT NULL,
	`agendado_para` integer,
	`publicado_em` integer,
	`ig_media_id` text,
	`erro` text,
	`criado_em` integer NOT NULL,
	`atualizado_em` integer NOT NULL
);
