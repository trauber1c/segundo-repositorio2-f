const botaoMostraPalavras = document.querySelector('#botao-palavrachave');


botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!")
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = processaTexto(texto);

    campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto) {
    //let palavras = texto.split(/\s+/);
    //let palavras = texto.split(/\[a-zA-Z]+/);
    let palavras = texto.split("/\p{L}+/u/") 
    /* \P negação; {L} conjunto de letras; + uma ou mais ocorrencias; u Unicode*/

    const frequencias = contaFrequencias(palavras);
    
    let ordenadas = Objeto.keys(frequencias).sort(OrdenaPalavra);
    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    }

    function contaFrequencias(palavras) { 
    let frequencias = {};
    for (let i in palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }
    }

    return palavras;