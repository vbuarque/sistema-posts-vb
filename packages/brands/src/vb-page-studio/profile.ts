// Perfil de conteúdo da VB Page Studio (@vbpagestudio).
// Fonte: "VB Page Studio — Configuração da marca (v2)", 06/11/2026.
// O visual NÃO fica aqui: está no tokens.json desta pasta (identidade v2).
import type { BrandProfile } from '../types';

export const vbPageStudio: BrandProfile = {
  id: 'vb-page-studio',
  nome: 'VB Page Studio',
  instagram: '@vbpagestudio',
  regiao: 'São José dos Campos e região',
  localizacaoPost: 'São José dos Campos',

  contato: {
    whatsapp: {
      valor: null,
      status: 'a-confirmar',
      obs: 'O (12) 98222-9518 foi liberado para a assistência; para a VB Page Studio ainda não.',
    },
    linkBio: {
      valor: 'w.app/vbpagestudio',
      status: 'definido',
      obs: 'Leva ao WhatsApp. Bio: "Orçamentos no WhatsApp".',
    },
    ctaPadrao: {
      valor: 'Me chama no WhatsApp pelo link da bio',
      status: 'a-confirmar',
      obs: 'Março usou "direct"; outubro usou WhatsApp. Linha de apoio do botão: "Orçamento sem compromisso · link na bio".',
    },
  },

  voz: {
    tom: {
      valor: null,
      status: 'nao-definido',
      obs: 'Observado nos posts: direto, em "você", próximo, sem jargão, focado no benefício para o dono do negócio.',
    },
    pessoa: 'primeira',
    fazer: [
      'Falar direto com "você", sem jargão',
      'Focar no benefício para o dono do negócio (credibilidade, contatos, cliente chegando pelo WhatsApp)',
      'Fechar com uma pergunta para engajar',
    ],
    evitar: [
      '(SUGESTÃO) Promessa de resultado garantido',
      '(SUGESTÃO) Números inventados',
      '(SUGESTÃO) O fechamento repetido "Esse é o tipo de..."',
      '(SUGESTÃO) Repetir a mesma estrutura de legenda',
    ],
  },

  publico: {
    valor: 'Negócios locais de São José dos Campos que querem mais credibilidade e contatos',
    status: 'definido',
    obs: 'Lista fechada de nichos: NÃO DEFINIDO. Exemplos usados: barbearia e pamonharia.',
  },

  pilares: [
    { id: 'confianca', nome: 'Confiança', descricao: 'Quem está por trás, como funciona', status: 'definido' },
    { id: 'prova', nome: 'Prova', descricao: 'Tour dos projetos, bastidores', status: 'definido' },
    { id: 'educacao', nome: 'Alcance/educação', descricao: 'Dicas, comparações', status: 'definido' },
    { id: 'venda', nome: 'Venda', descricao: 'Preços, vagas', status: 'definido' },
    { id: 'conceito', nome: 'Projetos conceito', descricao: 'Sempre identificados como "projeto conceito"', status: 'definido' },
  ],

  templates: [
    { id: 'carrosselCapa', formato: 'carrossel', papel: 'Capa: selo "Swipe →", título com palavra-chave azul e janela de site' },
    { id: 'carrosselMeio', formato: 'carrossel', papel: 'Rótulo + título + texto, ou lista com check (até 4 itens)' },
    { id: 'carrosselFinal', formato: 'carrossel', papel: 'Botão azul de CTA com linha de apoio' },
    { id: 'storyEnquete', formato: 'story', papel: 'Selo "Responde aí" e "?" gigante, com zona da figurinha' },
    { id: 'storyPostNovo', formato: 'story', papel: 'Divulga o post novo com miniatura inclinada e zona de link' },
    { id: 'storyChamada', formato: 'story', papel: 'Chamada com janela de site' },
  ],

  calendario: {
    feed: {
      valor: [
        { dia: 2, hora: '19:00', formato: 'reel-ou-carrossel' },
        { dia: 5, hora: '19:00', formato: 'carrossel' },
      ],
      status: 'a-confirmar',
      obs: 'Terça era Reel, mas em 27/10 virou post no feed com imagens. Feriados podem mudar o dia.',
    },
    stories: {
      valor: null,
      status: 'nao-definido',
      obs: 'SUGESTÃO do calendário: 3 a 5 por semana (seg bastidor, qua enquete, dia de post repost, sex/sáb chamada).',
    },
  },

  hashtags: {
    maxLegenda: 5,
    maxArte: 1, // 1 hashtag no cabeçalho da capa e dos stories
    regras: [
      'No máximo 5 na legenda e 1 no cabeçalho da arte',
      'Grafia #presencadigital × #presençadigital: A CONFIRMAR (não usar até decidir)',
    ],
    conjuntosUsados: [
      ['#landingpage', '#presencadigital', '#negocioslocais', '#saojosedoscampos', '#sjc'],
    ],
  },

  ofertas: [
    { nome: 'Essencial', preco: { valor: 'R$ 597', status: 'definido' }, inclui: 'Até 5 seções; o cliente envia textos e fotos' },
    { nome: 'Completa', preco: { valor: 'R$ 997', status: 'definido' }, inclui: 'Até 8 seções, ajuda nos textos, galeria ou cardápio, SEO básico' },
    { nome: 'Manutenção', preco: { valor: 'R$ 59/mês', status: 'definido' }, inclui: 'Hospedagem e pequenas alterações' },
    {
      nome: 'Oferta de lançamento',
      preco: { valor: 'R$ 397 (Essencial) + 1º mês de manutenção grátis', status: 'definido', obs: 'Vagas já usadas: A CONFIRMAR' },
      inclui: '3 vagas, em troca de depoimento e autorização para mostrar o site no portfólio',
      validaAte: '2026-12-15',
    },
  ],

  regras: [
    'Não inventar depoimentos, número de clientes, avaliações, estatísticas nem dados da marca',
    'Projeto conceito sempre identificado como "projeto conceito"',
    'Clientes reais: nenhum até agora; não sugerir que existam',
    'Nenhum logo de terceiros (WhatsApp, Apple, Instagram) nas artes; a janela de site não imita nenhum navegador',
    '"Swipe →" fica em inglês, só na capa',
    'Prazo: até 7 dias úteis depois de receber o material',
    'Domínio fica no nome do cliente, pago por ele',
    'Textos nas artes sempre pelo template (nunca escritos por IA de imagem)',
  ],

  pendencias: [
    { item: 'Tom de voz oficial', impacto: 'A IA usa o tom observado nos posts, sem as sugestões marcadas.' },
    { item: 'CTA oficial (WhatsApp ou direct)', impacto: 'Usa "link da bio", que leva ao WhatsApp, sem citar número.' },
    { item: 'Número de WhatsApp da marca', impacto: 'Nenhum número aparece nas artes da VB Page Studio.' },
    { item: 'Formato das terças', impacto: 'Terça aceita Reel ou carrossel; você escolhe na pauta.' },
    { item: 'Stories por dia', impacto: 'O sistema segue a sugestão de 3 a 5 por semana, sempre passando pela aprovação.' },
    { item: 'Vagas da oferta de lançamento já usadas', impacto: 'A IA não cita quantas vagas restam.' },
    { item: 'Prints reais de projetos para a janela de site', impacto: 'A janela usa o rascunho de página (wireframe).' },
  ],
};
