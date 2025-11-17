const storyTextElement = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");
const storyImageElement = document.getElementById("story-image");

const clueListElement = document.getElementById("clue-list");

let inventarioDePistas = new Set(); 

function atualizarInventarioNaTela() {
    clueListElement.innerHTML = ""; 

    if (inventarioDePistas.size === 0) {
        clueListElement.innerHTML = "<li>(Nenhuma pista ainda...)</li>";
        return;
    }

    inventarioDePistas.forEach(pista => {
        const li = document.createElement('li');
        li.innerText = `✔️ ${pista}`;
        clueListElement.appendChild(li);
    });
}

function mostrarCena(id) {
    
 const cena = storyData.find(c => c.id === id);

 if (!cena) {
 console.error(`ERRO: Não foi possível encontrar a cena com id ${id}.`);
 storyTextElement.innerText = `ERRO: Cena ${id} não encontrada. Verifique o data.js.`;
 choicesContainer.innerHTML = `<button class="choice-button" onclick="location.href='../../index.html'">Voltar ao Menu</button>`;
 return;
}

storyTextElement.innerText = cena.texto;
storyImageElement.src = cena.image;
 storyImageElement.alt = cena.altText || cena.texto;
 storyImageElement.style.display = 'block';
    
choicesContainer.innerHTML = "";

 if (!cena.opcoes || cena.opcoes.length === 0) {
        const finalText = cena.final || 'Fim da história.';
 choicesContainer.innerHTML = `
            <p class="story-text">🏁 ${finalText}</p> 
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
            
            if (opcao.pistas) {
                opcao.pistas.forEach(pista => {
                    inventarioDePistas.add(pista);
                });
                atualizarInventarioNaTela(); 
            }

 mostrarCena(opcao.proximo);
 });

        choicesContainer.appendChild(btn);
 });
}

atualizarInventarioNaTela(); 

mostrarCena(1);