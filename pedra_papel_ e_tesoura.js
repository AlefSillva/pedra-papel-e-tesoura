function jogo() {
  function getEscolhaDoComp(array) {
    const indiceAleatorio = Math.ceil(Math.random() * array.length) - 1;
    return array[indiceAleatorio];
  }

  const escolhas = ["pedra", "papel", "tesoura"];
  const escolhaComp = getEscolhaDoComp(escolhas);

  console.log("O computador escolheu: " + escolhaComp);

  function partida(selectComp, selectPlayer) {
    if (duelos[selectPlayer].includes(selectComp)) {
      console.log(`Você venceu! ${selectPlayer} vence ${selectComp}.`);
    } else {
      console.log(`Você perdeu! ${selectPlayer} perde para ${selectComp}.`);
    }
  }

  const duelos = {
    pedra: ["tesoura"], // pedra ganha da tesoura
    papel: ["pedra"], // papel ganha da pedra
    tesoura: ["papel"], // tesoura ganha do papel
  };

  let escolhaJogador = String(prompt("Digite sua escolha: ").toLowerCase());

  partida(escolhaComp, escolhaJogador);
}

jogo();
