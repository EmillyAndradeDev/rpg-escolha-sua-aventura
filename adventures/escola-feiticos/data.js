const historia = [
  {
    id: 1,
    texto: "Você acaba de ser aceito na famosa Escola de Feitiços. No seu primeiro dia, você pode escolher sua casa. Qual você escolhe?",
    opcoes: [
      { texto: "Casa do Dragão (corajoso e destemido)", proximo: 2 },
      { texto: "Casa da Fênix (inteligente e sábio)", proximo: 3 },
      { texto: "Casa do Lobo (leal e determinado)", proximo: 4 }
    ]
  },
  {
    id: 2,
    texto: "Na Casa do Dragão, seu primeiro desafio é enfrentar um dragão em uma prova de coragem. Você:",
    opcoes: [
      { texto: "Enfrenta o dragão com bravura", proximo: 5 },
      { texto: "Tenta usar magia para acalmar o dragão", proximo: 6 }
    ]
  },
  {
    id: 3,
    texto: "Na Casa da Fênix, você deve decifrar um antigo enigma para passar de ano. Você:",
    opcoes: [
      { texto: "Estuda os livros da biblioteca por horas", proximo: 7 },
      { texto: "Pede ajuda aos colegas", proximo: 8 }
    ]
  },
  {
    id: 4,
    texto: "Na Casa do Lobo, você precisa provar sua lealdade ajudando um colega em apuros. Você:",
    opcoes: [
      { texto: "Vai sozinho enfrentar o perigo", proximo: 9 },
      { texto: "Chama reforços para ajudar", proximo: 10 }
    ]
  },
  {
    id: 5,
    texto: "Você enfrenta o dragão e consegue derrotá-lo, ganhando o respeito de todos!",
    final: "Você é um verdadeiro herói da Casa do Dragão!"
  },
  {
    id: 6,
    texto: "A magia falha e o dragão fica furioso. Você precisa fugir rápido!",
    opcoes: [
      { texto: "Corre para o salão principal", proximo: 11 },
      { texto: "Se esconde na floresta próxima", proximo: 12 }
    ]
  },
  {
    id: 7,
    texto: "Você resolve o enigma e se destaca como um dos melhores estudantes da Casa da Fênix!",
    final: "Sua sabedoria é admirada por todos."
  },
  {
    id: 8,
    texto: "Seus colegas te traem e você falha na prova. Precisa tentar de novo no próximo ano.",
    final: "Não deveria confiar tanto nas pessoas erradas."
  },
  {
    id: 9,
    texto: "Você enfrenta o perigo sozinho, mas é cercado e precisa ser resgatado.",
    final: "A coragem é importante, mas saber quando pedir ajuda também."
  },
  {
    id: 10,
    texto: "Com os reforços, você salva seu colega e fortalece seus laços de amizade.",
    final: "Lealdade e trabalho em equipe são sua marca."
  },
  {
    id: 11,
    texto: "No salão principal, você encontra o diretor que te oferece uma segunda chance na prova.",
    opcoes: [
      { texto: "Aceita a chance e se dedica mais", proximo: 7 },
      { texto: "Desiste e abandona a escola", proximo: 13 }
    ]
  },
  {
    id: 12,
    texto: "Na floresta, você encontra criaturas mágicas que te ajudam a fugir do dragão.",
    final: "Você ganhou amigos poderosos na natureza."
  },
  {
    id: 13,
    texto: "Você abandona a escola e segue seu caminho sozinho, com muitas histórias para contar.",
    final: "Nem todo mago segue o mesmo caminho."
  }
];
