const storyData = [
  {
    id: 1,
    image: "img/ponte-nave.jpg",
    altText: "A ponte de comando de uma nave estelar com alertas vermelhos piscando.",
    texto: "Você é o comandante da nave estelar Horizon, a caminho de um planeta desconhecido. De repente, o sistema de navegação falha. O que faz?",
    opcoes: [
      { texto: "Tentar consertar o sistema manualmente", proximo: 2 },
      { texto: "Enviar um sinal de socorro", proximo: 3 },
      { texto: "Desviar para um planeta próximo", proximo: 4 }
    ]
  },

  {
    id: 2,
    image: "img/painel-combustivel.jpg",
    altText: "Um painel de controle mostrando o nível de combustível caindo para a zona vermelha.",
    texto: "Você consegue consertar o sistema, mas descobre que o combustível está acabando rapidamente.",
    opcoes: [
      { texto: "Buscar uma fonte de combustível no planeta desconhecido", proximo: 5 },
      { texto: "Voltar para a Terra, mesmo com pouco combustível", proximo: 6 }
    ]
  },

  {
    id: 3,
    image: "img/nave-alien.jpg",
    altText: "Uma grande e estranha nave alienígena aparece na tela principal.",
    texto: "O sinal de socorro é captado por uma nave alienígena. Eles respondem com um pedido de ajuda.",
    opcoes: [
      { texto: "Atender ao pedido e ajudar os alienígenas", proximo: 7 },
      { texto: "Ignorar e tentar fugir", proximo: 8 }
    ]
  },

  {
    id: 4,
    image: "img/pouso-emergencia.jpg",
    altText: "A nave Horizon pousada em um planeta alienígena com florestas roxas.",
    texto: "Você desvia para o planeta próximo e faz um pouso de emergência.",
    opcoes: [
      { texto: "Explorar o planeta a pé", proximo: 9 },
      { texto: "Ficar na nave e tentar reparos", proximo: 10 }
    ]
  },

  {
    id: 5,
    image: "img/criaturas-hostis.jpg",
    altText: "Criaturas alienígenas parecidas com insetos guardando uma poça de líquido brilhante.",
    texto: "Você encontra uma fonte de combustível natural, mas é guardada por criaturas hostis.",
    opcoes: [
      { texto: "Enfrentar as criaturas", proximo: 11 },
      { texto: "Tentar negociar com elas", proximo: 12 }
    ]
  },

  {
    id: 6,
    image: "img/nave-deriva.jpg",
    altText: "A nave Horizon flutuando silenciosamente no espaço escuro.",
    texto: "Você tenta voltar para a Terra, mas o combustível acaba no meio do caminho. Você fica à deriva no espaço.",
    final: "Sua missão termina aqui, mas sua coragem será lembrada.",
    opcoes: []
  },

  {
    id: 7,
    image: "img/heroi-interestelar.jpg",
    altText: "Alienígenas amigáveis agradecendo a você na ponte da sua nave.",
    texto: "Os alienígenas te recompensam com tecnologia avançada que salva sua nave.",
    final: "Você se torna um herói interestelar.",
    opcoes: []
  },

  {
    id: 8,
    image: "img/prisao-alien.jpg",
    altText: "A visão de dentro de uma cela de energia brilhante.",
    texto: "Ao tentar fugir, você é perseguido e capturado pela nave alienígena.",
    final: "Você se torna prisioneiro em um planeta estranho.",
    opcoes: []
  },

  {
    id: 9,
    image: "img/planta-curativa.jpg",
    altText: "Uma planta alienígena brilhante com uma luz azul suave.",
    texto: "Durante a exploração, você encontra uma planta curativa que pode salvar sua tripulação.",
    opcoes: [
      { texto: "Coletar a planta e voltar para a nave", proximo: 13 },
      { texto: "Explorar mais o planeta", proximo: 14 }
    ]
  },

  {
    id: 10,
    image: "img/tempestade-solar.jpg",
    altText: "A nave sendo atingida por raios de energia de uma tempestade solar.",
    texto: "Você repara a nave, mas é atacado por tempestades solares violentas.",
    opcoes: [
      { texto: "Tentar proteger a nave com escudos", proximo: 15 },
      { texto: "Sair da nave e esperar na superfície", proximo: 16 }
    ]
  },

  {
    id: 11,
    image: "img/vitoria-combustivel.jpg",
    altText: "Você coletando o combustível enquanto as criaturas fogem.",
    texto: "Você derrota as criaturas e consegue o combustível.",
    final: "Sua bravura salva a missão.",
    opcoes: []
  },

  {
    id: 12,
    image: "img/diplomacia-alien.jpg",
    altText: "Uma criatura alienígena te entregando um frasco com o combustível.",
    texto: "As criaturas aceitam a negociação e compartilham o combustível.",
    final: "Você prova que a diplomacia vence a força.",
    opcoes: []
  },

  {
    id: 13,
    image: "img/tripulacao-saudavel.jpg",
    altText: "Sua tripulação sorrindo e saudável na enfermaria da nave.",
    texto: "A planta cura sua tripulação e todos sobrevivem para contar a história.",
    final: "Um final feliz para uma missão arriscada.",
    opcoes: []
  },

  {
    id: 14,
    image: "img/armadilha-planeta.jpg",
    altText: "Você caído em um buraco fundo com vinhas alienígenas.",
    texto: "Explorar mais o planeta te leva a uma armadilha natural. Você fica preso.",
    final: "Sua curiosidade quase custou sua vida.",
    opcoes: []
  },

  {
    id: 15,
    image: "img/nave-danificada.jpg",
    altText: "A nave com painéis quebrados, flutuando perto de um sol.",
    texto: "Os escudos seguram, mas a nave fica danificada e perde a capacidade de voltar para casa.",
    final: "Você vira um explorador perdido nas estrelas.",
    opcoes: []
  },
  
  {
    id: 16,
    image: "img/nave-destruida.jpg",
    altText: "Você na superfície do planeta, olhando a explosão da sua nave na órbita.",
    texto: "Esperar na superfície salva sua vida, mas a nave é destruída.",
    final: "Você sobrevive, mas sua missão acaba aqui.",
    opcoes: []
  }
];
