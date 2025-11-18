const storyTextElement = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");
const storyImageElement = document.getElementById("story-image");

const statusContainer = document.getElementById("status-container");

const estado = {
  pontos: 0,
  flags: new Set()
};

function aplicarEfeito(opcao) {
  if (!opcao) return;
  if (typeof opcao.pontos === "number") estado.pontos += opcao.pontos;
  if (opcao.flag) estado.flags.add(opcao.flag);
}

function atualizarStatus() {
  if (!statusContainer) return;
  const flagsList = Array.from(estado.flags);
  statusContainer.innerHTML = ` 
<p><strong>Pontos morais:</strong> ${estado.pontos}</p>
${flagsList.length ? `<p><strong>Marcas:</strong> ${flagsList.join(", ")}</p>` : ""}
`;
}

function julgar() {
  if (estado.pontos >= 15 || estado.flags.has("missao_aceita")) {
    mostrarFinalPorId(20);
  } else if (estado.pontos >= 5) {
    mostrarFinalPorId(21);
  } else {
    mostrarFinalPorId(22);
  }
}

function mostrarCena(id) {
  if (id === "julgamento") {
    julgar();
    return;
  }

  const cena = storyData.find(c => c.id === id);
  if (!cena) {
    storyTextElement.innerText = `Erro: cena não encontrada (id ${id}).`;
    choicesContainer.innerHTML = `<button class="choice-button" onclick="location.href='../../index.html'">Voltar</button>`;
    return;
  }

  storyTextElement.innerText = cena.texto;
  atualizarStatus();
  choicesContainer.innerHTML = "";

  if (cena.image && storyImageElement) {
    storyImageElement.src = cena.image;
    storyImageElement.alt = cena.altText || cena.texto;
    storyImageElement.style.display = 'block';
  } else if (storyImageElement) {
    storyImageElement.style.display = 'none';
  }

  if (cena.final || !cena.opcoes || cena.opcoes.length === 0) {
    const finalTexto = cena.final ? cena.final : "Fim.";
    choicesContainer.innerHTML = `
<p class="story-text">🏁 ${finalTexto}</p>
<button class="choice-button" onclick="location.href='../../index.html'">Voltar ao menu</button>
<button class="choice-button" onclick="reiniciar()">Jogar novamente</button>
`;
    return;
  }

  cena.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.classList.add('choice-button');
    btn.textContent = opcao.texto;

    btn.addEventListener("click", () => {
      aplicarEfeito(opcao);

      if (opcao.proximo === "julgamento") {
        julgar();
      } else {
        mostrarCena(opcao.proximo);
      }
    });

    choicesContainer.appendChild(btn);
  });
}

function mostrarFinalPorId(id) {
  const finalNode = storyData.find(c => c.id === id);
  if (!finalNode) {
    storyTextElement.innerText = `<p>Erro no julgamento — final não encontrado.</p>`;
    return;
  }
  storyTextElement.innerText = finalNode.texto;

  if (finalNode.image && storyImageElement) {
    storyImageElement.src = finalNode.image;
    storyImageElement.alt = finalNode.altText || finalNode.texto;
  }

  choicesContainer.innerHTML = `
 <p class="story-text">🏁 ${finalNode.final}</p>
<button class="choice-button" onclick="location.href='../../index.html'">Voltar ao menu</button>
 <button class="choice-button" onclick="reiniciar()">Jogar novamente</button>
 `;
  atualizarStatus();
}

function reiniciar() {
  estado.pontos = 0;
  estado.flags = new Set();
  mostrarCena(1);
}

mostrarCena(1);