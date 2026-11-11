
A = 0
B = 0

while (A == B){
    A = Number(prompt("Digite o primeiro valor"))
    B = Number(prompt("Digite o segundo valor"))
}

if (A > B){
    resultadoSubtracao = A - B
} else{
    resultadoSubtracao = B - A
}


document.write("<h2>Subtração dos números : " + resultadoSubtracao + "</h2>");
