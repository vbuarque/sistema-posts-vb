// Tudo que o painel conversa com o servidor passa por aqui.
// Os tipos espelham o que a API devolve.
import type { BrandId, BrandPreview, Pendencia } from '@vb/brands';

export interface BrandResumo {
  id: BrandId;
  nome: string;
  instagram: string;
  regiao: string;
  preview: BrandPreview;
  pendencias: Pendencia[];
}

export type PostFormato = 'carrossel' | 'story';

export interface Post {
  id: string;
  brandId: BrandId;
  formato: PostFormato;
  status: string;
  titulo: string;
  criadoEm: string;
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { 'content-type': 'application/json', ...init?.headers },
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.erro ?? `Erro ${res.status}`);
  return data as T;
}

export const api = {
  health: () => request<{ ok: boolean }>('/api/health'),
  brands: () => request<BrandResumo[]>('/api/brands'),
  posts: () => request<Post[]>('/api/posts'),
  criarPost: (dados: { brandId: BrandId; formato: PostFormato; titulo: string }) =>
    request<Post>('/api/posts', { method: 'POST', body: JSON.stringify(dados) }),
};
