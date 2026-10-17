quantidadeHoras = prompt("Digite a quantidade de HORAS")
quantidadeMinutos = prompt("Digite a quantidade de MINUTOS")
quantidadeSegundos = prompt("Digite a quantidade de SEGUNDOS")

resultadoEmSegundos = ((quantidadeHoras * 360)+(quantidadeMinutos * 60)+(quantidadeSegundos))

document.write("<h2>Horas : " + quantidadeHoras + "</h2>")
document.write("<h2>Minutos : " + quantidadeMinutos + "</h2>")
document.write("<h2>Segundos : " + quantidadeSegundos + "</h2>")
document.write("<br><h2>Total de Segundo : " + resultadoEmSegundos + "</h2>")