quantidadeSegundos = prompt("Digite a quantidade de SEGUNDOS")


resultadoEmHoras = 0.0
resultadoEmMinutos = 0.0
resultadoEmSegundos = 0.0
contaSegundos = quantidadeSegundos

while (contaSegundos >= 3600){
    resultadoEmHoras = resultadoEmHoras + 1
    contaSegundos = contaSegundos - 3600
}
while (contaSegundos >= 60){
    resultadoEmMinutos = resultadoEmMinutos + 1
    contaSegundos = contaSegundos - 60
}
resultadoEmSegundos = contaSegundos

document.write("<h2>Segundos : " + quantidadeSegundos+ "</h2>")

document.write("<br><h2>Total de Horas: " + resultadoEmHoras + "</h2>")
document.write("<h2>Total de Minutos: " + resultadoEmMinutos + "</h2>")
document.write("<h2>Total de Segundos: " + resultadoEmSegundos + "</h2>")