// Aplica no banco as migrations geradas pelo drizzle-kit (pasta /drizzle).
// Roda sozinho na subida do servidor e também pode rodar com `npm run db:migrate`.
import { fileURLToPath } from 'node:url';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './client';

const migrationsFolder = fileURLToPath(new URL('../../drizzle', import.meta.url));

export async function runMigrations() {
  await migrate(db, { migrationsFolder });
}

// Quando o arquivo é executado direto (npm run db:migrate)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await runMigrations();
  console.log('Migrations aplicadas.');
}
