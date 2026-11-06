// Ponto de entrada do servidor: aplica as migrations, registra as rotas e sobe.
import Fastify from 'fastify';
import { z } from 'zod';
import { env } from './env';
import { runMigrations } from './db/migrate';
import { brandRoutes } from './routes/brands';
import { postRoutes } from './routes/posts';

z.config(z.locales.pt()); // mensagens de validação em português

const app = Fastify({ logger: { level: 'info' } });

app.get('/api/health', async () => ({ ok: true, horario: new Date().toISOString() }));
await app.register(brandRoutes);
await app.register(postRoutes);

await runMigrations();

try {
  await app.listen({ port: env.PORT, host: '0.0.0.0' });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
