const historia = [
  {
    id: 1,
    texto: "Você é um jovem cavaleiro chegando ao castelo do rei. O que você faz primeiro?",
    opcoes: [
      { texto: "Visitar o rei para receber missão", proximo: 2 },
      { texto: "Explorar o castelo por conta própria", proximo: 3 },
      { texto: "Ir até a taverna para ouvir fofocas", proximo: 4 }
    ]
  },

  {
    id: 2,
    texto: "O rei pede que você recupere uma relíquia roubada pelo exército inimigo. Aceita a missão?",
    opcoes: [
      { texto: "Sim, pronto para a aventura!", proximo: 5 },
      { texto: "Não, prefiro ficar no castelo", proximo: 6 }
    ]
  },

  {
    id: 3,
    texto: "Enquanto explora, você encontra um quarto secreto com um mapa antigo. O que faz?",
    opcoes: [
      { texto: "Leva o mapa para o rei", proximo: 2 },
      { texto: "Segue o mapa sozinho", proximo: 7 }
    ]
  },

  {
    id: 4,
    texto: "Na taverna, você ouve rumores de uma traição dentro do castelo.",
    opcoes: [
      { texto: "Investiga discretamente", proximo: 8 },
      { texto: "Ignora e bebe até tarde", proximo: 9 }
    ]
  },

  {
    id: 5,
    texto: "Você parte em direção ao castelo inimigo com seus aliados.",
    opcoes: [
      { texto: "Atacar pela frente", proximo: 10 },
      { texto: "Tentar um ataque surpresa à noite", proximo: 11 }
    ]
  },

  {
    id: 6,
    texto: "Você fica no castelo e acaba sendo acusado de covardia.",
    final: "Sua honra foi manchada. Fim de sua jornada."
  },

  {
    id: 7,
    texto: "Seguindo o mapa, você encontra um tesouro escondido e artefatos mágicos!",
    final: "Você se torna um herói rico e poderoso."
  },

  {
    id: 8,
    texto: "Descobre que um conselheiro do rei planeja traição. Você:",
    opcoes: [
      { texto: "Confronta o traidor", proximo: 12 },
      { texto: "Avisar o rei secretamente", proximo: 5 }
    ]
  },

  {
    id: 9,
    texto: "Você bebe demais e perde a chance de salvar o reino.",
    final: "O reino cai em ruínas sem sua ajuda."
  },

  {
    id: 10,
    texto: "No ataque frontal, você é capturado pelo inimigo.",
    final: "Prisioneiro do castelo inimigo, seu destino é incerto."
  },

  {
    id: 11,
    texto: "O ataque surpresa funciona e o reino é salvo!",
    final: "Você é celebrado como um herói."
  },
  
  {
    id: 12,
    texto: "Você desmascara o traidor, mas isso gera uma guerra civil.",
    final: "O reino se divide, e você deve escolher um lado."
  }
];
