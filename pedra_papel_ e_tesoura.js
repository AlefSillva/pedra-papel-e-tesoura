function jogo() {
  function getEscolhaDoComp(array) {
    const indiceAleatorio = Math.ceil(Math.random() * array.length) - 1;
    return array[indiceAleatorio];
  }

  const escolhas = ["pedra", "papel", "tesoura"];

  const duelos = {
    pedra: ["tesoura"], // pedra ganha da tesoura
    papel: ["pedra"], // papel ganha da pedra
    tesoura: ["papel"], // tesoura ganha do papel
  };

  function partida(selectComp, selectPlayer) {
    if (selectComp === selectPlayer) {
      return `Empate! Ambos escolheram ${selectPlayer}.`;
    } else if (
      duelos[selectPlayer] &&
      duelos[selectPlayer].includes(selectComp)
    ) {
      return `Você venceu! ${selectPlayer} vence ${selectComp}.`;
    } else {
      return `Você perdeu! ${selectPlayer} perde para ${selectComp}.`;
    }
  }

  let pontosJogador = 0;
  let pontosComputador = 0;

  for (let rodada = 1; rodada <= 5; rodada++) {
    const escolhaComp = getEscolhaDoComp(escolhas);
    const escolhaJogador = String(prompt("Digite sua escolha: ").toLowerCase());

    partida(escolhaComp, escolhaJogador);

    if (
      duelos[escolhaJogador] &&
      duelos[escolhaJogador].includes(escolhaComp)
    ) {
      pontosJogador++;
    } else if (escolhaJogador === escolhaComp) {
    } else {
      pontosComputador++;
    }
  }

  if (pontosJogador > pontosComputador) {
    console.log( "Você venceu!");
  } else {
    console.log( "O computador venceu!");
  }
}

jogo();
