// GET  /api/posts?brandId=...  → posts (mais novos primeiro), filtrando por marca
// POST /api/posts              → cria um rascunho vazio
import type { FastifyInstance } from 'fastify';
import { desc, eq } from 'drizzle-orm';
import { z } from 'zod';
import { brandIds } from '@vb/brands';
import { db } from '../db/client';
import { posts, POST_FORMATOS } from '../db/schema';

const brandIdSchema = z.enum(brandIds as [string, ...string[]]);

const listarQuery = z.object({ brandId: brandIdSchema.optional() });

const criarBody = z.object({
  brandId: brandIdSchema,
  formato: z.enum(POST_FORMATOS),
  titulo: z.string().trim().min(3, 'O título precisa de pelo menos 3 letras').max(120),
});

export async function postRoutes(app: FastifyInstance) {
  app.get('/api/posts', async (req, reply) => {
    const query = listarQuery.safeParse(req.query);
    if (!query.success) return reply.code(400).send({ erro: z.prettifyError(query.error) });

    const { brandId } = query.data;
    return db
      .select()
      .from(posts)
      .where(brandId ? eq(posts.brandId, brandId) : undefined)
      .orderBy(desc(posts.criadoEm));
  });

  app.post('/api/posts', async (req, reply) => {
    const body = criarBody.safeParse(req.body);
    if (!body.success) return reply.code(400).send({ erro: z.prettifyError(body.error) });

    const [criado] = await db.insert(posts).values(body.data).returning();
    return reply.code(201).send(criado);
  });
}
