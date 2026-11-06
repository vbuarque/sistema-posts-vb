// Perfil de conteúdo da VB Manutenções (@vbmanutencoes.pc).
// Fonte: "VB Manutenções — Questionário da marca (design system 2.0)", 06/11/2026.
// O visual NÃO fica aqui: está no tokens.json desta pasta (design system 2.0).
import type { BrandProfile } from '../types';

export const vbManutencoes: BrandProfile = {
  id: 'vb-manutencoes',
  nome: 'VB Manutenções',
  instagram: '@vbmanutencoes.pc',
  regiao: 'São José dos Campos e região',
  localizacaoPost: 'São José dos Campos',

  contato: {
    whatsapp: { valor: '(12) 98222-9518', status: 'definido' },
    linkBio: {
      valor:
        'https://wa.me/5512982229518?text=Ol%C3%A1!%20Vim%20pelo%20Instagram%20e%20quero%20um%20or%C3%A7amento.',
      status: 'definido',
      obs: 'Título do link: "Faça seu orçamento"',
    },
    ctaPadrao: {
      valor: 'O diagnóstico é grátis. Me chama no WhatsApp pelo link da bio.',
      status: 'definido',
      obs: 'Botão da arte: "Chame no WhatsApp". A frase do card final dos Reels está A CONFIRMAR.',
    },
  },

  voz: {
    tom: {
      valor:
        'Profissional, simpático, natural e transparente. Técnico de confiança explicando para um vizinho, sem parecer grande assistência.',
      status: 'definido',
    },
    pessoa: 'primeira', // "eu faço", "eu vejo"
    fazer: [
      'Frases curtas, com fatos concretos',
      'Explicar a causa antes da solução',
      'Uma chamada (CTA) por post',
      'No máximo 1 emoji por bloco de texto',
    ],
    evitar: [
      '"com certeza", "garantia de que nada se perde", "conserto qualquer problema"',
      'Palavras de vendedor',
      'Repetir o contraste "não é X, é Y"',
      'Frase de efeito no fim de todo parágrafo',
      'Excesso de negrito e de emoji',
    ],
  },

  publico: {
    valor: null,
    status: 'nao-definido',
    obs: 'Na prática: quem mora em SJC e região e leva o equipamento. Os Reels do Lucas falam com home office e PC gamer (não oficializado).',
  },

  pilares: [
    { id: 'educativo', nome: 'Educativo', descricao: 'Sinais, causas e mitos', status: 'sugestao' },
    { id: 'preventivo', nome: 'Preventivo', descricao: 'Limpeza, pasta térmica, backup', status: 'sugestao' },
    { id: 'servico', nome: 'Serviço e atendimento', descricao: 'Como funciona, diagnóstico grátis, perguntas frequentes', status: 'sugestao' },
    { id: 'bastidores', nome: 'Bastidores com prova real', descricao: 'Bancada, antes e depois com medida real', status: 'sugestao' },
  ],

  templates: [
    { id: 'carrosselCapa', formato: 'carrossel', papel: 'Capa: gancho com numeral opcional' },
    { id: 'carrosselMeio', formato: 'carrossel', papel: 'Um item/sinal por slide, com chip-ícone e caixa "Pode ser"' },
    { id: 'carrosselFinal', formato: 'carrossel', papel: 'Último slide com CTA do WhatsApp' },
    { id: 'storyEnquete', formato: 'story', papel: 'Pergunta com espaço para a figurinha de enquete' },
    { id: 'storyReelNovo', formato: 'story', papel: 'Divulga o Reel novo com miniatura' },
    { id: 'reelCardFinal', formato: 'reel', papel: 'Card final dos Reels (usado no Estúdio de Vídeo)' },
  ],

  calendario: {
    feed: {
      valor: [
        { dia: 2, hora: '12:00', formato: 'reel-ou-carrossel' },
        { dia: 4, hora: '18:30', formato: 'reel-ou-carrossel' },
        { dia: 6, hora: '10:00', formato: 'reel-ou-carrossel' },
      ],
      status: 'a-confirmar',
      obs: 'Alterna Reel e carrossel. Horários em teste: terça 12h no plano × Reels saindo às 19h. Domingo sem post.',
    },
    stories: {
      valor: '3 a 5 nos dias de movimento, às 12h e às 19h. Depois de cada post, Story "Reel novo".',
      status: 'definido',
      obs: 'Na prática têm saído 1 a 3 por dia.',
    },
  },

  hashtags: {
    maxLegenda: 5,
    maxArte: 0,
    regras: [
      'No máximo 5 por post, sem acento',
      'Palavras-chave na legenda pesam mais que hashtags',
      '#comofunciona nos Reels explicativos',
    ],
    conjuntosUsados: [
      ['#notebookesquentando', '#manutencaodenotebook', '#pastatermica', '#comofunciona', '#homeoffice'],
      ['#comofunciona', '#computadorlento', '#pastatermica', '#pcgamer', '#manutencaodecomputador'],
      ['#formatacaodepc', '#manutencaodecomputador', '#backup', '#saojosedoscampos', '#computadorlento'],
      ['#manutencaodecomputador', '#computadorlento', '#notebookesquentando', '#saojosedoscampos', '#assistenciatecnica'],
    ],
  },

  ofertas: [
    { nome: 'Diagnóstico e orçamento', preco: { valor: 'GRÁTIS', status: 'definido' } },
    { nome: 'Formatação + Windows + drivers', preco: { valor: 'a partir de R$ 100', status: 'a-confirmar' } },
    { nome: 'Formatação + configuração completa', preco: { valor: 'a partir de R$ 150', status: 'a-confirmar' } },
    { nome: 'Otimização do sistema', preco: { valor: null, status: 'a-confirmar', obs: 'R$ 50 (tabela) × R$ 70 (proposta)' } },
    { nome: 'Backup', preco: { valor: null, status: 'a-confirmar', obs: 'R$ 40+ (tabela) × R$ 50 até ~200 GB (proposta)' } },
    { nome: 'Configuração de impressora', preco: { valor: 'a partir de R$ 40', status: 'a-confirmar' } },
    { nome: 'Limpeza interna (desktop)', preco: { valor: null, status: 'a-confirmar', obs: 'R$ 60 × R$ 80' } },
    { nome: 'Limpeza + pasta térmica (desktop)', preco: { valor: null, status: 'a-confirmar', obs: 'R$ 110 × R$ 130' } },
    { nome: 'Troca de pasta térmica', preco: { valor: 'a partir de R$ 50', status: 'a-confirmar' } },
    { nome: 'Limpeza + pasta (notebook)', preco: { valor: null, status: 'a-confirmar', obs: '"sob consulta" × "a partir de R$ 150"' } },
  ],

  regras: [
    'Nunca dizer que formata sem verificar os arquivos e sem autorização do cliente',
    'Não prometer resultado antes do diagnóstico',
    'Preço sempre "a partir de"; notebook só "a partir de" ou "sob consulta"',
    'Não anunciar serviço que não é oferecido (placa-mãe, solda, recuperação profissional de dados, fonte, eletrônica avançada, BIOS avançada, software pirata)',
    'Não mostrar solda em imagens',
    'Foto, vídeo ou depoimento de cliente só com autorização',
    'Nunca mostrar número de série, senha ou arquivo de cliente',
    'Antes e depois só com medida real',
    'Nunca publicar endereço residencial',
    'Conteúdo de IA é ilustrativo e não é apresentado como serviço feito; marcar como IA quando o Instagram pedir',
    'Sem logo do WhatsApp nem marcas de terceiros nas artes',
    'Linha da marca na legenda: "VB Manutenções: manutenção de PC e notebook em São José dos Campos. Diagnóstico grátis pelo link da bio."',
  ],

  pendencias: [
    { item: 'Valores da tabela de preços', impacto: 'A IA só cita "diagnóstico grátis". Nenhum outro preço sai em post até confirmar.' },
    { item: 'Pilares de conteúdo', impacto: 'Usa os 4 pilares sugeridos, marcados como SUGESTÃO.' },
    { item: 'Horários do feed', impacto: 'Agenda nos horários do plano; você ajusta na fila de aprovação.' },
    { item: 'Palavra do selo "Comenta [PALAVRA]" em caixa alta ou não', impacto: 'Template aceita os dois; padrão segue o design system (sem caixa alta).' },
    { item: 'Plano de conteúdo depois de 24/11', impacto: 'O gerador de pautas propõe temas novos para você aprovar.' },
  ],
};
