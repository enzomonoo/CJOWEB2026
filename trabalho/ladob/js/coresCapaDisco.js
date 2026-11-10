//Função do tutorial https://www.youtube.com/watch?v=BTWPDboW38o
//Alterado só pra afetar os radial.gradient do fundo da tela
function pegarCorDoDisco(imageElement, ratio, regiao = { x: 0, y: 0, w: 1, h: 1 }) {
    const tela = document.createElement("canvas");

    const altura = tela.height = imageElement.naturalHeight;
    const largura = tela.width = imageElement.naturalWidth;

    const contexto = tela.getContext("2d");
    contexto.drawImage(imageElement, 0, 0);

    let data, length;
    let i = -4, count = 0;

    try {
        data = contexto.getImageData(
            Math.floor(regiao.x * largura),
            Math.floor(regiao.y * altura),
            Math.floor(regiao.w * largura),
            Math.floor(regiao.h * altura)
        );
        length = data.data.length;
    } catch (err) {
        console.error(err);
        return null;
    }

    let R = 0, G = 0, B = 0;

    while ((i += ratio * 4) < length) {
        ++count;
        R += data.data[i];
        G += data.data[i + 1];
        B += data.data[i + 2];
    }

    if (count === 0) return null;

    return {
        R: ~~(R / count),
        G: ~~(G / count),
        B: ~~(B / count)
    };
}

function aplicarCoresDoDisco(img) {
    const cor1 = pegarCorDoDisco(img, 4, { x: 0,   y: 0,   w: 0.5, h: 0.5 });
    const cor2 = pegarCorDoDisco(img, 4, { x: 0.5, y: 0.5, w: 0.5, h: 0.5 });

    if (!cor1 || !cor2) return;

    document.body.style.setProperty("--cor1", `rgba(${cor1.R}, ${cor1.G}, ${cor1.B}, 0.85)`);
    document.body.style.setProperty("--cor2", `rgba(${cor2.R}, ${cor2.G}, ${cor2.B}, 0.75)`);
}

const imagemDisco = document.getElementById("capa-produto");

if (imagemDisco.complete && imagemDisco.naturalWidth > 0) {
    aplicarCoresDoDisco(imagemDisco);
} else {
    imagemDisco.onload = () => aplicarCoresDoDisco(imagemDisco);
}