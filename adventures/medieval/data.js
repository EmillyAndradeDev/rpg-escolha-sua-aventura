const storyData = [
  {
    id: 1,
    image: "img/castelo-entrada.jpg",
    altText: "Um cavaleiro em armadura olhando para um grande castelo de pedra.",
    texto: "Você é um jovem cavaleiro chegando ao castelo do rei. O que você faz primeiro?",
    opcoes: [
      { texto: "Visitar o rei para receber missão", proximo: 2 },
      { texto: "Explorar o castelo por conta própria", proximo: 3 },
      { texto: "Ir até a taverna para ouvir fofocas", proximo: 4 }
    ]
  },

  {
    id: 2,
    image: "img/salao-rei.jpg",
    altText: "O rei sentado em seu trono, parecendo preocupado.",
    texto: "O rei pede que você recupere uma relíquia roubada pelo exército inimigo. Aceita a missão?",
    opcoes: [
      { texto: "Sim, pronto para a aventura!", proximo: 5 },
      { texto: "Não, prefiro ficar no castelo", proximo: 6 }
    ]
  },

  {
    id: 3,
    image: "img/quarto-secreto.jpg",
    altText: "Um quarto empoeirado com um mapa antigo aberto sobre uma mesa.",
    texto: "Enquanto explora, você encontra um quarto secreto com um mapa antigo. O que faz?",
    opcoes: [
      { texto: "Leva o mapa para o rei", proximo: 2 },
      { texto: "Segue o mapa sozinho", proximo: 7 }
    ]
  },

  {
    id: 4,
    image: "img/taverna.jpg",
    altText: "Uma taverna medieval barulhenta, com um taverneiro limpando um copo.",
    texto: "Na taverna, você ouve rumores de uma traição dentro do castelo.",
    opcoes: [
      { texto: "Investiga discretamente", proximo: 8 },
      { texto: "Ignora e bebe até tarde", proximo: 9 }
    ]
  },

  {
    id: 5,
    image: "img/cavaleiros-partindo.jpg",
    altText: "Cavaleiros cavalgando para fora do castelo ao pôr do sol.",
    texto: "Você parte em direção ao castelo inimigo com seus aliados.",
    opcoes: [
      { texto: "Atacar pela frente", proximo: 10 },
      { texto: "Tentar um ataque surpresa à noite", proximo: 11 }
    ]
  },

  {
    id: 6,
    image: "img/pátio-castelo.jpg",
    altText: "Soldados treinando no pátio do castelo, olhando para você com desdém.",
    texto: "Você fica no castelo e acaba sendo acusado de covardia.",
    final: "Sua honra foi manchada. Fim de sua jornada."
  },

  {
    id: 7,
    image: "img/tesouro.jpg",
    altText: "Um baú aberto cheio de moedas de ouro e artefatos brilhantes.",
    texto: "Seguindo o mapa, você encontra um tesouro escondido e artefatos mágicos!",
    final: "Você se torna um herói rico e poderoso."
  },

  {
    id: 8,
    image: "img/conselheiro-sombrio.jpg",
    altText: "Um conselheiro sussurrando no ouvido do rei enquanto olha para você.",
    texto: "Descobre que um conselheiro do rei planeja traição. Você:",
    opcoes: [
      { texto: "Confronta o traidor", proximo: 12 },
      { texto: "Avisar o rei secretamente", proximo: 5 }
    ]
  },

  {
    id: 9,
    image: "img/taverna-bagunca.jpg",
    altText: "Canecas de cerveja viradas em uma mesa de taverna bagunçada.",
    texto: "Você bebe demais e perde a chance de salvar o reino.",
    final: "O reino cai em ruínas sem sua ajuda.",
    opcoes: []
  },

  {
    id: 10,
    image: "img/masmorra-inimiga.jpg",
    altText: "Mãos agarrando as grades de uma cela de prisão escura.",
    texto: "No ataque frontal, você é capturado pelo inimigo.",
    final: "Prisioneiro do castelo inimigo, seu destino é incerto.",
    opcoes: []
  },

  {
    id: 11,
    image: "img/vitoria-noturna.jpg",
    altText: "Cavaleiros comemorando com tochas em frente a um castelo à noite.",
    texto: "O ataque surpresa funciona e o reino é salvo!",
    final: "Você é celebrado como um herói.",
    opcoes: []
  },
  
  {
    id: 12,
    image: "img/guerra-civil.jpg",
    altText: "Dois exércitos com bandeiras opostas se enfrentando em um campo de batalha.",
    texto: "Você desmascara o traidor, mas isso gera uma guerra civil.",
    final: "O reino se divide, e você deve escolher um lado.",
    opcoes: []
  }
];
