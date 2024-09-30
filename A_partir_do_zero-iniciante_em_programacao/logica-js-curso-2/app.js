let listaDeNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 0;
console.log(numeroSecreto);

mensagemInicial();

function gerarNumeroSecreto() {
    let numeroGerado = parseInt(Math.random() * numeroMaximo + 1);
    console.log(listaDeNumerosSorteados);

    if(listaDeNumerosSorteados.length == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroGerado)){
        return gerarNumeroSecreto();
    }

    listaDeNumerosSorteados.push(numeroGerado);
    return numeroGerado;
}

function exibirTextoNaTela(tag, texto) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function verificarChute() {
    tentativas++;
    let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', `Acertou em ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let maiorMenor = numeroSecreto > chute ? 'maior' : 'menor';
        exibirTextoNaTela('p', `O número secreto é ${maiorMenor}.`);
        limparCampo();
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}