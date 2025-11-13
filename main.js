document.addEventListener('DOMContentLoaded', () => {
    
    const aventuras = [
        { 
            nome: "Apocalipse Zumbi", 
            pasta: "zumbi",
            descricao: "Encare mortos-vivos, faça escolhas difíceis e tente sobreviver a mais um dia no caos.",
            imagem: "assets/img/aventura-zumbi.jpg" 
        },
        { 
            nome: "Escola de Feitiços", 
            pasta: "escola-feiticos",
            descricao: "Seu primeiro dia em uma famosa escola de magia. O que pode dar errado?",
            imagem: "assets/img/aventura-feiticos.jpg"
        },
        { 
            nome: "Aventura Medieval", 
            pasta: "medieval",
            descricao: "Você é um jovem guerreiro que acabou de chegar ao castelo do rei. Faça boas escolhas.",
            imagem: "assets/img/aventura-medieval.jpg"
        },
        { 
            nome: "Missão Espacial", 
            pasta: "espacial",
            descricao: "Comandante da nave Horizon, você está em um planeta desconhecido. Tente sobreviver.",
            imagem: "assets/img/aventura-espacial.jpg"
        },
        { 
            nome: "Caça da Noite", 
            pasta: "caca-da-noite",
            descricao: "Desaparecimentos em Willow Creek. Você e seu parceiro devem investigar.",
            imagem: "assets/img/aventura-caca.jpg"
        },
        { 
            nome: "The (Almost) Good Place", 
            pasta: "good-place",
            descricao: "Você acorda em um 'bairro' perfeito, governado por arquétipos de bondade. É bom demais para ser verdade.",
            imagem: "assets/img/aventura-good-place.jpg"
        },
        { 
            nome: "Circo Misterioso", 
            pasta: "circo-misterioso",
            descricao: "Um circo estranho chega à cidade da noite para o dia.",
            imagem: "assets/img/aventura-circo.jpg"
        }
    ];

    const container = document.getElementById('aventuras-container');

    if (!container) return;

    const cardsHTML = aventuras.map(aventura => {
        return `
            <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="card adventure-card">
                    <img src="${aventura.imagem}" class="card-img-top" alt="${aventura.nome}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${aventura.nome}</h5>
                        <p class="card-text">${aventura.descricao}</p>
                        
                        <button class="btn btn-rpg" onclick="iniciarAventura('${aventura.pasta}')">
                            Iniciar Aventura
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join(''); 

    container.innerHTML = cardsHTML;
});

function iniciarAventura(pasta) {
    window.location.href = `adventures/${pasta}/${pasta}.html`;
}