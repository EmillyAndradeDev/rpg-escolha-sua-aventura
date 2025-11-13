const storyData = [
  {
    id: 1,
    image: "img/escola-portoes.jpg",
    altText: "Grandes portões dourados de uma escola de magia em um penhasco.",
    texto: "Você acaba de ser aceito na famosa Escola de Feitiços. No seu primeiro dia, você pode escolher sua casa. Qual você escolhe?",
    opcoes: [
      { texto: "Casa do Dragão (corajoso e destemido)", proximo: 2 },
      { texto: "Casa da Fênix (inteligente e sábio)", proximo: 3 },
      { texto: "Casa do Lobo (leal e determinado)", proximo: 4 }
    ]
  },
  {
    id: 2,
    image: "img/arena-dragao.jpg",
    altText: "Uma arena de pedra com um grande dragão vermelho no centro.",
    texto: "Na Casa do Dragão, seu primeiro desafio é enfrentar um dragão em uma prova de coragem. Você:",
    opcoes: [
      { texto: "Enfrenta o dragão com bravura", proximo: 5 },
      { texto: "Tenta usar magia para acalmar o dragão", proximo: 6 }
    ]
  },
  {
    id: 3,
    image: "img/biblioteca-antiga.jpg",
    altText: "Uma biblioteca vasta com prateleiras que vão até o teto.",
    texto: "Na Casa da Fênix, você deve decifrar um antigo enigma para passar de ano. Você:",
    opcoes: [
      { texto: "Estuda os livros da biblioteca por horas", proximo: 7 },
      { texto: "Pede ajuda aos colegas", proximo: 8 }
    ]
  },
  {
    id: 4,
    image: "img/floresta-escura.jpg",
    altText: "Uma floresta escura e nebulosa com árvores retorcidas.",
    texto: "Na Casa do Lobo, você precisa provar sua lealdade ajudando um colega em apuros. Você:",
    opcoes: [
      { texto: "Vai sozinho enfrentar o perigo", proximo: 9 },
      { texto: "Chama reforços para ajudar", proximo: 10 }
    ]
  },
  {
    id: 5,
    image: "img/dragao-derrotado.jpg",
    altText: "O dragão se curva em respeito a você.",
    texto: "Você enfrenta o dragão e consegue derrotá-lo, ganhando o respeito de todos!",
    final: "Você é um verdadeiro herói da Casa do Dragão!",
    opcoes: []
  },
  {
    id: 6,
    image: "img/dragao-furioso.jpg",
    altText: "O dragão ruge e cospe uma enorme chama.",
    texto: "A magia falha e o dragão fica furioso. Você precisa fugir rápido!",
    opcoes: [
      { texto: "Corre para o salão principal", proximo: 11 },
      { texto: "Se esconde na floresta próxima", proximo: 12 }
    ]
  },
  {
    id: 7,
    image: "img/enigma-resolvido.jpg",
    altText: "Um pergaminho brilhando em cima de uma mesa de estudo.",
    texto: "Você resolve o enigma e se destaca como um dos melhores estudantes da Casa da Fênix!",
    final: "Sua sabedoria é admirada por todos.",
    opcoes: []
  },
  {
    id: 8,
    image: "img/falha.jpg",
    altText: "Um professor balançando a cabeça em desaprovação.",
    texto: "Seus colegas te traem e você falha na prova. Precisa tentar de novo no próximo ano.",
    final: "Não deveria confiar tanto nas pessoas erradas.",
    opcoes: []
  },
  {
    id: 9,
    image: "img/cercado.jpg",
    altText: "Sombras com olhos brilhantes cercando você na floresta.",
    texto: "Você enfrenta o perigo sozinho, mas é cercado e precisa ser resgatado.",
    final: "A coragem é importante, mas saber quando pedir ajuda também.",
    opcoes: []
  },
  {
    id: 10,
    image: "img/amigos-salvos.jpg",
    altText: "Você e seus colegas comemorando a vitória juntos.",
    texto: "Com os reforços, você salva seu colega e fortalece seus laços de amizade.",
    final: "Lealdade e trabalho em equipe são sua marca.",
    opcoes: []
  },
  {
    id: 11,
    image: "img/diretor.jpg",
    altText: "Um diretor sábio de barba longa te olhando com seriedade.",
    texto: "No salão principal, você encontra o diretor que te oferece uma segunda chance na prova.",
    opcoes: [
      { texto: "Aceita a chance e se dedica mais", proximo: 7 },
      { texto: "Desiste e abandona a escola", proximo: 13 }
    ]
  },
  {
    id: 12,
    image: "img/criaturas-magicas.jpg",
    altText: "Pequenas fadas e gnomos te guiando pela floresta.",
    texto: "Na floresta, você encontra criaturas mágicas que te ajudam a fugir do dragão.",
    final: "Você ganhou amigos poderosos na natureza.",
    opcoes: []
  },
  {
    id: 13,
    image: "img/estrada-sozinho.jpg",
    altText: "Você andando sozinho em uma estrada com uma mochila.",
    texto: "Você abandona a escola e segue seu caminho sozinho, com muitas histórias para contar.",
    final: "Nem todo mago segue o mesmo caminho.",
    opcoes: []
  },
  {
    id: 14,
    image: "img/dragao-presente.jpg",
    altText: "O dragão abaixa a cabeça e oferece uma escama brilhante.",
    texto: "Depois de ganhar o respeito do dragão, ele oferece um presente mágico. Você aceita?",
    opcoes: [
      { texto: "Sim, aceito o presente com gratidão", proximo: 15 },
      { texto: "Não, prefiro seguir sozinho", proximo: 16 }
    ]
  },
  {
    id: 15,
    image: "img/pedra-magica.jpg",
    altText: "Uma pedra brilhante flutuando na sua mão.",
    texto: "O presente é uma pedra que amplifica sua magia. Agora você pode tentar um feitiço avançado. Qual escolhe?",
    opcoes: [
      { texto: "Feitiço de invisibilidade", proximo: 17 },
      { texto: "Feitiço de teletransporte", proximo: 18 }
    ]
  },
  {
    id: 16,
    image: "img/aula-defesa.jpg",
    altText: "Uma sala de aula com manequins de treino para defesa.",
    texto: "Você continua sua jornada com determinação e aprende com os erros. Sua próxima aula é de Defesa contra Magia Negra.",
    opcoes: [
      { texto: "Estudar com afinco", proximo: 19 },
      { texto: "Buscar ajuda dos professores", proximo: 20 }
    ]
  },
  {
    id: 17,
    image: "img/invisivel.jpg",
    altText: "Seus amigos olhando confusos para onde você estava.",
    texto: "O feitiço funciona perfeitamente e você consegue se esconder dos professores para fazer uma surpresa a seus amigos.",
    final: "Você é mestre da furtividade!",
    opcoes: []
  },
  {
    id: 18,
    image: "img/livro-antigo.jpg",
    altText: "Um livro mágico brilhante em um pedestal na biblioteca.",
    texto: "Você teletransporta para a biblioteca, onde encontra um livro antigo cheio de segredos mágicos.",
    final: "Conhecimento é o maior poder.",
    opcoes: []
  },
  {
    id: 19,
    image: "img/vitoria-magia.jpg",
    altText: "Você lançando um feitiço de luz contra uma criatura sombria.",
    texto: "Estudar bastante te ajuda a derrotar um inimigo sombrio que aparece na escola!",
    final: "Você é um verdadeiro protetor da Escola de Feitiços.",
    opcoes: []
  },
  {
    id: 20,
    image: "img/varinha-especial.jpg",
    altText: "Um professor te entregando uma varinha de madeira clara e brilhante.",
    texto: "Os professores ficam impressionados com sua humildade ao pedir ajuda e te recompensam com uma varinha especial.",
    final: "Sua magia só tende a crescer.",
    opcoes: []
  }
];
