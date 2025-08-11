const historia = [
  {
    id: 1,
    texto: "Você é o comandante da nave estelar Horizon, a caminho de um planeta desconhecido. De repente, o sistema de navegação falha. O que faz?",
    opcoes: [
      { texto: "Tentar consertar o sistema manualmente", proximo: 2 },
      { texto: "Enviar um sinal de socorro", proximo: 3 },
      { texto: "Desviar para um planeta próximo", proximo: 4 }
    ]
  },

  {
    id: 2,
    texto: "Você consegue consertar o sistema, mas descobre que o combustível está acabando rapidamente.",
    opcoes: [
      { texto: "Buscar uma fonte de combustível no planeta desconhecido", proximo: 5 },
      { texto: "Voltar para a Terra, mesmo com pouco combustível", proximo: 6 }
    ]
  },

  {
    id: 3,
    texto: "O sinal de socorro é captado por uma nave alienígena. Eles respondem com um pedido de ajuda.",
    opcoes: [
      { texto: "Atender ao pedido e ajudar os alienígenas", proximo: 7 },
      { texto: "Ignorar e tentar fugir", proximo: 8 }
    ]
  },

  {
    id: 4,
    texto: "Você desvia para o planeta próximo e faz um pouso de emergência.",
    opcoes: [
      { texto: "Explorar o planeta a pé", proximo: 9 },
      { texto: "Ficar na nave e tentar reparos", proximo: 10 }
    ]
  },

  {
    id: 5,
    texto: "Você encontra uma fonte de combustível natural, mas é guardada por criaturas hostis.",
    opcoes: [
      { texto: "Enfrentar as criaturas", proximo: 11 },
      { texto: "Tentar negociar com elas", proximo: 12 }
    ]
  },

  {
    id: 6,
    texto: "Você tenta voltar para a Terra, mas o combustível acaba no meio do caminho. Você fica à deriva no espaço.",
    final: "Sua missão termina aqui, mas sua coragem será lembrada."
  },

  {
    id: 7,
    texto: "Os alienígenas te recompensam com tecnologia avançada que salva sua nave.",
    final: "Você se torna um herói interestelar."
  },

  {
    id: 8,
    texto: "Ao tentar fugir, você é perseguido e capturado pela nave alienígena.",
    final: "Você se torna prisioneiro em um planeta estranho."
  },

  {
    id: 9,
    texto: "Durante a exploração, você encontra uma planta curativa que pode salvar sua tripulação.",
    opcoes: [
      { texto: "Coletar a planta e voltar para a nave", proximo: 13 },
      { texto: "Explorar mais o planeta", proximo: 14 }
    ]
  },

  {
    id: 10,
    texto: "Você repara a nave, mas é atacado por tempestades solares violentas.",
    opcoes: [
      { texto: "Tentar proteger a nave com escudos", proximo: 15 },
      { texto: "Sair da nave e esperar na superfície", proximo: 16 }
    ]
  },

  {
    id: 11,
    texto: "Você derrota as criaturas e consegue o combustível.",
    final: "Sua bravura salva a missão."
  },

  {
    id: 12,
    texto: "As criaturas aceitam a negociação e compartilham o combustível.",
    final: "Você prova que a diplomacia vence a força."
  },

  {
    id: 13,
    texto: "A planta cura sua tripulação e todos sobrevivem para contar a história.",
    final: "Um final feliz para uma missão arriscada."
  },

  {
    id: 14,
    texto: "Explorar mais o planeta te leva a uma armadilha natural. Você fica preso.",
    final: "Sua curiosidade quase custou sua vida."
  },

  {
    id: 15,
    texto: "Os escudos seguram, mas a nave fica danificada e perde a capacidade de voltar para casa.",
    final: "Você vira um explorador perdido nas estrelas."
  },
  
  {
    id: 16,
    texto: "Esperar na superfície salva sua vida, mas a nave é destruída.",
    final: "Você sobrevive, mas sua missão acaba aqui."
  }
];
