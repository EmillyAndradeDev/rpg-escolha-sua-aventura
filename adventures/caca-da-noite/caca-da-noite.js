const divHistoria = document.getElementById("historia");
const divOpcoes = document.getElementById("opcoes");

// Estado do jogador: pistas e arma selecionada (se houver)
const estado = {
  pistas: new Set(),
  armaSelecionada: null
};

// Função utilitária para adicionar pistas vindas da opção
function adicionarPistas(pistas) {
  if (!pistas) return;
  pistas.forEach(p => estado.pistas.add(p));
}

// renderiza a cena pelo id (número)
function mostrarCena(id) {
  const cena = historia.find(c => c.id === id);
  if (!cena) {
    divHistoria.innerHTML = `<p>Erro: cena não encontrada (id ${id}).</p>`;
    divOpcoes.innerHTML = `<button onclick="location.href='../../index.html'">Voltar</button>`;
    return;
  }

  // Texto principal — também mostra pistas coletadas brevemente
  const pistasList = Array.from(estado.pistas);
  divHistoria.innerHTML = `<p>${cena.texto}</p>
                           ${pistasList.length ? `<p><strong>Pistas coletadas:</strong> ${pistasList.join(', ')}</p>` : ''}`;
  divOpcoes.innerHTML = "";

  // Se for final (não tem opcoes)
  if (!cena.opcoes || cena.opcoes.length === 0) {
    divOpcoes.innerHTML = `
      <p>🏁 ${cena.final}</p>
      <button onclick="location.href='../../index.html'">Voltar ao menu</button>
      <button onclick="reiniciar()">Jogar novamente</button>
    `;
    return;
  }

  // Cria botões para cada opção
  cena.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao.texto;

    btn.addEventListener("click", () => {
      // se a opção adiciona pistas, atualiza o estado
      if (opcao.pistas) adicionarPistas(opcao.pistas);

      // se a opção define arma (em nós de escolha de arma), guarda no estado
      if (opcao.arma) estado.armaSelecionada = opcao.arma;

      // Lógica extra: quando avançar para a identificação/confronto final,
      // podemos avaliar pistas + arma (opcional)
      // Aqui só navegamos para o próximo nó. Alguns nós finais já foram desenhados.
      mostrarCena(opcao.proximo);
    });

    divOpcoes.appendChild(btn);
  });
}

function reiniciar() {
  estado.pistas = new Set();
  estado.armaSelecionada = null;
  mostrarCena(1);
}

// inicia a história no nó 1
mostrarCena(1);
