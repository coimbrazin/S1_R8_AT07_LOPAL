let numeroInicial = parseInt(prompt("Digite um número: "));
let numeroFinal = parseInt(prompt("Digite mais um número: "));

if (numeroInicial >= numeroFinal) {
  for (let i = numeroFinal; i <= numeroInicial; i) {
    if (i % 2 == 0) {
      console.log(`Número: ${i}`);
    }
  }
} else {
  for (let i = numeroInicial; i <= numeroFinal; i++) {
    if (i % 2 == 0) {
      console.log(`Número: ${i}`);
    }
  }
}