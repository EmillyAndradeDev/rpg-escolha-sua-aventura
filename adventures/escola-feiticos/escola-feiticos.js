const storyTextElement = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");
const storyImageElement = document.getElementById("story-image");

function mostrarCena(id) {
  const cena = storyData.find(c => c.id === id);

  if (!cena) {
    console.error(`ERRO: Não foi possível encontrar a cena com id ${id}.`);
    storyTextElement.innerText = `ERRO: Cena ${id} não encontrada. Verifique o data.js.`;
    choicesContainer.innerHTML = `<button class="choice-button" onclick="location.href='../../index.html'">Voltar ao Menu</button>`;
    return;
  }

  storyTextElement.innerText = cena.texto;

  if (cena.image && storyImageElement) {
    storyImageElement.src = cena.image;
    storyImageElement.alt = cena.altText || cena.texto;
    storyImageElement.style.display = 'block'; // Mostra a imagem
  } else if (storyImageElement) {
    storyImageElement.style.display = 'none';
  }
  choicesContainer.innerHTML = "";

  if (!cena.opcoes || cena.opcoes.length === 0) {
    choicesContainer.innerHTML = `
            <p class="story-text">🏁 ${cena.final || 'Fim da história.'}</p> 
            <button class="choice-button" onclick="location.href='../../index.html'">
                Voltar ao Menu Principal
            </button>
        `;
    return;
  }
  
  cena.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.classList.add('choice-button');
    btn.textContent = opcao.texto;
    btn.addEventListener('click', () => {
      mostrarCena(opcao.proximo);
    });
    choicesContainer.appendChild(btn);
  });
}

mostrarCena(1);