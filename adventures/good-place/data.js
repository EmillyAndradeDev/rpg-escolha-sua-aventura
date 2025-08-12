// Nó id (numérico), texto e opções.
// Cada opção pode alterar 'pontos' (positivos/negativos) e/ou definir flags.
// Para finalizar a avaliação chame proximo: "julgamento".
const historia = [
    {
        id: 1,
        texto: "Você acorda em um lugar ensolarado e acolhedor, um 'bairro' governado por arquétipos de bondade. Um ser chamado 'Guia' te cumprimenta e explica: sua chegada depende de suas ações. O que você faz primeiro?",
        opcoes: [
            { texto: "Ajudar um vizinho com suas compras (pequena gentileza)", proximo: 2, pontos: 3 },
            { texto: "Explorar a cidade e ignorar os vizinhos", proximo: 3, pontos: 0 },
            { texto: "Procurar por pistas sobre como funciona esse lugar", proximo: 4, pontos: 0 }
        ]
    },

    {
        id: 2,
        texto: "O vizinho agradece com sinceridade e te convida para o chá da tarde. Você:",
        opcoes: [
            { texto: "Aceita e conversa sinceramente", proximo: 5, pontos: 2, flag: "conversa sincera" },
            { texto: "Recusa e diz estar ocupado", proximo: 3, pontos: -1 }
        ]
    },

    {
        id: 3,
        texto: "Ao explorar, encontra uma loja onde um funcionário deixou um envelope com dinheiro cair. Ninguém percebe. O que você faz?",
        opcoes: [
            { texto: "Pegar e devolver ao caixa", proximo: 5, pontos: 4 },
            { texto: "Fingir que nada viu e seguir", proximo: 6, pontos: -3 }
        ]
    },

    {
        id: 4,
        texto: "Você encontra anotações que sugerem que nem tudo é tão perfeito, algumas 'falhas' no sistema parecem intencionais. Você:",
        opcoes: [
            { texto: "Compartilha isso com o Guia (honestidade)", proximo: 5, pontos: 2, flag: "compartilhou pistas" },
            { texto: "Esconde as anotações; pode ser vantagem", proximo: 6, pontos: -2 }
        ]
    },

    {
        id: 5,
        texto: "No chá, a conversa vira sobre moralidade e um dilema é apresentado: salvar uma vida a custo de mentir para um amigo. Você:",
        opcoes: [
            { texto: "Salvar a vida; mente para proteger (consequência utilitarista)", proximo: 7, pontos: 1, flag: "mentira protetora" },
            { texto: "Diz a verdade, mesmo que custe a vida", proximo: 7, pontos: 2, flag: "verdade absoluta" },
            { texto: "Tenta encontrar uma terceira via", proximo: 8, pontos: 3, flag: "terceira via" }
        ]
    },

    {
        id: 6,
        texto: "Você começa a sentir que suas escolhas têm reflexo imediato na paisagem: pequenos tremores, mudanças sutis. Um morador pergunta por sua opinião sobre justiça. O que responde?",
        opcoes: [
            { texto: "Justiça é retribuição, punição para errados", proximo: 9, pontos: -1 },
            { texto: "Justiça é reparar danos e restaurar relações", proximo: 9, pontos: 2 }
        ]
    },

    {
        id: 7,
        texto: "Suas ações no dilema chamaram atenção: um visitante misterioso observa. Ele te oferece um teste final no fim do dia, uma avaliação que pode determinar o seu destino. Você aceita o teste?",
        opcoes: [
            { texto: "Aceito o teste de avaliação", proximo: 10 },
            { texto: "Recuso; prefiro viver o dia sem ser julgado", proximo: 11 }
        ]
    },

    {
        id: 8,
        texto: "Ao procurar uma terceira via, você encontra uma solução criativa que ajuda todos sem mentiras e inspira outros moradores.",
        opcoes: [
            { texto: "Compartilha a solução e ganha aliados", proximo: 12, pontos: 3, flag: "solução criativa" },
            { texto: "Guarda a ideia para si (vantagem pessoal)", proximo: 6, pontos: -2 }
        ]
    },

    {
        id: 9,
        texto: "Sua resposta provoca um debate, alguns te elogiam, outros questionam. À noite, você recebe um convite para um jantar filosófico.",
        opcoes: [
            { texto: "Participa do jantar", proximo: 12, pontos: 1 },
            { texto: "Recusa e vai dormir", proximo: 11, pontos: 0 }
        ]
    },

    {
        id: 10,
        texto: "O teste de avaliação é uma sala com registros das suas escolhas passadas e um enigma moral que exige ação imediata: salvar um estranho da morte iminente ou garantir a segurança de vários conhecidos (que não estão em perigo imediato). Você:",
        opcoes: [
            { texto: "Salva o estranho (valor individual)", proximo: 20, pontos: 1, flag: "salvou estranho" },
            { texto: "Protege o grupo (valor coletivo)", proximo: "julgamento", pontos: 2, flag: "protegeu grupo" },
            { texto: "Recusa participar e questiona o sistema", proximo: "julgamento", pontos: 0, flag: "questionou o sistema" }
        ]
    },

    {
        id: 11,
        texto: "Você evita o teste, prefere ações cotidianas. Ao final do dia, o Guia aparece e diz que suas escolhas serão consideradas de qualquer forma.",
        opcoes: [
            { texto: "Voltar ao centro para ouvir o veredito", proximo: "julgamento" },
            { texto: "Fugir para o 'Médio Lugar' e viver no anonimato", proximo: 13, pontos: 0 }
        ]
    },

    {
        id: 12,
        texto: "Enquanto isso, um rumor corre: há um grupo que tenta sabotar o sistema 'perfeito' para testar quem é realmente bom. Você se aproxima para investigar.",
        opcoes: [
            { texto: "Infiltra-se no grupo e descobre suas motivações", proximo: 14, pontos: 0, flag: "infiltrou" },
            { texto: "Denuncia o grupo ao Guia", proximo: 10, pontos: 1 }
        ]
    },

    {
        id: 13,
        texto: "Você escolheu o anonimato. O 'Médio Lugar' é confortável, mas falta sentido às suas ações. Alguns dias depois, um chamado: reavaliação possível. Quer tentar novamente?",
        opcoes: [
            { texto: "Tentar reavaliar (volta ao centro)", proximo: "julgamento" },
            { texto: "Ficar no Médio Lugar para sempre", proximo: 21 }
        ]
    },

    {
        id: 14,
        texto: "O grupo revela que seu teste revela mais sobre aprender a ser bom do que ser impecável. Eles te propõem uma missão: ajudar a reparar danos reais numa cidade distante.",
        opcoes: [
            { texto: "Aceita a missão e parte (ação contínua)", proximo: "julgamento", pontos: 3, flag: "missao_aceita" },
            { texto: "Recusa; prefere esperançosamente esperar julgamento", proximo: "julgamento" }
        ]
    },

    // finais diretos
    {
        id: 20,
        texto: "🏆 FINAL: Você ganhou o Good Place. Suas ações demonstraram crescimento moral consistente; você é convidado a continuar evoluindo num lugar de alegria duradoura.",
        final: "Good Place: Vida plena de aprendizado e felicidade."
    },

    {
        id: 21,
        texto: "➖ FINAL: Médio Lugar. Nem terrível nem perfeito,  tempo e trabalho aguardam para transformar escolhas em significado.",
        final: "Medium Place: Uma chance de reflexão contínua."
    },
    
    {
        id: 22,
        texto: "🔥 FINAL: Bad Place. Suas escolhas revelaram egoísmo ou dano sem arrependimento. Aqui você enfrentará consequências (e talvez oportunidade de mudança).",
        final: "Bad Place: Consequências severas."
    }
];