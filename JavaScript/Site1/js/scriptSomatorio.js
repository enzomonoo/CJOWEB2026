let valorDigitado = 1;
const matrizValores = [];
let incrementoEntrada = 0;
let incrementoSaida = 0;
let resultadoSomatorio = 0;

while (valorDigitado !== 0) {
    valorDigitado = Number(prompt("Digite os valores (0 para sair)"));

    if (valorDigitado !== 0) {
        matrizValores[incrementoEntrada] = valorDigitado;
        incrementoEntrada = incrementoEntrada + 1;
        resultadoSomatorio = resultadoSomatorio + valorDigitado;
    }
}

document.write("<h2>Números digitados :");
while (incrementoSaida < incrementoEntrada) {
    document.write(" " + matrizValores[incrementoSaida]);
    incrementoSaida = incrementoSaida + 1;
}
document.write(".</h2><br>");
document.write("<h2>Somatório dos números : " + resultadoSomatorio + "</h2>");