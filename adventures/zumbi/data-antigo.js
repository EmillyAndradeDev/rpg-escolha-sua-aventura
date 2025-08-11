const historia = {
    inicio: {
        texto: "O apocalipse começou! Você está trancado em casa e ouve batidas na porta. O que faz?",
        opcoes: [
            { texto: "Abrir a porta", proximo: "porta_aberta" },
            { texto: "Olhar pela janela", proximo: "janela" }
        ]
    },
    porta_aberta: {
        texto: "Você abriu a porta e um zumbi pula em você! Fim da linha.",
        final: "Você foi mordido."
    },
    janela: {
        texto: "Você vê um grupo de sobreviventes na rua. Eles acenam para você.",
        opcoes: [
            { texto: "Sair e juntar-se a eles", proximo: "grupo" },
            { texto: "Ficar escondido", proximo: "esconderijo" }
        ]
    },
    grupo: {
        texto: "O grupo é amigável e te leva para um abrigo seguro. Você sobreviveu!",
        final: "Sobrevivente lendário!"
    },
    esconderijo: {
        texto: "Você fica escondido até a comida acabar. Você não resiste.",
        final: "Morreu de fome."
    }
};
