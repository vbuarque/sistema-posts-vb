// GET /api/brands      → lista das marcas com resumo visual e pendências
// GET /api/brands/:id  → perfil completo de uma marca
import type { FastifyInstance } from 'fastify';
import { brands, brandIds, isBrandId } from '@vb/brands';

export async function brandRoutes(app: FastifyInstance) {
  app.get('/api/brands', async () => {
    return brandIds.map((id) => {
      const { profile, preview } = brands[id];
      return {
        id,
        nome: profile.nome,
        instagram: profile.instagram,
        regiao: profile.regiao,
        preview,
        pendencias: profile.pendencias,
      };
    });
  });

  app.get<{ Params: { id: string } }>('/api/brands/:id', async (req, reply) => {
    const { id } = req.params;
    if (!isBrandId(id)) return reply.code(404).send({ erro: 'Marca não encontrada' });
    const { profile, preview } = brands[id];
    return { id, profile, preview };
  });
}
