// Tipos do "pacote de marca": tudo que o sistema precisa saber sobre um perfil
// do Instagram para gerar conteúdo (IA) e artes (templates).
//
// Regra de ouro: o perfil NUNCA inventa dado. O que não foi decidido fica
// marcado com um Status, e a IA é instruída a não usar o que não está "definido".

/** Situação de cada informação, igual aos questionários das marcas. */
export type Status = 'definido' | 'a-confirmar' | 'sugestao' | 'nao-definido';

/** Um valor que carrega junto a sua situação. */
export interface Campo<T> {
  valor: T | null; // null = NÃO DEFINIDO
  status: Status;
  obs?: string;
}

export interface Pilar {
  id: string;
  nome: string;
  descricao: string;
  status: Status;
}

/** Um horário fixo de publicação no feed. dia: 0 = domingo ... 6 = sábado */
export interface SlotFeed {
  dia: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  hora: string; // "HH:mm", horário de Brasília
  formato: 'reel' | 'carrossel' | 'reel-ou-carrossel';
}

/** Um template visual que existe no design system da marca. */
export interface TemplateInfo {
  id: string; // mesmo nome usado no tokens.json da marca
  formato: 'carrossel' | 'story' | 'reel';
  papel: string; // para que serve (a IA usa isso para escolher)
}

/** Serviço ou plano que pode aparecer nos posts. */
export interface Oferta {
  nome: string;
  preco: Campo<string>; // sempre texto: "a partir de R$ 100", "GRÁTIS"...
  inclui?: string;
  validaAte?: string; // "AAAA-MM-DD": depois disso a IA para de citar
}

export interface Pendencia {
  item: string;
  impacto: string; // o que o sistema faz enquanto não for decidido
}

export interface BrandProfile {
  id: string;
  nome: string;
  instagram: string;
  regiao: string;
  localizacaoPost: string; // localização marcada no Instagram

  contato: {
    whatsapp: Campo<string>;
    linkBio: Campo<string>;
    ctaPadrao: Campo<string>;
  };

  voz: {
    tom: Campo<string>;
    pessoa: 'primeira' | 'marca';
    fazer: string[];
    evitar: string[];
  };

  publico: Campo<string>;
  pilares: Pilar[];
  templates: TemplateInfo[];

  calendario: {
    feed: Campo<SlotFeed[]>;
    stories: Campo<string>;
  };

  hashtags: {
    maxLegenda: number;
    maxArte: number; // hashtags dentro da arte (cabeçalho)
    regras: string[];
    conjuntosUsados: string[][]; // exemplos reais já publicados
  };

  ofertas: Oferta[];

  /** Regras que a IA e a revisão precisam respeitar sempre. */
  regras: string[];

  /** O que ainda depende de decisão e como o sistema se comporta até lá. */
  pendencias: Pendencia[];
}
