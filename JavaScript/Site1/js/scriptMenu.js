primeiroValor = prompt("Digite o primeiro valor")
segundoValor = prompt("Digite o segundo valor")


document.write("<h2>Primeiro Valor : " + primeiroValor+ "</h2>")
document.write("<h2>Segundo Valor : " + segundoValor+ "</h2><br> Após Troca: <br>")

seguraValor = primeiroValor
primeiroValor = segundoValor
segundoValor = seguraValor


document.write("<h2>Primeiro Valor : " + primeiroValor+ "</h2>")
document.write("<h2>Segundo Valor : " + segundoValor+ "</h2>")