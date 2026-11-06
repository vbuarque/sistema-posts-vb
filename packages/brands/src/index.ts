// Registro das marcas: cada uma junta o perfil de conteúdo (profile.ts) com
// o SEU arquivo de tokens. As duas marcas têm design systems diferentes, por
// isso cada uma lê o próprio tokens.json e terá os próprios templates.
import { vbManutencoes } from './vb-manutencoes/profile';
import { vbPageStudio } from './vb-page-studio/profile';
import vbManutencoesTokens from './vb-manutencoes/tokens.json';
import vbPageStudioTokens from './vb-page-studio/tokens.json';
import type { BrandProfile } from './types';

export type * from './types';

/**
 * Resumo visual mínimo, igual para todas as marcas. Os tokens completos têm
 * formatos diferentes em cada marca; este resumo é o "denominador comum" que
 * o painel usa para mostrar a marca (cores e fonte), sem conhecer os detalhes.
 */
export interface BrandPreview {
  fundo: string;
  superficie: string;
  destaque: string;
  texto: string;
  textoSecundario: string;
  fonteTitulo: string;
}

export interface Brand {
  profile: BrandProfile;
  preview: BrandPreview;
}

const t1 = vbManutencoesTokens;
const t2 = vbPageStudioTokens;

export const brands = {
  'vb-manutencoes': {
    profile: vbManutencoes,
    tokens: t1,
    preview: {
      fundo: t1.color.bg.base,
      superficie: t1.color.surface.box,
      destaque: t1.color.brand.cyan,
      texto: t1.color.text.primary,
      textoSecundario: t1.color.text.secondary,
      fonteTitulo: t1.font.display.family,
    },
  },
  'vb-page-studio': {
    profile: vbPageStudio,
    tokens: t2,
    preview: {
      fundo: t2.color.bg,
      superficie: t2.color.surface,
      destaque: t2.color.accent,
      texto: t2.color.text,
      textoSecundario: t2.color.text2,
      fonteTitulo: t2.font.family,
    },
  },
} as const satisfies Record<string, Brand & { tokens: unknown }>;

export type BrandId = keyof typeof brands;

export const brandIds = Object.keys(brands) as BrandId[];

export function isBrandId(id: string): id is BrandId {
  return id in brands;
}
