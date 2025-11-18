const storyData = [
    {
        id: 1,
        image: "img/chegada-cidade.jpg",
        altText: "O Impala 67 preto parado em frente a uma placa de 'Bem-vindo a Prosperity' (Prosperidade).",
        texto: "Vocês chegam em Prosperity, Indiana. Uma cidadezinha 'perfeita' demais. O caso? Um músico local, que ganhou fama da noite para o dia, foi 'rasgado por um urso'... no seu quarto de hotel trancado no 3º andar.",
        opcoes: [
            { texto: "Investigar o quarto do hotel (Procurar pistas físicas)", proximo: 2 },
            { texto: "Ir ao bar local (Fingir ser repórter e ouvir fofocas)", proximo: 3 }
        ]
    },

    {
        id: 2,
        image: "img/quarto-enxofre.jpg",
        altText: "Um quarto de hotel revirado, com um pó amarelado (enxofre) no peitoril da janela.",
        texto: "O quarto está destruído. Marcas de garras enormes. Mas o principal é o cheiro... 'Sammy, você tá sentindo isso?' É enxofre. Definitivamente não foi um urso.",
        opcoes: [
            { texto: "Anotar (Pista: Enxofre) e ir ao bar.", proximo: 3, pistas: ["Enxofre (Demônio)"] },
            { texto: "Seguir para a casa da Prefeita (outra 'sortuda' da cidade).", proximo: 4 }
        ]
    },

    {
        id: 3,
        image: "img/bar-local.jpg",
        altText: "Um barman limpando um copo, olhando desconfiado para os caçadores.",
        texto: "No bar, o barman conta que a cidade *inteira* mudou há 10 anos. 'A Prefeita salvou a cidade da falência, o Fazendeiro achou petróleo, e o pobre Johnny virou astro... tudo na mesma semana. Estranho, né?'",
        opcoes: [
            { texto: "Anotar (Pista: Pacto de 10 anos) e ir para o quarto do hotel.", proximo: 2, pistas: ["Pacto de 10 Anos"] },
            { texto: "Perguntar onde fica a Encruzilhada mais próxima.", proximo: 5 }
        ]
    },

    {
        id: 4,
        image: "img/prefeita-assustada.jpg",
        altText: "Uma prefeita nervosa, em uma casa luxuosa, com um grande cão preto no jardim.",
        texto: "A Prefeita está apavorada. Ela nega tudo, mas vocês notam um Cão Negro (Hellhound!) rosnando no jardim. Ela é a próxima da lista. As pistas estão claras: Demônio da Encruzilhada.",
        opcoes: [
            { texto: "Voltar ao motel e preparar o exorcismo.", proximo: 6, pistas: ["Alvo: Prefeita", "Hellhound"] },
            { texto: "Ir direto para a Encruzilhada.", proximo: 5 }
        ]
    },

    {
        id: 5,
        image: "img/encruzilhada-noite.jpg",
        altText: "Uma encruzilhada de terra no meio do nada, com uma caixa de metal enterrada.",
        texto: "Vocês chegam na encruzilhada local e cavam. Bingo. Uma caixa de feitiço com fotos e ossos de gato preto. É aqui que o Demônio faz negócios. Vocês preparam a armadilha. Quem vai invocar?",
        opcoes: [
            { texto: "Sam (o cérebro) invoca.", proximo: 7 },
            { texto: "Dean (a isca) invoca.", proximo: 7 }
        ]
    },

    {
        id: 6,
        image: "img/porta-malas-impala.jpg",
        altText: "O porta-malas do Impala aberto, cheio de sal, água benta e a Faca da Ruby.",
        texto: "De volta ao motel. Vocês têm Água Benta, a Faca da Ruby e o livro de exorcismo. A Prefeita liga, gritando que o 'Cão Negro' está arranhando a porta dela. O Demônio está vindo buscar a alma.",
        opcoes: [
            { texto: "Correr para a casa dela e tentar o exorcismo lá.", proximo: 8 },
            { texto: "Ligar para a Prefeita: 'Vá para a Encruzilhada e renegocie!'", proximo: 5 }
        ]
    },

    {
        id: 7,
        image: "img/demonio-encruzilhada.jpg",
        altText: "Uma mulher bonita de vestido vermelho sorrindo no meio da armadilha do diabo.",
        texto: "Uma mulher de vestido vermelho aparece. 'Olá, rapazes. Belo carro'. Ela está presa na Armadilha do Diabo que vocês pintaram. Ela ri. 'Vocês não podem me exorcizar antes dos Cães pegarem a Prefeita.'",
        opcoes: [
            { texto: "Exorcizar o demônio (Salva a cidade de futuros pactos).", proximo: 9 },
            { texto: "Tentar negociar (Salva a Prefeita, mas o demônio foge).", proximo: 10 }
        ]
    },

    {
        id: 8,
        image: "img/game-over-hellhound.jpg",
        altText: "Visão em primeira pessoa de um Cão do Inferno invisível, mas rosnando, prestes a atacar.",
        texto: "Vocês chegam tarde. A porta está arrebentada. O Demônio (em outro corpo) está lá. 'O prazo acabou'. Os Cães do Inferno invisíveis atacam vocês.",
        final: "Vocês não podem lutar contra o que não podem ver. Fim de jogo.",
        opcoes: []
    },

    {
        id: 9,
        image: "img/exorcismo.jpg",
        altText: "Sam lendo o exorcismo enquanto o demônio grita e fumaça preta sai da boca da mulher.",
        texto: "Vocês começam o exorcismo. O demônio grita. Na cidade, a Prefeita ouve os Cães do Inferno sumindo. Vocês mandaram o demônio de volta, mas...",
        final: "O pacto foi quebrado. A alma da Prefeita está salva, e a cidade está livre do demônio. (Vitória!)",
        opcoes: []
    },

    {
        id: 10,
        image: "img/demonio-acordo.jpg",
        altText: "O demônio sorrindo e oferecendo um aperto de mão.",
        texto: "'Negociar? Adoro. A alma dela... pela sua, Dean.' O demônio oferece um pacto para salvar a Prefeita e seu irmão.",
        final: "Você se recusa. O demônio ri e desaparece. A Prefeita morre. Vocês falharam. (Derrota)",
        opcoes: []
    }
];