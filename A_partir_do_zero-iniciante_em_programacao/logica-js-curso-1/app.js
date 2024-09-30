alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        let maiorMenor = numeroSecreto > chute ? 'maior' : 'menor';
        alert(`O número secreto é ${maiorMenor} que ${chute}`);

        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
