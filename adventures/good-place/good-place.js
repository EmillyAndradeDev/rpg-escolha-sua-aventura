const divHistoria = document.getElementById("historia");
const divOpcoes = document.getElementById("opcoes");
const divStatus = document.getElementById("status");

// Estado do jogador
const estado = {
  pontos: 0,
  flags: new Set()
};

// Adiciona pontos e flags quando uma opção é escolhida
function aplicarEfeito(opcao) {
  if (!opcao) return;
  if (typeof opcao.pontos === "number") estado.pontos += opcao.pontos;
  if (opcao.flag) estado.flags.add(opcao.flag);
}

// Atualiza painel de status (pontos e flags)
function atualizarStatus() {
  const flagsList = Array.from(estado.flags);
  divStatus.innerHTML = `
    <p><strong>Pontos morais:</strong> ${estado.pontos}</p>
    ${flagsList.length ? `<p><strong>Marcas:</strong> ${flagsList.join(", ")}</p>` : ""}
  `;
}

// Função que decide o veredito final
function julgar() {
  // regras simples de pontuação — ajuste conforme desejar
  // >=15: Good Place, 5-14: Medium, <5: Bad Place
  if (estado.pontos >= 15 || estado.flags.has("missao_aceita")) {
    mostrarFinalPorId(20);
  } else if (estado.pontos >= 5) {
    mostrarFinalPorId(21);
  } else {
    mostrarFinalPorId(22);
  }
}

// renderiza uma cena pelo id (número) ou executa julgamento quando proximo é "julgamento"
function mostrarCena(id) {
  // caso especial: se id for string "julgamento" (usado nas opções), chama julgar()
  if (id === "julgamento") {
    julgar();
    return;
  }

  const cena = historia.find(c => c.id === id);
  if (!cena) {
    divHistoria.innerHTML = `<p>Erro: cena não encontrada (id ${id}).</p>`;
    divOpcoes.innerHTML = `<button onclick="location.href='../../index.html'">Voltar</button>`;
    return;
  }

  // mostra texto e status
  divHistoria.innerHTML = `<p>${cena.texto.replace(/\n/g, "<br>")}</p>`;
  divOpcoes.innerHTML = "";
  atualizarStatus();

  // se for final (campo final) ou cena sem opcoes, mostrar conclusão com botões
  if (cena.final || !cena.opcoes || cena.opcoes.length === 0) {
    const finalTexto = cena.final ? cena.final : "Fim.";
    divOpcoes.innerHTML = `
      <p>🏁 ${finalTexto}</p>
      <button onclick="location.href='../../index.html'">Voltar ao menu</button>
      <button onclick="reiniciar()">Jogar novamente</button>
    `;
    return;
  }

  // cria botões para opções
  cena.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao.texto;

    btn.addEventListener("click", () => {
      aplicarEfeito(opcao);

      // se proximo === "julgamento" chama função especial
      if (opcao.proximo === "julgamento") {
        julgar();
      } else {
        mostrarCena(opcao.proximo);
      }
    });

    divOpcoes.appendChild(btn);
  });
}

function mostrarFinalPorId(id) {
  // encontra o nó final e renderiza sua tela (reaproveita a lógica)
  const finalNode = historia.find(c => c.id === id);
  if (!finalNode) {
    divHistoria.innerHTML = `<p>Erro no julgamento — final não encontrado.</p>`;
    return;
  }
  divHistoria.innerHTML = `<p>${finalNode.texto}</p>`;
  divOpcoes.innerHTML = `
    <p>🏁 ${finalNode.final}</p>
    <button onclick="location.href='../../index.html'">Voltar ao menu</button>
    <button onclick="reiniciar()">Jogar novamente</button>
  `;
  atualizarStatus();
}

function reiniciar() {
  estado.pontos = 0;
  estado.flags = new Set();
  mostrarCena(1);
}

// inicia
mostrarCena(1);
