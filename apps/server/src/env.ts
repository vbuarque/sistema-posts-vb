// Lê e valida as variáveis de ambiente (.env) uma vez só, na subida do servidor.
// Se faltar algo obrigatório, o servidor nem sobe, e a mensagem diz o que falta.
import { z } from 'zod';

const schema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().default('file:./data/dev.db'),
});

export const env = schema.parse(process.env);
