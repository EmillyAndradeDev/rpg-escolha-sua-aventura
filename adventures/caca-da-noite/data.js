const storyData = [
    {
        id: 1,
        image: "img/id01-chegada-cidade.png",
        altText: "O Impala 67 preto parado em frente a uma placa de 'Bem-vindo a Willow Creek' sob chuva.",
        texto: "Você e seu irmão chegam em Willow Creek, Oregon, com o Impala roncando baixo na chuva. O celular tocou mais cedo: desaparecimentos. A polícia local está perdida. Onde vocês começam a investigação?",
        opcoes: [
            { texto: "Investigar o necrotério (procurar sinais sobrenaturais)", proximo: 2 },
            { texto: "Ir ao bar local (fingir ser agente do FBI e ouvir fofocas)", proximo: 3 },
            { texto: "Vasculhar a casa da última vítima (procurar pistas)", proximo: 4 }
        ]
    },
    {
        id: 2,
        image: "img/id02-medidor-emf.png",
        altText: "Um corpo coberto por um lençol em uma mesa de metal. O medidor de EMF na sua mão acende.",
        texto: "No necrotério, o legista (com cara de poucos amigos) diz que os corpos sumiram. Você passa o medidor de EMF perto da gaveta vazia... e ele dispara. Ponto para o Sam.",
        opcoes: [
            { texto: "Pressionar o legista sobre atividade fantasma.", proximo: 5 },
            { texto: "Anotar (Pista: Fantasma?) e ir para o bar.", proximo: 3, pistas: ["EMF alto"] }
        ]
    },
    {
        id: 3,
        image: "img/id03-bar-local.png",
        altText: "Um bar de beira de estrada escuro, com um bêbado no balcão.",
        texto: "No bar, o 'Agente Aguilera' (você, no caso) consegue fazer o bêbado local falar. Ele jura ter visto 'olhos totalmente pretos' na última vítima antes dela desaparecer. Ponto para o Dean.",
        opcoes: [
            { texto: "Anotar (Pista: Demônio?) e ir para a casa da vítima.", proximo: 4, pistas: ["Olhos Pretos"] },
            { texto: "Ignorar o bêbado e investigar o necrotério.", proximo: 2 }
        ]
    },
    {
        id: 4,
        image: "img/id04-casa-vitima.png",
        altText: "Caçadores chegando na casa da vítima.",
        texto: "Na casa da última vítima, você encontra o clássico: linha de sal na janela quebrada, mas arranhões fundos na porta, como se algo quisesse entrar. As pistas estão conflitantes.",
        opcoes: [
            { texto: "Anotar (Pistas: Sal e Arranhões) e voltar para o motel.", proximo: 5, pistas: ["Sal derramado", "Arranhões"] },
            { texto: "Seguir para o necrotério para checar os corpos.", proximo: 2 }
        ]
    },
    {
        id: 5,
        image: "img/id05-quarto-motel.png",
        altText: "O interior de um quarto de motel barato, com o notebook aberto em cima da cama.",
        texto: "De volta ao motel. Hora de cruzar as informações. Você abre o notebook e o diário do pai para analisar as pistas. Com base no que você descobriu, que criatura é essa?",
        opcoes: [
            { texto: "Hipótese: Fantasma Vingativo (EMF, Sal)", proximo: 6 },
            { texto: "Hipótese: Demônio de Encruzilhada (Olhos Pretos)", proximo: 7 },
            { texto: "Hipótese: Lobisomem ou outra criatura (Arranhões)", proximo: 8 }
        ]
    },
    {
        id: 6,
        image: "img/porta-malas-impala.png",
        altText: "O porta-malas do Impala aberto, mostrando as armas.",
        texto: "É um fantasma. Clássico. Hora de salgar e queimar. Onde procurar os ossos?",
        opcoes: [
            { texto: "O cemitério local (óbvio).", proximo: 9 },
            { texto: "Debaixo da casa da vítima (sempre tem um porão).", proximo: 10 }
        ]
    },
    {
        id: 7,
        image: "img/porta-malas-impala.png",
        altText: "O porta-malas do Impala aberto, mostrando as armas.",
        texto: "Olhos pretos? É um demônio. 'Son of a...'. Hora do exorcismo. Onde armar a armadilha?",
        opcoes: [
            { texto: "Na encruzilhada fora da cidade.", proximo: 11 },
            { texto: "No necrotério, onde o EMF estava alto.", proximo: 12 }
        ]
    },
    {
        id: 8,
        image: "img/porta-malas-impala.png",
        altText: "O porta-malas do Impala aberto, mostrando as armas.",
        texto: "Arranhões? É 'monstro da semana'. Provavelmente um Lobisomem, já que a lua está cheia. Onde caçar?",
        opcoes: [
            { texto: "Na floresta perto da casa da vítima.", proximo: 13 },
            { texto: "No bar local (eles sempre voltam à cena).", proximo: 14 }
        ]
    },
    {
        id: 9,
        image: "img/id09-cemiterio.png",
        altText: "Um cemitério antigo e enevoado à noite.",
        texto: "Vocês cavam a noite toda. Encontram o caixão errado. O fantasma aparece e ataca seu irmão!",
        final: "Você usou ferro, mas era a isca errada. O fantasma era muito forte. Fim.",
        opcoes: []
    },
    {
        id: 10,
        image: "img/id10-porao.png",
        altText: "Um porão escuro com ossos humanos em um canto.",
        texto: "Bingo! Ossos no porão. Você joga sal e gasolina. 'Carry on, my wayward son...'. O fantasma grita e queima.",
        final: "Fantasma tostado. Caso encerrado. Trabalho feito. (Vitória!)",
        opcoes: []
    },
    {
        id: 11,
        image: "img/id11-encruzilhada.png",
        altText: "Uma encruzilhada de terra batida no meio do nada, à noite.",
        texto: "Vocês desenham uma Armadilha do Diabo na encruzilhada. Um homem de terno aparece. 'Olá, rapazes'.",
        final: "Vocês o prendem e fazem o exorcismo. O demônio volta para o inferno. (Vitória!)",
        opcoes: []
    },
    {
        id: 12,
        image: "img/id12-game-over-demonio-02.png",
        altText: "O demônio (com olhos pretos) joga você contra a parede do necrotério.",
        texto: "Era um demônio, mas o EMF alto era dele brincando com os espíritos. Ele estava esperando por vocês. Ele é forte demais.",
        final: "Vocês caíram na armadilha dele. Fim de jogo.",
        opcoes: []
    },
    {
        id: 13,
        image: "img/lobisomem-floresta.jpg",
        altText: "Um lobisomem rosnando entre as árvores da floresta.",
        texto: "Vocês encontram o lobisomem na floresta. Ele é rápido. Seu irmão atira com a bala de prata e acerta o coração.",
        final: "Monstro morto. Caso encerrado. Hora de pegar cerveja e ir para o próximo. (Vitória!)",
        opcoes: []
    },
    {
        id: 14,
        image: "img/id14-game-over-lobisomem.png",
        altText: "O lobisomem ataca você por trás dentro do bar.",
        texto: "Era um lobisomem, mas ele não estava no bar. Ele estava no telhado, esperando. Ele te ataca por trás.",
        final: "Você devia ter olhado para cima. Fim de jogo.",
        opcoes: []
    }
];