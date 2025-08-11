// lógica específica, se necessário

const divHistoria = document.getElementById("historia");
const divOpcoes = document.getElementById("opcoes");

function mostrarCena(id) {
    const cena = historia.find(c => c.id === id);

    divHistoria.innerHTML = `<p>${cena.texto}</p>`;
    divOpcoes.innerHTML = "";

    // Se não houver opções, é final
    if (!cena.opcoes || cena.opcoes.length === 0) {
        divOpcoes.innerHTML = `<p>🏁 Fim da história</p>
                               <button onclick="location.href='../../index.html'">Voltar ao menu</button>`;
        return;
    }

    cena.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.textContent = opcao.texto;
        btn.onclick = () => mostrarCena(opcao.proximo);
        divOpcoes.appendChild(btn);
    });
}

// Começa no ID 1
mostrarCena(1);

