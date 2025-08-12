// Narrativa estilo "escolha seu destino" com pistas embutidas nas opções.
// As opções podem adicionar pistas (pistas: ['nome']) que o jogador coleciona no estado.
const historia = [
  {
    id: 1,
    texto: "Você e seu parceiro estão na estrada quando o celular toca: desaparecimentos em Willow Creek. Chegando lá, a polícia está perdida. Onde você começa a investigação?",
    opcoes: [
      { texto: "Investigar o motel abandonado (cheiro estranho)", proximo: 2, pistas: ["cheiro estranho"] },
      { texto: "Perguntar no bar local (testemunhas)", proximo: 3, pistas: ["testemunha da taverna"] },
      { texto: "Vasculhar a floresta próxima (pegadas e manchas)", proximo: 4, pistas: ["pegadas", "mancha de sangue"] }
    ]
  },

  {
    id: 2,
    texto: "No motel você encontra quartos revirados e marcas de frio intenso, como se algo tivesse sugado calor. Um frasco com cristais quebrados no chão chama atenção.",
    opcoes: [
      { texto: "Levar um cristal (pegar evidência)", proximo: 5, pistas: ["cristal"] },
      { texto: "Anotar o padrão de marcas e voltar", proximo: 6 }
    ]
  },

  {
    id: 3,
    texto: "No bar, um bêbado jura ter visto alguém com olhos brilhantes e fala de uma criatura que se alimenta à noite após morder. Ele também menciona um som uivante na floresta.",
    opcoes: [
      { texto: "Anotar o depoimento (útil depois)", proximo: 6, pistas: ["depoimento: olhos brilhantes"] },
      { texto: "Pagar o homem e perguntar mais detalhes", proximo: 7, pistas: ["nome do suspeito"] }
    ]
  },

  {
    id: 4,
    texto: "Na floresta você acha pegadas que alternam entre patas e passos humanos, próximo a elas, um colar com cabelo preso (pelos).",
    opcoes: [
      { texto: "Pegar o colar como prova", proximo: 5, pistas: ["pelos"] },
      { texto: "Medir as pegadas e retornar", proximo: 6, pistas: ["medida das pegadas"] }
    ]
  },

  {
    id: 5,
    texto: "Você guardou a evidência no porta-malas. As pistas começando a formar um padrão, mas ainda falta confirmar a criatura. Próximo passo?",
    opcoes: [
      { texto: "Analisar as pistas no carro com equipamentos", proximo: 8 },
      { texto: "Ir até a casa da última vítima para procurar mais sinais", proximo: 9 }
    ]
  },

  {
    id: 6,
    texto: "Você reuniu algumas informações iniciais. Hora de decidir a linha de investigação principal.",
    opcoes: [
      { texto: "Focar em provas físicas (floresta/motel)", proximo: 4 },
      { texto: "Focar em entrevistas e rumores (bar/pessoas)", proximo: 3 },
      { texto: "Ir direto ao local onde a última vítima foi vista (rua principal)", proximo: 10 }
    ]
  },

  {
    id: 7,
    texto: "O bêbado entrega um nome: 'O Ferreiro', alguém que mora fora da cidade. Ele também desenha um símbolo estranho. Isso te dá um novo rumo.",
    opcoes: [
      { texto: "Seguir até a casa do Ferreiro", proximo: 11, pistas: ["nome do ferreiro", "símbolo"] },
      { texto: "Voltar ao carro e analisar as provas", proximo: 8 }
    ]
  },

  {
    id: 8,
    texto: "No carro, você usa o kit e analisa as amostras:\n- Cristal: resíduos místicos.\n- Pelos: composição incomum (metálica).\n- Testemunho: fala de mordidas e olhos brilhantes.\nCom isso em mãos, qual hipótese você prefere testar?",
    opcoes: [
      { texto: "Hipótese: vampiro/demônio (magia + sangue)", proximo: 12 },
      { texto: "Hipótese: lobisomem/fera (pelos, uivos)", proximo: 13 },
      { texto: "Hipótese: espírito/assombração (frio, cristais)", proximo: 14 }
    ]
  },

  {
    id: 9,
    texto: "Na casa da vítima você encontra arranhões nas paredes e símbolos riscados. Há vestígios de sangue e um bilhete com referências a luas.",
    opcoes: [
      { texto: "Levar o bilhete e prosseguir à biblioteca da cidade para pesquisar", proximo: 8, pistas: ["bilhete com referências a luas"] },
      { texto: "Tentar seguir pegadas saindo pela janela", proximo: 4 }
    ]
  },

  {
    id: 10,
    texto: "Na rua principal, moradores se trancaram; uma velha senhora te mostra uma foto com um homem que sempre aparece perto das vítimas.",
    opcoes: [
      { texto: "Investigar o homem da foto (possível suspeito)", proximo: 11, pistas: ["foto do homem"] },
      { texto: "Coletar relatos e voltar ao carro", proximo: 6 }
    ]
  },

  // identificação e escolha de arma (nós que levam ao confronto)
  {
    id: 11,
    texto: "Chegando à casa do Ferreiro, você nota ferramentas quebradas e marcas de garras. O local fede a metal queimado.",
    opcoes: [
      { texto: "Entrar silenciosamente e observar", proximo: 15 },
      { texto: "Arrombar a porta e confrontar", proximo: 16 }
    ]
  },

  {
    id: 12,
    texto: "Você decide que a criatura é possivelmente um vampiro/demônio. Hora de se armar. Qual equipamento você escolhe?",
    opcoes: [
      { texto: "Estaca de madeira + alho", proximo: 17, arma: "estaca" },
      { texto: "Ritual com os cristais (magia)", proximo: 18, arma: "ritual" },
      { texto: "Arma de fogo comum", proximo: 19, arma: "arma" }
    ]
  },

  {
    id: 13,
    texto: "Você aposta na hipótese de lobisomem. Escolha sua abordagem:",
    opcoes: [
      { texto: "Bala de prata e armadilha", proximo: 20, arma: "prata" },
      { texto: "Isolar e esperar a lua cheia passar", proximo: 21, arma: "isolamento" },
      { texto: "Atacar com fogo", proximo: 22, arma: "fogo" }
    ]
  },

  {
    id: 14,
    texto: "Hipótese: assombração/espírito. Você precisa de proteção espiritual. O que faz?",
    opcoes: [
      { texto: "Ritual de banimento com cristais", proximo: 18, arma: "ritual" },
      { texto: "Invocar um padre/caçador experiente", proximo: 23, arma: "aliado" },
      { texto: "Fugir e chamar reforços", proximo: 6, arma: "fugir" }
    ]
  },

  // confrontos / resultados
  {
    id: 15,
    texto: "Você observa no canto uma sombra grande movendo-se, há olhos brilhantes. Hora do confronto!",
    opcoes: [
      { texto: "Voltar ao carro para pegar equipamentos", proximo: 8 },
      { texto: "Preparar um ataque surpresa aqui mesmo", proximo: 24 }
    ]
  },

  {
    id: 16,
    texto: "Ao arrombar, o Ferreiro se revela: é uma criatura feral com pedaços de metal cravados na pele. Ele investe contra você.",
    opcoes: [
      { texto: "Recuar e formular plano", proximo: 8 },
      { texto: "Enfrentar sem pensar duas vezes", proximo: 24 }
    ]
  },

  // finais relacionados à vampiro/demônio
  {
    id: 17,
    texto: "Você tenta matar com estaca + alho. O ser reage violentamente.",
    final: "Se a criatura fosse vampírica, você pode ter tido sucesso, mas sem confirmação, acabou atraindo uma horda. Fim trágico."
  },

  {
    id: 18,
    texto: "Você realiza o ritual com os cristais. Uma onda de energia banidora ilumina o local.",
    final: "O ritual funciona: a entidade é selada. Fim. Caso encerrado!."
  },

  {
    id: 19,
    texto: "A bala comum não surte efeito e apenas enfurece a criatura.",
    final: "Armas comuns servem para ferir humanos, não entidades. Você foi derrotado."
  },

  // finais relacionados a lobisomem
  {
    id: 20,
    texto: "Você usa bala de prata e acerta em cheio.",
    final: "O lobisomem cai. Vocês salvaram Willow Creek. Final heróico."
  },

  {
    id: 21,
    texto: "Isolamento falhou: a comunidade já estava no perigo e a criatura atacou à noite.",
    final: "Você não conseguiu conter a ameaça a tempo. Final trágico."
  },

  {
    id: 22,
    texto: "O fogo afasta a criatura por um tempo, mas acaba incendiando a oficina. Vítimas civis aparecem.",
    final: "Você sobrevive, mas com pesadas consequências. Final amargo."
  },

  // aliados / finais alternativos
  {
    id: 23,
    texto: "O caçador experiente chega e, junto com você, realiza um banimento ou emboscada.",
    final: "Com ajuda, vocês neutralizam a ameaça com menos perdas. Final de equipe."
  },
  
  {
    id: 24,
    texto: "No confronto direto sem preparo, tudo pode acontecer. Você foi pego de surpresa.",
    final: "Confronto precipitado: você caiu. Fim."
  }
];
