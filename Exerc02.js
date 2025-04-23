let numeroAleatorio = Math.floor(Math.random() * 10 + 1);
let tentativas = 3;
let acertou = false;

while (tentativas >= 1) {
  let chute = parseInt(prompt("Digite um número entre 1 e 10 para ganhar um presente misterioso!"));
  if (isNaN(chute) || chute < 1 || chute > 10) {
    console.log("Seu chute é inválido tente novamente")
  } else if (chute == numeroAleatorio) {
    acertou = true;
    break;
  } else if (chute > numeroAleatorio) {
    console.log("O número é menor");
  } else {
    console.log("O número é maior");
  }
  tentativas--

}

if (acertou == true) {
  console.log(`Parabéns!! Você acertou, o número certo é [${numeroAleatorio}]`);
} else {
  console.log(`Infelizmente você não conseguiu acertar o númmero, o número certo é [${numeroAleatorio}]`)
}
