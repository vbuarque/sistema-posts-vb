// Registro das marcas: cada uma junta o perfil de conteúdo (profile.ts) com
// o SEU arquivo de tokens. As duas marcas têm design systems diferentes, por
// isso cada uma lê o próprio tokens.json e terá os próprios templates.
import { vbManutencoes } from './vb-manutencoes/profile';
import { vbPageStudio } from './vb-page-studio/profile';
import vbManutencoesTokens from './vb-manutencoes/tokens.json';
import vbPageStudioTokens from './vb-page-studio/tokens.json';

export const brands = {
  'vb-manutencoes': { profile: vbManutencoes, tokens: vbManutencoesTokens },
  'vb-page-studio': { profile: vbPageStudio, tokens: vbPageStudioTokens },
} as const;

export type BrandId = keyof typeof brands;
