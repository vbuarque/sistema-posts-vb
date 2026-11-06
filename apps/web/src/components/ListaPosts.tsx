// Tabela dos posts salvos no banco.
import type { BrandResumo, Post } from '../lib/api';

interface Props {
  posts: Post[];
  brands: BrandResumo[];
}

const STATUS_LABEL: Record<string, string> = {
  pauta: 'Pauta',
  rascunho: 'Rascunho',
  aguardando_aprovacao: 'Aguardando aprovação',
  aprovado: 'Aprovado',
  agendado: 'Agendado',
  publicado: 'Publicado',
  erro: 'Erro',
};

export function ListaPosts({ posts, brands }: Props) {
  if (posts.length === 0) {
    return <p className="py-6 text-center text-sm text-painel-suave">Nenhum post ainda.</p>;
  }

  const brandPorId = new Map(brands.map((b) => [b.id, b]));

  return (
    <ul className="divide-y divide-painel-borda">
      {posts.map((post) => {
        const brand = brandPorId.get(post.brandId);
        return (
          <li key={post.id} className="flex items-center gap-4 py-3 text-sm">
            <span
              className="size-3 shrink-0 rounded-full"
              style={{ background: brand?.preview.destaque }}
              title={brand?.nome}
            />
            <span className="min-w-0 flex-1 truncate font-medium">{post.titulo}</span>
            <span className="text-painel-suave capitalize">{post.formato}</span>
            <span className="rounded-full border border-painel-borda px-2 py-0.5 text-xs text-painel-suave">
              {STATUS_LABEL[post.status] ?? post.status}
            </span>
            <time className="hidden text-xs text-painel-suave sm:block">
              {new Date(post.criadoEm).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}
            </time>
          </li>
        );
      })}
    </ul>
  );
}
