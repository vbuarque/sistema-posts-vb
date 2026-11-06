// Conexão com o banco. Hoje é um arquivo SQLite local (data/dev.db).
// Na nuvem (Parte 9) basta trocar a DATABASE_URL, o resto do código não muda.
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { env } from '../env';
import * as schema from './schema';

// Garante que a pasta do arquivo .db existe antes de abrir.
if (env.DATABASE_URL.startsWith('file:')) {
  mkdirSync(dirname(env.DATABASE_URL.slice('file:'.length)), { recursive: true });
}

const client = createClient({ url: env.DATABASE_URL });
export const db = drizzle(client, { schema });
