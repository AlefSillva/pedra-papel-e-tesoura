// Variáveis globais
let pontosJogador = 0;
let pontosComputador = 0;
let numeroRodada = 1;
const limiteRodadas = 5;
let escolhaJogador;
let escolhaComputador;
let jogadaFeita = false;

const opcoes = {
  0: ["pedra"],
  1: ["papel"],
  2: ["tesoura"],
};

function jogar() {
  function escolhaDoJogador(escolha) {
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");

    btn1.addEventListener("click", () => fazerEscolha("pedra"));
    btn2.addEventListener("click", () => fazerEscolha("papel"));
    btn3.addEventListener("click", () => fazerEscolha("tesoura"));
  }

  function fazerEscolha(escolha) {
    escolhaJogador = escolha;
    jogadaFeita = true;
    document.getElementById("escolha-jogador").textContent = escolhaJogador;
  }

  function escolhaDoComp() {
    const arrDeEscolhas = ["pedra", "papel", "tesoura"];
    const numAleatorio = Math.floor(Math.random() * arrDeEscolhas.length);
    return arrDeEscolhas[numAleatorio];
  }

  function atualizarEscolhas() {
    if (escolhaJogador) {
      document.getElementById("escolha-jogador").textContent = escolhaJogador;
    } else {
      document.getElementById("escolha-jogador").textContent = "-";
    }

    if (jogadaFeita) {
      document.getElementById("escolha-computador").textContent = escolhaComputador;
    } else {
      document.getElementById("escolha-computador").textContent = "-";
    }
  }

  function realizarDuelo() {
    escolhaComputador = escolhaDoComp();
    atualizarEscolhas();
    if (
      escolhaJogador === "pedra" && escolhaComputador === "tesoura" ||
      escolhaJogador === "papel" && escolhaComputador === "pedra" ||
      escolhaJogador === "tesoura" && escolhaComputador === "papel"
    ) {
      return "VOCÊ VENCEU!";
    } else if (
      escolhaJogador === "pedra" && escolhaComputador === "papel" ||
      escolhaJogador === "papel" && escolhaComputador === "tesoura" ||
      escolhaJogador === "tesoura" && escolhaComputador === "pedra"
    ) {
      return "VOCÊ PERDEU!";
    } else {
      return "EMPATE!";
    }
  }

  function atualizarPlacar() {
    document.getElementById("pontuacao-jogador").textContent = pontosJogador;
    document.getElementById("pontuacao-computador").textContent = pontosComputador;
  }

  function atualizarRodada() {
    document.getElementById("count-rodada").textContent = numeroRodada + "ª Rodada";
  }

  function finalizarJogo() {
    const resultadoElement = document.getElementById("resultado");
    const btnJogar = document.getElementById("btn-jogar");

    if (pontosJogador > pontosComputador) {
      resultadoElement.textContent = "PARABÉNS, VOCÊ VENCEU!";
    } else if (pontosJogador < pontosComputador) {
      resultadoElement.textContent = "VOCÊ PERDEU, EU SOU O 'MILIOR' SIIIIIIU!!!!";
    } else {
      resultadoElement.textContent = "EMPATE!";
    }

    btnJogar.setAttribute("disabled", "true");
  }

  function reiniciarJogo() {
    pontosJogador = 0;
    pontosComputador = 0;
    numeroRodada = 1;
    jogadaFeita = false;
    escolhaJogador = undefined;

    document.getElementById("btn-jogar").removeAttribute("disabled");
    document.getElementById("resultado").textContent = "";
    document.getElementById("escolha-jogador").textContent = "-";
    document.getElementById("escolha-computador").textContent = "-";
    atualizarPlacar();
    atualizarRodada();
  }

  const btnJogar = document.getElementById("btn-jogar");
  const btnReiniciar = document.getElementById("btn-reiniciar");

  escolhaDoJogador();

  btnJogar.addEventListener("click", () => {
    if (numeroRodada <= limiteRodadas) {
      if (!jogadaFeita) {
        alert("Você deve fazer uma escolha antes de clicar em 'Jogar'.");
        return;
      }

      const resultadoDoDuelo = realizarDuelo();

      if (resultadoDoDuelo === "VOCÊ VENCEU!") {
        pontosJogador++;
      } else if (resultadoDoDuelo === "VOCÊ PERDEU!") {
        pontosComputador++;
      }

      atualizarPlacar();

      if (numeroRodada >= limiteRodadas) {
        finalizarJogo();
      } else {
        numeroRodada++;
        atualizarRodada();
      }

      jogadaFeita = false;
    }
  });

  btnReiniciar.addEventListener("click", () => {
    reiniciarJogo();
  });

  reiniciarJogo(); // Para garantir que o jogo comece reiniciado
}

jogar();
