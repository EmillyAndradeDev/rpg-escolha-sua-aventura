const historia = [
    {
        id: 1,
        texto: "Um circo misterioso chega à cidade. Você decide entrar na tenda principal, iluminada apenas por tochas. O apresentador, com um sorriso estranho, anuncia que o espetáculo vai começar. O que você faz?",
        opcoes: [
            { texto: "Sentar-se para assistir", proximo: 2 },
            { texto: "Explorar os bastidores", proximo: 3 }
        ]
    },

    {
        id: 2,
        texto: "O espetáculo começa com um mágico que tira lenços infinitos da cartola. Mas logo os lenços se transformam em serpentes vivas!",
        opcoes: [
            { texto: "Correr para a saída", proximo: 4 },
            { texto: "Enfrentar as serpentes", proximo: 5 }
        ]
    },

    {
        id: 3,
        texto: "Nos bastidores, você encontra gaiolas cobertas com panos. Algo se mexe lá dentro.",
        opcoes: [
            { texto: "Abrir uma das gaiolas", proximo: 6 },
            { texto: "Ignorar e continuar explorando", proximo: 7 }
        ]
    },

    {
        id: 4,
        texto: "A saída está bloqueada por um palhaço gigante que gargalha sem parar.",
        opcoes: [
            { texto: "Enfrentar o palhaço", proximo: 8 },
            { texto: "Procurar outra saída", proximo: 9 }
        ]
    },

    {
        id: 5,
        texto: "Você pisa nas serpentes, mas elas se multiplicam. Elas sobem pelas suas pernas até que você não consegue mais se mover. Fim.",
        opcoes: []
    },

    {
        id: 6,
        texto: "Dentro da gaiola há uma criança assustada que pede sua ajuda.",
        opcoes: [
            { texto: "Libertar a criança", proximo: 10 },
            { texto: "Deixar a criança e fugir", proximo: 7 }
        ]
    },

    {
        id: 7,
        texto: "Você encontra um corredor escuro que leva até uma sala de espelhos infinitos.",
        opcoes: [
            { texto: "Entrar na sala de espelhos", proximo: 11 },
            { texto: "Voltar para a tenda principal", proximo: 2 }
        ]
    },

    {
        id: 8,
        texto: "Você enfrenta o palhaço, mas ele é mais forte do que parece. Ele te prende em uma caixa mágica. Fim.",
        opcoes: []
    },

    {
        id: 9,
        texto: "Você encontra uma cortina escondida que leva para fora do circo. Você escapa! Sobreviveu... desta vez.",
        opcoes: []
    },

    {
        id: 10,
        texto: "Ao libertar a criança, ela se transforma em uma criatura sombria e avança sobre você. Fim.",
        opcoes: []
    },

    {
        id: 11,
        texto: "Na sala de espelhos, seu reflexo começa a se mover sozinho. Um deles sai do espelho e sorri para você.",
        opcoes: [
            { texto: "Fugir da sala", proximo: 9 },
            { texto: "Enfrentar seu reflexo", proximo: 12 }
        ]
    },

    {
        id: 12,
        texto: "Você luta contra seu reflexo e, depois de uma batalha intensa, consegue destruí-lo. O espelho se quebra, revelando uma passagem secreta para fora. Você sobrevive! Parabéns.",
        opcoes: []
    }
];
