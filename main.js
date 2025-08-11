// Lógica geral (carregamento de aventuras, menu, navegação)

// Contém funções genéricas (carregar história, exibir pergunta, processar resposta).

// Lista de aventuras disponíveis
const aventuras = [
    { nome: "Sobreviva ao Apocalipse Zumbi", pasta: "zumbi" },
    { nome: "Escola de Feitiços", pasta: "escola-feiticos"},
    { nome: "Aventura Medieval", pasta: "medieval" },
    { nome: "Missão Espacial", pasta: "espacial" }
];

// Criar menu
const menuDiv = document.getElementById("menu-aventuras");

aventuras.forEach(aventura => {
    const btn = document.createElement("button");
    btn.textContent = aventura.nome;
    btn.addEventListener("click", () => {
        iniciarAventura(aventura.pasta);
    });
    menuDiv.appendChild(btn);
});

function iniciarAventura(pasta) {
    // Redireciona para a página da aventura
    window.location.href = `adventures/${pasta}/${pasta}.html`;
}
