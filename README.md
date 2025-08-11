# 🗡️ Escolha Sua Aventura

Um jogo interativo no estilo “Escolha sua aventura”, onde cada decisão leva a caminhos diferentes, resultando em finais variados.
O projeto é modular, permitindo criar e jogar várias histórias no mesmo sistema, apenas alterando os dados da aventura.

---
### 💻 Tecnologias Utilizadas
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
| ---------------------- | --------------------- | ------------------------ |

---

### 🎯 Objetivo

Oferecer uma experiência imersiva em formato de árvore de decisões, com:

- Fluxo não linear: Cada escolha leva a uma nova situação.
- Múltiplos finais: Bons, ruins e inesperados.
- Reaproveitamento de lógica: Todas as aventuras usam o mesmo núcleo de código.

---

### 📂 Estrutura de Pastas
```
escolha-sua-aventura/
│
├── index.html              # Página inicial (menu das aventuras)
├── style.css               # Estilos globais
├── main.js                 # Lógica principal compartilhada
│
├── assets/                 # Recursos globais
│   ├── css/
│   ├── img/
│   └── sounds/
│
├── adventures/             # Aventuras individuais
│   ├── zumbi/
│   │   ├── data.js          # Árvore de decisão da aventura
│   │   ├── zumbi.html
│   │   ├── zumbi.css
│   │   └── zumbi.js
│   ├── medieval/
│   └── espacial/
│
└── README.md               # Documentação do projeto
```
---
### 🚀 Como funciona

  1. O jogador acessa o menu inicial e escolhe uma aventura.
  2. O jogo carrega o arquivo data.js da aventura escolhida.
  3. Cada escolha leva a um novo nó da história até chegar a um final.
  4. É possível reiniciar ou escolher outra aventura a qualquer momento.
---
### 📖 Aventuras disponíveis
 - 🧟 Sobreviva ao Apocalipse Zumbi - Encare mortos-vivos, faça escolhas e tente sobreviver.
 - 🧙🏼‍♂️ Escola de Feitiços - Seu primeiro dia em uma famosa escola de feitiços, faça escolhas e tente sobreviver.
 - ⚔️ Aventura Medieval - Você é um jovem guerreiro que acabou de chegar ao castelo do rei, faça boas escolhas.
 - 🚀 Missão Espacial - Você é o comandante da nave Horizon e está em um planeta desconhecido, tente sobreviver.
 - (mais aventuras em breve...)

---

### 🌐 Veja o Projeto Online
Você pode interagir com o jogo diretamente pelo GitHub Pages:
- [RPG - Escolha sua aventura](https://emillyandradedev.github.io/rpg-escolha-sua-aventura/)
