let numeroAleatorio = Math.floor(Math.random() * 10 + 1);
let tentativas = 3;
let acertou = false;

while (tentativas >= 1) {
  let chute = parseInt(prompt("Digite um número entre 1 e 10 para ganhar um presente misterioso!. Você tem 3 tentativas"));
  if (isNaN(chute) || chute < 1 || chute > 10) {
    alert("Seu chute é inválido tente novamente")
  } else if (chute == numeroAleatorio) {
    acertou = true;
    break;
  } else if (chute > numeroAleatorio) {
    alert("O número é menor");
  } else {
    alert("O número é maior");
  }
  tentativas--

}

if (acertou == true) {
  alert(`Parabéns!! Você acertou, o número certo é [${numeroAleatorio}]`);
} else {
  alert(`Infelizmente você não conseguiu acertar o número, o número certo é [${numeroAleatorio}]`)
}
