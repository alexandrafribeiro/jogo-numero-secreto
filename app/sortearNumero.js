const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log("Número secreto: ", numeroSecreto);

const elementoMenorvalor = document.getElementById('menor-valor');
elementoMenorvalor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;