const divHistoria = document.getElementById("historia");
const divOpcoes = document.getElementById("opcoes");

function mostrarCena(id) {
  const cena = historia.find(c => c.id === id);
  divHistoria.innerHTML = `<p>${cena.texto}</p>`;
  divOpcoes.innerHTML = "";

  if (!cena.opcoes || cena.opcoes.length === 0) {
    divOpcoes.innerHTML = `
      <p>🏁 ${cena.final}</p>
      <button onclick="location.href='../../index.html'">Voltar ao menu</button>
    `;
    return;
  }

  cena.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao.texto;
    btn.onclick = () => mostrarCena(opcao.proximo);
    divOpcoes.appendChild(btn);
  });
}

mostrarCena(1);
