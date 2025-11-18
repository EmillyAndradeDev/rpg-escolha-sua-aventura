const storyData = [
    {
        id: 1,
        image: "img/id01-chegada-02.png",
        altText: "o 'Guia' do bairro te recebendo",
        texto: "Você acorda em um lugar ensolarado e acolhedor, um 'bairro' governado por arquétipos de bondade. Um ser chamado 'Guia' te cumprimenta e explica: sua chegada depende de suas ações. O que você faz primeiro?",
        opcoes: [
            { texto: "Ajudar um vizinho com suas compras (pequena gentileza)", proximo: 2, pontos: 3 },
            { texto: "Explorar a cidade e ignorar os vizinhos", proximo: 3, pontos: 0 },
            { texto: "Procurar por pistas sobre como funciona esse lugar", proximo: 4, pontos: 0 }
        ]
    },

    {
        id: 2,
        image: "img/id02-cha-da-tarde-02.png",
        altText: "Um vizinho sorridente te oferecendo uma xícara de chá em um jardim florido.",
        texto: "O vizinho agradece com sinceridade e te convida para o chá da tarde. Você:",
        opcoes: [
            { texto: "Aceita e conversa sinceramente", proximo: 5, pontos: 2, flag: "conversa sincera" },
            { texto: "Recusa e diz estar ocupado", proximo: 3, pontos: -1 }
        ]
    },

    {
        id: 3,
        image: "img/id03-loja-envelope-02.png",
        altText: "Um envelope cheio de dinheiro caído no chão de uma loja de frozen yogurt.",
        texto: "Ao explorar, encontra uma loja onde um funcionário deixou um envelope com dinheiro cair. Ninguém percebe. O que você faz?",
        opcoes: [
            { texto: "Pegar e devolver ao caixa", proximo: 5, pontos: 4 },
            { texto: "Fingir que nada viu e seguir", proximo: 6, pontos: -3 }
        ]
    },

    {
        id: 4,
        image: "img/id04-anotacoes-secretas-02.png",
        altText: "Um caderno aberto com anotações e diagramas confusos sobre o 'sistema'.",
        texto: "Você encontra anotações que sugerem que nem tudo é tão perfeito, algumas 'falhas' no sistema parecem intencionais. Você:",
        opcoes: [
            { texto: "Compartilha isso com o Guia (honestidade)", proximo: 5, pontos: 2, flag: "compartilhou pistas" },
            { texto: "Esconde as anotações; pode ser vantagem", proximo: 6, pontos: -2 }
        ]
    },

    {
        id: 5,
        image: "img/id05-dilema-moral.png",
        altText: "Algumas pessoas em um jardim, uma parecendo preocupadas.",
        texto: "No chá, a conversa vira sobre moralidade e um dilema é apresentado: salvar uma vida a custo de mentir para um amigo. Você:",
        opcoes: [
            { texto: "Salvar a vida; mente para proteger (consequência utilitarista)", proximo: 7, pontos: 1, flag: "mentira protetora" },
            { texto: "Diz a verdade, mesmo que custe a vida", proximo: 7, pontos: 2, flag: "verdade absoluta" },
            { texto: "Tenta encontrar uma terceira via", proximo: 8, pontos: 3, flag: "terceira via" }
        ]
    },

    {
        id: 6,
        image: "img/id06-tremor-02.png",
        altText: "Uma xícara de chá vibrando em uma mesa, com o líquido tremendo.",
        texto: "Você começa a sentir que suas escolhas têm reflexo imediato na paisagem: pequenos tremores, mudanças sutis. Um morador pergunta por sua opinião sobre justiça. O que responde?",
        opcoes: [
            { texto: "Justiça é retribuição, punição para errados", proximo: 9, pontos: -1 },
            { texto: "Justiça é reparar danos e restaurar relações", proximo: 9, pontos: 2 }
        ]
    },

    {
        id: 7,
        image: "img/id07-visitante-misterioso.png",
        altText: "Um homem de terno elegante te observando de longe, por trás de uma árvore.",
        texto: "Suas ações no dilema chamaram atenção: um visitante misterioso observa. Ele te oferece um teste final no fim do dia, uma avaliação que pode determinar o seu destino. Você aceita o teste?",
        opcoes: [
            { texto: "Aceito o teste de avaliação", proximo: 10 },
            { texto: "Recuso; prefiro viver o dia sem ser julgado", proximo: 11 }
        ]
    },

    {
        id: 8,
        image: "img/id08-solucao-criativa.png",
        altText: "Um grupo de pessoas sorrindo e trabalhando juntas em um projeto comunitário.",
        texto: "Ao procurar uma terceira via, você encontra uma solução criativa que ajuda todos sem mentiras e inspira outros moradores.",
        opcoes: [
            { texto: "Compartilha a solução e ganha aliados", proximo: 12, pontos: 3, flag: "solução criativa" },
            { texto: "Guarda a ideia para si (vantagem pessoal)", proximo: 6, pontos: -2 }
        ]
    },

    {
        id: 9,
        image: "img/id09-jantar-filosofico.png",
        altText: "Uma longa mesa de jantar com pessoas debatendo alegremente.",
        texto: "Sua resposta provoca um debate, alguns te elogiam, outros questionam. À noite, você recebe um convite para um jantar filosófico.",
        opcoes: [
            { texto: "Participa do jantar", proximo: 12, pontos: 1 },
            { texto: "Recusa e vai dormir", proximo: 11, pontos: 0 }
        ]
    },

    {
        id: 10,
        image: "img/id10-sala-teste.png",
        altText: "Uma sala branca e estéril com duas portas, uma vermelha e uma azul.",
        texto: "O teste de avaliação é uma sala com registros das suas escolhas passadas e um enigma moral que exige ação imediata: salvar um estranho da morte iminente ou garantir a segurança de vários conhecidos (que não estão em perigo imediato). Você:",
        opcoes: [
            { texto: "Salva o estranho (valor individual)", proximo: 20, pontos: 1, flag: "salvou estranho" },
            { texto: "Protege o grupo (valor coletivo)", proximo: "julgamento", pontos: 2, flag: "protegeu grupo" },
            { texto: "Recusa participar e questiona o sistema", proximo: "julgamento", pontos: 0, flag: "questionou o sistema" }
        ]
    },

    {
        id: 11,
        image: "img/id11-guia-julgamento-02.png",
        altText: "O Guia te olhando com uma expressão neutra, segurando uma prancheta.",
        texto: "Você evita o teste, prefere ações cotidianas. Ao final do dia, o Guia aparece e diz que suas escolhas serão consideradas de qualquer forma.",
        opcoes: [
            { texto: "Voltar ao centro para ouvir o veredito", proximo: "julgamento" },
            { texto: "Fugir para o 'Médio Lugar' e viver no anonimato", proximo: 13, pontos: 0 }
        ]
    },

    {
        id: 12,
        image: "img/id12-grupo-sabotador.png",
        altText: "Um grupo de pessoas cochichando em um canto escuro de uma cafeteria.",
        texto: "Enquanto isso, um rumor corre: há um grupo que tenta sabotar o sistema 'perfeito' para testar quem é realmente bom. Você se aproxima para investigar.",
        opcoes: [
            { texto: "Infiltra-se no grupo e descobre suas motivações", proximo: 14, pontos: 0, flag: "infiltrou" },
            { texto: "Denuncia o grupo ao Guia", proximo: 10, pontos: 1 }
        ]
    },

    {
        id: 13,
        image: "img/id13-medio-lugar.png",
        altText: "Um escritório bege e sem graça, com uma luz fluorescente.",
        texto: "Você escolheu o anonimato. O 'Médio Lugar' é confortável, mas falta sentido às suas ações. Alguns dias depois, um chamado: reavaliação possível. Quer tentar novamente?",
        opcoes: [
            { texto: "Tentar reavaliar (volta ao centro)", proximo: "julgamento" },
            { texto: "Ficar no Médio Lugar para sempre", proximo: 21 }
        ]
    },

    {
        id: 14,
        image: "img/id14-construir-casa.png",
        altText: "Você e o grupo de 'sabotadores' ajudando a construir uma casa em um lugar destruído.",
        texto: "O grupo revela que seu teste revela mais sobre aprender a ser bom do que ser impecável. Eles te propõem uma missão: ajudar a reparar danos reais numa cidade distante.",
        opcoes: [
            { texto: "Aceita a missão e parte (ação contínua)", proximo: "julgamento", pontos: 3, flag: "missao_aceita" },
            { texto: "Recusa; prefere esperançosamente esperar julgamento", proximo: "julgamento" }
        ]
    },

    {
        id: 20,
        image: "img/id20-good-place-02.png",
        altText: "Uma porta verde brilhante se abrindo para um lugar paradisíaco.",
        texto: "🏆 FINAL: Você ganhou o Good Place. Suas ações demonstraram crescimento moral consistente; você é convidado a continuar evoluindo num lugar de alegria duradoura.",
        final: "Good Place: Vida plena de aprendizado e felicidade.",
        opcoes: []
    },

    {
        id: 21,
        image: "img/id21-medio-lugar-final.png",
        altText: "Você em um escritório bege, olhando para um relógio na parede.",
        texto: "➖ FINAL: Médio Lugar. Nem terrível nem perfeito,  tempo e trabalho aguardam para transformar escolhas em significado.",
        final: "Medium Place: Uma chance de reflexão contínua.",
        opcoes: []
    },
    
    {
        id: 22,
        image: "img/id22-bad-place-final.png",
        altText: "Uma sala escura com um homem de terno sorrindo sarcasticamente para você.",
        texto: "🔥 FINAL: Bad Place. Suas escolhas revelaram egoísmo ou dano sem arrependimento. Aqui você enfrentará consequências (e talvez oportunidade de mudança).",
        final: "Bad Place: Consequências severas.",
        opcoes: []
    }
];