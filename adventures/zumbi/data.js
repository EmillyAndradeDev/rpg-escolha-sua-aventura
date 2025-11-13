const storyData = [
    {
        id: 1,
        image: "img/lab-corredor.jpg",
        altText: "Um corredor de laboratório escuro e abandonado",
        texto: "Você acorda em um laboratório abandonado. O som de passos arrastados ecoa no corredor. O que você faz?",
        opcoes: [
            { texto: "Investigar o som", proximo: 2 },
            { texto: "Sair pela porta dos fundos", proximo: 3 }
        ]
    },

    {
        id: 2,
        image: "img/zumbi-comendo.jpg",
        altText: "Um zumbi agachado no corredor, mastigando algo",
        texto: "Você se aproxima e vê um zumbi mastigando algo. Ele ainda não percebeu você.",
        opcoes: [
            { texto: "Atacar com um pedaço de ferro", proximo: 4 },
            { texto: "Tentar se esconder", proximo: 5 }
        ]
    },

    {
        id: 3,
        image: "img/janela-quebrada.jpg",
        altText: "Uma janela de escritório quebrada dando para um beco",
        texto: "A porta dos fundos está trancada, mas há uma janela quebrada.",
        opcoes: [
            { texto: "Pular pela janela", proximo: 6 },
            { texto: "Voltar e enfrentar o que estiver no corredor", proximo: 2 }
        ]
    },

    {
        id: 4,
        image: "img/zumbi-ataque.jpg",
        altText: "O zumbi se virando para atacar",
        texto: "Você acerta o zumbi, mas ele ainda está de pé!",
        opcoes: [
            { texto: "Continuar atacando", proximo: 7 },
            { texto: "Correr para a sala ao lado", proximo: 8 }
        ]
    },

    {
        id: 5,
        image: "img/armario.jpg",
        altText: "Uma fresta de um armário de metal",
        texto: "Você se esconde atrás de um armário, mas o zumbi sente seu cheiro...",
        opcoes: [
            { texto: "Ficar imóvel e torcer", proximo: 9 },
            { texto: "Sair correndo", proximo: 8 }
        ]
    },

    {
        id: 6,
        image: "img/horda.jpg",
        altText: "Uma rua cheia de zumbis andando",
        texto: "Você escapa para a rua, mas vê uma horda vindo em sua direção.",
        opcoes: [
            { texto: "Correr para o carro mais próximo", proximo: 10 },
            { texto: "Entrar em um beco", proximo: 11 }
        ]
    },

    {
        id: 7,
        image: "img/zumbi-caido.jpg",
        altText: "O zumbi caído no chão, mas mais barulhos são ouvidos",
        texto: "O zumbi cai no chão. Você respira aliviado, mas ouve mais passos...",
        opcoes: [
            { texto: "Se preparar para lutar novamente", proximo: 12 },
            { texto: "Fugir antes que seja tarde", proximo: 6 }
        ]
    },

    {
        id: 8,
        image: "img/mochila.jpg",
        altText: "Uma mochila de suprimentos jogada em um canto de uma sala",
        texto: "Na sala ao lado, você encontra uma mochila com suprimentos.",
        opcoes: [
            { texto: "Pegar a mochila e fugir", proximo: 6 },
            { texto: "Procurar mais coisas", proximo: 13 }
        ]
    },

    {
        id: 9,
        image: "img/game-over-armario.jpg",
        altText: "A porta do armário se abrindo e revelando um zumbi",
        texto: "O zumbi abre o armário e te encontra... Fim de jogo!",
        opcoes: []
    },

    {
        id: 10,
        image: "img/carro.jpg",
        altText: "As chaves do carro no painel, com zumbis batendo no vidro",
        texto: "Você entra no carro e encontra as chaves no painel. Ao ligar, o barulho atrai ainda mais zumbis...",
        opcoes: [
            { texto: "Acelerar e atropelar tudo", proximo: 14 },
            { texto: "Abandonar o carro e fugir a pé", proximo: 11 }
        ]
    },

    {
        id: 11,
        image: "img/beco-portao.jpg",
        altText: "Um beco sem saída com um portão de ferro trancado",
        texto: "No beco, você encontra um portão trancado e um cano enferrujado.",
        opcoes: [
            { texto: "Tentar escalar o portão", proximo: 15 },
            { texto: "Usar o cano para abrir", proximo: 16 }
        ]
    },

    {
        id: 12,
        image: "img/game-over-horda.jpg",
        altText: "Muitos zumbis te cercando",
        texto: "Você luta bravamente, mas a quantidade de zumbis é grande demais. Você é devorado. Fim.",
        opcoes: []
    },

    {
        id: 13,
        image: "img/game-over-teto.jpg",
        altText: "Um zumbi caindo do teto em cima de você",
        texto: "Enquanto procura, um zumbi cai do teto e te ataca. Você não sobrevive. Fim.",
        opcoes: []
    },

    {
        id: 14,
        image: "img/estrada-livre.jpg",
        altText: "Uma estrada vazia ao pôr do sol, vista de dentro de um carro",
        texto: "Você atropela a horda e segue para fora da cidade. Sobrevive... por enquanto. Parabéns!",
        opcoes: []
    },

    {
        id: 15,
        image: "img/vitoria-portao.jpg",
        altText: "A visão do topo de um portão, com uma rua segura do outro lado",
        texto: "Você escala o portão e escapa para uma área segura. Parabéns, você sobreviveu dessa vez!",
        opcoes: []
    },

    {
        id: 16,
        image: "img/game-over-portao.jpg",
        altText: "Zumbis te agarrando enquanto você tenta abrir um portão",
        texto: "O barulho ao tentar abrir o portão atrai zumbis. Você não consegue escapar. Fim.",
        opcoes: []
    }
];